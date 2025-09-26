import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Delay scroll to coordinate with page transitions
    const timer = setTimeout(() => {
      // Use instant scroll to prevent conflicts with loading animations
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }, 150); // Small delay to let page transition start

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;