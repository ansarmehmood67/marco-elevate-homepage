import React, { useEffect, useRef, useState, useCallback } from 'react';

interface PerformanceOptimizedCarouselProps {
  children: React.ReactNode[];
  className?: string;
  autoPlay?: boolean;
  interval?: number;
  showIndicators?: boolean;
  enableTouch?: boolean;
}

const PerformanceOptimizedCarousel: React.FC<PerformanceOptimizedCarouselProps> = ({
  children,
  className = '',
  autoPlay = true,
  interval = 5000,
  showIndicators = true,
  enableTouch = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout>();
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Intersection observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || !isVisible || prefersReducedMotion) {
      return;
    }

    const startAutoPlay = () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
      
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % children.length);
      }, interval);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, isVisible, prefersReducedMotion, children.length, interval]);

  // Touch handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!enableTouch) return;
    touchStartX.current = e.targetTouches[0].clientX;
  }, [enableTouch]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!enableTouch) return;
    touchEndX.current = e.targetTouches[0].clientX;
  }, [enableTouch]);

  const handleTouchEnd = useCallback(() => {
    if (!enableTouch) return;
    
    const difference = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(difference) > threshold) {
      if (difference > 0) {
        // Swipe left - next
        setCurrentIndex(prev => (prev + 1) % children.length);
      } else {
        // Swipe right - previous
        setCurrentIndex(prev => (prev - 1 + children.length) % children.length);
      }
    }
  }, [enableTouch, children.length]);

  // Navigate to specific slide
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Navigate to next/previous
  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % children.length);
  }, [children.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + children.length) % children.length);
  }, [children.length]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides container */}
      <div
        className="flex transition-transform duration-500 ease-in-out will-change-transform"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          // Disable transitions if reduced motion is preferred
          transition: prefersReducedMotion ? 'none' : undefined
        }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
            aria-hidden={index !== currentIndex}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-sm transition-colors duration-200 z-10"
        aria-label="Previous slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-sm transition-colors duration-200 z-10"
        aria-label="Next slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Indicators */}
      {showIndicators && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex 
                  ? 'bg-white' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizedCarousel;