import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
}

/**
 * Optimized image component with WebP/AVIF support, lazy loading, and CLS prevention
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  quality = 80
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate optimized image URLs for different formats
  const getOptimizedSrc = (format?: string) => {
    if (!src.includes('cloudinary.com')) return src;
    
    const baseUrl = src.split('/upload/')[0];
    const imagePath = src.split('/upload/')[1];
    
    let transformations = [`q_${quality}`, 'f_auto'];
    if (format) transformations.push(`f_${format}`);
    if (width) transformations.push(`w_${width}`);
    if (height) transformations.push(`h_${height}`);
    
    return `${baseUrl}/upload/${transformations.join(',')}/${imagePath}`;
  };

  const webpSrc = getOptimizedSrc('webp');
  const avifSrc = getOptimizedSrc('avif');
  const fallbackSrc = getOptimizedSrc();

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ 
        aspectRatio: width && height ? `${width}/${height}` : undefined,
        minHeight: height ? `${height}px` : undefined 
      }}
    >
      {/* Loading skeleton */}
      {!imageLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded" />
      )}
      
      {/* Optimized picture element with multiple formats */}
      <picture>
        <source srcSet={avifSrc} type="image/avif" />
        <source srcSet={webpSrc} type="image/webp" />
        <img
          src={fallbackSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          onError={() => setHasError(true)}
        />
      </picture>
      
      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
          <span className="text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  );
};

// Add shimmer animation to global styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `;
  document.head.appendChild(style);
}

export default OptimizedImage;