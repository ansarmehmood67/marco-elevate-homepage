
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <section className={`pt-20 pb-2 px-0 transition-all duration-500 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      {/* Theme Toggle */}
      <div className="absolute top-24 right-6 z-50">
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

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div 
          className={`relative min-h-[85vh] rounded-3xl overflow-hidden transition-all duration-500 ${
            isDark 
              ? 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900' 
              : 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 border border-blue-200/30 shadow-2xl'
          }`}
          style={isDark ? { 
            backgroundImage: `url('/lovable-uploads/25280549-6553-430d-9dff-5462347e4238.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          } : {
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
              : 'bg-gradient-to-br from-blue-900/70 via-blue-800/50 to-blue-900/80'
          }`} />
          
          {/* Bottom gradient overlay to avoid sharp cut */}
          <div className={`absolute bottom-0 left-0 right-0 h-32 transition-all duration-500 ${
            isDark 
              ? 'bg-gradient-to-t from-black/80 via-black/40 to-transparent' 
              : 'bg-gradient-to-t from-blue-900/90 via-blue-800/60 to-transparent'
          }`} />
          
          {/* Subtle animated elements */}
          <div className={`absolute top-1/4 left-1/4 w-32 h-32 rounded-full filter blur-3xl animate-pulse transition-colors duration-500 ${
            isDark ? 'bg-white/5' : 'bg-white/10'
          }`} />
          <div className={`absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full filter blur-3xl animate-pulse delay-1000 transition-colors duration-500 ${
            isDark ? 'bg-blue-400/10' : 'bg-white/15'
          }`} />
          
          {/* Content positioned at bottom left */}
          <div className="absolute bottom-12 left-12 max-w-2xl">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-white drop-shadow-2xl">
              Porta vendite e<br />
              comunicazione<br />
              al livello successivo
            </h1>
            
            <Button className={`font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
              isDark 
                ? 'bg-white text-blue-900 hover:bg-gray-100 hover:shadow-white/30 border-2 border-white/20' 
                : 'bg-white text-blue-900 hover:bg-blue-50 hover:shadow-white/40 border-2 border-white/30 font-bold'
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
