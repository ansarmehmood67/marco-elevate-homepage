import { UserPlus, Scissors, Zap, TrendingUp } from "lucide-react";

const WhenToCallSection = () => {
  const cards = [
    {
      icon: UserPlus,
      title: "Venditori subito",
      text: "Con noi eviti selezioni lunghe e costose: hai venditori esperti, già pronti a entrare in azienda e portare risultati."
    },
    {
      icon: Scissors,
      title: "Taglia le spese",
      text: "Dimentica stipendi fissi, contributi e spese inutili che pesano sul bilancio. Con Sales On Demand paghi solo per le performance e trasformi un costo rigido in un investimento che genera vendite reali."
    },
    {
      icon: Zap,
      title: "Adatti il team",
      text: "Il tuo mercato non è sempre uguale, e la tua forza vendita non deve esserlo. Con noi puoi aumentare la capacità nei periodi di picco, ridurla quando serve o mettere in pausa senza vincoli, mantenendo sempre la massima qualità."
    },
    {
      icon: TrendingUp,
      title: "Cresci davvero",
      text: "Tu ti concentri sulla strategia e sulla visione del tuo business, noi ci occupiamo di portare clienti in target e nuove opportunità di fatturato. Ogni attività è tracciata, misurata e orientata a un unico obiettivo: risultati concreti."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 rounded-full text-sm font-bold tracking-[0.3em] uppercase mb-8 transition-all duration-300 hover:scale-105 shadow-lg bg-primary/10 text-primary border border-primary/20">
            QUANDO CHIAMARCI
          </div>
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.8] tracking-tight text-white mb-10">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Le tue esigenze, la nostra risposta
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div key={index} className="group">
                <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-lg transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-[#2E8BC0]/20 hover:-translate-y-2 hover:scale-105 h-full">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/5 to-[#87CEEB]/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                  
                  {/* Icon */}
                  <div className="mb-6 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2E8BC0]/15 to-[#87CEEB]/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                      <IconComponent className="w-8 h-8 text-[#2E8BC0]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-[#2E8BC0] transition-colors duration-300">{card.title}</h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{card.text}</p>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:shadow-xl"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhenToCallSection;