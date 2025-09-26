import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageTransition = (duration = 300) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Start transition on route change
    setIsTransitioning(true);
    setIsVisible(false);

    // Complete transition after duration
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsTransitioning(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [location.pathname, duration]);

  return {
    isTransitioning,
    isVisible,
    transitionClasses: `transition-all duration-${duration} ease-out ${
      isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-4'
    }`
  };
};

export default usePageTransition;