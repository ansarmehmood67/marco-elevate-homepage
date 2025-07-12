import { Switch } from "@/components/ui/switch";
import { Moon, Sun, ArrowRight } from "lucide-react";
import { useState } from "react";

const NewServicesSection = () => {
  const [isDark, setIsDark] = useState(true);

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
            / I Nostri Servizi
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Heading */}
            <div>
              <h2 className={`text-5xl lg:text-7xl font-bold leading-tight transition-colors duration-500 ${
                isDark 
                  ? 'text-white' 
                  : 'text-slate-900'
              }`}>
                Automazione 
                <br />
                <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                  isDark 
                    ? 'from-[#55ACEE] to-[#2E8BC0]' 
                    : 'from-[#55ACEE] to-[#2E8BC0]'
                }`}>
                  strategica
                </span>
              </h2>
            </div>

            {/* Right Side - Text & Buttons */}
            <div className="space-y-8">
              <p className={`text-lg lg:text-xl leading-relaxed transition-colors duration-500 ${
                isDark ? 'text-white' : 'text-slate-700'
              }`}>
                Esternalizza le vendite, ricevi consulenza strategica e automatizza con l'AI — tutto 
                su misura per la tua crescita.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
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
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sales on Demand Card */}
          <div className="bg-[#E5F6FD] rounded-3xl p-8 h-[500px] flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#111827]">Sales on Demand</h3>
              <p className="text-[#4B5563]">Una forza vendita pronta, competente, guidata da 25+ anni di esperienza.</p>
              <div className="space-y-2">
                <div className="text-sm font-bold text-[#2E8BC0] leading-6">OUTSOURCING DELLE VENDITE E DEL MARKETING</div>
                <div className="text-sm font-bold text-[#2E8BC0] leading-6">LEAD GENERATION E NURTURING</div>
                <div className="text-sm font-bold text-[#2E8BC0] leading-6">TELEMARKETING E FOLLOW-UP AUTOMATICI</div>
              </div>
            </div>
            <button className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold px-6 py-3 rounded-full text-sm">
              SCOPRI DI PIÙ
            </button>
          </div>

          {/* Consulenza Strategica Card */}
          <div className="bg-[#F3F4F6] rounded-3xl p-8 h-[500px] flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#111827]">Consulenza Strategica</h3>
              <p className="text-[#4B5563]">Funnel, CRM, KPI e metodo. Costruiamo insieme un sistema replicabile.</p>
              <div className="space-y-2">
                <div className="text-sm font-bold text-[#2E8BC0] leading-6">DIRETTORE VENDITE ON DEMAND</div>
                <div className="text-sm font-bold text-[#2E8BC0] leading-6">DIRETTORE MARKETING ON DEMAND</div>
                <div className="text-sm font-bold text-[#2E8BC0] leading-6">STRATEGIA PERSONALIZZATA IN 30 GIORNI</div>
              </div>
            </div>
            <button className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold px-6 py-3 rounded-full text-sm">
              SCOPRI DI PIÙ
            </button>
          </div>

          {/* Automazioni AI Card */}
          <div className="bg-[#E6F4EA] rounded-3xl p-8 h-[500px] flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#111827]">Automazioni AI</h3>
              <p className="text-[#4B5563]">Creiamo chatbot, sistemi conversazionali e flussi automatizzati personalizzati.</p>
              <div className="space-y-2">
                <div className="text-sm font-bold text-[#2E8BC0] leading-6">CHATBOT AI PER SITI E MESSAGGISTICA</div>
                <div className="text-sm font-bold text-[#2E8BC0] leading-6">INSTANT AVATAR PER VIDEO PERSONALIZZATI</div>
                <div className="text-sm font-bold text-[#2E8BC0] leading-6">AUTOMAZIONI MARKETING CON IA</div>
              </div>
            </div>
            <button className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold px-6 py-3 rounded-full text-sm">
              SCOPRI DI PIÙ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewServicesSection;