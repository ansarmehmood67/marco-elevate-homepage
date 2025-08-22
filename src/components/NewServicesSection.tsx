import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NewServicesSection = () => {
  return (
    <section className="relative bg-black overflow-hidden">
      <div className="container mx-auto px-6 py-24 relative z-10">
        {/* Header Section - Full Width with animations */}
        <div className="text-center mb-20 max-w-6xl mx-auto">
          <div className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-4">
            AUTOMAZIONE STRATEGICA
          </div>
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] mb-8">
            <span className="text-white">Servizi per crescere:</span>
            <br />
            <span className="text-primary">marketing, vendite e automazione</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Affidaci strategia, esecuzione e team operativo in outsourcing — con consulenza direzionale e KPI sempre sotto controllo.
          </p>
        </div>

        {/* Services Cards Grid with staggered animations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Sales on Demand Card - Blue */}
          <div className="group bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 h-[580px] flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] relative overflow-hidden shadow-xl">
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
          <div className="group bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl p-8 h-[580px] flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] relative overflow-hidden shadow-xl">
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
          <div className="group bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-8 h-[580px] flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] relative overflow-hidden shadow-xl">
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

        {/* Bottom Section - Enhanced with trust microcopy */}
        <div className="text-center mt-24">
          <div className="bg-white rounded-3xl p-12 max-w-4xl mx-auto shadow-xl">
            <h3 className="text-4xl lg:text-5xl text-black font-bold mb-6 leading-tight">
              Trasforma il tuo business con soluzioni su misura
            </h3>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Un team dedicato che prende in mano i tuoi funnel B2B, ottimizza performance e libera il tuo tempo
            </p>
            
            <div className="mb-8">
              <img 
                src="/lovable-uploads/4942e788-ba8d-426d-bd98-bf362a153c59.png"
                alt="Sales on Demand Logo"
                className="h-16 mx-auto"
              />
            </div>
            
            <Button className="bg-primary hover:bg-primary/90 text-white px-16 py-6 rounded-full text-xl font-black uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-lg mb-4">
              Prenota consulenza
            </Button>
            
            <p className="text-sm text-slate-500">
              Audit 30 min • Nessun impegno • Risposta entro 2 ore • 500+ clienti
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewServicesSection;