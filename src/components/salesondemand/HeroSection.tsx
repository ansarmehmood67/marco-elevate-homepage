
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { CheckCircle, Moon, Sun, Star, ArrowRight, Play } from "lucide-react";

interface HeroSectionProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

const HeroSection = ({ isDark, setIsDark }: HeroSectionProps) => {
  return (
    <section className={`pt-24 pb-2 px-0 transition-all duration-500 relative overflow-hidden ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      {/* Animated Moving Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <div className={`absolute top-20 left-10 w-32 h-32 ${isDark ? 'bg-blue-500/20' : 'bg-blue-400/30'} rounded-full animate-bounce`} style={{ animationDuration: '3s', animationDelay: '0s' }} />
        <div className={`absolute top-40 right-20 w-24 h-24 ${isDark ? 'bg-purple-500/20' : 'bg-purple-400/30'} rotate-45 animate-spin`} style={{ animationDuration: '8s' }} />
        <div className={`absolute bottom-32 left-1/4 w-16 h-16 ${isDark ? 'bg-cyan-500/20' : 'bg-cyan-400/30'} rounded-full animate-pulse`} style={{ animationDuration: '2s' }} />
        
        {/* Moving Gradient Orbs */}
        <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-30 ${
          isDark ? 'bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500' : 'bg-gradient-to-br from-blue-300 via-purple-300 to-cyan-300'
        }`} style={{ 
          animation: 'float 6s ease-in-out infinite',
          transform: 'translateX(-50px)',
        }} />
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-25 ${
          isDark ? 'bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-500' : 'bg-gradient-to-tr from-purple-300 via-pink-300 to-orange-300'
        }`} style={{ 
          animation: 'float 8s ease-in-out infinite reverse',
          animationDelay: '2s',
          transform: 'translateX(30px)',
        }} />
        
        {/* Animated Lines */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: isDark ? '#3B82F6' : '#60A5FA', stopOpacity: 0.6}} />
                <stop offset="100%" style={{stopColor: isDark ? '#8B5CF6' : '#A78BFA', stopOpacity: 0.2}} />
              </linearGradient>
            </defs>
            <path d="M0,400 Q300,200 600,400 T1200,400" fill="none" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" />
            <path d="M0,300 Q400,100 800,300 T1200,300" fill="none" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{animationDelay: '1s'}} />
          </svg>
        </div>
      </div>
      
      {/* CSS Keyframes for custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(-50px); }
          50% { transform: translateY(-20px) translateX(50px); }
        }
      `}</style>

      {/* Theme Toggle */}
      <div className="absolute top-24 right-6 z-50">
        <div className={`flex items-center space-x-3 backdrop-blur-xl rounded-full px-6 py-3 border transition-all duration-500 shadow-2xl ${
          isDark 
            ? 'bg-black/20 border-white/10 shadow-white/10' 
            : 'bg-white/90 border-gray-200/50 shadow-black/10'
        }`}>
          <Sun className={`w-5 h-5 transition-all duration-300 ${isDark ? 'text-slate-400 scale-90' : 'text-amber-500 scale-110'}`} />
          <Switch 
            checked={isDark} 
            onCheckedChange={setIsDark}
            className={`transition-all duration-300 ${
              isDark 
                ? "data-[state=checked]:bg-slate-700 data-[state=unchecked]:bg-amber-100" 
                : "data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-amber-200"
            }`}
          />
          <Moon className={`w-5 h-5 transition-all duration-300 ${isDark ? 'text-blue-400 scale-110' : 'text-slate-500 scale-90'}`} />
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className={`relative min-h-[85vh] rounded-3xl overflow-hidden transition-all duration-500 shadow-2xl ${
            isDark 
              ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 border border-white/10' 
              : 'bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 border border-blue-200/30'
          }`}
        >
          {/* Video Background */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 1 }}
          >
            <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1751917015/138422-769570674_ehzu3a.mp4" type="video/mp4" />
          </video>
          
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" style={{ zIndex: 2 }} />
          
          {/* Floating Elements */}
          <div className="absolute top-20 right-20 opacity-20" style={{ zIndex: 3 }}>
            <div className={`w-32 h-32 rounded-full border-2 animate-spin ${
              isDark ? 'border-white/20 border-t-white/40' : 'border-white/30 border-t-white/60'
            }`} style={{ animationDuration: '20s' }} />
          </div>
          <div className="absolute bottom-20 left-20 opacity-30" style={{ zIndex: 3 }}>
            <CheckCircle className={`w-16 h-16 ${isDark ? 'text-blue-400' : 'text-white'} animate-pulse`} />
          </div>
          
          {/* Enhanced Content */}
          <div className="absolute bottom-16 left-16 max-w-3xl" style={{ zIndex: 4 }}>
            <div className="mb-6 flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white/90 font-medium">Di fiducia per 500+ aziende</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black leading-tight mb-8 text-white drop-shadow-2xl bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Sales On Demand
            </h1>
            
            <p className="text-2xl lg:text-3xl text-gray-100 mb-12 font-light leading-relaxed max-w-2xl">
              La tua forza vendite esternalizzata, pronta a <span className="font-semibold text-blue-200">far crescere le tue entrate</span> in modo esponenziale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className={`group font-bold px-10 py-5 text-xl rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-3xl ${
                isDark 
                  ? 'bg-white text-blue-900 hover:bg-blue-50 border-2 border-white/30' 
                  : 'bg-white text-blue-900 hover:bg-blue-50 border-2 border-white/40'
              } backdrop-blur-sm relative overflow-hidden`}>
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Scopri come funziona</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-20 transition-opacity" />
              </Button>
              
              <Button variant="outline" className={`font-semibold px-8 py-5 text-xl rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'border-white/40 text-white hover:bg-white/10 backdrop-blur-sm' 
                  : 'border-white/60 text-white hover:bg-white/20 backdrop-blur-sm'
              }`}>
                <Play className="w-5 h-5 mr-2" />
                Guarda Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
