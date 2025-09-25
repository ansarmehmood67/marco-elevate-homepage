import { useIntersectionObserver, useStaggeredIntersection } from './useIntersectionObserver';

export const useScrollAnimation = (threshold = 0.15, delay = 0) => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold,
    rootMargin: '50px 0px',
    triggerOnce: delay > 0
  });

  return { ref, isVisible };
};

export const useStaggeredAnimation = (itemCount: number, staggerDelay = 60) => {
  const { ref, visibleItems } = useStaggeredIntersection(itemCount, staggerDelay, {
    threshold: 0.1,
    rootMargin: '50px 0px'
  });

  return { ref, visibleItems };
};