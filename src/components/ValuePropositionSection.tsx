import { useState } from "react";
import { ArrowRight, Zap, Target, Users, Brain, Phone, Headphones, Youtube, Smartphone, Database, Bot, MessageSquare } from "lucide-react";

const ValuePropositionSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    { 
      title: "Outsourcing vendite", 
      subtitle: "Sales Outsourcing",
      icon: Target,
      color: "from-blue-500 to-blue-600"
    },
    { 
      title: "Outsourcing marketing", 
      subtitle: "Marketing Outsourcing",
      icon: Zap,
      color: "from-purple-500 to-purple-600"
    },
    { 
      title: "Strategia su misura", 
      subtitle: "Tailored Strategy",
      icon: Brain,
      color: "from-emerald-500 to-emerald-600"
    },
    { 
      title: "Fractional management", 
      subtitle: "Management on Demand",
      icon: Users,
      color: "from-orange-500 to-orange-600"
    },
    { 
      title: "Automazioni IA", 
      subtitle: "AI Automations",
      icon: Bot,
      color: "from-cyan-500 to-cyan-600"
    },
    { 
      title: "Telemarketing", 
      subtitle: "Direct Sales Calls",
      icon: Phone,
      color: "from-red-500 to-red-600"
    },
    { 
      title: "Contact center inbound", 
      subtitle: "Customer Support",
      icon: Headphones,
      color: "from-indigo-500 to-indigo-600"
    },
    { 
      title: "Monetizza il tuo YouTube", 
      subtitle: "YouTube Monetization",
      icon: Youtube,
      color: "from-rose-500 to-rose-600"
    },
    { 
      title: "Web & mobile app", 
      subtitle: "Custom Development",
      icon: Smartphone,
      color: "from-teal-500 to-teal-600"
    },
    { 
      title: "Piattaforme SaaS", 
      subtitle: "Custom SaaS Platforms",
      icon: Database,
      color: "from-yellow-500 to-yellow-600"
    },
    { 
      title: "Tool AI & automazioni", 
      subtitle: "Smart AI Tools",
      icon: Zap,
      color: "from-violet-500 to-violet-600"
    },
    { 
      title: "Chatbot avanzati", 
      subtitle: "Enterprise Chatbots",
      icon: MessageSquare,
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary-glow/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold tracking-wider uppercase px-6 py-3 rounded-full bg-primary/10 text-primary border border-primary/20">
              Premium Solutions
            </span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-slate-900 mb-8">
            Soluzioni per la Tua{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Crescita
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
            Trasforma il tuo business con soluzioni innovative e risultati misurabili
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-lg transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 ${
                  hoveredIndex === index ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium">
                    {service.subtitle}
                  </p>
                </div>

                {/* Hover Button */}
                <div className={`relative mt-6 transition-all duration-500 ${
                  hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <button className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group/btn`}>
                    <span>Scopri di più</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Floating Badge */}
                <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${service.color} rounded-full shadow-lg transition-all duration-500 ${
                  hoveredIndex === index ? 'scale-125 shadow-xl' : 'scale-100'
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-block bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50">
            <p className="text-lg text-slate-700 mb-6 max-w-2xl">
              Pronto a trasformare il tuo business? Scegli la soluzione perfetta per te
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
              Inizia il Tuo Percorso
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;