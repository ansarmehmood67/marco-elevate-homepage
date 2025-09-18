import React, { useState, useRef, useEffect } from 'react';
import { optimizeCloudinaryUrl } from '@/utils/cloudinaryOptimizer';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  quality?: 'auto' | number;
  sizes?: string;
  className?: string;
}

/**
 * OptimizedImage component with automatic Cloudinary optimization,
 * lazy loading, and proper dimensions for CLS prevention
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  priority = false,
  quality = 'auto',
  sizes,
  className,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Optimize Cloudinary URLs
  const optimizedSrc = React.useMemo(() => {
    return optimizeCloudinaryUrl(src, { 
      width: width || 800, 
      quality,
      format: 'auto'
    });
  }, [src, width, quality]);

  // Generate responsive srcset for Cloudinary images
  const srcSet = React.useMemo(() => {
    if (!src.includes('cloudinary.com') || !width) return undefined;
    
    const breakpoints = [
      Math.round(width * 0.5),
      width,
      Math.round(width * 1.5),
      Math.round(width * 2)
    ];

    return breakpoints
      .map(size => `${optimizeCloudinaryUrl(src, { width: size, quality })} ${size}w`)
      .join(', ');
  }, [src, width, quality]);

  // Preload critical images
  useEffect(() => {
    if (priority && typeof window !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = optimizedSrc;
      link.as = 'image';
      link.setAttribute('fetchpriority', 'high');
      document.head.appendChild(link);
    }
  }, [optimizedSrc, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div className={`relative ${!isLoaded ? 'bg-gray-200 animate-pulse' : ''}`}>
      <img
        ref={imgRef}
        src={optimizedSrc}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        decoding="async"
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className || ''}`}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined,
          ...props.style
        }}
        {...props}
      />
      
      {hasError && (
        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500 text-sm">
          Image failed to load
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;