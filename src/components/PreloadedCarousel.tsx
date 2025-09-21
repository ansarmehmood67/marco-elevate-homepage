import React from 'react';
import PremiumServicesCarouselOptimized from './PremiumServicesCarouselOptimized';

interface PreloadedCarouselProps {
  className?: string;
}

/**
 * Preloaded carousel without lazy loading to prevent loading cascades
 */
const PreloadedCarousel: React.FC<PreloadedCarouselProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <PremiumServicesCarouselOptimized />
    </div>
  );
};

export default PreloadedCarousel;