import React from 'react';
import { Target, Zap, BarChart, Rocket } from 'lucide-react';

const OutsourcingMarketingSection = () => {
  const services = [
    {
      icon: Target,
      title: "Lead Generation B2B",
      description: "Campagne mirate su LinkedIn, email marketing e advertising per generare lead qualificati",
      metrics: "Fino a 200+ lead qualificati/mese"
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description: "Workflow automatizzati per nurturing, scoring e conversione lead in clienti",
      metrics: "85% automazione processi marketing"
    },
    {
      icon: BarChart,
      title: "Performance Tracking",
      description: "Dashboard in tempo reale con ROI, attribution e metriche di conversione complete",
      metrics: "ROI tracciato fino al singolo euro"
    },
    {
      icon: Rocket,
      title: "Growth Hacking",
      description: "Strategie innovative e test rapidi per scalare velocemente i risultati marketing",
      metrics: "Test A/B continui per ottimizzazione"
    }
  ];

  const channels = [
    "LinkedIn Ads & Outreach",
    "Email Marketing Automation",
    "Google Ads & SEO",
    "Content Marketing",
    "Social Media Marketing",
    "Webinar & Events"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 transition-all duration-300 hover:scale-105 shadow-lg bg-primary/10 text-primary border border-primary/20">
            MARKETING DIGITALE AVANZATO
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-12 text-slate-900">
            Outsourcing Marketing e{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Lead Generation
            </span>
          </h2>
          
          <p className="text-xl leading-relaxed max-w-3xl mx-auto text-slate-600">
            Strategie di marketing digitale integrate per generare lead qualificati 
            e aumentare le conversioni. Automazione, performance e ROI trasparente.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-slate-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-primary/20"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="bg-primary/5 rounded-lg p-4">
                <div className="text-primary font-bold text-sm uppercase tracking-wide mb-1">
                  Risultati Tipici
                </div>
                <div className="text-slate-900 font-semibold">
                  {service.metrics}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Channels & Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Channels */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Canali Marketing Integrati</h3>
            <div className="space-y-4">
              {channels.map((channel, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                  <span className="font-medium">{channel}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="text-sm text-white/70 mb-2">Approccio Omnichannel</div>
              <div className="text-lg font-semibold">
                Tutti i canali lavorano insieme per massimizzare i risultati
              </div>
            </div>
          </div>

          {/* Process */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Il nostro processo marketing
            </h3>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Audit & Strategy</h4>
                  <p className="text-slate-600">Analizziamo la situazione attuale e definiamo la strategia marketing più efficace per il tuo settore.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Setup & Launch</h4>
                  <p className="text-slate-600">Configuriamo i canali, creiamo i contenuti e lanciamo le campagne con targeting preciso.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Optimize & Scale</h4>
                  <p className="text-slate-600">Ottimizziamo continuamente le performance e scaliamo le campagne più performanti.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutsourcingMarketingSection;