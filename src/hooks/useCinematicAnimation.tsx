import { useEffect, useRef, useState, useCallback } from 'react';

export type AnimationType = 
  | 'fadeIn'
  | 'fadeInUp'
  | 'fadeInLeft'
  | 'fadeInRight';

export type AnimationConfig = {
  type: AnimationType;
  delay?: number;
  duration?: number;
};

export const useScrollTrigger = (
  threshold = 0.15, 
  rootMargin = '100px 0px',
  triggerOnce = true
) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
          setIsVisible(true);
          setHasTriggered(true);
        } else if (!entry.isIntersecting && !triggerOnce) {
          setIsVisible(false);
        }
      },
      { 
        threshold,
        rootMargin
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
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return { ref, isVisible, hasTriggered };
};

export const useCinematicSequence = (
  itemConfigs: AnimationConfig[],
  threshold = 0.1,
  baseDelay = 150
) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(itemConfigs.length).fill(false)
  );
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
          setVisibleItems(new Array(itemConfigs.length).fill(false));
          
          // Trigger staggered animations based on config
          itemConfigs.forEach((config, i) => {
            const timeout = setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev];
                newState[i] = true;
                return newState;
              });
            }, (config.delay || i * baseDelay));
            timeoutsRef.current.push(timeout);
          });
        } else {
          // Reset when out of view for better mobile experience
          timeoutsRef.current.forEach(clearTimeout);
          timeoutsRef.current = [];
          setVisibleItems(new Array(itemConfigs.length).fill(false));
        }
      },
      { 
        threshold,
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
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, [itemConfigs, baseDelay, threshold]);

  const getAnimationClasses = useCallback((index: number, config: AnimationConfig) => {
    const isVisible = visibleItems[index];
    const duration = config.duration || 500;
    
    const baseClasses = `transition-all duration-[${duration}ms] ease-out`;
    
    if (!isVisible) {
      switch (config.type) {
        case 'fadeIn':
          return `${baseClasses} opacity-0`;
        case 'fadeInUp':
          return `${baseClasses} opacity-0 translate-y-4`;
        case 'fadeInLeft':
          return `${baseClasses} opacity-0 -translate-x-4`;
        case 'fadeInRight':
          return `${baseClasses} opacity-0 translate-x-4`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-x-0 translate-y-0`;
  }, [visibleItems]);

  return { ref, visibleItems, getAnimationClasses };
};


// Presets for common animation sequences
export const ANIMATION_PRESETS = {
  heroSequence: [
    { type: 'fadeIn' as AnimationType, delay: 0 },
    { type: 'fadeInUp' as AnimationType, delay: 150 },
    { type: 'fadeIn' as AnimationType, delay: 300 },
    { type: 'fadeInUp' as AnimationType, delay: 450 }
  ],
  
  cardSequence: [
    { type: 'fadeInUp' as AnimationType, delay: 0 },
    { type: 'fadeInUp' as AnimationType, delay: 100 },
    { type: 'fadeInUp' as AnimationType, delay: 200 }
  ],
  
  textFlow: [
    { type: 'fadeInLeft' as AnimationType, delay: 0 },
    { type: 'fadeInUp' as AnimationType, delay: 150 },
    { type: 'fadeIn' as AnimationType, delay: 300 },
    { type: 'fadeInUp' as AnimationType, delay: 450 }
  ],
  
  testimonialFlow: [
    { type: 'fadeIn' as AnimationType, delay: 0 },
    { type: 'fadeInUp' as AnimationType, delay: 150 },
    { type: 'fadeInRight' as AnimationType, delay: 300 }
  ]
};