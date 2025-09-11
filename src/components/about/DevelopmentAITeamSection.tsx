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
        {/* Rich overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/70 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-black leading-[0.85] tracking-tight text-white mb-8">
            Team Sviluppo
            <span className="block bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              & AI
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            <span className="font-bold text-primary">Tecnologia che moltiplica le vendite.</span> Integrazioni CRM, automazioni, chatbot e modelli AI su misura. Dati puliti, processi veloci, meno attriti per i team commerciali.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentAITeamSection;