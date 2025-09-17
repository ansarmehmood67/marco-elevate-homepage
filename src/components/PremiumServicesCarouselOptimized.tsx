import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Zap } from "lucide-react";
import { allServices } from "@/data/servicesData";
import ServiceCard from "@/components/shared/ServiceCard";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
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

          <h2 className={`text-5xl lg:text-7xl font-black leading-[0.9] tracking-tight text-white mb-10 pb-3 transition-all duration-700 ease-out ${headerItems[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="inline-block">Soluzioni per la Tua{" "}</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Crescita
            </span>
          </h2>

          <p className={`text-xl lg:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto font-light transition-all duration-700 ease-out ${headerItems[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Non solo servizi, ma soluzioni pensate su misura: outsourcing vendite e marketing + AI, per darti un vantaggio competitivo reale.
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
              {extendedBottomServices.map((service, index) => (
                <ServiceCard
                  key={`bottom-${service.title}-${index + 1000}`}
                  service={service}
                  index={index + 1000}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Quiz CTA - Enhanced */}
        <div className="text-center mt-20">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
              Non sai da dove iniziare?
              <br />
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                Lascia che ti guidiamo.
              </span>
            </h3>

            <div className="relative inline-block group mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-glow rounded-full blur opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
              <Button
                onClick={() => setIsQuizOpen(true)}
                className="relative group bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-white px-12 py-6 text-xl lg:text-2xl font-bold rounded-full shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105 border border-primary/20"
              >
                <Zap className="w-7 h-7 mr-4 group-hover:animate-pulse" />
                Fai il Quiz di 45 Secondi
              </Button>
            </div>

            <div className="inline-flex items-center px-8 py-4 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50">
              <p className="text-base lg:text-lg font-bold text-gray-200">
                <span className="text-primary-glow">⚡</span> Risultati immediati • 
                <span className="text-primary-glow mx-2">🎯</span> Soluzione personalizzata • 
                <span className="text-primary-glow mx-2">💡</span> Consulenza gratuita
              </p>
            </div>
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


export default PremiumServicesCarouselOptimized;
