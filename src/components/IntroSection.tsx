
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const IntroSection = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <section className={`py-24 transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
        : 'bg-gradient-to-br from-slate-50 via-white to-slate-100'
    }`}>
      {/* Theme Toggle */}
      <div className="container mx-auto px-6 mb-8">
        <div className="flex justify-end">
          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <Sun className={`w-4 h-4 transition-colors ${isDark ? 'text-slate-400' : 'text-amber-500'}`} />
            <Switch 
              checked={isDark} 
              onCheckedChange={setIsDark}
              className="data-[state=checked]:bg-slate-700 data-[state=unchecked]:bg-amber-100"
            />
            <Moon className={`w-4 h-4 transition-colors ${isDark ? 'text-blue-400' : 'text-slate-400'}`} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Premium backdrop blur card */}
          <div className={`backdrop-blur-xl rounded-3xl p-12 border transition-all duration-500 ${
            isDark 
              ? 'bg-white/5 border-white/10 shadow-2xl shadow-blue-500/10' 
              : 'bg-white/60 border-white/20 shadow-2xl shadow-slate-500/10'
          }`}>
            
            {/* Main value proposition */}
            <p className={`text-3xl lg:text-4xl leading-relaxed font-light mb-8 transition-colors duration-500 ${
              isDark ? 'text-white' : 'text-slate-800'
            }`}>
              Affidati a un team esperto in{" "}
              <span className={`font-semibold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent`}>
                outsourcing vendite
              </span>
              ,{" "}
              <span className={`font-semibold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent`}>
                marketing
              </span>
              {" "}e{" "}
              <span className={`font-semibold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent`}>
                intelligenza artificiale
              </span>
              .
            </p>

            {/* Supporting text */}
            <p className={`text-xl lg:text-2xl leading-relaxed mb-10 transition-colors duration-500 ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Che tu voglia esternalizzare il commerciale, ricevere una consulenza mirata o scalare la tua comunicazione —{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                sei nel posto giusto
              </span>
              .
            </p>
            
            {/* Premium CTA Button */}
            <Button 
              variant="premium" 
              size="xl" 
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-500 hover:via-blue-400 hover:to-blue-500 text-white font-semibold px-12 py-4 text-lg rounded-2xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">Scopri di più</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-400/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
