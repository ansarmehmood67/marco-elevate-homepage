import React, { useRef, useEffect, useState, useMemo } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { allServices } from "@/data/servicesData";
import ServiceCard from "@/components/shared/ServiceCard";
import { Button } from "@/components/ui/button";

/** ---------- config ---------- */
const CARD_W = 360;   // real visual width of one card (px)
const GAP    = 10;    // gap between cards (px)
const SCROLL_DURATION_SEC = 25; // slower -> bigger number

/** ---------- utils ---------- */
const isBrowser = () => typeof window !== "undefined";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (!isBrowser()) return;
    const check = () => setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

// exact width of one logical set (8 cards)
const baseWidthFor = (setLength: number) =>
  setLength * CARD_W + GAP * Math.max(0, setLength - 1);

// keep scroll centered for mobile
const ensureInfiniteLoop = (container: HTMLElement | null, baseWidth: number) => {
  if (!container || baseWidth <= 0) return;
  const left = (container as any).scrollLeft ?? 0;
  const low = baseWidth * 0.25;
  const mid = baseWidth * 1.0;
  const high = baseWidth * 1.75;
  if (left < low) (container as any).scrollLeft = left + baseWidth;
  else if (left > high) (container as any).scrollLeft = left - baseWidth;
  else if (left === 0) (container as any).scrollLeft = mid;
};

/** ---------- seam-free transform controller ---------- */
class SmoothCarouselController {
  private track: HTMLElement;
  private baseWidth: number;
  private durationMs: number;
  private dirSign: number; // -1 left, +1 right
  private _isPaused = true;
  private rafId: number | null = null;
  private startedAt = 0;
  private carriedDistance = 0;
  private currentX = 0;
  private initial: number;

  get isPaused() { return this._isPaused; }

  constructor(track: HTMLElement, baseWidth: number, durationSec: number, direction: "left" | "right") {
    this.track = track;
    this.baseWidth = Math.max(1, baseWidth);
    this.durationMs = Math.max(200, durationSec * 1000);
    this.dirSign = direction === "left" ? -1 : 1;
    this.initial = -this.baseWidth;
    this.currentX = this.initial;
    this.applyX(this.currentX, false);
  }

  private applyX(x: number, withTransition: boolean) {
    if (!this.track) return;
    if (!withTransition) this.track.style.transition = "";
    this.track.style.transform = `translate3d(${x}px,0,0)`;
  }

  private tick = () => {
    if (this._isPaused) return;
    const now = performance.now();
    const elapsed = now - this.startedAt;
    const distance = (elapsed / this.durationMs) * this.baseWidth;
    let x = this.initial + this.dirSign * (this.carriedDistance + distance);

    while (x <= -2 * this.baseWidth) x += this.baseWidth;
    while (x >= 0) x -= this.baseWidth;

    this.currentX = x;
    this.applyX(this.currentX, false);
    this.rafId = requestAnimationFrame(this.tick);
  };

  start() {
    if (!this.track || this.baseWidth <= 0 || !this._isPaused) return;
    this._isPaused = false;
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

    this.carriedDistance = (this.currentX - this.initial) / this.dirSign;
    this.carriedDistance = ((this.carriedDistance % this.baseWidth) + this.baseWidth) % this.baseWidth;
  }

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
    this.currentX = -this.baseWidth;
    this.carriedDistance = 0;
    this.applyX(this.currentX, false);
    if (!wasPaused) this.start();
  }

  // step exactly one card
  navigateByCard(direction: "left" | "right") {
    const step = CARD_W + GAP;
    const sign = direction === "right" ? 1 : -1;

    this.pause();

    let target = this.currentX + sign * step;
    if (target <= -2 * this.baseWidth) target += this.baseWidth;
    if (target >= 0) target -= this.baseWidth;

    this.track.style.transition = "transform 450ms cubic-bezier(0.22, 0.61, 0.36, 1)";
    this.applyX(target, true);

    setTimeout(() => {
      this.currentX = target;
      this.track.style.transition = "";
      this.carriedDistance = (this.currentX - this.initial) / this.dirSign;
      this.carriedDistance = ((this.carriedDistance % this.baseWidth) + this.baseWidth) % this.baseWidth;
    }, 480);
  }
}

/** ---------- component ---------- */
const AIServicesCarousel = () => {
  const isMobile = useIsMobile();
  const [isInView, setIsInView] = useState(false);

  // container (mobile scroll) & animated track (desktop)
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const baseWidthRef = useRef(0);
  const controller = useRef<SmoothCarouselController | null>(null);

  // 8 items
  const aiServices = useMemo(() => allServices.slice(11, 19), []);
  const extendedServices = useMemo(
    () => [...aiServices, ...aiServices, ...aiServices],
    [aiServices]
  );

  // observe in-view
  const sectionRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!isBrowser()) return;
    if (!sectionRef.current) return;

    let io: IntersectionObserver | null = null;
    try {
      io = new IntersectionObserver(
        ([entry]) => setIsInView(entry.isIntersecting),
        { threshold: 0.1, rootMargin: "100px 0px" }
      );
      io.observe(sectionRef.current);
    } catch {
      setIsInView(true);
    }
    return () => { if (io) io.disconnect(); };
  }, []);

  // init controller + disable any autoplay videos inside cards
  useEffect(() => {
    if (!isBrowser()) return;
    const track = trackRef.current;
    if (!track) return;

    // Ensure videos do NOT autoplay; pause all on mount
    const vids = track.querySelectorAll("video");
    vids.forEach((v) => {
      v.removeAttribute("autoplay");
      (v as HTMLVideoElement).autoplay = false;
      (v as HTMLVideoElement).loop = true; // optional, looks nice while hovered
      (v as HTMLVideoElement).muted = true; // allow instant play on hover
      (v as HTMLVideoElement).playsInline = true;
      (v as HTMLVideoElement).pause();
      (v as HTMLVideoElement).currentTime = 0;
    });

    const timer = window.setTimeout(() => {
      const baseWidth = baseWidthFor(aiServices.length);
      baseWidthRef.current = baseWidth;

      controller.current = new SmoothCarouselController(track, baseWidth, SCROLL_DURATION_SEC, "left");
      if (!isMobile && isInView) controller.current.start();
    }, 60);

    return () => {
      clearTimeout(timer);
      if (controller.current) {
        controller.current.stop();
        controller.current = null;
      }
    };
  }, [isMobile, isInView, aiServices.length]);

  // restart when visible again (desktop)
  useEffect(() => {
    if (!isMobile && isInView && controller.current && controller.current.isPaused) {
      controller.current.start();
    }
  }, [isInView, isMobile]);

  // mobile infinite scroll correction runs on the scroll *container*
  useEffect(() => {
    if (!isMobile || !isBrowser()) return;
    const cont = scrollContainerRef.current;
    if (!cont) return;

    let t: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(t);
      t = setTimeout(() => ensureInfiniteLoop(cont, baseWidthRef.current), 120);
    };
    cont.addEventListener("scroll", onScroll);
    return () => {
      cont.removeEventListener("scroll", onScroll);
      clearTimeout(t);
    };
  }, [isMobile]);

  // hover pause/resume (desktop)
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleMouseEnterTrack = () => {
    if (isMobile || !controller.current) return;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    controller.current.pause();
  };
  const handleMouseLeaveTrack = () => {
    if (isMobile || !controller.current) return;
    resumeTimeoutRef.current = setTimeout(() => controller.current?.start(), 700);
  };

  // play/pause video ONLY while hovered (desktop)
  const playVideoAt = (idx: number) => {
    if (!isBrowser() || isMobile) return;
    const track = trackRef.current;
    if (!track) return;
    const cardEl = track.children[idx] as HTMLElement | undefined;
    const video = cardEl?.querySelector("video") as HTMLVideoElement | null;
    if (video) {
      video.muted = true;
      video.playsInline = true;
      video.play().catch(() => {});
    }
  };
  const pauseVideoAt = (idx: number) => {
    if (!isBrowser()) return;
    const track = trackRef.current;
    if (!track) return;
    const cardEl = track.children[idx] as HTMLElement | undefined;
    const video = cardEl?.querySelector("video") as HTMLVideoElement | null;
    if (video) {
      video.pause();
      video.currentTime = 0; // rewind so it looks static again
    }
  };

  // arrows
  const handlePrevious = () => {
    if (!controller.current) return;
    controller.current.navigateByCard("left");
    setTimeout(() => {
      if (controller.current?.isPaused) controller.current?.start();
    }, 900);
  };
  const handleNext = () => {
    if (!controller.current) return;
    controller.current.navigateByCard("right");
    setTimeout(() => {
      if (controller.current?.isPaused) controller.current?.start();
    }, 900);
  };

  return (
    <section
      id="ourservices"
      className="py-20 bg-black relative overflow-hidden"
      ref={sectionRef}
    >
      {/* header (keep yours) */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-8 py-4 rounded-full text-sm font-bold tracking-[0.3em] uppercase mb-8 transition-all duration-300 hover:scale-105 shadow-lg bg-primary/10 text-primary border border-primary/20">
            SOLUZIONI AI PREMIUM
          </div>
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-white mb-6">
            I nostri{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">servizi</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Soluzioni complete di outsourcing per vendite e marketing. Ogni servizio è progettato per integrarsi perfettamente con il tuo business.
          </p>
        </div>
      </div>

      {/* fades + arrows */}
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {!isMobile && (
          <>
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-black/80 border-primary/30 text-primary hover:bg-primary/20 hover:border-primary backdrop-blur-sm"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-black/80 border-primary/30 text-primary hover:bg-primary/20 hover:border-primary backdrop-blur-sm"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </>
        )}

        {/* outer scroll container (mobile) */}
        <div
          ref={scrollContainerRef}
          className={`w-full ${isMobile ? "overflow-x-auto no-scrollbar" : "overflow-hidden"}`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
        >
          {/* inner track (animated on desktop) */}
          <div
            ref={trackRef}
            className={`flex px-6 ${isMobile ? "snap-x snap-mandatory" : ""}`}
            style={{ gap: `${GAP}px` }}
            onMouseEnter={handleMouseEnterTrack}
            onMouseLeave={handleMouseLeaveTrack}
          >
            {extendedServices.map((service, index) => (
              <div
                key={`${(service as any)?.path ?? "svc"}-${index}`}
                className={`${isMobile ? "snap-center" : ""} flex-none`}
                style={{ width: `${CARD_W}px` }}
                onMouseEnter={() => playVideoAt(index)}
                onMouseLeave={() => pauseVideoAt(index)}
              >
                {/* inner guard prevents bleed from ServiceCard negative margins */}
                <div className="w-full">
                  <ServiceCard
                    service={service}
                    index={index}
                    staticDisplay={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIServicesCarousel;
