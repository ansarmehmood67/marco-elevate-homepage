import React, { useRef, useEffect, useState } from 'react';
import { allServices } from '@/data/servicesData';
import ServiceCard from '@/components/shared/ServiceCard';
import { useIsMobile } from '@/hooks/use-mobile';

// Animation Controller for single row
class AICarouselController {
  private animationId: number | null = null;
  private isRunning = false;
  private pausedTime = 0;
  private startTime = 0;
  private duration: number;
  private track: HTMLDivElement;
  private baseWidth: number;

  constructor(track: HTMLDivElement, baseWidth: number, duration: number) {
    this.track = track;
    this.baseWidth = baseWidth;
    this.duration = duration;
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.startTime = Date.now() - this.pausedTime;
    this.animate();
  }

  pause() {
    if (!this.isRunning) return;
    this.isRunning = false;
    this.pausedTime = Date.now() - this.startTime;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  stop() {
    this.isRunning = false;
    this.pausedTime = 0;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  private animate = () => {
    if (!this.isRunning) return;

    const elapsed = Date.now() - this.startTime;
    const progress = (elapsed % this.duration) / this.duration;
    const translateX = -(progress * this.baseWidth);

    this.track.style.transform = `translateX(${translateX}px)`;
    this.animationId = requestAnimationFrame(this.animate);
  };
}

// Utility functions
const measureBaseWidth = (track: HTMLDivElement, setLength: number): number => {
  const cards = track.children;
  if (cards.length === 0) return 0;

  let totalWidth = 0;
  for (let i = 0; i < setLength; i++) {
    const card = cards[i] as HTMLElement;
    if (card) {
      const rect = card.getBoundingClientRect();
      totalWidth += rect.width;
    }
  }

  const gap = 32; // 2rem gap
  return totalWidth + (gap * (setLength - 1));
};

const ensureInfiniteLoop = (container: HTMLDivElement, baseWidth: number) => {
  const currentTransform = container.style.transform;
  const translateXMatch = currentTransform.match(/translateX\(([^)]+)\)/);
  
  if (translateXMatch) {
    const currentX = parseFloat(translateXMatch[1]);
    if (currentX <= -baseWidth) {
      container.style.transform = `translateX(${currentX + baseWidth}px)`;
    }
  }
};

const AIServicesCarousel = () => {
  const isMobile = useIsMobile();
  const [isInView, setIsInView] = useState(false);
  
  // Refs
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const baseWidthRef = useRef(0);
  const controller = useRef<AICarouselController | null>(null);
  
  const DURATION = 25000; // 25 seconds for full loop

  // Filter to only show AI-related services (indices 10-17 are AI services)
  const aiServices = allServices.slice(10, 18); // Monetizza YouTube to AI Integration
  
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
    if (!trackRef.current || !isInView) return;

    const track = trackRef.current;
    
    // Measure base width
    const baseWidth = measureBaseWidth(track, aiServices.length);
    baseWidthRef.current = baseWidth;

    // Initialize controller
    controller.current = new AICarouselController(track, baseWidth, DURATION);
    
    // Start animation on desktop
    if (!isMobile) {
      controller.current.start();
    }

    return () => {
      if (controller.current) {
        controller.current.stop();
        controller.current = null;
      }
    };
  }, [isInView, isMobile, aiServices.length]);

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

  // Hover controls for desktop
  const handleMouseEnter = () => {
    if (!isMobile && controller.current) {
      controller.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && controller.current) {
      controller.current.start();
    }
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
      <div className="w-full">
        <div
          className="flex gap-8 px-6"
          ref={trackRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            overflowX: isMobile ? 'scroll' : 'hidden',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {extendedServices.map((service, index) => (
            <div key={`${service.path}-${index}`} className="flex-shrink-0 w-80">
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