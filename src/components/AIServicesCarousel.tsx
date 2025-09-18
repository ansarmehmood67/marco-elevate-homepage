import React, { useRef, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { allServices } from '@/data/servicesData';
import ServiceCard from '@/components/shared/ServiceCard';
import { Button } from '@/components/ui/button';

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
    const step = 340; // card + gap (320px + 20px)
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


const AIServicesCarousel = () => {
  const isMobile = useIsMobile();
  const [isInView, setIsInView] = useState(false);
  
  // Refs
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const baseWidthRef = useRef(0);
  const controller = useRef<SmoothCarouselController | null>(null);
  
  // Filter to only show AI-related services (indices 10-18 are AI services)  
  const aiServices = allServices.slice(10, 19); // Monetizza YouTube to AI Integration (includes index 18)
  
  // Triple for seamless clones
  const extendedServices = [...aiServices, ...aiServices, ...aiServices];

  // Section viewport observer
  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1, rootMargin: "100px 0px" }
    );
    if (containerRef.current) io.observe(containerRef.current);
    return () => io.disconnect();
  }, []);

  // Initialize carousel
  useEffect(() => {
    if (!trackRef.current) return;
    
    const track = trackRef.current;
    
    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      // Measure base width
      const baseWidth = measureBaseWidth(track, aiServices.length);
      console.log('AI Carousel baseWidth:', baseWidth, 'aiServices.length:', aiServices.length);
      baseWidthRef.current = baseWidth;

      if (baseWidth > 0) {
        // Initialize controller
        controller.current = new SmoothCarouselController(track, baseWidth, 25, 'left');
        
        // Start animation on desktop
        if (!isMobile && isInView) {
          controller.current.start();
        }
      } else {
        console.warn('AI Carousel: baseWidth is 0, ensuring cards are visible');
        // Fallback positioning
        track.style.transform = 'translate3d(0px,0,0)';
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      if (controller.current) {
        controller.current.stop();
        controller.current = null;
      }
    };
  }, [isMobile, aiServices.length, isInView]);

  // Restart animation when coming into view
  useEffect(() => {
    if (isInView && !isMobile && controller.current && controller.current.isPaused) {
      controller.current.start();
    }
  }, [isInView, isMobile]);

  // Mobile scroll handling
  useEffect(() => {
    if (!isMobile || !trackRef.current) return;

    const track = trackRef.current;
    let scrollTimeout: number;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        ensureInfiniteLoop(track, baseWidthRef.current);
      }, 150);
    };

    track.addEventListener('scroll', handleScroll);
    return () => {
      track.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isMobile]);

  // Hover controls for desktop with delayed resume
  let resumeTimeout: NodeJS.Timeout;
  
  const handleMouseEnter = () => {
    if (!isMobile && controller.current) {
      clearTimeout(resumeTimeout);
      controller.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && controller.current) {
      resumeTimeout = setTimeout(() => {
        controller.current?.start();
      }, 700);
    }
  };

  // Arrow navigation
  const handlePrevious = () => {
    if (!controller.current) return;
    controller.current.navigateByCard('left');
    // Delayed resume after manual navigation
    setTimeout(() => {
      if (!controller.current?.isPaused) return;
      controller.current?.start();
    }, 900);
  };

  const handleNext = () => {
    if (!controller.current) return;
    controller.current.navigateByCard('right');
    // Delayed resume after manual navigation
    setTimeout(() => {
      if (!controller.current?.isPaused) return;
      controller.current?.start();
    }, 900);
  };

  return (
    <section 
      id="ourservices" 
      className="py-20 bg-black relative overflow-hidden"
      ref={containerRef}
    >
      {/* Floating AI Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#2E8BC0] rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-[#87CEEB] rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-[#2E8BC0] rounded-full opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 right-40 w-2 h-2 bg-[#87CEEB] rounded-full opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-[#2E8BC0] rounded-full opacity-70 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-left max-w-2xl">
          <div className="inline-flex items-center px-8 py-4 rounded-full text-sm font-bold tracking-[0.3em] uppercase mb-8 transition-all duration-300 hover:scale-105 shadow-lg bg-primary/10 text-primary border border-primary/20">
            SOLUZIONI AI PREMIUM
          </div>
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-white leading-tight mb-6">
            I nostri{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">servizi</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Soluzioni complete di outsourcing per vendite e marketing. Ogni servizio è 
            progettato per integrarsi perfettamente con il tuo business.
          </p>
        </div>
      </div>

      {/* Single Row Carousel */}
      <div className="relative w-full">
        {/* Left Edge Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        
        {/* Right Edge Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        
        {/* Navigation Buttons - Desktop Only */}
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

        <div
          className={`flex gap-5 px-6 ${isMobile ? 'overflow-x-auto no-scrollbar snap-x snap-mandatory' : 'overflow-hidden'}`}
          ref={trackRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {extendedServices.map((service, index) => (
            <div key={`${service.path}-${index}`} className={`flex-shrink-0 w-80 ${isMobile ? 'snap-center' : ''}`}>
              <ServiceCard 
                service={service} 
                index={index}
                staticDisplay={false}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default AIServicesCarousel;