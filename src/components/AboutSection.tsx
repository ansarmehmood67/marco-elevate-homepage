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
            
            {/* Right side content with enhanced readability */}
            <div className="max-w-xl space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-slate-800/90 text-white border border-slate-700/50 backdrop-blur-md shadow-lg">
                <Star className="w-4 h-4 mr-2" />
                Esperto di Vendite e Comunicazione
              </div>

              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight text-slate-900 drop-shadow-lg">
                  CHI È
                </h2>
                <h1 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-6 drop-shadow-sm">
                  MARCO FERRARIO
                </h1>
              </div>

              <div className="p-6 rounded-xl backdrop-blur-md border bg-white/85 border-slate-300/40 text-slate-800 shadow-lg">
                <p className="text-lg leading-relaxed">
                  Direttore vendite esperto, attivo dal 1996, con una carriera dedicata allo sviluppo di strategie di vendita innovative e scalabili. Ho oltre 25 anni di esperienza in aziende multinazionali nei settori dell'informazione e della finanza, specializzato nel prospecting avanzato e nello sviluppo commerciale.
                </p>
              </div>

              {/* Enhanced Stats Grid with better visibility */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-105 bg-slate-800/90 border border-slate-700/50 shadow-lg">
                  <div className="text-2xl font-bold mb-2 text-primary-glow">
                    500+
                  </div>
                  <div className="text-xs font-medium text-slate-300">
                    Aziende Clienti
                  </div>
                </div>
                <div className="text-center p-4 rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-105 bg-slate-800/90 border border-slate-700/50 shadow-lg">
                  <div className="text-2xl font-bold mb-2 text-primary-glow">
                    15+
                  </div>
                  <div className="text-xs font-medium text-slate-300">
                    Anni Esperienza
                  </div>
                </div>
                <div className="text-center p-4 rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-105 bg-slate-800/90 border border-slate-700/50 shadow-lg">
                  <div className="text-2xl font-bold mb-2 text-primary-glow">
                    95%
                  </div>
                  <div className="text-xs font-medium text-slate-300">
                    Tasso di Successo
                  </div>
                </div>
              </div>

              {/* Enhanced Key Points with better visibility */}
              <div className="p-6 rounded-xl backdrop-blur-md border space-y-4 bg-white/85 border-slate-300/40 shadow-lg">
                <div className="flex items-center space-x-4 group">
                  <div className="p-2 rounded-full bg-primary/10 group-hover:scale-110 transition-transform">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-base font-medium text-slate-800">
                    Strategia di vendita personalizzata per ogni business
                  </span>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="p-2 rounded-full bg-primary/10 group-hover:scale-110 transition-transform">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-base font-medium text-slate-800">
                    Comunicazione persuasiva e tecniche di closing avanzate
                  </span>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="p-2 rounded-full bg-primary/10 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-base font-medium text-slate-800">
                    Crescita sostenibile e risultati misurabili
                  </span>
                </div>
              </div>

              <Button className="group font-semibold px-8 py-3 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-primary to-primary-glow text-white hover:from-primary/90 hover:to-primary-glow/90">
                <Users className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                Scopri il Metodo Marco
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;