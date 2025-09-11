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
    <section className="py-32 bg-gradient-to-br from-slate-900 via-black to-slate-800 relative overflow-hidden min-h-screen">
      {/* Revolutionary Battle Arena Background */}
      <div className="absolute inset-0">
        {/* Diagonal Split Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-primary/20 transform -skew-y-3 origin-top-left"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-primary/20 via-transparent to-red-900/20 transform skew-y-3 origin-bottom-right"></div>
        
        {/* Electric Battle Elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Revolutionary Header */}
        <div className="text-center mb-32">
          <div className="glass-card inline-flex items-center px-12 py-5 rounded-full text-xl font-black mb-12 bg-gradient-to-r from-red-500/10 via-yellow-400/10 to-primary/10 text-white border-2 border-gradient-to-r border-yellow-400/30 hover:scale-110 transition-all duration-500 backdrop-blur-xl shadow-2xl">
            ⚡ BATTLE ARENA ⚡
          </div>
          <h2 className="text-6xl lg:text-8xl font-black leading-[0.8] tracking-tight text-white mb-16">
            Team tradizionale{" "}
            <span className="block text-6xl lg:text-7xl bg-gradient-to-r from-red-400 via-yellow-400 to-primary bg-clip-text text-transparent animate-pulse">
              ⚔️ SFIDA ⚔️
            </span>{" "}
            Outsourcing forza vendita
          </h2>
        </div>

        {/* Revolutionary Battle Arena Layout */}
        <div className="max-w-8xl mx-auto relative">
          {/* Battle Grid with Asymmetric Positioning */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
            
            {/* Traditional Team Side - Lower/Darker Positioning */}
            <div className="lg:col-span-5 space-y-8 lg:mt-16">
              {/* Team Header - Defeated Look */}
              <div className="text-center mb-12">
                <div className="glass-card inline-flex items-center gap-4 bg-red-600/20 border-2 border-red-500/40 px-10 py-6 rounded-2xl backdrop-blur-xl transform -rotate-2 hover:rotate-0 transition-all duration-500 shadow-xl">
                  <span className="text-3xl animate-bounce">💀</span>
                  <h3 className="text-2xl font-black text-red-400">Team Tradizionale</h3>
                  <span className="text-3xl animate-bounce delay-200">⚰️</span>
                </div>
              </div>
              
              {/* Battle Cards - Defeated Style */}
              <div className="space-y-6">
                {comparisonData.map((row, index) => (
                  <div key={index} className="glass-card group hover:shadow-xl transition-all duration-700 hover:scale-[1.03] border-2 border-red-500/30 relative overflow-hidden bg-gradient-to-br from-red-900/40 to-red-800/20 backdrop-blur-xl transform hover:-rotate-1 transition-transform">
                    {/* Defeat Effects */}
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-red-500/20 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-2 right-2 text-red-400/50 text-xl">💥</div>
                    
                    <div className="flex items-start justify-between p-8 relative z-10">
                      <div className="flex-1">
                        <h4 className="font-black text-red-300 mb-4 text-xl flex items-center gap-3">
                          <span className="text-red-500">❌</span>
                          {row.category}
                        </h4>
                        <p className="text-red-200/80 leading-relaxed text-lg font-medium">
                          {row.traditional}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Central Battle VS Indicator - Electric */}
            <div className="lg:col-span-2 flex items-center justify-center relative">
              <div className="glass-card bg-gradient-to-br from-yellow-400/20 to-orange-500/20 border-4 border-yellow-400/50 rounded-full w-32 h-32 flex flex-col items-center justify-center font-black text-yellow-400 text-2xl backdrop-blur-xl hover:scale-125 transition-all duration-500 shadow-2xl animate-pulse relative">
                {/* Electric Effects */}
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-orange-500 rounded-full animate-bounce"></div>
                <span className="text-3xl">⚡</span>
                <span className="text-lg">VS</span>
                <span className="text-3xl">⚡</span>
              </div>
            </div>

            {/* Sales On Demand Side - Elevated/Victorious */}
            <div className="lg:col-span-5 space-y-8">
              {/* Winner Header - Victory Look */}
              <div className="text-center mb-12">
                <div className="glass-card inline-flex items-center gap-4 bg-primary/20 border-2 border-primary/40 px-10 py-6 rounded-2xl backdrop-blur-xl transform rotate-2 hover:rotate-0 transition-all duration-500 shadow-2xl hover:shadow-glow">
                  <span className="text-3xl animate-bounce">👑</span>
                  <h3 className="text-2xl font-black text-primary">Outsourcing Winner!</h3>
                  <span className="text-3xl animate-bounce delay-200">🏆</span>
                </div>
              </div>
              
              {/* Victory Cards - Winning Style */}
              <div className="space-y-6">
                {comparisonData.map((row, index) => (
                  <div key={index} className="glass-card group hover:shadow-glow transition-all duration-700 hover:scale-[1.05] border-2 border-primary/40 relative overflow-hidden bg-gradient-to-br from-primary/20 to-primary-glow/30 backdrop-blur-xl transform hover:rotate-1 transition-transform">
                    {/* Victory Effects */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-2 right-2 text-primary text-xl animate-spin">⭐</div>
                    <div className="absolute top-2 left-2 text-primary-glow text-lg animate-pulse">✨</div>
                    
                    <div className="flex items-start justify-between p-8 relative z-10">
                      <div className="flex-1">
                        <h4 className="font-black text-primary mb-4 text-xl flex items-center gap-3">
                          <span className="text-primary-glow">✅</span>
                          {row.category}
                        </h4>
                        <p className="text-primary font-bold text-lg leading-relaxed">
                          {row.salesOnDemand}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Victory CTA Section */}
        <div className="text-center max-w-5xl mx-auto">
          <div className="glass-card group hover:shadow-glow transition-all duration-700 hover:scale-[1.03] border-2 border-primary/40 bg-gradient-to-br from-primary/15 to-primary-glow/20 backdrop-blur-xl relative overflow-hidden">
            {/* Victory Floating Elements */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-primary-glow/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute top-4 right-4 text-2xl animate-spin">🏆</div>
            <div className="absolute top-4 left-4 text-2xl animate-bounce">👑</div>
            
            <div className="p-16 relative z-10">
              <p className="text-3xl lg:text-4xl text-white mb-10 leading-relaxed font-bold">
                <span className="bg-gradient-to-r from-yellow-400 to-primary bg-clip-text text-transparent">🏆 IL VINCITORE È CHIARO! 🏆</span><br />
                Non serve partire da zero. Scegli il team vincente.<br />
                <span className="font-black bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Attiva Sales on Demand e domina la battaglia delle vendite!</span>
              </p>
              <button className="glass-card bg-gradient-to-r from-primary to-primary-glow text-white text-xl px-16 py-6 rounded-2xl font-black hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-glow border-2 border-primary/50">
                🚀 Inizia la Vittoria con Sales On Demand →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTableSection;