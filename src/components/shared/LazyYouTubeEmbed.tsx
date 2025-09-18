import React, { useState, useCallback } from 'react';
import { Play } from 'lucide-react';
import PerformantImage from './PerformantImage';

interface LazyYouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
  thumbnailQuality?: 'default' | 'mqdefault' | 'hqdefault' | 'sddefault' | 'maxresdefault';
  autoplay?: boolean;
}

export const LazyYouTubeEmbed: React.FC<LazyYouTubeEmbedProps> = ({
  videoId,
  title,
  className = '',
  thumbnailQuality = 'hqdefault',
  autoplay = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`;
  
  const handleLoadVideo = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleThumbnailError = useCallback(() => {
    setHasError(true);
  }, []);

  if (hasError) {
    return (
      <div className={`relative bg-muted rounded-lg flex items-center justify-center min-h-[200px] ${className}`}>
        <div className="text-center p-6">
          <p className="text-muted-foreground">Video temporarily unavailable</p>
          <button 
            onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')}
            className="mt-2 text-primary hover:underline"
            aria-label={`Watch ${title} on YouTube`}
          >
            Watch on YouTube
          </button>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className={`relative cursor-pointer group ${className}`} onClick={handleLoadVideo}>
        <PerformantImage
          src={thumbnailUrl}
          alt={`${title} - Click to play video`}
          width={480}
          height={360}
          className="w-full h-full object-cover rounded-lg"
          onError={handleThumbnailError}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-200 rounded-lg" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-red-600 hover:bg-red-700 transition-colors duration-200 rounded-full p-4 shadow-lg">
            <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-semibold text-sm line-clamp-2 drop-shadow-lg">
            {title}
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&rel=0&modestbranding=1&playsinline=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full rounded-lg"
        loading="lazy"
      />
    </div>
  );
};

export default LazyYouTubeEmbed;