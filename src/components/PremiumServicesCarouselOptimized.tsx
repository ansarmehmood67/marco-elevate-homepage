import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowLeft, ArrowRight, Users, PhoneCall, Headphones, Megaphone, PieChart, TrendingUp, Youtube, Bot, UserRound, Workflow, Globe, Cloud, Plug, Zap, Play, Pause, Target, Briefcase, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import Quiz from "@/components/quiz/Quiz";

// Mobile detection utility
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  
  return isMobile;
};

const PremiumServicesCarouselOptimized = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { ref: headerRef, visibleItems: headerItems } = useStaggeredAnimation(3, 100);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isPausedTop, setIsPausedTop] = useState(false);
  const [isPausedBottom, setIsPausedBottom] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  
  const trackTopRef = useRef<HTMLDivElement>(null);
  const trackBottomRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameTopRef = useRef<number | null>(null);
  const animationFrameBottomRef = useRef<number | null>(null);
  const topPositionRef = useRef(0);
  const bottomPositionRef = useRef(0);
  const lastTimestampTopRef = useRef(0);
  const lastTimestampBottomRef = useRef(0);

  const allServices = [
    // Sales On Demand (4 services)
    { 
      title: "Outsourcing Salesforce", 
      subtitle: "Team vendita dedicato",
      pillar: "Sales On Demand",
      icon: Users,
      accent: "blue",
      path: "/outsourcing-salesforce",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290356/outsourced_sales_force_page_ydama6.mp4",
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290356/outsourced_sales_force_page_ydama6.jpg"
    },
    { 
      title: "Telemarketing & Teleselling", 
      subtitle: "Chiamate commerciali professionali",
      pillar: "Sales On Demand",
      icon: PhoneCall,
      accent: "blue",
      path: "/telemarketing-teleselling",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290362/telemarketing_page_1_vrqa0n.mp4",
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290362/telemarketing_page_1_vrqa0n.jpg"
    },
    { 
      title: "Contact Center Inbound", 
      subtitle: "Supporto clienti professionale",
      pillar: "Sales On Demand",
      icon: Headphones,
      accent: "blue",
      path: "/contact-center-inbound",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290377/inbound_contact_center_page_a8rtme.mp4",
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290377/inbound_contact_center_page_a8rtme.jpg"
    },
    { 
      title: "Outsourcing Marketing", 
      subtitle: "Marketing completo in outsourcing",
      pillar: "Sales On Demand",
      icon: Megaphone,
      accent: "blue",
      path: "/outsourcing-marketing",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290298/outsourced_markteting_page_ndawq6.mp4",
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290298/outsourced_markteting_page_ndawq6.jpg"
    },
    // Consulenza Strategica (3 services)
    { 
      title: "Servizi Vendite", 
      subtitle: "Consulenza strategica vendite",
      pillar: "Consulting",
      icon: Target,
      accent: "violet",
      path: "/consulenza-strategica/sales-services",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290356/outsourced_sales_force_page_ydama6.mp4",
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290356/outsourced_sales_force_page_ydama6.jpg"
    },
    { 
      title: "Servizi Marketing", 
      subtitle: "Strategia marketing personalizzata",
      pillar: "Consulting",
      icon: TrendingUp,
      accent: "violet",
      path: "/consulenza-strategica/marketing-services",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290298/outsourced_markteting_page_ndawq6.mp4",
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290298/outsourced_markteting_page_ndawq6.jpg"
    },
    { 
      title: "Servizi Consulenza", 
      subtitle: "Consulenza strategica completa",
      pillar: "Consulting",
      icon: Briefcase,
      accent: "violet",
      path: "/consulenza-strategica/consultation-services",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290380/ai_tools_page_uqjdsu.mp4",
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290380/ai_tools_page_uqjdsu.jpg"
    },
    // AI & Automation (8 services)
    { 
      title: "Monetizza YouTube", 
      subtitle: "Trasforma i video in profitti",
      pillar: "AI & Automation",
      icon: Youtube,
      accent: "green",
      path: "/monetizza-youtube",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1755364792/20250816_2127_Marketing_Team_Strategy_Buzz_simple_compose_01k2sva0wpexqa68v9zccbyxq1_nxgujp.mp4",
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1755364792/20250816_2127_Marketing_Team_Strategy_Buzz_simple_compose_01k2sva0wpexqa68v9zccbyxq1_nxgujp.jpg"
    },
    { 
      title: "Instant Avatar", 
      subtitle: "Avatar AI per video personali",
      pillar: "AI & Automation",
      icon: UserRound,
      accent: "green",
      path: "/instant-avatar",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290666/instant_avatar_page_yxlyqy.mp4",
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290666/instant_avatar_page_yxlyqy.jpg"
    },
    { 
      title: "Chatbot AI", 
      subtitle: "Assistenti virtuali intelligenti",
      pillar: "AI & Automation",
      icon: Bot,
      accent: "green",
      path: "/chatbot-ai",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290521/chatbot_ai_page_jgsw1x.mp4",
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290521/chatbot_ai_page_jgsw1x.jpg"
    },
    { 
      title: "Automazione AI", 
      subtitle: "Processi automatizzati con AI",
      pillar: "AI & Automation",
      icon: Workflow,
      accent: "green",
      path: "/automazione-ai",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290567/ai_automation_page_audup1.mp4",
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290567/ai_automation_page_audup1.jpg"
    },
    { 
      title: "Web & App Development", 
      subtitle: "Sviluppo applicazioni su misura",
      pillar: "AI & Automation",
      icon: Globe,
      accent: "green",
      path: "/web-app-development",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290228/web_and_app_development_page_xnkfqj.mp4",
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290228/web_and_app_development_page_xnkfqj.jpg"
    },
    { 
      title: "Piattaforme SaaS", 
      subtitle: "Software as a Service personalizzato",
      pillar: "AI & Automation",
      icon: Cloud,
      accent: "green",
      path: "/saas-platforms",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290535/saas_tools_page_inne6r.mp4",
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290535/saas_tools_page_inne6r.jpg"
    },
    { 
      title: "Smart AI Tools", 
      subtitle: "Strumenti AI per il business",
      pillar: "AI & Automation",
      icon: Zap,
      accent: "green",
      path: "/smart-ai-tools",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290380/ai_tools_page_uqjdsu.mp4",
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290380/ai_tools_page_uqjdsu.jpg"
    },
    { 
      title: "AI Integration", 
      subtitle: "Integrazione AI nei processi",
      pillar: "AI & Automation",
      icon: Plug,
      accent: "green",
      path: "/ai-integration",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290499/ai_integrations_page_dwcnaj.mp4",
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290499/ai_integrations_page_dwcnaj.jpg"
    }
  ];

  // Split services into two rows
  const topRowServices = allServices.slice(0, 8); // First 8 services
  const bottomRowServices = allServices.slice(8); // Last 7 services

  // Triple services for seamless infinite loop
  const extendedTopServices = [...topRowServices, ...topRowServices, ...topRowServices];
  const extendedBottomServices = [...bottomRowServices, ...bottomRowServices, ...bottomRowServices];

  const CARD_WIDTH = 365; // width + gap
  const SPEED_TOP = 0.5; // pixels per millisecond
  const SPEED_BOTTOM = -0.6; // pixels per millisecond (negative for right to left)

  // Section intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '50px 0px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // JavaScript-based animation for top row
  const animateTopRow = useCallback((timestamp: number) => {
    if (!trackTopRef.current || !isInView || isPausedTop) return;

    if (lastTimestampTopRef.current === 0) {
      lastTimestampTopRef.current = timestamp;
    }

    const deltaTime = timestamp - lastTimestampTopRef.current;
    lastTimestampTopRef.current = timestamp;

    topPositionRef.current -= SPEED_TOP * deltaTime;
    
    const maxOffset = topRowServices.length * CARD_WIDTH;
    if (topPositionRef.current <= -maxOffset) {
      topPositionRef.current = 0;
    }

    trackTopRef.current.style.transform = `translate3d(${topPositionRef.current}px, 0, 0)`;
    
    if (!isPausedTop) {
      animationFrameTopRef.current = requestAnimationFrame(animateTopRow);
    }
  }, [isInView, isPausedTop, topRowServices.length]);

  // JavaScript-based animation for bottom row
  const animateBottomRow = useCallback((timestamp: number) => {
    if (!trackBottomRef.current || !isInView || isPausedBottom) return;

    if (lastTimestampBottomRef.current === 0) {
      lastTimestampBottomRef.current = timestamp;
    }

    const deltaTime = timestamp - lastTimestampBottomRef.current;
    lastTimestampBottomRef.current = timestamp;

    bottomPositionRef.current -= SPEED_BOTTOM * deltaTime;
    
    const maxOffset = bottomRowServices.length * CARD_WIDTH;
    if (bottomPositionRef.current >= 0) {
      bottomPositionRef.current = -maxOffset;
    }

    trackBottomRef.current.style.transform = `translate3d(${bottomPositionRef.current}px, 0, 0)`;
    
    if (!isPausedBottom) {
      animationFrameBottomRef.current = requestAnimationFrame(animateBottomRow);
    }
  }, [isInView, isPausedBottom, bottomRowServices.length]);

  // Start animations when in view
  useEffect(() => {
    if (isInView && !isPausedTop) {
      lastTimestampTopRef.current = 0;
      animationFrameTopRef.current = requestAnimationFrame(animateTopRow);
    } else if (animationFrameTopRef.current) {
      cancelAnimationFrame(animationFrameTopRef.current);
    }

    return () => {
      if (animationFrameTopRef.current) {
        cancelAnimationFrame(animationFrameTopRef.current);
      }
    };
  }, [isInView, isPausedTop, animateTopRow]);

  useEffect(() => {
    if (isInView && !isPausedBottom) {
      lastTimestampBottomRef.current = 0;
      animationFrameBottomRef.current = requestAnimationFrame(animateBottomRow);
    } else if (animationFrameBottomRef.current) {
      cancelAnimationFrame(animationFrameBottomRef.current);
    }

    return () => {
      if (animationFrameBottomRef.current) {
        cancelAnimationFrame(animationFrameBottomRef.current);
      }
    };
  }, [isInView, isPausedBottom, animateBottomRow]);

  // Mobile scroll-based pausing and video auto-play
  useEffect(() => {
    if (!isMobile || !isInView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const newVisibleCards = new Set<number>();
        let topRowHasVisible = false;
        let bottomRowHasVisible = false;

        entries.forEach((entry) => {
          const cardIndex = parseInt(entry.target.getAttribute('data-card-index') || '0');
          const cardRow = entry.target.getAttribute('data-card-row');
          
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            newVisibleCards.add(cardIndex);
            
            if (cardRow === 'top') topRowHasVisible = true;
            if (cardRow === 'bottom') bottomRowHasVisible = true;

            // Auto-play video for mobile
            const video = entry.target.querySelector('video') as HTMLVideoElement;
            if (video) {
              video.play().catch(() => {});
            }
          } else {
            // Auto-pause video when out of view
            const video = entry.target.querySelector('video') as HTMLVideoElement;
            if (video) {
              video.pause();
            }
          }
        });

        setVisibleCards(newVisibleCards);
        
        // Smart pausing: pause only the row with visible cards
        if (topRowHasVisible && !bottomRowHasVisible) {
          setIsPausedTop(true);
          setIsPausedBottom(false);
        } else if (bottomRowHasVisible && !topRowHasVisible) {
          setIsPausedTop(false);
          setIsPausedBottom(true);
        } else if (!topRowHasVisible && !bottomRowHasVisible) {
          setIsPausedTop(false);
          setIsPausedBottom(false);
        }
      },
      { threshold: [0, 0.5, 1], rootMargin: '-20px' }
    );

    // Observe all cards
    const cardElements = containerRef.current?.querySelectorAll('[data-card-index]');
    cardElements?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [isMobile, isInView]);

  const handleCardClick = useCallback((path: string) => {
    navigate(path);
  }, [navigate]);

  const pillarColors = {
    "Sales On Demand": "text-blue-400",
    "Consulting": "text-violet-400", 
    "AI & Automation": "text-green-400"
  };

  return (
    <section 
      ref={containerRef}
      className="py-20 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M0 0h80v80H0V0zm10 10h60v60H10V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary/10 via-primary/2 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-primary-glow/8 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div ref={headerRef} className="text-center max-w-5xl mx-auto mb-24">
          <div className={`inline-block mb-8 transition-all duration-700 ease-out ${
            headerItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="text-sm font-bold tracking-[0.3em] uppercase px-8 py-4 rounded-full bg-gradient-to-r from-primary/20 to-primary-glow/20 text-primary border border-primary/30 backdrop-blur-sm">
              Premium Solutions
            </span>
          </div>
          
          <h2 className={`text-5xl lg:text-7xl font-black leading-[0.8] tracking-tight text-white mb-10 transition-all duration-700 ease-out ${
            headerItems[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block">
              Soluzioni per la Tua{" "}
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Crescita
            </span>
          </h2>
          
          <p className={`text-xl lg:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto font-light transition-all duration-700 ease-out ${
            headerItems[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Trasforma il tuo business con soluzioni innovative e risultati misurabili.<br />
            <span className="text-primary font-medium">Ogni progetto è su misura per te.</span>
          </p>
        </div>

        {/* Two-Row Carousel */}
        <div className="relative space-y-8">
          {/* Edge Fade Gradients */}
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          {/* Top Row - Left to Right */}
          <div 
            className="overflow-hidden"
            onMouseEnter={() => !isMobile && setIsPausedTop(true)}
            onMouseLeave={() => !isMobile && setIsPausedTop(false)}
          >
            <div
              ref={trackTopRef}
              className="flex gap-5"
              style={{ 
                willChange: 'transform',
                transform: 'translate3d(0, 0, 0)'
              }}
            >
              {extendedTopServices.map((service, index) => (
                <ServiceCard
                  key={`top-${service.title}-${index}`}
                  service={service}
                  index={index}
                  row="top"
                  isHovered={hoveredCard === index}
                  isVisible={visibleCards.has(index)}
                  isMobile={isMobile}
                  isInView={isInView}
                  pillarColors={pillarColors}
                  onMouseEnter={() => {
                    setHoveredCard(index);
                    if (!isMobile) setIsPausedTop(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredCard(null);
                    if (!isMobile) setIsPausedTop(false);
                  }}
                  onClick={() => handleCardClick(service.path)}
                />
              ))}
            </div>
          </div>

          {/* Bottom Row - Right to Left */}
          <div 
            className="overflow-hidden"
            onMouseEnter={() => !isMobile && setIsPausedBottom(true)}
            onMouseLeave={() => !isMobile && setIsPausedBottom(false)}
          >
            <div
              ref={trackBottomRef}
              className="flex gap-5"
              style={{ 
                willChange: 'transform',
                transform: 'translate3d(0, 0, 0)'
              }}
            >
              {extendedBottomServices.map((service, index) => (
                <ServiceCard
                  key={`bottom-${service.title}-${index}`}
                  service={service}
                  index={index + 1000} // Offset to avoid conflicts
                  row="bottom"
                  isHovered={hoveredCard === (index + 1000)}
                  isVisible={visibleCards.has(index + 1000)}
                  isMobile={isMobile}
                  isInView={isInView}
                  pillarColors={pillarColors}
                  onMouseEnter={() => {
                    setHoveredCard(index + 1000);
                    if (!isMobile) setIsPausedBottom(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredCard(null);
                    if (!isMobile) setIsPausedBottom(false);
                  }}
                  onClick={() => handleCardClick(service.path)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Quiz CTA */}
        <div className="text-center mt-20">
          <Button
            onClick={() => setIsQuizOpen(true)}
            className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-2xl hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300"
          >
            Trova la Soluzione Perfetta per Te
          </Button>
        </div>
      </div>

      {isQuizOpen && <Quiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />}
    </section>
  );
};

// Enhanced ServiceCard component
const ServiceCard = ({ 
  service, 
  index, 
  row,
  isHovered, 
  isVisible,
  isMobile, 
  isInView, 
  pillarColors,
  onMouseEnter, 
  onMouseLeave, 
  onClick 
}: {
  service: any;
  index: number;
  row: string;
  isHovered: boolean;
  isVisible: boolean;
  isMobile: boolean;
  isInView: boolean;
  pillarColors: any;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Handle video loading
  useEffect(() => {
    if (!videoRef.current || !isInView) return;

    const video = videoRef.current;
    const handleLoadedData = () => setIsVideoLoaded(true);
    const handleError = () => setHasError(true);

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    // Start loading video when in view
    if (video.src !== service.video) {
      video.src = service.video;
      video.load();
    }

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, [isInView, service.video]);

  // Desktop hover video play
  useEffect(() => {
    if (!videoRef.current || isMobile || !isVideoLoaded) return;

    const video = videoRef.current;
    if (isHovered) {
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isHovered, isMobile, isVideoLoaded]);

  const IconComponent = service.icon;

  return (
    <div
      data-card-index={index}
      data-card-row={row}
      className="flex-shrink-0 w-80 h-96 group cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative w-full h-full rounded-3xl overflow-hidden bg-black shadow-2xl border border-white/10 group-hover:border-primary/30 transition-all duration-500 transform group-hover:scale-105">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          {!hasError ? (
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              poster={service.poster}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <IconComponent className="w-20 h-20 text-white/20" />
            </div>
          )}
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end items-center text-center">
          <div className="space-y-4">
            {/* Service pillar */}
            <div className={`text-sm font-bold uppercase tracking-wider ${pillarColors[service.pillar]} opacity-90`}>
              {service.pillar}
            </div>
            
            {/* Title */}
            <h3 className="text-3xl font-black text-white leading-tight">
              {service.title}
            </h3>
            
            {/* Subtitle */}
            <p className="text-gray-300 text-lg font-medium leading-relaxed">
              {service.subtitle}
            </p>

            {/* CTA Button */}
            <Button
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
              className="mt-6 bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-white font-bold py-3 px-6 rounded-xl text-base shadow-lg hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300"
            >
              Scopri di più
            </Button>
          </div>
        </div>

        {/* Premium border effect */}
        <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-primary/20 via-transparent to-primary-glow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ 
          background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'exclude',
          padding: '2px',
        }}></div>
      </div>
    </div>
  );
};

export default PremiumServicesCarouselOptimized;