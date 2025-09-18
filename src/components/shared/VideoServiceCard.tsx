import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useShopifyBuyButton } from "@/hooks/useShopifyBuyButton";

interface VideoServiceCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  features: string[];
  youtubeUrl: string;
  shopifyProductId: string;
  category?: 'basic' | 'popular' | 'premium';
  price?: string;
}

const VideoServiceCard: React.FC<VideoServiceCardProps> = ({
  title,
  subtitle,
  description,
  features,
  youtubeUrl,
  shopifyProductId,
  category = 'basic',
  price
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const { containerRef, createBuyButton } = useShopifyBuyButton({ productId: shopifyProductId });
  
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
          badge: 'bg-primary text-white border-none',
          card: 'ring-2 ring-primary/30 hover:ring-primary/50',
          gradient: 'from-primary/20 to-primary/10',
          glow: 'hover:shadow-[0_0_30px_rgba(46,139,192,0.3)]'
        };
      case 'premium':
        return {
          badge: 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black border-none',
          card: 'ring-2 ring-yellow-500/30 hover:ring-yellow-500/50',
          gradient: 'from-yellow-500/20 to-yellow-500/10',
          glow: 'hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]'
        };
      default:
        return {
          badge: 'bg-slate-600 text-white border-none',
          card: 'hover:ring-2 hover:ring-white/20',
          gradient: 'from-white/10 to-white/5',
          glow: 'hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]'
        };
    }
  };

  const styles = getCategoryStyles();

  return (
    <Card 
      className={`group relative overflow-hidden h-full transition-all duration-500 transform hover:scale-105 ${styles.card} ${styles.glow} bg-white/8 backdrop-blur-lg border border-white/20`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating Light Effect */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary-glow/20 rounded-full filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardContent className="p-0 h-full flex flex-col relative z-10">
        {/* Video Thumbnail Section */}
        <div className="relative aspect-video rounded-t-xl overflow-hidden bg-black">
          {thumbnailUrl && (
            <>
              <img
                src={thumbnailUrl}
                alt={`${title} - Video tutorial and service demonstration thumbnail`}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  thumbnailLoaded ? 'opacity-100' : 'opacity-0'
                } group-hover:scale-110`}
                onLoad={() => setThumbnailLoaded(true)}
                onError={() => setThumbnailLoaded(true)}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Play Button Overlay - Only visible on hover */}
              <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                <DialogTrigger asChild>
                  <div className={`absolute inset-0 bg-black/40 transition-all duration-500 flex items-center justify-center cursor-pointer ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="relative">
                      {/* Animated Ring */}
                      <div className="absolute inset-0 w-20 h-20 border-2 border-white/60 rounded-full animate-ping" />
                      {/* Play Button */}
                      <div className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                        <Play className="w-8 h-8 text-black ml-1" />
                      </div>
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
                        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
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
          
        </div>

        {/* Content Section */}
        <div className="p-4 flex-1 flex flex-col relative">
          {/* Premium Border Accent */}
          <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${styles.gradient}`} />
          
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-primary-glow transition-colors duration-300">
              {title}
            </h3>
            
            {subtitle && (
              <p className="text-white/70 text-sm mb-3 leading-relaxed">
                {subtitle}
              </p>
            )}

            {description && (
              <p className="text-white/60 text-sm mb-4 leading-relaxed">
                {description}
              </p>
            )}

            {/* Features List */}
            <ul className="space-y-1.5 mb-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-white/80 group-hover:text-white/90 transition-colors duration-300">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-primary-glow rounded-full mt-1.5 flex-shrink-0 shadow-sm" />
                  <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: feature }} />
                </li>
              ))}
            </ul>
          </div>

          {/* Price Display */}
          {price && (
            <div className="mb-3 p-2.5 rounded-lg bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-lg font-black text-white">{price}</div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3 mt-auto">
            {/* Primary CTA - Shopify Buy Button */}
            <div ref={containerRef} className="w-full" />
            {!containerRef.current?.innerHTML && (
              <Button 
                onClick={createBuyButton}
                className="w-full bg-gradient-to-r from-primary via-primary-glow to-primary hover:from-primary-glow hover:via-primary hover:to-primary-glow text-white font-bold py-3 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-xl shadow-lg relative overflow-hidden group/btn"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                <span className="font-semibold text-sm">Prenota Ora</span>
              </Button>
            )}

            {/* Secondary CTA - Video Link */}
            <Button
              variant="outline"
              onClick={() => setIsVideoOpen(true)}
              className="w-full border-2 border-white/20 text-white/80 hover:text-white hover:bg-white/5 hover:border-white/40 rounded-xl py-2.5 transition-all duration-300 backdrop-blur-sm group/btn2"
            >
              <Play className="w-3.5 h-3.5 mr-2 group-hover/btn2:scale-110 transition-transform duration-300" />
              <span className="font-medium text-sm">Guarda il video</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoServiceCard;