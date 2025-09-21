import React from 'react';
import TestimonialsOptimized from './TestimonialsOptimized';

interface PreloadedTestimonialsProps {
  className?: string;
}

/**
 * Preloaded testimonials without lazy loading to prevent loading cascades
 */
const PreloadedTestimonials: React.FC<PreloadedTestimonialsProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <TestimonialsOptimized />
    </div>
  );
};

export default PreloadedTestimonials;