import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Register Service Worker for Performance
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Render the app first
createRoot(document.getElementById("root")!).render(<App />);

// Initialize performance optimizations after app is rendered (non-blocking)
setTimeout(() => {
  try {
    import('./utils/performanceOptimizations').then(({ initializePerformanceOptimizations, preloadCriticalResources }) => {
      initializePerformanceOptimizations();
      preloadCriticalResources();
    }).catch(console.warn);
    
    import('./utils/coreWebVitals').then(({ initializeCoreWebVitals }) => {
      initializeCoreWebVitals();
    }).catch(console.warn);
    
    import('./utils/accessibility').then(({ initializeAccessibility }) => {
      initializeAccessibility();
    }).catch(console.warn);
    
    import('./utils/webVitalsReporter').then(({ initWebVitalsTracking }) => {
      initWebVitalsTracking();
    }).catch(console.warn);
  } catch (error) {
    console.warn('Performance optimizations failed to load:', error);
  }
}, 0);
