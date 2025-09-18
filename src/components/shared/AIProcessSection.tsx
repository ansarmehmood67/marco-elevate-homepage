import React from 'react';
import { Zap, Users, TrendingUp, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const processes = [
  {
    number: "01",
    title: "Analisi e Strategia",
    description: "Analizziamo i tuoi processi attuali e identifichiamo le opportunità di automazione AI più redditizie per il tuo business specifico.",
    benefit: "Strategia personalizzata in 48 ore",
    icon: Zap
  },
  {
    number: "02", 
    title: "Sviluppo Personalizzato",
    description: "I nostri esperti sviluppano soluzioni AI su misura, integrando chatbot, automazioni e strumenti intelligenti nei tuoi sistemi esistenti.",
    benefit: "Implementazione in 2-4 settimane",
    icon: Users
  },
  {
    number: "03",
    title: "Test e Ottimizzazione", 
    description: "Testiamo ogni funzionalità, ottimizziamo le performance e garantiamo che l'AI funzioni perfettamente con i tuoi workflow aziendali.",
    benefit: "Performance guarantee al 99%",
    icon: TrendingUp
  },
  {
    number: "04",
    title: "Lancio e Supporto",
    description: "Lanciamo le tue soluzioni AI e forniamo supporto continuo per massimizzare il ROI e l'efficacia nel tempo con aggiornamenti costanti.",
    benefit: "Supporto 24/7 incluso",
    icon: CheckCircle
  }
];

const AIProcessSection: React.FC = () => {
  return (
    <section id="come-funziona" className="py-32 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Subtle Circuit Board Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="hsl(var(--primary))" strokeWidth="1"/>
              <circle cx="10" cy="10" r="2" fill="hsl(var(--primary))"/>
              <circle cx="90" cy="90" r="2" fill="hsl(var(--primary))"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 bg-gradient-to-r from-primary to-primary-glow text-white shadow-lg transition-all duration-300 hover:scale-105">
            <Sparkles className="w-6 h-6 mr-3" />
            <span>Il Nostro Processo AI</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight text-slate-900 mb-12">
            Come{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Funziona
            </span>
          </h2>
          <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
            Un approccio sistematico che garantisce <span className="font-bold text-primary">risultati misurabili</span>
          </p>
        </div>

        {/* Process Steps - Desktop Zigzag Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="hidden lg:block space-y-32">
            {processes.map((process, index) => {
              const Icon = process.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex items-center gap-20 ${isEven ? '' : 'flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-primary to-primary-glow p-12 rounded-3xl shadow-2xl text-white relative overflow-hidden group hover:scale-105 transition-all duration-500">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 right-4 w-32 h-32 border border-white/20 rounded-full"></div>
                        <div className="absolute bottom-8 left-8 w-24 h-24 border border-white/20 rounded-full"></div>
                      </div>
                      
                      <div className="relative z-10">
                        {/* Number Badge */}
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full text-3xl font-black mb-8 group-hover:scale-110 transition-transform duration-300">
                          {process.number}
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
                          {process.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-xl lg:text-2xl leading-relaxed mb-8 opacity-90">
                          {process.description}
                        </p>
                        
                        {/* Benefit Badge */}
                        <div className="inline-flex items-center space-x-3 px-6 py-4 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
                          <CheckCircle className="w-6 h-6 text-white" />
                          <span className="font-bold text-lg">
                            {process.benefit}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Icon Circle */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-primary/20 group hover:scale-110 transition-all duration-500">
                      <Icon className="w-16 h-16 text-primary" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Vertical Layout */}
          <div className="lg:hidden space-y-16">
            {processes.map((process, index) => {
              const Icon = process.icon;
              
              return (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-primary to-primary-glow p-10 rounded-3xl shadow-2xl text-white relative overflow-hidden hover:scale-105 transition-all duration-500">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 right-4 w-24 h-24 border border-white/20 rounded-full"></div>
                      <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/20 rounded-full"></div>
                    </div>
                    
                    <div className="relative z-10">
                      {/* Number & Icon */}
                      <div className="flex items-center space-x-6 mb-8">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl font-black">
                          {process.number}
                        </div>
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-3xl font-black mb-6 leading-tight">
                        {process.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-xl leading-relaxed mb-8 opacity-90">
                        {process.description}
                      </p>
                      
                      {/* Benefit Badge */}
                      <div className="inline-flex items-center space-x-3 px-6 py-4 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
                        <CheckCircle className="w-5 h-5 text-white" />
                        <span className="font-bold">
                          {process.benefit}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Connection Arrow */}
                  {index < processes.length - 1 && (
                    <div className="flex justify-center py-8">
                      <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIProcessSection;