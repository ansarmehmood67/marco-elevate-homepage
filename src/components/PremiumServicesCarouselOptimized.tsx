import { useState, useEffect, useRef, useCallback } from "react";
import {
  Users, PhoneCall, Headphones, Megaphone, TrendingUp, Youtube, Bot, UserRound,
  Workflow, Globe, Cloud, Plug, Zap, Play, Target, Briefcase, ArrowLeft, ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import Quiz from "@/components/quiz/Quiz";

/* ----------------------------- Simplified Animation System (Seamless) ----------------------------- */

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

// Measure exact width of ONE logical set (cards + gaps)
const measureBaseWidth = (track: HTMLDivElement, setLength: number) => {
  if (!track) return 0;
  // ensure layout is up to date
  track.getBoundingClientRect();

  // compute gap (columnGap first, then gap)
  const cs = getComputedStyle(track);
  const gap = parseFloat(cs.columnGap || cs.gap || "0") || 0;

  let sum = 0;
  for (let i = 0; i < Math.min(setLength, track.children.length); i++) {
    const child = track.children[i] as HTMLElement | undefined;
    if (!child) break;
    const rect = child.getBoundingClientRect();
    sum += rect.width;
  }
  sum += gap * Math.max(0, Math.min(setLength, track.children.length) - 1);

  // Avoid subpixel drift that can cause visible seams
  return Math.round(sum);
};

// Keep scroll position in the middle band for mobile scroll
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

// A seam-free transform controller that always runs on the middle clone
class SmoothCarouselController {
  private track: HTMLElement;
  private baseWidth: number;
  private durationMs: number;
  private dirSign: number; // -1 left, +1 right
  private _isPaused = true;
  private rafId: number | null = null;
  private startedAt = 0; // performance.now()
  private carriedDistance = 0; // px progressed when paused/resumed
  private currentX = 0; // current transform x
  private initial: number; // start on middle clone: -baseWidth

  get isPaused() { return this._isPaused; }

  constructor(track: HTMLElement, baseWidth: number, durationSec: number, direction: 'left' | 'right') {
    this.track = track;
    this.baseWidth = Math.max(1, baseWidth);
    this.durationMs = Math.max(200, durationSec * 1000);
    this.dirSign = direction === 'left' ? -1 : 1;
    this.initial = -this.baseWidth;
    this.currentX = this.initial;
    this.applyX(this.currentX, false);
  }

  private applyX(x: number, withTransition: boolean) {
    if (!this.track) return;
    if (!withTransition) this.track.style.transition = '';
    this.track.style.transform = `translate3d(${x}px,0,0)`;
  }

  private tick = () => {
    if (this._isPaused) return;

    const now = performance.now();
    const elapsed = now - this.startedAt;
    const distance = (elapsed / this.durationMs) * this.baseWidth; // px per cycle
    let x = this.initial + this.dirSign * (this.carriedDistance + distance);

    // Wrap WITHOUT visual jump:
    // Always keep x in [-2B, 0] for leftwards, or [-2B, 0] for rightwards as well (we just move sign)
    // Using while to handle large jumps (resize or long pause)
    while (x <= -2 * this.baseWidth) x += this.baseWidth;
    while (x >= 0) x -= this.baseWidth;

    this.currentX = x;
    this.applyX(this.currentX, false);
    this.rafId = requestAnimationFrame(this.tick);
  };

  start() {
    if (!this.track || this.baseWidth <= 0 || !this._isPaused) return;
    this._isPaused = false;
    // ensure we are centered on middle clone
    if (this.currentX > 0 || this.currentX <= -2 * this.baseWidth) {
      this.currentX = -this.baseWidth;
      this.applyX(this.currentX, false);
    }
    this.startedAt = performance.now();
    this.rafId = requestAnimationFrame(this.tick);
  }

  pause() {
    if (this._isPaused) return;
    this._isPaused = true;
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.rafId = null;

    // convert currentX into carriedDistance from initial
    // initial + dirSign * carriedDistance = currentX  =>  carriedDistance = (currentX - initial)/dirSign
    this.carriedDistance = (this.currentX - this.initial) / this.dirSign;

    // Normalize carriedDistance into [0, baseWidth)
    this.carriedDistance = ((this.carriedDistance % this.baseWidth) + this.baseWidth) % this.baseWidth;
  }

  resume() { this.start(); }

  stop() {
    this._isPaused = true;
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.rafId = null;
    this.carriedDistance = 0;
    this.currentX = -this.baseWidth;
    this.applyX(this.currentX, false);
  }

  updateBaseWidth(newBaseWidth: number) {
    const wasPaused = this._isPaused;
    this.pause();
    this.baseWidth = Math.max(1, newBaseWidth);
    this.initial = -this.baseWidth;

    // Re-anchor to equivalent visual position inside new band
    this.currentX = -this.baseWidth;
    this.carriedDistance = 0;
    this.applyX(this.currentX, false);

    if (!wasPaused) this.start();
  }

  // Arrow navigation by approx card width (keeps us in the middle band)
  navigateByCard(direction: 'left' | 'right') {
    const step = 380; // card + gap (px)
    const sign = direction === 'right' ? 1 : -1;

    this.pause();

    let target = this.currentX + sign * step;
    // keep inside (-2B, 0)
    if (target <= -2 * this.baseWidth) target += this.baseWidth;
    if (target >= 0) target -= this.baseWidth;

    this.track.style.transition = 'transform 450ms cubic-bezier(0.22, 0.61, 0.36, 1)';
    this.applyX(target, true);

    setTimeout(() => {
      this.currentX = target;
      this.track.style.transition = '';
      // update carriedDistance to match new X
      this.carriedDistance = (this.currentX - this.initial) / this.dirSign;
      this.carriedDistance = ((this.carriedDistance % this.baseWidth) + this.baseWidth) % this.baseWidth;
    }, 480);
  }
}

// Mobile activation (pause transform + allow native scroll)
const activateRowForMobile = (container: HTMLDivElement, controller: SmoothCarouselController | null) => {
  if (!container) return;
  controller?.pause();
  container.classList.add("overflow-x-auto", "no-scrollbar", "snap-x", "snap-mandatory");
};

const resumeRowAnimation = (controller: SmoothCarouselController | null) => {
  controller?.resume();
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

  const [activeMobileRow, setActiveMobileRow] = useState<"top" | "bottom" | null>(null);

  // Refs
  const trackTopRef = useRef<HTMLDivElement>(null);
  const trackBottomRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const topRowContainerRef = useRef<HTMLDivElement>(null);
  const bottomRowContainerRef = useRef<HTMLDivElement>(null);

  const topBaseWidthRef = useRef(0);
  const bottomBaseWidthRef = useRef(0);

  const topController = useRef<SmoothCarouselController | null>(null);
  const bottomController = useRef<SmoothCarouselController | null>(null);

  const topResumeTimer = useRef<number | null>(null);
  const bottomResumeTimer = useRef<number | null>(null);

  const TOP_DURATION = 25;
  const BOTTOM_DURATION = 30;

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

  // Balanced rows (7 / 8)
  const topRowServices = allServices.slice(0, 7);
  const bottomRowServices = allServices.slice(7, 15);

  // Triple for seamless clones
  const extendedTopServices = [...topRowServices, ...topRowServices, ...topRowServices];
  const extendedBottomServices = [...bottomRowServices, ...bottomRowServices, ...bottomRowServices];

  /* --------------------- Section viewport observer --------------------- */
  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), {
      threshold: 0.1,
      rootMargin: "100px 0px",
    });
    if (containerRef.current) io.observe(containerRef.current);
    return () => io.disconnect();
  }, []);

  /* ----------------- Mobile Row Activation ------------- */
  useEffect(() => {
    if (!isMobile) { setActiveMobileRow(null); return; }
    const topNode = topRowContainerRef.current;
    const bottomNode = bottomRowContainerRef.current;
    if (!topNode || !bottomNode) return;

    const handleVis = (entries: IntersectionObserverEntry[]) => {
      const topEntry = entries.find(e => e.target === topNode);
      const bottomEntry = entries.find(e => e.target === bottomNode);
      const tr = topEntry?.intersectionRatio || 0;
      const br = bottomEntry?.intersectionRatio || 0;
      if (tr > 0.5 && tr >= br) setActiveMobileRow("top");
      else if (br > 0.5 && br > tr) setActiveMobileRow("bottom");
      else setActiveMobileRow(null);
    };

    const observer = new IntersectionObserver(handleVis, { threshold: [0, 0.5, 1] });
    observer.observe(topNode); observer.observe(bottomNode);
    return () => observer.disconnect();
  }, [isMobile]);

  /* --------- Initialize Animation Controllers (SEAMLESS) --------- */
  useEffect(() => {
    if (!trackTopRef.current || !trackBottomRef.current) return;

    const measureAndInit = () => {
      const topBase = measureBaseWidth(trackTopRef.current!, topRowServices.length);
      const bottomBase = measureBaseWidth(trackBottomRef.current!, bottomRowServices.length);

      topBaseWidthRef.current = topBase;
      bottomBaseWidthRef.current = bottomBase;

      if (!topController.current && topBase > 0) {
        topController.current = new SmoothCarouselController(trackTopRef.current!, topBase, TOP_DURATION, 'left');
      } else if (topController.current && topBase > 0) {
        topController.current.updateBaseWidth(topBase);
      }

      if (!bottomController.current && bottomBase > 0) {
        bottomController.current = new SmoothCarouselController(trackBottomRef.current!, bottomBase, BOTTOM_DURATION, 'right');
      } else if (bottomController.current && bottomBase > 0) {
        bottomController.current.updateBaseWidth(bottomBase);
      }

      // Start (centered on middle clone)
      topController.current?.resume();
      bottomController.current?.resume();
    };

    measureAndInit();

    const ro = new ResizeObserver(measureAndInit);
    ro.observe(trackTopRef.current!);
    ro.observe(trackBottomRef.current!);

    return () => {
      ro.disconnect();
      topController.current?.stop();
      bottomController.current?.stop();
    };
  }, [topRowServices.length, bottomRowServices.length]);

  /* ------------------- Mobile Row Switching ------------------ */
  useEffect(() => {
    if (!isMobile) return;
    const topContainer = topRowContainerRef.current!;
    const bottomContainer = bottomRowContainerRef.current!;
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

  /* ------------------- Desktop Hover + Arrows ------------------ */
  const handleRowHover = (row: 'top' | 'bottom', entering: boolean) => {
    if (isMobile) return;
    const ctrl = row === 'top' ? topController.current : bottomController.current;
    const timerRef = row === 'top' ? topResumeTimer : bottomResumeTimer;

    if (entering) {
      if (timerRef.current) clearTimeout(timerRef.current);
      ctrl?.pause();
    } else {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => ctrl?.resume(), 700);
    }
  };

  const handleArrowClick = (row: "top" | "bottom", direction: "prev" | "next") => {
    if (isMobile) return;
    const ctrl = row === "top" ? topController.current : bottomController.current;
    if (!ctrl) return;
    const navDir = direction === "next" ? 'right' : 'left';
    ctrl.navigateByCard(navDir);
    const timerRef = row === "top" ? topResumeTimer : bottomResumeTimer;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => ctrl.resume(), 900);
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
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary/10 via-primary/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-primary-glow/20 via-transparent to-transparent rounded-full blur-3xl"></div>
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
            className={isMobile ? (activeMobileRow === "top" ? "overflow-x-auto no-scrollbar snap-x snap-mandatory" : "overflow-hidden") : "relative overflow-hidden"}
            onMouseEnter={() => handleRowHover('top', true)}
            onMouseLeave={() => handleRowHover('top', false)}
          >
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
              className="flex gap-5 will-change-transform"
              style={{ transform: "translate3d(0,0,0)" }}
            >
              {extendedTopServices.map((service, index) => (
                <ServiceCard
                  key={`top-${service.title}-${index}`}
                  service={service}
                  index={index}
                  isHovered={false}
                  isPlaying={playingCards.has(index)}
                  isMobile={isMobile}
                  isInView={isInView}
                  pillarColors={pillarColors}
                  onMouseEnter={() => {}}
                  onMouseLeave={() => {}}
                  onClick={() => handleCardClick(service.path)}
                  onMobileVideoToggle={() => handleMobileVideoToggle(index)}
                />
              ))}
            </div>
          </div>

          {/* Bottom Row */}
          <div
            ref={bottomRowContainerRef}
            className={isMobile ? (activeMobileRow === "bottom" ? "overflow-x-auto no-scrollbar snap-x snap-mandatory" : "overflow-hidden") : "relative overflow-hidden"}
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
              className="flex gap-5 will-change-transform"
              style={{ transform: "translate3d(0,0,0)" }}
            >
              {extendedBottomServices.map((service, index) => {
                const idx = index + 1000;
                return (
                  <ServiceCard
                    key={`bottom-${service.title}-${idx}`}
                    service={service}
                    index={idx}
                    isHovered={false}
                    isPlaying={playingCards.has(idx)}
                    isMobile={isMobile}
                    isInView={isInView}
                    pillarColors={pillarColors}
                    onMouseEnter={() => {}}
                    onMouseLeave={() => {}}
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
      `}</style>
    </section>
  );
};

/* ----------------------- Service Card (unchanged API) ---------------------- */

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

  useEffect(() => {
    if (!videoRef.current || !isInView) return;
    const video = videoRef.current;
    const io = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) video.load(); }, { rootMargin: "120px" });
    io.observe(video);
    return () => io.unobserve(video);
  }, [isInView]);

  useEffect(() => {
    if (!videoRef.current || !isVideoLoaded) return;
    const v = videoRef.current;
    if (!isMobile) {
      if (isHovered) v.play().catch(() => setHasError(true));
      else { v.pause(); v.currentTime = 0; }
    }
  }, [isHovered, isMobile, isVideoLoaded]);

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
