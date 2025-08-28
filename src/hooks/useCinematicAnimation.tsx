import { useEffect, useRef, useState, useCallback } from 'react';

export type AnimationType = 
  | 'fadeIn'
  | 'slideFromLeft'
  | 'slideFromRight'
  | 'slideFromBottom'
  | 'slideFromTop'
  | 'scaleUp'
  | 'scaleDown'
  | 'rotateIn'
  | 'elasticScale';

export type AnimationConfig = {
  type: AnimationType;
  delay?: number;
  duration?: number;
  easing?: string;
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
  threshold = 0.15,
  baseDelay = 200
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
    const duration = config.duration || 700;
    const easing = config.easing || 'ease-out';
    
    const baseClasses = `transition-all duration-[${duration}ms] ${easing}`;
    
    if (!isVisible) {
      switch (config.type) {
        case 'fadeIn':
          return `${baseClasses} opacity-0 translate-y-4`;
        case 'slideFromLeft':
          return `${baseClasses} opacity-0 -translate-x-8`;
        case 'slideFromRight':
          return `${baseClasses} opacity-0 translate-x-8`;
        case 'slideFromBottom':
          return `${baseClasses} opacity-0 translate-y-8`;
        case 'slideFromTop':
          return `${baseClasses} opacity-0 -translate-y-8`;
        case 'scaleUp':
          return `${baseClasses} opacity-0 scale-90`;
        case 'scaleDown':
          return `${baseClasses} opacity-0 scale-110`;
        case 'rotateIn':
          return `${baseClasses} opacity-0 rotate-3 scale-95`;
        case 'elasticScale':
          return `${baseClasses} opacity-0 scale-75`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }
    
    // Visible state - add special effects for certain types
    switch (config.type) {
      case 'elasticScale':
        return `${baseClasses} opacity-100 scale-100 animate-[elasticScale_${duration}ms_cubic-bezier(0.68,-0.55,0.265,1.55)]`;
      case 'scaleUp':
        return `${baseClasses} opacity-100 scale-100`;
      default:
        return `${baseClasses} opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0`;
    }
  }, [visibleItems]);

  return { ref, visibleItems, getAnimationClasses };
};

// Specialized hook for word-by-word text animations
export const useWordAnimation = (text: string, delay = 100) => {
  const words = text.split(' ');
  const [visibleWords, setVisibleWords] = useState<boolean[]>(
    new Array(words.length).fill(false)
  );
  const ref = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutsRef.current.forEach(clearTimeout);
          timeoutsRef.current = [];
          
          setVisibleWords(new Array(words.length).fill(false));
          
          words.forEach((_, i) => {
            const timeout = setTimeout(() => {
              setVisibleWords(prev => {
                const newState = [...prev];
                newState[i] = true;
                return newState;
              });
            }, i * delay);
            timeoutsRef.current.push(timeout);
          });
        } else {
          timeoutsRef.current.forEach(clearTimeout);
          timeoutsRef.current = [];
          setVisibleWords(new Array(words.length).fill(false));
        }
      },
      { threshold: 0.1, rootMargin: '50px 0px' }
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
  }, [words, delay]);

  return { ref, words, visibleWords };
};

// Presets for common animation sequences
export const ANIMATION_PRESETS = {
  heroSequence: [
    { type: 'slideFromLeft' as AnimationType, delay: 0 },
    { type: 'slideFromBottom' as AnimationType, delay: 300 },
    { type: 'fadeIn' as AnimationType, delay: 600 },
    { type: 'fadeIn' as AnimationType, delay: 900 },
    { type: 'elasticScale' as AnimationType, delay: 1200 }
  ],
  
  cardSequence: [
    { type: 'slideFromBottom' as AnimationType, delay: 0 },
    { type: 'slideFromBottom' as AnimationType, delay: 150 },
    { type: 'slideFromBottom' as AnimationType, delay: 300 }
  ],
  
  textFlow: [
    { type: 'slideFromLeft' as AnimationType, delay: 0 },
    { type: 'fadeIn' as AnimationType, delay: 200 },
    { type: 'fadeIn' as AnimationType, delay: 400 },
    { type: 'scaleUp' as AnimationType, delay: 600 }
  ],
  
  testimonialFlow: [
    { type: 'fadeIn' as AnimationType, delay: 0 },
    { type: 'slideFromRight' as AnimationType, delay: 300 },
    { type: 'scaleUp' as AnimationType, delay: 600 }
  ]
};