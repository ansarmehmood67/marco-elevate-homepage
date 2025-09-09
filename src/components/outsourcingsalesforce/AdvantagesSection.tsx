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
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section - Top Left Aligned */}
        <div className="mb-16">
          <div className="text-left max-w-4xl">
            <div className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-4">
              OUTSOURCING PROFESSIONALE
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.8] tracking-tight text-white mb-10">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent inline-block transform transition-transform duration-500 hover:scale-110">
                3 motivi per scegliere Sales on Demand
              </span>
            </h2>
            
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div key={index} className="group">
                <div className="relative bg-white p-8 rounded-3xl border border-gray-200/20 hover:border-[#2E8BC0]/40 transition-all duration-500 hover:shadow-2xl group-hover:shadow-[#2E8BC0]/20 h-full backdrop-blur-sm overflow-hidden">
                  {/* Premium gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/5 via-transparent to-[#87CEEB]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  
                  {/* Floating light effect */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#2E8BC0]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="relative space-y-6 z-10">
                    {/* Premium Icon */}
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#2E8BC0]/15 to-[#87CEEB]/5 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                        <IconComponent className="w-10 h-10 text-[#2E8BC0]" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Premium Content */}
                    <div className="space-y-5">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#2E8BC0] transition-colors duration-300">{advantage.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-base">{advantage.description}</p>
                      
                      {/* Subtext */}
                      <div className="pt-2">
                        <p className="text-sm font-medium text-[#2E8BC0] bg-[#2E8BC0]/5 px-4 py-2 rounded-full inline-block">
                          {advantage.subtext}
                        </p>
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