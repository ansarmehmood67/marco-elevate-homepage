import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Utility to detect if URL is a video file
const isVideoUrl = (url: string): boolean => {
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov'];
  return videoExtensions.some(ext => url.toLowerCase().includes(ext));
};

interface ServiceCardProps {
  service: {
    title: string;
    subtitle: string;
    pillar: string;
    icon: any;
    accent: string;
    path: string;
    video: string;
    poster: string;
  };
  index: number;
  className?: string;
  staticDisplay?: boolean;
}

const ServiceCard = ({ 
  service, 
  index, 
  className = "",
  staticDisplay = false 
}: ServiceCardProps) => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMediaLoaded, setIsMediaLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const isVideo = isVideoUrl(service.video);

  const pillarColors = {
    "Sales On Demand": "text-[#87CEEB]",
    "Consulting": "text-purple-300",
    "AI & Automation": "text-green-300"
  };

  // Intersection observer for lazy loading
  useEffect(() => {
    if (!cardRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "50px" }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  // Media loading (video or image)
  useEffect(() => {
    if (!isInView) return;
    
    if (isVideo && videoRef.current) {
      const video = videoRef.current;
      const io = new IntersectionObserver(
        ([entry]) => { 
          if (entry.isIntersecting) video.load(); 
        }, 
        { rootMargin: "120px" }
      );
      io.observe(video);
      return () => io.unobserve(video);
    }
  }, [isInView, isVideo]);

  // Video playback control (only for videos)
  useEffect(() => {
    if (!isVideo || !videoRef.current || !isMediaLoaded || staticDisplay) return;
    const v = videoRef.current;
    
    if (isHovered) {
      v.play().catch(() => setHasError(true));
    } else {
      v.pause();
      v.currentTime = 0;
    }
  }, [isHovered, isMediaLoaded, staticDisplay, isVideo]);

  const handleClick = () => {
    navigate(service.path);
  };

  return (
    <div
      ref={cardRef}
      className={`
        relative group cursor-pointer transition-all duration-300 hover:-translate-y-1
        ${staticDisplay ? 'w-full aspect-[4/5] min-h-[350px] max-h-[450px]' : 'flex-shrink-0 w-[320px] lg:w-[360px] h-[520px] lg:h-[560px]'}
        ${className}
      `}
      style={{ scrollSnapAlign: "start" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      aria-label={`Navigate to ${service.title} service page`}
    >
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        {!isMediaLoaded && !hasError && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse" />
        )}
        
        {isVideo ? (
          <video
            ref={videoRef}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isMediaLoaded ? "opacity-100" : "opacity-0"
            }`}
            src={service.video}
            poster={service.poster || "https://res.cloudinary.com/dsergeqc9/image/upload/f_auto,q_auto,w_800/v1758129785/video_poster.jpg"}
            muted
            loop
            playsInline
            preload="metadata"
            width="360"
            height="560"
            onLoadedData={() => setIsMediaLoaded(true)}
            onError={() => setHasError(true)}
            style={{ transform: "translate3d(0,0,0)" }}
          />
        ) : (
          <img
            ref={imageRef}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isMediaLoaded ? "opacity-100" : "opacity-0"
            }`}
            src={service.video}
            alt={`${service.title} - ${service.subtitle} service demonstration`}
            width="360"
            height="560"
            loading="lazy"
            decoding="async"
            onLoad={() => setIsMediaLoaded(true)}
            onError={() => setHasError(true)}
            style={{ transform: "translate3d(0,0,0)" }}
          />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      </div>

      <div className="absolute inset-0 rounded-3xl border border-white/10 shadow-2xl transition-all duration-300 group-hover:shadow-primary/20"></div>

      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className={`text-xs font-bold uppercase tracking-[0.2em] ${
            pillarColors[service.pillar as keyof typeof pillarColors] || "text-white/80"
          }`}>
            {service.pillar}
          </div>
          <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight max-w-xs">
            {service.title}
          </h3>
          <p className="text-sm lg:text-base text-gray-200 font-medium leading-relaxed max-w-sm">
            {service.subtitle}
          </p>
          <Button
            onClick={(e) => { 
              e.stopPropagation(); 
              handleClick(); 
            }}
            className="mt-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 px-6 py-3 text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
            size="sm"
          >
            Scopri di più
          </Button>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
    </div>
  );
};

export default ServiceCard;