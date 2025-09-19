import React, { lazy, Suspense, useState, useRef, useEffect } from 'react';

// Lazy load contact section component
const MailerLiteContactSectionAnimated = lazy(() => import('./MailerLiteContactSectionAnimated'));

interface LazyContactSectionProps {
  className?: string;
  loadOnScroll?: boolean;
  rootMargin?: string;
}

/**
 * Lazy wrapper for contact section with intersection observer
 */
const LazyContactSection: React.FC<LazyContactSectionProps> = ({ 
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
    <div className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto mb-4 animate-pulse"></div>
          <p className="text-muted-foreground">Loading contact form...</p>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className={className}>
      {shouldLoad ? (
        <Suspense fallback={<LoadingFallback />}>
          <MailerLiteContactSectionAnimated />
        </Suspense>
      ) : (
        <div className={`py-20 bg-background`}>
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto mb-4 animate-pulse"></div>
              <p className="text-muted-foreground/40">Contact form will load when visible</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyContactSection;