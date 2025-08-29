import React from 'react';
import { Target, Users, BarChart, ArrowRight } from "lucide-react";

interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

interface ConsistentHowItWorksProps {
  steps: HowItWorksStep[];
}

const ConsistentHowItWorks: React.FC<ConsistentHowItWorksProps> = ({ steps }) => {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 bg-primary/10 text-primary border border-primary/20 transition-all duration-300 hover:scale-105 shadow-lg">
            <Target className="w-6 h-6 mr-3" />
            Il Nostro Processo Collaudato
          </div>
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-slate-900 mb-12">
            Come{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Funziona
            </span>
          </h2>
          <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
            Un approccio sistematico che garantisce <span className="font-bold text-primary">risultati certi</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200/50 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                <div className="text-6xl font-black text-primary/20 mb-4">{step.number}</div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
              
              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsistentHowItWorks;