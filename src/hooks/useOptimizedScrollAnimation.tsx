import { useEffect, useRef, useState, useCallback } from 'react';

// Optimized scroll animation hook with reduced timers and better performance
export const useOptimizedScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Use requestAnimationFrame for immediate, smooth transitions
          requestAnimationFrame(() => setIsVisible(true));
        }
      },
      { 
        threshold,
        rootMargin: '20px 0px' // Reduced margin for faster triggering
      }
    );

    observerRef.current = observer;
    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef && observerRef.current) {
        observerRef.current.unobserve(currentRef);
      }
      observerRef.current?.disconnect();
    };
  }, [threshold]);

  return { ref, isVisible };
};

// Fast staggered animation without excessive timers
export const useOptimizedStaggeredAnimation = (itemCount: number, staggerDelay = 40) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false));
  const ref = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const triggerAnimation = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    let startTime: number | null = null;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      
      const itemsToShow = Math.min(
        itemCount, 
        Math.floor(elapsed / staggerDelay) + 1
      );
      
      if (itemsToShow > 0) {
        setVisibleItems(prev => {
          const newState = [...prev];
          for (let i = 0; i < itemsToShow; i++) {
            newState[i] = true;
          }
          return newState;
        });
      }
      
      if (itemsToShow < itemCount) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  }, [itemCount, staggerDelay]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggerAnimation();
        }
      },
      { threshold: 0.1 }
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
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [triggerAnimation]);

  return { ref, visibleItems };
};