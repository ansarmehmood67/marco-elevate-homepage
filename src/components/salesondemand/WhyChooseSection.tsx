
import { Shield } from "lucide-react";

const WhyChooseSection = () => {
  const whyCards = [
    {
      title: "Converti il costo in servizio",
      description: "Cancella in qualsiasi momento, alte prestazioni garantite"
    },
    {
      title: "Sistema tutto-in-uno",
      description: "Generazione lead + chiusura con esperti"
    },
    {
      title: "Replicabile e scalabile",
      description: "Costruito per crescere con te"
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
        <div className="text-center mb-24 animate-fade-in">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold mb-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-2xl border border-slate-700/20 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-3xl group">
            <Shield className="w-6 h-6 mr-3 group-hover:animate-pulse" />
            <span className="bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">Unmatched Advantages</span>
          </div>
          
          {/* Elegant Typography */}
          <h2 className="text-5xl lg:text-7xl font-black mb-6 leading-tight text-slate-900 tracking-tight">
            Why Choose <br />
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent drop-shadow-sm">
              Sales On Demand
            </span>
          </h2>
          
          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full shadow-lg" />
        </div>
        
        {/* Premium Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {whyCards.map((card, index) => (
            <div 
              key={index} 
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Premium Number Badge */}
              <div className="absolute -top-6 -left-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center text-white font-black text-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 z-10 border border-slate-700/30">
                <span className="bg-gradient-to-br from-white to-slate-200 bg-clip-text text-transparent">
                  {index + 1}
                </span>
              </div>
              
              {/* Elegant Card */}
              <div className="relative p-10 pt-16 rounded-3xl bg-white shadow-[0_20px_70px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_80px_-15px_rgba(0,0,0,0.15)] border border-slate-100 transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 group-hover:border-slate-200 overflow-hidden">
                
                {/* Elegant Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-50/30 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Premium Floating Elements */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-gradient-to-br from-primary to-primary-glow rounded-full"
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
                  <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-slate-900 group-hover:text-primary transition-colors duration-500 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-slate-600 group-hover:text-slate-700 transition-colors duration-500">
                    {card.description}
                  </p>
                  
                  {/* Elegant Accent Line */}
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary-glow mt-8 rounded-full group-hover:w-24 transition-all duration-500 shadow-sm" />
                </div>
                
                {/* Premium Glow Effects */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-glow/10 rounded-full blur-2xl group-hover:blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                {/* Subtle Border Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/0 via-primary-glow/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary-glow/10 group-hover:to-primary/10 transition-all duration-700 pointer-events-none" />
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
