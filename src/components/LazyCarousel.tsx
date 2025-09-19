import React, { lazy, Suspense, useState, useRef, useEffect } from 'react';

// Lazy load heavy carousel component
const PremiumServicesCarouselOptimized = lazy(() => import('./PremiumServicesCarouselOptimized'));

interface LazyCarouselProps {
  className?: string;
  loadOnScroll?: boolean;
  rootMargin?: string;
}

/**
 * Lazy wrapper for heavy carousel components with intersection observer
 */
const LazyCarousel: React.FC<LazyCarouselProps> = ({ 
  className = '',
  loadOnScroll = true,
  rootMargin = '100px'
}) => {
  const [shouldLoad, setShouldLoad] = useState(!loadOnScroll);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loadOnScroll || shouldLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold: 0.1
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [loadOnScroll, shouldLoad, rootMargin]);

  const LoadingFallback = () => (
    <div className={`py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="performance-spinner mx-auto mb-4"></div>
          <p className="text-white/60">Loading services...</p>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className={className}>
      {shouldLoad ? (
        <Suspense fallback={<LoadingFallback />}>
          <PremiumServicesCarouselOptimized />
        </Suspense>
      ) : (
        <div className={`py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden`}>
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto mb-4 animate-pulse"></div>
              <p className="text-white/40">Services will load when visible</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyCarousel;