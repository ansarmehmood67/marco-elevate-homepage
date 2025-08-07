import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun, Award, Users, TrendingUp, Star, Target, Zap } from "lucide-react";
import { useState } from "react";
import marcoPortrait from "@/assets/marco-portrait.jpg";

const AboutMarcoSection = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <section className="py-16 px-0 transition-all duration-500 relative overflow-hidden min-h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={marcoPortrait}
          alt="Marco Ferrario - Sales Expert"
          className="w-full h-full object-cover object-left"
        />
        {/* Gradient overlay from center to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/70 to-black/90" />
        {/* Additional overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
      </div>

      {/* Theme Toggle */}
      <div className="absolute top-8 right-8 z-50">
        <div className={`flex items-center space-x-3 backdrop-blur-sm rounded-full px-4 py-2 border transition-all duration-500 ${
          isDark 
            ? 'bg-white/10 border-white/20' 
            : 'bg-white/90 border-gray-200 shadow-lg'
        }`}>
          <Sun className={`w-4 h-4 transition-colors ${isDark ? 'text-slate-400' : 'text-amber-500'}`} />
          <Switch 
            checked={isDark} 
            onCheckedChange={setIsDark}
            className={isDark ? "data-[state=checked]:bg-slate-700 data-[state=unchecked]:bg-amber-100" : "data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-amber-200"}
          />
          <Moon className={`w-4 h-4 transition-colors ${isDark ? 'text-blue-400' : 'text-slate-500'}`} />
        </div>
      </div>

      {/* Content positioned on right side */}
      <div className="relative z-10 h-full flex items-center justify-end pr-6 lg:pr-12">
        <div className="max-w-2xl w-full text-right">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-primary/20 text-primary border border-primary/30">
              <Star className="w-4 h-4 mr-2" />
              Esperto di Vendite e Comunicazione
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Incontra
              <span className="block text-primary">
                Marco
              </span>
            </h2>

            <p className="text-xl mb-8 leading-relaxed text-white/80">
              Trasformatore di business e mentor strategico con oltre 15 anni di esperienza nel settore delle vendite ad alto impatto. Marco ha guidato centinaia di aziende verso risultati straordinari attraverso metodologie innovative e comprovate.
            </p>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="glass-card text-center p-6 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold mb-2 text-primary">
                  500+
                </div>
                <div className="text-sm font-medium text-white/70">
                  Clienti Trasformati
                </div>
              </div>
              <div className="glass-card text-center p-6 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold mb-2 text-primary">
                  15+
                </div>
                <div className="text-sm font-medium text-white/70">
                  Anni di Esperienza
                </div>
              </div>
              <div className="glass-card text-center p-6 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold mb-2 text-primary">
                  95%
                </div>
                <div className="text-sm font-medium text-white/70">
                  Tasso di Successo
                </div>
              </div>
            </div>

            {/* Enhanced Key Points */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center space-x-4 group">
                <div className="p-2 rounded-full bg-primary/20 group-hover:scale-110 transition-transform">
                  <Target className="w-4 h-4 text-primary" />
                </div>
                <span className="text-lg text-white/80">
                  Strategia di vendita personalizzata per ogni business
                </span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="p-2 rounded-full bg-primary/20 group-hover:scale-110 transition-transform">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <span className="text-lg text-white/80">
                  Comunicazione persuasiva e tecniche di closing avanzate
                </span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="p-2 rounded-full bg-primary/20 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <span className="text-lg text-white/80">
                  Crescita sostenibile e risultati misurabili
                </span>
              </div>
            </div>

            <Button className="group font-semibold px-10 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-primary to-primary/80 text-white hover:from-primary/80 hover:to-primary/60">
              <Users className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
              Scopri il Metodo Marco
            </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutMarcoSection;
