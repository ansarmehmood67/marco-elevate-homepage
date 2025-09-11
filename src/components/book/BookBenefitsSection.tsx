const BookBenefitsSection = () => {
  return (
    <section className="pt-12 lg:pt-16 pb-0 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 h-full">
        <div className="grid lg:grid-cols-2 gap-8 items-end h-full">
          
          {/* Left Column - Text Content */}
          <div className="space-y-6 pb-12 lg:pb-16">
            <h2 className="text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight text-white">
              Chi è Marco Ferrario
            </h2>
            
            <p className="text-xl lg:text-2xl leading-relaxed text-gray-300 font-light">
              Fondatore di Sales on Demand, Marco ha ideato un modello di gestione delle vendite che aiuta aziende di ogni dimensione a ottenere più clienti con meno sprechi. Con anni di esperienza nel campo commerciale, ha unito pratica e innovazione per creare un metodo replicabile e adatto a qualsiasi business. È anche un creatore su YouTube, dove condivide strategie e casi reali, e ha già affatto centinaia di consulenze di successo per aziende di settori diversi, dimostrando che il suo metodo funziona davvero in ogni contesto.
            </p>
          </div>

          {/* Right Column - Marco Image */}
          <div className="relative h-full flex items-end">
            <div className="relative group w-full">
              <div className="relative">
                <img 
                  src="https://res.cloudinary.com/dufcnrcfe/image/upload/v1757562910/Untitled_design_93_sxrhhz.png" 
                  alt="Marco Ferrario - Autore Sales as a Service" 
                  className="relative w-full max-w-md h-auto transform group-hover:scale-105 transition-all duration-1000 drop-shadow-2xl"
                />
                {/* Bottom fade effect only */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookBenefitsSection;