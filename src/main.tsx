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

// Consolidated service worker registration (removed duplicate)
// Service worker is now handled in CriticalResourceLoader

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
