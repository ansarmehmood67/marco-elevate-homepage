import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useNavigationState = () => {
  const [isNavigating, setIsNavigating] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsNavigating(true);
    
    // Reset navigation state after a short delay
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return { isNavigating };
};