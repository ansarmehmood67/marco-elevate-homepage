import React, { useMemo } from 'react';
import PremiumServicesCarouselOptimized from './PremiumServicesCarouselOptimized';

/**
 * Optimized carousel with immediate loading and reduced animation overhead
 */
const OptimizedCarousel: React.FC = () => {
  // Memoize the carousel to prevent unnecessary re-renders
  const carousel = useMemo(() => <PremiumServicesCarouselOptimized />, []);

  return (
    <div className="carousel-container">
      {carousel}
    </div>
  );
};

export default OptimizedCarousel;