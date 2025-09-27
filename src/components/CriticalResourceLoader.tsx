import { useEffect } from 'react';

/**
 * Critical resource loader for essential assets
 * Manages font loading, image preloading, and third-party scripts
 */
export const useCriticalResourceLoader = () => {
  useEffect(() => {
    // Preload critical fonts
    const preloadFont = (url: string, weight: string) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      link.href = url;
      
      const existing = document.querySelector(`link[href="${url}"]`);
      if (!existing) {
        document.head.appendChild(link);
      }
    };

    // Critical font preloading
    preloadFont('https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff2', '400');
    preloadFont('https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyeAZ9hjp-Ek-_EeA.woff2', '700');

    // Preload critical images - removed external dependencies
    const preloadCriticalImages = () => {
      const criticalImages = [
        '/assets/logos/logo-white.png',
        '/assets/testimonials/avatars/diego-avatar.png',
        '/src/assets/marco-portrait.jpg'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        
        const existing = document.querySelector(`link[href="${src}"]`);
        if (!existing) {
          document.head.appendChild(link);
        }
      });
    };

    // Optimize third-party scripts loading
    const optimizeThirdPartyScripts = () => {
      // Defer analytics until interaction
      const deferAnalytics = () => {
        ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'].forEach(event => {
          window.addEventListener(event, () => {
            // Load analytics scripts here when user interacts
            // Analytics loading deferred until user interaction
          }, { once: true, passive: true });
        });
      };

      deferAnalytics();
    };

    // Execute optimizations
    setTimeout(preloadCriticalImages, 100);
    setTimeout(optimizeThirdPartyScripts, 200);

    // Service Worker registration for caching
    if ('serviceWorker' in navigator && import.meta.env.PROD) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(() => {
            // Service worker registered successfully
          })
          .catch(() => {
            // Service worker registration failed - graceful fallback
          });
      });
    }
  }, []);
};