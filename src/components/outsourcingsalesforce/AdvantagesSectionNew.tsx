import ConsistentHeading from "@/components/shared/ConsistentHeading";
import { Scissors, Users, Shield } from "lucide-react";

const AdvantagesSectionNew = () => {
  const advantages = [
    {
      title: "Taglia i costi fissi",
      description: "Adatta la tua forza vendita ai tuoi ritmi: amplia nei momenti di picco o riduci nei periodi di calma. Con Sales On Demand hai venditori esperti e prospect già in target, pronti a trasformarsi in clienti.",
      subtext: "✓ Scalabilità immediata, ✓ Esperienza consolidata, ✓ Lead qualificati",
      backgroundImage: "https://res.cloudinary.com/dufcnrcfe/image/upload/v1757602552/cut_fixed_costs_i5ubsd.png"
    },
    {
      title: "Venditori esperti, risultati reali",
      description: "Con Sales On Demand accedi a venditori qualificati che si integrano nel tuo business con metodo ed esperienza. Un modello flessibile e scalabile che ti permette di avere sempre la forza vendita giusta, esattamente quando serve.",
      subtext: "✓ Professionalità garantita, ✓ Modello scalabile, ✓ Team collaudati",
      backgroundImage: "https://res.cloudinary.com/dufcnrcfe/image/upload/v1757602554/results_rvsxsz.png"
    },
    {
      title: "Più risultati, meno rischi",
      description: "Con Sales On Demand hai una forza vendita flessibile che si adatta alle esigenze del tuo business: puoi aumentare nei momenti di picco o ridurre nei periodi più tranquilli, mantenendo sempre la massima professionalità e controllo.",
      subtext: "✓ Massima flessibilità, ✓ Team qualificati, ✓ Continuità nei risultati",
      backgroundImage: "https://res.cloudinary.com/dufcnrcfe/image/upload/v1757602556/risk_km6avh.png"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-black to-slate-900 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse opacity-30"></div>
      <div className="absolute bottom-32 right-16 w-40 h-40 bg-primary-glow/20 rounded-full blur-3xl animate-pulse delay-1000 opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <ConsistentHeading
          badge="✨ OUTSOURCING PROFESSIONALE"
          title="3 motivi per scegliere"
          highlightedText="Sales on Demand"
          theme="dark"
          className="mb-20"
        />

        {/* Premium Feature Cards with Background Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => (
            <div key={index} className="group">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:shadow-glow">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${advantage.backgroundImage})` }}
                />
                
                {/* Sophisticated Fading Overlay - Darker edges, lighter center */}
                <div className="absolute inset-0 bg-gradient-radial from-primary/15 via-primary/25 to-primary/40"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-glow/20 via-transparent to-primary/30"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
                
                {/* Premium floating light effects */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-white/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative h-full flex flex-col p-8 z-10">
                  {/* Premium Icon at Top */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                      {index === 0 && <Scissors className="w-8 h-8 text-white" />}
                      {index === 1 && <Users className="w-8 h-8 text-white" />}
                      {index === 2 && <Shield className="w-8 h-8 text-white" />}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-6 text-white">
                    {/* Bold White Heading */}
                    <h3 className="text-3xl lg:text-4xl font-black leading-tight group-hover:scale-105 transition-transform duration-300 drop-shadow-lg">
                      {advantage.title}
                    </h3>
                    
                    {/* White Description */}
                    <p className="text-white/95 leading-relaxed text-lg font-medium drop-shadow-sm">
                      {advantage.description}
                    </p>
                    
                    {/* White Bullet Points Badge */}
                    <div className="pt-2">
                      <div className="inline-block px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-sm">
                        <p className="text-sm font-bold text-white drop-shadow-sm">
                          {advantage.subtext}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSectionNew;