import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface VideoServiceCardProps {
  title: string;
  subtitle?: string;
  features: string[];
  youtubeUrl: string;
  shopifyUrl: string;
  category?: 'basic' | 'popular' | 'premium';
}

const VideoServiceCard: React.FC<VideoServiceCardProps> = ({
  title,
  subtitle,
  features,
  youtubeUrl,
  shopifyUrl,
  category = 'basic'
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
  
  // Extract video ID from YouTube URL
  const getYouTubeVideoId = (url: string) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeVideoId(youtubeUrl);
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';

  const getCategoryStyles = () => {
    switch (category) {
      case 'popular':
        return {
          badge: 'bg-primary/20 text-primary border-primary/30',
          card: 'ring-2 ring-primary/20 hover:ring-primary/40',
          gradient: 'from-primary/10 to-primary/5'
        };
      case 'premium':
        return {
          badge: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
          card: 'ring-2 ring-yellow-500/20 hover:ring-yellow-500/40',
          gradient: 'from-yellow-500/10 to-yellow-500/5'
        };
      default:
        return {
          badge: 'bg-slate-500/20 text-slate-300 border-slate-500/30',
          card: 'hover:ring-2 hover:ring-slate-500/20',
          gradient: 'from-slate-500/10 to-slate-500/5'
        };
    }
  };

  const styles = getCategoryStyles();

  return (
    <Card className={`glass-card h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl ${styles.card}`}>
      <CardContent className="p-0 h-full flex flex-col">
        {/* Video Thumbnail Section */}
        <div className="relative aspect-video rounded-t-xl overflow-hidden bg-black">
          {thumbnailUrl && (
            <>
              <img
                src={thumbnailUrl}
                alt={`${title} video thumbnail`}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  thumbnailLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setThumbnailLoaded(true)}
                onError={() => setThumbnailLoaded(true)}
              />
              
              {/* Play Button Overlay */}
              <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                <DialogTrigger asChild>
                  <div className="absolute inset-0 bg-black/30 hover:bg-black/50 transition-all duration-300 flex items-center justify-center cursor-pointer group">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                      <Play className="w-6 h-6 text-black ml-1" />
                    </div>
                  </div>
                </DialogTrigger>
                
                <DialogContent className="max-w-4xl w-full p-0 bg-black border-none">
                  <div className="relative w-full aspect-video">
                    <button
                      onClick={() => setIsVideoOpen(false)}
                      className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200"
                    >
                      <X className="w-5 h-5 text-white" />
                    </button>
                    
                    {isVideoOpen && videoId && (
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                        title={title}
                        className="w-full h-full rounded-lg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </>
          )}
          
          {/* Category Badge */}
          {category === 'popular' && (
            <Badge className="absolute top-3 left-3 bg-primary text-white border-none">
              Più Richiesto
            </Badge>
          )}
          {category === 'premium' && (
            <Badge className="absolute top-3 left-3 bg-yellow-500 text-black border-none">
              Premium
            </Badge>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2 leading-tight">
              {title}
            </h3>
            
            {subtitle && (
              <p className="text-white/70 text-sm mb-4">
                {subtitle}
              </p>
            )}

            {/* Features List */}
            <ul className="space-y-2 mb-6">
              {features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-white/80">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 mt-auto">
            {/* Primary CTA - Shopify Link */}
            <Button 
              asChild
              className="w-full bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <a 
                href={shopifyUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                Prenota la Consulenza
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>

            {/* Secondary CTA - Video Link */}
            <Button
              variant="outline"
              onClick={() => setIsVideoOpen(true)}
              className="w-full border-white/20 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
            >
              <Play className="w-4 h-4 mr-2" />
              Guarda il Video (2 min)
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoServiceCard;