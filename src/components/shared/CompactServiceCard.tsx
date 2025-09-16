import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Play, ArrowRight } from "lucide-react";
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
          glow: 'hover:shadow-[0_0_25px_rgba(46,139,192,0.3)]'
        };
      case 'premium':
        return {
          badge: 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black',
          badgeText: 'Premium',
          card: 'ring-2 ring-yellow-500/40 hover:ring-yellow-500/60',
          glow: 'hover:shadow-[0_0_25px_rgba(234,179,8,0.3)]'
        };
      default:
        return {
          badge: 'bg-slate-600 text-white',
          badgeText: 'Base',
          card: 'hover:ring-2 hover:ring-slate-300',
          glow: 'hover:shadow-[0_0_25px_rgba(0,0,0,0.1)]'
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

  const styles = getCategoryStyles();
  const availabilityInfo = getAvailabilityStatus();

  return (
    <Card 
      className={`group relative overflow-hidden transition-all duration-500 transform hover:scale-[1.03] ${styles.card} ${styles.glow} bg-gradient-to-br from-white via-white to-slate-50/30 border-2 border-slate-200/60 shadow-premium hover:shadow-premium-xl h-[600px] w-[420px]`}
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
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 rounded-t-xl">
          {thumbnailUrl && (
            <>
              <img
                src={thumbnailUrl}
                alt={`${title} preview`}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  thumbnailLoaded ? 'opacity-100' : 'opacity-0'
                } group-hover:scale-110`}
                onLoad={() => setThumbnailLoaded(true)}
                onError={() => setThumbnailLoaded(true)}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              
              {/* Play Button Overlay - Only visible on hover */}
              <div className={`absolute inset-0 bg-black/30 transition-all duration-500 flex items-center justify-center ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="w-16 h-16 bg-white/95 hover:bg-white rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110 backdrop-blur-sm shadow-xl">
                  <Play className="w-7 h-7 text-black ml-0.5" />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Content Section */}
        <div className="p-8 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          
          {/* Subtitle */}
          <p className="text-slate-600 text-lg font-medium mb-5 leading-relaxed line-clamp-2">
            {subtitle}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-6 h-6 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <span className="text-slate-500 text-base font-medium">({reviewCount} recensioni)</span>
          </div>

          {/* Availability */}
          <div className="flex items-center gap-3 mb-6">
            <span className={`text-lg font-semibold ${availabilityInfo.color}`}>
              {availabilityInfo.icon} {availabilityInfo.text}
            </span>
          </div>

          {/* Price */}
          <div className="mb-8 p-5 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200/50 shadow-sm">
            <div className="text-center">
              <div className="text-3xl font-black text-slate-900">{price}</div>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-auto">
            <Link to={`${basePath}/${slug}`}>
              <Button className="w-full bg-gradient-to-r from-primary via-primary-glow to-primary hover:from-primary-glow hover:via-primary hover:to-primary-glow text-white font-bold py-5 text-lg rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-xl shadow-lg relative overflow-hidden group/btn">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                <span className="flex items-center justify-center gap-3 font-bold">
                  Scopri di più
                  <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompactServiceCard;