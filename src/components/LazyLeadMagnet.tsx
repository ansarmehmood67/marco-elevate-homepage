import React, { lazy, Suspense, useState, useRef, useEffect } from 'react';

// Lazy load lead magnet component
const LeadMagnetSectionAnimated = lazy(() => import('./LeadMagnetSectionAnimated'));

interface LazyLeadMagnetProps {
  className?: string;
  loadOnScroll?: boolean;
  rootMargin?: string;
}

/**
 * Lazy wrapper for lead magnet section with intersection observer
 */
const LazyLeadMagnet: React.FC<LazyLeadMagnetProps> = ({ 
  className = '',
  loadOnScroll = true,
  rootMargin = '150px'
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
    <div className={`py-20 bg-black ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto mb-4 animate-pulse"></div>
          <p className="text-white/60">Loading lead magnet...</p>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className={className}>
      {shouldLoad ? (
        <Suspense fallback={<LoadingFallback />}>
          <LeadMagnetSectionAnimated />
        </Suspense>
      ) : (
        <div className={`py-20 bg-black`}>
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto mb-4 animate-pulse"></div>
              <p className="text-white/40">Lead magnet will load when visible</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyLeadMagnet;