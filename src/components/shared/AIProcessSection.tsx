import React from 'react';
import { Brain, Settings, Zap, Target } from 'lucide-react';
import { useStaggeredAnimation } from '../../hooks/useScrollAnimation';

// Process data
const processes = [
  {
    number: 1,
    title: "Analisi Approfondita",
    description: "Studiamo il tuo business per identificare le migliori opportunità di automazione AI che genereranno il massimo ROI.",
    benefit: "Strategia Personalizzata",
    icon: Brain
  },
  {
    number: 2,
    title: "Sviluppo Customizzato",
    description: "Creiamo soluzioni AI su misura integrate perfettamente nei tuoi processi esistenti per massimizzare l'efficienza.",
    benefit: "Integrazione Seamless",
    icon: Settings
  },
  {
    number: 3,
    title: "Implementazione Rapida",
    description: "Deploy veloce delle soluzioni AI con training completo del team e supporto continuo durante la transizione.",
    benefit: "Go-Live Immediato",
    icon: Zap
  },
  {
    number: 4,
    title: "Ottimizzazione Continua",
    description: "Monitoraggio costante delle performance AI con miglioramenti incrementali per risultati sempre migliori.",
    benefit: "ROI Crescente",
    icon: Target
  }
];

const AIProcessSection: React.FC = () => {
  const { ref, visibleItems } = useStaggeredAnimation(processes.length, 300);

  return (
    <section id="come-funziona" className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-primary to-slate-900">
      {/* CSS Keyframes */}
      <style>{`
        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.4; }
          33% { transform: translate(30px, -30px) rotate(120deg); opacity: 0.8; }
          66% { transform: translate(-20px, 20px) rotate(240deg); opacity: 0.6; }
        }
        
        @keyframes liquid-flow {
          0%, 100% { border-radius: 2rem 3rem 2rem 3rem; }
          50% { border-radius: 3rem 2rem 3rem 2rem; }
        }
        
        .liquid-card {
          animation: liquid-flow 6s ease-in-out infinite;
        }
      `}</style>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20 animate-pulse"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.03) 40%, rgba(255,255,255,0.03) 60%, transparent 60%)
            `,
            backgroundSize: '60px 60px, 40px 40px, 80px 80px'
          }}
        />
        
        {/* Flowing particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary-glow rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float-particle ${8 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-10 py-5 rounded-full bg-white/10 text-white border border-white/20 text-xl font-black mb-10 transition-all duration-300 hover:scale-105 shadow-xl backdrop-blur-sm">
            🚀 Il Nostro Processo AI
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-8">
            Come Trasformiamo il Tuo Business con l'
            <span className="bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">
              Intelligenza Artificiale
            </span>
          </h2>
          <p className="text-2xl lg:text-3xl text-white/90 leading-relaxed max-w-5xl mx-auto font-medium">
            Un processo collaudato in 4 step che garantisce implementazioni AI di successo, 
            con ROI misurabili e risultati concreti fin dal primo mese.
          </p>
        </div>

        {/* Desktop Layout - Digital Wave Cascade */}
        <div className="hidden lg:block" ref={ref}>
          <div className="space-y-20">
            {processes.map((process, index) => {
              const Icon = process.icon;
              const rotation = [-2, -1, 1, 2][index];
              const offsetX = [0, 12, 6, 18][index]; // Percentage-based offsets
              
              return (
                <div 
                  key={index}
                  className={`opacity-100 transition-all duration-1000 ease-out ${
                    visibleItems[index] 
                      ? 'translate-y-0 scale-100' 
                      : 'translate-y-12 scale-95'
                  }`}
                  style={{ 
                    marginLeft: `${offsetX}%`,
                    transform: `rotate(${rotation}deg)`,
                    transitionDelay: `${index * 300}ms`
                  }}
                >
                  <div className="liquid-card bg-gradient-to-br from-primary via-primary-glow to-primary backdrop-blur-xl border-2 border-white/30 rounded-3xl p-16 shadow-2xl hover:shadow-primary/40 transition-all duration-700 hover:scale-105 hover:-rotate-1 group max-w-4xl border-red-500 border-4">
                    {/* Glowing border effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-8 mb-10">
                        <div className="w-20 h-20 rounded-full bg-white text-primary flex items-center justify-center text-3xl font-black shadow-xl group-hover:scale-110 transition-transform duration-300">
                          {process.number}
                        </div>
                        <div className="px-8 py-4 rounded-full bg-white/20 border border-white/40 text-white font-black text-xl backdrop-blur-sm">
                          ✨ {process.benefit}
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-8">
                        <div className="flex-1">
                          <h3 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight group-hover:text-white/90 transition-colors duration-300">
                            {process.title}
                          </h3>
                          
                          <p className="text-2xl lg:text-3xl text-white/95 leading-relaxed font-medium">
                            {process.description}
                          </p>
                        </div>
                        
                        <div className="flex-shrink-0">
                          <div className="w-32 h-32 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 backdrop-blur-sm">
                            <Icon size={60} className="text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Layout - Vertical Cascade */}
        <div className="lg:hidden">
          <div className="space-y-16" ref={ref}>
            {processes.map((process, index) => {
              const Icon = process.icon;
              const rotation = [-2, 2, -1, 1][index];
              
              return (
                <div 
                  key={index}
                  className={`opacity-100 transition-all duration-1000 ${
                    visibleItems[index] 
                      ? 'translate-y-0 scale-100' 
                      : 'translate-y-12 scale-95'
                  }`}
                  style={{ 
                    transform: visibleItems[index] ? `rotate(${rotation}deg)` : `rotate(${rotation}deg) translateY(20px)`,
                    transitionDelay: `${index * 200}ms`
                  }}
                >
                  <div className="liquid-card bg-gradient-to-br from-primary via-primary-glow to-primary backdrop-blur-xl border-2 border-white/30 rounded-3xl p-10 shadow-xl hover:shadow-primary/30 transition-all duration-500 border-red-500 border-4">
                    <div className="text-center mb-8">
                      <div className="w-28 h-28 rounded-full bg-white text-primary flex items-center justify-center mx-auto mb-8 shadow-xl text-2xl font-black">
                        {process.number}
                      </div>
                      
                      <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full bg-white/10 border border-white/30 flex items-center justify-center backdrop-blur-sm">
                          <Icon size={28} className="text-white" />
                        </div>
                        <div className="px-6 py-3 rounded-full bg-white/20 border border-white/40 text-white font-black text-lg">
                          ✨ {process.benefit}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-4xl sm:text-5xl font-black text-white mb-6 text-center leading-tight">
                      {process.title}
                    </h3>
                    
                    <p className="text-xl sm:text-2xl text-white/95 leading-relaxed text-center font-medium">
                      {process.description}
                    </p>
                  </div>
                  
                  {/* Flowing arrow connector */}
                  {index < processes.length - 1 && (
                    <div className="flex justify-center my-12">
                      <div 
                        className="w-1 h-16 bg-gradient-to-b from-white/60 to-white/20 rounded-full"
                        style={{
                          opacity: visibleItems[index] ? 1 : 0,
                          transition: 'opacity 0.5s ease-out',
                          transitionDelay: `${index * 200 + 300}ms`
                        }}
                      />
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