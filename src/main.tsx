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

// Safe service worker registration
if ('serviceWorker' in navigator && typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .catch(() => {
        // Service worker registration failed silently
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
