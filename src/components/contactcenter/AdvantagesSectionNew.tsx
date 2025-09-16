import ConsistentHeading from "@/components/shared/ConsistentHeading";
import { MessageCircle, Clock, Heart } from "lucide-react";

const AdvantagesSectionNew = () => {
  const advantages = [
    {
      title: "Supporto Multicanale",
      features: [
        "Una sola piattaforma per gestire tutte le comunicazioni",
        "Messaggi coerenti su ogni canale",
        "Smistamento intelligente delle chiamate",
        "Integrazione con social e strumenti digitali"
      ],
      backgroundImage: "https://res.cloudinary.com/dufcnrcfe/image/upload/v1757603304/riskMulti-Channel_Support_umv5ys.png"
    },
    {
      title: "Tempi di Risposta Rapidi",
      features: [
        "Tempi di risposta garantiti",
        "Gestione avanzata delle code di attesa",
        "Procedure dedicate per i casi urgenti",
        "Supporto per i clienti strategici"
      ],
      backgroundImage: "https://res.cloudinary.com/dufcnrcfe/image/upload/v1757603336/_Quick_Response_Times_akw01t.png"
    },
    {
      title: "Soddisfazione del Cliente",
      features: [
        "Procedure snelle e collaudate che ci rendono competitivi anche rispetto ai grandi player",
        "Un team agile e flessibile, ideale per supportare le esigenze delle medie aziende",
        "Controllo qualità costante e monitoraggio continuo delle performance",
        "Raccolta e analisi dei feedback per migliorare ogni interazione"
      ],
      backgroundImage: "https://res.cloudinary.com/dufcnrcfe/image/upload/v1757603341/_Customer_Satisfaction_kzxqg2.png"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary-glow/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="mb-16 px-4 relative">
          <ConsistentHeading
            badge="I NOSTRI VANTAGGI"
            title="I Nostri"
            highlightedText="Punti di Forza"
            subtitle="Vantaggi concreti che migliorano l'esperienza cliente e ottimizzano le performance aziendiali."
            theme="dark"
          />
        </div>

        {/* Premium Feature Cards with Background Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="group">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:shadow-glow">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${advantage.backgroundImage})` }}
                />
                
                {/* Enhanced Blue/Black Mixed Overlay for Better Text Visibility */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-primary/40 to-black/70"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60"></div>
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/50"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/8"></div>
                
                {/* Premium floating light effects */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-white/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative h-full flex flex-col p-8 z-10">
                  {/* Premium Icon at Top */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                      {index === 0 && <MessageCircle className="w-8 h-8 text-white" />}
                      {index === 1 && <Clock className="w-8 h-8 text-white" />}
                      {index === 2 && <Heart className="w-8 h-8 text-white" />}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-6 text-white">
                    {/* Bold White Heading */}
                    <h3 className="text-3xl lg:text-4xl font-black leading-tight group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                      {advantage.title}
                    </h3>
                    
                    {/* White Bullet Points */}
                    <ul className="space-y-3">
                      {advantage.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-white text-base drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                          <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0 shadow-sm"></div>
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

export default AdvantagesSectionNew;