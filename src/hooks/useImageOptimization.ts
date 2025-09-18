import { useEffect, useRef, useState } from 'react';

interface UseImageOptimizationOptions {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

interface UseImageOptimizationReturn {
  imgRef: React.RefObject<HTMLImageElement>;
  isLoaded: boolean;
  isIntersecting: boolean;
  optimizedSrc: string;
}

export const useImageOptimization = ({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  priority = false
}: UseImageOptimizationOptions): UseImageOptimizationReturn => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const optimizedSrc = src.includes('cloudinary.com') && !src.includes('f_auto')
    ? src.replace('/upload/', '/upload/f_auto,q_auto,w_800/')
    : src;

  useEffect(() => {
    const image = imgRef.current;
    if (!image) return;

    image.decoding = 'async';
    image.loading = priority ? 'eager' : loading;
    
    if (width) image.width = width;
    if (height) image.height = height;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (!image.src && !priority) {
            image.src = optimizedSrc;
          }
          observer.disconnect();
        }
      },
      { rootMargin: '50px 0px', threshold: 0.1 }
    );

    if (priority) {
      image.src = optimizedSrc;
      setIsIntersecting(true);
    } else {
      observer.observe(image);
    }

    const handleLoad = () => setIsLoaded(true);
    const handleError = () => {
      console.warn('Image failed to load:', alt);
      setIsLoaded(true);
    };

    image.addEventListener('load', handleLoad);
    image.addEventListener('error', handleError);

    return () => {
      observer.disconnect();
      image.removeEventListener('load', handleLoad);
      image.removeEventListener('error', handleError);
    };
  }, [optimizedSrc, alt, width, height, loading, priority]);

  return { imgRef, isLoaded, isIntersecting, optimizedSrc };
};

export default useImageOptimization;