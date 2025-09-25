/**
 * Safe performance monitoring utilities to prevent console errors
 */

// Safe PerformanceObserver with error handling
export const initSafePerformanceObserver = () => {
  try {
    if (typeof window === 'undefined' || !window.PerformanceObserver) {
      return;
    }

    // LCP Observer with error handling
    if (PerformanceObserver.supportedEntryTypes?.includes('largest-contentful-paint')) {
      const lcpObserver = new PerformanceObserver((entryList) => {
        try {
          const entries = entryList.getEntries();
          // Process entries silently without console logs
        } catch (error) {
          // Silent error handling
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    }

    // CLS Observer with error handling
    if (PerformanceObserver.supportedEntryTypes?.includes('layout-shift')) {
      const clsObserver = new PerformanceObserver((entryList) => {
        try {
          const entries = entryList.getEntries();
          // Process entries silently without console logs
        } catch (error) {
          // Silent error handling
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }

    // FID Observer with error handling
    if (PerformanceObserver.supportedEntryTypes?.includes('first-input')) {
      const fidObserver = new PerformanceObserver((entryList) => {
        try {
          const entries = entryList.getEntries();
          // Process entries silently without console logs
        } catch (error) {
          // Silent error handling
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    }
  } catch (error) {
    // Silent error handling - no console logs
  }
};

// Safe intersection observer cleanup
export const createSafeIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
) => {
  try {
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      return null;
    }

    return new IntersectionObserver((entries) => {
      try {
        callback(entries);
      } catch (error) {
        // Silent error handling
      }
    }, options);
  } catch (error) {
    // Silent error handling
    return null;
  }
};

// Initialize safe performance monitoring
export const initSafePerformanceMonitoring = () => {
  if (typeof window !== 'undefined') {
    try {
      initSafePerformanceObserver();
    } catch (error) {
      // Silent error handling
    }
  }
};