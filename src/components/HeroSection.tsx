
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <section className={`pt-20 pb-2 px-0 transition-all duration-500 ${
      isDark ? 'bg-black' : 'bg-gradient-to-br from-slate-50 via-white to-slate-100'
    }`}>
      {/* Theme Toggle */}
      <div className="absolute top-24 right-6 z-50">
        <div className={`flex items-center space-x-3 backdrop-blur-sm rounded-full px-4 py-2 border transition-all duration-500 ${
          isDark 
            ? 'bg-white/10 border-white/20' 
            : 'bg-black/10 border-black/20'
        }`}>
          <Sun className={`w-4 h-4 transition-colors ${isDark ? 'text-slate-400' : 'text-amber-500'}`} />
          <Switch 
            checked={isDark} 
            onCheckedChange={setIsDark}
            className={isDark ? "data-[state=checked]:bg-slate-700 data-[state=unchecked]:bg-amber-100" : "data-[state=checked]:bg-slate-600 data-[state=unchecked]:bg-amber-200"}
          />
          <Moon className={`w-4 h-4 transition-colors ${isDark ? 'text-blue-400' : 'text-slate-400'}`} />
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div 
          className={`relative min-h-[85vh] rounded-3xl overflow-hidden transition-all duration-500 ${
            isDark 
              ? 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900' 
              : 'bg-gradient-to-br from-blue-50 via-white to-blue-100'
          }`}
          style={{ 
            backgroundImage: `url('/lovable-uploads/25280549-6553-430d-9dff-5462347e4238.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark/Light overlay for better text readability */}
          <div className={`absolute inset-0 transition-all duration-500 ${
            isDark 
              ? 'bg-gradient-to-br from-black/40 via-transparent to-black/60' 
              : 'bg-gradient-to-br from-white/70 via-white/40 to-white/60'
          }`} />
          
          {/* Bottom gradient overlay to avoid sharp cut */}
          <div className={`absolute bottom-0 left-0 right-0 h-32 transition-all duration-500 ${
            isDark 
              ? 'bg-gradient-to-t from-black/80 via-black/40 to-transparent' 
              : 'bg-gradient-to-t from-white/90 via-white/50 to-transparent'
          }`} />
          
          {/* Subtle animated elements */}
          <div className={`absolute top-1/4 left-1/4 w-32 h-32 rounded-full filter blur-3xl animate-pulse transition-colors duration-500 ${
            isDark ? 'bg-white/5' : 'bg-blue-200/30'
          }`} />
          <div className={`absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full filter blur-3xl animate-pulse delay-1000 transition-colors duration-500 ${
            isDark ? 'bg-blue-400/10' : 'bg-slate-200/40'
          }`} />
          
          {/* Content positioned at bottom left */}
          <div className="absolute bottom-12 left-12 max-w-2xl">
            <h1 className={`text-5xl lg:text-7xl font-bold leading-tight mb-8 transition-colors duration-500 ${
              isDark ? 'text-white drop-shadow-lg' : 'text-slate-900 drop-shadow-sm'
            }`}>
              Porta vendite e<br />
              comunicazione<br />
              al livello successivo
            </h1>
            
            <Button className={`font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
              isDark 
                ? 'bg-white text-black hover:bg-gray-100 hover:shadow-white/20' 
                : 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-slate-900/30'
            }`}>
              inizia adesso
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
