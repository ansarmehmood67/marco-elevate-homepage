
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun, Award, Users, TrendingUp, Star, Target, Zap } from "lucide-react";
import { useState } from "react";

const AboutMarcoSection = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <section className={`py-20 px-0 transition-all duration-500 relative overflow-hidden ${
      isDark ? 'bg-black' : 'bg-gradient-to-br from-slate-50 to-white'
    }`}>
      {/* Background decorative elements */}
      <div className={`absolute top-0 left-0 w-96 h-96 rounded-full filter blur-3xl opacity-20 ${
        isDark ? 'bg-blue-500/30' : 'bg-blue-400/20'
      }`} />
      <div className={`absolute bottom-0 right-0 w-80 h-80 rounded-full filter blur-3xl opacity-15 ${
        isDark ? 'bg-purple-500/30' : 'bg-purple-400/20'
      }`} />

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

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Image Side - More compact */}
          <div className={`lg:col-span-2 relative overflow-hidden rounded-2xl shadow-2xl group ${
            isDark ? 'bg-gradient-to-br from-slate-800 to-slate-900' : 'bg-gradient-to-br from-slate-100 to-white'
          }`}>
            <div className="aspect-[4/5] relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10`} />
              <img 
                src="/lovable-uploads/38b36456-8e63-4824-a0c6-3af4d21ae30b.png"
                alt="Marco - Sales & Communication Expert"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Decorative overlay */}
              <div className={`absolute top-6 left-6 w-12 h-12 rounded-full filter blur-xl animate-pulse ${
                isDark ? 'bg-blue-400/30' : 'bg-blue-500/40'
              }`} />
              <div className={`absolute bottom-6 right-6 w-16 h-16 rounded-full filter blur-2xl animate-pulse delay-1000 ${
                isDark ? 'bg-purple-400/20' : 'bg-purple-500/30'
              }`} />
            </div>
          </div>

          {/* Content Side */}
          <div className={`lg:col-span-3 relative z-10`}>
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${
              isDark 
                ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30' 
                : 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200'
            }`}>
              <Star className="w-4 h-4 mr-2" />
              Esperto di Vendite e Comunicazione
            </div>

            <h2 className={`text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Incontra
              <span className={`block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent`}>
                Marco
              </span>
            </h2>

            <p className={`text-xl mb-8 leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Trasformatore di business e mentor strategico con oltre 15 anni di esperienza nel settore delle vendite ad alto impatto. Marco ha guidato centinaia di aziende verso risultati straordinari attraverso metodologie innovative e comprovate.
            </p>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className={`text-center p-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                isDark ? 'bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50' : 'bg-white/70 border border-slate-200/50 hover:bg-white/90 shadow-lg'
              }`}>
                <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  500+
                </div>
                <div className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Clienti Trasformati
                </div>
              </div>
              <div className={`text-center p-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                isDark ? 'bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50' : 'bg-white/70 border border-slate-200/50 hover:bg-white/90 shadow-lg'
              }`}>
                <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  15+
                </div>
                <div className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Anni di Esperienza
                </div>
              </div>
              <div className={`text-center p-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                isDark ? 'bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50' : 'bg-white/70 border border-slate-200/50 hover:bg-white/90 shadow-lg'
              }`}>
                <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  95%
                </div>
                <div className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Tasso di Successo
                </div>
              </div>
            </div>

            {/* Enhanced Key Points */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center space-x-4 group">
                <div className={`p-2 rounded-full ${isDark ? 'bg-blue-500/20' : 'bg-blue-100'} group-hover:scale-110 transition-transform`}>
                  <Target className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                </div>
                <span className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Strategia di vendita personalizzata per ogni business
                </span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className={`p-2 rounded-full ${isDark ? 'bg-purple-500/20' : 'bg-purple-100'} group-hover:scale-110 transition-transform`}>
                  <Zap className={`w-4 h-4 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                </div>
                <span className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Comunicazione persuasiva e tecniche di closing avanzate
                </span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className={`p-2 rounded-full ${isDark ? 'bg-green-500/20' : 'bg-green-100'} group-hover:scale-110 transition-transform`}>
                  <TrendingUp className={`w-4 h-4 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                </div>
                <span className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Crescita sostenibile e risultati misurabili
                </span>
              </div>
            </div>

            <Button className={`group font-semibold px-10 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
              isDark 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 border border-blue-500/20' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-blue-600/30'
            }`}>
              <Users className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
              Scopri il Metodo Marco
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMarcoSection;
