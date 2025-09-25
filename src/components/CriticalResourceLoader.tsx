import { useEffect } from 'react';

/**
 * Critical resource loader for essential assets
 * Manages font loading, image preloading, and third-party scripts
 */
export const useCriticalResourceLoader = () => {
  useEffect(() => {
    // All resource preloading is now handled in index.html to prevent duplicates
    // This component only handles service worker and third-party script optimizations
    
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