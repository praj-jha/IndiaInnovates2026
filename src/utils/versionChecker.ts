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
 * Automatically update without user prompt
 * Shows a brief notification then refreshes
 */
export const showUpdateNotification = () => {
    // Create a brief loading notification
    const notification = document.createElement('div');
    notification.id = 'version-update-notification';
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 30px 40px;
        border-radius: 16px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        z-index: 10000;
        font-family: system-ui, -apple-system, sans-serif;
        text-align: center;
        animation: fadeIn 0.3s ease-out;
    `;

    notification.innerHTML = `
        <style>
            @keyframes fadeIn {
                from { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
                to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            }
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
        </style>
        <div style="font-size: 48px; margin-bottom: 15px;">🚀</div>
        <div style="font-size: 20px; font-weight: 600; margin-bottom: 10px;">
            Updating to Latest Version...
        </div>
        <div style="font-size: 14px; opacity: 0.9; margin-bottom: 20px;">
            Loading improvements
        </div>
        <div style="width: 40px; height: 40px; border: 3px solid rgba(255,255,255,0.3); border-top-color: white; border-radius: 50%; margin: 0 auto; animation: spin 1s linear infinite;"></div>
    `;

    // Add backdrop
    const backdrop = document.createElement('div');
    backdrop.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 9999;
    `;

    document.body.appendChild(backdrop);
    document.body.appendChild(notification);

    // Automatically refresh after 1.5 seconds
    setTimeout(() => {
        forceRefresh();
    }, 1500);
};

/**
 * Initialize version checking
 * Call this in your main App component
 */
export const initializeVersionChecker = () => {
    // Check version on load - auto-update immediately if version changed
    if (hasVersionChanged()) {
        console.log('New version detected! Auto-updating to:', APP_VERSION);
        showUpdateNotification();
        return; // Exit early, we're about to refresh
    } else {
        storeCurrentVersion();
    }

    // Listen for service worker updates
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.addEventListener('message', (event) => {
            if (event.data && event.data.type === 'SW_UPDATED') {
                console.log('Service Worker updated to:', event.data.version);
                // Auto-update immediately
                if (hasVersionChanged()) {
                    showUpdateNotification();
                }
            }
        });

        // Check for waiting service worker on load
        navigator.serviceWorker.ready.then((registration) => {
            if (registration.waiting) {
                console.log('Service Worker waiting to activate - auto-updating');
                showUpdateNotification();
            }
        });
    }
};

/**
 * Get current app version
 */
export const getAppVersion = () => APP_VERSION;
