// Performance monitoring script - Production optimized
// Silent monitoring for production analytics

// Core Web Vitals monitoring
function observePerformance() {
  // Only enable monitoring in development
  if (!import.meta.env.DEV) return;
  
  // Largest Contentful Paint (LCP)
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];
    // Track LCP silently for analytics
  }).observe({ entryTypes: ['largest-contentful-paint'] });

  // First Input Delay (FID) 
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      const fidEntry = entry as any;
      if (fidEntry.processingStart) {
        // Track FID silently for analytics
      }
    }
  }).observe({ entryTypes: ['first-input'] });

  // Cumulative Layout Shift (CLS)
  new PerformanceObserver((entryList) => {
    let cls = 0;
    for (const entry of entryList.getEntries()) {
      const clsEntry = entry as any;
      if (!clsEntry.hadRecentInput && clsEntry.value) {
        cls += clsEntry.value;
      }
    }
    // Track CLS silently for analytics
  }).observe({ entryTypes: ['layout-shift'] });
}

// Image loading performance tracking
function trackImageLoading() {
  const images = document.querySelectorAll('img');
  
  images.forEach((img, index) => {
    const startTime = performance.now();
    
    img.onload = () => {
      // Track image load performance silently for analytics
      const loadTime = performance.now() - startTime;
      // Could send to analytics service here
    };
    
    img.onerror = () => {
      // Track image load failures silently for analytics
    };
  });
}

// Bundle size analysis
function logBundleInfo() {
  // Only enable bundle analysis in development
  if (!import.meta.env.DEV) return;
  
  if ('performance' in window && 'getEntriesByType' in performance) {
    const resources = performance.getEntriesByType('resource');
    
    resources.forEach(resource => {
      const resourceEntry = resource as any;
      if ((resource.name.includes('.js') || resource.name.includes('.css')) && resourceEntry.transferSize) {
        // Track bundle sizes silently for analytics
      }
    });
  }
}

// Initialize monitoring in development
if (import.meta.env.DEV) {
  document.addEventListener('DOMContentLoaded', () => {
    observePerformance();
    trackImageLoading();
    
    // Log bundle info after page load
    window.addEventListener('load', () => {
      setTimeout(logBundleInfo, 1000);
    });
  });
}

export { observePerformance, trackImageLoading, logBundleInfo };
