/**
 * Performance optimization utilities for better Core Web Vitals
 */

// Preload critical resources (disabled to prevent duplicates)
export const preloadCriticalResources = () => {
  // Resource preloading is now handled by CriticalResourceLoader to prevent duplicates
  return;
};

// Optimize images for different viewport sizes
export const getOptimizedImageSrc = (
  src: string, 
  width: number, 
  quality: number = 80
): string => {
  if (src.includes('cloudinary')) {
    return src.replace(
      '/upload/', 
      `/upload/f_auto,q_${quality},w_${width}/`
    );
  }
  
  return src;
};

// Generate responsive image srcSet
export const generateSrcSet = (
  src: string, 
  widths: number[] = [400, 800, 1200, 1600]
): string => {
  if (src.includes('cloudinary')) {
    return widths
      .map(width => `${getOptimizedImageSrc(src, width)} ${width}w`)
      .join(', ');
  }
  
  return `${src} 1x`;
};

// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Lazy load CSS
export const loadCSS = (href: string): void => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.media = 'print';
  link.onload = () => {
    link.media = 'all';
  };
  document.head.appendChild(link);
};

// Resource hints for critical paths (disabled to prevent duplicates)
export const addResourceHints = () => {
  // Resource hints are now handled in index.html to prevent duplicates
  return;
};

// Measure and log performance metrics
export const measurePerformance = () => {
  if ('performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const metrics = {
          FCP: performance.getEntriesByName('first-contentful-paint')[0]?.startTime,
          LCP: 0, // Will be measured by observer
          CLS: 0, // Will be measured by observer
          FID: 0, // Will be measured by observer
          TTFB: perfData.responseStart - perfData.requestStart,
          domContentLoaded: perfData.domContentLoadedEventEnd - perfData.fetchStart,
          loadComplete: perfData.loadEventEnd - perfData.fetchStart
        };

        // Performance metrics collected silently
      }, 0);
    });
  }
};

// Initialize all performance optimizations
export const initPerformanceOptimizations = () => {
  addResourceHints();
  measurePerformance();
};