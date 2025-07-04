
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
      description: "Una forza vendita pronta, competente, guidata da 25+ anni di esperienza. Ottimizza i risultati senza costi fissi.",
      image: salesImage,
      accentColor: "blue"
    },
    {
      title: "Strategic Consulting", 
      subtitle: "Consulenza Strategica",
      description: "Funnel, CRM, KPI e metodo. Costruiamo insieme un sistema replicabile e scalabile per la crescita.",
      image: consultingImage,
      accentColor: "purple"
    },
    {
      title: "Instant Avatar",
      subtitle: "Automazioni e AI",
      description: "Creiamo chatbot, sistemi conversazionali e flussi automatizzati personalizzati per la tua azienda.",
      image: aiImage,
      accentColor: "emerald"
    }
  ];

  return (
    <section className={`relative overflow-hidden transition-all duration-700 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' 
        : 'bg-gradient-to-br from-slate-50 via-white to-blue-50/30'
    }`}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl transition-colors duration-700 ${
          isDark ? 'bg-blue-500/10' : 'bg-blue-200/40'
        }`} />
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl transition-colors duration-700 ${
          isDark ? 'bg-purple-500/10' : 'bg-purple-200/40'
        }`} />
      </div>

      {/* Theme Toggle */}
      <div className="absolute top-8 right-8 z-50">
        <div className={`flex items-center space-x-3 backdrop-blur-xl rounded-2xl px-6 py-3 border transition-all duration-700 shadow-lg ${
          isDark 
            ? 'bg-white/5 border-white/10 hover:bg-white/10' 
            : 'bg-white/80 border-slate-200/50 hover:bg-white shadow-xl'
        }`}>
          <Sun className={`w-5 h-5 transition-all duration-300 ${
            isDark ? 'text-slate-400 scale-90' : 'text-amber-500 scale-110'
          }`} />
          <Switch 
            checked={isDark} 
            onCheckedChange={setIsDark}
            className={`transition-all duration-300 ${
              isDark 
                ? "data-[state=checked]:bg-slate-700 data-[state=unchecked]:bg-amber-100" 
                : "data-[state=checked]:bg-slate-600 data-[state=unchecked]:bg-amber-200"
            }`}
          />
          <Moon className={`w-5 h-5 transition-all duration-300 ${
            isDark ? 'text-blue-400 scale-110' : 'text-slate-600 scale-90'
          }`} />
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 lg:py-40 relative z-10">
        {/* Header Section - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Left Side - Heading */}
          <div className="space-y-8">
            <div className={`inline-flex items-center gap-2 text-sm uppercase tracking-wider font-bold transition-colors duration-700 ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`}>
              <div className={`w-8 h-0.5 transition-colors duration-700 ${
                isDark ? 'bg-blue-400' : 'bg-blue-600'
              }`} />
              Services We Offer
            </div>
            <h2 className={`text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight transition-colors duration-700 ${
              isDark 
                ? 'text-white' 
                : 'text-slate-900'
            }`}>
              Certified
              <br />
              <span className={`bg-gradient-to-r bg-clip-text text-transparent inline-block transform hover:scale-105 transition-transform duration-500 ${
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
            <p className={`text-xl lg:text-2xl leading-relaxed font-light transition-colors duration-700 ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Dai riparazioni e installazioni alla manutenzione preventiva, ti abbiamo coperto.
              <span className={`block mt-4 font-medium ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Scegli l'affidabilità, scegli l'eccellenza.
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button className={`group flex items-center gap-3 px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                isDark 
                  ? 'text-blue-400 hover:text-blue-300 hover:bg-blue-400/10' 
                  : 'text-blue-600 hover:text-blue-700 hover:bg-blue-50'
              }`}>
                <span>View All Services</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </button>
              
              <button className={`group flex items-center gap-3 px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                isDark 
                  ? 'text-purple-400 hover:text-purple-300 hover:bg-purple-400/10' 
                  : 'text-purple-600 hover:text-purple-700 hover:bg-purple-50'
              }`}>
                <span>Call For Booking</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className={`relative overflow-hidden rounded-3xl h-[500px] transition-all duration-700 hover:scale-[1.03] hover:-translate-y-2 ${
                isDark 
                  ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/80 shadow-2xl shadow-black/50 border border-slate-700/50' 
                  : 'bg-gradient-to-br from-white to-slate-50 shadow-2xl shadow-slate-900/20 border border-slate-200/50'
              }`}>
                
                {/* Cut-out Image Container */}
                <div className="absolute bottom-0 right-0 w-32 h-32 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-all duration-[10s] ease-linear group-hover:scale-125 group-hover:rotate-3"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)',
                      animation: 'gentle-pan 20s ease-in-out infinite'
                    }}
                  />
                  
                  {/* Overlay for image */}
                  <div className={`absolute inset-0 transition-colors duration-700 ${
                    isDark 
                      ? `bg-gradient-to-br from-${service.accentColor}-500/20 to-transparent` 
                      : `bg-gradient-to-br from-${service.accentColor}-200/40 to-transparent`
                  }`} style={{
                    clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)'
                  }} />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-8">
                  <div className="space-y-6">
                    {/* Service Badge */}
                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-700 ${
                      isDark 
                        ? `bg-${service.accentColor}-500/20 text-${service.accentColor}-300 border border-${service.accentColor}-400/30` 
                        : `bg-${service.accentColor}-100 text-${service.accentColor}-700 border border-${service.accentColor}-200`
                    }`}>
                      {service.subtitle}
                    </div>

                    <h3 className={`text-3xl font-bold leading-tight transition-colors duration-700 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {service.title}
                    </h3>
                    
                    <p className={`text-base leading-relaxed transition-colors duration-700 ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow Button */}
                  <div className="flex justify-between items-end">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-500 ${
                      isDark 
                        ? `bg-${service.accentColor}-500/20 hover:bg-${service.accentColor}-500/30 text-${service.accentColor}-400 border border-${service.accentColor}-400/30` 
                        : `bg-${service.accentColor}-100 hover:bg-${service.accentColor}-200 text-${service.accentColor}-700 border border-${service.accentColor}-200`
                    } backdrop-blur-sm group-hover:scale-110 group-hover:rotate-12`}>
                      <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                    </div>

                    {/* Index Number */}
                    <div className={`text-6xl font-black opacity-20 transition-colors duration-700 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      0{index + 1}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl ${
                  isDark 
                    ? `bg-gradient-to-t from-${service.accentColor}-500/5 to-transparent` 
                    : `bg-gradient-to-t from-${service.accentColor}-100/30 to-transparent`
                }`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes gentle-pan {
          0%, 100% { transform: scale(1.1) translateX(-2px) translateY(-2px); }
          25% { transform: scale(1.15) translateX(2px) translateY(-2px); }
          50% { transform: scale(1.1) translateX(2px) translateY(2px); }
          75% { transform: scale(1.15) translateX(-2px) translateY(2px); }
        }
      `}</style>
    </section>
  );
};

export default NewServicesSection;
