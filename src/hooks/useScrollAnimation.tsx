import { useEffect, useRef, useState, useCallback } from 'react';

// Throttle function for better performance
const throttle = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: any[]) => {
    if (!timeout) {
      timeout = setTimeout(() => {
        func(...args);
        timeout = null;
      }, wait);
    }
  };
};

export const useScrollAnimation = (threshold = 0.15, delay = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const setVisibleThrottled = useCallback(
    throttle((visible: boolean) => setIsVisible(visible), 32), // 30fps throttling for better performance
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            // Use requestAnimationFrame for better performance
            requestAnimationFrame(() => {
              setTimeout(() => setVisibleThrottled(true), delay);
            });
          } else {
            requestAnimationFrame(() => setVisibleThrottled(true));
          }
        }
      },
      { 
        threshold,
        rootMargin: '50px 0px' // Start animation before element fully enters viewport
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [threshold, delay, setVisibleThrottled]);

  return { ref, isVisible };
};

export const useStaggeredAnimation = (itemCount: number, staggerDelay = 30) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false));
  const ref = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  const triggerStaggeredAnimation = useCallback(() => {
    // Clear any existing timeouts
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    
    // Reset all items first
    setVisibleItems(new Array(itemCount).fill(false));
    
    // Use requestAnimationFrame for better performance
    const animate = () => {
      for (let i = 0; i < itemCount; i++) {
        const timeout = setTimeout(() => {
          setVisibleItems(prev => {
            const newState = [...prev];
            newState[i] = true;
            return newState;
          });
        }, i * staggerDelay);
        timeoutsRef.current.push(timeout);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [itemCount, staggerDelay]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggerStaggeredAnimation();
        } else {
          // Reset when out of view for better performance
          timeoutsRef.current.forEach(clearTimeout);
          timeoutsRef.current = [];
          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
          }
          setVisibleItems(new Array(itemCount).fill(false));
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
      // Cleanup timeouts and animation frames
      timeoutsRef.current.forEach(clearTimeout);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [triggerStaggeredAnimation]);

  return { ref, visibleItems };
};