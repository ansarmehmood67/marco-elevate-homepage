import { Button } from "@/components/ui/button";
import ConsistentHeading from "@/components/shared/ConsistentHeading";

const ComparisonTableSection = () => {
  const comparisonData = [
    {
      category: "Tempi di assunzione",
      traditional: "1-3 mesi per reclutare e formare",
      salesOnDemand: "🚀 Attivazione istantanea (team pronto)"
    },
    {
      category: "Costi fissi",
      traditional: "Alti stipendi mensili e benefit",
      salesOnDemand: "💸 Paghi solo quello che usi"
    },
    {
      category: "Scalabilità",
      traditional: "Difficile scalare rapidamente",
      salesOnDemand: "📈 Scala facilmente su o giù in qualsiasi momento"
    },
    {
      category: "Livello di esperienza",
      traditional: "Competenze miste, richiede supervisione",
      salesOnDemand: "🧠 Esperti senior + direttore vendite"
    },
    {
      category: "Strategia di vendita",
      traditional: "Spesso mancante o poco chiara",
      salesOnDemand: "🧭 Metodo di vendita completo + strategia pitch"
    },
    {
      category: "Tecnologia e strumenti",
      traditional: "Devi comprare e gestire CRM/strumenti",
      salesOnDemand: "⚙️ Tutti gli strumenti inclusi (CRM, script, dashboard)"
    },
    {
      category: "Rischio",
      traditional: "Alto - assunzioni sbagliate costano tempo e denaro",
      salesOnDemand: "✅ Basso rischio - team provato e responsabile"
    },
    {
      category: "Risultati",
      traditional: "Avvio lento",
      salesOnDemand: "🏁 Risultati in giorni, non mesi"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-40 h-40 bg-primary-glow/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <ConsistentHeading
            badge="🧩 CONFRONTO STRATEGICO"
            title="Team di vendita tradizionale VS"
            highlightedText="Outsourcing forza vendita"
            theme="light"
          />
        </div>

        {/* Comparison Container */}
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            
            {/* Traditional Team Side */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="glass-card inline-flex items-center gap-3 bg-red-500/10 border-2 border-red-500/20 px-8 py-4 rounded-full backdrop-blur-xl hover:scale-105 transition-all duration-300">
                  <span className="text-2xl">❌</span>
                  <h3 className="text-xl font-bold text-red-600">Team di vendita interno tradizionale</h3>
                </div>
              </div>
              
              <div className="space-y-4">
                {comparisonData.map((row, index) => (
                  <div key={index} className="group hover:shadow-glow transition-all duration-500 hover:scale-[1.02] border-2 border-transparent hover:border-red-500/20 relative overflow-hidden bg-gradient-to-br from-red-50/80 to-white/80 backdrop-blur-xl rounded-xl p-6">
                    {/* Floating light effect */}
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-red-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="flex items-start justify-between relative z-10">
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 mb-3 text-lg">{row.category}</h4>
                         <p className={`text-slate-700 leading-relaxed ${row.category === 'Risultati' ? 'font-bold text-red-600' : ''}`}>
                            {row.category === 'Risultati' ? 'Risultati: Avvio lento' : row.traditional}
                          </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sales On Demand Side */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="glass-card inline-flex items-center gap-3 bg-primary/10 border-2 border-primary/20 px-8 py-4 rounded-full backdrop-blur-xl hover:scale-105 transition-all duration-300 hover:shadow-glow">
                  <span className="text-2xl">✨</span>
                  <h3 className="text-xl font-bold text-primary">Outsourcing forza vendita</h3>
                </div>
              </div>
              
              <div className="space-y-4">
                {comparisonData.map((row, index) => (
                  <div key={index} className="group hover:shadow-glow transition-all duration-500 hover:scale-[1.02] border-2 border-transparent hover:border-primary/20 relative overflow-hidden bg-primary backdrop-blur-xl rounded-xl p-6">
                    {/* Floating light effect */}
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="flex items-start justify-between relative z-10">
                      <div className="flex-1">
                        <h4 className="font-bold text-white mb-3 text-lg">{row.category}</h4>
                        <p className="text-white font-bold text-lg leading-relaxed">{row.salesOnDemand}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* VS Indicator */}
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 hidden lg:block z-20">
            <div className="glass-card bg-primary/8 border-4 border-primary/30 rounded-full w-20 h-20 flex items-center justify-center font-black text-primary text-2xl backdrop-blur-xl hover:scale-110 transition-all duration-300 hover:shadow-glow shadow-2xl">
              VS
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="group hover:shadow-glow transition-all duration-500 hover:scale-[1.02] border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-primary-glow/5 backdrop-blur-xl relative overflow-hidden rounded-xl p-12">
            {/* Premium floating elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary-glow/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <p className="text-2xl lg:text-3xl text-slate-900 mb-8 leading-relaxed">
                Non serve partire da zero. Basta collegare Sales on Demand.<br />
                <span className="font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Attiva subito un motore di vendita pronto all'uso e inizia a generare clienti dal primo giorno.</span>
              </p>
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-white font-semibold px-12 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Inizia con Sales On Demand →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTableSection;