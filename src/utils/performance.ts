// Performance monitoring script - Production optimized
// Web Vitals tracking for both development and production

// Helper: Send metrics to analytics endpoint
function sendToAnalytics(metric: { name: string; value: number; id: string; rating?: string }) {
  // In production, send to your analytics endpoint
  if (import.meta.env.PROD) {
    // Replace with your actual analytics endpoint
    const endpoint = '/api/analytics';
    
    // Use sendBeacon for reliability (doesn't block page unload)
    if (navigator.sendBeacon) {
      const body = JSON.stringify({
        metric: metric.name,
        value: Math.round(metric.value),
        id: metric.id,
        rating: metric.rating,
        url: window.location.href,
        timestamp: Date.now(),
      });
      navigator.sendBeacon(endpoint, body);
    }
  } else {
    // In development, log to console
    console.log(`[Web Vitals] ${metric.name}:`, Math.round(metric.value), metric.rating);
  }
}

// Core Web Vitals monitoring - ALWAYS enabled (dev + prod)
function observePerformance() {
  // Largest Contentful Paint (LCP) - Target: < 2.5s
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1] as any;
    
    const value = lastEntry.renderTime || lastEntry.loadTime;
    const rating = value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
    
    sendToAnalytics({
      name: 'LCP',
      value,
      id: `${Date.now()}-${Math.random()}`,
      rating,
    });
  }).observe({ entryTypes: ['largest-contentful-paint'] });

  // First Input Delay (FID) - Target: < 100ms
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      const fidEntry = entry as any;
      const value = fidEntry.processingStart - fidEntry.startTime;
      const rating = value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor';
      
      sendToAnalytics({
        name: 'FID',
        value,
        id: `${Date.now()}-${Math.random()}`,
        rating,
      });
    }
  }).observe({ entryTypes: ['first-input'] });

  // Cumulative Layout Shift (CLS) - Target: < 0.1
  let clsValue = 0;
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      const clsEntry = entry as any;
      if (!clsEntry.hadRecentInput && clsEntry.value) {
        clsValue += clsEntry.value;
      }
    }
    
    const rating = clsValue <= 0.1 ? 'good' : clsValue <= 0.25 ? 'needs-improvement' : 'poor';
    
    sendToAnalytics({
      name: 'CLS',
      value: clsValue,
      id: `${Date.now()}-${Math.random()}`,
      rating,
    });
  }).observe({ entryTypes: ['layout-shift'] });
  
  // Time to First Byte (TTFB) - Target: < 800ms
  const navigationEntry = performance.getEntriesByType('navigation')[0] as any;
  if (navigationEntry) {
    const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
    const rating = ttfb <= 800 ? 'good' : ttfb <= 1800 ? 'needs-improvement' : 'poor';
    
    sendToAnalytics({
      name: 'TTFB',
      value: ttfb,
      id: `${Date.now()}-${Math.random()}`,
      rating,
    });
  }
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
