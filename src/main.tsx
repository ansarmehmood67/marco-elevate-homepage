import React from 'react'
import ReactDOM from 'react-dom/client'
import { initPerformanceOptimizations } from './utils/performanceUtils'
import App from './App.tsx'
import './index.css'
import ErrorBoundary from '@/components/ErrorBoundary'

// Temporarily disabled performance optimizations for troubleshooting
// if (typeof window !== 'undefined') {
//   try {
//     initPerformanceOptimizations();
//   } catch (error) {
//     // Performance optimization failed silently
//   }
// }

// Temporarily disabled service worker for troubleshooting
// if ('serviceWorker' in navigator && typeof window !== 'undefined') {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/sw.js')
//       .catch(() => {
//         // Service worker registration failed silently
//       });
//   });
// }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
