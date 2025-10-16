// Service Worker registration utility
export const registerServiceWorker = async (): Promise<void> => {
  if ('serviceWorker' in navigator && import.meta.env.PROD) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      
      // Service Worker registered successfully (silent in production)
      
      // Listen for updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content is available (handle silently or show user notification)
            }
          });
        }
      });
      
    } catch (error) {
      // Silently handle service worker registration errors in production
    }
  }
};

// Performance monitoring with better error handling
export const initPerformanceMonitoring = (): void => {
  if (import.meta.env.DEV) {
    // Development performance logging
    let performanceEntries: any[] = [];
    
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        performanceEntries.push({
          name: entry.name,
          type: entry.entryType,
          startTime: entry.startTime,
          duration: entry.duration,
          timestamp: Date.now()
        });
        
        // Store metrics without console logging to reduce noise
        // Metrics are still being collected for analysis
      });
    });
    
    // Observe different entry types
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      // Silently handle Performance Observer compatibility issues
    }
    
    // Resource timing analysis
    window.addEventListener('load', () => {
      setTimeout(() => {
        const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
        const largeResources = resources.filter(resource => 
          resource.transferSize > 100000 // > 100KB
        );
        
        // Resource analysis for development debugging (silent)
        const jsResources = resources.filter(r => r.name.includes('.js'));
        const totalJSSize = jsResources.reduce((sum, r) => sum + (r.transferSize || 0), 0);
        
        // Store metrics silently for potential debugging
        (window as any).__performanceMetrics = {
          largeResources: largeResources.length,
          totalJSSize: Math.round(totalJSSize / 1024)
        };
        
      }, 1000);
    });
  }
};

export default { registerServiceWorker, initPerformanceMonitoring };
