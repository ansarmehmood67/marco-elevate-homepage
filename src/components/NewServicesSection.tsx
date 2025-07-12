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
              <h2 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
                Automazione strategica
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
          <div className="relative rounded-3xl h-[500px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
              }}
            />
            {/* Premium Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#55ACEE]/80 via-[#2E8BC0]/70 to-[#1E4A6B]/80" />
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
              <div className="space-y-6">
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <h3 className="text-xl font-bold">Sales on Demand</h3>
                </div>
                <p className="text-white/90 leading-relaxed">Una forza vendita pronta, competente, guidata da 25+ anni di esperienza.</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <div className="text-sm font-semibold leading-6">OUTSOURCING DELLE VENDITE E DEL MARKETING</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <div className="text-sm font-semibold leading-6">LEAD GENERATION E NURTURING</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <div className="text-sm font-semibold leading-6">TELEMARKETING E FOLLOW-UP AUTOMATICI</div>
                  </div>
                </div>
              </div>
              <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-full text-sm border border-white/30 transition-all duration-300">
                SCOPRI DI PIÙ
              </button>
            </div>
          </div>

          {/* Consulenza Strategica Card */}
          <div className="relative rounded-3xl h-[500px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
              }}
            />
            {/* Premium Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700/80 via-slate-600/70 to-slate-800/80" />
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
              <div className="space-y-6">
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <h3 className="text-xl font-bold">Consulenza Strategica</h3>
                </div>
                <p className="text-white/90 leading-relaxed">Funnel, CRM, KPI e metodo. Costruiamo insieme un sistema replicabile.</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <div className="text-sm font-semibold leading-6">DIRETTORE VENDITE ON DEMAND</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <div className="text-sm font-semibold leading-6">DIRETTORE MARKETING ON DEMAND</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <div className="text-sm font-semibold leading-6">STRATEGIA PERSONALIZZATA IN 30 GIORNI</div>
                  </div>
                </div>
              </div>
              <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-full text-sm border border-white/30 transition-all duration-300">
                SCOPRI DI PIÙ
              </button>
            </div>
          </div>

          {/* Automazioni AI Card */}
          <div className="relative rounded-3xl h-[500px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
              }}
            />
            {/* Premium Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/80 via-teal-600/70 to-cyan-700/80" />
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
              <div className="space-y-6">
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <h3 className="text-xl font-bold">Automazioni AI</h3>
                </div>
                <p className="text-white/90 leading-relaxed">Creiamo chatbot, sistemi conversazionali e flussi automatizzati personalizzati.</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <div className="text-sm font-semibold leading-6">CHATBOT AI PER SITI E MESSAGGISTICA</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <div className="text-sm font-semibold leading-6">INSTANT AVATAR PER VIDEO PERSONALIZZATI</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <div className="text-sm font-semibold leading-6">AUTOMAZIONI MARKETING CON IA</div>
                  </div>
                </div>
              </div>
              <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-full text-sm border border-white/30 transition-all duration-300">
                SCOPRI DI PIÙ
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewServicesSection;