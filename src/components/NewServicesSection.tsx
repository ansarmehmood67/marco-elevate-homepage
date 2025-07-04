
import { Switch } from "@/components/ui/switch";
import { Moon, Sun, ArrowRight } from "lucide-react";
import { useState } from "react";
import salesImage from "@/assets/sales-on-demand.jpg";
import consultingImage from "@/assets/strategic-consulting.jpg";
import aiImage from "@/assets/instant-avatar.jpg";

const NewServicesSection = () => {
  const [isDark, setIsDark] = useState(true);

  const services = [
    {
      title: "Sales On Demand",
      subtitle: "Esternalizza il reparto commerciale",
      description: "Una forza vendita pronta, competente, guidata da 25+ anni di esperienza.",
      image: salesImage,
      accentColor: "blue"
    },
    {
      title: "Strategic Consulting", 
      subtitle: "Consulenza Strategica",
      description: "Funnel, CRM, KPI e metodo. Costruiamo insieme un sistema replicabile.",
      image: consultingImage,
      accentColor: "purple"
    },
    {
      title: "Instant Avatar",
      subtitle: "Automazioni e AI",
      description: "Creiamo chatbot, sistemi conversazionali e flussi automatizzati personalizzati.",
      image: aiImage,
      accentColor: "emerald"
    }
  ];

  return (
    <section className={`relative overflow-hidden transition-all duration-500 ${
      isDark ? 'bg-black' : 'bg-gradient-to-br from-slate-50 via-white to-slate-100'
    }`}>
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <div className={`flex items-center space-x-3 backdrop-blur-sm rounded-full px-4 py-2 border transition-all duration-500 ${
          isDark 
            ? 'bg-white/10 border-white/20' 
            : 'bg-white/80 border-slate-200/50 shadow-lg'
        }`}>
          <Sun className={`w-4 h-4 transition-colors ${isDark ? 'text-slate-400' : 'text-amber-500'}`} />
          <Switch 
            checked={isDark} 
            onCheckedChange={setIsDark}
            className={isDark ? "data-[state=checked]:bg-slate-700 data-[state=unchecked]:bg-amber-100" : "data-[state=checked]:bg-slate-600 data-[state=unchecked]:bg-amber-200"}
          />
          <Moon className={`w-4 h-4 transition-colors ${isDark ? 'text-blue-400' : 'text-slate-600'}`} />
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 lg:py-32">
        {/* Header Section - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Heading */}
          <div>
            <div className={`text-sm uppercase tracking-wider mb-6 font-semibold transition-colors duration-500 ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`}>
              / Services We Offer
            </div>
            <h2 className={`text-5xl lg:text-7xl font-bold leading-tight transition-colors duration-500 ${
              isDark 
                ? 'text-white' 
                : 'text-slate-900'
            }`}>
              Certified
              <br />
              <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isDark 
                  ? 'from-blue-400 via-purple-400 to-emerald-400' 
                  : 'from-blue-600 via-purple-600 to-emerald-600'
              }`}>
                Excellence
              </span>
            </h2>
          </div>

          {/* Right Side - Text & Buttons */}
          <div className="space-y-8">
            <p className={`text-lg lg:text-xl leading-relaxed transition-colors duration-500 ${
              isDark ? 'text-slate-200' : 'text-slate-700'
            }`}>
              Dai riparazioni e installazioni alla manutenzione preventiva, ti abbiamo coperto.
              Scegli l'affidabilità, scegli l'eccellenza.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className={`group flex items-center gap-2 text-left transition-colors duration-300 ${
                isDark 
                  ? 'text-blue-400 hover:text-blue-300' 
                  : 'text-blue-600 hover:text-blue-700'
              }`}>
                <span className="font-semibold">View All Services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button className={`group flex items-center gap-2 text-left transition-colors duration-300 ${
                isDark 
                  ? 'text-purple-400 hover:text-purple-300' 
                  : 'text-purple-600 hover:text-purple-700'
              }`}>
                <span className="font-semibold">Call For Booking</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className={`relative overflow-hidden rounded-3xl h-[400px] transition-all duration-500 hover:scale-[1.02] ${
                isDark ? 'shadow-2xl shadow-black/50' : 'shadow-2xl shadow-slate-900/20'
              }`}>
                {/* Animated Background Image */}
                <div className="absolute inset-0">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-all duration-[8s] ease-linear group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      animation: 'gentle-zoom 15s ease-in-out infinite'
                    }}
                  />
                  
                  {/* Overlay Gradients */}
                  <div className={`absolute inset-0 transition-all duration-500 ${
                    isDark 
                      ? 'bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/80' 
                      : 'bg-gradient-to-t from-white/95 via-white/60 to-transparent group-hover:from-white/90'
                  }`} />
                  
                  <div className={`absolute inset-0 transition-colors duration-500 ${
                    isDark 
                      ? `bg-gradient-to-br from-${service.accentColor}-900/20 to-transparent` 
                      : `bg-gradient-to-br from-${service.accentColor}-100/40 to-transparent`
                  }`} />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <div className="space-y-4">
                    <h3 className={`text-2xl font-bold transition-colors duration-500 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {service.title}
                    </h3>
                    
                    <p className={`text-base font-medium transition-colors duration-500 ${
                      isDark ? 'text-slate-200' : 'text-slate-700'
                    }`}>
                      {service.subtitle}
                    </p>
                    
                    <p className={`text-sm leading-relaxed transition-colors duration-500 ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow Button */}
                  <div className="mt-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                      isDark 
                        ? `bg-${service.accentColor}-500/20 hover:bg-${service.accentColor}-500/30 text-${service.accentColor}-400` 
                        : `bg-${service.accentColor}-100/80 hover:bg-${service.accentColor}-200/80 text-${service.accentColor}-700`
                    } backdrop-blur-sm border ${
                      isDark ? `border-${service.accentColor}-400/20` : `border-${service.accentColor}-300/40`
                    } group-hover:scale-110`}>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  isDark 
                    ? `bg-gradient-to-t from-${service.accentColor}-500/10 to-transparent` 
                    : `bg-gradient-to-t from-${service.accentColor}-200/20 to-transparent`
                }`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes gentle-zoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
};

export default NewServicesSection;
