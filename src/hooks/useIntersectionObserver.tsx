import { useEffect, useRef, useState, useCallback } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Centralized, safe IntersectionObserver hook with proper cleanup
 */
export const useIntersectionObserver = <T extends HTMLElement = HTMLDivElement>(
  options: UseIntersectionObserverOptions = {}
) => {
  const { threshold = 0.1, rootMargin = '50px 0px', triggerOnce = false } = options;
  
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<T>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const setVisible = useCallback((visible: boolean) => {
    if (triggerOnce && hasTriggered && !visible) return;
    
    setIsVisible(visible);
    if (visible && triggerOnce) {
      setHasTriggered(true);
    }
  }, [triggerOnce, hasTriggered]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Cleanup existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    try {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          try {
            const [entry] = entries;
            if (entry) {
              setVisible(entry.isIntersecting);
            }
          } catch (error) {
            console.warn('IntersectionObserver callback error:', error);
          }
        },
        {
          threshold,
          rootMargin,
        }
      );

      observerRef.current.observe(element);
    } catch (error) {
      console.warn('Failed to create IntersectionObserver:', error);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [threshold, rootMargin, setVisible]);

  return { ref: elementRef, isVisible };
};

/**
 * Staggered animation hook with proper cleanup
 */
export const useStaggeredIntersection = <T extends HTMLElement = HTMLDivElement>(
  itemCount: number,
  staggerDelay = 100,
  options: UseIntersectionObserverOptions = {}
) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(itemCount).fill(false)
  );
  const elementRef = useRef<T>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const cleanup = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  const triggerAnimation = useCallback(() => {
    cleanup();
    setVisibleItems(new Array(itemCount).fill(false));

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
  }, [itemCount, staggerDelay, cleanup]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Cleanup existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    try {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          try {
            const [entry] = entries;
            if (entry?.isIntersecting) {
              triggerAnimation();
            } else {
              cleanup();
              setVisibleItems(new Array(itemCount).fill(false));
            }
          } catch (error) {
            console.warn('Staggered observer callback error:', error);
          }
        },
        {
          threshold: options.threshold || 0.1,
          rootMargin: options.rootMargin || '50px 0px',
        }
      );

      observerRef.current.observe(element);
    } catch (error) {
      console.warn('Failed to create staggered observer:', error);
    }

    return () => {
      cleanup();
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [triggerAnimation, cleanup, itemCount, options.threshold, options.rootMargin]);

  return { ref: elementRef, visibleItems };
};