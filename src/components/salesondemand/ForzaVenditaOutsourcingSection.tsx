import React from 'react';
import { Clock, Users, TrendingUp, CheckCircle } from 'lucide-react';

const ForzaVenditaOutsourcingSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Attivazione rapida",
      description: "Team operativo in 2-3 settimane, non mesi"
    },
    {
      icon: Users,
      title: "Venditori qualificati",
      description: "Professionisti con esperienza comprovata nel B2B"
    },
    {
      icon: TrendingUp,
      title: "Scalabilità flessibile",
      description: "Adatta il team alle tue esigenze stagionali"
    },
    {
      icon: CheckCircle,
      title: "Metodo validato",
      description: "Processi testati su 500+ aziende clienti"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 transition-all duration-300 hover:scale-105 shadow-lg bg-primary/10 text-primary border border-primary/20">
            FORZA VENDITA IN OUTSOURCING
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-12 text-slate-900">
            Forza vendita in outsourcing:{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              come funziona
            </span>
          </h2>
          
          <p className="text-xl leading-relaxed max-w-3xl mx-auto text-slate-600">
            Un team commerciale esterno dedicato che opera come se fosse interno alla tua azienda. 
            Venditori a noleggio con metodologie validate e risultati misurabili.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Il processo in 3 fasi
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Audit e Setup</h4>
              <p className="text-slate-600">
                Analizziamo la tua situazione attuale e definiamo strategia, 
                target e processi personalizzati per il tuo mercato.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Team Building</h4>
              <p className="text-slate-600">
                Selezioniamo e formiamo venditori specializzati nel tuo settore, 
                integrandoli con i tuoi sistemi CRM e processi aziendali.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Execution & Scaling</h4>
              <p className="text-slate-600">
                Partiamo con l'attività commerciale, monitoriamo i KPI 
                e scaliamo il team in base ai risultati ottenuti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForzaVenditaOutsourcingSection;