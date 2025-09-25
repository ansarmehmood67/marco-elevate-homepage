import React, { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';

interface LazyYouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
  width?: number;
  height?: number;
  autoplay?: boolean;
}

/**
 * Lazy-loaded YouTube embed with click-to-load facade for better performance
 * Prevents third-party scripts from loading until user interaction
 */
const LazyYouTubeEmbed: React.FC<LazyYouTubeEmbedProps> = ({
  videoId,
  title,
  className = '',
  width = 560,
  height = 315,
  autoplay = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}${autoplay ? '?autoplay=1' : ''}`;

  // Preload thumbnail image
  useEffect(() => {
    const img = new Image();
    img.src = thumbnailUrl;
    img.onload = () => setThumbnailLoaded(true);
  }, [thumbnailUrl]);

  const handleLoadVideo = () => {
    setIsLoaded(true);
  };

  if (isLoaded) {
    return (
      <div 
        ref={containerRef}
        className={`relative ${className}`}
        style={{ aspectRatio: `${width}/${height}` }}
      >
        <iframe
          src={embedUrl}
          title={title}
          className="absolute inset-0 w-full h-full"
          width={width}
          height={height}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className={`relative cursor-pointer group ${className}`}
      style={{ aspectRatio: `${width}/${height}` }}
      onClick={handleLoadVideo}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleLoadVideo();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Load YouTube video: ${title}`}
    >
      {/* Thumbnail with loading state */}
      <div className="absolute inset-0 bg-black rounded overflow-hidden">
        {!thumbnailLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_100%] animate-pulse" />
        )}
        
        <img
          src={thumbnailUrl}
          alt={`${title} - Click to play`}
          width={width}
          height={height}
          style={{ aspectRatio: `${width}/${height}` }}
          className={`w-full h-full object-cover transition-all duration-300 ${
            thumbnailLoaded ? 'opacity-100' : 'opacity-0'
          } group-hover:scale-105`}
          loading="lazy"
          decoding="async"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
        
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-red-600 hover:bg-red-700 rounded-full p-4 lg:p-6 shadow-2xl transform group-hover:scale-110 transition-all duration-300">
            <Play className="w-6 h-6 lg:w-8 lg:h-8 text-white fill-white ml-1" />
          </div>
        </div>
        
        {/* YouTube branding (optional) */}
        <div className="absolute bottom-2 right-2 bg-black/70 rounded px-2 py-1">
          <span className="text-white text-xs font-medium">YouTube</span>
        </div>
      </div>
      
      {/* Accessible label */}
      <span className="sr-only">Click to load YouTube video: {title}</span>
    </div>
  );
};

export default LazyYouTubeEmbed;