// Performance Optimization Utilities

/**
 * Preload critical resources
 */
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return;

  // Preload critical fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
  fontLink.as = 'style';
  fontLink.crossOrigin = 'anonymous';
  document.head.appendChild(fontLink);

  // Preload critical images
  const criticalImages = [
    'https://res.cloudinary.com/dc1zzgsjw/image/upload/f_auto,q_auto,w_400/v1758145901/sales_3_baw70d.png',
    'https://res.cloudinary.com/dsergeqc9/image/upload/f_auto,q_auto,w_1200/v1758129785/homepage_background_poster.jpg'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = src;
    link.as = 'image';
    document.head.appendChild(link);
  });
};

/**
 * Optimize Cloudinary URLs for better performance
 */
export const optimizeCloudinaryUrl = (url: string, options: {
  width?: number;
  quality?: 'auto' | number;
  format?: 'auto' | 'webp' | 'avif';
} = {}): string => {
  if (!url.includes('cloudinary.com')) return url;

  const { width = 800, quality = 'auto', format = 'auto' } = options;
  
  // Check if already optimized
  if (url.includes('f_auto')) return url;

  const params = [
    `f_${format}`,
    `q_${quality}`,
    width && `w_${width}`
  ].filter(Boolean).join(',');

  return url.replace('/upload/', `/upload/${params}/`);
};

/**
 * Lazy load images with Intersection Observer
 */
export const createImageObserver = (callback: (entries: IntersectionObserverEntry[]) => void) => {
  if (typeof window === 'undefined' || !window.IntersectionObserver) {
    return null;
  }

  return new IntersectionObserver(callback, {
    rootMargin: '50px 0px',
    threshold: 0.1
  });
};

/**
 * Debounce utility for performance
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle utility for scroll events
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Monitor Core Web Vitals
 */
export const measureWebVitals = () => {
  if (typeof window === 'undefined') return;

  // Largest Contentful Paint
  const observeLCP = () => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
    // Track LCP in production analytics instead of console
    if (process.env.NODE_ENV === 'development') {
      console.log('LCP:', lastEntry.startTime);
    }
    });
    observer.observe({ type: 'largest-contentful-paint', buffered: true });
  };

  // First Input Delay
  const observeFID = () => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        // Track FID in production analytics instead of console
        if (process.env.NODE_ENV === 'development') {
          console.log('FID:', (entry as any).processingStart - entry.startTime);
        }
      });
    });
    observer.observe({ type: 'first-input', buffered: true });
  };

  // Cumulative Layout Shift
  const observeCLS = () => {
    let cls = 0;
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (!(entry as any).hadRecentInput) {
          cls += (entry as any).value;
        }
      });
      // Track CLS in production analytics instead of console
      if (process.env.NODE_ENV === 'development') {
        console.log('CLS:', cls);
      }
    });
    observer.observe({ type: 'layout-shift', buffered: true });
  };

  // Initialize observers
  if ('PerformanceObserver' in window) {
    try {
      observeLCP();
      observeFID();
      observeCLS();
    } catch (error) {
      console.warn('Performance monitoring not supported:', error);
    }
  }
};

/**
 * Critical rendering path optimization
 */
export const optimizeCriticalPath = () => {
  if (typeof window === 'undefined') return;

  // Remove unused CSS (simplified approach)
  const removeUnusedCSS = () => {
    const stylesheets = Array.from(document.styleSheets);
    stylesheets.forEach(sheet => {
      try {
        const rules = Array.from(sheet.cssRules || []);
        // This is a simplified example - in production you'd use tools like PurgeCSS
        // Track stylesheet rules in development only
        if (process.env.NODE_ENV === 'development') {
          console.log(`Stylesheet has ${rules.length} rules`);
        }
      } catch (error) {
        // Cross-origin stylesheets can't be accessed
      }
    });
  };

  // Defer non-critical JavaScript
  const deferNonCriticalJS = () => {
    const scripts = document.querySelectorAll('script[data-defer="true"]');
    scripts.forEach(script => {
      script.setAttribute('defer', 'true');
    });
  };

  removeUnusedCSS();
  deferNonCriticalJS();
};

/**
 * Initialize all performance optimizations
 */
export const initializePerformanceOptimizations = () => {
  if (typeof window === 'undefined') return;

  // Run optimizations on DOM content loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      preloadCriticalResources();
      optimizeCriticalPath();
      measureWebVitals();
    });
  } else {
    preloadCriticalResources();
    optimizeCriticalPath();
    measureWebVitals();
  }
};