import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Performance monitoring only in development
if (import.meta.env.DEV) {
  import('./utils/performance.ts');
}

// Non-blocking initialization of performance features
const initializeApp = async () => {
  // Initialize image preloading asynchronously
  import('./utils/imagePreloader.ts');
  
  // Initialize service worker and performance monitoring
  const { registerServiceWorker, initPerformanceMonitoring } = await import('./utils/serviceWorker.ts');
  registerServiceWorker();
  initPerformanceMonitoring();
};

// Initialize app immediately
createRoot(document.getElementById("root")!).render(<App />);

// Initialize performance features after app mount
initializeApp();
