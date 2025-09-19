import React, { useState, useRef, useCallback, useEffect } from 'react';

interface EnhancedLazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  sizes?: string;
}

/**
 * Enhanced lazy loading image component with intersection observer,
 * WebP/AVIF support, and CLS prevention
 */
const EnhancedLazyImage: React.FC<EnhancedLazyImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  quality = 75,
  placeholder = 'blur',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before coming into view
        threshold: 0.1
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  // Generate optimized image URLs for different formats
  const generateSrcSet = useCallback((format?: 'webp' | 'avif') => {
    if (!src.includes('cloudinary.com') && !src.includes('lovable-uploads')) {
      return src;
    }

    // Handle Cloudinary URLs
    if (src.includes('cloudinary.com')) {
      const baseUrl = src.split('/upload/')[0];
      const imagePath = src.split('/upload/')[1];
      
      let transformations = [`q_${quality}`];
      if (format) transformations.push(`f_${format}`);
      if (width && height) {
        transformations.push(`w_${width}`, `h_${height}`, 'c_fill');
      }
      
      return `${baseUrl}/upload/${transformations.join(',')}/${imagePath}`;
    }

    // Handle local uploads - generate responsive sizes
    if (src.includes('lovable-uploads')) {
      const baseSrc = src.replace(/\.(jpg|jpeg|png|webp)$/i, '');
      const extension = format || 'webp';
      
      if (width && height) {
        return `${baseSrc}_${width}x${height}.${extension}`;
      }
      return `${baseSrc}.${extension}`;
    }

    return src;
  }, [src, quality, width, height]);

  const avifSrc = generateSrcSet('avif');
  const webpSrc = generateSrcSet('webp');
  const fallbackSrc = generateSrcSet();

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  // Calculate aspect ratio for container
  const aspectRatio = width && height ? width / height : undefined;
  
  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ 
        aspectRatio: aspectRatio ? `${width}/${height}` : undefined,
        minHeight: height ? `${height}px` : undefined 
      }}
    >
      {/* Placeholder while loading */}
      {(!isLoaded && !hasError) && placeholder === 'blur' && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 bg-[length:400%_400%] animate-[shimmer_1.5s_ease-in-out_infinite]" />
      )}
      
      {/* Main image with modern formats */}
      {isInView && (
        <picture>
          <source srcSet={avifSrc} type="image/avif" sizes={sizes} />
          <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
          <img
            ref={imgRef}
            src={fallbackSrc}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            sizes={sizes}
            onLoad={handleLoad}
            onError={handleError}
            style={{
              // Prevent layout shift
              aspectRatio: aspectRatio ? `${width}/${height}` : 'auto'
            }}
          />
        </picture>
      )}
      
      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
          <div className="text-center">
            <div className="text-2xl mb-2">🖼️</div>
            <span className="text-sm">Image unavailable</span>
          </div>
        </div>
      )}
    </div>
  );
};

// Add shimmer animation styles
if (typeof document !== 'undefined' && !document.querySelector('#shimmer-styles')) {
  const style = document.createElement('style');
  style.id = 'shimmer-styles';
  style.textContent = `
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
  `;
  document.head.appendChild(style);
}

export default EnhancedLazyImage;