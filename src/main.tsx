import React from 'react'
import ReactDOM from 'react-dom/client'
import { initPerformanceOptimizations } from './utils/performanceUtils'
import App from './App.tsx'
import './index.css'
import ErrorBoundary from '@/components/ErrorBoundary'

// Initialize performance optimizations safely
if (typeof window !== 'undefined') {
  try {
    initPerformanceOptimizations();
  } catch (error) {
    // Performance optimization failed silently
  }
}

// Safe service worker registration with enhanced SW
if ('serviceWorker' in navigator && typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw-enhanced.js')
      .then(registration => {
        // Service worker registered successfully
        if (registration.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        }
      })
      .catch(() => {
        // Fallback to basic service worker
        navigator.serviceWorker.register('/sw.js')
          .catch(() => {
            // Service worker registration failed silently
          });
      });
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
