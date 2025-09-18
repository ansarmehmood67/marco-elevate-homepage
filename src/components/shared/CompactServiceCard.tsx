import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Play, ArrowRight, Clock, Video, Globe } from "lucide-react";
import { Link } from 'react-router-dom';

interface CompactServiceCardProps {
  title: string;
  subtitle: string;
  price: string;
  category: 'basic' | 'popular' | 'premium';
  youtubeUrl: string;
  rating?: number;
  reviewCount?: number;
  availability?: 'available' | 'limited' | 'sold-out';
  slug: string;
  basePath: string; // e.g., "/consulenza-strategica/sales-services"
}

const CompactServiceCard: React.FC<CompactServiceCardProps> = ({
  title,
  subtitle,
  price,
  category,
  youtubeUrl,
  rating = 5,
  reviewCount = 45,
  availability = 'available',
  slug,
  basePath
}) => {
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
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
          badge: 'bg-primary text-white',
          badgeText: 'Più Scelto',
          card: 'ring-2 ring-primary/40 hover:ring-primary/60',
          glow: 'hover:shadow-[0_0_30px_rgba(46,139,192,0.4)]'
        };
      case 'premium':
        return {
          badge: 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black',
          badgeText: 'Premium',
          card: 'ring-2 ring-yellow-500/40 hover:ring-yellow-500/60',
          glow: 'hover:shadow-[0_0_30px_rgba(234,179,8,0.4)]'
        };
      default:
        return {
          badge: 'bg-slate-600 text-white',
          badgeText: 'Base',
          card: 'hover:ring-2 hover:ring-slate-300',
          glow: 'hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]'
        };
    }
  };

  const getAvailabilityStatus = () => {
    switch (availability) {
      case 'available':
        return { color: 'text-green-600', text: 'Disponibile', icon: '🟢' };
      case 'limited':
        return { color: 'text-yellow-600', text: 'Posti Limitati', icon: '🟡' };
      case 'sold-out':
        return { color: 'text-red-600', text: 'Esaurito', icon: '🔴' };
      default:
        return { color: 'text-green-600', text: 'Disponibile', icon: '🟢' };
    }
  };


  const getConvertingCTA = () => {
    switch (category) {
      case 'popular':
        return 'Inizia Subito';
      case 'premium':
        return 'Ottieni Risultati';
      default:
        return 'Prenota Consulenza';
    }
  };

  const styles = getCategoryStyles();
  const availabilityInfo = getAvailabilityStatus();
  const ctaText = getConvertingCTA();

  return (
    <Link to={`${basePath}/${slug}`} className="block">
      <Card 
        className={`group relative overflow-hidden transition-all duration-500 transform hover:scale-[1.02] cursor-pointer ${styles.card} ${styles.glow} 
          bg-[#F8FAFC] border border-[#E5E7EB] 
          w-full max-w-md min-w-[350px] min-h-[600px] mx-auto
          shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)]`}
        style={{ boxShadow: 'var(--card-premium-shadow)' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Category Badge */}
        {category !== 'basic' && (
          <div className="absolute top-6 left-6 z-20">
            <Badge className={`${styles.badge} font-bold px-4 py-2 text-sm shadow-lg rounded-lg`}>
              {styles.badgeText}
            </Badge>
          </div>
        )}

        {/* Floating Light Effect */}
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/20 rounded-full filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <CardContent className="p-0 h-full flex flex-col relative z-10">
          {/* Video Thumbnail Section */}
          <div className="relative aspect-video overflow-hidden rounded-t-xl">
            {thumbnailUrl && (
              <>
                 <img
                   src={thumbnailUrl}
                   alt={`${title} preview`}
                   width={400}
                   height={225}
                   loading="lazy"
                   className={`w-full h-full object-cover transition-all duration-500 ${
                     thumbnailLoaded ? 'opacity-100' : 'opacity-0'
                   } group-hover:scale-105`}
                   onLoad={() => setThumbnailLoaded(true)}
                  onError={() => setThumbnailLoaded(true)}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                
                {/* Play Button Overlay - Only visible on hover */}
                <div className={`absolute inset-0 bg-black/30 transition-all duration-500 flex items-center justify-center ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="w-20 h-20 bg-white/95 hover:bg-white rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110 backdrop-blur-sm shadow-xl">
                    <Play className="w-9 h-9 text-black ml-1" />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Content Section */}
          <div className="p-8 flex-1 flex flex-col">

            {/* Title - Zoom-safe clamped to 2 lines */}
            <h3 className="text-constrained-2xl font-black text-slate-900 mb-4 leading-constrained-tight line-clamp-2 group-hover:text-primary transition-colors duration-300 tracking-tight break-words hyphens-auto">
              {title}
            </h3>
            
            {/* Subtitle */}
            <p className="text-constrained-lg font-semibold text-slate-600 mb-6 leading-constrained-normal line-clamp-2 break-words">
              {subtitle}
            </p>

            {/* Meta chips row - Duration, Format, Language */}
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="flex items-center gap-1 px-2 py-1 bg-slate-100 rounded-md text-xs font-medium text-slate-600">
                <Clock className="w-3 h-3" />
                <span>240 min</span>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-slate-100 rounded-md text-xs font-medium text-slate-600">
                <Video className="w-3 h-3" />
                <span>Zoom / In sede</span>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-slate-100 rounded-md text-xs font-medium text-slate-600">
                <Globe className="w-3 h-3" />
                <span>ITA/ENG</span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="text-slate-500 text-sm font-medium">({reviewCount} recensioni)</span>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2 mb-6">
              <span className={`text-sm font-semibold ${availabilityInfo.color}`}>
                {availabilityInfo.icon} {availabilityInfo.text}
              </span>
            </div>

            {/* Price - Clean text format */}
            <div className="mb-8">
              <div className="text-center">
                <div className="text-constrained-3xl font-black text-slate-900 mb-1">{price}</div>
                <div className="text-xs text-slate-500 border-b border-slate-200 inline-block pb-1">
                  IVA inclusa · Fattura elettronica
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-auto">
              <Button className="w-full bg-gradient-to-r from-primary via-primary-glow to-primary hover:from-primary-glow hover:via-primary hover:to-primary-glow text-white font-bold py-6 text-xl rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-xl shadow-lg relative overflow-hidden group/btn">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                <span className="flex items-center justify-center gap-3 font-bold">
                  {ctaText}
                  <ArrowRight className="w-7 h-7 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CompactServiceCard;