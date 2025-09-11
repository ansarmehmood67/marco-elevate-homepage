
import { Shield } from "lucide-react";
import ConsistentHeading from "@/components/shared/ConsistentHeading";

const WhyChooseSection = () => {
  const whyCards = [
    {
      title: "Reparto esterno, risultati immediati",
      description: "Un team già pronto che si integra nel tuo business per generare risultati dal primo giorno."
    },
    {
      title: "Metodo consolidato, performance comprovate",
      description: "Un approccio validato su numerosi progetti che garantisce risultati concreti e misurabili."
    },
    {
      title: "Crescita sostenibile e misurabile",
      description: "Un modello scalabile basato su dati e risultati reali per una crescita costante nel tempo."
    }
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      
      
      {/* Premium Background */}
      <div className="absolute inset-0">
        {/* Elegant Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="premium-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="80" height="80" fill="none" stroke="hsl(var(--slate-900))" strokeWidth="1"/>
                <circle cx="40" cy="40" r="2" fill="hsl(var(--slate-900))"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#premium-grid)" />
          </svg>
        </div>
        
        {/* Elegant Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Premium Light Rays */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-primary/5" />
      </div>
      
      <div className="container mx-auto px-6 py-32 relative z-20">
        <ConsistentHeading
          badge="Vantaggi Incomparabili"
          title="Perché scegliere"
          highlightedText="Sales On Demand"
          subtitle="Dalla lead generation alla chiusura: un processo testato su centinaia di progetti."
          theme="light"
        />
        
        {/* Premium Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {whyCards.map((card, index) => (
            <div 
              key={index} 
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Premium Number Badge */}
              <div className="absolute -top-6 -left-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white font-black text-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 z-10 border border-white/30">
                <span className="text-white">
                  {index + 1}
                </span>
              </div>
              
              {/* Elegant Card */}
              <div className="relative p-10 pt-16 rounded-3xl bg-gradient-to-br from-primary to-primary-glow shadow-premium hover:shadow-glow border border-white/20 transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 group-hover:border-white/30 overflow-hidden">
                
                {/* Elegant Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Premium Floating Elements */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full"
                      style={{
                        left: `${20 + i * 20}%`,
                        top: `${30 + i * 15}%`,
                        animation: `pulse 3s ease-in-out infinite`,
                        animationDelay: `${i * 0.8}s`
                      }}
                    />
                  ))}
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-white group-hover:text-white/95 transition-colors duration-500 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-white/90 group-hover:text-white/95 transition-colors duration-500">
                    {card.description}
                  </p>
                  
                  {/* Elegant Accent Line */}
                  <div className="w-16 h-1 bg-white/60 mt-8 rounded-full group-hover:w-24 transition-all duration-500 shadow-sm" />
                </div>
                
                {/* Premium Glow Effects */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                {/* Subtle Border Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/0 via-white/0 to-white/0 group-hover:from-white/10 group-hover:via-white/10 group-hover:to-white/10 transition-all duration-700 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Smooth Transition Bottom */}
      
    </section>
  );
};

export default WhyChooseSection;
