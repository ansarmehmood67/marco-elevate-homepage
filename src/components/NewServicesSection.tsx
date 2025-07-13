
import { Switch } from "@/components/ui/switch";
import { Moon, Sun, ArrowRight } from "lucide-react";
import { useState } from "react";

const NewServicesSection = () => {
  const [isDark, setIsDark] = useState(true);

  const services = [
    {
      title: "Sales on Demand",
      description: "Una forza vendita pronta, competente, guidata da 25+ anni di esperienza.",
      features: [
        "OUTSOURCING DELLE VENDITE E DEL MARKETING",
        "LEAD GENERATION E NURTURING",
        "TELEMARKETING E FOLLOW-UP AUTOMATICI"
      ],
      gradientColors: "from-[#55ACEE] to-[#2E8BC0]"
    },
    {
      title: "Consulenza Strategica",
      description: "Funnel, CRM, KPI e metodo. Costruiamo insieme un sistema replicabile.",
      features: [
        "DIRETTORE VENDITE ON DEMAND",
        "DIRETTORE MARKETING ON DEMAND",
        "STRATEGIA PERSONALIZZATA IN 30 GIORNI"
      ],
      gradientColors: "from-slate-700 to-slate-600"
    },
    {
      title: "Automazioni AI",
      description: "Creiamo chatbot, sistemi conversazionali e flussi automatizzati personalizzati.",
      features: [
        "CHATBOT AI PER SITI E MESSAGGISTICA",
        "INSTANT AVATAR PER VIDEO PERSONALIZZATI",
        "AUTOMAZIONI MARKETING CON IA"
      ],
      gradientColors: "from-emerald-600 to-teal-600"
    }
  ];

  return (
    <section className={`relative py-20 transition-all duration-500 ${
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

      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className={`text-sm uppercase tracking-wider mb-6 font-semibold transition-colors duration-500 ${
            isDark ? 'text-blue-400' : 'text-blue-600'
          }`}>
            / I Nostri Servizi
          </div>
          
          <h2 className={`text-4xl lg:text-6xl font-bold leading-tight mb-8 transition-colors duration-500 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Automazione strategica
          </h2>
          
          <p className={`text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-8 transition-colors duration-500 ${
            isDark ? 'text-white/80' : 'text-slate-700'
          }`}>
            Esternalizza le vendite, ricevi consulenza strategica e automatizza con l'AI — tutto 
            su misura per la tua crescita.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`group flex items-center gap-2 text-left transition-colors duration-300 ${
              isDark 
                ? 'text-[#55ACEE] hover:text-[#2E8BC0]' 
                : 'text-[#55ACEE] hover:text-[#2E8BC0]'
            }`}>
              <span className="font-semibold">Visualizza tutti i servizi</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button className={`group flex items-center gap-2 text-left transition-colors duration-300 ${
              isDark 
                ? 'text-[#55ACEE] hover:text-[#2E8BC0]' 
                : 'text-[#55ACEE] hover:text-[#2E8BC0]'
            }`}>
              <span className="font-semibold">Prenota una chiamata</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-500 hover:scale-105 group ${
                isDark 
                  ? 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15' 
                  : 'bg-white border border-slate-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Service Title */}
              <div className="mb-6">
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-4 bg-gradient-to-r ${service.gradientColors} text-white`}>
                  {service.title}
                </div>
              </div>

              {/* Service Description */}
              <p className={`text-base leading-relaxed mb-6 transition-colors duration-500 ${
                isDark ? 'text-white/90' : 'text-slate-700'
              }`}>
                {service.description}
              </p>

              {/* Service Features */}
              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r ${service.gradientColors}`} />
                    <div className={`text-sm font-semibold leading-6 transition-colors duration-500 ${
                      isDark ? 'text-white' : 'text-slate-800'
                    }`}>
                      {feature}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full font-semibold px-6 py-3 rounded-full text-sm transition-all duration-300 border ${
                isDark 
                  ? 'bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30' 
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
              }`}>
                SCOPRI DI PIÙ
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewServicesSection;
