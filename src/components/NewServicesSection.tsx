import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const NewServicesSection = () => {
  const { ref: headerRef, visibleItems: headerItems } = useStaggeredAnimation(3, 120);
  const { ref: cardsRef, visibleItems: cardItems } = useStaggeredAnimation(3, 200);

  return (
    <section className="relative bg-black overflow-hidden">
      <div className="container mx-auto px-6 py-24 relative z-10">
        {/* Header Section - Full Width with animations */}
        <div ref={headerRef} className="text-center mb-20 max-w-6xl mx-auto">
          <div className={`text-sm uppercase tracking-[0.3em] text-primary font-bold mb-4 transition-all duration-700 ease-out ${
            headerItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            AUTOMAZIONE STRATEGICA
          </div>
          <h2 className={`text-5xl lg:text-7xl font-black leading-[0.9] tracking-tight text-white mb-10 pb-3 transition-all duration-700 ease-out ${
            headerItems[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block transform transition-transform duration-500 hover:scale-105">
              Soluzioni per crescere:{" "}
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent inline-block transform transition-transform duration-500 hover:scale-110">
              vendite, marketing e automazione AI
            </span>
          </h2>
          <p className={`text-lg sm:text-xl leading-relaxed text-gray-300 max-w-4xl mx-auto transition-all duration-700 ease-out delay-300 ${headerItems[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <strong>Reparto commerciale in outsourcing</strong> per PMI italiane. Combiniamo team vendite esterno, outsourcing marketing e automazioni AI per aumentare lead qualificati e chiudere contratti più velocemente.
          </p>
        </div>

        {/* Services Cards Grid with staggered animations */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Card 1 - Sales On Demand */}
          <div className={`group relative rounded-3xl p-10 min-h-[680px] flex flex-col justify-between transition-all duration-700 hover:scale-[1.02] overflow-hidden shadow-2xl ease-out ${
            cardItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Blue solid background */}
            <div className="absolute inset-0 bg-primary"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              {/* Logo Badge */}
              <div className="mb-8">
                <img src="/assets/images/logos/logo-bw.png" alt="Company Logo" className="h-14 w-auto" />
              </div>
              
              {/* Heading */}
              <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight text-white tracking-tight">
                Team vendite esterno<br />per lead e closing
              </h3>
              
              {/* Subhead */}
              <p className="text-lg text-white/90 mb-8 leading-relaxed font-normal">
                <strong>Forza vendita esterna</strong> dedicata: pipeline commerciale sempre attiva con outsourcing marketing B2B e closing contratti specializzato.
              </p>
              
              {/* Bullets */}
              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base">Generazione e qualificazione lead con campagne marketing dedicate</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base">Nurturing e follow-up gestiti da commerciali esperti</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base">Closing contratti affidato a closer specializzati</span>
                </div>
              </div>
              
              {/* Benefit Strip */}
              <div className="mb-6">
                <span className="text-white text-sm font-medium">Più lead qualificati • Pipeline sempre attiva • Contratti chiusi più velocemente</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <Button asChild className="relative z-10 w-full !bg-white !text-black hover:!bg-white/95 py-6 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl" style={{background: 'white', color: 'black'}}>
              <Link to="/sales-on-demand">Scopri Sales on Demand</Link>
            </Button>
          </div>

          {/* Card 2 - Consulenza Strategica */}
          <div className={`group relative rounded-3xl p-10 min-h-[680px] flex flex-col justify-between transition-all duration-700 hover:scale-[1.02] overflow-hidden shadow-2xl ease-out ${
            cardItems[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Deep slate/blue-gray gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-blue-900"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
            
            {/* Marco photo overlay - bottom right */}
            <div className="absolute bottom-0 right-0 w-2/5 h-2/5 overflow-hidden rounded-tl-3xl opacity-80">
              <img 
                src="https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758195422/Untitled_design_79_ujzoze.png" 
                alt="Marco Ferrario" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              {/* Text Badge */}
              <div className="mb-8">
                <span className="text-white/80 text-2xl font-bold italic">Marco Ferrario</span>
              </div>
              
              {/* Heading */}
              <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight text-white tracking-tight">
                Direttore vendite esterno<br />dedicato
              </h3>
              
              {/* Subhead */}
              <p className="text-lg text-white/90 mb-8 leading-relaxed font-normal">
                <strong>Consulenza strategica vendite e marketing</strong> con un direttore commerciale dedicato che definisce strategie e garantisce risultati misurabili.
              </p>
              
              {/* Bullets */}
              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base">Roadmap operativa in 30 giorni</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base">Direttore vendite & marketing al tuo fianco</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base">KPI, forecast e governance mensile</span>
                </div>
              </div>
              
              {/* Benefit Strip */}
              <div className="mb-6">
                <span className="text-white text-sm font-medium">Direzione chiara • Priorità giuste • Crescita misurabile</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <Button asChild className="relative z-10 w-full !bg-white !text-black hover:!bg-white/95 py-6 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl" style={{background: 'white', color: 'black'}}>
              <Link to="/marco-ferrario">Scopri Marco Ferrario</Link>
            </Button>
          </div>

          {/* Card 3 - Automazioni AI */}
          <div className={`group relative rounded-3xl p-10 min-h-[680px] flex flex-col justify-between transition-all duration-700 hover:scale-[1.02] overflow-hidden shadow-2xl ease-out ${
            cardItems[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Teal-to-green gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-emerald-600 to-green-700"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
            
            {/* AI avatar overlay - bottom right */}
            <div className="absolute bottom-0 right-0 w-2/5 h-2/5 overflow-hidden rounded-tl-3xl opacity-80">
              <img 
                src="https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758195480/Untitled_design_74_ojpzgr.png" 
                alt="Robot AI" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              {/* Text Badge */}
              <div className="mb-8">
                <span className="text-white/80 text-2xl font-bold italic">Automazioni AI</span>
              </div>
              
              {/* Heading */}
              <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight text-white tracking-tight">
                Automazioni AI per<br />vendite e marketing
              </h3>
              
              {/* Subhead */}
              <p className="text-lg text-white/90 mb-8 leading-relaxed font-normal">
                <strong>AI per vendite e marketing</strong>: chatbot intelligenti, integrazione CRM avanzata e automazioni che riducono il carico operativo aumentando le conversioni.
              </p>
              
              {/* Bullets */}
              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base">Chatbot e follow-up 24/7</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base">Video/avatar personalizzati per la conversione</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base">Integrazione CRM e reportistica avanzata</span>
                </div>
              </div>
              
              {/* Benefit Strip */}
              <div className="mb-6">
                <span className="text-white text-sm font-medium">Processi veloci • Conversioni più alte • Meno lavoro manuale</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <Button asChild className="relative z-10 w-full !bg-white !text-black hover:!bg-white/95 py-6 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl" style={{background: 'white', color: 'black'}}>
              <Link to="/ai">Scopri Automazioni AI</Link>
            </Button>
          </div>
        </div>

        {/* Microcopy under cards - Enhanced */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50">
            <p className="text-base lg:text-lg font-bold text-gray-200">
              <span className="text-primary-glow">●</span> Audit 30 min • 
              <span className="text-primary-glow mx-2">●</span> Nessun impegno • 
              <span className="text-primary-glow mx-2">●</span> Risposta entro 2 ore • 
              <span className="text-primary-glow mx-2">●</span> 500+ clienti
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewServicesSection;