import React, { useState, useRef, useEffect } from 'react';
import { handleImageError } from '@/utils/errorHandling';

interface PerformantImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fallbackSrc?: string;
  className?: string;
  onLoad?: () => void;
  onError?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
}

const PerformantImage: React.FC<PerformantImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  fallbackSrc,
  className = '',
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px 0px', threshold: 0.1 }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    setHasError(true);
    handleImageError(event, fallbackSrc, 'PerformantImage');
    onError?.(event);
  };

  return (
    <div className={`relative ${className}`} style={{ aspectRatio: width && height ? `${width}/${height}` : undefined }}>
      {/* Placeholder while loading */}
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-muted animate-pulse rounded"
          style={{ width: width || '100%', height: height || 'auto' }}
        />
      )}
      
      {/* Actual image */}
      <img
        ref={imgRef}
        src={isInView ? src : undefined}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${hasError ? 'hidden' : ''}`}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
      
      {/* Error fallback */}
      {hasError && !fallbackSrc && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center rounded">
          <span className="text-muted-foreground text-xs">Image unavailable</span>
        </div>
      )}
    </div>
  );
};

export default PerformantImage;