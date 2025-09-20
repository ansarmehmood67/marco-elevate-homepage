import React from 'react';
import { Award, Users, TrendingUp, Clock, Shield, Star } from 'lucide-react';

const WhyChooseSalesOnDemandSection = () => {
  const reasons = [
    {
      icon: Users,
      title: "500+ Aziende Servite",
      description: "Abbiamo aiutato oltre 500 aziende italiane a crescere con il nostro metodo validato",
      stat: "500+"
    },
    {
      icon: TrendingUp,
      title: "Crescita Media +180%",
      description: "I nostri clienti registrano in media un aumento del 180% delle vendite nei primi 12 mesi",
      stat: "+180%"
    },
    {
      icon: Clock,
      title: "Attivi in 14 Giorni",
      description: "Dal contratto all'operatività: il tuo team commerciale è attivo in massimo 2 settimane",
      stat: "14gg"
    },
    {
      icon: Shield,
      title: "Garanzia Risultati",
      description: "Se non raggiungi gli obiettivi concordati nei primi 90 giorni, rimborsiamo il servizio",
      stat: "100%"
    },
    {
      icon: Award,
      title: "Certificazioni ISO",
      description: "Processi certificati ISO 9001 per qualità e ISO 27001 per sicurezza dei dati",
      stat: "ISO"
    },
    {
      icon: Star,
      title: "96% Retention Rate",
      description: "Il 96% dei nostri clienti rinnova il servizio anno dopo anno",
      stat: "96%"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 transition-all duration-300 hover:scale-105 shadow-lg bg-primary/10 text-primary border border-primary/20">
            LA SCELTA VINCENTE
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-12 text-slate-900">
            Perché scegliere{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Sales On Demand
            </span>
          </h2>
          
          <p className="text-xl leading-relaxed max-w-3xl mx-auto text-slate-600">
            Non siamo solo fornitori, siamo il tuo partner strategico per la crescita. 
            500+ aziende clienti hanno scelto il nostro metodo per trasformare le loro vendite.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:border-primary/20"
            >
              {/* Icon and Stat */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-3xl font-black text-primary">
                  {reason.stat}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {reason.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial Quote */}
        <div className="bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-8 lg:p-12 text-white text-center">
          <div className="text-6xl text-white/20 mb-4">"</div>
          <blockquote className="text-2xl lg:text-3xl font-bold mb-6 leading-relaxed">
            "In 6 mesi abbiamo triplicato il fatturato grazie al team Sales On Demand. 
            Professionalità e risultati concreti che parlano da soli."
          </blockquote>
          <div className="text-lg font-semibold text-white/90">
            Alessandro Rossi, CEO TechSolutions Italia
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-6">
            Unisciti alle 500+ aziende che hanno scelto Sales On Demand
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl">
              Richiedi Audit Gratuito
            </button>
            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
              Scarica Case Study
            </button>
          </div>
          
          <p className="text-slate-500 mt-4">
            30 minuti di consulenza gratuita per analizzare il tuo potenziale di crescita
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSalesOnDemandSection;