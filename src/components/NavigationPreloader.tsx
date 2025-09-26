import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NavigationPreloader = () => {
  const location = useLocation();

  useEffect(() => {
    // Preload likely next routes based on current location
    const preloadRoutes = () => {
      const currentPath = location.pathname;
      const commonRoutes = [
        '/about',
        '/contact',
        '/sales-on-demand',
        '/consulenza-strategica/marketing-services',
        '/consulenza-strategica/consultation-services'
      ];

      // Preload routes that aren't the current one
      const routesToPreload = commonRoutes.filter(route => route !== currentPath);
      
      routesToPreload.slice(0, 2).forEach(route => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = route;
        document.head.appendChild(link);
      });
    };

    // Delay preloading to not interfere with current page load
    const timer = setTimeout(preloadRoutes, 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
};

export default NavigationPreloader;