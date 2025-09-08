import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { PremiumService } from "@/data/serviceRegistry";

interface PremiumServiceCardProps {
  service: PremiumService;
  index: number;
  className?: string;
}

const PremiumServiceCard = ({ service, index, className = "" }: PremiumServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoError, setIsVideoError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const IconComponent = service.icon;

  // Pillar colors
  const pillarColors = {
    'Sales On Demand': { bg: 'from-blue-600/20 to-cyan-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
    'Consulting': { bg: 'from-purple-600/20 to-pink-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
    'AI & Automation': { bg: 'from-green-600/20 to-emerald-500/10', text: 'text-green-400', border: 'border-green-500/30' }
  };

  const colors = pillarColors[service.pillar as keyof typeof pillarColors] || pillarColors['AI & Automation'];

  // Video preloading and hover effects
  useEffect(() => {
    const video = videoRef.current;
    if (!video || isVideoLoaded || isVideoError) return;

    const handleLoad = () => setIsVideoLoaded(true);
    const handleError = () => setIsVideoError(true);

    video.addEventListener('loadeddata', handleLoad);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadeddata', handleLoad);
      video.removeEventListener('error', handleError);
    };
  }, [isVideoLoaded, isVideoError]);

  // Handle hover video play/pause
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVideoLoaded) return;

    if (isHovered && !isPlaying) {
      video.currentTime = 0;
      video.play().catch(() => {});
      setIsPlaying(true);
    } else if (!isHovered && isPlaying) {
      video.pause();
      setIsPlaying(false);
    }
  }, [isHovered, isVideoLoaded, isPlaying]);

  return (
    <div 
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${colors.bg} backdrop-blur-sm border ${colors.border} hover:border-opacity-60 transition-all duration-500 hover:scale-[1.02] transform-gpu ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ minHeight: '420px' }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        {!isVideoError && (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-30 transition-opacity duration-700"
            src={service.video}
            poster={service.poster}
            loop
            muted
            playsInline
            preload="metadata"
          />
        )}
        {isVideoError && (
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-500"
            style={{ backgroundImage: `url(${service.poster})` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-900/85 group-hover:from-slate-900/90 group-hover:via-slate-900/85 group-hover:to-slate-900/80 transition-colors duration-500" />
      </div>

      {/* Floating Light Effect */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6">
        {/* Header */}
        <div>
          {/* Pillar Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-white/60 to-white/30" />
            <span className={`text-xs font-medium ${colors.text}`}>
              {service.pillar}
            </span>
          </div>

          {/* Service Title & Subtitle */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold text-white leading-tight">{service.title}</h3>
              {service.badge && (
                <span className="text-xs bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-300 px-2 py-1 rounded-full font-medium border border-amber-500/20">
                  {service.badge}
                </span>
              )}
            </div>
            <p className="text-sm text-slate-300">{service.subtitle}</p>
          </div>

          {/* Icon */}
          <div className="flex items-center justify-center w-12 h-12 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 mb-4 group-hover:bg-white/10 transition-colors duration-300">
            <IconComponent className={`w-6 h-6 ${colors.text}`} />
          </div>

          {/* Description */}
          <p className="text-slate-300 text-sm mb-4 line-clamp-2">
            {service.description}
          </p>

          {/* Features */}
          <div className="space-y-2 mb-6">
            {service.features.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${colors.text.replace('text-', 'bg-')}`} />
                <span className="text-xs text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <Button 
            asChild 
            size="sm"
            className="flex-1 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 backdrop-blur-sm font-medium"
          >
            <Link to={service.route} className="flex items-center justify-center gap-2">
              Scopri di più
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </Button>

          {/* Play Video Indicator */}
          {!isVideoError && (
            <div className="flex items-center justify-center w-8 h-8 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors">
              <Play className="w-3 h-3 text-white/60" />
            </div>
          )}
        </div>
      </div>

      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default PremiumServiceCard;