import { useState } from "react";
import { ArrowRight, Users, PhoneCall, Headphones, Megaphone, PieChart, TrendingUp, Youtube, Bot, UserRound, Workflow, Globe, Cloud, Plug } from "lucide-react";
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
      icon: Users,
      accent: "blue",
      path: "/outsourcing-salesforce"
    },
    { 
      title: "Telemarketing & Teleselling", 
      subtitle: "Chiamate commerciali professionali",
      icon: PhoneCall,
      accent: "blue",
      path: "/telemarketing-teleselling"
    },
    { 
      title: "Contact Center Inbound", 
      subtitle: "Supporto clienti professionale",
      icon: Headphones,
      accent: "blue",
      path: "/contact-center-inbound"
    },
    { 
      title: "Outsourcing Marketing", 
      subtitle: "Marketing completo in outsourcing",
      icon: Megaphone,
      accent: "violet",
      path: "/outsourcing-marketing"
    },
    { 
      title: "Audit Vendite", 
      subtitle: "Analisi processi commerciali",
      icon: PieChart,
      accent: "violet",
      path: "/audit-vendite"
    },
    { 
      title: "Consulenza Marketing", 
      subtitle: "Strategia marketing personalizzata",
      icon: TrendingUp,
      accent: "violet",
      path: "/consulenza-marketing"
    },
    { 
      title: "Monetizza YouTube", 
      subtitle: "Trasforma i video in profitti",
      icon: Youtube,
      accent: "violet",
      path: "/monetizza-youtube"
    },
    { 
      title: "Instant Avatar", 
      subtitle: "Avatar AI per video personali",
      icon: UserRound,
      accent: "green",
      path: "/instant-avatar"
    },
    { 
      title: "Chatbot AI", 
      subtitle: "Assistenti virtuali intelligenti",
      icon: Bot,
      accent: "green",
      path: "/chatbot-ai"
    },
    { 
      title: "Automazione AI", 
      subtitle: "Processi automatizzati con AI",
      icon: Workflow,
      accent: "green",
      path: "/automazione-ai"
    },
    { 
      title: "Web & App Development", 
      subtitle: "Sviluppo applicazioni su misura",
      icon: Globe,
      accent: "green",
      path: "/web-app-development"
    },
    { 
      title: "Piattaforme SaaS", 
      subtitle: "Software as a Service personalizzato",
      icon: Cloud,
      accent: "green",
      path: "/saas-platforms"
    },
    { 
      title: "Smart AI Tools", 
      subtitle: "Strumenti AI per il business",
      icon: Bot,
      accent: "green",
      path: "/smart-ai-tools"
    },
    { 
      title: "AI Integration", 
      subtitle: "Integrazione AI nei processi",
      icon: Plug,
      accent: "green",
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
            const accentStyles = {
              blue: {
                container: 'bg-gradient-to-br from-blue-500/25 to-blue-600/20 border-blue-400/30',
                glow: 'shadow-blue-500/20 group-hover:shadow-blue-400/30',
                badge: 'bg-blue-500/15',
                icon: 'text-blue-100'
              },
              violet: {
                container: 'bg-gradient-to-br from-violet-500/25 to-violet-600/20 border-violet-400/30',
                glow: 'shadow-violet-500/20 group-hover:shadow-violet-400/30',
                badge: 'bg-violet-500/15',
                icon: 'text-violet-100'
              },
              green: {
                container: 'bg-gradient-to-br from-green-500/25 to-green-600/20 border-green-400/30',
                glow: 'shadow-green-500/20 group-hover:shadow-green-400/30',
                badge: 'bg-green-500/15',
                icon: 'text-green-100'
              }
            };
            
            const styles = accentStyles[service.accent];
            
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] ease-out ${
                  hoveredIndex === index ? 'scale-[1.02]' : ''
                } ${
                  cardItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => navigate(service.path)}
              >
                {/* Professional Icon Container with Color */}
                <div className="relative mb-8">
                  {/* Background badge */}
                  <div className={`absolute inset-0 w-16 h-16 rounded-xl ${styles.badge} opacity-80`}></div>
                  
                  {/* Main icon container */}
                  <div className={`relative w-16 h-16 rounded-xl ${styles.container} border flex items-center justify-center transition-all duration-300 shadow-lg ${styles.glow} group-hover:scale-110 group-hover:shadow-xl`}>
                    <IconComponent className={`w-8 h-8 ${styles.icon} stroke-[1.75] drop-shadow-sm`} />
                    
                    {/* Inner glow */}
                    <div className="absolute inset-1 bg-white/5 rounded-lg opacity-60"></div>
                  </div>
                  
                  {/* Soft outer glow */}
                  <div className={`absolute inset-0 w-16 h-16 rounded-xl ${styles.container} opacity-40 blur-sm -z-10`}></div>
                </div>

                {/* Content */}
                <div className="relative space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300 font-medium leading-relaxed">
                    {service.subtitle}
                  </p>
                </div>

                {/* Enhanced Hover Button */}
                <div className={`relative mt-8 transition-all duration-300 ${
                  hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <button className={`w-full flex items-center justify-center space-x-3 ${styles.container} text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 group/btn border-0 shadow-lg hover:shadow-xl`}>
                    <span>Scopri di più</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
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