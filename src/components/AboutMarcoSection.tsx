
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun, Award, Users, TrendingUp } from "lucide-react";
import { useState } from "react";

const AboutMarcoSection = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <section className={`py-20 px-0 transition-all duration-500 ${
      isDark ? 'bg-black' : 'bg-gradient-to-br from-slate-50 to-white'
    }`}>
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-50">
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
        <div className={`rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ${
          isDark 
            ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50' 
            : 'bg-gradient-to-br from-white via-slate-50 to-white border border-slate-200/50'
        }`}>
          <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
            {/* Image Side */}
            <div className={`relative overflow-hidden ${
              isDark ? 'bg-gradient-to-br from-slate-800 to-slate-900' : 'bg-gradient-to-br from-slate-100 to-white'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              <img 
                src="/lovable-uploads/38b36456-8e63-4824-a0c6-3af4d21ae30b.png"
                alt="Marco - Sales & Communication Expert"
                className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-700"
              />
              
              {/* Floating elements for premium feel */}
              <div className={`absolute top-8 left-8 w-16 h-16 rounded-full filter blur-2xl animate-pulse ${
                isDark ? 'bg-blue-400/20' : 'bg-blue-500/30'
              }`} />
              <div className={`absolute bottom-8 right-8 w-24 h-24 rounded-full filter blur-3xl animate-pulse delay-1000 ${
                isDark ? 'bg-purple-400/15' : 'bg-purple-500/20'
              }`} />
            </div>

            {/* Content Side */}
            <div className={`p-12 lg:p-16 flex flex-col justify-center relative ${
              isDark ? 'bg-gradient-to-br from-slate-900 to-black' : 'bg-gradient-to-br from-white to-slate-50'
            }`}>
              <div className={`absolute top-0 left-0 w-32 h-32 rounded-full filter blur-3xl opacity-30 ${
                isDark ? 'bg-blue-500/20' : 'bg-blue-400/40'
              }`} />
              
              <div className="relative z-10">
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                  isDark 
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                    : 'bg-blue-50 text-blue-700 border border-blue-200'
                }`}>
                  <Award className="w-4 h-4 mr-2" />
                  L'Uomo Dietro il Sistema
                </div>

                <h2 className={`text-4xl lg:text-5xl font-bold mb-6 leading-tight ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  Incontra
                  <span className={`block ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    Marco
                  </span>
                </h2>

                <p className={`text-lg mb-8 leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Con oltre 15 anni di esperienza nel settore delle vendite e della comunicazione strategica, Marco ha trasformato centinaia di aziende, portandole verso il successo attraverso strategie innovative e risultati misurabili.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className={`text-center p-4 rounded-xl ${
                    isDark ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-slate-50 border border-slate-200/50'
                  }`}>
                    <div className={`text-2xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                      500+
                    </div>
                    <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Clienti Soddisfatti
                    </div>
                  </div>
                  <div className={`text-center p-4 rounded-xl ${
                    isDark ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-slate-50 border border-slate-200/50'
                  }`}>
                    <div className={`text-2xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                      15+
                    </div>
                    <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Anni Esperienza
                    </div>
                  </div>
                  <div className={`text-center p-4 rounded-xl ${
                    isDark ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-slate-50 border border-slate-200/50'
                  }`}>
                    <div className={`text-2xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                      95%
                    </div>
                    <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Tasso Successo
                    </div>
                  </div>
                </div>

                {/* Key Points */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`} />
                    <span className={`${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Esperto in strategie di vendita ad alto impatto
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`} />
                    <span className={`${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Specialista in comunicazione persuasiva
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`} />
                    <span className={`${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Mentor di imprenditori di successo
                    </span>
                  </div>
                </div>

                <Button className={`group font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                  isDark 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 border border-blue-500/20' 
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-blue-600/30'
                }`}>
                  <Users className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Scopri la Mia Storia
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMarcoSection;
