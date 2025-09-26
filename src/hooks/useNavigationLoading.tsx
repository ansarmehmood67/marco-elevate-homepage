import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useNavigationLoading = () => {
  const [isNavigating, setIsNavigating] = useState(false);
  const [targetRoute, setTargetRoute] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (isNavigating) {
      // Reset navigation state after page loads
      const timer = setTimeout(() => {
        setIsNavigating(false);
        setTargetRoute(null);
      }, 300); // Minimum loading time for consistency

      return () => clearTimeout(timer);
    }
  }, [location.pathname, isNavigating]);

  const startNavigation = (route: string) => {
    setIsNavigating(true);
    setTargetRoute(route);
  };

  return {
    isNavigating,
    targetRoute,
    startNavigation
  };
};