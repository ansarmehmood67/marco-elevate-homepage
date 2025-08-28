import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCinematicSequence, ANIMATION_PRESETS } from "@/hooks/useCinematicAnimation";

const NewServicesSection = () => {
  const { ref: headerRef, visibleItems: headerItems, getAnimationClasses: getHeaderClasses } = useCinematicSequence(ANIMATION_PRESETS.textFlow);
  const { ref: cardsRef, visibleItems: cardItems, getAnimationClasses: getCardClasses } = useCinematicSequence(ANIMATION_PRESETS.cardSequence);

  return (
    <section className="relative bg-black overflow-hidden">
      <div className="container mx-auto px-6 py-24 relative z-10">
        {/* Header Section - Full Width with animations */}
        <div ref={headerRef} className="text-center mb-20 max-w-6xl mx-auto">
          <div className={`text-sm uppercase tracking-[0.3em] text-primary font-bold mb-4 ${getHeaderClasses(0, ANIMATION_PRESETS.textFlow[0])}`}>
            AUTOMAZIONE STRATEGICA
          </div>
          <div className={getHeaderClasses(1, ANIMATION_PRESETS.textFlow[1])}>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.8] tracking-tight text-white mb-10">
              Servizi per crescere:{" "}
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                marketing, vendite e automazione
              </span>
            </h2>
          </div>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light ${getHeaderClasses(2, ANIMATION_PRESETS.textFlow[2])}`}>
            Affidaci strategia, esecuzione e team operativo in outsourcing — con consulenza direzionale e KPI sempre sotto controllo.
          </p>
        </div>

        {/* Services Cards Grid with staggered animations */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Sales on Demand Card - Premium Blue */}
          <div className={`group relative rounded-3xl p-8 min-h-[600px] flex flex-col justify-between overflow-hidden shadow-2xl ease-out ${getCardClasses(0, ANIMATION_PRESETS.cardSequence[0])} hover:scale-[1.03] transition-transform duration-300`}>
            {/* Premium Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 border border-white/20">
                <div className="w-8 h-8 bg-white rounded-lg shadow-lg" />
              </div>
              
              <h3 className="text-4xl font-black mb-6 leading-tight text-white tracking-tight">
                Sales On Demand
              </h3>
              <p className="text-lg text-white/95 mb-6 leading-relaxed font-light">
                Il tuo reparto vendite on-demand per generare pipeline qualificata e convertire lead in clienti.
              </p>
              
              <div className="space-y-3 mb-6 flex-1">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20 transition-all duration-300 hover:bg-white/15">
                  <span className="text-white font-medium text-sm">● Lead qualificati mensili su canali diversi</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20 transition-all duration-300 hover:bg-white/15">
                  <span className="text-white font-medium text-sm">● Follow-up e closing automatici</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20 transition-all duration-300 hover:bg-white/15">
                  <span className="text-white font-medium text-sm">● Team dedicato senza assunzioni</span>
                </div>
              </div>
            </div>
            
            <Button asChild className="relative z-10 w-full bg-white text-blue-700 hover:bg-white/95 py-6 rounded-2xl text-lg font-bold uppercase tracking-wider transition-all duration-500 hover:scale-[1.02] shadow-xl hover:shadow-2xl">
              <Link to="/sales-on-demand">Prenota audit vendite</Link>
            </Button>
          </div>

          {/* Consulenza Strategica Card - Premium Gray */}
          <div className={`group relative rounded-3xl p-8 min-h-[600px] flex flex-col justify-between overflow-hidden shadow-2xl ease-out ${getCardClasses(1, ANIMATION_PRESETS.cardSequence[1])} hover:scale-[1.03] transition-transform duration-300`}>
            {/* Premium Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 border border-white/20">
                <div className="w-8 h-8 bg-white rounded-lg shadow-lg" />
              </div>
              
              <h3 className="text-4xl font-black mb-6 leading-tight text-white tracking-tight">
                Consulenza Strategica
              </h3>
              <p className="text-lg text-white/95 mb-6 leading-relaxed font-light">
                Direzione operativa e strategica per priorità che spingono il fatturato e accelerano la crescita.
              </p>
              
              <div className="space-y-3 mb-6 flex-1">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20 transition-all duration-300 hover:bg-white/15">
                  <span className="text-white font-medium text-sm">● Roadmap 30 giorni per aumentare pipeline</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20 transition-all duration-300 hover:bg-white/15">
                  <span className="text-white font-medium text-sm">● Direttore vendite & marketing a bordo</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20 transition-all duration-300 hover:bg-white/15">
                  <span className="text-white font-medium text-sm">● KPI, forecast e governance mensile</span>
                </div>
              </div>
            </div>
            
            <Button asChild className="relative z-10 w-full bg-white text-slate-700 hover:bg-white/95 py-6 rounded-2xl text-lg font-bold uppercase tracking-wider transition-all duration-500 hover:scale-[1.02] shadow-xl hover:shadow-2xl">
              <Link to="/consulenza-strategica">Ricevi il piano in 48h</Link>
            </Button>
          </div>

          {/* Automazioni AI Card - Premium Green */}
          <div className={`group relative rounded-3xl p-8 min-h-[600px] flex flex-col justify-between overflow-hidden shadow-2xl ease-out ${getCardClasses(2, ANIMATION_PRESETS.cardSequence[2])} hover:scale-[1.03] transition-transform duration-300`}>
            {/* Premium Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 border border-white/20">
                <div className="w-8 h-8 bg-white rounded-lg shadow-lg" />
              </div>
              
              <h3 className="text-4xl font-black mb-6 leading-tight text-white tracking-tight">
                Automazioni AI
              </h3>
              <p className="text-lg text-white/95 mb-6 leading-relaxed font-light">
                Automazioni intelligenti che trasformano contatti in clienti con meno lavoro umano.
              </p>
              
              <div className="space-y-3 mb-6 flex-1">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20 transition-all duration-300 hover:bg-white/15">
                  <span className="text-white font-medium text-sm">● Chatbot e follow-up 24/7</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20 transition-all duration-300 hover:bg-white/15">
                  <span className="text-white font-medium text-sm">● Video/Avatar personalizzati per conversione</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20 transition-all duration-300 hover:bg-white/15">
                  <span className="text-white font-medium text-sm">● Integrazione CRM e reportistica</span>
                </div>
              </div>
            </div>
            
            <Button asChild className="relative z-10 w-full bg-white text-emerald-700 hover:bg-white/95 py-6 rounded-2xl text-lg font-bold uppercase tracking-wider transition-all duration-500 hover:scale-[1.02] shadow-xl hover:shadow-2xl">
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