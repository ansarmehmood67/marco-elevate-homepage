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
          {/* Sales on Demand Card - Blue */}
          <div className={`group bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 h-[580px] flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] relative overflow-hidden shadow-xl ease-out ${
            cardItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-white rounded-full" />
              </div>
              
              <h3 className="text-3xl font-black mb-4 leading-tight text-white">
                Sales On Demand
              </h3>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Il tuo reparto vendite on-demand per generare pipeline qualificata.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="bg-white/10 backdrop-blur-sm text-sm font-bold uppercase tracking-wide rounded-xl px-4 py-3 border border-white/20">
                  <span className="text-white">● Lead qualificati mensili su canali diversi</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm text-sm font-bold uppercase tracking-wide rounded-xl px-4 py-3 border border-white/20">
                  <span className="text-white">● Follow-up e closing automatici</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm text-sm font-bold uppercase tracking-wide rounded-xl px-4 py-3 border border-white/20">
                  <span className="text-white">● Team dedicato senza assunzioni</span>
                </div>
              </div>
            </div>
            
            <Button asChild className="w-full bg-white text-black hover:bg-white/90 py-4 rounded-xl text-base font-black uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] shadow-lg">
              <Link to="/sales-on-demand">Prenota audit vendite</Link>
            </Button>
          </div>

          {/* Consulenza Strategica Card - Gray */}
          <div className={`group bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl p-8 h-[580px] flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] relative overflow-hidden shadow-xl ease-out ${
            cardItems[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-white rounded-full" />
              </div>
              
              <h3 className="text-3xl font-black mb-4 leading-tight text-white">
                Consulenza Strategica
              </h3>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Direzione operativa e strategica per priorità che spingono il fatturato.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="bg-white/10 backdrop-blur-sm text-sm font-bold uppercase tracking-wide rounded-xl px-4 py-3 border border-white/20">
                  <span className="text-white">● Roadmap 30 giorni per aumentare pipeline</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm text-sm font-bold uppercase tracking-wide rounded-xl px-4 py-3 border border-white/20">
                  <span className="text-white">● Direttore vendite & marketing a bordo</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm text-sm font-bold uppercase tracking-wide rounded-xl px-4 py-3 border border-white/20">
                  <span className="text-white">● KPI, forecast e governance mensile</span>
                </div>
              </div>
            </div>
            
            <Button asChild className="w-full bg-white text-black hover:bg-white/90 py-4 rounded-xl text-base font-black uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] shadow-lg">
              <Link to="/consulenza-strategica">Ricevi il piano in 48h</Link>
            </Button>
          </div>

          {/* Automazioni AI Card - Green */}
          <div className={`group bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-8 h-[580px] flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] relative overflow-hidden shadow-xl ease-out ${
            cardItems[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-white rounded-full" />
              </div>
              
              <h3 className="text-3xl font-black mb-4 leading-tight text-white">
                Automazioni AI
              </h3>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Automazioni che trasformano contatti in clienti con meno lavoro umano.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="bg-white/10 backdrop-blur-sm text-sm font-bold uppercase tracking-wide rounded-xl px-4 py-3 border border-white/20">
                  <span className="text-white">● Chatbot e follow-up 24/7</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm text-sm font-bold uppercase tracking-wide rounded-xl px-4 py-3 border border-white/20">
                  <span className="text-white">● Video/Avatar personalizzati per conversione</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm text-sm font-bold uppercase tracking-wide rounded-xl px-4 py-3 border border-white/20">
                  <span className="text-white">● Integrazione CRM e reportistica</span>
                </div>
              </div>
            </div>
            
            <Button asChild className="w-full bg-white text-black hover:bg-white/90 py-4 rounded-xl text-base font-black uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] shadow-lg">
              <Link to="/ai">Vedi demo automazioni</Link>
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