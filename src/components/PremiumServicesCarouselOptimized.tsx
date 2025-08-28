import { useState, useEffect, useRef, useCallback } from "react";
import {
  Users, PhoneCall, Headphones, Megaphone, TrendingUp, Youtube, Bot, UserRound,
  Workflow, Globe, Cloud, Plug, Zap, Target, Briefcase, ArrowLeft, ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import Quiz from "@/components/quiz/Quiz";

/* ----------------------------- Helpers ----------------------------- */

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

const getGapPx = (el: HTMLElement | null) => {
  if (!el) return 0;
  const cs = getComputedStyle(el);
  const gapStr = (cs.columnGap || cs.gap || "0").toString();
  const gap = parseFloat(gapStr) || 0;
  return gap;
};

const getCardStride = (container: HTMLDivElement | null) => {
  if (!container) return 360; // fallback
  const track = container.querySelector(":scope > div.flex");
  if (!track) return 360;
  const first = track.children[0] as HTMLElement | undefined;
  if (!first) return 360;
  const width = first.getBoundingClientRect().width;
  const gap = getGapPx(track as HTMLElement);
  return Math.round(width + gap);
};

/* --------------------------- Main Component -------------------------- */

const PremiumServicesCarouselOptimized = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { ref: headerRef, visibleItems: headerItems } = useStaggeredAnimation(3, 100);

  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [playingCards, setPlayingCards] = useState<Set<string>>(new Set());
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isInView, setIsInView] = useState(true);

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const topRowContainerRef = useRef<HTMLDivElement>(null);
  const bottomRowContainerRef = useRef<HTMLDivElement>(null);

  // services (exactly 14 -> 7 + 7)
  const allServices = [
    { title: "Outsourcing Salesforce", subtitle: "Team vendita dedicato", pillar: "Sales On Demand", icon: Users, accent: "blue", path: "/outsourcing-salesforce", video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290356/outsourced_sales_force_page_ydama6.mp4", poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290356/outsourced_sales_force_page_ydama6.jpg" },
    { title: "Telemarketing & Teleselling", subtitle: "Chiamate commerciali professionali", pillar: "Sales On Demand", icon: PhoneCall, accent: "blue", path: "/telemarketing-teleselling", video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290362/telemarketing_page_1_vrqa0n.mp4", poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290362/telemarketing_page_1_vrqa0n.jpg" },
    { title: "Contact Center Inbound", subtitle: "Supporto clienti professionale", pillar: "Sales On Demand", icon: Headphones, accent: "blue", path: "/contact-center-inbound", video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290377/inbound_contact_center_page_a8rtme.mp4", poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290377/inbound_contact_center_page_a8rtme.jpg" },
    { title: "Outsourcing Marketing", subtitle: "Marketing completo in outsourcing", pillar: "Sales On Demand", icon: Megaphone, accent: "blue", path: "/outsourcing-marketing", video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290298/outsourced_markteting_page_ndawq6.mp4", poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290298/outsourced_markteting_page_ndawq6.jpg" },
    { title: "Servizi Vendite", subtitle: "Consulenza strategica vendite", pillar: "Consulting", icon: Target, accent: "violet", path: "/consulenza-strategica/sales-services", video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290356/outsourced_sales_force_page_ydama6.mp4", poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290356/outsourced_sales_force_page_ydama6.jpg" },
    { title: "Servizi Marketing", subtitle: "Strategia marketing personalizzata", pillar: "Consulting", icon: TrendingUp, accent: "violet", path: "/consulenza-strategica/marketing-services", video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290298/outsourced_markteting_page_ndawq6.mp4", poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290298/outsourced_markteting_page_ndawq6.jpg" },
    { title: "Servizi Consulenza", subtitle: "Consulenza strategica completa", pillar: "Consulting", icon: Briefcase, accent: "violet", path: "/consulenza-strategica/consultation-services", video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290380/ai_tools_page_uqjdsu.mp4", poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290380/ai_tools_page_uqjdsu.jpg" },

    { title: "Monetizza YouTube", subtitle: "Trasforma i video in profitti", pillar: "AI & Automation", icon: Youtube, accent: "green", path: "/monetizza-youtube", video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1755364792/20250816_2127_Marketing_Team_Strategy_Buzz_simple_compose_01k2sva0wpexqa68v9zccbyxq1_nxgujp.mp4", poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1755364792/20250816_2127_Marketing_Team_Strategy_Buzz_simple_compose_01k2sva0wpexqa68v9zccbyxq1_nxgujp.jpg" },
    { title: "Instant Avatar", subtitle: "Avatar AI per video personali", pillar: "AI & Automation", icon: UserRound, accent: "green", path: "/instant-avatar", video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290666/instant_avatar_page_yxlyqy.mp4", poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290666/instant_avatar_page_yxlyqy.jpg" },
    { title: "Chatbot AI", subtitle: "Assistenti virtuali intelligenti", pillar: "AI & Automation", icon: Bot, accent: "green", path: "/chatbot-ai", video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290521/chatbot_ai_page_jgsw1x.mp4", poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290521/chatbot_ai_page_jgsw1x.jpg" },
    { title: "Automazione AI", subtitle: "Processi automatizzati con AI", pillar: "AI & Automation", icon: Workflow, accent: "green", path: "/automazione-ai", video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290567/ai_automation_page_audup1.mp4", poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290567/ai_automation_page_audup1.jpg" },
    { title: "Web & App Development", subtitle: "Sviluppo applicazioni su misura", pillar: "AI & Automation", icon: Globe, accent: "green", path: "/web-app-development", video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290228/web_and_app_development_page_xnkfqj.mp4", poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290228/web_and_app_development_page_xnkfqj.jpg" },
    { title: "Piattaforme SaaS", subtitle: "Software as a Service personalizzato", pillar: "AI & Automation", icon: Cloud, accent: "green", path: "/saas-platforms", video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290535/saas_tools_page_inne6r.mp4", poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290535/saas_tools_page_inne6r.jpg" },
    { title: "Smart AI Tools", subtitle: "Strumenti AI per il business", pillar: "AI & Automation", icon: Zap, accent: "green", path: "/smart-ai-tools", video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290380/ai_tools_page_uqjdsu.mp4", poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290380/ai_tools_page_uqjdsu.jpg" },
    // NOTE: We intentionally drop the 15th "AI Integration" to enforce 14 total (7+7).
  ].slice(0, 14);

  const topRowServices = allServices.slice(0, 7);
  const bottomRowServices = allServices.slice(7, 14);

  /* --------------------- Section viewport observer --------------------- */
  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1, rootMargin: "100px 0px" }
    );
    if (containerRef.current) io.observe(containerRef.current);
    return () => io.disconnect();
  }, []);

  /* ------------------------------- Handlers -------------------------------- */

  const handleCardClick = useCallback((path: string) => {
    navigate(path);
  }, [navigate]);

  const handleMobileVideoToggle = useCallback((key: string) => {
    setPlayingCards(prev => {
      const ns = new Set(prev);
      if (ns.has(key)) ns.delete(key);
      else {
        ns.add(key);
        setTimeout(() => {
          setPlayingCards(cur => {
            const u = new Set(cur);
            u.delete(key);
            return u;
          });
        }, 5000);
      }
      return ns;
    });
  }, []);

  const scrollRow = (which: "top" | "bottom", dir: "prev" | "next") => {
    const container = which === "top" ? topRowContainerRef.current : bottomRowContainerRef.current;
    if (!container) return;
    const stride = getCardStride(container);
    const delta = dir === "next" ? stride : -stride;
    container.scrollBy({ left: delta, behavior: "smooth" });
  };

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
          <div className={`inline-block mb-8 transition-all duration-700 ease-out ${headerItems[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-sm font-bold tracking-[0.3em] uppercase px-8 py-4 rounded-full bg-gradient-to-r from-primary/20 to-primary-glow/20 text-primary border border-primary/30 backdrop-blur-sm">
              Premium Solutions
            </span>
          </div>

          <h2 className={`text-5xl lg:text-7xl font-black leading-[0.8] tracking-tight text-white mb-10 transition-all duration-700 ease-out ${headerItems[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="inline-block">Soluzioni per la Tua{" "}</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Crescita
            </span>
          </h2>

          <p className={`text-xl lg:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto font-light transition-all duration-700 ease-out ${headerItems[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Trasforma il tuo business con soluzioni innovative e risultati misurabili.
            <br />
            <span className="text-primary font-medium">Ogni progetto è su misura per te.</span>
          </p>
        </div>

        {/* Two-Row Carousel (manual scroll, no auto animations) */}
        <div className="relative space-y-8">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          {/* Top Row */}
          <div className="relative">
            {/* Always-visible arrows (mobile + desktop) */}
            <button
              aria-label="Previous"
              className="flex absolute left-2 top-1/2 -translate-y-1/2 z-30 h-10 w-10 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 border border-white/20 backdrop-blur-md transition shadow-sm"
              onClick={() => scrollRow("top", "prev")}
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <button
              aria-label="Next"
              className="flex absolute right-2 top-1/2 -translate-y-1/2 z-30 h-10 w-10 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 border border-white/20 backdrop-blur-md transition shadow-sm"
              onClick={() => scrollRow("top", "next")}
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </button>

            <div
              ref={topRowContainerRef}
              className="overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-pl-6"
            >
              <div className="flex gap-5">
                {topRowServices.map((service, index) => {
                  const key = `top-${index}`;
                  return (
                    <ServiceCard
                      key={key}
                      service={service}
                      cardKey={key}
                      isHovered={hoveredCard === key}
                      isPlaying={playingCards.has(key)}
                      isMobile={isMobile}
                      isInView={isInView}
                      pillarColors={pillarColors}
                      onMouseEnter={() => setHoveredCard(key)}
                      onMouseLeave={() => setHoveredCard(null)}
                      onClick={() => handleCardClick(service.path)}
                      onMobileVideoToggle={() => handleMobileVideoToggle(key)}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="relative">
            <button
              aria-label="Previous"
              className="flex absolute left-2 top-1/2 -translate-y-1/2 z-30 h-10 w-10 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 border border-white/20 backdrop-blur-md transition shadow-sm"
              onClick={() => scrollRow("bottom", "prev")}
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <button
              aria-label="Next"
              className="flex absolute right-2 top-1/2 -translate-y-1/2 z-30 h-10 w-10 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 border border-white/20 backdrop-blur-md transition shadow-sm"
              onClick={() => scrollRow("bottom", "next")}
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </button>

            <div
              ref={bottomRowContainerRef}
              className="overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-pl-6"
            >
              <div className="flex gap-5">
                {bottomRowServices.map((service, index) => {
                  const key = `bottom-${index}`;
                  return (
                    <ServiceCard
                      key={key}
                      service={service}
                      cardKey={key}
                      isHovered={hoveredCard === key}
                      isPlaying={playingCards.has(key)}
                      isMobile={isMobile}
                      isInView={isInView}
                      pillarColors={pillarColors}
                      onMouseEnter={() => setHoveredCard(key)}
                      onMouseLeave={() => setHoveredCard(null)}
                      onClick={() => handleCardClick(service.path)}
                      onMobileVideoToggle={() => handleMobileVideoToggle(key)}
                    />
                  );
                })}
              </div>
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

      {/* Hide scrollbars */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

/* ----------------------- Service Card ---------------------- */

const ServiceCard = ({
  service,
  cardKey,
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
  cardKey: string;
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
      ([entry]) => { if (entry.isIntersecting) video.load(); },
      { rootMargin: "100px" }
    );
    io.observe(video);
    return () => io.unobserve(video);
  }, [isInView]);

  // Desktop hover control
  useEffect(() => {
    if (!videoRef.current || !isVideoLoaded) return;
    const v = videoRef.current;
    if (!isMobile) {
      if (isHovered) v.play().catch(() => setHasError(true));
      else { v.pause(); v.currentTime = 0; }
    }
  }, [isHovered, isMobile, isVideoLoaded]);

  // Mobile: autoplay when card mostly in view (only the one in view will meet threshold)
  useEffect(() => {
    if (!isMobile || !cardRef.current || !videoRef.current) return;
    const v = videoRef.current;
    const node = cardRef.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!isVideoLoaded) return;
        if (entry.intersectionRatio >= 0.65) v.play().catch(() => {});
        else { v.pause(); v.currentTime = 0; }
      },
      { threshold: [0, 0.35, 0.65, 1] }
    );
    io.observe(node);
    return () => io.unobserve(node);
  }, [isMobile, isVideoLoaded]);

  const handleVideoClick = (e: React.MouseEvent) => {
    if (isMobile) { e.stopPropagation(); onMobileVideoToggle(); }
  };

  const handleCardClick = () => {
    if (!isMobile || !isPlaying) onClick();
  };

  return (
    <div
      ref={cardRef}
      className="flex-shrink-0 w-[320px] lg:w-[360px] h-[520px] lg:h-[560px] relative group cursor-pointer transition-all duration-300 hover:-translate-y-1 snap-start"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleCardClick}
      aria-label={`Navigate to ${service.title} service page`}
    >
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
          style={{ transform: "translate3d(0,0,0)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      </div>

      <div className="absolute inset-0 rounded-3xl border border-white/10 shadow-2xl transition-all duration-300 group-hover:shadow-primary/20"></div>

      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className={`text-xs font-bold uppercase tracking-[0.2em] ${pillarColors[service.pillar as keyof typeof pillarColors] || "text-white/80"}`}>
            {service.pillar}
          </div>
          <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight max-w-xs">{service.title}</h3>
          <p className="text-base lg:text-lg text-gray-200 font-medium leading-relaxed max-w-sm">{service.subtitle}</p>
          <Button
            onClick={(e) => { e.stopPropagation(); onClick(); }}
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

export default PremiumServicesCarouselOptimized;
