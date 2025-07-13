import { useState } from "react";
import { ArrowRight, Zap, Target, Users, Brain, Phone, Headphones, Youtube, Smartphone, Database, Bot, MessageSquare, Sparkles, Crown, Star } from "lucide-react";

const ValuePropositionSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    { 
      title: "Outsourcing vendite", 
      subtitle: "Sales Outsourcing",
      icon: Target,
      gradient: "from-primary via-primary-glow to-accent"
    },
    { 
      title: "Outsourcing marketing", 
      subtitle: "Marketing Outsourcing",
      icon: Zap,
      gradient: "from-accent via-primary-glow to-primary"
    },
    { 
      title: "Strategia su misura", 
      subtitle: "Tailored Strategy",
      icon: Brain,
      gradient: "from-primary-glow via-accent to-primary"
    },
    { 
      title: "Fractional management", 
      subtitle: "Management on Demand",
      icon: Users,
      gradient: "from-accent via-primary to-primary-glow"
    },
    { 
      title: "Automazioni IA", 
      subtitle: "AI Automations",
      icon: Bot,
      gradient: "from-primary via-accent to-primary-glow"
    },
    { 
      title: "Telemarketing", 
      subtitle: "Direct Sales Calls",
      icon: Phone,
      gradient: "from-primary-glow via-primary to-accent"
    },
    { 
      title: "Contact center inbound", 
      subtitle: "Customer Support",
      icon: Headphones,
      gradient: "from-accent via-primary-glow to-primary"
    },
    { 
      title: "Monetizza il tuo YouTube", 
      subtitle: "YouTube Monetization",
      icon: Youtube,
      gradient: "from-primary via-primary-glow to-accent"
    },
    { 
      title: "Web & mobile app", 
      subtitle: "Custom Development",
      icon: Smartphone,
      gradient: "from-primary-glow via-accent to-primary"
    },
    { 
      title: "Piattaforme SaaS", 
      subtitle: "Custom SaaS Platforms",
      icon: Database,
      gradient: "from-accent via-primary to-primary-glow"
    },
    { 
      title: "Tool AI & automazioni", 
      subtitle: "Smart AI Tools",
      icon: Sparkles,
      gradient: "from-primary via-accent to-primary-glow"
    },
    { 
      title: "Chatbot avanzati", 
      subtitle: "Enterprise Chatbots",
      icon: MessageSquare,
      gradient: "from-primary-glow via-primary to-accent"
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary)_/_0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--accent)_/_0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--primary-glow)_/_0.06),transparent_50%)]"></div>
      </div>
      
      {/* Premium Grid Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)_/_0.05)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)_/_0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>
      
      {/* Floating Premium Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-r from-accent/15 to-primary-glow/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-r from-primary-glow/10 to-primary/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Premium Header Section */}
        <div className="text-center max-w-5xl mx-auto mb-24">
          <div className="inline-flex items-center gap-3 mb-8">
            <Crown className="w-6 h-6 text-primary" />
            <span className="text-sm font-bold tracking-wider uppercase px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20 backdrop-blur-sm">
              Premium Solutions
            </span>
            <Crown className="w-6 h-6 text-primary" />
          </div>
          
          <h2 className="text-6xl lg:text-8xl font-black leading-[0.8] tracking-tighter mb-8">
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
              Soluzioni per la Tua
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent relative">
              Crescita
              <div className="absolute -top-4 -right-8 lg:-right-12">
                <Sparkles className="w-8 h-8 lg:w-12 lg:h-12 text-primary animate-pulse" />
              </div>
            </span>
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            <p className="text-xl lg:text-2xl leading-relaxed text-muted-foreground mb-8">
              Trasforma il tuo business con soluzioni innovative e risultati misurabili. 
              <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {" "}L'eccellenza non è un caso, è una scelta.
              </span>
            </p>
          </div>
        </div>

        {/* Premium Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`group relative glass-card rounded-3xl p-8 border transition-all duration-700 cursor-pointer hover:shadow-glow ${
                  hoveredIndex === index ? 'scale-105 shadow-premium' : ''
                } ${isEven ? 'animate-fade-in' : 'animate-scale-in'}`}
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Premium Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-all duration-700`}></div>
                
                {/* Floating Indicator */}
                <div className="absolute -top-3 -right-3">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-premium transition-all duration-500 ${
                    hoveredIndex === index ? 'scale-125 rotate-180' : 'scale-100 rotate-0'
                  }`}>
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                {/* Premium Icon Container */}
                <div className={`relative mb-8 w-20 h-20 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-premium group-hover:shadow-glow group-hover:scale-110 transition-all duration-500`}>
                  <IconComponent className="w-10 h-10 text-white drop-shadow-lg" />
                  <div className="absolute inset-0 rounded-3xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Premium Content */}
                <div className="relative space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                    {service.subtitle}
                  </p>
                </div>

                {/* Premium Hover CTA */}
                <div className={`relative mt-8 transition-all duration-700 ${
                  hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}>
                  <button className={`w-full flex items-center justify-center space-x-3 bg-gradient-to-r ${service.gradient} text-white px-6 py-4 rounded-2xl font-bold shadow-premium hover:shadow-glow transition-all duration-500 group/btn backdrop-blur-sm`}>
                    <span>Scopri di più</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-500" />
                  </button>
                </div>

                {/* Premium Border Glow */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700 -z-10 blur-xl`}></div>
              </div>
            );
          })}
        </div>

        {/* Premium Bottom CTA */}
        <div className="text-center mt-24">
          <div className="inline-block glass-card rounded-3xl p-12 shadow-premium border max-w-4xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                Pronto per l'Eccellenza?
              </h3>
              <Sparkles className="w-6 h-6 text-accent animate-pulse delay-500" />
            </div>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
              Trasforma il tuo business oggi stesso. Scegli la soluzione perfetta per te e inizia il tuo viaggio verso il successo.
            </p>
            <button className="bg-gradient-to-r from-primary via-primary-glow to-accent hover:from-primary/90 hover:via-primary-glow/90 hover:to-accent/90 text-white px-12 py-5 rounded-2xl font-bold text-lg lg:text-xl shadow-premium hover:shadow-glow transition-all duration-500 group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                Inizia il Tuo Percorso
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;