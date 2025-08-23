import { useState } from "react";
import { ArrowRight, Shield, Building2, Briefcase, Lightbulb, PieChart, TrendingUp, DollarSign, Sparkles, Bot, MessageCircle, Cog, Monitor, Cloud, Gem, Cpu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const ValuePropositionSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const { ref: headerRef, visibleItems: headerItems } = useStaggeredAnimation(3, 120);
  const { ref: cardsRef, visibleItems: cardItems } = useStaggeredAnimation(14, 80);

  const services = [
    { 
      title: "Outsourcing Salesforce", 
      subtitle: "Team vendita dedicato",
      icon: Shield,
      color: "from-blue-500 to-blue-600",
      path: "/outsourcing-salesforce"
    },
    { 
      title: "Telemarketing & Teleselling", 
      subtitle: "Chiamate commerciali professionali",
      icon: Building2,
      color: "from-red-500 to-red-600",
      path: "/telemarketing-teleselling"
    },
    { 
      title: "Contact Center Inbound", 
      subtitle: "Supporto clienti professionale",
      icon: Briefcase,
      color: "from-indigo-500 to-indigo-600",
      path: "/contact-center-inbound"
    },
    { 
      title: "Outsourcing Marketing", 
      subtitle: "Marketing completo in outsourcing",
      icon: Lightbulb,
      color: "from-purple-500 to-purple-600",
      path: "/outsourcing-marketing"
    },
    { 
      title: "Audit Vendite", 
      subtitle: "Analisi processi commerciali",
      icon: PieChart,
      color: "from-emerald-500 to-emerald-600",
      path: "/audit-vendite"
    },
    { 
      title: "Consulenza Marketing", 
      subtitle: "Strategia marketing personalizzata",
      icon: TrendingUp,
      color: "from-orange-500 to-orange-600",
      path: "/consulenza-marketing"
    },
    { 
      title: "Monetizza YouTube", 
      subtitle: "Trasforma i video in profitti",
      icon: DollarSign,
      color: "from-rose-500 to-rose-600",
      path: "/monetizza-youtube"
    },
    { 
      title: "Instant Avatar", 
      subtitle: "Avatar AI per video personali",
      icon: Sparkles,
      color: "from-cyan-500 to-cyan-600",
      path: "/instant-avatar"
    },
    { 
      title: "Chatbot AI", 
      subtitle: "Assistenti virtuali intelligenti",
      icon: MessageCircle,
      color: "from-pink-500 to-pink-600",
      path: "/chatbot-ai"
    },
    { 
      title: "Automazione AI", 
      subtitle: "Processi automatizzati con AI",
      icon: Cog,
      color: "from-violet-500 to-violet-600",
      path: "/automazione-ai"
    },
    { 
      title: "Web & App Development", 
      subtitle: "Sviluppo applicazioni su misura",
      icon: Monitor,
      color: "from-teal-500 to-teal-600",
      path: "/web-app-development"
    },
    { 
      title: "Piattaforme SaaS", 
      subtitle: "Software as a Service personalizzato",
      icon: Cloud,
      color: "from-yellow-500 to-yellow-600",
      path: "/saas-platforms"
    },
    { 
      title: "Smart AI Tools", 
      subtitle: "Strumenti AI per il business",
      icon: Gem,
      color: "from-blue-500 to-cyan-500",
      path: "/smart-ai-tools"
    },
    { 
      title: "AI Integration", 
      subtitle: "Integrazione AI nei processi",
      icon: Cpu,
      color: "from-purple-500 to-pink-500",
      path: "/ai-integration"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M0 0h80v80H0V0zm10 10h60v60H10V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Radial Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-primary-glow/15 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-primary-glow/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-br from-primary-glow/20 to-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-white/5 to-primary/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-1/3 right-1/5 w-2 h-32 bg-gradient-to-b from-primary/30 to-transparent transform rotate-45 animate-pulse delay-500"></div>
      <div className="absolute bottom-1/4 left-1/6 w-1 h-24 bg-gradient-to-t from-primary-glow/40 to-transparent animate-pulse delay-1500"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header Section */}
        <div ref={headerRef} className="text-center max-w-5xl mx-auto mb-24">
          <div className={`inline-block mb-8 group transition-all duration-700 ease-out ${
            headerItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="text-sm font-bold tracking-[0.3em] uppercase px-8 py-4 rounded-full bg-gradient-to-r from-primary/20 to-primary-glow/20 text-primary border border-primary/30 backdrop-blur-sm shadow-lg hover:shadow-primary/20 transition-all duration-300 group-hover:scale-105">
              Premium Solutions
            </span>
          </div>
          
          <h2 className={`text-5xl lg:text-7xl font-black leading-[0.8] tracking-tight text-white mb-10 group transition-all duration-700 ease-out ${
            headerItems[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block transform transition-transform duration-500 group-hover:scale-105">
              Soluzioni per la Tua{" "}
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent inline-block transform transition-transform duration-500 hover:scale-110 ">
              Crescita
            </span>
          </h2>
          
          <p className={`text-xl lg:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto font-light transition-all duration-700 ease-out ${
            headerItems[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Trasforma il tuo business con soluzioni innovative e risultati misurabili.<br />
            <span className="text-primary font-medium">Ogni progetto è su misura per te.</span>
          </p>
          
          {/* Enhanced visual separator */}
          <div className="mt-12 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Enhanced Services Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl transition-all duration-700 cursor-pointer hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-4 hover:scale-105 ease-out ${
                  hoveredIndex === index ? 'scale-105 shadow-primary/40' : ''
                } ${
                  cardItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => navigate(service.path)}
              >
                {/* Enhanced Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-all duration-700`}></div>
                
                {/* Glowing border effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700`}></div>
                
                {/* Enhanced Icon with 3D design and shadow */}
                <div className={`relative mb-8 w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-2xl group-hover:shadow-3xl group-hover:scale-125 transition-all duration-500 border-2 border-white/20`}>
                  <div className="absolute inset-1 bg-white/10 rounded-xl"></div>
                  <IconComponent className="w-12 h-12 text-white drop-shadow-lg stroke-[2] relative z-10" />
                  
                  {/* Enhanced 3D glow effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-60 blur-md transition-all duration-500`}></div>
                  <div className="absolute inset-2 bg-white/5 rounded-lg opacity-50"></div>
                </div>

                {/* Enhanced Content */}
                <div className="relative space-y-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300 font-medium leading-relaxed">
                    {service.subtitle}
                  </p>
                </div>

                {/* Enhanced Hover Button */}
                <div className={`relative mt-8 transition-all duration-700 ${
                  hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}>
                  <button className={`w-full flex items-center justify-center space-x-3 bg-gradient-to-r ${service.color} text-white px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider shadow-2xl hover:shadow-3xl transition-all duration-500 group/btn relative overflow-hidden`}>
                    <span className="relative z-10">Scopri di più</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-500 relative z-10" />
                    
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                  </button>
                </div>

                {/* Enhanced Floating Elements */}
                <div className={`absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r ${service.color} rounded-full shadow-xl transition-all duration-500 ${
                  hoveredIndex === index ? 'scale-150 shadow-2xl' : 'scale-100'
                }`}></div>
                
                {/* Additional floating elements */}
                <div className={`absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-white/20 to-primary/20 rounded-full transition-all duration-700 ${
                  hoveredIndex === index ? 'scale-125 opacity-100' : 'scale-100 opacity-60'
                }`}></div>
                
                {/* Premium corner accent */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/20 group-hover:border-primary/40 transition-colors duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-28">
          <div className="relative inline-block group">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary-glow/20 to-primary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
            
            <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-slate-200/50 transition-all duration-500">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-4xl lg:text-5xl text-slate-900 mb-4 font-bold leading-tight">
                  Pronto a trasformare il tuo business?
                </h3>
                <p className="text-xl text-slate-600 mb-10 font-medium">
                  Scegli la soluzione perfetta per te e inizia oggi stesso
                </p>
                
                <button className="relative bg-gradient-to-r from-primary via-primary-glow to-primary hover:from-primary-glow hover:via-primary hover:to-primary-glow text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl hover:shadow-primary/40 transition-all duration-500 group/btn overflow-hidden transform hover:scale-105 mb-4">
                  <span className="relative z-10 flex items-center justify-center space-x-3">
                    <span>Inizia il Tuo Percorso</span>
                    <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform duration-500" />
                  </span>
                  
                  {/* Button animations */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                </button>
                
                <p className="text-sm text-slate-500">
                  Audit 30 min • Nessun impegno • Risposta entro 2 ore • 500+ clienti
                </p>
              </div>
              
              {/* Corner decorations */}
              <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-slate-300/50 hover:border-primary/60 transition-colors duration-500"></div>
              <div className="absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 border-slate-300/50 hover:border-primary/60 transition-colors duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;