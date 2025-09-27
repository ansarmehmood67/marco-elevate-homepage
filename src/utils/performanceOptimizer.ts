/**
 * Performance optimization utilities for smooth scrolling and animations
 */

// Add CSS optimization classes to elements
export const addPerformanceOptimizations = (element: HTMLElement) => {
  element.style.willChange = 'transform';
  element.style.transform = 'translate3d(0, 0, 0)';
  element.style.backfaceVisibility = 'hidden';
};

// Remove optimization classes when not needed
export const removePerformanceOptimizations = (element: HTMLElement) => {
  element.style.willChange = 'auto';
  element.style.transform = '';
  element.style.backfaceVisibility = '';
};

// Throttle function optimized for scroll events
export const throttleScroll = (func: Function, limit: number = 16) => {
  let inThrottle: boolean;
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      requestAnimationFrame(() => {
        inThrottle = false;
      });
    }
  };
};

// Debounce function for resize events
export const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function(this: any, ...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Initialize passive listeners for better scroll performance
export const addPassiveScrollListener = (
  element: HTMLElement | Window,
  eventType: string,
  handler: EventListener
) => {
  element.addEventListener(eventType, handler, { passive: true });
  
  return () => {
    element.removeEventListener(eventType, handler);
  };
};

// Performance monitoring
export const measureScrollPerformance = () => {
  let frameCount = 0;
  let lastTime = performance.now();
  
  const measureFPS = () => {
    frameCount++;
    const currentTime = performance.now();
    
    if (currentTime - lastTime >= 1000) {
      const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
      
      // Log performance metrics for debugging
      if (fps < 50) {
        console.warn(`Low FPS detected: ${fps}fps`);
      }
      
      frameCount = 0;
      lastTime = currentTime;
    }
    
    requestAnimationFrame(measureFPS);
  };
  
  if (process.env.NODE_ENV === 'development') {
    requestAnimationFrame(measureFPS);
  }
};

// Initialize all performance optimizations
export const initScrollPerformance = () => {
  // Add CSS containment for better rendering performance
  const style = document.createElement('style');
  style.textContent = `
    .scroll-optimized {
      contain: layout style paint;
      will-change: transform;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
    }
    
    .animation-optimized {
      will-change: transform, opacity;
      transform: translate3d(0, 0, 0);
    }
    
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
  `;
  
  document.head.appendChild(style);
  
  // Start performance monitoring in development
  if (process.env.NODE_ENV === 'development') {
    measureScrollPerformance();
  }
};