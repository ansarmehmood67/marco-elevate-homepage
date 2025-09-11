import { CheckCircle, Target, Users, BarChart, TrendingUp } from "lucide-react";

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
    <section className="py-32 px-6 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden min-h-screen">
      {/* Flowing Journey Background */}
      <div className="absolute inset-0">
        {/* Curved River-like Background */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <defs>
              <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3"/>
                <stop offset="50%" stopColor="hsl(var(--primary-glow))" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3"/>
              </linearGradient>
            </defs>
            <path d="M0,400 Q300,200 600,400 T1200,300" stroke="url(#flowGrad)" strokeWidth="120" fill="none" opacity="0.4"/>
            <path d="M0,450 Q350,250 650,450 T1200,350" stroke="url(#flowGrad)" strokeWidth="80" fill="none" opacity="0.3"/>
          </svg>
        </div>
        
        {/* Flowing Particles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-primary-glow rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-3/4 right-1/4 w-5 h-5 bg-primary rounded-full animate-pulse delay-1000"></div>
        
        {/* Abstract Landscape Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-800/50 to-transparent"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary-glow/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Journey Header */}
        <div className="text-center mb-32">
          <div className="glass-card inline-flex items-center px-12 py-5 rounded-full text-xl font-black mb-12 bg-gradient-to-r from-primary/20 to-primary-glow/20 text-white border-2 border-primary/30 hover:scale-110 transition-all duration-500 backdrop-blur-xl shadow-2xl">
            <Target className="w-8 h-8 mr-4 animate-spin" style={{ animationDuration: '4s' }} />
            🌊 JOURNEY MAP 🌊
          </div>
          <h2 className="text-6xl lg:text-8xl font-black leading-[0.8] tracking-tight text-white mb-16">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Il Percorso
            </span><br />
            <span className="text-white">del Successo</span>
          </h2>
          <p className="text-2xl lg:text-3xl leading-relaxed text-white/80 max-w-4xl mx-auto font-medium">
            Un viaggio fluido che trasforma le tue vendite in un <span className="font-black text-primary">fiume di opportunità</span>
          </p>
        </div>
        
        {/* Revolutionary Flowing Path Layout */}
        <div className="max-w-8xl mx-auto relative">
          {/* Custom S-Curve Path */}
          <div className="relative">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              // Create S-curve positioning
              const positions = [
                { x: '10%', y: '0%', scale: '0.9' },      // Top-left start
                { x: '80%', y: '25%', scale: '1.1' },     // Top-right curve
                { x: '20%', y: '60%', scale: '1.05' },    // Bottom-left curve  
                { x: '85%', y: '85%', scale: '1.2' }      // Bottom-right finish (largest)
              ];
              
              const pos = positions[index];
              
              return (
                <div key={index} className="absolute group" style={{ 
                  left: pos.x, 
                  top: pos.y, 
                  transform: `translate(-50%, -50%) scale(${pos.scale})`,
                  animationDelay: `${index * 0.3}s`
                }}>
                  
                  {/* Floating Island Card */}
                  <div className="glass-card group hover:shadow-glow transition-all duration-700 hover:scale-110 border-2 border-primary/40 relative overflow-hidden bg-gradient-to-br from-primary/20 to-primary-glow/30 backdrop-blur-xl w-80 lg:w-96 min-h-[320px] rounded-3xl hover:rotate-3 transition-transform">
                    
                    {/* Magical Island Effects */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-primary-glow/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute top-4 right-4 text-2xl animate-spin opacity-70">✨</div>
                    
                    {/* Phase Number Floating Badge */}
                    <div className="absolute -top-8 -left-8 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white font-black text-2xl shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 z-20 border-4 border-white/20">
                      {phase.number}
                    </div>
                    
                    {/* Content */}
                    <div className="p-10 relative z-10 space-y-6">
                      {/* Magical Icon Container */}
                      <div className="flex justify-center mb-6">
                        <div className="w-24 h-24 rounded-3xl flex items-center justify-center bg-gradient-to-br from-primary/30 to-primary-glow/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border-2 border-primary/40">
                          <Icon className="w-12 h-12 text-primary group-hover:scale-125 transition-transform duration-300" />
                        </div>
                      </div>
                      
                      <div className="text-center space-y-4">
                        <h3 className="text-2xl lg:text-3xl font-black text-white group-hover:text-primary transition-colors duration-300">
                          {phase.title}
                        </h3>
                        <p className="text-white/90 leading-relaxed text-lg">
                          {phase.description}
                        </p>
                        
                        {/* Floating Benefit Badge */}
                        <div className="glass-card inline-flex items-center space-x-3 px-5 py-3 rounded-full bg-primary/20 border-2 border-primary/30 group-hover:scale-105 transition-all duration-300 hover:shadow-glow backdrop-blur-sm mt-4">
                          <CheckCircle className="w-5 h-5 text-primary animate-pulse" />
                          <span className="font-bold text-sm text-primary">
                            {phase.benefit}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Flowing Connection Particles */}
                  {index < phases.length - 1 && (
                    <div className="absolute top-1/2 left-full z-30">
                      <div className="flex space-x-2 translate-x-4">
                        <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
                        <div className="w-2 h-2 bg-primary-glow rounded-full animate-ping delay-200"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-ping delay-500"></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            
            {/* Journey Success Indicator */}
            <div className="absolute" style={{ left: '90%', top: '95%', transform: 'translate(-50%, -50%)' }}>
              <div className="glass-card bg-gradient-to-r from-primary to-primary-glow text-white px-8 py-4 rounded-full font-black text-xl animate-bounce shadow-2xl border-2 border-white/30">
                🏆 SUCCESSO!
              </div>
            </div>
          </div>
          
          {/* Journey Path Height Spacer */}
          <div className="h-[800px] lg:h-[900px]"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;