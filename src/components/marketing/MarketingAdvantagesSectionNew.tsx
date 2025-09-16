import ConsistentHeading from "@/components/shared/ConsistentHeading";
import { Target, Zap, TrendingUp } from "lucide-react";

const MarketingAdvantagesSectionNew = () => {
  const advantages = [
    {
      title: "Campagne Mirate",
      description: "Dal targeting avanzato al monitoraggio in tempo reale, ogni azione è ottimizzata per aumentare clienti e conversioni.",
      features: [
        "Segmentazione audience avanzata",
        "A/B testing automatico",
        "Ottimizzazione conversioni",
        "Analytics real-time"
      ],
      backgroundImage: "https://res.cloudinary.com/dufcnrcfe/image/upload/v1757603681/_Targeted_Campaigns_iljq9o.png"
    },
    {
      title: "Automazioni intelligenti",
      description: "Non interventi spot, ma processi potenziati dall'intelligenza artificiale: workflow evoluti che coltivano ogni lead, lo seguono passo dopo passo e lo trasformano in opportunità di business.",
      features: [
        "Email drip campaigns",
        "Lead nurturing sequences",
        "Scoring automatico",
        "Tracking performance"
      ],
      backgroundImage: "https://res.cloudinary.com/dufcnrcfe/image/upload/v1757603685/Intelligent_automations_o5p79s.png"
    },
    {
      title: "ROI incrementale",
      description: "Ogni attività è parte di un processo: così l'investimento cresce nel tempo e produce ritorni sempre più consistenti.",
      features: [
        "Metriche avanzate KPI",
        "Budget optimization",
        "Cost per acquisition",
        "Revenue attribution"
      ],
      backgroundImage: "https://res.cloudinary.com/dufcnrcfe/image/upload/v1757603687/_Incremental_ROI_cp5z6m.png"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 px-4 relative">
          <ConsistentHeading
            badge="Dal marketing spot al processo integrato che genera ROI"
            title="Outsourcing"
            highlightedText="Marketing"
            subtitle="Comprare servizi isolati porta risultati temporanei e spesso inconcludenti. Con un modello di outsourcing basato su strategie integrate trasformiamo il marketing in un motore di crescita misurabile e incrementale."
            theme="dark"
          />
        </div>

        {/* Premium Feature Cards with Background Images */}
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="group">
              <div className="relative min-h-[580px] lg:min-h-[620px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:shadow-glow">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${advantage.backgroundImage})` }}
                />
                
                {/* Enhanced Blue/Black Mixed Overlay for Better Text Visibility */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-primary/45 to-black/80"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/65"></div>
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/35 to-black/55"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/8"></div>
                
                {/* Premium floating light effects */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-white/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative h-full flex flex-col p-8 pb-10 z-10">
                  {/* Premium Icon at Top */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                      {index === 0 && <Target className="w-8 h-8 text-white" />}
                      {index === 1 && <Zap className="w-8 h-8 text-white" />}
                      {index === 2 && <TrendingUp className="w-8 h-8 text-white" />}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-6 text-white">
                    {/* Bold White Heading */}
                    <h3 className="text-3xl lg:text-4xl font-black leading-tight group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                      {advantage.title}
                    </h3>
                    
                    {/* White Description */}
                    <p className="text-white/95 leading-relaxed text-lg font-medium mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {advantage.description}
                    </p>
                    
                    {/* White Bullet Points */}
                    <ul className="space-y-3">
                      {advantage.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-white text-base drop-shadow-sm">
                          <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0 shadow-sm"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
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

export default MarketingAdvantagesSectionNew;