import React, { useState, useRef, useCallback, useEffect } from 'react';

interface VideoPlayerOptimizedProps {
  src: string;
  poster?: string;
  className?: string;
  width?: number;
  height?: number;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  playsInline?: boolean;
  priority?: boolean;
}

/**
 * Optimized video player with intersection observer loading,
 * multiple format support, and performance enhancements
 */
const VideoPlayerOptimized: React.FC<VideoPlayerOptimizedProps> = ({
  src,
  poster,
  className = '',
  width,
  height,
  autoPlay = false,
  muted = true,
  loop = false,
  controls = false,
  playsInline = true,
  priority = false
}) => {
  const [shouldLoad, setShouldLoad] = useState(priority);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection observer for lazy loading
  useEffect(() => {
    if (priority || shouldLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px', // Start loading earlier for videos
        threshold: 0.1
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, shouldLoad]);

  // Generate multiple video formats
  const generateVideoSources = useCallback(() => {
    const sources = [];
    const baseSrc = src.replace(/\.(mp4|webm|mov)$/i, '');
    
    // Add WebM source for better compression
    sources.push({
      src: `${baseSrc}.webm`,
      type: 'video/webm'
    });
    
    // Add MP4 as fallback
    sources.push({
      src: src.endsWith('.mp4') ? src : `${baseSrc}.mp4`,
      type: 'video/mp4'
    });
    
    return sources;
  }, [src]);

  const handleLoadedData = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  // Optimize poster image
  const optimizedPoster = poster ? (
    poster.includes('cloudinary.com') 
      ? poster.replace('/upload/', '/upload/q_70,f_webp,w_1920,h_1080,c_fill/')
      : poster
  ) : undefined;

  const aspectRatio = width && height ? width / height : 16 / 9;

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden bg-slate-900 ${className}`}
      style={{ 
        aspectRatio: `${aspectRatio}`,
        minHeight: height ? `${height}px` : '200px'
      }}
    >
      {/* Loading placeholder */}
      {!isLoaded && !hasError && shouldLoad && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      )}

      {/* Poster placeholder when not loaded */}
      {!shouldLoad && optimizedPoster && (
        <img
          src={optimizedPoster}
          alt="Video thumbnail"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      )}

      {/* Video element */}
      {shouldLoad && (
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          width={width}
          height={height}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          controls={controls}
          playsInline={playsInline}
          preload={priority ? 'auto' : 'metadata'}
          poster={optimizedPoster}
          onLoadedData={handleLoadedData}
          onError={handleError}
          style={{
            aspectRatio: `${aspectRatio}`
          }}
        >
          {generateVideoSources().map((source, index) => (
            <source key={index} src={source.src} type={source.type} />
          ))}
          {/* Fallback text */}
          <p className="text-white text-center p-4">
            Your browser does not support the video element.
          </p>
        </video>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900 text-white">
          <div className="text-center">
            <div className="text-4xl mb-2">⚠️</div>
            <span className="text-sm">Video could not be loaded</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayerOptimized;