import { useEffect } from 'react';
import { useNavigationState } from './useNavigationState';

export const useOptimizedPerformance = () => {
  const { isNavigating } = useNavigationState();

  useEffect(() => {
    // Skip performance optimizations during navigation for speed
    if (isNavigating) return;

    // Add passive listeners for better performance
    const addPassiveListeners = () => {
      const originalAddEventListener = EventTarget.prototype.addEventListener;
      EventTarget.prototype.addEventListener = function(type, listener, options) {
        if (['scroll', 'touchmove', 'wheel'].includes(type)) {
          const passiveOptions = typeof options === 'object' 
            ? { ...options, passive: true }
            : { passive: true };
          originalAddEventListener.call(this, type, listener, passiveOptions);
        } else {
          originalAddEventListener.call(this, type, listener, options);
        }
      };
    };

    // Optimize fonts with delay to not block navigation
    const optimizeFonts = () => {
      setTimeout(() => {
        const fontUrls = [
          'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
        ];
        
        fontUrls.forEach(url => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'style';
          link.href = url;
          link.onload = () => {
            link.rel = 'stylesheet';
          };
          if (!document.querySelector(`link[href="${url}"]`)) {
            document.head.appendChild(link);
          }
        });
      }, 200);
    };

    addPassiveListeners();
    optimizeFonts();
  }, [isNavigating]);

  return { isNavigating };
};