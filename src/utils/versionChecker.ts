/**
 * Version Checker Utility
 * This utility helps ensure users always get the latest version of the app
 * by checking for updates and prompting them to refresh if needed
 */

const APP_VERSION = '3.0.0'; // Must match package.json version
const VERSION_CHECK_INTERVAL = 5 * 60 * 1000; // Check every 5 minutes

/**
 * Store the current version in localStorage
 */
export const storeCurrentVersion = () => {
    try {
        localStorage.setItem('app_version', APP_VERSION);
    } catch (error) {
        console.error('Failed to store version:', error);
    }
};

/**
 * Check if the app version has changed
 * @returns true if version has changed, false otherwise
 */
export const hasVersionChanged = (): boolean => {
    try {
        const storedVersion = localStorage.getItem('app_version');
        return storedVersion !== null && storedVersion !== APP_VERSION;
    } catch (error) {
        console.error('Failed to check version:', error);
        return false;
    }
};

/**
 * Clear all caches and reload the page
 */
export const forceRefresh = async () => {
    try {
        // Clear localStorage except for essential items
        const essentialKeys = ['theme']; // Add any keys you want to preserve
        const keysToRemove: string[] = [];
        
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && !essentialKeys.includes(key)) {
                keysToRemove.push(key);
            }
        }
        
        keysToRemove.forEach(key => localStorage.removeItem(key));

        // Clear all caches
        if ('caches' in window) {
            const cacheNames = await caches.keys();
            await Promise.all(
                cacheNames.map(cacheName => caches.delete(cacheName))
            );
        }

        // Unregister service workers
        if ('serviceWorker' in navigator) {
            const registrations = await navigator.serviceWorker.getRegistrations();
            await Promise.all(
                registrations.map(registration => registration.unregister())
            );
        }

        // Store the new version
        storeCurrentVersion();

        // Force reload without cache
        window.location.reload();
    } catch (error) {
        console.error('Failed to force refresh:', error);
        // Fallback: just reload normally
        window.location.reload();
    }
};

/**
 * Show a notification to the user about the new version
 * Uses a custom notification that's more user-friendly than browser alert
 */
export const showUpdateNotification = () => {
    // Create a styled notification
    const notification = document.createElement('div');
    notification.id = 'version-update-notification';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        max-width: 400px;
        font-family: system-ui, -apple-system, sans-serif;
        animation: slideIn 0.3s ease-out;
    `;

    notification.innerHTML = `
        <style>
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            #version-update-notification button {
                cursor: pointer;
                margin-top: 15px;
                padding: 10px 20px;
                border: none;
                border-radius: 6px;
                font-weight: 600;
                font-size: 14px;
                transition: transform 0.2s;
            }
            #version-update-notification button:hover {
                transform: scale(1.05);
            }
            .update-btn {
                background: white;
                color: #667eea;
                margin-right: 10px;
            }
            .later-btn {
                background: rgba(255, 255, 255, 0.2);
                color: white;
            }
        </style>
        <div style="font-size: 24px; margin-bottom: 10px;">🎉</div>
        <div style="font-size: 18px; font-weight: 600; margin-bottom: 8px;">New Version Available!</div>
        <div style="font-size: 14px; opacity: 0.9; margin-bottom: 15px;">
            We've made improvements to India Innovates. Please refresh to get the latest updates and features.
        </div>
        <div>
            <button class="update-btn" onclick="window.__forceRefresh()">Update Now</button>
            <button class="later-btn" onclick="window.__dismissUpdate()">Later</button>
        </div>
    `;

    // Add to body
    document.body.appendChild(notification);

    // Set up global functions for buttons
    (window as any).__forceRefresh = () => {
        forceRefresh();
    };

    (window as any).__dismissUpdate = () => {
        notification.remove();
        // Show again after 10 minutes if they dismiss
        setTimeout(() => {
            if (hasVersionChanged()) {
                showUpdateNotification();
            }
        }, 10 * 60 * 1000);
    };
};

/**
 * Initialize version checking
 * Call this in your main App component
 */
export const initializeVersionChecker = () => {
    // Check version on load
    if (hasVersionChanged()) {
        console.log('New version detected! Current:', APP_VERSION);
        showUpdateNotification();
    } else {
        storeCurrentVersion();
    }

    // Periodically check for version changes
    setInterval(() => {
        if (hasVersionChanged()) {
            showUpdateNotification();
        }
    }, VERSION_CHECK_INTERVAL);

    // Listen for service worker updates
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.addEventListener('message', (event) => {
            if (event.data && event.data.type === 'SW_UPDATED') {
                console.log('Service Worker updated to:', event.data.version);
                // Check if app version changed
                if (hasVersionChanged()) {
                    showUpdateNotification();
                }
            }
        });

        // Check for waiting service worker on load
        navigator.serviceWorker.ready.then((registration) => {
            if (registration.waiting) {
                console.log('Service Worker waiting to activate');
                showUpdateNotification();
            }
        });
    }
};

/**
 * Get current app version
 */
export const getAppVersion = () => APP_VERSION;
