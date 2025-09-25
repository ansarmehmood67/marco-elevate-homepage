import { useEffect } from 'react';

/**
 * Critical resource loader for essential assets
 * Manages font loading, image preloading, and third-party scripts
 */
export const useCriticalResourceLoader = () => {
  useEffect(() => {
    // Preload critical fonts with error handling
    const preloadFont = (url: string, weight: string) => {
      try {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'font';
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
        link.href = url;
        
        const existing = document.querySelector(`link[href="${url}"]`);
        if (!existing) {
          link.onerror = () => {
            // Font preload failed silently
          };
          document.head.appendChild(link);
        }
      } catch (error) {
        // Font preload failed silently
      }
    };

    // Critical font preloading with error handling
    try {
      preloadFont('https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff2', '400');
      preloadFont('https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff2', '700');
    } catch (error) {
      // Font loading failed silently
    }

    // Images are already preloaded in index.html - no need to duplicate
    // Keeping this section for any future dynamic image preloading needs

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