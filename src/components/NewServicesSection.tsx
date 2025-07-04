
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
      accentColor: "blue",
      buttonText: "Scopri Sales On Demand"
    },
    {
      title: "Strategic Consulting", 
      subtitle: "Consulenza Strategica",
      description: "Funnel, CRM, KPI e metodo. Costruiamo insieme un sistema replicabile.",
      image: consultingImage,
      accentColor: "purple",
      buttonText: "Scopri Strategic Consulting"
    },
    {
      title: "Instant Avatar",
      subtitle: "Automazioni e AI",
      description: "Creiamo chatbot, sistemi conversazionali e flussi automatizzati personalizzati.",
      image: aiImage,
      accentColor: "emerald",
      buttonText: "Scopri Instant Avatar"
    }
  ];

  return (
    <section className={`relative overflow-hidden transition-all duration-500 ${
      isDark ? 'bg-black' : 'bg-gradient-to-br from-slate-50 via-white to-slate-100'
    }`}>
      {/* Background Pattern */}
      <div className={`absolute inset-0 opacity-30 ${
        isDark 
          ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]' 
          : 'bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]'
      }`} />

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

      <div className="container mx-auto px-6 py-20 lg:py-32 relative z-10">
        {/* Header Section - Positioned at top with padding */}
        <div className="mb-16 px-4">
          <div className={`text-sm uppercase tracking-wider mb-6 font-semibold transition-colors duration-500 ${
            isDark ? 'text-blue-400' : 'text-blue-600'
          }`}>
            / Services We Offer
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Heading */}
            <div>
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
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className={`relative overflow-hidden rounded-3xl h-[600px] transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 ${
                isDark 
                  ? 'shadow-2xl shadow-black/50 hover:shadow-3xl hover:shadow-black/70' 
                  : 'shadow-xl shadow-slate-900/15 hover:shadow-2xl hover:shadow-slate-900/25'
              }`}>
                
                {/* Full Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-[8s] ease-out group-hover:scale-110"
                  />
                  {/* Dark overlay for text readability */}
                  <div className={`absolute inset-0 transition-all duration-500 ${
                    isDark 
                      ? 'bg-gradient-to-t from-black/95 via-black/60 to-black/30' 
                      : 'bg-gradient-to-t from-white/95 via-white/60 to-white/30'
                  }`} />
                  
                  {/* Accent Color Overlay */}
                  <div className={`absolute inset-0 transition-all duration-500 ${
                    service.accentColor === 'blue' 
                      ? (isDark ? 'bg-gradient-to-br from-blue-900/40 to-transparent' : 'bg-gradient-to-br from-blue-100/50 to-transparent')
                      : service.accentColor === 'purple'
                      ? (isDark ? 'bg-gradient-to-br from-purple-900/40 to-transparent' : 'bg-gradient-to-br from-purple-100/50 to-transparent')
                      : (isDark ? 'bg-gradient-to-br from-emerald-900/40 to-transparent' : 'bg-gradient-to-br from-emerald-100/50 to-transparent')
                  }`} />
                </div>

                {/* Content Container */}
                <div className="relative z-20 h-full flex flex-col justify-between p-10">
                  {/* Top Section - Accent Line */}
                  <div className={`w-20 h-1.5 rounded-full transition-all duration-500 ${
                    service.accentColor === 'blue' 
                      ? (isDark ? 'bg-gradient-to-r from-blue-400 to-blue-600' : 'bg-gradient-to-r from-blue-500 to-blue-700')
                      : service.accentColor === 'purple'
                      ? (isDark ? 'bg-gradient-to-r from-purple-400 to-purple-600' : 'bg-gradient-to-r from-purple-500 to-purple-700')
                      : (isDark ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' : 'bg-gradient-to-r from-emerald-500 to-emerald-700')
                  } group-hover:w-24`} />

                  {/* Bottom Section - Content */}
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h3 className={`text-3xl lg:text-4xl font-bold leading-tight transition-colors duration-500 ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        {service.title}
                      </h3>
                      
                      <p className={`text-lg font-semibold transition-colors duration-500 ${
                        service.accentColor === 'blue' 
                          ? (isDark ? 'text-blue-300' : 'text-blue-700')
                          : service.accentColor === 'purple'
                          ? (isDark ? 'text-purple-300' : 'text-purple-700')
                          : (isDark ? 'text-emerald-300' : 'text-emerald-700')
                      }`}>
                        {service.subtitle}
                      </p>
                      
                      <p className={`text-base leading-relaxed transition-colors duration-500 ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom Row - Button with Text and Number */}
                    <div className="flex justify-between items-end">
                      <button className={`group/btn inline-flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-500 backdrop-blur-sm ${
                        service.accentColor === 'blue' 
                          ? (isDark ? 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-400/30 hover:border-blue-300/50' : 'bg-blue-100/80 hover:bg-blue-200/80 text-blue-700 border border-blue-300/40 hover:border-blue-400/60')
                          : service.accentColor === 'purple'
                          ? (isDark ? 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-400/30 hover:border-purple-300/50' : 'bg-purple-100/80 hover:bg-purple-200/80 text-purple-700 border border-purple-300/40 hover:border-purple-400/60')
                          : (isDark ? 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-400/30 hover:border-emerald-300/50' : 'bg-emerald-100/80 hover:bg-emerald-200/80 text-emerald-700 border border-emerald-300/40 hover:border-emerald-400/60')
                      } group-hover:scale-105`}>
                        <span className="font-semibold text-sm">{service.buttonText}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                      
                      {/* Service Number */}
                      <div className={`text-8xl font-black transition-all duration-500 ${
                        isDark ? 'text-white/10 group-hover:text-white/20' : 'text-slate-900/10 group-hover:text-slate-900/20'
                      }`}>
                        0{index + 1}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Premium Glow Border Effect */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                  service.accentColor === 'blue' 
                    ? 'shadow-[inset_0_0_0_2px_rgba(59,130,246,0.3)]'
                    : service.accentColor === 'purple'
                    ? 'shadow-[inset_0_0_0_2px_rgba(147,51,234,0.3)]'
                    : 'shadow-[inset_0_0_0_2px_rgba(16,185,129,0.3)]'
                }`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewServicesSection;
