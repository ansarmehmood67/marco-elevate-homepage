import { useEffect } from 'react';

/**
 * Performance optimization hook for Core Web Vitals
 * Implements passive scroll listeners, prevents long tasks, and optimizes rendering
 */
export const usePerformanceOptimization = () => {
  useEffect(() => {
    // Add passive scroll listeners for better INP/TBT
    const addPassiveListeners = () => {
      const options = { passive: true };
      
      // Override default scroll listeners to be passive
      const originalAddEventListener = EventTarget.prototype.addEventListener;
      EventTarget.prototype.addEventListener = function(type, listener, options = {}) {
        if (type === 'scroll' || type === 'touchmove' || type === 'wheel') {
          if (typeof options === 'boolean') {
            options = { capture: options, passive: true };
          } else {
            options.passive = true;
          }
        }
        return originalAddEventListener.call(this, type, listener, options);
      };
    };

    // Enhanced font loading optimization with error handling
    const optimizeFonts = () => {
      try {
        const fontPreloads = [
          { family: 'Inter', weight: '400', display: 'swap' },
          { family: 'Inter', weight: '700', display: 'swap' },
          { family: 'Roboto', weight: '400', display: 'swap' }
        ];

        fontPreloads.forEach(({ family, weight, display }) => {
          try {
            const existingLink = document.querySelector(`link[rel="preload"][as="font"][href*="${family}"]`);
            if (!existingLink && document.head) {
              const link = document.createElement('link');
              link.rel = 'preload';
              link.as = 'font';
              link.type = 'font/woff2';
              link.crossOrigin = 'anonymous';
              link.href = `https://fonts.gstatic.com/s/${family.toLowerCase()}/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff2`;
              
              const style = document.createElement('style');
              style.textContent = `
                @font-face {
                  font-family: '${family}';
                  font-weight: ${weight};
                  font-display: ${display};
                  font-style: normal;
                }
              `;
              document.head.appendChild(link);
              document.head.appendChild(style);
            }
          } catch (error) {
            // Font loading failed silently
          }
        });
      } catch (error) {
        // Font optimization failed silently
      }
    };

    // Prevent layout shifts by reserving space for dynamic content
    const preventLayoutShifts = () => {
      // Add aspect ratio containers for videos and images
      const videos = document.querySelectorAll('video:not([width])');
      videos.forEach((video) => {
        video.setAttribute('width', '1920');
        video.setAttribute('height', '1080');
      });

      // Add loading skeleton styles
      const style = document.createElement('style');
      style.textContent = `
        .loading-skeleton {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: loading 1.5s infinite;
        }
        
        @keyframes loading {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        
        .aspect-video { aspect-ratio: 16 / 9; }
        .aspect-square { aspect-ratio: 1; }
      `;
      document.head.appendChild(style);
    };

    // Defer non-critical scripts
    const deferNonCriticalScripts = () => {
      const scripts = document.querySelectorAll('script:not([async]):not([defer])') as NodeListOf<HTMLScriptElement>;
      scripts.forEach((script) => {
        if (!script.src.includes('recaptcha') && !script.innerHTML.includes('critical')) {
          script.defer = true;
        }
      });
    };

    // Initialize optimizations
    addPassiveListeners();
    optimizeFonts();
    
    // Delay non-critical optimizations to not block initial render
    setTimeout(() => {
      preventLayoutShifts();
      deferNonCriticalScripts();
    }, 100);

    // Cleanup function
    return () => {
      // Reset addEventListener if needed (though not usually necessary)
    };
  }, []);

  // Return performance utilities
  return {
    // Utility to wrap images with loading optimization
    optimizeImage: (src: string, alt: string, className?: string) => ({
      src,
      alt,
      loading: 'lazy' as const,
      decoding: 'async' as const,
      className: `${className || ''} transition-opacity duration-300`,
      onLoad: (e: React.SyntheticEvent<HTMLImageElement>) => {
        e.currentTarget.style.opacity = '1';
      },
      onError: (e: React.SyntheticEvent<HTMLImageElement>) => {
        e.currentTarget.style.opacity = '0.5';
      }
    }),

    // Utility to wrap videos with loading optimization
    optimizeVideo: (src: string, poster?: string) => ({
      src,
      poster,
      preload: 'metadata' as const,
      muted: true,
      playsInline: true,
      loading: 'lazy' as const,
      className: 'w-full h-full object-cover'
    })
  };
};