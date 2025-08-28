import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users } from "lucide-react";
import { useCinematicSequence, ANIMATION_PRESETS } from "@/hooks/useCinematicAnimation";

/** Detect mobile (touch or <768px) */
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () =>
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

const IntroSection = () => {
  const { ref, visibleItems, getAnimationClasses } = useCinematicSequence(ANIMATION_PRESETS.textFlow);
  const isMobile = useIsMobile();

  const brandLogos = [
    "/lovable-uploads/c015aef0-9ac6-47d5-8f1b-ea8aff14dd08.png", // TUTELAIMPRESA
    "/lovable-uploads/655e08e7-f709-41c5-9b01-f624d4dea2ce.png", // karon
    "/lovable-uploads/fe2c67ca-9c86-4598-b7ce-05d1ef35dbbf.png", // VORSICHER
    "/lovable-uploads/871bbc8b-f67d-4537-a7a2-574d06a9e919.png", // inplace
    "/lovable-uploads/d4a117b0-a098-4850-9d53-82ee30cbdb21.png", // edilgo
    "/lovable-uploads/5a8470d1-8aa8-4ee0-a0c5-efbe23f61c0b.png", // easycassa
    "/lovable-uploads/57e4bdda-6fe0-4184-b948-1e51ef3229c1.png", // CROWN
  ];

  // Marquee control
  const marqueeContainerRef = useRef<HTMLDivElement>(null);
  const marqueeTrackRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);

  // Pause animation when section leaves viewport
  useEffect(() => {
    const node = marqueeContainerRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05, rootMargin: "120px 0px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  // Apply play/pause to track
  useEffect(() => {
    if (!marqueeTrackRef.current) return;
    marqueeTrackRef.current.style.animationPlayState = inView ? "running" : "paused";
  }, [inView]);

  // Animation duration: faster on mobile
  const duration = isMobile ? 16 : 22; // seconds; tweak to taste

  return (
    <section className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="bg-white py-24 lg:py-32 relative">
        <div ref={ref} className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-12">
            {/* Premium Badge */}
            <div className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2E8BC0]/10 to-[#87CEEB]/10 rounded-full border border-[#2E8BC0]/20 backdrop-blur-sm ${getAnimationClasses(0, ANIMATION_PRESETS.textFlow[0])}`}>
              <Sparkles className="w-4 h-4 text-[#2E8BC0]" />
              <span className="text-[#2E8BC0] font-semibold text-sm">
                OUTSOURCING END-TO-END
              </span>
            </div>

            {/* Clean headline */}
            <div className={getAnimationClasses(1, ANIMATION_PRESETS.textFlow[1])}>
              <h1 className="text-5xl lg:text-7xl font-black leading-[0.8] tracking-tight text-black mb-10">
                Il tuo reparto vendite e marketing,{" "}
                <span className="bg-gradient-to-r from-[#2E8BC0] via-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                  pronto all'uso
                </span>
              </h1>
            </div>

            {/* Subheads */}
            <div className={getAnimationClasses(2, ANIMATION_PRESETS.textFlow[2])}>
              <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-4xl mx-auto leading-relaxed">
                Sales on Demand si occupa di strategia, esecuzione e ottimizzazione dei tuoi funnel, offrendo team operativi in outsourcing che lavorano come un reparto interno. A guidare il progetto c'è la consulenza diretta di un direttore vendite e marketing esperto, che definisce le priorità operative e supervisiona i risultati.
              </p>
            </div>

            <div className={getAnimationClasses(3, ANIMATION_PRESETS.textFlow[3])}>
              <p className="text-lg text-[#2E8BC0] font-semibold max-w-3xl mx-auto">
                Inizia con un audit rapido e ricevi il piano operativo su misura.
              </p>
            </div>

            {/* CTA */}
            <div className={`pt-8 ${getAnimationClasses(3, ANIMATION_PRESETS.textFlow[3])}`}>
              <div className="relative inline-block group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full blur opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
                <Button
                  size="xl"
                  className="relative bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] hover:from-[#87CEEB] hover:to-[#2E8BC0] text-white font-bold px-12 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => (window.location.href = "/quiz")}
                >
                  <span className="flex items-center gap-3">
                    Inizia subito
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </div>

              <div className="mt-6">
                <p className="text-sm text-slate-500">
                  Audit 30 min • Nessun impegno • Risposta entro 2 ore • 500+ clienti
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logos (robust marquee, no overlap) */}
      <div className="py-20 lg:py-32 bg-gradient-to-br from-gray-100 via-slate-100 to-gray-50 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.02'%3E%3Cpath d='m0 0h60v60h-60z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-gradient-to-br from-slate-200/40 via-gray-100/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-tl from-slate-300/30 via-gray-200/15 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-white/40"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto mb-20">
            <div className="inline-block mb-8 group">
              <span className="text-sm font-semibold tracking-[0.25em] uppercase px-8 py-4 rounded-full bg-white/80 text-slate-700 border border-slate-200/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-400 group-hover:scale-105">
                <Users className="w-4 h-4 inline-block mr-3 text-slate-600" />
                Clienti di Fiducia
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight text-slate-800 mb-8">
              Scelti ogni giorno da <br />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                500+ Aziende
              </span>
            </h2>

            <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-4xl mx-auto font-light mb-6">
              Dalle startup alle grandi aziende, ci fidano per la loro crescita.
            </p>
            <p className="text-lg text-slate-700 font-medium">Ogni progetto è una partnership di successo.</p>

            <div className="mt-12 flex justify-center">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            </div>
          </div>

          {/* Marquee container */}
          <div
            ref={marqueeContainerRef}
            className="relative overflow-hidden rounded-2xl bg-white/70 p-8 border border-slate-200/50 backdrop-blur-sm shadow-xl"
          >
            {/* Fades */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>

            {/* Track (two identical rows; animate -50%) */}
            <div
              ref={marqueeTrackRef}
              className="flex gap-16 items-center w-max"
              style={
                {
                  // @ts-ignore CSS custom prop
                  "--dur": `${duration}s`,
                  animation: `marquee var(--dur) linear infinite`,
                } as React.CSSProperties
              }
              onMouseEnter={() => {
                if (marqueeTrackRef.current) marqueeTrackRef.current.style.animationPlayState = "paused";
              }}
              onMouseLeave={() => {
                if (marqueeTrackRef.current && inView) marqueeTrackRef.current.style.animationPlayState = "running";
              }}
            >
              {/* First set */}
              <LogoRow logos={brandLogos} />
              {/* Duplicate set (for seamless loop) */}
              <LogoRow logos={brandLogos} ariaHidden />
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1756303017/Untitled_design_16_ptw7gt.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/70 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
        </div>

        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#2E8BC0]/15 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#87CEEB]/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
              <span className="text-[#87CEEB] font-medium text-sm">La nostra filosofia</span>
            </div>

            <blockquote className="space-y-6">
              <div className="relative">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Processi chiari. Team in outsourcing.
                  <br />
                  <span className="bg-gradient-to-r from-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl">
                    Risultati veri.
                  </span>
                </h3>
                <div className="absolute -top-6 -left-6 w-8 h-8 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] rounded-lg flex items-center justify-center opacity-20">
                  <span className="text-white text-lg font-bold">"</span>
                </div>
              </div>

              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Mettiamo a disposizione marketing, vendite e direzione strategica in outsourcing per trasformare le attività in risultati misurabili.
              </p>

              <div className="pt-6">
                <Button className="bg-white/10 text-white hover:bg-white/20 font-semibold px-10 py-4 rounded-full transition-all duration-300 border border-white/20 hover:border-white/30 backdrop-blur-sm" size="lg">
                  <span className="flex items-center gap-2">
                    Prenota audit rapido
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>

                <div className="mt-4">
                  <p className="text-sm text-slate-400">
                    Audit 30 min • Nessun impegno • Risposta entro 2 ore • 500+ clienti
                  </p>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Decorative dots */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-[#2E8BC0] rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-[#87CEEB] rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-[#2E8BC0] rounded-full opacity-20 animate-pulse delay-2000"></div>

      {/* Keyframes: move by -50% (since track contains two identical rows) */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="marquee"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
};

const LogoRow = ({ logos, ariaHidden = false }: { logos: string[]; ariaHidden?: boolean }) => (
  <div className="flex items-center gap-16 w-max" aria-hidden={ariaHidden}>
    {logos.map((src, i) => (
      <LogoItem key={(ariaHidden ? "dup-" : "") + i} src={src} alt={`Brand ${i + 1}`} />
    ))}
  </div>
);

const LogoItem = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex-shrink-0 group">
    <div className="p-4 rounded-xl bg-white shadow-lg border border-white/20 group-hover:shadow-xl group-hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
      <img
        src={src}
        alt={alt}
        className="h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  </div>
);

export default IntroSection;
