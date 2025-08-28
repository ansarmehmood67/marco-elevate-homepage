import { useState, useEffect, useRef, useCallback } from "react";
import {
  Users, PhoneCall, Headphones, Megaphone, TrendingUp, Youtube, Bot, UserRound,
  Workflow, Globe, Cloud, Plug, Zap, Play, Target, Briefcase, ArrowLeft, ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import Quiz from "@/components/quiz/Quiz";

/* ----------------------------- Utilities ----------------------------- */

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

const getTranslateX = (el: HTMLElement) => {
  const cs = getComputedStyle(el);
  const m = new DOMMatrixReadOnly(cs.transform === "none" ? "" : cs.transform);
  return m.m41 || 0;
};

const normalizeMod = (val: number, mod: number) => ((val % mod) + mod) % mod;

// measure width of one logical set (first N children)
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

// keep scrollLeft inside the middle copy of A A A
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

// transform → scrollLeft, stop animation (used for mobile active row & desktop interactive state)
const activateRowForSwipe = (
  container: HTMLDivElement,
  track: HTMLDivElement,
  baseWidth: number,
  { addSnap, addOverflow }: { addSnap: boolean; addOverflow: boolean }
) => {
  if (!container || !track) return;
  const tx = -getTranslateX(track); // current offset from animation
  track.style.animation = "none";
  track.style.animationPlayState = "paused";
  track.style.transform = "translate3d(0,0,0)";
  const target = normalizeMod(tx, baseWidth); // 0..baseWidth
  container.scrollLeft = baseWidth + target; // center copy + offset
  if (addSnap) container.classList.add("snap-x", "snap-mandatory");
  if (addOverflow) container.classList.add("overflow-x-auto", "no-scrollbar");
};

// resume CSS animation from current scroll offset (no jump)
const resumeRowFromScroll = (
  container: HTMLDivElement,
  track: HTMLDivElement,
  baseWidth: number,
  animName: "slideLeft" | "slideRight",
  durationSec: number
) => {
  if (!container || !track || baseWidth <= 0) return;
  const offset = normalizeMod(container.scrollLeft, baseWidth);
  const p = offset / baseWidth; // 0..1
  track.style.removeProperty("transform");
  track.style.animation = `${animName} ${durationSec}s linear infinite`;
  track.style.animationDelay = `-${p * durationSec}s`;
  container.classList.remove("snap-x", "snap-mandatory", "overflow-x-auto", "no-scrollbar");
  // reset scroll so transform animation drives the view
  container.scrollLeft = 0;
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

  // Mobile: which row is interactive ('top' | 'bottom' | null)
  const [activeMobileRow, setActiveMobileRow] = useState<"top" | "bottom" | null>(null);

  // Desktop: which row is interactive (after hover or arrow click)
  const [desktopActiveTop, setDesktopActiveTop] = useState(false);
  const [desktopActiveBottom, setDesktopActiveBottom] = useState(false);

  // Refs
  const trackTopRef = useRef<HTMLDivElement>(null);
  const trackBottomRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const topRowContainerRef = useRef<HTMLDivElement>(null);
  const bottomRowContainerRef = useRef<HTMLDivElement>(null);

  const topInitializedRef = useRef(false);
  const bottomInitializedRef = useRef(false);

  const topBaseWidthRef = useRef(0);
  const bottomBaseWidthRef = useRef(0);

  // Scroll listeners for active rows
  const topScrollHandlerRef = useRef<(e: Event) => void>();
  const bottomScrollHandlerRef = useRef<(e: Event) => void>();

  // Desktop resume timers
  const topResumeTimerRef = useRef<number | null>(null);
  const bottomResumeTimerRef = useRef<number | null>(null);

  // constants
  const CARD_WIDTH = 365; // width + gap
  const TOP_DURATION = 50; // seconds (lower = faster)
  const BOTTOM_DURATION = 55;

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

  /* ----------------- Mobile: choose active row by visibility ------------- */
  useEffect(() => {
    if (!isMobile) {
      setActiveMobileRow(null);
      return;
    }
    const topNode = topRowContainerRef.current;
    const bottomNode = bottomRowContainerRef.current;

    const opts = { threshold: [0.35, 0.5, 0.65] };

    const ioTop = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) setActiveMobileRow("top");
    }, opts);

    const ioBottom = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) setActiveMobileRow("bottom");
    }, opts);

    if (topNode) ioTop.observe(topNode);
    if (bottomNode) ioBottom.observe(bottomNode);
    return () => {
      ioTop.disconnect();
      ioBottom.disconnect();
    };
  }, [isMobile]);

  /* --------- Init animations & measure base widths (both rows) --------- */
  useEffect(() => {
    if (!trackTopRef.current || !trackBottomRef.current) return;

    const topTrack = trackTopRef.current;
    const bottomTrack = trackBottomRef.current;

    const measureAll = () => {
      topBaseWidthRef.current = measureBaseWidth(topTrack, topRowServices.length);
      bottomBaseWidthRef.current = measureBaseWidth(bottomTrack, bottomRowServices.length);
      // rebuild keyframes with fresh widths
      const topW = Math.max(1, topBaseWidthRef.current);
      const bottomW = Math.max(1, bottomBaseWidthRef.current);
      let style = document.getElementById("carousel-keyframes") as HTMLStyleElement | null;
      if (!style) {
        style = document.createElement("style");
        style.id = "carousel-keyframes";
        document.head.appendChild(style);
      }
      style.textContent = `
        @keyframes slideLeft {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-${topW}px, 0, 0); }
        }
        @keyframes slideRight {
          from { transform: translate3d(-${bottomW}px, 0, 0); }
          to { transform: translate3d(0, 0, 0); }
        }
      `;
    };

    measureAll();
    const ro = new ResizeObserver(measureAll);
    ro.observe(topTrack);
    ro.observe(bottomTrack);

    if (!topInitializedRef.current) {
      topTrack.style.animation = `slideLeft ${TOP_DURATION}s linear infinite`;
      topInitializedRef.current = true;
    }
    if (!bottomInitializedRef.current) {
      bottomTrack.style.animation = `slideRight ${BOTTOM_DURATION}s linear infinite`;
      bottomInitializedRef.current = true;
    }

    return () => ro.disconnect();
  }, [topRowServices.length, bottomRowServices.length]);

  /* ------------------- Play/pause when section in view ------------------ */
  useEffect(() => {
    if (trackTopRef.current)
      trackTopRef.current.style.animationPlayState = isPausedTop || !isInView ? "paused" : "running";
    if (trackBottomRef.current)
      trackBottomRef.current.style.animationPlayState = isPausedBottom || !isInView ? "paused" : "running";
  }, [isPausedTop, isPausedBottom, isInView]);

  /* ------ MOBILE: switch rows between auto-scroll and swipe (A/A/A) ----- */
  useEffect(() => {
    if (!isMobile) return;

    const topContainer = topRowContainerRef.current!;
    const bottomContainer = bottomRowContainerRef.current!;
    const topTrack = trackTopRef.current!;
    const bottomTrack = trackBottomRef.current!;

    const topBase = Math.max(1, topBaseWidthRef.current);
    const bottomBase = Math.max(1, bottomBaseWidthRef.current);

    const onTopScroll = () => ensureInfiniteLoop(topContainer, topBase);
    const onBottomScroll = () => ensureInfiniteLoop(bottomContainer, bottomBase);

    // detach old listeners
    if (topScrollHandlerRef.current) topContainer.removeEventListener("scroll", topScrollHandlerRef.current);
    if (bottomScrollHandlerRef.current) bottomContainer.removeEventListener("scroll", bottomScrollHandlerRef.current);

    if (activeMobileRow === "top") {
      activateRowForSwipe(topContainer, topTrack, topBase, { addSnap: true, addOverflow: true });
      topScrollHandlerRef.current = onTopScroll;
      topContainer.addEventListener("scroll", onTopScroll, { passive: true });

      // bottom runs
      resumeRowFromScroll(bottomContainer, bottomTrack, bottomBase, "slideRight", BOTTOM_DURATION);
      setIsPausedTop(true);
      setIsPausedBottom(false);
    } else if (activeMobileRow === "bottom") {
      activateRowForSwipe(bottomContainer, bottomTrack, bottomBase, { addSnap: true, addOverflow: true });
      bottomScrollHandlerRef.current = onBottomScroll;
      bottomContainer.addEventListener("scroll", onBottomScroll, { passive: true });

      // top runs
      resumeRowFromScroll(topContainer, topTrack, topBase, "slideLeft", TOP_DURATION);
      setIsPausedTop(false);
      setIsPausedBottom(true);
    } else {
      // both run
      resumeRowFromScroll(topContainer, topTrack, topBase, "slideLeft", TOP_DURATION);
      resumeRowFromScroll(bottomContainer, bottomTrack, bottomBase, "slideRight", BOTTOM_DURATION);
      setIsPausedTop(false);
      setIsPausedBottom(false);
    }

    // initial center
    if (activeMobileRow === "top") ensureInfiniteLoop(topContainer, topBase);
    if (activeMobileRow === "bottom") ensureInfiniteLoop(bottomContainer, bottomBase);

    return () => {
      if (topScrollHandlerRef.current) topContainer.removeEventListener("scroll", topScrollHandlerRef.current);
      if (bottomScrollHandlerRef.current) bottomContainer.removeEventListener("scroll", bottomScrollHandlerRef.current);
    };
  }, [isMobile, activeMobileRow]);

  /* ----------------------- DESKTOP: interactive modes ----------------------- */

  const scheduleDesktopResume = (row: "top" | "bottom") => {
    const delay = 2500; // resume after inactivity
    const timerRef = row === "top" ? topResumeTimerRef : bottomResumeTimerRef;
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      if (row === "top") {
        // resume top
        const container = topRowContainerRef.current!;
        const track = trackTopRef.current!;
        const base = Math.max(1, topBaseWidthRef.current);
        resumeRowFromScroll(container, track, base, "slideLeft", TOP_DURATION);
        setIsPausedTop(false);
        setDesktopActiveTop(false);
      } else {
        const container = bottomRowContainerRef.current!;
        const track = trackBottomRef.current!;
        const base = Math.max(1, bottomBaseWidthRef.current);
        resumeRowFromScroll(container, track, base, "slideRight", BOTTOM_DURATION);
        setIsPausedBottom(false);
        setDesktopActiveBottom(false);
      }
    }, delay);
  };

  const enterDesktopInteractive = useCallback((row: "top" | "bottom") => {
    if (isMobile) return;
    if (row === "top" && desktopActiveTop) return;
    if (row === "bottom" && desktopActiveBottom) return;

    const container = row === "top" ? topRowContainerRef.current! : bottomRowContainerRef.current!;
    const track = row === "top" ? trackTopRef.current! : trackBottomRef.current!;
    const base = row === "top" ? Math.max(1, topBaseWidthRef.current) : Math.max(1, bottomBaseWidthRef.current);

    activateRowForSwipe(container, track, base, { addSnap: false, addOverflow: true });
    if (row === "top") { setIsPausedTop(true); setDesktopActiveTop(true); }
    else { setIsPausedBottom(true); setDesktopActiveBottom(true); }

    // loop guard while interactive
    const onScroll = () => ensureInfiniteLoop(container, base);
    if (row === "top") {
      if (topScrollHandlerRef.current) container.removeEventListener("scroll", topScrollHandlerRef.current);
      topScrollHandlerRef.current = onScroll;
      container.addEventListener("scroll", onScroll, { passive: true });
    } else {
      if (bottomScrollHandlerRef.current) container.removeEventListener("scroll", bottomScrollHandlerRef.current);
      bottomScrollHandlerRef.current = onScroll;
      container.addEventListener("scroll", onScroll, { passive: true });
    }
  }, [isMobile, desktopActiveTop, desktopActiveBottom]);

  const exitDesktopInteractive = useCallback((row: "top" | "bottom") => {
    if (isMobile) return;

    const container = row === "top" ? topRowContainerRef.current! : bottomRowContainerRef.current!;
    const track = row === "top" ? trackTopRef.current! : trackBottomRef.current!;
    const base = row === "top" ? Math.max(1, topBaseWidthRef.current) : Math.max(1, bottomBaseWidthRef.current);

    if (row === "top") {
      resumeRowFromScroll(container, track, base, "slideLeft", TOP_DURATION);
      setIsPausedTop(false);
      setDesktopActiveTop(false);
      if (topScrollHandlerRef.current) container.removeEventListener("scroll", topScrollHandlerRef.current);
    } else {
      resumeRowFromScroll(container, track, base, "slideRight", BOTTOM_DURATION);
      setIsPausedBottom(false);
      setDesktopActiveBottom(false);
      if (bottomScrollHandlerRef.current) container.removeEventListener("scroll", bottomScrollHandlerRef.current);
    }
  }, [isMobile]);

  /* --------------------------- Arrow click handlers -------------------------- */

  const nudgeRow = (row: "top" | "bottom", dir: "prev" | "next") => {
    if (isMobile) return; // desktop only
    // Ensure interactive before nudging
    enterDesktopInteractive(row);

    const container = row === "top" ? topRowContainerRef.current! : bottomRowContainerRef.current!;
    const base = row === "top" ? Math.max(1, topBaseWidthRef.current) : Math.max(1, bottomBaseWidthRef.current);

    const delta = dir === "next" ? CARD_WIDTH : -CARD_WIDTH;
    container.scrollTo({ left: container.scrollLeft + delta, behavior: "smooth" });

    // Clamp into middle copy after the smooth scroll starts
    setTimeout(() => ensureInfiniteLoop(container, base), 200);

    // Auto resume after inactivity
    scheduleDesktopResume(row);
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

          {/* Top Row (desktop: arrows always visible) */}
          <div
            ref={topRowContainerRef}
            className={
              isMobile
                ? (activeMobileRow === "top" ? "overflow-x-auto no-scrollbar" : "overflow-hidden")
                : (desktopActiveTop ? "relative overflow-x-auto no-scrollbar" : "relative overflow-hidden")
            }
            onMouseEnter={() => { if (!isMobile) enterDesktopInteractive("top"); }}
            onMouseLeave={() => { if (!isMobile) exitDesktopInteractive("top"); }}
          >
            {/* Always-visible desktop arrows */}
            {!isMobile && (
              <>
                <button
                  aria-label="Previous"
                  className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-30 h-10 w-10 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 border border-white/20 backdrop-blur-md transition shadow-sm"
                  onClick={() => nudgeRow("top", "prev")}
                >
                  <ArrowLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  aria-label="Next"
                  className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-30 h-10 w-10 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 border border-white/20 backdrop-blur-md transition shadow-sm"
                  onClick={() => nudgeRow("top", "next")}
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
                  onMouseEnter={() => { setHoveredCard(index); if (!isMobile) setIsPausedTop(true); }}
                  onMouseLeave={() => { setHoveredCard(null); if (!isMobile) setIsPausedTop(false); }}
                  onClick={() => handleCardClick(service.path)}
                  onMobileVideoToggle={() => handleMobileVideoToggle(index)}
                />
              ))}
            </div>
          </div>

          {/* Bottom Row (desktop: arrows always visible) */}
          <div
            ref={bottomRowContainerRef}
            className={
              isMobile
                ? (activeMobileRow === "bottom" ? "overflow-x-auto no-scrollbar" : "overflow-hidden")
                : (desktopActiveBottom ? "relative overflow-x-auto no-scrollbar" : "relative overflow-hidden")
            }
            onMouseEnter={() => { if (!isMobile) enterDesktopInteractive("bottom"); }}
            onMouseLeave={() => { if (!isMobile) exitDesktopInteractive("bottom"); }}
          >
            {!isMobile && (
              <>
                <button
                  aria-label="Previous"
                  className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-30 h-10 w-10 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 border border-white/20 backdrop-blur-md transition shadow-sm"
                  onClick={() => nudgeRow("bottom", "prev")}
                >
                  <ArrowLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  aria-label="Next"
                  className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-30 h-10 w-10 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 border border-white/20 backdrop-blur-md transition shadow-sm"
                  onClick={() => nudgeRow("bottom", "next")}
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
                    onMouseEnter={() => { setHoveredCard(idx); if (!isMobile) setIsPausedBottom(true); }}
                    onMouseLeave={() => { setHoveredCard(null); if (!isMobile) setIsPausedBottom(false); }}
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

      {/* Hide mobile/desktop scrollbars when interactive */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
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
