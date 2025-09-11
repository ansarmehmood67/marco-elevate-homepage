import { DollarSign, Users, TrendingUp } from "lucide-react";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: DollarSign,
      title: "Taglia i costi fissi",
      description: "Adatta la tua forza vendita ai tuoi ritmi: amplia nei momenti di picco o riduci nei periodi di calma. Con Sales On Demand hai venditori esperti e prospect già in target, pronti a trasformarsi in clienti.",
      subtext: "✓ Scalabilità immediata, ✓ Esperienza consolidata, ✓ Lead qualificati"
    },
    {
      icon: Users,
      title: "Venditori esperti, risultati reali",
      description: "Con Sales On Demand accedi a venditori qualificati che si integrano nel tuo business con metodo ed esperienza. Un modello flessibile e scalabile che ti permette di avere sempre la forza vendita giusta, esattamente quando serve.",
      subtext: "✓ Professionalità garantita, ✓ Modello scalabile, ✓ Team collaudati"
    },
    {
      icon: TrendingUp,
      title: "Più risultati, meno rischi",
      description: "Con Sales On Demand hai una forza vendita flessibile che si adatta alle esigenze del tuo business: puoi aumentare nei momenti di picco o ridurre nei periodi più tranquilli, mantenendo sempre la massima professionalità e controllo.",
      subtext: "✓ Massima flessibilità, ✓ Team qualificati, ✓ Continuità nei risultati"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-black to-slate-900 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse opacity-30"></div>
      <div className="absolute bottom-32 right-16 w-40 h-40 bg-primary-glow/20 rounded-full blur-3xl animate-pulse delay-1000 opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section - Centered Premium Style */}
        <div className="text-center mb-20">
          <div className="glass-card inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 bg-white/5 text-white border border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-xl">
            ✨ OUTSOURCING PROFESSIONALE
          </div>
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-white mb-12">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent inline-block">
              3 motivi per scegliere
            </span><br />
            <span className="text-white">Sales on Demand</span>
          </h2>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div key={index} className="group">
                <div className="glass-card group hover:shadow-glow transition-all duration-500 hover:scale-[1.02] border-2 border-transparent hover:border-primary/20 relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl h-full">
                  {/* Premium floating light effects */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-primary-glow/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="relative space-y-6 z-10 p-8">
                    {/* Premium Icon */}
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary-glow/10 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg border border-primary/30">
                        <IconComponent className="w-10 h-10 text-primary" />
                      </div>
                    </div>

                    {/* Premium Content */}
                    <div className="space-y-5">
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">{advantage.title}</h3>
                      <p className="text-white/80 leading-relaxed text-base">{advantage.description}</p>
                      
                      {/* Subtext Badge */}
                      <div className="pt-2">
                        <div className="glass-card inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                          <p className="text-sm font-medium text-primary">
                            {advantage.subtext}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;