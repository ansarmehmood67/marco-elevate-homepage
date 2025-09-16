import React, { useState } from 'react';
import { Play, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ServiceGalleryProps {
  youtubeUrl: string;
  title: string;
  thumbnails?: string[];
}

const ServiceGallery: React.FC<ServiceGalleryProps> = ({
  youtubeUrl,
  title,
  thumbnails = []
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);

  // Extract video ID from YouTube URL
  const getYouTubeVideoId = (url: string) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeVideoId(youtubeUrl);
  const mainThumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
  
  // Generate additional thumbnail variations from YouTube
  const defaultThumbnails = videoId ? [
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
  ] : [];

  const allThumbnails = thumbnails.length > 0 ? thumbnails : defaultThumbnails;
  const currentThumbnail = allThumbnails[selectedThumbnail] || mainThumbnailUrl;

  return (
    <div className="space-y-4">
      {/* Main Image/Video Preview */}
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/20 shadow-2xl">
        {currentThumbnail && (
          <>
            <img
              src={currentThumbnail}
              alt={`${title} preview`}
              className={`w-full h-full object-cover transition-all duration-500 ${
                thumbnailLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setThumbnailLoaded(true)}
              onError={() => setThumbnailLoaded(true)}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsVideoOpen(true)}
                className="group relative w-20 h-20 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
              >
                {/* Animated Ring */}
                <div className="absolute inset-0 border-2 border-white/40 rounded-full animate-ping" />
                {/* Play Icon */}
                <div className="relative w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300">
                  <Play className="w-7 h-7 text-black ml-1" />
                </div>
              </button>
            </div>

            {/* Video Badge */}
            <div className="absolute top-4 left-4">
              <div className="inline-flex items-center px-3 py-1.5 bg-black/60 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse" />
                Video Demo
              </div>
            </div>
          </>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {allThumbnails.length > 1 && (
        <div className="flex gap-3">
          {allThumbnails.map((thumbnail, index) => (
            <button
              key={index}
              onClick={() => setSelectedThumbnail(index)}
              className={`relative w-20 h-14 rounded-lg overflow-hidden transition-all duration-300 border-2 ${
                selectedThumbnail === index 
                  ? 'border-primary shadow-lg scale-105' 
                  : 'border-white/20 hover:border-white/40 hover:scale-105'
              }`}
            >
              <img
                src={thumbnail}
                alt={`${title} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {selectedThumbnail === index && (
                <div className="absolute inset-0 bg-primary/20" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Embedded YouTube Video */}
      <div className="rounded-2xl overflow-hidden bg-black border border-white/20 shadow-xl">
        <div className="relative">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 border-b border-white/10 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <span className="text-white font-medium text-sm">Video Presentazione</span>
              </div>
              <div className="text-white/60 text-xs">
                Clicca play per iniziare
              </div>
            </div>
          </div>
          
          {/* Video Frame */}
          <div className="aspect-video">
            {videoId && (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                title={title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-5xl w-full p-0 bg-black border-none">
          <div className="relative w-full aspect-video">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            
            {isVideoOpen && videoId && (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={title}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ServiceGallery;