import { Button } from "@/components/ui/button";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { AlertTriangle, CheckCircle, Target, Users } from "lucide-react";

const BookCardsSection = () => {
  const { ref: headerRef, visibleItems: headerItems } = useStaggeredAnimation(3, 120);
  const { ref: cardsRef, visibleItems: cardItems } = useStaggeredAnimation(4, 200);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-gradient-to-br from-primary-glow/8 to-primary/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-transparent to-primary-glow/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-20 max-w-6xl mx-auto">
          <div className={`text-sm uppercase tracking-[0.3em] text-primary font-bold mb-4 transition-all duration-700 ease-out ${
            headerItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            QUELLO CHE TROVERAI
          </div>
          <h2 className={`text-5xl lg:text-7xl font-black leading-[0.8] tracking-tight text-slate-900 mb-10 transition-all duration-700 ease-out ${
            headerItems[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block transform transition-transform duration-500 hover:scale-105">
              Un libro che{" "}
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent inline-block transform transition-transform duration-500 hover:scale-110">
              rivoluziona il tuo approccio
            </span>
          </h2>
          <p className={`text-lg sm:text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto transition-all duration-700 ease-out delay-300 ${headerItems[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Dall'analisi del problema alle soluzioni pratiche, tutto quello che serve per trasformare vendite e marketing.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Card 1 - Il Problema */}
          <div className={`group relative rounded-2xl p-6 lg:p-8 min-h-[420px] flex flex-col justify-between transition-all duration-700 hover:scale-[1.02] overflow-hidden shadow-xl border border-white/60 backdrop-blur-lg ease-out ${
            cardItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Consistent elegant solid background */}
            <div className="absolute inset-0 bg-primary/90"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6">
                <AlertTriangle className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-xl lg:text-2xl font-black mb-3 leading-tight text-white tracking-tight">
                Il Problema
              </h3>
              
              <p className="text-sm lg:text-base text-white/90 mb-6 leading-relaxed font-normal">
                Perché i tradizionali reparti vendite non funzionano più e come i costi fissi stanno uccidendo la competitività.
              </p>
              
              <div className="space-y-3 mb-6 flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-white text-sm">Analisi dei costi nascosti</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-white text-sm">Errori più comuni nel recruiting</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-white text-sm">Inefficienze del modello tradizionale</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - La Soluzione */}
          <div className={`group relative rounded-2xl p-6 lg:p-8 min-h-[420px] flex flex-col justify-between transition-all duration-700 hover:scale-[1.02] overflow-hidden shadow-xl border border-white/60 backdrop-blur-lg ease-out ${
            cardItems[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Consistent elegant solid background */}
            <div className="absolute inset-0 bg-primary/90"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-xl lg:text-2xl font-black mb-3 leading-tight text-white tracking-tight">
                La Soluzione
              </h3>
              
              <p className="text-sm lg:text-base text-white/90 mb-6 leading-relaxed font-normal">
                Il modello Sales as a Service: come trasformare la forza vendite in un servizio scalabile e misurabile.
              </p>
              
              <div className="space-y-3 mb-6 flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-white text-sm">Framework operativo completo</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-white text-sm">Metodologie di outsourcing efficace</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-white text-sm">Casi studio e risultati reali</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Cosa Imparerai */}
          <div className={`group relative rounded-2xl p-6 lg:p-8 min-h-[420px] flex flex-col justify-between transition-all duration-700 hover:scale-[1.02] overflow-hidden shadow-xl border border-white/60 backdrop-blur-lg ease-out ${
            cardItems[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Consistent elegant solid background */}
            <div className="absolute inset-0 bg-primary/90"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-xl lg:text-2xl font-black mb-3 leading-tight text-white tracking-tight">
                Cosa Imparerai
              </h3>
              
              <p className="text-sm lg:text-base text-white/90 mb-6 leading-relaxed font-normal">
                Strategie concrete, template pronti all'uso e checklist operative per implementare subito il metodo.
              </p>
              
              <div className="space-y-3 mb-6 flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-white text-sm">Processo di selezione partner</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-white text-sm">KPI e metriche di performance</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-white text-sm">Checklist implementazione</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 - Per Chi */}
          <div className={`group relative rounded-2xl p-6 lg:p-8 min-h-[420px] flex flex-col justify-between transition-all duration-700 hover:scale-[1.02] overflow-hidden shadow-xl border border-white/60 backdrop-blur-lg ease-out ${
            cardItems[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Consistent elegant solid background */}
            <div className="absolute inset-0 bg-primary/90"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-xl lg:text-2xl font-black mb-3 leading-tight text-white tracking-tight">
                Per Chi È
              </h3>
              
              <p className="text-sm lg:text-base text-white/90 mb-6 leading-relaxed font-normal">
                Imprenditori, manager e professionisti che vogliono trasformare vendite e marketing in un vantaggio competitivo.
              </p>
              
              <div className="space-y-3 mb-6 flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-white text-sm">CEO e fondatori di PMI</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-white text-sm">Direttori commerciali e marketing</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-white text-sm">Business developer e consulenti</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-glow rounded-full blur opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
            <Button
              size="xl"
              className="relative bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-white font-bold px-12 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = "#contact"}
            >
              Scarica il libro gratuito
            </Button>
          </div>
          
          <div className="mt-6">
            <p className="text-sm text-slate-500">
              Download immediato • Nessun costo nascosto • Contenuto di valore garantito
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCardsSection;