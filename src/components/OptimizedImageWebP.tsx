import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageWebPProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  loading?: 'eager' | 'lazy';
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImageWebP: React.FC<OptimizedImageWebPProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 80,
  sizes = '100vw',
  loading = 'lazy',
  onLoad,
  onError
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate optimized URLs for different formats
  const generateOptimizedSrc = (originalSrc: string, format: 'webp' | 'avif' | 'original', width?: number) => {
    if (originalSrc.includes('cloudinary.com')) {
      const qualityParam = `q_${quality}`;
      const formatParam = format === 'original' ? '' : `f_${format}`;
      const widthParam = width ? `w_${width}` : '';
      const params = [qualityParam, formatParam, widthParam].filter(Boolean).join(',');
      
      return originalSrc.replace('/upload/', `/upload/${params}/`);
    }
    return originalSrc;
  };

  // Generate srcSet for responsive images
  const generateSrcSet = (format: 'webp' | 'avif' | 'original') => {
    const widths = [400, 800, 1200, 1600];
    return widths
      .map(w => `${generateOptimizedSrc(src, format, w)} ${w}w`)
      .join(', ');
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  const handleLoad = () => {
    setImageLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setImageError(true);
    onError?.();
  };

  // Don't render image until it's in view (unless priority)
  if (!isInView) {
    return (
      <div
        ref={imgRef}
        className={`bg-muted animate-pulse ${className}`}
        style={{ 
          width: width || '100%', 
          height: height || 'auto',
          aspectRatio: width && height ? `${width} / ${height}` : undefined
        }}
        aria-label={`Loading ${alt}`}
      />
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Loading skeleton */}
      {!imageLoaded && !imageError && (
        <div
          className="absolute inset-0 bg-muted animate-pulse rounded"
          aria-hidden="true"
        />
      )}

      {/* Optimized picture element with multiple formats */}
      <picture>
        {/* AVIF format (best compression) */}
        <source
          srcSet={generateSrcSet('avif')}
          sizes={sizes}
          type="image/avif"
        />
        
        {/* WebP format (good compression, wide support) */}
        <source
          srcSet={generateSrcSet('webp')}
          sizes={sizes}
          type="image/webp"
        />
        
        {/* Fallback format */}
        <img
          ref={imgRef}
          src={generateOptimizedSrc(src, 'original', width)}
          srcSet={generateSrcSet('original')}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          decoding="async"
          className={`transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${imageError ? 'hidden' : ''}`}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            aspectRatio: width && height ? `${width} / ${height}` : undefined,
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      </picture>

      {/* Error fallback */}
      {imageError && (
        <div className="flex items-center justify-center bg-muted text-muted-foreground p-4 rounded">
          <span className="text-sm">Image failed to load</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImageWebP;