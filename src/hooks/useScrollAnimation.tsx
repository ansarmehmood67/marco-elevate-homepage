import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.15, delay = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
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
    };
  }, [threshold, delay]);

  return { ref, isVisible };
};

export const useStaggeredAnimation = (itemCount: number, staggerDelay = 60) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false));
  const ref = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Clear any existing timeouts
          timeoutsRef.current.forEach(clearTimeout);
          timeoutsRef.current = [];
          
          // Reset all items first
          setVisibleItems(new Array(itemCount).fill(false));
          
          // Trigger staggered animations
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
        } else {
          // Reset when out of view
          timeoutsRef.current.forEach(clearTimeout);
          timeoutsRef.current = [];
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
      // Cleanup timeouts
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, [itemCount, staggerDelay]);

  return { ref, visibleItems };
};