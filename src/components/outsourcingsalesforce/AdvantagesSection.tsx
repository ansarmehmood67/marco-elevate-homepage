import { DollarSign, Users, TrendingUp } from "lucide-react";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: DollarSign,
      title: "Taglia i costi fissi",
      description: "Adatta la tua forza vendita ai tuoi ritmi: amplia nei momenti di picco o riduci nei periodi di calma. Con Sales On Demand hai venditori esperti e prospect già in target, pronti a trasformarsi in clienti.",
      subtext: "✓ Scalabilità immediata, ✓ Esperienza consolidata, ✓ Lead qualificati"
    },
    {
      icon: Users,
      title: "Venditori esperti, risultati reali",
      description: "Con Sales On Demand accedi a venditori qualificati che si integrano nel tuo business con metodo ed esperienza. Un modello flessibile e scalabile che ti permette di avere sempre la forza vendita giusta, esattamente quando serve.",
      subtext: "✓ Professionalità garantita, ✓ Modello scalabile, ✓ Team collaudati"
    },
    {
      icon: TrendingUp,
      title: "Più risultati, meno rischi",
      description: "Con Sales On Demand hai una forza vendita flessibile che si adatta alle esigenze del tuo business: puoi aumentare nei momenti di picco o ridurre nei periodi più tranquilli, mantenendo sempre la massima professionalità e controllo.",
      subtext: "✓ Massima flessibilità, ✓ Team qualificati, ✓ Continuità nei risultati"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden min-h-screen">
      {/* 3D Honeycomb Background */}
      <div className="absolute inset-0">
        {/* Geometric Honeycomb Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="hexPattern" x="0" y="0" width="120" height="104" patternUnits="userSpaceOnUse">
                <polygon points="60,2 120,28 120,78 60,104 0,78 0,28" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexPattern)"/>
          </svg>
        </div>
        
        {/* 3D Floating Geometric Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary-glow/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-indigo-400/10 rounded-full blur-xl animate-ping"></div>
        
        {/* Rotating Space Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-full blur-3xl animate-spin" style={{ animationDuration: '120s' }}></div>
      </div>
      
      <div className="max-w-8xl mx-auto px-6 relative z-10">
        {/* 3D Header */}
        <div className="text-center mb-32">
          <div className="glass-card inline-flex items-center px-12 py-5 rounded-full text-xl font-black mb-12 bg-gradient-to-r from-primary/20 to-primary-glow/20 text-white border-2 border-primary/30 hover:scale-110 transition-all duration-500 backdrop-blur-xl shadow-2xl">
            🔮 HEXAGONAL POWER 🔮
          </div>
          <h2 className="text-6xl lg:text-8xl font-black leading-[0.8] tracking-tight text-white mb-16">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent inline-block">
              Vantaggi
            </span><br />
            <span className="text-white">Incomparabili</span>
          </h2>
        </div>

        {/* Revolutionary 3D Hexagon Cluster */}
        <div className="relative max-w-6xl mx-auto">
          {/* Hexagonal Positioning System */}
          <div className="relative h-[800px] lg:h-[900px]">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              
              // Hexagonal cluster positioning with depth
              const positions = [
                { x: '50%', y: '20%', scale: '1.2', zIndex: '30', rotation: '0deg' },    // Top center (focal)
                { x: '15%', y: '60%', scale: '1.0', zIndex: '20', rotation: '-5deg' },   // Bottom left
                { x: '85%', y: '60%', scale: '1.0', zIndex: '20', rotation: '5deg' }     // Bottom right
              ];
              
              const pos = positions[index];
              const isFocal = index === 0;
              
              return (
                <div 
                  key={index} 
                  className="absolute group"
                  style={{
                    left: pos.x,
                    top: pos.y,
                    transform: `translate(-50%, -50%) scale(${pos.scale}) rotate(${pos.rotation})`,
                    zIndex: pos.zIndex,
                    animationDelay: `${index * 0.4}s`
                  }}
                >
                  {/* 3D Hexagonal Card */}
                  <div className={`glass-card group hover:shadow-glow transition-all duration-700 hover:scale-110 border-2 border-primary/40 relative overflow-hidden backdrop-blur-xl rounded-3xl hover:rotate-3 transition-transform ${
                    isFocal 
                      ? 'bg-gradient-to-br from-primary/30 to-primary-glow/40 w-96 lg:w-[420px] min-h-[400px] shadow-2xl' 
                      : 'bg-gradient-to-br from-primary/20 to-primary-glow/30 w-80 lg:w-96 min-h-[360px]'
                  }`}>
                    
                    {/* 3D Depth Effects */}
                    <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary-glow/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Floating Particles */}
                    <div className="absolute top-4 right-4 text-2xl animate-spin opacity-70">⭐</div>
                    <div className="absolute top-4 left-4 text-xl animate-bounce opacity-70">✨</div>
                    {isFocal && <div className="absolute bottom-4 right-4 text-3xl animate-pulse opacity-80">🏆</div>}
                    
                    <div className={`relative space-y-8 z-10 ${isFocal ? 'p-12' : 'p-10'}`}>
                      {/* 3D Hexagonal Icon Container */}
                      <div className="flex justify-center">
                        <div className={`bg-gradient-to-br from-primary/30 to-primary-glow/20 flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl border-2 border-primary/40 ${
                          isFocal 
                            ? 'w-28 h-28 rounded-[2rem] -rotate-6' 
                            : 'w-24 h-24 rounded-3xl'
                        }`}>
                          <IconComponent className={`text-primary group-hover:scale-110 transition-transform duration-300 ${
                            isFocal ? 'w-14 h-14' : 'w-12 h-12'
                          }`} />
                        </div>
                      </div>

                      {/* 3D Content */}
                      <div className="text-center space-y-6">
                        <h3 className={`font-black text-white group-hover:text-primary transition-colors duration-300 ${
                          isFocal ? 'text-3xl lg:text-4xl' : 'text-2xl lg:text-3xl'
                        }`}>
                          {advantage.title}
                        </h3>
                        <p className={`text-white/90 leading-relaxed ${
                          isFocal ? 'text-lg lg:text-xl' : 'text-base lg:text-lg'
                        }`}>
                          {advantage.description}
                        </p>
                        
                        {/* Enhanced Subtext Badge for Focal */}
                        <div className="pt-4">
                          <div className={`glass-card inline-block rounded-full bg-primary/20 border-2 border-primary/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-glow ${
                            isFocal ? 'px-6 py-4' : 'px-5 py-3'
                          }`}>
                            <p className={`font-bold text-primary ${
                              isFocal ? 'text-base' : 'text-sm'
                            }`}>
                              {advantage.subtext}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Connection Lines to Other Hexagons */}
                    {!isFocal && (
                      <>
                        <div className="absolute top-0 left-1/2 w-1 h-20 bg-gradient-to-b from-primary/50 to-transparent -translate-x-1/2 -translate-y-full opacity-60"></div>
                        <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 -translate-y-24 animate-pulse"></div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
            
            {/* Central Connection Hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center font-black text-white text-lg animate-spin shadow-2xl border-4 border-white/20" style={{ animationDuration: '8s' }}>
                ⚡
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;