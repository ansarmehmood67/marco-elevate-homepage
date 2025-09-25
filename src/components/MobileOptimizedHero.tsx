import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";
import LazyYouTubeEmbed from "@/components/LazyYouTubeEmbed";
import OptimizedImageWebP from "@/components/OptimizedImageWebP";

const MobileOptimizedHero = () => {
  const { ref, visibleItems } = useStaggeredAnimation(6, 200);
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Only preload video on desktop
    if (!isMobile) {
      const video = document.createElement('video');
      video.src = "https://res.cloudinary.com/dsergeqc9/video/upload/v1758129785/homepage_background_n1ngs3.mp4";
      video.preload = "metadata";
      
      const handleCanPlayThrough = () => {
        setVideoLoaded(true);
        video.removeEventListener('canplaythrough', handleCanPlayThrough);
      };
      
      video.addEventListener('canplaythrough', handleCanPlayThrough);
      
      const loadTimeout = setTimeout(() => video.load(), 100);
      
      return () => {
        clearTimeout(loadTimeout);
        video.removeEventListener('canplaythrough', handleCanPlayThrough);
        window.removeEventListener('resize', checkMobile);
      };
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return (
    <section className="pt-24 sm:pt-24 lg:pt-24 pb-16 px-0 bg-black relative overflow-hidden min-h-screen">
      {/* Simplified background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-black to-gray-900/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.08),transparent_50%)]" />

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden border border-gray-800/30 shadow-2xl bg-black/60 backdrop-blur-sm min-h-[85vh] lg:min-h-[90vh]">
          
          {/* Mobile: Static optimized image, Desktop: Video */}
          <div className="absolute inset-0 optimize-lcp">
            {isMobile ? (
              // Mobile: Use optimized static image instead of video
              <OptimizedImageWebP
                src="https://res.cloudinary.com/dsergeqc9/image/upload/v1758129785/homepage_hero_poster.jpg"
                alt="Sales on Demand - Professional sales outsourcing"
                width={1920}
                height={1080}
                priority={true}
                quality={85}
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            ) : (
              <>
                {/* Desktop: Poster + Video */}
                <div className="absolute inset-0 hero-video-poster" />
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="https://res.cloudinary.com/dsergeqc9/image/upload/v1758129785/homepage_hero_poster.jpg"
                  width="1920"
                  height="1080"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    videoLoaded ? 'opacity-80' : 'opacity-0'
                  }`}
                  onLoadedData={() => setVideoLoaded(true)}
                  onError={() => setVideoLoaded(false)}
                >
                  <source
                    src="https://res.cloudinary.com/dsergeqc9/video/upload/v1758129785/homepage_background_n1ngs3.webm"
                    type="video/webm"
                  />
                  <source
                    src="https://res.cloudinary.com/dsergeqc9/video/upload/v1758129785/homepage_background_n1ngs3.mp4"
                    type="video/mp4"
                  />
                </video>
              </>
            )}
          </div>

          {/* Clean overlays */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/80" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />

          {/* Content */}
          <div
            ref={ref}
            className="relative lg:absolute lg:inset-0 flex flex-col justify-center lg:justify-center p-2 sm:p-2 lg:p-6 pt-6 sm:pt-10 lg:pt-4 pb-4 sm:pb-6 lg:pb-4 z-20"
          >
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 sm:gap-6 lg:gap-8">
              {/* Left copy */}
              <div className="flex-1 max-w-5xl">
                 {/* Main Heading - Reduced animation on mobile */}
                 <h1
                  className={`text-hero-title font-black leading-constrained-tight tracking-tight text-white mb-2 text-center lg:text-left ${
                    visibleItems[0] 
                      ? (isMobile ? "animate-fade-in" : "animate-swipe-in-left")
                      : "opacity-0"
                  }`}
                >
                  Il tuo reparto vendite e marketing in{" "}
                  <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent tracking-normal">
                    outsourcing
                  </span>
                </h1>
                
                {/* Sub Heading */}
                <div className={`text-hero-subtitle text-white/95 font-bold tracking-wide mb-4 sm:mb-4 text-center lg:text-left ${
                  visibleItems[1] 
                    ? (isMobile ? "animate-fade-in" : "animate-swipe-in-left")
                    : "opacity-0"
                }`}>
                   Strategia, vendite e fatturato.
                </div>

                {/* Paragraph */}
                <div
                  className={`mb-6 lg:mb-10 ${
                    visibleItems[2] 
                      ? "animate-fade-in-bottom" 
                      : "opacity-0"
                  }`}
                >
                  <div className="relative inline-block">
                    <p className="inline-block w-fit max-w-[60ch] text-hero-body text-white/95 leading-constrained-relaxed backdrop-blur-xl bg-gradient-to-r from-black/30 via-black/20 to-black/30 rounded-2xl px-4 lg:px-2 py-1 lg:py-2 border border-white/10 shadow-2xl">
                      il tuo reparto in outsourcing che lavora come fosse interno alla tua azienda. Un'unica squadra dedicata che prende in mano le tue{" "}
                      <span className="text-primary font-medium">
                        vendite
                      </span>
                      , accelera i{" "}
                      <span className="text-primary font-medium">
                        risultati
                      </span>{" "}
                      e ti libera dal peso operativo.
                    </p>
                  </div>
                </div>

                {/* Bullets - Enhanced */}
                <div
                  className={`mb-6 lg:mb-8 ${
                    visibleItems[3] 
                      ? (isMobile ? "animate-fade-in" : "animate-swipe-in-left")
                      : "opacity-0"
                  }`}
                >
                  <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <p className="text-base lg:text-lg text-white font-bold">
                      <span className="text-primary-glow">✓</span> Audit 30 min • 
                      <span className="text-primary-glow mx-2">✓</span> Nessun impegno • 
                      <span className="text-primary-glow mx-2">✓</span> Risposta entro 2 ore • 
                      <span className="text-primary-glow mx-2">✓</span> 500+ clienti
                    </p>
                  </div>
                </div>

                {/* CTA Button - Simplified hover effects on mobile */}
                <div
                  className={`relative group mb-8 sm:mb-0 flex justify-center lg:justify-start ${
                    visibleItems[4] 
                      ? "animate-scale-in" 
                      : "opacity-0"
                  }`}
                >
                  <a href="#contact" className="w-fit">
                    <Button className={`relative font-bold px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl rounded-full shadow-2xl transition-all duration-700 bg-gradient-to-r from-white via-gray-50 to-white text-black border-2 border-white/60 backdrop-blur-xl overflow-hidden group ${
                      !isMobile ? 'hover:shadow-[0_0_50px_hsl(var(--primary-glow)/0.4)] transform lg:hover:scale-105 hover:-translate-y-0.5 hover:from-primary hover:via-primary-glow hover:to-primary hover:text-white hover:border-primary/70' : ''
                    }`}>
                      {!isMobile && (
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-glow/0 to-primary/0 group-hover:from-primary/20 group-hover:via-primary-glow/20 group-hover:to-primary/20 transition-all duration-700" />
                      )}
                      <span className="flex items-center space-x-2 lg:space-x-3 relative z-10">
                        <span className="relative">
                          Inizia subito
                          {!isMobile && (
                            <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary-glow group-hover:w-full transition-all duration-500" />
                          )}
                        </span>
                        <ArrowRight className={`w-4 h-4 lg:w-5 lg:h-5 transition-all duration-500 ${
                          !isMobile ? 'group-hover:translate-x-3 group-hover:text-white animate-pulse' : 'animate-pulse'
                        }`} />
                      </span>
                      {!isMobile && (
                        <div className="absolute inset-0 -top-2 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      )}
                    </Button>
                  </a>
                  {!isMobile && (
                    <>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-primary-glow/30 to-primary/30 filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                      <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/20 via-primary-glow/20 to-primary/20 filter blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 -z-20" />
                    </>
                  )}
                </div>
              </div>

              {/* Right video */}
              <div className={`w-full sm:w-80 lg:w-80 lg:flex-shrink-0 group transform-gpu will-change-[transform,opacity] ${
                visibleItems[5] 
                  ? (isMobile ? "animate-fade-in" : "animate-swipe-in-right")
                  : "opacity-0"
              }`}
              >
                <div className="relative">
                  {/* Optimized YouTube embed with lazy loading */}
                  <div className={`w-full h-44 sm:h-48 rounded-2xl overflow-hidden shadow-2xl border border-white/40 backdrop-blur-xl bg-gradient-to-br from-black/30 via-black/20 to-black/30 transition-all duration-700 ${
                    !isMobile ? 'lg:hover:shadow-[0_0_40px_rgba(56,189,248,0.3)] lg:hover:scale-105' : ''
                  }`}>
                    <LazyYouTubeEmbed
                      videoId="ZocHP6N9Aig"
                      title="Sales on Demand spiegata in 30 minuti - Demo completo"
                      className="w-full h-full"
                      width={320}
                      height={192}
                    />
                  </div>

                  {/* Label: mobile=below video, desktop=floating above */}
                  <div
                    className={`
                      static sm:absolute
                      top-auto sm:-top-12
                      left-auto sm:left-1/2
                      translate-x-0 sm:-translate-x-1/2
                      mt-1 sm:mt-0
                      w-full sm:w-auto
                      flex sm:block justify-center
                      z-10
                      ${visibleItems[5] 
                        ? "animate-fade-in" 
                        : "opacity-0"
                      }
                    `}
                  >
                    <span className="inline-flex items-center px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-primary/90 via-primary-glow/90 to-primary/90 text-white text-xs sm:text-sm font-bold rounded-full backdrop-blur-xl border border-white/40 shadow-xl whitespace-nowrap">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white mr-2 animate-pulse" />
                      Sales on Demand spiegata in 30'
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileOptimizedHero;