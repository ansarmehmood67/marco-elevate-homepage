import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export const PageTransition = ({ children, className = '' }: PageTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const location = useLocation();

  useEffect(() => {
    // Fade out on route change
    setIsVisible(false);
    
    // Small delay to allow fade out, then update children and fade in
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setIsVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, [location.pathname, children]);

  useEffect(() => {
    // Initial load
    setIsVisible(true);
  }, []);

  return (
    <div 
      className={`transition-all duration-300 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-2'
      } ${className}`}
    >
      {displayChildren}
    </div>
  );
};

export default PageTransition;