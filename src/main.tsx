import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initializePerformanceOptimizations, preloadCriticalResources } from './utils/performanceOptimizations'
import { initializeCoreWebVitals } from '@/utils/coreWebVitals'
import { initializeAccessibility } from '@/utils/accessibility'
import { initWebVitalsTracking } from '@/utils/webVitalsReporter'

// Initialize Core Web Vitals optimizations (critical)
initializeCoreWebVitals();

// Initialize accessibility enhancements
initializeAccessibility();

// Initialize Web Vitals tracking
initWebVitalsTracking();

// Initialize additional performance optimizations
initializePerformanceOptimizations();

// Preload critical resources
preloadCriticalResources();

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

createRoot(document.getElementById("root")!).render(<App />);
