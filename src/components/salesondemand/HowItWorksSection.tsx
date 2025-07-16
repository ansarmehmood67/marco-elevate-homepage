import { CheckCircle, Target, Users, BarChart, TrendingUp } from "lucide-react";

const HowItWorksSection = () => {
  const phases = [
    {
      number: "01",
      title: "Strategia & Target Personalizzato",
      description: "Definiamo l’offerta, il cliente ideale e un piano per raggiungere gli obiettivi.",
      benefit: "Base strategica allineata alla visione aziendale",
      icon: Target
    },
    {
      number: "02", 
      title: "Contatti & Primo Approccio",
      description: "Creiamo liste di lead e li contattiamo via chiamate, email e messaggi.",
      benefit: "Lead qualificati e processo testato di contatto",
      icon: Users
    },
    {
      number: "03",
      title: "CRM & Azioni di Follow-up", 
      description: "Tracciamo ogni contatto nel CRM con azioni mirate e automazioni smart.",
      benefit: "Pipeline chiara e gestione continua dei lead",
      icon: BarChart
    },
    {
      number: "04",
      title: "Chiusura & Scalabilità",
      description: "Misuriamo i risultati, chiudiamo di più e facciamo crescere ciò che funziona.",
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
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 bg-primary/10 text-primary border border-primary/20 transition-all duration-300 hover:scale-105 shadow-lg">
            <Target className="w-6 h-6 mr-3 animate-spin" style={{ animationDuration: '3s' }} />
            Our Proven 4-Phase Process
          </div>
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-slate-900 mb-12">
            How It{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
            A systematic approach that delivers <span className="font-bold text-primary">guaranteed results</span>
          </p>
        </div>
        
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
                  <div className="relative p-10 rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-700 hover:scale-105 group-hover:rotate-1 overflow-hidden">
                    
                    {/* Animated background particles */}
                    <div className="absolute inset-0 opacity-20">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-primary rounded-full animate-pulse"
                          style={{
                            left: `${10 + i * 12}%`,
                            top: `${10 + i * 15}%`,
                            animationDelay: `${i * 0.3}s`
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Icon Section */}
                    <div className="flex items-start space-x-8 relative z-10">
                      <div className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary-glow/10 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                        <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-3xl lg:text-4xl font-black mb-6 text-slate-900 group-hover:text-primary transition-colors duration-300">
                          {phase.title}
                        </h3>
                        <p className="text-xl lg:text-2xl mb-8 text-gray-700 leading-relaxed">
                          {phase.description}
                        </p>
                        
                        {/* Benefit Badge */}
                        <div className="inline-flex items-center space-x-3 px-6 py-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:scale-105 transition-transform duration-300">
                          <CheckCircle className="w-6 h-6 text-primary animate-pulse" />
                          <span className="font-bold text-lg text-primary">
                            {phase.benefit}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl group-hover:blur-xl transition-all duration-500" />
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-glow/20 rounded-full blur-2xl group-hover:blur-xl transition-all duration-500" />
                  </div>
                  
                  {/* Connection Line */}
                  {index < phases.length - 1 && (
                    <div className={`hidden lg:block absolute ${isEven ? 'right-0 top-1/2' : 'left-0 top-1/2'} w-16 h-1 bg-gradient-to-r from-primary to-primary-glow ${isEven ? 'translate-x-full' : '-translate-x-full'} -translate-y-1/2 animate-pulse`} />
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