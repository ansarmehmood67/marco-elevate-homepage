import React, { useRef, useEffect, useState, useMemo } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { allServices } from "@/data/servicesData";
import ServiceCard from "@/components/shared/ServiceCard";
import { Button } from "@/components/ui/button";

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

// Measure exact width of ONE logical set (cards + gaps) from the *track*'s first N children
const measureBaseWidth = (track: HTMLElement | null, setLength: number) => {
  if (!track || !isBrowser()) return 0;
  // Ensure layout is up to date
  track.getBoundingClientRect();

  const cs = getComputedStyle(track);
  const gap =
    parseFloat((cs as any).columnGap || (cs as any).gap || "0") || 0;

  let sum = 0;
  const limit = Math.min(setLength, track.children.length);
  for (let i = 0; i < limit; i++) {
    const child = track.children[i] as HTMLElement | undefined;
    if (!child) break;
    const rect = child.getBoundingClientRect();
    sum += rect.width;
  }
  sum += gap * Math.max(0, limit - 1);
  return Math.round(sum);
};

// Keep scroll position centered for mobile (scroll container)
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

/** ---------- animation controller (seam-free) ---------- */
class SmoothCarouselController {
  private track: HTMLElement;
  private baseWidth: number;
  private durationMs: number;
  private dirSign: number; // -1 left, +1 right
  private _isPaused = true;
  private rafId: number | null = null;
  private startedAt = 0;
  private carriedDistance = 0;
  private currentX = 0; // current transform x
  private initial: number; // start on middle clone: -baseWidth

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

  navigateByCard(direction: "left" | "right") {
    const step = 340; // w-80 (320px) + ~20px gap
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

  // Outer scroll container (mobile) & inner track (animated)
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

  // Observe the section entering viewport
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
      // IntersectionObserver not available (very old browsers) -> just mark in view
      setIsInView(true);
    }
    return () => {
      if (io) io.disconnect();
    };
  }, []);

  // Init controller
  useEffect(() => {
    if (!isBrowser()) return;
    const track = trackRef.current;
    if (!track) return;

    const timer = window.setTimeout(() => {
      const baseWidth = measureBaseWidth(track, aiServices.length);
      baseWidthRef.current = baseWidth;

      if (baseWidth > 0) {
        controller.current = new SmoothCarouselController(track, baseWidth, 25, "left");
        if (!isMobile && isInView) controller.current.start();
      } else {
        track.style.transform = "translate3d(0px,0,0)";
      }
    }, 80);

    return () => {
      clearTimeout(timer);
      if (controller.current) {
        controller.current.stop();
        controller.current = null;
      }
    };
  }, [isMobile, isInView, aiServices.length]);

  // Restart when back in view (desktop)
  useEffect(() => {
    if (!isMobile && isInView && controller.current && controller.current.isPaused) {
      controller.current.start();
    }
  }, [isInView, isMobile]);

  // Mobile infinite scroll correction runs on the scroll *container*
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

  // Hover pause/resume (desktop)
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleMouseEnter = () => {
    if (isMobile || !controller.current) return;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    controller.current.pause();
  };
  const handleMouseLeave = () => {
    if (isMobile || !controller.current) return;
    resumeTimeoutRef.current = setTimeout(() => controller.current?.start(), 700);
  };

  // Arrows
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
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#2E8BC0] rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-[#87CEEB] rounded-full opacity-40 animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-[#2E8BC0] rounded-full opacity-30 animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-60 right-40 w-2 h-2 bg-[#87CEEB] rounded-full opacity-50 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-[#2E8BC0] rounded-full opacity-70 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-left max-w-2xl">
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

      {/* Carousel */}
      <div className="relative w-full">
        {/* fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* arrows (desktop) */}
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

        {/* Outer scroll container (mobile) */}
        <div
          ref={scrollContainerRef}
          className={`w-full ${isMobile ? "overflow-x-auto no-scrollbar" : "overflow-hidden"}`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
        >
          {/* Inner track gets the transform animation (desktop) */}
          <div
            ref={trackRef}
            className={`flex gap-5 px-6 ${isMobile ? "snap-x snap-mandatory" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {extendedServices.map((service, index) => (
              <div
                key={`${(service as any)?.path ?? "svc"}-${index}`}
                className={`flex-shrink-0 w-80 ${isMobile ? "snap-center" : ""}`}
              >
                <ServiceCard service={service} index={index} staticDisplay={false} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIServicesCarousel;
