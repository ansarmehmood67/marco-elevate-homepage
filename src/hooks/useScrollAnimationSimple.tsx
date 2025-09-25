import { useRef } from 'react';

// Emergency simplified animation hook that returns static values
export const useScrollAnimation = (threshold = 0.15, delay = 0) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = true; // Always visible to prevent animation blocking

  return { ref, isVisible };
};

// Emergency simplified staggered animation hook
export const useStaggeredAnimation = (itemCount: number, staggerDelay = 60) => {
  const ref = useRef<HTMLDivElement>(null);
  const visibleItems = new Array(itemCount).fill(true); // All items always visible

  return { ref, visibleItems };
};