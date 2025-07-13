import { Button } from "@/components/ui/button";

const NewServicesSection = () => {
  return (
    <section className="relative bg-slate-900 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(56,189,248,0.08),transparent_50%)] opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.06),transparent_50%)] opacity-60" />

      <div className="container mx-auto px-6 py-24 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-medium mb-4">
            AUTOMAZIONE STRATEGICA
          </div>
          <h2 className="text-6xl lg:text-8xl font-black leading-[0.9] mb-8">
            <span className="text-white">I NOSTRI</span>
            <br />
            <span className="text-cyan-400">SERVIZI</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Esternalizza vendite e marketing, ricevi consulenza strategica e automatizza con l'AI
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Sales on Demand Card */}
          <div className="group bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl p-8 h-[580px] flex flex-col justify-between text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 leading-tight">
                Sales on Demand
              </h3>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Esternalizza vendite e marketing con un servizio completo chiavi in mano.
              </p>
              
              <div className="space-y-4">
                <div className="text-sm font-bold uppercase tracking-wide bg-white/20 rounded-lg px-4 py-3 backdrop-blur-sm">
                  OUTSOURCING<br />
                  DELLE VENDITE E<br />
                  DEL MARKETING
                </div>
                <div className="text-sm font-bold uppercase tracking-wide bg-white/15 rounded-lg px-4 py-2">
                  LEAD GENERATION E NURTURING
                </div>
                <div className="text-sm font-bold uppercase tracking-wide bg-white/15 rounded-lg px-4 py-2">
                  TELEMARKETING E<br />
                  FOLLOW-UP AUTOMATICI
                </div>
              </div>
            </div>
            
            <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold text-sm uppercase tracking-wide py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative z-10">
              SCOPRI DI PIÙ
            </Button>
          </div>

          {/* Consulenza Strategica Card */}
          <div className="group bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 h-[580px] flex flex-col justify-between text-white shadow-2xl hover:shadow-slate-500/25 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 leading-tight">
                Consulenza<br />
                strategica
              </h3>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Processi di management per vendite e marketing 100% personalizzati.
              </p>
              
              <div className="space-y-4">
                <div className="text-sm font-bold uppercase tracking-wide bg-white/20 rounded-lg px-4 py-3 backdrop-blur-sm">
                  DIRETTORE VENDITE<br />
                  ON DEMAND
                </div>
                <div className="text-sm font-bold uppercase tracking-wide bg-white/15 rounded-lg px-4 py-2">
                  DIRETTORE MARKETING<br />
                  ON DEMAND
                </div>
                <div className="text-sm font-bold uppercase tracking-wide bg-white/15 rounded-lg px-4 py-2">
                  STRATEGIA<br />
                  PERSONALIZZATA<br />
                  in 30 giorni
                </div>
              </div>
            </div>
            
            <Button className="w-full bg-white text-slate-700 hover:bg-slate-50 font-bold text-sm uppercase tracking-wide py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative z-10">
              SCOPRI DI PIÙ
            </Button>
          </div>

          {/* Automazioni AI Card */}
          <div className="group bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 h-[580px] flex flex-col justify-between text-white shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 leading-tight">
                Automazioni AI
              </h3>
              <p className="text-emerald-100 text-lg mb-8 leading-relaxed">
                Intelligenza artificiale al servizio delle tue comunicazioni.
              </p>
              
              <div className="space-y-4">
                <div className="text-sm font-bold uppercase tracking-wide bg-white/20 rounded-lg px-4 py-3 backdrop-blur-sm">
                  CHATBOT AI<br />
                  per siti e messaggistica
                </div>
                <div className="text-sm font-bold uppercase tracking-wide bg-white/15 rounded-lg px-4 py-2">
                  INSTANT AVATAR<br />
                  per video personalizzati
                </div>
                <div className="text-sm font-bold uppercase tracking-wide bg-white/15 rounded-lg px-4 py-2">
                  AUTOMAZIONI<br />
                  Marketing con IA
                </div>
              </div>
            </div>
            
            <Button className="w-full bg-white text-emerald-600 hover:bg-emerald-50 font-bold text-sm uppercase tracking-wide py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative z-10">
              SCOPRI DI PIÙ
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-20">
          <p className="text-2xl lg:text-3xl text-white font-light mb-2">
            Tutto in outsourcing, tutto su misura.
          </p>
          <p className="text-2xl lg:text-3xl text-cyan-400 font-medium mb-8">
            Zero sprechi, solo risultati.
          </p>
          
          <Button className="bg-slate-800 hover:bg-slate-700 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-slate-700/50 transition-all duration-300">
            Scopri di più
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewServicesSection;