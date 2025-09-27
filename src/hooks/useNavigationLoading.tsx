import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useNavigationLoading = () => {
  const [isNavigating, setIsNavigating] = useState(false);
  const [targetRoute, setTargetRoute] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Reset navigation state when route actually changes
    setIsNavigating(false);
    setTargetRoute(null);
  }, [location.pathname]);

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