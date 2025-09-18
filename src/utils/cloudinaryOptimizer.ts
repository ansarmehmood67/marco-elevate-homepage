// Cloudinary URL Optimization Utility

/**
 * Optimize Cloudinary URLs for better performance
 */
export const optimizeCloudinaryUrl = (url: string, options: {
  width?: number;
  quality?: 'auto' | number;
  format?: 'auto' | 'webp' | 'avif';
  crop?: 'fill' | 'fit' | 'scale';
} = {}): string => {
  if (!url.includes('cloudinary.com')) return url;

  const { 
    width = 800, 
    quality = 'auto', 
    format = 'auto',
    crop = 'fill'
  } = options;
  
  // Check if already optimized
  if (url.includes('f_auto') || url.includes('q_auto')) return url;

  const params = [
    `f_${format}`,
    `q_${quality}`,
    width && `w_${width}`,
    crop && `c_${crop}`
  ].filter(Boolean).join(',');

  return url.replace('/upload/', `/upload/${params}/`);
};

/**
 * Generate responsive image srcset for Cloudinary URLs
 */
export const generateResponsiveSrcSet = (url: string, sizes: number[] = [400, 800, 1200, 1600]): string => {
  if (!url.includes('cloudinary.com')) return '';

  return sizes
    .map(size => `${optimizeCloudinaryUrl(url, { width: size })} ${size}w`)
    .join(', ');
};

/**
 * Preload critical Cloudinary images
 */
export const preloadCloudinaryImage = (url: string, options: {
  width?: number;
  priority?: boolean;
} = {}) => {
  if (typeof window === 'undefined') return;

  const { width = 800, priority = false } = options;
  const optimizedUrl = optimizeCloudinaryUrl(url, { width });

  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = optimizedUrl;
  link.as = 'image';
  
  if (priority) {
    link.setAttribute('fetchpriority', 'high');
  }

  document.head.appendChild(link);
};