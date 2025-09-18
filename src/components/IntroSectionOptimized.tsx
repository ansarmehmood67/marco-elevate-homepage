import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

/** Detect mobile (touch or <768px) */
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () =>
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

const IntroSectionOptimized = () => {
  const { ref, visibleItems } = useStaggeredAnimation(5, 120);
  const { ref: logosRef, visibleItems: logosVisible } = useStaggeredAnimation(3, 150);
  const { ref: philosophyRef, visibleItems: philosophyVisible } = useStaggeredAnimation(3, 200);
  const isMobile = useIsMobile();
  const [quoteVideoLoaded, setQuoteVideoLoaded] = useState(false);

  // Optimized video preloading with better performance
  useEffect(() => {
    let isMounted = true;
    const video = document.createElement('video');
    video.src = "https://res.cloudinary.com/dsergeqc9/video/upload/v1758129867/darkquotesection_skfcxq.mp4";
    video.preload = 'metadata'; // Only load metadata initially
    
    const handleCanPlayThrough = () => {
      if (isMounted) {
        setQuoteVideoLoaded(true);
      }
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
    };
    
    video.addEventListener('canplaythrough', handleCanPlayThrough, { passive: true });
    video.load();
    
    return () => {
      isMounted = false;
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
    };
  }, []);

  const brandLogos = [
    "/lovable-uploads/c015aef0-9ac6-47d5-8f1b-ea8aff14dd08.png",
    "/lovable-uploads/655e08e7-f709-41c5-9b01-f624d4dea2ce.png",
    "/lovable-uploads/fe2c67ca-9c86-4598-b7ce-05d1ef35dbbf.png",
    "/lovable-uploads/871bbc8b-f67d-4537-a7a2-574d06a9e919.png",
    "/lovable-uploads/d4a117b0-a098-4850-9d53-82ee30cbdb21.png",
    "/lovable-uploads/5a8470d1-8aa8-4ee0-a0c5-efbe23f61c0b.png",
    "/lovable-uploads/57e4bdda-6fe0-4184-b948-1e51ef3229c1.png",
    "/lovable-uploads/logoskyroom.png",
    "/lovable-uploads/squiseat.png",
    "/lovable-uploads/golee.png",
    "/lovable-uploads/time_vision.png",
    "/lovable-uploads/eurooffice.png",
    "/lovable-uploads/ralf.png",
    "/lovable-uploads/badvisior.png",
    "/lovable-uploads/moneytec.png",
  ];

  // Optimized marquee control with better performance
  const marqueeContainerRef = useRef<HTMLDivElement>(null);
  const marqueeTrackRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);

  // Pause animation when section leaves viewport - optimized
  useEffect(() => {
    const node = marqueeContainerRef.current;
    if (!node) return;
    
    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { 
        threshold: 0.05, 
        rootMargin: "120px 0px"
      }
    );
    
    io.observe(node);
    return () => io.disconnect();
  }, []);

  // Apply play/pause to track with requestAnimationFrame
  useEffect(() => {
    if (!marqueeTrackRef.current) return;
    
    requestAnimationFrame(() => {
      if (marqueeTrackRef.current) {
        marqueeTrackRef.current.style.animationPlayState = inView ? "running" : "paused";
      }
    });
  }, [inView]);

  const duration = isMobile ? 24 : 30;

  return (
    <section className="relative overflow-hidden">
      {/* Hero Section - optimized with GPU acceleration */}
      <div className="bg-white py-24 lg:py-32 relative gpu-accelerated">
        <div ref={ref} className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-12">
            {/* Premium Badge */}
            <div
              className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2E8BC0]/10 to-[#87CEEB]/10 rounded-full border border-[#2E8BC0]/20 backdrop-blur-sm transition-all duration-700 ease-out gpu-accelerated ${
                visibleItems[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#2E8BC0]" />
              <span className="text-[#2E8BC0] font-semibold text-sm">
                OUTSOURCING END-TO-END
              </span>
            </div>

            {/* Headline */}
            <div
              className={`transition-all duration-700 ease-out ${
                visibleItems[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.0] tracking-tight text-black mb-10 pb-6">
                <span className={`block transition-all duration-700 ease-out ${
                  visibleItems[1] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}>
                  DALLA STRATEGIA AL FATTURATO,
                </span>
                <span className={`block bg-gradient-to-r from-[#2E8BC0] via-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent transition-all duration-700 ease-out delay-200 ${
                  visibleItems[1] ? 'opacity-100 translate-x-0 animate-swipe-in-left' : 'opacity-0 -translate-x-12'
                }`}>
                  IN OUTSOURCING
                </span>
              </h1>
            </div>

            {/* Subheads - Enhanced */}
            <div
              className={`transition-all duration-700 ease-out gpu-accelerated ${
                visibleItems[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-xl md:text-2xl text-slate-700 font-semibold max-w-4xl mx-auto leading-relaxed">
                <strong className="text-[#2E8BC0] font-bold">Sales on Demand</strong> si occupa di strategia, esecuzione e ottimizzazione dei tuoi funnel, offrendo <strong className="text-slate-800">team operativi in outsourcing</strong> che lavorano come un reparto interno. A guidare il progetto c'è la consulenza diretta di un <strong className="text-[#2E8BC0] font-bold">direttore vendite e marketing esperto</strong>, che definisce le priorità operative e supervisiona i risultati.
              </p>
            </div>

            <div
              className={`transition-all duration-700 ease-out gpu-accelerated ${
                visibleItems[3] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className={`text-xl lg:text-2xl text-[#2E8BC0] font-bold max-w-3xl mx-auto transition-all duration-600 ease-out delay-300 transform ${
                visibleItems[3] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
                Inizia con un audit rapido e ricevi il piano operativo su misura.
              </p>
            </div>

            {/* CTA */}
            <div
              className={`pt-8 transition-all duration-700 ease-out gpu-accelerated ${
                visibleItems[4] ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <div className="relative inline-block group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full blur opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
                <Button
                  size="xl"
                  className="relative bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] hover:from-[#87CEEB] hover:to-[#2E8BC0] text-white font-bold px-12 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl gpu-accelerated transform hover:scale-105 transition-all duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="flex items-center gap-3">
                    Inizia subito
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </div>

              <div className={`mt-6 transition-all duration-600 ease-out delay-600 transform ${
                visibleItems[4] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
                <div className="inline-flex items-center px-6 py-3 bg-slate-100 rounded-full border border-slate-200">
                  <p className="text-base lg:text-lg font-bold text-slate-700">
                    <span className="text-[#2E8BC0]">●</span> Audit 30 min • 
                    <span className="text-[#2E8BC0] mx-2">●</span> Nessun impegno • 
                    <span className="text-[#2E8BC0] mx-2">●</span> Risposta entro 2 ore • 
                    <span className="text-[#2E8BC0] mx-2">●</span> 500+ clienti
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optimized Brand Logos Marquee */}
      <div className="py-20 lg:py-32 bg-gradient-to-br from-gray-100 via-slate-100 to-gray-50 relative overflow-hidden gpu-accelerated">
        {/* Simplified background for better performance */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-white/40"></div>

        <div ref={logosRef} className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto mb-10">
            <div className={`inline-block mb-8 group transition-all duration-700 ease-out ${
              logosVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className="text-sm font-semibold tracking-[0.25em] uppercase px-8 py-4 rounded-full bg-white/80 text-slate-700 border border-slate-200/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-400 group-hover:scale-105 gpu-accelerated">
                <Users className="w-4 h-4 inline-block mr-3 text-slate-600" />
                Clienti di Fiducia
              </span>
            </div>

            <h2 className={`text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight text-slate-800 mb-8 transition-all duration-700 ease-out ${
              logosVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Scelti ogni giorno da <br />
              <span className={`bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent transition-all duration-700 ease-out delay-300 ${
                logosVisible[1] ? 'opacity-100 translate-x-0 animate-swipe-in-left' : 'opacity-0 -translate-x-12'
              }`}>
                500+ Aziende
              </span>
            </h2>

            <p className={`text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-4xl mx-auto font-light mb-6 transition-all duration-700 ease-out ${
              logosVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Grazie all'outsourcing vendite e marketing, i nostri clienti attivano un reparto pronto all'uso, veloce ed efficace. Oltre 500 aziende hanno trasformato con noi il loro modo di crescere.
            </p>
          </div>

          {/* Optimized Marquee container */}
          <div
            ref={marqueeContainerRef}
            className="relative overflow-hidden rounded-2xl bg-white/70 p-8 border border-slate-200/50 backdrop-blur-sm shadow-xl gpu-accelerated"
          >
            {/* Gradient fades */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>

            {/* Optimized track */}
            <div
              ref={marqueeTrackRef}
              className="flex gap-16 items-center w-max gpu-accelerated"
              style={
                {
                  "--dur": `${duration}s`,
                  animation: `marquee var(--dur) linear infinite`,
                  willChange: 'transform'
                } as React.CSSProperties
              }
              onMouseEnter={() => {
                if (marqueeTrackRef.current) marqueeTrackRef.current.style.animationPlayState = "paused";
              }}
              onMouseLeave={() => {
                if (marqueeTrackRef.current && inView) marqueeTrackRef.current.style.animationPlayState = "running";
              }}
            >
              <LogoRow logos={brandLogos} />
              <LogoRow logos={brandLogos} ariaHidden />
            </div>
          </div>
        </div>
      </div>

      {/* Optimized Quote Section */}
      <div className="relative py-20 overflow-hidden gpu-accelerated">
        <div className="absolute inset-0 z-0">
          {!quoteVideoLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-800 animate-pulse" />
          )}
          <video 
            muted 
            loop 
            playsInline 
            preload="metadata"
            poster="https://res.cloudinary.com/dsergeqc9/image/upload/f_auto,q_auto,w_1200/v1758129867/darkquotesection_poster.jpg"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 gpu-accelerated ${
              quoteVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoadedData={() => setQuoteVideoLoaded(true)}
            onClick={(e) => {
              const video = e.currentTarget;
              if (video.paused) {
                video.play();
              } else {
                video.pause();
              }
            }}
          >
            <source src="https://res.cloudinary.com/dsergeqc9/video/upload/v1758129867/darkquotesection_skfcxq.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/70 to-black/80"></div>
        </div>

        <div ref={philosophyRef} className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="space-y-8">
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm transition-all duration-700 ease-out ${
              philosophyVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className="text-[#87CEEB] font-medium text-sm">La nostra filosofia</span>
            </div>

            <blockquote className="space-y-6">
              <div className={`relative transition-all duration-700 ease-out ${
                philosophyVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Outsourcing vendite e marketing.
                  <br />
                  <span className={`bg-gradient-to-r from-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl transition-all duration-700 ease-out delay-300 ${
                    philosophyVisible[1] ? 'opacity-100 translate-x-0 animate-swipe-in-left' : 'opacity-0 -translate-x-12'
                  }`}>
                    Direzione chiara. Successo misurabile.
                  </span>
                </h3>
              </div>

              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Con il nostro metodo di <strong className="text-[#87CEEB]">outsourcing vendite e marketing</strong> trasformiamo ogni attività in un processo chiaro, misurabile e orientato al risultato.
              </p>

              <div className={`pt-6 transition-all duration-700 ease-out ${
                philosophyVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white/10 text-white hover:bg-white/20 font-semibold px-10 py-4 rounded-full transition-all duration-300 border border-white/20 hover:border-white/30 backdrop-blur-sm gpu-accelerated" 
                  size="lg"
                >
                  <span className="flex items-center gap-2">
                    Inizia subito
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>

                <div className="mt-6">
                  <div className={`inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-700 ease-out delay-300 ${
                    philosophyVisible[2] ? 'opacity-100 translate-x-0 animate-swipe-in-left' : 'opacity-0 -translate-x-12'
                  }`}>
                    <p className="text-base lg:text-lg font-bold text-white">
                      <span className="text-[#87CEEB]">●</span> Audit 30 min • 
                      <span className="text-[#87CEEB] mx-2">●</span> Nessun impegno • 
                      <span className="text-[#87CEEB] mx-2">●</span> Risposta entro 2 ore • 
                      <span className="text-[#87CEEB] mx-2">●</span> 500+ clienti
                    </p>
                  </div>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Optimized keyframes */}
      <style>{`
        @keyframes marquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="marquee"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
};

const LogoRow = ({ logos, ariaHidden = false }: { logos: string[]; ariaHidden?: boolean }) => (
  <div className="flex items-center gap-16 w-max gpu-accelerated" aria-hidden={ariaHidden}>
    {logos.map((src, i) => (
      <LogoItem key={(ariaHidden ? "dup-" : "") + i} src={src} alt={`Brand ${i + 1}`} />
    ))}
  </div>
);

const LogoItem = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex-shrink-0 group">
    <div className="p-4 rounded-xl bg-white shadow-lg border border-white/20 group-hover:shadow-xl group-hover:border-primary/50 transition-all duration-300 backdrop-blur-sm gpu-accelerated">
      <img
        src={src}
        alt={alt}
        className="h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        loading="lazy"
      />
    </div>
  </div>
);

export default IntroSectionOptimized;