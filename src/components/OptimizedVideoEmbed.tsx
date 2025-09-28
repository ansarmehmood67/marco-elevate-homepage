import React, { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';

interface OptimizedVideoEmbedProps {
  src: string;
  poster?: string;
  title: string;
  className?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
}

/**
 * Optimized video component with lazy loading and performance enhancements
 * Provides poster image, lazy loading, and click-to-play functionality
 */
const OptimizedVideoEmbed: React.FC<OptimizedVideoEmbedProps> = ({
  src,
  poster,
  title,
  className = '',
  autoplay = false,
  muted = true,
  loop = false,
  controls = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [posterLoaded, setPosterLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Preload poster image
  useEffect(() => {
    if (poster) {
      const img = new Image();
      img.src = poster;
      img.onload = () => setPosterLoaded(true);
    }
  }, [poster]);

  const handleLoadVideo = () => {
    setIsLoaded(true);
    if (videoRef.current && autoplay) {
      videoRef.current.play().catch(() => {
        // Autoplay failed, user interaction required
      });
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      {!isLoaded ? (
        // Poster/placeholder view
        <div 
          className="relative w-full h-full cursor-pointer group"
          onClick={handleLoadVideo}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleLoadVideo();
            }
          }}
          tabIndex={0}
          role="button"
          aria-label={`Load video: ${title}`}
        >
          {/* Poster image */}
          {poster && (
            <div className="absolute inset-0">
              {!posterLoaded && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-[length:200%_100%] animate-pulse" />
              )}
              <img
                src={poster}
                alt={`${title} - Click to play`}
                className={`w-full h-full object-cover transition-all duration-300 ${
                  posterLoaded ? 'opacity-100' : 'opacity-0'
                } group-hover:scale-105`}
                loading="lazy"
                decoding="async"
              />
            </div>
          )}
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
          
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 lg:p-6 shadow-2xl transform group-hover:scale-110 transition-all duration-300 border border-white/30">
              <Play className="w-6 h-6 lg:w-8 lg:h-8 text-white fill-white ml-1" />
            </div>
          </div>
        </div>
      ) : (
        // Video element
        isVisible && (
          <video
            ref={videoRef}
            className="w-full h-full object-cover cursor-pointer"
            poster={poster}
            autoPlay={autoplay}
            muted={muted}
            loop={loop}
            controls={controls}
            playsInline
            preload="metadata"
            onClick={handleVideoClick}
            onLoadStart={() => {
              // Video started loading
            }}
            onCanPlay={() => {
              // Video can start playing
            }}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )
      )}
    </div>
  );
};

export default OptimizedVideoEmbed;