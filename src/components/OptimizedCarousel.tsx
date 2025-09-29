import React, { useRef, useEffect, useState, useMemo } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ServiceCard from "@/components/shared/ServiceCard";
import { Button } from "@/components/ui/button";

/** Lightweight carousel with reduced DOM elements */

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

// Simplified controller with minimal DOM manipulation
class LightCarouselController {
  private track: HTMLElement;
  private itemWidth: number;
  private totalItems: number;
  private currentIndex = 0;
  private rafId: number | null = null;
  private _isPaused = true;

  constructor(track: HTMLElement, itemWidth: number, totalItems: number) {
    this.track = track;
    this.itemWidth = itemWidth;
    this.totalItems = totalItems;
  }

  start() {
    if (!this._isPaused) return;
    this._isPaused = false;
    this.animate();
  }

  pause() {
    this._isPaused = true;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  private animate = () => {
    if (this._isPaused) return;
    
    // Move one item every 3 seconds
    setTimeout(() => {
      if (!this._isPaused) {
        this.currentIndex = (this.currentIndex + 1) % this.totalItems;
        this.updatePosition();
        this.rafId = requestAnimationFrame(this.animate);
      }
    }, 3000);
  };

  private updatePosition() {
    const offset = -this.currentIndex * (this.itemWidth + 16); // 16px gap
    this.track.style.transform = `translateX(${offset}px)`;
  }

  navigateByCard(direction: 'left' | 'right') {
    this.pause();
    
    if (direction === 'right') {
      this.currentIndex = (this.currentIndex + 1) % this.totalItems;
    } else {
      this.currentIndex = (this.currentIndex - 1 + this.totalItems) % this.totalItems;
    }
    
    this.track.style.transition = 'transform 450ms ease-out';
    this.updatePosition();
    
    setTimeout(() => {
      this.track.style.transition = '';
      this.start();
    }, 500);
  }
}

interface OptimizedCarouselProps {
  services: any[];
  title: string;
  subtitle: string;
  direction?: 'left' | 'right';
}

const OptimizedCarousel: React.FC<OptimizedCarouselProps> = ({ 
  services, 
  title, 
  subtitle,
  direction = 'left' 
}) => {
  const isMobile = useIsMobile();
  const trackRef = useRef<HTMLDivElement>(null);
  const controller = useRef<LightCarouselController | null>(null);
  const [isInView, setIsInView] = useState(false);

  // Use only original services array (no tripling)
  const displayServices = useMemo(() => services, [services]);

  // Intersection observer
  const sectionRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Initialize controller
  useEffect(() => {
    if (!trackRef.current || isMobile) return;
    
    controller.current = new LightCarouselController(
      trackRef.current,
      360, // card width
      displayServices.length
    );
    
    if (isInView) {
      controller.current.start();
    }
    
    return () => {
      controller.current?.pause();
    };
  }, [isMobile, isInView, displayServices.length]);

  const handlePrevious = () => {
    controller.current?.navigateByCard('left');
  };

  const handleNext = () => {
    controller.current?.navigateByCard('right');
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-8 py-4 rounded-full text-sm font-bold tracking-[0.3em] uppercase mb-8 bg-primary/10 text-primary border border-primary/20">
            {title}
          </div>
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-white mb-6">
            {subtitle}
          </h2>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative w-full">
        {/* Gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Navigation arrows */}
        {!isMobile && (
          <>
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-black/80 border-primary/30 text-primary hover:bg-primary/20"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-black/80 border-primary/30 text-primary hover:bg-primary/20"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </>
        )}

        {/* Track container */}
        <div className={`w-full ${isMobile ? "overflow-x-auto" : "overflow-hidden"}`}>
          <div
            ref={trackRef}
            className="flex gap-4 px-6"
            onMouseEnter={() => !isMobile && controller.current?.pause()}
            onMouseLeave={() => !isMobile && controller.current?.start()}
          >
            {displayServices.map((service, index) => (
              <div key={service.id || index} className="flex-none w-[360px]">
                <ServiceCard
                  service={service}
                  index={index}
                  staticDisplay={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizedCarousel;