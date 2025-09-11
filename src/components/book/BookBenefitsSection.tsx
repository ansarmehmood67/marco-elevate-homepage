const BookBenefitsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-black to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-gradient-to-br from-primary-glow/15 to-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight text-white">
              Chi è Marco Ferrario
            </h2>
            
            <p className="text-xl lg:text-2xl leading-relaxed text-gray-300 font-light">
              Fondatore di Sales on Demand, Marco ha ideato un modello di gestione delle vendite che aiuta aziende di ogni dimensione a ottenere più clienti con meno sprechi. Con anni di esperienza nel campo commerciale, ha unito pratica e innovazione per creare un metodo replicabile e adatto a qualsiasi business. È anche un creatore su YouTube, dove condivide strategie e casi reali, e ha già affatto centinaia di consulenze di successo per aziende di settori diversi, dimostrando che il suo metodo funziona davvero in ogni contesto.
            </p>
          </div>

          {/* Right Column - Marco Image */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-primary-glow/15 to-primary/20 rounded-full blur-3xl group-hover:blur-[40px] opacity-70 group-hover:opacity-100 transition-all duration-1000"></div>
              
              <img 
                src="/lovable-uploads/a9f6f226-da2a-4d9d-b830-26333af3d8d9.png" 
                alt="Marco Ferrario - Autore Sales as a Service" 
                className="relative w-full max-w-md mx-auto h-auto transform group-hover:scale-105 transition-all duration-1000 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookBenefitsSection;