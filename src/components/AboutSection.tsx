import { Button } from "@/components/ui/button";
import { Award, Users, TrendingUp, Star, Target, Zap } from "lucide-react";
import marcoBg from "@/assets/marco-bg.png";

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden px-0 pt-8 md:pt-16 pb-0 md:pb-16 min-h-[100dvh] md:min-h-[80vh]">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={marcoBg} alt="Ufficio" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* ---------- MOBILE (stacked) ---------- */}
      <div className="relative z-10 container mx-auto px-4 md:hidden min-h-[100dvh] flex flex-col">
        {/* Content: 60dvh */}
        <div className="flex-[0_0_60dvh] flex items-center justify-center py-6">
          <div className="w-full max-w-sm rounded-2xl bg-white/90 backdrop-blur-md border border-white/50 shadow-[0_12px_40px_rgba(0,0,0,.25)] p-5">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100/90 text-slate-700 border border-slate-200/70">
              <Star className="w-3.5 h-3.5 mr-2 text-primary" />
              Esperto di Vendite e Comunicazione
            </div>

            <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900">CHI È</h2>
            <h1 className="text-3xl font-black bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent leading-tight">
              MARCO FERRARIO
            </h1>

            <div className="mt-3 space-y-2 text-slate-700">
              <p className="text-sm leading-relaxed">
                Direttore vendite esperto, attivo dal <span className="font-semibold text-primary">1996</span>,
                con una carriera dedicata allo sviluppo di strategie di vendita innovative.
              </p>
              <p className="text-sm leading-relaxed">
                Ho oltre <span className="font-semibold text-primary">25 anni di esperienza</span> in aziende multinazionali
                specializzato nel prospecting avanzato.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-4 grid grid-cols-3 gap-2.5">
              <div className="text-center p-3 rounded-xl bg-white border border-slate-200/60 shadow-sm">
                <div className="w-8 h-8 mx-auto mb-1.5 bg-primary/10 rounded-lg grid place-items-center">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <div className="text-lg font-bold text-slate-900">500+</div>
                <div className="text-xs text-slate-600">Aziende Clienti</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-white border border-slate-200/60 shadow-sm">
                <div className="w-8 h-8 mx-auto mb-1.5 bg-primary/10 rounded-lg grid place-items-center">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <div className="text-lg font-bold text-slate-900">25+</div>
                <div className="text-xs text-slate-600">Anni Esperienza</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-white border border-slate-200/60 shadow-sm">
                <div className="w-8 h-8 mx-auto mb-1.5 bg-primary/10 rounded-lg grid place-items-center">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <div className="text-lg font-bold text-slate-900">95%</div>
                <div className="text-xs text-slate-600">Tasso di Successo</div>
              </div>
            </div>

            {/* Bullets */}
            <div className="mt-4 space-y-2.5">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 bg-primary/10 rounded-lg grid place-items-center">
                  <Target className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs text-slate-700">Strategia di vendita personalizzata</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 bg-primary/10 rounded-lg grid place-items-center">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs text-slate-700">Comunicazione persuasiva e closing avanzate</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 bg-primary/10 rounded-lg grid place-items-center">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs text-slate-700">Crescita sostenibile e risultati misurabili</span>
              </div>
            </div>

            <Button
              asChild
              className="mt-4 w-full group font-semibold px-6 py-2.5 text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary-glow text-white"
            >
              <a href="/marco-ferrario">
                <Users className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Scopri il Metodo Marco
              </a>
            </Button>
          </div>
        </div>

        {/* Image: 40dvh, pinned to bottom (no gap) */}
        <div className="flex-[0_0_40dvh] relative pb-[env(safe-area-inset-bottom)]">
          <img
            src="/lovable-uploads/a9f6f226-da2a-4d9d-b830-26333af3d8d9.png"
            alt="Marco Ferrario"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
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
      {/* Marco image */}
      <img
        src="/lovable-uploads/a9f6f226-da2a-4d9d-b830-26333af3d8d9.png"
        alt="Marco Ferrario"
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
      <div className="hidden md:block relative z-[8] container mx-auto px-6">
        <div className="md:ml-[46%] lg:ml-[43%] xl:ml-[41%] max-w-2xl">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-slate-100/85 text-slate-700 border border-slate-200/70">
            <Star className="w-4 h-4 mr-2 text-primary" />
            Esperto di Vendite e Comunicazione
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight text-slate-900">CHI È</h2>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            MARCO FERRARIO
          </h1>

          <div className="mt-4 space-y-4 text-slate-700">
            <p className="text-lg leading-relaxed">
              Direttore vendite esperto, attivo dal <span className="font-semibold text-primary">1996</span>,
              con una carriera dedicata allo sviluppo di strategie di vendita innovative e scalabili.
            </p>
            <p className="text-lg leading-relaxed">
              Ho oltre <span className="font-semibold text-primary">25 anni di esperienza</span> in aziende multinazionali
              nei settori dell'informazione e della finanza, specializzato nel prospecting avanzato e nello sviluppo commerciale.
            </p>
          </div>

          {/* Stats with reduced height and animations */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="text-center p-3 rounded-xl bg-white border border-slate-200/60 shadow-sm">
              <div className="w-8 h-8 mx-auto mb-2 bg-primary/10 rounded-lg grid place-items-center">
                <Users className="w-4 h-4 text-primary" />
              </div>
              <div className="text-xl font-bold text-slate-900">500+</div>
              <div className="text-xs text-slate-600">Aziende Clienti</div>
            </div>
            <div className="text-center p-3 rounded-xl bg-white border border-slate-200/60 shadow-sm">
              <div className="w-8 h-8 mx-auto mb-2 bg-primary/10 rounded-lg grid place-items-center">
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
              <div className="text-xl font-bold text-slate-900">25+</div>
              <div className="text-xs text-slate-600">Anni Esperienza</div>
            </div>
            <div className="text-center p-3 rounded-xl bg-white border border-slate-200/60 shadow-sm">
              <div className="w-8 h-8 mx-auto mb-2 bg-primary/10 rounded-lg grid place-items-center">
                <Award className="w-4 h-4 text-primary" />
              </div>
              <div className="text-xl font-bold text-slate-900">95%</div>
              <div className="text-xs text-slate-600">Tasso di Successo</div>
            </div>
          </div>

          {/* Bullets with reduced spacing and animations */}
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-primary/10 rounded-lg grid place-items-center">
                <Target className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm text-slate-700">
                Strategia di vendita personalizzata per ogni business
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-primary/10 rounded-lg grid place-items-center">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm text-slate-700">
                Comunicazione persuasiva e tecniche di closing avanzate
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-primary/10 rounded-lg grid place-items-center">
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm text-slate-700">
                Crescita sostenibile e risultati misurabili
              </span>
            </div>
          </div>

          <div>
            <Button
              asChild
              className="mt-4 group font-semibold px-6 py-2.5 text-sm rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-primary to-primary-glow text-white"
            >
              <a href="/marco-ferrario">
                <Users className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Scopri il Metodo Marco
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
