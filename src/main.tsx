import { createRoot } from 'react-dom/client'
import { initPerformanceOptimizations } from './utils/performanceUtils'
import App from './App.tsx'
import './index.css'

// Initialize performance optimizations
if (typeof window !== 'undefined') {
  initPerformanceOptimizations();
}

createRoot(document.getElementById("root")!).render(<App />);
