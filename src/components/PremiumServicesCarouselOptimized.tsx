import { useState, useEffect, useRef, useCallback } from "react";
import {
  Users, PhoneCall, Headphones, Megaphone, TrendingUp, Youtube, Bot, UserRound,
  Workflow, Globe, Cloud, Plug, Zap, Play, Target, Briefcase, ArrowLeft, ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import Quiz from "@/components/quiz/Quiz";

/* ----------------------------- Simplified Animation System ----------------------------- */

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

// Utility functions for mobile scrolling
const measureBaseWidth = (track: HTMLDivElement, setLength: number) => {
  if (!track) return 0;
  const gapStr = (getComputedStyle(track).columnGap || getComputedStyle(track).gap || "0").toString();
  const gap = parseFloat(gapStr) || 0;
  let sum = 0;
  for (let i = 0; i < Math.min(setLength, track.children.length); i++) {
    const child = track.children[i] as HTMLElement;
    if (!child) break;
    sum += child.getBoundingClientRect().width;
  }
  sum += gap * Math.max(0, Math.min(setLength, track.children.length) - 1);
  return Math.round(sum);
};

const ensureInfiniteLoop = (container: HTMLDivElement, baseWidth: number) => {
  if (!container || baseWidth <= 0) return;
  const left = container.scrollLeft;
  const low = baseWidth * 0.25;
  const mid = baseWidth * 1.0;
  const high = baseWidth * 1.75;
  if (left < low) container.scrollLeft = left + baseWidth;
  else if (left > high) container.scrollLeft = left - baseWidth;
  else if (left === 0) container.scrollLeft = mid;
};

// Transform-based animation controller for smooth pause/resume and navigation
class SmoothCarouselController {
  private track: HTMLElement;
  private baseWidth: number;
  private duration: number;
  private direction: 'left' | 'right';
  private isPaused: boolean = false;
  private animationId: number | null = null;
  private startTime: number = 0;
  private pausedPosition: number = 0;
  private currentPosition: number = 0;

  constructor(track: HTMLElement, baseWidth: number, duration: number, direction: 'left' | 'right') {
    this.track = track;
    this.baseWidth = baseWidth;
    this.duration = duration * 1000; // Convert to milliseconds
    this.direction = direction;
  }

  start() {
    if (!this.track || this.baseWidth <= 0) return;
    this.startTime = performance.now();
    this.isPaused = false;
    this.animate();
  }

  private animate = () => {
    if (this.isPaused) return;

    const elapsed = performance.now() - this.startTime + this.pausedPosition;
    const progress = (elapsed % this.duration) / this.duration;
    
    // Calculate position based on direction
    const multiplier = this.direction === 'left' ? -1 : 1;
    this.currentPosition = progress * this.baseWidth * multiplier;
    
    this.track.style.transform = `translate3d(${this.currentPosition}px, 0, 0)`;
    
    this.animationId = requestAnimationFrame(this.animate);
  };

  pause() {
    if (!this.track || this.isPaused) return;
    this.isPaused = true;
    
    // Save current position for smooth resume
    const elapsed = performance.now() - this.startTime + this.pausedPosition;
    this.pausedPosition = elapsed % this.duration;
    
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  resume() {
    if (!this.track || !this.isPaused) return;
    this.isPaused = false;
    this.startTime = performance.now();
    this.animate();
  }

  stop() {
    if (!this.track) return;
    this.isPaused = true;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    this.track.style.transform = 'translate3d(0,0,0)';
    this.pausedPosition = 0;
    this.currentPosition = 0;
  }

  updateBaseWidth(newBaseWidth: number) {
    this.baseWidth = newBaseWidth;
    if (!this.isPaused) {
      this.start(); // Restart with new width
    }
  }

  // Navigate by exact card width
  navigateByCard(direction: 'left' | 'right') {
    if (!this.track) return;
    
    const cardWidth = 380; // Card width + gap
    const moveDirection = direction === 'left' ? -1 : 1;
    const targetPosition = this.currentPosition + (cardWidth * moveDirection);
    
    // Smooth transition to new position
    this.track.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    this.track.style.transform = `translate3d(${targetPosition}px, 0, 0)`;
    
    // Update internal position and remove transition after animation
    setTimeout(() => {
      this.currentPosition = targetPosition;
      this.track.style.transition = '';
      
      // Recalculate pausedPosition to match new position
      const progress = Math.abs(targetPosition) / this.baseWidth;
      this.pausedPosition = (progress % 1) * this.duration;
    }, 500);
  }
}

// Mobile activation for rows (updated for new system)
const activateRowForMobile = (container: HTMLDivElement, controller: SmoothCarouselController | null) => {
  if (!container) return;
  
  // Stop the transform-based animation
  controller?.stop();
  
  // Enable scroll behavior
  container.classList.add("overflow-x-auto", "no-scrollbar", "snap-x", "snap-mandatory");
  container.scrollLeft = 0;
};

const resumeRowAnimation = (controller: SmoothCarouselController | null) => {
  if (!controller) return;
  controller.start();
};

/* --------------------------- Main Component -------------------------- */

const PremiumServicesCarouselOptimized = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { ref: headerRef, visibleItems: headerItems } = useStaggeredAnimation(3, 100);

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [playingCards, setPlayingCards] = useState<Set<number>>(new Set());
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isInView, setIsInView] = useState(true);

  // Simplified state - only track which row is hovered/active
  const [isTopRowHovered, setIsTopRowHovered] = useState(false);
  const [isBottomRowHovered, setIsBottomRowHovered] = useState(false);
  const [activeMobileRow, setActiveMobileRow] = useState<"top" | "bottom" | null>(null);

  // Refs
  const trackTopRef = useRef<HTMLDivElement>(null);
  const trackBottomRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const topRowContainerRef = useRef<HTMLDivElement>(null);
  const bottomRowContainerRef = useRef<HTMLDivElement>(null);

  const topBaseWidthRef = useRef(0);
  const bottomBaseWidthRef = useRef(0);

  // Simplified animation controllers
  const topController = useRef<SmoothCarouselController | null>(null);
  const bottomController = useRef<SmoothCarouselController | null>(null);

  // Resume timers with shorter delay
  const topResumeTimer = useRef<number | null>(null);
  const bottomResumeTimer = useRef<number | null>(null);

  // constants - faster animation speeds
  const TOP_DURATION = 25; // seconds (faster!)
  const BOTTOM_DURATION = 30; // seconds (faster!)

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
    { title: "AI Integration", subtitle: "Integrazione AI nei processi", pillar: "AI & Automation", icon: Plug, accent: "green", path: "/ai-integration", video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290499/ai_integrations_page_dwcnaj.mp4", poster: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290499/ai_integrations_page_dwcnaj.jpg" },
  ];

  // rows
  const topRowServices = allServices.slice(0, 8);
  const bottomRowServices = allServices.slice(8);

  // triple for seamless loop
  const extendedTopServices = [...topRowServices, ...topRowServices, ...topRowServices];
  const extendedBottomServices = [...bottomRowServices, ...bottomRowServices, ...bottomRowServices];

  /* --------------------- Section viewport observer --------------------- */
  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1, rootMargin: "100px 0px" }
    );
    if (containerRef.current) io.observe(containerRef.current);
    return () => io.disconnect();
  }, []);

  /* ----------------- Simplified Mobile Row Activation ------------- */
  useEffect(() => {
    if (!isMobile) {
      setActiveMobileRow(null);
      return;
    }

    const topNode = topRowContainerRef.current;
    const bottomNode = bottomRowContainerRef.current;
    if (!topNode || !bottomNode) return;

    const handleVisibilityChange = (entries: IntersectionObserverEntry[]) => {
      const topEntry = entries.find(e => e.target === topNode);
      const bottomEntry = entries.find(e => e.target === bottomNode);
      
      const topRatio = topEntry?.intersectionRatio || 0;
      const bottomRatio = bottomEntry?.intersectionRatio || 0;
      
      // Simple logic: activate the most visible row
      if (topRatio > 0.5 && topRatio >= bottomRatio) {
        setActiveMobileRow("top");
      } else if (bottomRatio > 0.5 && bottomRatio > topRatio) {
        setActiveMobileRow("bottom");
      } else {
        setActiveMobileRow(null);
      }
    };

    const observer = new IntersectionObserver(handleVisibilityChange, {
      threshold: [0, 0.5, 1.0],
      rootMargin: "0px"
    });

    observer.observe(topNode);
    observer.observe(bottomNode);

    return () => observer.disconnect();
  }, [isMobile]);

  /* --------- Initialize Animation Controllers --------- */
  useEffect(() => {
    if (!trackTopRef.current || !trackBottomRef.current) return;

    const measureAndInit = () => {
      const topBaseWidth = measureBaseWidth(trackTopRef.current!, topRowServices.length);
      const bottomBaseWidth = measureBaseWidth(trackBottomRef.current!, bottomRowServices.length);
      
      topBaseWidthRef.current = topBaseWidth;
      bottomBaseWidthRef.current = bottomBaseWidth;

      // Initialize controllers
      if (!topController.current && topBaseWidth > 0) {
        topController.current = new SmoothCarouselController(
          trackTopRef.current!,
          topBaseWidth,
          TOP_DURATION,
          'left'
        );
      } else if (topController.current) {
        topController.current.updateBaseWidth(topBaseWidth);
      }

      if (!bottomController.current && bottomBaseWidth > 0) {
        bottomController.current = new SmoothCarouselController(
          trackBottomRef.current!,
          bottomBaseWidth,
          BOTTOM_DURATION,
          'right'
        );
      } else if (bottomController.current) {
        bottomController.current.updateBaseWidth(bottomBaseWidth);
      }

      // Start animations if section is in view and not hovered
      if (isInView && !isTopRowHovered) {
        topController.current?.start();
      }
      if (isInView && !isBottomRowHovered) {
        bottomController.current?.start();
      }
    };

    measureAndInit();
    
    const ro = new ResizeObserver(measureAndInit);
    if (trackTopRef.current) ro.observe(trackTopRef.current);
    if (trackBottomRef.current) ro.observe(trackBottomRef.current);

    return () => {
      ro.disconnect();
      topController.current?.stop();
      bottomController.current?.stop();
    };
  }, [topRowServices.length, bottomRowServices.length, isInView, isTopRowHovered, isBottomRowHovered]);

  /* ------------------- Mobile Row Switching ------------------ */
  useEffect(() => {
    if (!isMobile) return;

    const topContainer = topRowContainerRef.current;
    const bottomContainer = bottomRowContainerRef.current;

    if (!topContainer || !bottomContainer) return;

    const topBase = Math.max(1, topBaseWidthRef.current);
    const bottomBase = Math.max(1, bottomBaseWidthRef.current);

    const onTopScroll = () => ensureInfiniteLoop(topContainer, topBase);
    const onBottomScroll = () => ensureInfiniteLoop(bottomContainer, bottomBase);

    if (activeMobileRow === "top") {
      activateRowForMobile(topContainer, topController.current);
      topContainer.addEventListener("scroll", onTopScroll, { passive: true });
      resumeRowAnimation(bottomController.current);
    } else if (activeMobileRow === "bottom") {
      activateRowForMobile(bottomContainer, bottomController.current);
      bottomContainer.addEventListener("scroll", onBottomScroll, { passive: true });
      resumeRowAnimation(topController.current);
    } else {
      // Both run normally
      topContainer.classList.remove("overflow-x-auto", "no-scrollbar", "snap-x", "snap-mandatory");
      bottomContainer.classList.remove("overflow-x-auto", "no-scrollbar", "snap-x", "snap-mandatory");
      resumeRowAnimation(topController.current);
      resumeRowAnimation(bottomController.current);
    }

    return () => {
      topContainer.removeEventListener("scroll", onTopScroll);
      bottomContainer.removeEventListener("scroll", onBottomScroll);
    };
  }, [isMobile, activeMobileRow]);

  /* ------------------- Desktop Hover Handlers ------------------ */
  const handleRowHover = (row: 'top' | 'bottom', isEntering: boolean) => {
    if (isMobile) return;

    if (row === 'top') {
      setIsTopRowHovered(isEntering);
      if (topResumeTimer.current) clearTimeout(topResumeTimer.current);
      
      if (isEntering) {
        topController.current?.pause();
      } else {
        // Resume with short delay
        topResumeTimer.current = window.setTimeout(() => {
          topController.current?.resume();
        }, 800);
      }
    } else {
      setIsBottomRowHovered(isEntering);
      if (bottomResumeTimer.current) clearTimeout(bottomResumeTimer.current);
      
      if (isEntering) {
        bottomController.current?.pause();
      } else {
        // Resume with short delay
        bottomResumeTimer.current = window.setTimeout(() => {
          bottomController.current?.resume();
        }, 800);
      }
    }
  };

  /* --------------------------- Arrow Navigation -------------------------- */
  const handleArrowClick = (row: "top" | "bottom", direction: "prev" | "next") => {
    if (isMobile) return;
    
    const controller = row === "top" ? topController.current : bottomController.current;
    
    if (!controller) return;
    
    controller.pause();
    
    // Convert direction to left/right for navigateByCard
    const navDirection = direction === "next" ? 'left' : 'right';
    controller.navigateByCard(navDirection);
    
    // Resume after navigation with delay
    const timerRef = row === "top" ? topResumeTimer : bottomResumeTimer;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      controller.resume();
    }, 1200);
  };

  /* ------------------------------- Handlers -------------------------------- */
  const handleCardClick = useCallback((path: string) => {
    navigate(path);
  }, [navigate]);

  const handleMobileVideoToggle = useCallback((index: number) => {
    setPlayingCards(prev => {
      const ns = new Set(prev);
      if (ns.has(index)) ns.delete(index);
      else {
        ns.add(index);
        setTimeout(() => {
          setPlayingCards(cur => {
            const u = new Set(cur);
            u.delete(index);
            return u;
          });
        }, 5000);
      }
      return ns;
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

        {/* Two-Row Carousel */}
        <div className="relative space-y-8">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          {/* Top Row */}
          <div
            ref={topRowContainerRef}
            className={
              isMobile
                ? (activeMobileRow === "top" ? "overflow-x-auto no-scrollbar snap-x snap-mandatory" : "overflow-hidden")
                : "relative overflow-hidden"
            }
            onMouseEnter={() => handleRowHover('top', true)}
            onMouseLeave={() => handleRowHover('top', false)}
          >
            {/* Desktop arrows */}
            {!isMobile && (
              <>
                <button
                  aria-label="Previous"
                  className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-30 h-10 w-10 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 border border-white/20 backdrop-blur-md transition shadow-sm"
                  onClick={() => handleArrowClick("top", "prev")}
                >
                  <ArrowLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  aria-label="Next"
                  className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-30 h-10 w-10 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 border border-white/20 backdrop-blur-md transition shadow-sm"
                  onClick={() => handleArrowClick("top", "next")}
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </>
            )}

            <div
              ref={trackTopRef}
              className="flex gap-5"
              style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}
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
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => handleCardClick(service.path)}
                  onMobileVideoToggle={() => handleMobileVideoToggle(index)}
                />
              ))}
            </div>
          </div>

          {/* Bottom Row */}
          <div
            ref={bottomRowContainerRef}
            className={
              isMobile
                ? (activeMobileRow === "bottom" ? "overflow-x-auto no-scrollbar snap-x snap-mandatory" : "overflow-hidden")
                : "relative overflow-hidden"
            }
            onMouseEnter={() => handleRowHover('bottom', true)}
            onMouseLeave={() => handleRowHover('bottom', false)}
          >
            {!isMobile && (
              <>
                <button
                  aria-label="Previous"
                  className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-30 h-10 w-10 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 border border-white/20 backdrop-blur-md transition shadow-sm"
                  onClick={() => handleArrowClick("bottom", "prev")}
                >
                  <ArrowLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  aria-label="Next"
                  className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-30 h-10 w-10 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 border border-white/20 backdrop-blur-md transition shadow-sm"
                  onClick={() => handleArrowClick("bottom", "next")}
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </>
            )}

            <div
              ref={trackBottomRef}
              className="flex gap-5"
              style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}
            >
              {extendedBottomServices.map((service, index) => {
                const idx = index + 1000;
                return (
                  <ServiceCard
                    key={`bottom-${service.title}-${idx}`}
                    service={service}
                    index={idx}
                    isHovered={hoveredCard === idx}
                    isPlaying={playingCards.has(idx)}
                    isMobile={isMobile}
                    isInView={isInView}
                    pillarColors={pillarColors}
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => handleCardClick(service.path)}
                    onMobileVideoToggle={() => handleMobileVideoToggle(idx)}
                  />
                );
              })}
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
        
        @keyframes slideLeft {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-33.333%, 0, 0); }
        }
        
        @keyframes slideRight {
          from { transform: translate3d(-33.333%, 0, 0); }
          to { transform: translate3d(0, 0, 0); }
        }
      `}</style>
    </section>
  );
};

/* ----------------------- Service Card (Simplified) ---------------------- */

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

  // Mobile: autoplay when card mostly in view
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
      className="flex-shrink-0 w-[320px] lg:w-[360px] h-[520px] lg:h-[560px] relative group cursor-pointer transition-all duration-300 hover:-translate-y-1"
      style={{ scrollSnapAlign: "start" }}
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