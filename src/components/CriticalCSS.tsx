import { useEffect } from 'react';

/**
 * Component to inject critical CSS for above-the-fold content
 * This CSS is inlined to prevent render-blocking
 */
const CriticalCSS = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'critical-css';
    
    style.textContent = `
      /* Critical styles for above-the-fold content */
      
      /* Font optimization */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff2') format('woff2');
      }
      
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff2') format('woff2');
      }
      
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url('https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff2') format('woff2');
      }
      
      /* Critical hero section styles */
      .hero-section {
        min-height: 100vh;
        background-color: #000;
        position: relative;
        overflow: hidden;
      }
      
      .hero-video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      .hero-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
      }
      
      /* Prevent layout shift for video containers */
      .aspect-video {
        aspect-ratio: 16 / 9;
        width: 100%;
      }
      
      .aspect-square {
        aspect-ratio: 1;
        width: 100%;
      }
      
      /* Loading skeleton for images and videos */
      .loading-skeleton {
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: skeleton-loading 1.5s infinite;
      }
      
      @keyframes skeleton-loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      
      /* Performance optimizations */
      * {
        box-sizing: border-box;
      }
      
      img, video {
        max-width: 100%;
        height: auto;
      }
      
      /* Mobile-specific optimizations */
      @media (max-width: 768px) {
        .hero-section {
          min-height: 100vh;
        }
        
        /* Reduce motion for better performance */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      }
    `;
    
    document.head.appendChild(style);

    return () => {
      const existingStyle = document.getElementById('critical-css');
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
    };
  }, []);

  return null;
};

export default CriticalCSS;