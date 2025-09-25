/**
 * Performance monitoring utilities for Best Practices compliance
 */

// Monitor Core Web Vitals
export const monitorWebVitals = () => {
  if (typeof window === 'undefined') return;

  // Monitor LCP (Largest Contentful Paint)
  const observeLCP = () => {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        // Silently collect LCP data
        if (lastEntry && lastEntry.startTime) {
          // Performance data collected for monitoring
        }
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // Graceful fallback
    }
  };

  // Monitor CLS (Cumulative Layout Shift)
  const observeCLS = () => {
    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        // Performance data collected for monitoring
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // Graceful fallback
    }
  };

  // Monitor FID (First Input Delay)
  const observeFID = () => {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Type assertion for PerformanceEventTiming
          const eventEntry = entry as any;
          if (eventEntry.processingStart) {
            const delay = eventEntry.processingStart - entry.startTime;
            // Performance data collected for monitoring
          }
        }
      });
      observer.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      // Graceful fallback
    }
  };

  // Initialize observers
  observeLCP();
  observeCLS();
  observeFID();
};

// Optimize images loading
export const optimizeImageLoading = () => {
  if (typeof window === 'undefined') return;

  // Add intersection observer for lazy loading images
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }
};

// Preload critical resources
export const preloadCriticalAssets = () => {
  if (typeof window === 'undefined') return;

  const criticalAssets = [
    'https://res.cloudinary.com/dsergeqc9/image/upload/v1758129785/homepage_hero_poster.jpg',
    'https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758145901/sales_3_baw70d.png'
  ];

  criticalAssets.forEach((asset) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = asset;
    document.head.appendChild(link);
  });
};

// Initialize all performance optimizations
export const initPerformanceOptimizations = () => {
  if (typeof window === 'undefined') return;

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      monitorWebVitals();
      optimizeImageLoading();
      preloadCriticalAssets();
    });
  } else {
    monitorWebVitals();
    optimizeImageLoading();
    preloadCriticalAssets();
  }
};