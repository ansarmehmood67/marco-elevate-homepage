import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowLeft, ArrowRight, Users, PhoneCall, Headphones, Megaphone, PieChart, TrendingUp, Youtube, Bot, UserRound, Workflow, Globe, Cloud, Plug, Zap, Play, Pause, Target, Briefcase, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import Quiz from "@/components/quiz/Quiz";

/* ----------------------------- Utilities ----------------------------- */

// Mobile detection utility
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIsMobile = () =>
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);
  return isMobile;
};

// Snap helper: freeze track at nearest card edge
const snapTrackToNearestCard = (track: HTMLDivElement, cardWidth: number) => {
  const cs = getComputedStyle(track);
  const matrix = new DOMMatrixReadOnly(cs.transform === "none" ? "" : cs.transform);
  const currentX = matrix.m41; // translateX
  const offset = Math.abs(currentX) % cardWidth;
  const snapDelta = offset < cardWidth / 2 ? offset : offset - cardWidth;
  const newX = currentX + (currentX <= 0 ? snapDelta : -snapDelta);
  track.style.animationPlayState = "paused";
  track.style.transform = `translate3d(${newX}px, 0, 0)`;
};

/* --------------------------- Main Component -------------------------- */

const PremiumServicesCarouselOptimized = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { ref: headerRef, visibleItems: headerItems } = useStaggeredAnimation(3, 100);

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [playingCards, setPlayingCards] = useState<Set<number>>(new Set());
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const [isPausedTop, setIsPausedTop] = useState(false);
  const [isPausedBottom, setIsPausedBottom] = useState(false);
  const [isInView, setIsInView] = useState(true);

  const trackTopRef = useRef<HTMLDivElement>(null);
  const trackBottomRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const topInitializedRef = useRef(false);
  const bottomInitializedRef = useRef(false);

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
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290356/outsourced_sales_force_page_ydama6.jpg",
    },
    {
      title: "Telemarketing & Teleselling",
      subtitle: "Chiamate commerciali professionali",
      pillar: "Sales On Demand",
      icon: PhoneCall,
      accent: "blue",
      path: "/telemarketing-teleselling",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290362/telemarketing_page_1_vrqa0n.mp4",
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290362/telemarketing_page_1_vrqa0n.jpg",
    },
    {
      title: "Contact Center Inbound",
      subtitle: "Supporto clienti professionale",
      pillar: "Sales On Demand",
      icon: Headphones,
      accent: "blue",
      path: "/contact-center-inbound",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290377/inbound_contact_center_page_a8rtme.mp4",
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290377/inbound_contact_center_page_a8rtme.jpg",
    },
    {
      title: "Outsourcing Marketing",
      subtitle: "Marketing completo in outsourcing",
      pillar: "Sales On Demand",
      icon: Megaphone,
      accent: "blue",
      path: "/outsourcing-marketing",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290298/outsourced_markteting_page_ndawq6.mp4",
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290298/outsourced_markteting_page_ndawq6.jpg",
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
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290356/outsourced_sales_force_page_ydama6.jpg",
    },
    {
      title: "Servizi Marketing",
      subtitle: "Strategia marketing personalizzata",
      pillar: "Consulting",
      icon: TrendingUp,
      accent: "violet",
      path: "/consulenza-strategica/marketing-services",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290298/outsourced_markteting_page_ndawq6.mp4",
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290298/outsourced_markteting_page_ndawq6.jpg",
    },
    {
      title: "Servizi Consulenza",
      subtitle: "Consulenza strategica completa",
      pillar: "Consulting",
      icon: Briefcase,
      accent: "violet",
      path: "/consulenza-strategica/consultation-services",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290380/ai_tools_page_uqjdsu.mp4",
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290380/ai_tools_page_uqjdsu.jpg",
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
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1755364792/20250816_2127_Marketing_Team_Strategy_Buzz_simple_compose_01k2sva0wpexqa68v9zccbyxq1_nxgujp.jpg",
    },
    {
      title: "Instant Avatar",
      subtitle: "Avatar AI per video personali",
      pillar: "AI & Automation",
      icon: UserRound,
      accent: "green",
      path: "/instant-avatar",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290666/instant_avatar_page_yxlyqy.mp4",
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290666/instant_avatar_page_yxlyqy.jpg",
    },
    {
      title: "Chatbot AI",
      subtitle: "Assistenti virtuali intelligenti",
      pillar: "AI & Automation",
      icon: Bot,
      accent: "green",
      path: "/chatbot-ai",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290521/chatbot_ai_page_jgsw1x.mp4",
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290521/chatbot_ai_page_jgsw1x.jpg",
    },
    {
      title: "Automazione AI",
      subtitle: "Processi automatizzati con AI",
      pillar: "AI & Automation",
      icon: Workflow,
      accent: "green",
      path: "/automazione-ai",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290567/ai_automation_page_audup1.mp4",
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290567/ai_automation_page_audup1.jpg",
    },
    {
      title: "Web & App Development",
      subtitle: "Sviluppo applicazioni su misura",
      pillar: "AI & Automation",
      icon: Globe,
      accent: "green",
      path: "/web-app-development",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290228/web_and_app_development_page_xnkfqj.mp4",
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290228/web_and_app_development_page_xnkfqj.jpg",
    },
    {
      title: "Piattaforme SaaS",
      subtitle: "Software as a Service personalizzato",
      pillar: "AI & Automation",
      icon: Cloud,
      accent: "green",
      path: "/saas-platforms",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290535/saas_tools_page_inne6r.mp4",
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290535/saas_tools_page_inne6r.jpg",
    },
    {
      title: "Smart AI Tools",
      subtitle: "Strumenti AI per il business",
      pillar: "AI & Automation",
      icon: Zap,
      accent: "green",
      path: "/smart-ai-tools",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290380/ai_tools_page_uqjdsu.mp4",
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290380/ai_tools_page_uqjdsu.jpg",
    },
    {
      title: "AI Integration",
      subtitle: "Integrazione AI nei processi",
      pillar: "AI & Automation",
      icon: Plug,
      accent: "green",
      path: "/ai-integration",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290499/ai_integrations_page_dwcnaj.mp4",
      poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290499/ai_integrations_page_dwcnaj.jpg",
    },
  ];

  // Split services into two rows
  const topRowServices = allServices.slice(0, 8); // First 8 services
  const bottomRowServices = allServices.slice(8); // Last 7 services

  // Triple services for seamless infinite loop
  const extendedTopServices = [...topRowServices, ...topRowServices, ...topRowServices];
  const extendedBottomServices = [...bottomRowServices, ...bottomRowServices, ...bottomRowServices];

  /* ------------------------ Viewport: section observer ------------------------ */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);

        if (entry.isIntersecting && isMobile) {
          const cardWidth = 365;
          if (trackTopRef.current) {
            snapTrackToNearestCard(trackTopRef.current, cardWidth);
            setIsPausedTop(true); // stop top row at clean card boundary
          }
          // Keep bottom moving naturally
          setIsPausedBottom(false);
        }
      },
      { threshold: 0.15, rootMargin: "80px 0px" }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [isMobile]);

  /* ------------------------ Track animation: init once ------------------------ */
  useEffect(() => {
    if (!trackTopRef.current || !trackBottomRef.current) return;

    const topTrack = trackTopRef.current;
    const bottomTrack = trackBottomRef.current;
    const cardWidth = 365;
    const topRowWidth = topRowServices.length * cardWidth;
    const bottomRowWidth = bottomRowServices.length * cardWidth;

    if (!document.querySelector("#carousel-keyframes")) {
      const style = document.createElement("style");
      style.id = "carousel-keyframes";
      style.textContent = `
        @keyframes slideLeft {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-${topRowWidth}px, 0, 0); }
        }
        @keyframes slideRight {
          from { transform: translate3d(-${bottomRowWidth}px, 0, 0); }
          to { transform: translate3d(0, 0, 0); }
        }
      `;
      document.head.appendChild(style);
    }

    if (!topInitializedRef.current) {
      topTrack.style.animation = `slideLeft 50s linear infinite`;
      topInitializedRef.current = true;
    }
    if (!bottomInitializedRef.current) {
      bottomTrack.style.animation = `slideRight 55s linear infinite`;
      bottomInitializedRef.current = true;
    }
  }, [topRowServices.length, bottomRowServices.length]);

  /* ----------------------- Track animation: play/pause ----------------------- */
  useEffect(() => {
    if (trackTopRef.current) {
      trackTopRef.current.style.animationPlayState = isPausedTop || !isInView ? "paused" : "running";
    }
    if (trackBottomRef.current) {
      trackBottomRef.current.style.animationPlayState = isPausedBottom || !isInView ? "paused" : "running";
    }
  }, [isPausedTop, isPausedBottom, isInView]);

  /* ------------------------------- Handlers -------------------------------- */
  const handlePauseCarousel = useCallback((row: "top" | "bottom" | "both") => {
    if (row === "top" || row === "both") setIsPausedTop(true);
    if (row === "bottom" || row === "both") setIsPausedBottom(true);
  }, []);

  const handleResumeCarousel = useCallback((row: "top" | "bottom" | "both") => {
    if (row === "top" || row === "both") setIsPausedTop(false);
    if (row === "bottom" || row === "both") setIsPausedBottom(false);
  }, []);

  const handleCardClick = useCallback((path: string) => {
    navigate(path);
  }, [navigate]);

  const handleMobileVideoToggle = useCallback((index: number) => {
    setPlayingCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
        setTimeout(() => {
          setPlayingCards((current) => {
            const updated = new Set(current);
            updated.delete(index);
            return updated;
          });
        }, 5000);
      }
      return newSet;
    });
  }, []);

  const pillarColors = {
    "Sales On Demand": "text-blue-400",
    Consulting: "text-violet-400",
    "AI & Automation": "text-green-400",
  } as const;

  return (
    <section
      ref={containerRef}
      className="py-20 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M0 0h80v80H0V0zm10 10h60v60H10V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary/10 via-primary/2 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-primary-glow/8 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-5xl mx-auto mb-24">
          <div
            className={`inline-block mb-8 transition-all duration-700 ease-out ${
              headerItems[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-sm font-bold tracking-[0.3em] uppercase px-8 py-4 rounded-full bg-gradient-to-r from-primary/20 to-primary-glow/20 text-primary border border-primary/30 backdrop-blur-sm">
              Premium Solutions
            </span>
          </div>

          <h2
            className={`text-5xl lg:text-7xl font-black leading-[0.8] tracking-tight text-white mb-10 transition-all duration-700 ease-out ${
              headerItems[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block">Soluzioni per la Tua{" "}</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Crescita
            </span>
          </h2>

          <p
            className={`text-xl lg:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto font-light transition-all duration-700 ease-out ${
              headerItems[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Trasforma il tuo business con soluzioni innovative e risultati misurabili.
            <br />
            <span className="text-primary font-medium">Ogni progetto è su misura per te.</span>
          </p>
        </div>

        {/* Two-Row Carousel */}
        <div className="relative space-y-8">
          {/* Edge Fades */}
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          {/* Top Row - Left to Right */}
          <div
            className="overflow-hidden"
            onMouseEnter={() => handlePauseCarousel("top")}
            onMouseLeave={() => handleResumeCarousel("top")}
            onTouchStart={() => handlePauseCarousel("top")}
            onTouchEnd={() => handleResumeCarousel("top")}
          >
            <div
              ref={trackTopRef}
              className="flex gap-5"
              style={{ willChange: "transform", transform: "translate3d(0, 0, 0)" }}
            >
              {extendedTopServices.map((service, index) => (
                <ServiceCard
                  key={`top-${service.title}-${index}`}
                  service={service}
                  index={index}
                  isHovered={hoveredCard === index}
                  isPlaying={playingCards.has(index)}
                  isMobile={isMobile}
                  isInView={isInView}
                  pillarColors={pillarColors}
                  onMouseEnter={() => {
                    setHoveredCard(index);
                    !isMobile && setIsPausedTop(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredCard(null);
                    !isMobile && setIsPausedTop(false);
                  }}
                  onClick={() => handleCardClick(service.path)}
                  onMobileVideoToggle={() => handleMobileVideoToggle(index)}
                />
              ))}
            </div>
          </div>

          {/* Bottom Row - Right to Left */}
          <div
            className="overflow-hidden"
            onMouseEnter={() => handlePauseCarousel("bottom")}
            onMouseLeave={() => handleResumeCarousel("bottom")}
            onTouchStart={() => handlePauseCarousel("bottom")}
            onTouchEnd={() => handleResumeCarousel("bottom")}
          >
            <div
              ref={trackBottomRef}
              className="flex gap-5"
              style={{ willChange: "transform", transform: "translate3d(0, 0, 0)" }}
            >
              {extendedBottomServices.map((service, index) => (
                <ServiceCard
                  key={`bottom-${service.title}-${index}`}
                  service={service}
                  index={index + 1000}
                  isHovered={hoveredCard === index + 1000}
                  isPlaying={playingCards.has(index + 1000)}
                  isMobile={isMobile}
                  isInView={isInView}
                  pillarColors={pillarColors}
                  onMouseEnter={() => {
                    setHoveredCard(index + 1000);
                    !isMobile && setIsPausedBottom(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredCard(null);
                    !isMobile && setIsPausedBottom(false);
                  }}
                  onClick={() => handleCardClick(service.path)}
                  onMobileVideoToggle={() => handleMobileVideoToggle(index + 1000)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Quiz CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-300 mb-6">
              Non sai da dove iniziare?
              <span className="text-white font-medium"> Lascia che ti guidiamo.</span>
            </p>

            <Button
              onClick={() => setIsQuizOpen(true)}
              className="group bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-white px-10 py-5 text-xl font-semibold rounded-full shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105 border border-primary/20"
            >
              <Zap className="w-6 h-6 mr-3 group-hover:animate-pulse" />
              Fai il Quiz di 45 Secondi
            </Button>

            <p className="text-sm text-gray-400 mt-4">
              ⚡ Risultati immediati • 🎯 Soluzione personalizzata • 💡 Consulenza gratuita
            </p>
          </div>
        </div>

        {/* Quiz Modal */}
        {isQuizOpen && <Quiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />}
      </div>
    </section>
  );
};

/* ----------------------- Service Card (Enhanced) ---------------------- */

const ServiceCard = ({
  service,
  index,
  isHovered,
  isPlaying,
  isMobile,
  isInView,
  pillarColors,
  onMouseEnter,
  onMouseLeave,
  onClick,
  onMobileVideoToggle,
}: {
  service: any;
  index: number;
  isHovered: boolean;
  isPlaying: boolean;
  isMobile: boolean;
  isInView: boolean;
  pillarColors: Record<string, string>;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
  onMobileVideoToggle: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Lazy load when near viewport
  useEffect(() => {
    if (!videoRef.current || !isInView) return;
    const video = videoRef.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.load();
        }
      },
      { rootMargin: "100px" }
    );
    io.observe(video);
    return () => io.unobserve(video);
  }, [isInView]);

  // Desktop: hover play / pause-reset. Mobile controlled by card IO below.
  useEffect(() => {
    if (!videoRef.current || !isVideoLoaded) return;
    const v = videoRef.current;

    if (!isMobile) {
      if (isHovered) {
        v.play().catch(() => setHasError(true));
      } else {
        v.pause();
        v.currentTime = 0;
      }
    }
  }, [isHovered, isMobile, isVideoLoaded]);

  // Mobile: autoplay when card mostly in view, pause+reset out of view
  useEffect(() => {
    if (!isMobile || !cardRef.current || !videoRef.current) return;
    const v = videoRef.current;
    const node = cardRef.current;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!isVideoLoaded) return;
        if (entry.intersectionRatio >= 0.65) {
          v.play().catch(() => { /* ignore */ });
        } else {
          v.pause();
          v.currentTime = 0;
        }
      },
      { threshold: [0, 0.35, 0.65, 1] }
    );

    io.observe(node);
    return () => io.unobserve(node);
  }, [isMobile, isVideoLoaded]);

  const handleVideoClick = (e: React.MouseEvent) => {
    if (isMobile) {
      e.stopPropagation();
      onMobileVideoToggle();
    }
  };

  const handleCardClick = () => {
    if (!isMobile || !isPlaying) {
      onClick();
    }
  };

  return (
    <div
      ref={cardRef}
      className="flex-shrink-0 w-[320px] lg:w-[360px] h-[520px] lg:h-[560px] relative group cursor-pointer transition-all duration-300 hover:-translate-y-1"
      style={{ scrollSnapAlign: "start" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleCardClick}
      aria-label={`Navigate to ${service.title} service page`}
    >
      {/* Video Background */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        {!isVideoLoaded && !hasError && <div className="absolute inset-0 bg-gray-800 animate-pulse" />}

        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-300 ${isVideoLoaded ? "opacity-100" : "opacity-0"}`}
          src={service.video}
          poster={service.poster}
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setIsVideoLoaded(true)}
          onError={() => setHasError(true)}
          onClick={handleVideoClick}
          style={{ transform: "translate3d(0, 0, 0)" }}
        />

        {/* Mobile Play hint (tap) */}
        {isMobile && (
          <div className="absolute inset-0 flex items-center justify-center z-10" onClick={handleVideoClick}>
            <div
              className={`
                bg-black/50 backdrop-blur-sm rounded-full p-4 transition-all duration-300
                ${isHovered ? "scale-0 opacity-0" : "scale-100 opacity-100"}
              `}
            >
              <Play className="w-8 h-8 text-white" fill="currentColor" />
            </div>
          </div>
        )}

        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      </div>

      {/* Card Border */}
      <div className="absolute inset-0 rounded-3xl border border-white/10 shadow-2xl transition-all duration-300 group-hover:shadow-primary/20"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className={`text-xs font-bold uppercase tracking-[0.2em] ${pillarColors[service.pillar as keyof typeof pillarColors] || "text-white/80"}`}>
            {service.pillar}
          </div>

          <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight max-w-xs">
            {service.title}
          </h3>

          <p className="text-base lg:text-lg text-gray-200 font-medium leading-relaxed max-w-sm">
            {service.subtitle}
          </p>

          <Button
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="mt-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 px-6 py-3 text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
            size="sm"
          >
            Scopri di più
          </Button>
        </div>
      </div>

      {/* Hover tint */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
    </div>
  );
};

export default PremiumServicesCarouselOptimized;
