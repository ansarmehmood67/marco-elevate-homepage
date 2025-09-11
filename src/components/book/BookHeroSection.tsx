import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import marcoBg from "@/assets/marco-bg.png";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const BookHeroSection = () => {
  const { ref: mobRef, visibleItems: mobVisible } = useStaggeredAnimation(2, 200);
  const { ref: deskRef, visibleItems: deskVisible } = useStaggeredAnimation(2, 200);

  return (
    <section className="relative overflow-hidden px-0 pt-8 md:pt-16 pb-0 md:pb-16 min-h-[100dvh] md:min-h-[80vh]">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={marcoBg} alt="Ufficio" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* ---------- MOBILE (stacked) ---------- */}
      <div
        ref={mobRef}
        className="relative z-10 container mx-auto px-4 md:hidden min-h-[100dvh] flex flex-col"
      >
        <h2 className="text-4xl font-black leading-[0.8] tracking-tight text-white text-center [&>span:first-child]:!text-white">
          <span className="inline-block transform transition-transform duration-500 hover:scale-105 text-primary">
            sales as a service{" "}
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent inline-block transform transition-transform duration-500 hover:scale-110">
            Organizza, ottimizza, conquista: la tua forza vendite in outsourcing
          </span>
        </h2>

        {/* Content card */}
        <div className="flex-1 flex items-start justify-center mt-8">
          <div
            className={`w-full max-w-sm rounded-2xl bg-white/90 backdrop-blur-md border border-white/50 shadow-[0_12px_40px_rgba(0,0,0,.25)] p-5 transition-all duration-700 ease-out will-change-transform ${
              mobVisible[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100/90 text-slate-700 border border-slate-200/70">
              <BookOpen className="w-3.5 h-3.5 mr-2 text-primary" />
              Libro Gratuito
            </div>

            <div className="mt-3 space-y-2 text-slate-700">
              <p className="text-sm leading-relaxed">
                Il primo metodo per gestire la forza vendita come un{" "}
                <span className="font-semibold text-primary">servizio scalabile</span> e misurabile.
              </p>
              <p className="text-sm leading-relaxed">
                Scopri come <span className="font-semibold text-primary">organizzare, ottimizzare e conquistare</span> nuovi mercati senza sprechi.
              </p>
            </div>

            <Button
              asChild
              className="mt-4 w-full group font-semibold px-6 py-2.5 text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary-glow text-white"
            >
              <a href="#contact">
                <BookOpen className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Scarica il libro
              </a>
            </Button>
          </div>
        </div>

        {/* Book Image */}
        <div className="flex-[0_0_40dvh] relative pb-[env(safe-area-inset-bottom)]">
          <img
            src="/lovable-uploads/7a5a9505-672f-4d4e-b7c5-de56bbe2ebf5.png"
            alt="Sales as a Service Book"
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-700 ease-out will-change-transform ${
              mobVisible[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          />
        </div>
      </div>

      {/* ---------- DESKTOP (md+) ---------- */}
      {/* Frosted panel */}
      <div
        className="
          hidden md:block
          absolute top-8 bottom-8 right-8
          md:left-[46%] lg:left-[43%] xl:left-[41%]
          rounded-3xl bg-white/70 backdrop-blur-md
          border border-white/40
          shadow-[0_12px_50px_rgba(0,0,0,0.18)]
          z-[6]
        "
      />
      {/* Book image */}
      <img
        src="/lovable-uploads/7a5a9505-672f-4d4e-b7c5-de56bbe2ebf5.png"
        alt="Sales as a Service Book"
        className="
          hidden md:block
          absolute bottom-0 left-2 md:left-4 xl:left-8
          w-[45vw] lg:w-[42vw] xl:w-[40vw] 2xl:w-[38vw]
          max-w-[650px] xl:max-w-[700px]
          max-h-[88vh]
          object-contain
          drop-shadow-[0_24px_60px_rgba(0,0,0,0.35)]
          pointer-events-none select-none
          z-[7]
        "
      />
      {/* Content in panel */}
      <div
        ref={deskRef}
        className="hidden md:block relative z-[8] container mx-auto px-6 h-full"
      >
        <div
          className={`md:ml-[46%] lg:ml-[43%] xl:ml-[41%] max-w-2xl h-full flex flex-col justify-center py-8 transition-all duration-700 ease-out ${
            deskVisible[0] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0"
          }`}
        >
          <div className="flex flex-col space-y-3 overflow-y-auto max-h-full px-4">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100/85 text-slate-700 border border-slate-200/70 w-fit">
              <BookOpen className="w-4 h-4 mr-2 text-primary" />
              sales as a service
            </div>

            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-black leading-[0.85] tracking-tight text-white mb-4">
              <span className="inline-block transform transition-transform duration-500 hover:scale-105">
                Organizza, ottimizza,{" "}
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent inline-block transform transition-transform duration-500 hover:scale-110">
                conquista
              </span>
            </h1>

            <h2 className="text-xl lg:text-2xl font-bold text-white mb-4">
              la tua forza vendite in outsourcing
            </h2>

            <div className="space-y-2 text-slate-700">
              <p className="text-sm lg:text-base leading-relaxed">
                Il primo metodo per gestire la forza vendita come un{" "}
                <span className="font-semibold text-primary">servizio scalabile</span> e misurabile. 
                Scopri come organizzare, ottimizzare e conquistare nuovi mercati senza sprechi.
              </p>
              <p className="text-sm lg:text-base leading-relaxed">
                Una guida pratica per trasformare vendite e marketing in un processo{" "}
                <span className="font-semibold text-primary">end-to-end efficace</span> e redditizio.
              </p>
            </div>

            <Button
              asChild
              className="group font-semibold px-4 py-2 text-sm rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-primary to-primary-glow text-white w-fit"
            >
              <a href="#contact">
                <BookOpen className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Scarica il libro
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookHeroSection;