import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun, Award, Users, TrendingUp, Star, Target, Zap } from "lucide-react";
import { useState } from "react";

const AboutSection = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <section className="py-20 px-0 transition-all duration-500 relative overflow-hidden min-h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://res.cloudinary.com/dufcnrcfe/image/upload/v1752430999/a14ff2cd-e917-4480-9942-acd5b5e88d41.mp4_5_fg4olu.png"
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

      {/* Content positioned from center to right side */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side empty for image space */}
            <div></div>
            
            {/* Right side content */}
            <div className="max-w-xl space-y-8">
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                isDark 
                  ? 'bg-slate-800/60 text-slate-300 border border-slate-600/40' 
                  : 'bg-white/80 text-slate-700 border border-slate-300/40'
              } backdrop-blur-sm`}>
                <Star className="w-4 h-4 mr-2" />
                Esperto di Vendite e Comunicazione
              </div>

              <div>
                <h2 className={`text-4xl lg:text-5xl font-bold mb-4 leading-tight ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  CHI È
                </h2>
                <h1 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent mb-6">
                  MARCO FERRARIO
                </h1>
              </div>

              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Direttore vendite esperto, attivo dal 1996, con una carriera dedicata allo sviluppo di strategie di vendita innovative e scalabili. Ho oltre 25 anni di esperienza in aziende multinazionali nei settori dell'informazione e della finanza, specializzato nel prospecting avanzato e nello sviluppo commerciale.
              </p>

              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className={`text-center p-4 rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-105 ${
                  isDark ? 'bg-slate-800/60 border border-slate-600/40' : 'bg-white/80 border border-slate-300/40 shadow-lg'
                }`}>
                  <div className={`text-2xl font-bold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    500+
                  </div>
                  <div className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Aziende Clienti
                  </div>
                </div>
                <div className={`text-center p-4 rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-105 ${
                  isDark ? 'bg-slate-800/60 border border-slate-600/40' : 'bg-white/80 border border-slate-300/40 shadow-lg'
                }`}>
                  <div className={`text-2xl font-bold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    15+
                  </div>
                  <div className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Anni Esperienza
                  </div>
                </div>
                <div className={`text-center p-4 rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-105 ${
                  isDark ? 'bg-slate-800/60 border border-slate-600/40' : 'bg-white/80 border border-slate-300/40 shadow-lg'
                }`}>
                  <div className={`text-2xl font-bold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    95%
                  </div>
                  <div className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Tasso di Successo
                  </div>
                </div>
              </div>

              {/* Enhanced Key Points */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group">
                  <div className={`p-2 rounded-full ${isDark ? 'bg-slate-700/60' : 'bg-slate-100'} group-hover:scale-110 transition-transform`}>
                    <Target className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  </div>
                  <span className={`text-base ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Strategia di vendita personalizzata per ogni business
                  </span>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className={`p-2 rounded-full ${isDark ? 'bg-slate-700/60' : 'bg-slate-100'} group-hover:scale-110 transition-transform`}>
                    <Zap className={`w-4 h-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
                  </div>
                  <span className={`text-base ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Comunicazione persuasiva e tecniche di closing avanzate
                  </span>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className={`p-2 rounded-full ${isDark ? 'bg-slate-700/60' : 'bg-slate-100'} group-hover:scale-110 transition-transform`}>
                    <TrendingUp className={`w-4 h-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
                  </div>
                  <span className={`text-base ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Crescita sostenibile e risultati misurabili
                  </span>
                </div>
              </div>

              <Button className={`group font-semibold px-8 py-3 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                isDark 
                  ? 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600' 
                  : 'bg-slate-900 hover:bg-slate-800 text-white'
              }`}>
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