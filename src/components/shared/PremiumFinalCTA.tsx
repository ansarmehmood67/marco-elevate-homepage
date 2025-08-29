import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Target } from "lucide-react";

interface PremiumFinalCTAProps {
  category: 'consultation' | 'marketing' | 'sales';
}

const PremiumFinalCTA: React.FC<PremiumFinalCTAProps> = ({ category }) => {
  const getContent = () => {
    switch (category) {
      case 'consultation':
        return {
          title: "Pronto per la svolta strategica?",
          subtitle: "Trasforma la confusione in chiarezza con una guida esperta. Inizia oggi il tuo percorso verso risultati misurabili.",
          primaryCTA: "Prenota consulenza",
          secondaryCTA: "Guarda Demo"
        };
      case 'marketing':
        return {
          title: "Pronto per dominare il mercato?",
          subtitle: "Trasforma il tuo marketing in una macchina di lead generation. Inizia oggi il tuo percorso verso risultati misurabili.",
          primaryCTA: "Pianifica campagna",
          secondaryCTA: "Guarda Demo"
        };
      case 'sales':
        return {
          title: "Pronto per moltiplicare le vendite?",
          subtitle: "Trasforma il tuo approccio alle vendite in un sistema prevedibile e scalabile. Inizia oggi il tuo percorso verso risultati straordinari.",
          primaryCTA: "Parla con Sales",
          secondaryCTA: "Quiz 60 secondi"
        };
    }
  };

  const content = getContent();

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-primary-glow/15 to-primary/15 rounded-full filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full filter blur-2xl animate-pulse delay-500" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary-glow/20 backdrop-blur-xl rounded-full border border-primary/30 mb-12 group hover:scale-105 transition-all duration-500">
            <Sparkles className="w-5 h-5 text-primary-glow animate-pulse" />
            <span className="text-primary-glow font-semibold text-lg">Risultati Garantiti</span>
            <Target className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tight text-white mb-8">
            {content.title.split(' ').map((word, index) => {
              const isHighlight = word.includes('svolta') || word.includes('dominare') || word.includes('moltiplicare');
              return (
                <span key={index} className={isHighlight ? 'bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent' : ''}>
                  {word}{' '}
                </span>
              );
            })}
          </h2>
          
          {/* Subtitle */}
          <p className="text-2xl lg:text-3xl text-white/80 mb-16 leading-relaxed max-w-4xl mx-auto font-light">
            {content.subtitle}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Primary CTA */}
            <Button 
              size="xl" 
              className="group relative overflow-hidden bg-gradient-to-r from-primary via-primary-glow to-primary hover:from-primary-glow hover:via-primary hover:to-primary-glow text-white font-bold px-16 py-6 rounded-2xl text-xl shadow-2xl hover:shadow-[0_0_40px_rgba(46,139,192,0.5)] transform hover:scale-105 transition-all duration-500 min-w-[280px]"
            >
              {/* Animated background shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-all duration-1000" />
              
              <span className="flex items-center gap-4 relative z-10">
                <span className="font-black">{content.primaryCTA}</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
            
            {/* Secondary CTA */}
            <Button
              variant="outline"
              size="xl"
              className="group border-2 border-white/30 text-white hover:text-slate-900 hover:bg-white font-bold px-16 py-6 rounded-2xl text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 backdrop-blur-sm min-w-[280px]"
            >
              <span className="flex items-center gap-4">
                <Play className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-semibold">{content.secondaryCTA}</span>
              </span>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-16 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Risposta in 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse delay-300" />
              <span>Consulenza gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-600" />
              <span>No impegno iniziale</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/50 to-transparent" />
    </section>
  );
};

export default PremiumFinalCTA;