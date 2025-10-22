// Enhanced Service Worker with advanced caching strategies
const CACHE_VERSION = 'india-innovates-v3.0.0'; // IMPORTANT: Increment this version with every deployment
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const DYNAMIC_CACHE = `${CACHE_VERSION}-dynamic`;
const IMAGE_CACHE = `${CACHE_VERSION}-images`;
const FONT_CACHE = `${CACHE_VERSION}-fonts`;

// Cache configuration
const MAX_CACHE_SIZE = 50; // Maximum number of items in dynamic cache
const CACHE_EXPIRY = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

// Static assets to cache immediately
const STATIC_CACHE_URLS = [
    '/',
    '/index.html',
    '/manifest.json',
];

// Helper: Limit cache size
const limitCacheSize = async (cacheName, maxSize) => {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    if (keys.length > maxSize) {
        await cache.delete(keys[0]);
        await limitCacheSize(cacheName, maxSize);
    }
};

// Helper: Check if cache is expired
const isCacheExpired = (response) => {
    const cachedTime = response.headers.get('sw-cached-time');
    if (!cachedTime) return false;
    return Date.now() - parseInt(cachedTime) > CACHE_EXPIRY;
};

// Install event - cache static assets with improved error handling
self.addEventListener('install', (event) => {
    console.log('[SW] Installing Service Worker...', CACHE_VERSION);
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then((cache) => {
                console.log('[SW] Caching static assets');
                return cache.addAll(STATIC_CACHE_URLS.map(url => new Request(url, { cache: 'reload' })));
            })
            .then(() => {
                console.log('[SW] Skip waiting - activating new service worker immediately');
                return self.skipWaiting(); // Activate immediately
            })
            .catch((err) => {
                console.error('[SW] Installation failed:', err);
            })
    );
});

// Activate event - clean up old caches aggressively
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating Service Worker...', CACHE_VERSION);
    const currentCaches = [STATIC_CACHE, DYNAMIC_CACHE, IMAGE_CACHE, FONT_CACHE];

    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames
                        .filter((cacheName) => !currentCaches.includes(cacheName))
                        .map((cacheName) => {
                            console.log('[SW] Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        })
                );
            })
            .then(() => {
                console.log('[SW] Claiming clients - taking control immediately');
                return self.clients.claim(); // Take control of all pages immediately
            })
            .then(() => {
                // Notify all clients about the update
                return self.clients.matchAll().then(clients => {
                    clients.forEach(client => {
                        client.postMessage({
                            type: 'SW_UPDATED',
                            version: CACHE_VERSION
                        });
                    });
                });
            })
    );
});

// Advanced fetch strategies
const cacheFirst = async (request, cacheName) => {
    const cached = await caches.match(request);
    if (cached && !isCacheExpired(cached)) {
        return cached;
    }

    try {
        const fresh = await fetch(request);
        if (fresh.status === 200) {
            const cache = await caches.open(cacheName);
            const clonedResponse = fresh.clone();
            const headers = new Headers(clonedResponse.headers);
            headers.append('sw-cached-time', Date.now().toString());
            const modifiedResponse = new Response(clonedResponse.body, {
                status: clonedResponse.status,
                statusText: clonedResponse.statusText,
                headers: headers
            });
            cache.put(request, modifiedResponse);
            await limitCacheSize(cacheName, MAX_CACHE_SIZE);
        }
        return fresh;
    } catch (error) {
        if (cached) return cached;
        throw error;
    }
};

const networkFirst = async (request, cacheName) => {
    try {
        const fresh = await fetch(request);
        if (fresh.status === 200) {
            const cache = await caches.open(cacheName);
            cache.put(request, fresh.clone());
            await limitCacheSize(cacheName, MAX_CACHE_SIZE);
        }
        return fresh;
    } catch (error) {
        const cached = await caches.match(request);
        if (cached) return cached;
        throw error;
    }
};

// Fetch event with strategy-based routing
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Only handle GET requests
    if (request.method !== 'GET') return;

    // Skip cross-origin requests (except for CDN resources)
    if (url.origin !== self.location.origin && !url.origin.includes('cdn')) return;

    // API requests - network first
    if (url.pathname.startsWith('/api/')) {
        event.respondWith(networkFirst(request, DYNAMIC_CACHE));
        return;
    }

    // Images - cache first with expiry
    if (request.destination === 'image' ||
        url.pathname.match(/\.(jpg|jpeg|png|gif|webp|avif|svg|ico)$/i)) {
        event.respondWith(cacheFirst(request, IMAGE_CACHE));
        return;
    }

    // Fonts - cache first (long-term)
    if (request.destination === 'font' ||
        url.pathname.match(/\.(woff|woff2|ttf|eot|otf)$/i)) {
        event.respondWith(cacheFirst(request, FONT_CACHE));
        return;
    }

    // JS/CSS - cache first with revalidation
    if (request.destination === 'script' || request.destination === 'style' ||
        url.pathname.match(/\.(js|css)$/i)) {
        event.respondWith(
            caches.match(request).then(cached => {
                const fetchPromise = fetch(request).then(fresh => {
                    if (fresh.status === 200) {
                        caches.open(STATIC_CACHE).then(cache => {
                            cache.put(request, fresh.clone());
                        });
                    }
                    return fresh;
                }).catch(() => cached);
                return cached || fetchPromise;
            })
        );
        return;
    }

    // Documents - network first with fallback
    if (request.destination === 'document' || request.mode === 'navigate') {
        event.respondWith(
            fetch(request)
                .then(response => {
                    if (response.status === 200) {
                        const cache = caches.open(DYNAMIC_CACHE);
                        cache.then(c => c.put(request, response.clone()));
                    }
                    return response;
                })
                .catch(async () => {
                    const cached = await caches.match(request);
                    if (cached) return cached;

                    // Return offline fallback
                    const offlinePage = await caches.match('/');
                    if (offlinePage) return offlinePage;

                    // Last resort: create a basic offline page
                    return new Response(
                        '<html><body><h1>Offline</h1><p>Please check your internet connection.</p></body></html>',
                        { headers: { 'Content-Type': 'text/html' } }
                    );
                })
        );
        return;
    }

    // Default: network first
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
});

// Background sync for offline actions (if needed later)
self.addEventListener('sync', (event) => {
    console.log('[SW] Background sync:', event.tag);
    // Add background sync logic here if needed
});

// Push notifications (if needed later)
self.addEventListener('push', (event) => {
    console.log('[SW] Push notification received');
    // Add push notification logic here if needed
});
