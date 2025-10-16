// Service Worker for better caching and offline experience
const CACHE_NAME = 'crackthru-v1';
const STATIC_CACHE_URLS = [
    '/',
    // Optimized images
    '/optimized/bgct-desktop.webp',
    '/optimized/bgct-tablet.webp',
    '/optimized/bgct-mobile.webp',
    '/optimized/1.webp',
    '/optimized/2.webp',
    '/optimized/3.webp',
    '/optimized/4.webp',
    // Fonts
    '/fonts/poppins-400.woff2',
    '/fonts/poppins-600.woff2',
    '/fonts/poppins-700.woff2',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(STATIC_CACHE_URLS))
            .then(() => self.skipWaiting())
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames
                        .filter((cacheName) => cacheName !== CACHE_NAME)
                        .map((cacheName) => caches.delete(cacheName))
                );
            })
            .then(() => self.clients.claim())
    );
});

// Fetch event - serve from cache when possible
self.addEventListener('fetch', (event) => {
    // Only handle GET requests
    if (event.request.method !== 'GET') return;

    // Skip cross-origin requests
    if (!event.request.url.startsWith(self.location.origin)) return;

    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Return cached version if available
                if (response) {
                    return response;
                }

                // Otherwise fetch from network
                return fetch(event.request)
                    .then((response) => {
                        // Don't cache if not a valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Cache images and static assets
                        if (event.request.destination === 'image' ||
                            event.request.url.includes('/optimized/') ||
                            event.request.url.includes('.webp') ||
                            event.request.url.includes('.jpg') ||
                            event.request.url.includes('.png')) {

                            const responseToCache = response.clone();
                            caches.open(CACHE_NAME)
                                .then((cache) => {
                                    cache.put(event.request, responseToCache);
                                });
                        }

                        return response;
                    })
                    .catch(() => {
                        // Return offline fallback for navigation requests
                        if (event.request.destination === 'document') {
                            return caches.match('/');
                        }
                    });
            })
    );
});
