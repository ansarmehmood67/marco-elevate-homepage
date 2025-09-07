import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import logoDark from "@/assets/logo-dark.png";
import marcoPortrait from "@/assets/marco-portrait.jpg";
import instantAvatar from "@/assets/instant-avatar.jpg";

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
          <h2 className={`text-5xl lg:text-7xl font-black leading-[0.8] tracking-tight text-white mb-10 transition-all duration-700 ease-out ${
            headerItems[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block transform transition-transform duration-500 hover:scale-105">
              Servizi per crescere:{" "}
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent inline-block transform transition-transform duration-500 hover:scale-110">
              marketing, vendite e automazione
            </span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light transition-all duration-700 ease-out ${
            headerItems[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Affidaci strategia, esecuzione e team operativo in outsourcing — con consulenza direzionale e KPI sempre sotto controllo.
          </p>
        </div>

        {/* Services Cards Grid with staggered animations */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Card 1 - Sales On Demand */}
          <div className={`group relative rounded-3xl p-10 min-h-[680px] flex flex-col justify-between transition-all duration-700 hover:scale-[1.02] overflow-hidden shadow-2xl ease-out ${
            cardItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Blue gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-primary"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              {/* Logo Badge */}
              <div className="mb-8">
                <img src={logoDark} alt="Company Logo" className="h-8 w-auto" />
              </div>
              
              {/* Heading */}
              <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight text-white tracking-tight">
                Outsourcing Marketing<br />e vendite
              </h3>
              
              {/* Subhead */}
              <p className="text-lg text-white/90 mb-8 leading-relaxed font-normal">
                Il tuo reparto vendite e marketing in outsourcing. Funnel, campagne e forza commerciale per trasformare lead in clienti.
              </p>
              
              {/* Bullets */}
              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base"><strong>Generazione e qualificazione lead</strong> con campagne marketing dedicate.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base"><strong>Nurturing e follow-up</strong> gestiti da commerciali esperti.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base"><strong>Closing</strong> contratti affidato a closer specializzati.</span>
                </div>
              </div>
              
              {/* Benefit Strip */}
              <div className="mb-6">
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                  <span className="text-white text-sm font-medium">Più lead qualificati • Pipeline sempre attiva • Contratti chiusi più velocemente</span>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <Button asChild className="relative z-10 w-full bg-white text-primary hover:bg-white/95 py-6 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl">
              <Link to="/sales-on-demand">Scopri sales on demand</Link>
            </Button>
          </div>

          {/* Card 2 - Consulenza Strategica */}
          <div className={`group relative rounded-3xl p-10 min-h-[680px] flex flex-col justify-between transition-all duration-700 hover:scale-[1.02] overflow-hidden shadow-2xl ease-out ${
            cardItems[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Deep slate/blue-gray gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-blue-900"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
            
            <div className="absolute bottom-0 right-0 w-1/2 h-3/4 overflow-hidden">
  <img
    src="https://res.cloudinary.com/dufcnrcfe/image/upload/v1757267136/Untitled_design_37_oonenp.png"
    alt="Marco Ferrario"
    className="w-full h-full object-contain object-bottom"
  />
</div>


            
            <div className="relative z-10 flex flex-col h-full">
              {/* Text Badge */}
              <div className="mb-8">
                <span className="text-white/80 text-sm font-normal italic">Marco Ferrario</span>
              </div>
              
              {/* Heading */}
              <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight text-white tracking-tight">
                Consulenza Strategica<br />On demand
              </h3>
              
              {/* Subhead */}
              <p className="text-lg text-white/90 mb-8 leading-relaxed font-normal">
                La guida di un direttore vendite e marketing dedicato che definisce le strategie e supervisiona i risultati.
              </p>
              
              {/* Bullets */}
              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base"><strong>Roadmap operativa</strong> in 30 giorni</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base"><strong>Direttore vendite & marketing</strong> al tuo fianco</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base"><strong>KPI, forecast e governance</strong> mensile</span>
                </div>
              </div>
              
              {/* Benefit Strip */}
              <div className="mb-6">
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                  <span className="text-white text-sm font-medium">Direzione chiara • Priorità giuste • Crescita misurabile</span>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <Button asChild className="relative z-10 w-full bg-white text-slate-800 hover:bg-white/95 py-6 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl">
              <Link to="/strategic-consulting">Scopri Marco Ferrario</Link>
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
            <div className="absolute bottom-0 right-0 w-2/5 h-2/5 overflow-hidden rounded-tl-3xl opacity-25">
              <img 
                src={instantAvatar} 
                alt="Robot AI" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              {/* Text Badge */}
              <div className="mb-8">
                <span className="text-white/80 text-sm font-normal">Automazioni AI</span>
              </div>
              
              {/* Heading */}
              <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight text-white tracking-tight">
                Automazioni AI per<br />vendite e Marketing
              </h3>
              
              {/* Subhead */}
              <p className="text-lg text-white/90 mb-8 leading-relaxed font-normal">
                Automazioni intelligenti che supportano vendite e marketing, trasformando contatti in clienti.
              </p>
              
              {/* Bullets */}
              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base"><strong>Chatbot e follow-up 24/7</strong></span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base"><strong>Video/avatar</strong> personalizzati per la conversione</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base"><strong>Integrazione CRM</strong> e reportistica avanzata</span>
                </div>
              </div>
              
              {/* Benefit Strip */}
              <div className="mb-6">
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                  <span className="text-white text-sm font-medium">Processi veloci • Conversioni più alte • Meno lavoro manuale</span>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <Button asChild className="relative z-10 w-full bg-white text-emerald-700 hover:bg-white/95 py-6 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl">
              <Link to="/ai">Scopri Automazioni AI</Link>
            </Button>
          </div>
        </div>

        {/* Microcopy under cards */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-sm font-medium">
            Audit 30 min • Nessun impegno • Risposta entro 2 ore • 500+ clienti.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewServicesSection;