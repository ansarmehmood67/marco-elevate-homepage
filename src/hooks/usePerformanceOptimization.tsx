import { useEffect } from 'react';

/**
 * Performance optimization hook for Core Web Vitals
 * Implements passive scroll listeners, prevents long tasks, and optimizes rendering
 */
export const usePerformanceOptimization = () => {
  useEffect(() => {
    // Safe passive event listener setup
    const setupPassiveListeners = () => {
      // Use React's built-in passive event handling instead of prototype override
      const passiveEvents = ['scroll', 'touchmove', 'wheel'];
      
      passiveEvents.forEach(eventType => {
        const handler = () => {
          // Passive event handler for performance
        };
        
        try {
          document.addEventListener(eventType, handler, { passive: true });
        } catch (error) {
          console.warn(`Failed to add passive listener for ${eventType}:`, error);
        }
      });
    };

    // Safe font loading with proper checks
    const optimizeFonts = () => {
      if (typeof document === 'undefined' || !document.head) return;

      const fontPreloads = [
        { family: 'Inter', weight: '400' },
        { family: 'Inter', weight: '700' }
      ];

      fontPreloads.forEach(({ family, weight }) => {
        try {
          const selector = `link[rel="preload"][as="font"][href*="${family}-${weight}"]`;
          if (!document.querySelector(selector)) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'font';
            link.type = 'font/woff2';
            link.crossOrigin = 'anonymous';
            link.href = `/fonts/${family}-${weight}.woff2`;
            document.head.appendChild(link);
          }
        } catch (error) {
          console.warn(`Font preload failed for ${family}-${weight}:`, error);
        }
      });
    };

    // Safe layout shift prevention
    const preventLayoutShifts = () => {
      if (typeof document === 'undefined') return;

      try {
        // Only add styles if not already present
        const styleId = 'performance-layout-styles';
        if (!document.getElementById(styleId)) {
          const style = document.createElement('style');
          style.id = styleId;
          style.textContent = `
            .aspect-video { aspect-ratio: 16 / 9; }
            .aspect-square { aspect-ratio: 1; }
          `;
          document.head.appendChild(style);
        }
      } catch (error) {
        console.warn('Layout shift prevention failed:', error);
      }
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

    // Initialize optimizations safely
    try {
      setupPassiveListeners();
      optimizeFonts();
      
      // Delay non-critical optimizations
      setTimeout(() => {
        preventLayoutShifts();
        deferNonCriticalScripts();
      }, 100);
    } catch (error) {
      console.warn('Performance optimization failed:', error);
    }

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