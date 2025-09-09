import { Button } from "@/components/ui/button";

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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🧩 Team di vendita tradizionale VS Outsourcing forza vendita
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Comparison Container */}
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            
            {/* Traditional Team Side */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-red-100 border border-red-200 px-6 py-3 rounded-full">
                  <span className="text-2xl">❌</span>
                  <h3 className="text-xl font-bold text-red-800">Team di vendita interno tradizionale</h3>
                </div>
              </div>
              
              <div className="space-y-4">
                {comparisonData.map((row, index) => (
                  <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">{row.category}</h4>
                         <p className={`text-gray-700 ${row.category === 'Risultati' ? 'font-bold text-red-600' : ''}`}>
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
                <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 px-6 py-3 rounded-full">
                  <span className="text-2xl">✨</span>
                  <h3 className="text-xl font-bold text-primary">Outsourcing forza vendita</h3>
                </div>
              </div>
              
              <div className="space-y-4">
                {comparisonData.map((row, index) => (
                  <div key={index} className="bg-primary/5 border border-primary/20 rounded-lg p-6 hover:bg-primary/10 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">{row.category}</h4>
                        <p className="text-primary font-medium">{row.salesOnDemand}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* VS Indicator */}
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 hidden lg:block z-10">
            <div className="bg-white border-4 border-primary rounded-full w-16 h-16 flex items-center justify-center font-bold text-primary text-xl shadow-lg">
              VS
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-12 shadow-lg">
            <p className="text-2xl text-gray-900 mb-8 leading-relaxed">
              Non serve partire da zero. Basta collegare Sales on Demand.<br />
              <span className="font-semibold text-primary">Attiva subito un motore di vendita pronto all'uso e inizia a generare clienti dal primo giorno.</span>
            </p>
            <button className="btn-premium text-lg px-12 py-4 rounded-xl font-semibold hover:scale-105 transition-transform">
              Inizia con Sales On Demand →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTableSection;