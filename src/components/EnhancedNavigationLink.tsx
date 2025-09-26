import { Link } from 'react-router-dom';
import { useNavigationLoading } from '@/hooks/useNavigationLoading';
import { useState } from 'react';

interface EnhancedNavigationLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const EnhancedNavigationLink = ({ to, children, className = '', onClick }: EnhancedNavigationLinkProps) => {
  const { startNavigation, isNavigating, targetRoute } = useNavigationLoading();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    startNavigation(to);
    onClick?.();

    // Reset click state after a short delay
    setTimeout(() => setIsClicked(false), 200);
  };

  const isCurrentlyNavigating = isNavigating && targetRoute === to;

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={`${className} transition-all duration-200 ${
        isClicked || isCurrentlyNavigating 
          ? 'opacity-70 transform scale-95' 
          : 'hover:scale-105'
      } ${isCurrentlyNavigating ? 'pointer-events-none' : ''}`}
    >
      {children}
      {isCurrentlyNavigating && (
        <span className="ml-2 inline-block w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin opacity-60" />
      )}
    </Link>
  );
};

export default EnhancedNavigationLink;