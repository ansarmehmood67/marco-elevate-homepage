import React from 'react';
import OptimizedCarousel from './OptimizedCarousel';

interface PreloadedCarouselProps {
  className?: string;
}

/**
 * Preloaded carousel without lazy loading to prevent loading cascades
 */
const PreloadedCarousel: React.FC<PreloadedCarouselProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <OptimizedCarousel />
    </div>
  );
};

export default PreloadedCarousel;