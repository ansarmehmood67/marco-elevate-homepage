import { Button } from "@/components/ui/button";
import { Award, Users, TrendingUp, Star, Target, Zap } from "lucide-react";
import marcoBg from "@/assets/marco-bg.png";

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden px-0 py-12 md:py-16 min-h-[80vh]">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={marcoBg} alt="Ufficio" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* RIGHT frosted panel (like the reference) */}
      {/* Adjust left-[40%] to 38–45% to fine-tune width */}
      <div
        className="
          absolute top-6 bottom-6 right-6 left-[40%]
          rounded-3xl
          bg-white/70 backdrop-blur-md
          border border-white/40
          shadow-[0_12px_50px_rgba(0,0,0,0.18)]
          z-[6]
        "
      />

      {/* Marco cutout anchored bottom-left (desktop only) */}
      <img
        src="/lovable-uploads/a9f6f226-da2a-4d9d-b830-26333af3d8d9.png"
        alt="Marco Ferrario"
        className="
          hidden md:block
          absolute left-4 xl:left-8 bottom-0
          h-[78vh] max-h-[820px] object-contain
          drop-shadow-[0_20px_50px_rgba(0,0,0,0.35)]
          pointer-events-none select-none
          z-[7]
        "
      />

      {/* CONTENT (sits inside the frosted panel) */}
      <div className="relative z-[8] container mx-auto px-6">
        {/* Push content to the right panel; full width on mobile */}
        <div className="md:ml-[42%] max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-slate-100/85 text-slate-700 border border-slate-200/70">
            <Star className="w-4 h-4 mr-2 text-primary" />
            Esperto di Vendite e Comunicazione
          </div>

          {/* Headings */}
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight text-slate-900">
            CHI È
          </h2>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            MARCO FERRARIO
          </h1>

          {/* Body */}
          <div className="mt-4 space-y-4 text-slate-700">
            <p className="text-base sm:text-lg leading-relaxed">
              Direttore vendite esperto, attivo dal <span className="font-semibold text-primary">1996</span>,
              con una carriera dedicata allo sviluppo di strategie di vendita innovative e scalabili.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Ho oltre <span className="font-semibold text-primary">25 anni di esperienza</span> in aziende multinazionali
              nei settori dell'informazione e della finanza, specializzato nel prospecting avanzato e nello sviluppo commerciale.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
            <div className="text-center p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/60 shadow-sm">
              <div className="w-10 h-10 mx-auto mb-3 bg-primary/10 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-slate-900">500+</div>
              <div className="text-xs sm:text-sm text-slate-600">Aziende Clienti</div>
            </div>
            <div className="text-center p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/60 shadow-sm">
              <div className="w-10 h-10 mx-auto mb-3 bg-primary/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-slate-900">15+</div>
              <div className="text-xs sm:text-sm text-slate-600">Anni Esperienza</div>
            </div>
            <div className="text-center p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/60 shadow-sm">
              <div className="w-10 h-10 mx-auto mb-3 bg-primary/10 rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-slate-900">95%</div>
              <div className="text-xs sm:text-sm text-slate-600">Tasso di Successo</div>
            </div>
          </div>

          {/* Key points */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-primary/10 rounded-xl grid place-items-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm sm:text-base text-slate-700">
                Strategia di vendita personalizzata per ogni business
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-primary/10 rounded-xl grid place-items-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm sm:text-base text-slate-700">
                Comunicazione persuasiva e tecniche di closing avanzate
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-primary/10 rounded-xl grid place-items-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm sm:text-base text-slate-700">
                Crescita sostenibile e risultati misurabili
              </span>
            </div>
          </div>

          {/* CTA */}
          <Button
            asChild
            className="mt-6 group font-semibold px-8 py-3 text-base rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-primary to-primary-glow text-white"
          >
            <a href="/marco-ferrario">
              <Users className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
              Scopri il Metodo Marco
            </a>
          </Button>
        </div>
      </div>

      {/* MOBILE fallback: show only content, hide Marco & panel */}
      <style>{`
        @media (max-width: 767px) {
          /* Make the frosted panel cover content area naturally on mobile */
          .md\\:ml-\\[42%\\] { margin-left: 0 !important; }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
