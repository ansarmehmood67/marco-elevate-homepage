import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref, visibleItems } = useStaggeredAnimation(4, 200);

  return (
    <section className="pt-20 pb-2 px-0 bg-black relative overflow-hidden">
      {/* Advanced background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-black to-gray-900/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--primary)/0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--sky-blue-500)/0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_90%,hsl(var(--premium-blue-400)/0.08),transparent_70%)]" />

      {/* Dynamic animated grid with particles */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30 animate-[fade-in_2s_ease-out]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.02)_1px,transparent_1px)] bg-[size:120px_120px] opacity-20 animate-pulse" />

      {/* Floating particle system */}
      <div className="absolute top-1/4 left-1/6 w-2 h-2 rounded-full bg-primary/60 animate-[scale-in_3s_ease-out_infinite]" />
      <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-sky-blue-400/70 animate-[fade-in_2s_ease-out_infinite_1s]" />
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 rounded-full bg-premium-blue-400/50 animate-[scale-in_4s_ease-out_infinite_2s]" />
      <div className="absolute top-1/2 right-1/6 w-1 h-1 rounded-full bg-primary/80 animate-[fade-in_3s_ease-out_infinite_0.5s]" />

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative min-h-[85vh] rounded-3xl overflow-hidden border border-gradient-to-r from-gray-800/40 via-primary/20 to-gray-800/40 shadow-2xl bg-black/40 backdrop-blur-md">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          >
            <source
              src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1755354320/outsourcing_salesforce_3_nvc1rd.mp4"
              type="video/mp4"
            />
          </video>

          {/* Overlays */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/75" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/40" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />

          {/* Premium floating elements */}
          <div className="absolute top-1/5 left-1/4 w-40 h-40 rounded-full filter blur-3xl bg-gradient-to-r from-primary/20 to-primary-glow/15 opacity-70" />
          <div className="absolute bottom-1/4 right-1/5 w-56 h-56 rounded-full filter blur-3xl bg-gradient-to-l from-primary-glow/18 to-primary/12 opacity-60" />
          <div className="absolute top-1/2 left-1/8 w-32 h-32 rounded-full filter blur-2xl bg-gradient-to-br from-primary/15 to-primary-glow/8 opacity-80" />
          <div className="absolute bottom-1/3 left-1/2 w-24 h-24 rounded-full filter blur-2xl bg-gradient-to-tr from-primary-glow/12 to-transparent opacity-70" />

          {/* Edge glow */}
          <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_120px_rgba(56,189,248,0.08),inset_0_0_200px_rgba(14,165,233,0.04)]" />
          <div className="absolute inset-0 rounded-3xl border border-gradient-to-r from-primary/30 via-sky-blue-500/20 to-primary/30 opacity-50" />

          {/* Content */}
          <div ref={ref} className="absolute inset-0 flex flex-col justify-center lg:justify-end p-4 sm:p-6 lg:p-12 pb-24 sm:pb-12 pt-32 sm:pt-36 lg:pt-24 z-20">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 sm:gap-6 lg:gap-8">
              {/* Left copy */}
              <div className="flex-1 max-w-2xl">
                {/* CLAIM badge removed */}

                {/* Heading with staggered animation */}
                <h1 className={`text-5xl lg:text-7xl font-black leading-[0.8] tracking-tight text-white mb-10 transition-all duration-700 ease-out ${
                  visibleItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <span className="inline-block transform transition-transform duration-500 hover:scale-105">
                    Il tuo reparto vendite e marketing,{" "}
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent inline-block transform transition-transform duration-500 hover:scale-110">
                    on-demand
                  </span>
                  <br />
                  <span className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white/95 font-normal tracking-wide">
                    cresci senza pensieri
                  </span>
                </h1>

                {/* Subcopy with animation */}
                <div className={`relative mb-6 lg:mb-10 transition-all duration-700 ease-out ${
                  visibleItems[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <p className="text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed backdrop-blur-xl bg-gradient-to-r from-black/30 via-black/20 to-black/30 rounded-2xl px-4 lg:px-6 py-3 lg:py-4 border border-white/10 shadow-2xl">
                    Un'unica squadra dedicata che prende in mano i tuoi
                    <span className="text-primary font-medium"> funnel B2B</span>, ottimizza performance e libera il tuo tempo.
                  </p>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary-glow/20 to-primary/20 rounded-2xl filter blur-lg opacity-50" />
                </div>

                {/* Bullets with animation */}
                <div className={`mb-6 lg:mb-8 transition-all duration-700 ease-out ${
                  visibleItems[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <p className="text-sm text-white/80 font-medium">
                    Audit 30 min • Nessun impegno • Risposta entro 2 ore • 500+ clienti
                  </p>
                </div>

                {/* CTA with scale-in animation */}
                <div className={`relative group mb-8 sm:mb-0 transition-all duration-700 ease-out ${
                  visibleItems[3] ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}>
                  <Button className="relative font-bold px-6 lg:px-10 py-3 lg:py-5 text-base lg:text-lg rounded-full shadow-2xl hover:shadow-[0_0_50px_hsl(var(--primary-glow)/0.4)] transition-all duration-700 transform hover:scale-110 bg-gradient-to-r from-white via-gray-50 to-white text-black hover:from-primary hover:via-primary-glow hover:to-primary hover:text-white border-2 border-white/60 hover:border-primary/70 backdrop-blur-xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-glow/0 to-primary/0 group-hover:from-primary/20 group-hover:via-primary-glow/20 group-hover:to-primary/20 transition-all duration-700" />
                    <span className="flex items-center space-x-2 lg:space-x-3 relative z-10">
                      <span className="relative">
                        Prenota consulenza
                        <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary-glow group-hover:w-full transition-all duration-500" />
                      </span>
                      <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-3 transition-all duration-500 group-hover:text-white" />
                    </span>
                    <div className="absolute inset-0 -top-2 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </Button>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-primary-glow/30 to-primary/30 filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/20 via-primary-glow/20 to-primary/20 filter blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 -z-20" />
                </div>
              </div>

              {/* Right video */}
              <div className="w-full sm:w-80 lg:w-80 lg:flex-shrink-0 group">
                <div className="relative">
                  {/* Video box */}
                  <div className="w-full h-48 rounded-2xl overflow-hidden shadow-2xl border border-white/40 backdrop-blur-xl bg-gradient-to-br from-black/30 via-black/20 to-black/30 group-hover:shadow-[0_0_40px_rgba(56,189,248,0.3)] transition-all duration-700 group-hover:scale-110">
                    <iframe
                      src="https://www.youtube.com/embed/ZocHP6N9Aig"
                      title="Demo Video"
                      className="w-full h-full rounded-2xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-sky-blue-500/5" />
                  </div>

                  {/* Floating borders (optional) */}
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary/40 via-primary-glow/40 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 filter blur-md" />
                  <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 via-primary-glow/20 to-primary/20 opacity-0 group-hover:opacity-70 transition-opacity duration-700 -z-20 filter blur-xl" />

                  {/* Label: mobile=below video, desktop=floating above */}
                  <div
                    className="
                      static sm:absolute
                      top-auto sm:-top-12
                      left-auto sm:left-1/2
                      translate-x-0 sm:-translate-x-1/2
                      mt-2 sm:mt-0
                      w-full sm:w-auto
                      flex sm:block justify-center
                      z-10
                    "
                  >
                    <span
                      className="
                        inline-flex items-center
                        px-4 sm:px-6 py-1.5 sm:py-2
                        bg-gradient-to-r from-primary/90 via-primary-glow/90 to-primary/90
                        text-white text-xs sm:text-sm font-bold
                        rounded-full backdrop-blur-xl border border-white/40 shadow-xl
                        whitespace-nowrap
                      "
                    >
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white mr-2 animate-pulse" />
                      Sales on Demand spiegata in 30'
                    </span>
                  </div>
                </div>
              </div>
              {/* /Right video */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;