import React, { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';
import { useMobileOptimization } from '@/hooks/useMobileOptimization';

interface MobileOptimizedVideoProps {
  src: string;
  poster: string;
  mobilePoster?: string;
  alt?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
}

const MobileOptimizedVideo: React.FC<MobileOptimizedVideoProps> = ({
  src,
  poster,
  mobilePoster,
  alt = '',
  className = '',
  autoPlay = false,
  muted = true,
  loop = false,
  playsInline = true
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const config = useMobileOptimization();

  const shouldAutoPlay = autoPlay && config.shouldLoadVideo && config.connectionType !== '2g';
  const currentPoster = mobilePoster && window.innerWidth < 768 ? mobilePoster : poster;

  useEffect(() => {
    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && config.shouldLoadVideo) {
            setShowVideo(true);
            observer.disconnect();
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px 0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [config.shouldLoadVideo]);

  const handlePlayClick = () => {
    if (!showVideo) {
      setShowVideo(true);
    }
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Poster Image - Always shown first */}
      <img
        src={currentPoster}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        } ${videoLoaded && showVideo ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setImageLoaded(true)}
        loading="eager"
        decoding="async"
      />

      {/* Video Element - Conditionally loaded */}
      {showVideo && (
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay={shouldAutoPlay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          preload={config.shouldLoadVideo ? 'metadata' : 'none'}
          poster={currentPoster}
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoLoaded(false)}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      {/* Play Button Overlay - Show if video not auto-playing or on poor connections */}
      {(!shouldAutoPlay || config.connectionType === '2g' || config.connectionType === '3g') && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={handlePlayClick}
            className="group relative w-16 h-16 sm:w-20 sm:h-20 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
            aria-label="Play video"
          >
            {/* Animated Ring - Disabled on mobile for performance */}
            {config.shouldUseAnimations && (
              <div className="absolute inset-0 border-2 border-white/40 rounded-full animate-ping" />
            )}
            
            {/* Play Icon */}
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300">
              <Play className="w-5 h-5 sm:w-7 sm:h-7 text-black ml-1" />
            </div>
          </button>
        </div>
      )}

      {/* Loading Indicator */}
      {showVideo && !videoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default MobileOptimizedVideo;