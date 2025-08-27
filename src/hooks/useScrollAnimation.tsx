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
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          
          // Clear any existing timeouts
          timeoutsRef.current.forEach(clearTimeout);
          timeoutsRef.current = [];
          
          // Trigger staggered animations with better performance
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
        }
      },
      { 
        threshold: 0.15,
        rootMargin: '80px 0px' // Trigger earlier for smoother experience
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
  }, [itemCount, staggerDelay, hasTriggered]);

  return { ref, visibleItems };
};