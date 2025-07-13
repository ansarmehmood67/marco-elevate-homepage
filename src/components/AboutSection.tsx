import { Button } from "@/components/ui/button";
import { Award, Users, TrendingUp, Star, Target, Zap } from "lucide-react";

const AboutSection = () => {

  return (
    <section className="py-20 px-0 transition-all duration-500 relative overflow-hidden min-h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://res.cloudinary.com/dufcnrcfe/image/upload/v1752430999/a14ff2cd-e917-4480-9942-acd5b5e88d41.mp4_5_fg4olu.png"
          alt="Marco Ferrario - Sales Expert"
          className="w-full h-full object-cover object-left"
        />
        {/* Creative light overlay with brand colors from center to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 via-40% to-white/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 via-45% to-primary/15" />
        {/* Additional subtle brand color wash on right side */}
        <div className="absolute top-0 right-0 w-3/5 h-full bg-gradient-to-l from-primary-glow/20 via-primary/8 to-transparent" />
        {/* Soft edge blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent via-35% to-slate-50/40" />
      </div>

      {/* Content positioned from center to right side */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side empty for image space */}
            <div></div>
            
            {/* Right side content with premium styling */}
            <div className="max-w-xl space-y-10">
              {/* Premium badge */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 blur-xl rounded-full"></div>
                <div className="relative inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-white/90 to-white/70 text-slate-800 border border-white/40 backdrop-blur-lg shadow-xl">
                  <Star className="w-4 h-4 mr-2 text-primary" />
                  Esperto di Vendite e Comunicazione
                </div>
              </div>

              {/* Premium heading section */}
              <div className="space-y-4">
                <div className="relative">
                  <h2 className="text-5xl lg:text-6xl font-black leading-none text-slate-900 tracking-tight">
                    CHI È
                  </h2>
                  <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-primary to-primary-glow rounded-full"></div>
                </div>
                <h1 className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent leading-none tracking-tight drop-shadow-sm">
                  MARCO FERRARIO
                </h1>
              </div>

              {/* Premium description cards */}
              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-glow/10 blur-xl rounded-2xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-xl border border-white/50 shadow-2xl">
                    <p className="text-lg leading-relaxed text-slate-700 font-medium">
                      Direttore vendite esperto, attivo dal <span className="font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">1996</span>, con una carriera dedicata allo sviluppo di strategie di vendita innovative e scalabili.
                    </p>
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-glow/10 to-primary/10 blur-xl rounded-2xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-xl border border-white/50 shadow-2xl">
                    <p className="text-lg leading-relaxed text-slate-700 font-medium">
                      Ho oltre <span className="font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">25 anni di esperienza</span> in aziende multinazionali nei settori dell'informazione e della finanza, specializzato nel prospecting avanzato e nello sviluppo commerciale.
                    </p>
                  </div>
                </div>
              </div>

              {/* Premium Stats Grid */}
              <div className="grid grid-cols-3 gap-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-glow/20 blur-lg rounded-3xl group-hover:blur-xl group-hover:scale-105 transition-all duration-500"></div>
                  <div className="relative text-center p-8 rounded-3xl bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl flex items-center justify-center shadow-lg">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-3xl font-black mb-2 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                      500+
                    </div>
                    <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                      Aziende Clienti
                    </div>
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-glow/20 to-primary/20 blur-lg rounded-3xl group-hover:blur-xl group-hover:scale-105 transition-all duration-500"></div>
                  <div className="relative text-center p-8 rounded-3xl bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl flex items-center justify-center shadow-lg">
                      <TrendingUp className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-3xl font-black mb-2 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                      15+
                    </div>
                    <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                      Anni Esperienza
                    </div>
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-glow/20 blur-lg rounded-3xl group-hover:blur-xl group-hover:scale-105 transition-all duration-500"></div>
                  <div className="relative text-center p-8 rounded-3xl bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl flex items-center justify-center shadow-lg">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-3xl font-black mb-2 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                      95%
                    </div>
                    <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                      Tasso di Successo
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium Key Points */}
              <div className="space-y-6">
                <div className="flex items-center space-x-6 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary-glow/30 blur-lg rounded-2xl group-hover:blur-xl group-hover:scale-110 transition-all duration-300"></div>
                    <div className="relative w-14 h-14 bg-gradient-to-br from-white/90 to-white/70 rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-lg border border-white/40">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <span className="text-lg font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                    Strategia di vendita personalizzata per ogni business
                  </span>
                </div>
                
                <div className="flex items-center space-x-6 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-glow/30 to-primary/30 blur-lg rounded-2xl group-hover:blur-xl group-hover:scale-110 transition-all duration-300"></div>
                    <div className="relative w-14 h-14 bg-gradient-to-br from-white/90 to-white/70 rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-lg border border-white/40">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <span className="text-lg font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                    Comunicazione persuasiva e tecniche di closing avanzate
                  </span>
                </div>
                
                <div className="flex items-center space-x-6 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary-glow/30 blur-lg rounded-2xl group-hover:blur-xl group-hover:scale-110 transition-all duration-300"></div>
                    <div className="relative w-14 h-14 bg-gradient-to-br from-white/90 to-white/70 rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-lg border border-white/40">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <span className="text-lg font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                    Crescita sostenibile e risultati misurabili
                  </span>
                </div>
              </div>

              {/* Premium CTA Button */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-primary-glow/40 blur-2xl rounded-2xl"></div>
                <Button className="relative group font-bold px-10 py-4 text-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-r from-primary via-primary-glow to-primary text-white hover:from-primary/90 hover:via-primary-glow/90 hover:to-primary/90 border border-white/20">
                  <Users className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Scopri il Metodo Marco
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;