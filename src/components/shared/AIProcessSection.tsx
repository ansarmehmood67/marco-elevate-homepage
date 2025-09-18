import React from 'react';
import { useStaggeredAnimation } from '../../hooks/useScrollAnimation';
import { Brain, Settings, Zap, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const processes = [
  {
    number: '01',
    title: 'Analisi Approfondita',
    description: 'Studiamo il tuo business per identificare le opportunità AI più impattanti per il tuo ROI.',
    benefit: 'Strategia Personalizzata',
    icon: Brain
  },
  {
    number: '02',
    title: 'Sviluppo Customizzato',
    description: 'Creiamo soluzioni AI integrate perfettamente nei tuoi processi esistenti.',
    benefit: 'Integrazione Seamless',
    icon: Settings
  },
  {
    number: '03',
    title: 'Implementazione Rapida',
    description: 'Deploy veloce con training completo del team e supporto continuo.',
    benefit: 'Go-Live Immediato',
    icon: Zap
  },
  {
    number: '04',
    title: 'Ottimizzazione Continua',
    description: 'Monitoraggio performance e miglioramenti incrementali per risultati crescenti.',
    benefit: 'ROI Crescente',
    icon: Target
  }
];

const AIProcessSection: React.FC = () => {
  const { ref, visibleItems } = useStaggeredAnimation(processes.length, 200);

  return (
    <section id="come-funziona" className="relative py-24 bg-gradient-to-br from-background via-background/98 to-primary/3 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary-glow/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Clean Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Il Nostro Processo <span className="text-primary">AI</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Una metodologia collaudata che trasforma le aziende attraverso l'intelligenza artificiale
          </p>
        </div>

        {/* Process Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {processes.map((process, index) => {
            const Icon = process.icon;
            
            return (
              <div 
                key={index}
                className={`transition-all duration-700 ease-out ${
                  visibleItems[index] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <Card className="group hover:scale-[1.01] transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      {/* Process Number & Icon */}
                      <div className="flex-shrink-0 text-center">
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-3 group-hover:bg-white/15 transition-colors">
                          <Icon size={24} className="text-primary" />
                        </div>
                        <div className="text-2xl font-bold text-primary">
                          {process.number}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-white mb-3">
                          {process.title}
                        </h3>
                        <p className="text-white/70 mb-4 leading-relaxed">
                          {process.description}
                        </p>
                        <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                          <Zap className="w-4 h-4 text-primary mr-2" />
                          <span className="text-sm font-medium text-primary">{process.benefit}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIProcessSection;