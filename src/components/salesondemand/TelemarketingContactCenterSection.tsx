import React from 'react';
import { Phone, HeadphonesIcon, Users, BarChart3 } from 'lucide-react';

const TelemarketingContactCenterSection = () => {
  const services = [
    {
      icon: Phone,
      title: "Telemarketing B2B Outbound",
      description: "Campagne telefoniche per generazione lead qualificati e appuntamenti commerciali",
      features: ["Script personalizzati", "Lead qualificati", "Appointment setting", "Follow-up strutturato"]
    },
    {
      icon: HeadphonesIcon,
      title: "Contact Center Inbound",
      description: "Gestione professionale chiamate in entrata e supporto clienti multicanale",
      features: ["Supporto 24/7", "Chat e email", "SLA garantiti", "Quality assurance"]
    }
  ];

  const stats = [
    { value: "85%", label: "Tasso di conversione lead" },
    { value: "< 3s", label: "Tempo medio risposta" },
    { value: "98%", label: "Soddisfazione clienti" },
    { value: "24/7", label: "Copertura disponibile" }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 transition-all duration-300 hover:scale-105 shadow-lg bg-white/10 text-white border border-white/20">
            SERVIZI TELEFONICI PROFESSIONALI
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-12 text-white">
            Telemarketing B2B e{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Contact Center Inbound
            </span>
          </h2>
          
          <p className="text-xl leading-relaxed max-w-3xl mx-auto text-white/80">
            Servizi telefonici professionali per generazione lead, vendite dirette 
            e customer care. Operatori specializzati e tecnologie avanzate.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-white/80 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-white/70">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-2xl p-8 border border-primary/20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl">
            Richiedi Demo Gratuita
          </button>
          <p className="text-white/60 mt-4">
            Scopri come i nostri servizi telefonici possono far crescere il tuo business
          </p>
        </div>
      </div>
    </section>
  );
};

export default TelemarketingContactCenterSection;