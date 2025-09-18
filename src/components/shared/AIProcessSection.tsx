import React from 'react';
import { Sparkles, ArrowRight, Target, Brain, Cog, TrendingUp } from "lucide-react";

const AIProcessSection = () => {
  const processes = [
    {
      number: "01",
      title: "Analisi & Strategia AI",
      description: "Analizziamo i tuoi processi attuali e identifichiamo le opportunità di automazione con AI.",
      benefit: "Strategia personalizzata basata sui tuoi obiettivi",
      icon: Target,
      position: "top"
    },
    {
      number: "02", 
      title: "Implementazione Intelligente",
      description: "Sviluppiamo e integriamo soluzioni AI su misura per il tuo business.",
      benefit: "Automazioni avanzate e workflow ottimizzati",
      icon: Brain,
      position: "left"
    },
    {
      number: "03",
      title: "Monitoraggio & Ottimizzazione", 
      description: "Monitoriamo costantemente le performance e ottimizziamo i risultati.",
      benefit: "Miglioramento continuo e ROI crescente",
      icon: Cog,
      position: "right"
    },
    {
      number: "04",
      title: "Scalabilità & Crescita",
      description: "Espandiamo le soluzioni AI per supportare la crescita del tuo business.",
      benefit: "Crescita sostenibile con tecnologie all'avanguardia",
      icon: TrendingUp,
      position: "bottom"
    }
  ];

  return (
    <section id="come-funziona" className="py-32 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0">
        {/* Animated Neural Network Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--primary-glow))" />
            </linearGradient>
          </defs>
          
          {/* Animated Connection Lines */}
          <g stroke="url(#neuralGradient)" strokeWidth="2" fill="none">
            <path d="M100,200 Q400,100 600,300 T1100,400" className="animate-pulse">
              <animate attributeName="stroke-dasharray" values="0,1000;1000,0;0,1000" dur="8s" repeatCount="indefinite" />
            </path>
            <path d="M200,600 Q500,400 800,200 T1000,600" className="animate-pulse" style={{ animationDelay: '2s' }}>
              <animate attributeName="stroke-dasharray" values="0,800;800,0;0,800" dur="6s" repeatCount="indefinite" />
            </path>
            <path d="M50,400 Q300,600 700,100 T1150,500" className="animate-pulse" style={{ animationDelay: '4s' }}>
              <animate attributeName="stroke-dasharray" values="0,1200;1200,0;0,1200" dur="10s" repeatCount="indefinite" />
            </path>
          </g>
          
          {/* Neural Nodes */}
          <g fill="url(#neuralGradient)" opacity="0.6">
            <circle cx="200" cy="150" r="4" className="animate-pulse" />
            <circle cx="600" cy="250" r="3" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <circle cx="900" cy="400" r="5" className="animate-pulse" style={{ animationDelay: '3s' }} />
            <circle cx="300" cy="550" r="3" className="animate-pulse" style={{ animationDelay: '2s' }} />
            <circle cx="1000" cy="200" r="4" className="animate-pulse" style={{ animationDelay: '4s' }} />
          </g>
        </svg>
        
        {/* Floating Geometric Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary-glow/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-primary/8 transform rotate-45 blur-lg animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 bg-gradient-to-r from-primary to-primary-glow text-white shadow-lg transition-all duration-300 hover:scale-105">
            <Sparkles className="w-6 h-6 mr-3 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="italic">Il Nostro Processo AI</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-slate-900 mb-12">
            Come{" "}
            <span className="text-primary">
              Funziona
            </span>
          </h2>
          <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
            Un approccio sistematico che garantisce <span className="font-bold text-primary">risultati misurabili</span>
          </p>
        </div>

        {/* Neural Network Process Layout */}
        <div className="max-w-6xl mx-auto relative">
          {/* Desktop: Diamond Layout */}
          <div className="hidden lg:block relative min-h-[800px]">
            {/* Central Neural Core */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-2xl border-4 border-white backdrop-blur-sm">
              <Brain className="w-12 h-12 text-white animate-pulse" />
            </div>

            {/* Hexagonal Process Nodes */}
            {processes.map((process, index) => {
              const Icon = process.icon;
              
              // Position calculations for diamond layout
              const positions = {
                top: 'top-0 left-1/2 transform -translate-x-1/2',
                right: 'top-1/2 right-0 transform translate-x-0 -translate-y-1/2',
                bottom: 'bottom-0 left-1/2 transform -translate-x-1/2',
                left: 'top-1/2 left-0 transform -translate-x-0 -translate-y-1/2'
              };

              return (
                <div
                  key={index}
                  className={`absolute ${positions[process.position]} w-80 group`}
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  {/* Hexagonal Card */}
                  <div className="relative">
                    {/* Hexagon Shape */}
                    <div className="hexagon-card relative bg-white/80 backdrop-blur-lg border border-white/40 shadow-2xl hover:shadow-glow transition-all duration-500 hover:scale-105 group-hover:bg-white/90 p-8 rounded-3xl">
                      {/* Glowing Border Effect */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-primary-glow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                      
                      {/* Content */}
                      <div className="relative z-10 text-center space-y-6">
                        {/* Process Number */}
                        <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow text-white font-black text-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                          {process.number}
                        </div>

                        {/* Icon */}
                        <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-glow/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-primary/20">
                          <Icon className="w-10 h-10 text-primary group-hover:text-primary-glow transition-colors duration-300" />
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-primary transition-colors duration-300">
                          {process.title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-600 leading-relaxed text-sm group-hover:text-slate-700 transition-colors duration-300">
                          {process.description}
                        </p>

                        {/* Benefit Badge */}
                        <div className="inline-flex items-center space-x-2 px-4 py-3 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300">
                          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                          <span className="font-semibold text-primary text-xs">
                            {process.benefit}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Connection Lines to Center */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
                      <defs>
                        <linearGradient id={`connection-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="hsl(var(--primary-glow))" stopOpacity="0.3" />
                        </linearGradient>
                      </defs>
                      <path
                        d={`M${process.position === 'top' ? '160' : process.position === 'bottom' ? '160' : process.position === 'left' ? '320' : '0'} ${process.position === 'top' ? '320' : process.position === 'bottom' ? '0' : '160'} L${process.position === 'top' ? '160' : process.position === 'bottom' ? '160' : process.position === 'left' ? '0' : '320'} ${process.position === 'top' ? '0' : process.position === 'bottom' ? '320' : '160'}`}
                        stroke={`url(#connection-${index})`}
                        strokeWidth="3"
                        fill="none"
                        className="opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                        strokeDasharray="5,5"
                      >
                        <animate attributeName="stroke-dashoffset" values="0;-10" dur="2s" repeatCount="indefinite" />
                      </path>
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile: Elegant Vertical Flow */}
          <div className="lg:hidden space-y-12">
            {processes.map((process, index) => {
              const Icon = process.icon;
              return (
                <div key={index} className="relative group" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="bg-white/80 backdrop-blur-lg border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] rounded-3xl p-8 relative overflow-hidden">
                    {/* Glowing Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex items-start space-x-6">
                      {/* Number Badge */}
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow text-white font-black text-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                        {process.number}
                      </div>
                      
                      <div className="flex-1 space-y-4">
                        {/* Icon & Title */}
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors duration-300">
                            {process.title}
                          </h3>
                        </div>
                        
                        {/* Description */}
                        <p className="text-slate-600 leading-relaxed">
                          {process.description}
                        </p>
                        
                        {/* Benefit */}
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20">
                          <Sparkles className="w-4 h-4 text-primary" />
                          <span className="font-semibold text-primary text-sm">
                            {process.benefit}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Connection Arrow */}
                  {index < processes.length - 1 && (
                    <div className="flex justify-center py-6">
                      <ArrowRight className="w-8 h-8 text-primary/60 animate-pulse" />
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