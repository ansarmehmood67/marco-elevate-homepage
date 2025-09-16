import { CheckCircle, Target, Users, BarChart, TrendingUp } from "lucide-react";
import ConsistentHeading from "@/components/shared/ConsistentHeading";

const HowItWorksSection = () => {
  const phases = [
    {
      number: "01",
      title: "Target Personalizzato",
      description: "Identifichiamo il cliente ideale e costruiamo un target efficace per massimizzare il successo del tuo business.",
      benefit: "Base strategica allineata alla visione aziendale",
      icon: Target
    },
    {
      number: "02", 
      title: "Generazione Lead & Primo Ingaggio",
      description: "Generiamo lead in target e avviamo interazioni multicanale per creare opportunità concrete di business.",
      benefit: "Lead qualificati e processo testato di contatto",
      icon: Users
    },
    {
      number: "03",
      title: "Tracciamento & Follow-up", 
      description: "Tracciamo ogni contatto con azioni mirate e automazioni intelligenti per non perdere nessuna opportunità.",
      benefit: "Pipeline chiara e gestione continua dei lead",
      icon: BarChart
    },
    {
      number: "04",
      title: "Chiusura & Scalabilità",
      description: "Misuriamo i risultati, chiudiamo più contratti e facciamo crescere ciò che funziona per garantire crescita sostenibile.",
      benefit: "Crescita su ROI e sistema commerciale ottimizzato",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary-glow/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto relative z-10">
        <ConsistentHeading
          badge="Come funziona"
          title="Come"
          highlightedText="Funziona"
          subtitle="Un approccio sistematico che garantisce risultati concreti"
          theme="light"
        />
        
        {/* Revolutionary Timeline Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`group relative ${isEven ? 'lg:mr-8' : 'lg:ml-8 lg:mt-16'}`}>
                  {/* Phase Number Badge */}
                  <div className={`absolute -top-6 ${isEven ? '-left-6' : '-right-6'} w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white font-black text-xl shadow-2xl group-hover:scale-110 transition-transform duration-300 z-10`}>
                    {phase.number}
                  </div>
                  
                   {/* Main Card */}
                   <div className="bg-primary group hover:shadow-glow transition-all duration-500 hover:scale-[1.02] border-2 border-transparent hover:border-white/20 relative overflow-hidden p-10 rounded-xl">
                    
                    {/* Premium floating light effects */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Icon Section */}
                    <div className="flex items-start space-x-8 relative z-10">
                      <div className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center bg-white/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg border border-white/30">
                        <Icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-3xl lg:text-4xl font-black mb-6 text-white group-hover:text-white/90 transition-colors duration-300">
                          {phase.title}
                        </h3>
                        <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
                          {phase.description}
                        </p>
                        
                        {/* Benefit Badge */}
                        <div className="inline-flex items-center space-x-3 px-6 py-4 rounded-2xl bg-white/20 border border-white/30 group-hover:scale-105 transition-all duration-300 hover:shadow-glow backdrop-blur-sm">
                          <CheckCircle className="w-6 h-6 text-white animate-pulse" />
                          <span className="font-bold text-lg text-white">
                            {phase.benefit}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  
                  {/* Connection Line */}
                  {index < phases.length - 1 && (
                    <div className={`hidden lg:block absolute ${isEven ? 'right-0 top-1/2' : 'left-0 top-1/2'} w-16 h-1 bg-gradient-to-r from-white to-white/60 ${isEven ? 'translate-x-full' : '-translate-x-full'} -translate-y-1/2 animate-pulse`} />
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

export default HowItWorksSection;