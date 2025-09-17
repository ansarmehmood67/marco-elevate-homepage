const DevelopmentAITeamSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dc1zzgsjw/image/upload/v1757550894/Untitled_design_92_jaekee.png"
          alt="Development AI Team Background"
          className="w-full h-full object-cover"
        />
        {/* Reduced overlay for better background visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-slate-900/40 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        
        {/* Premium gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary-glow/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight text-white mb-12 pb-3 drop-shadow-2xl">
            Team Sviluppo
            <span className="block bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent drop-shadow-xl">
              & AI
            </span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-white/95 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg">
            <span className="font-bold text-primary drop-shadow-lg">Tecnologia che moltiplica le vendite.</span> Integrazioni CRM, automazioni, chatbot e modelli AI su misura. Dati puliti, processi veloci, meno attriti per i team commerciali.
          </p>
          
          {/* Enhanced visual elements */}
          <div className="mt-16 flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-4 hover:bg-white/15 transition-all duration-300">
              <span className="text-white/80 text-lg font-medium">Innovazione • Automazione • Performance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentAITeamSection;