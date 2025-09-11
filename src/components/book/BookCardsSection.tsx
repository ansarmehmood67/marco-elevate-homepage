import { Button } from "@/components/ui/button";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { AlertTriangle, CheckCircle, Target, Users } from "lucide-react";

const BookCardsSection = () => {
  const { ref: headerRef, visibleItems: headerItems } = useStaggeredAnimation(3, 120);
  const { ref: cardsRef, visibleItems: cardItems } = useStaggeredAnimation(4, 200);

  return (
    <section className="relative bg-black overflow-hidden">
      <div className="container mx-auto px-6 py-24 relative z-10">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-20 max-w-6xl mx-auto">
          <div className={`text-sm uppercase tracking-[0.3em] text-primary font-bold mb-4 transition-all duration-700 ease-out ${
            headerItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            QUELLO CHE TROVERAI
          </div>
          <h2 className={`text-5xl lg:text-7xl font-black leading-[0.8] tracking-tight text-white mb-10 transition-all duration-700 ease-out ${
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
          <p className={`text-lg sm:text-xl leading-relaxed text-gray-300 max-w-4xl mx-auto transition-all duration-700 ease-out delay-300 ${headerItems[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Dall'analisi del problema alle soluzioni pratiche, tutto quello che serve per trasformare vendite e marketing.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Card 1 - Il Problema */}
          <div className={`group relative rounded-3xl p-10 min-h-[480px] flex flex-col justify-between transition-all duration-700 hover:scale-[1.02] overflow-hidden shadow-2xl ease-out ${
            cardItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Red gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-red-800"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-8">
                <AlertTriangle className="w-12 h-12 text-white" />
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight text-white tracking-tight">
                Il Problema
              </h3>
              
              <p className="text-lg text-white/90 mb-8 leading-relaxed font-normal">
                Perché i tradizionali reparti vendite non funzionano più e come i costi fissi stanno uccidendo la competitività.
              </p>
              
              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base">Analisi dei costi nascosti</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base">Errori più comuni nel recruiting</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base">Inefficienze del modello tradizionale</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - La Soluzione */}
          <div className={`group relative rounded-3xl p-10 min-h-[480px] flex flex-col justify-between transition-all duration-700 hover:scale-[1.02] overflow-hidden shadow-2xl ease-out ${
            cardItems[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Green gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-700 to-emerald-800"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-8">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight text-white tracking-tight">
                La Soluzione
              </h3>
              
              <p className="text-lg text-white/90 mb-8 leading-relaxed font-normal">
                Il modello Sales as a Service: come trasformare la forza vendite in un servizio scalabile e misurabile.
              </p>
              
              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base">Framework operativo completo</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base">Metodologie di outsourcing efficace</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base">Casi studio e risultati reali</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Cosa Imparerai */}
          <div className={`group relative rounded-3xl p-10 min-h-[480px] flex flex-col justify-between transition-all duration-700 hover:scale-[1.02] overflow-hidden shadow-2xl ease-out ${
            cardItems[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Blue gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-primary"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-8">
                <Target className="w-12 h-12 text-white" />
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight text-white tracking-tight">
                Cosa Imparerai
              </h3>
              
              <p className="text-lg text-white/90 mb-8 leading-relaxed font-normal">
                Strategie concrete, template pronti all'uso e checklist operative per implementare subito il metodo.
              </p>
              
              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base">Processo di selezione partner</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base">KPI e metriche di performance</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base">Checklist implementazione</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 - Per Chi */}
          <div className={`group relative rounded-3xl p-10 min-h-[480px] flex flex-col justify-between transition-all duration-700 hover:scale-[1.02] overflow-hidden shadow-2xl ease-out ${
            cardItems[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Purple gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-8">
                <Users className="w-12 h-12 text-white" />
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight text-white tracking-tight">
                Per Chi È
              </h3>
              
              <p className="text-lg text-white/90 mb-8 leading-relaxed font-normal">
                Imprenditori, manager e professionisti che vogliono trasformare vendite e marketing in un vantaggio competitivo.
              </p>
              
              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base">CEO e fondatori di PMI</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base">Direttori commerciali e marketing</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base">Business developer e consulenti</span>
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
            <p className="text-sm text-gray-400">
              Download immediato • Nessun costo nascosto • Contenuto di valore garantito
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCardsSection;