import { Button } from "@/components/ui/button";

const NewServicesSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-secondary to-primary/20 overflow-hidden">
      {/* Premium floating elements */}
      <div className="floating-light w-96 h-96 top-10 left-10 opacity-30" />
      <div className="floating-light w-64 h-64 top-1/2 right-20 opacity-20" />
      <div className="floating-light w-80 h-80 bottom-20 left-1/3 opacity-25" />
      
      {/* Radial gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary-glow)/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.1),transparent_50%)]" />

      <div className="container mx-auto px-6 py-24 relative z-10">
        {/* Header Section - Left Aligned */}
        <div className="text-left mb-20 max-w-4xl">
          <div className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-4 glow-primary">
            AUTOMAZIONE STRATEGICA
          </div>
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] mb-8">
            <span className="text-foreground">I NOSTRI</span>
            <br />
            <span className="text-primary gradient-text">SERVIZI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed font-light">
            Esternalizza vendite e marketing, ricevi consulenza strategica e automatizza con l'AI
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Sales on Demand Card */}
          <div className="group glass-card rounded-3xl p-10 h-[620px] flex flex-col justify-between shadow-premium hover:shadow-glow-hover transition-all duration-700 hover:scale-[1.03] relative overflow-hidden border-2 border-primary/20 hover:border-primary/40">
            {/* Premium background gradients */}
            <div className="absolute inset-0 bg-gradient-service-1 opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary-glow/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Floating accent elements */}
            <div className="absolute top-6 right-6 w-24 h-24 bg-primary-glow/20 rounded-full blur-xl" />
            <div className="absolute bottom-20 left-6 w-16 h-16 bg-primary/30 rounded-full blur-lg" />
            
            <div className="relative z-10">
              <div className="bg-primary-glow/20 backdrop-blur-sm rounded-2xl p-2 w-fit mb-6 border border-primary-glow/30">
                <div className="w-3 h-3 bg-primary-glow rounded-full animate-glow-pulse" />
              </div>
              
              <h3 className="text-4xl font-black mb-6 leading-tight text-foreground">
                Sales on Demand
              </h3>
              <p className="text-lg text-muted-foreground/90 mb-10 leading-relaxed font-medium">
                Esternalizza vendite e marketing con un servizio completo chiavi in mano.
              </p>
              
              <div className="space-y-5">
                <div className="glass-card text-sm font-black uppercase tracking-wide rounded-xl px-6 py-4 border border-primary-glow/30 glow-primary">
                  <span className="text-primary-glow">●</span> OUTSOURCING<br />
                  <span className="text-foreground ml-3">DELLE VENDITE E DEL MARKETING</span>
                </div>
                <div className="glass-card text-sm font-bold uppercase tracking-wide rounded-xl px-6 py-3 border border-primary/20">
                  <span className="text-primary">●</span> <span className="text-foreground ml-2">LEAD GENERATION E NURTURING</span>
                </div>
                <div className="glass-card text-sm font-bold uppercase tracking-wide rounded-xl px-6 py-3 border border-primary/20">
                  <span className="text-primary">●</span> <span className="text-foreground ml-2">TELEMARKETING E FOLLOW-UP AUTOMATICI</span>
                </div>
              </div>
            </div>
            
            <Button className="w-full btn-premium py-5 rounded-2xl text-base font-black uppercase tracking-wider shadow-premium hover:shadow-glow-hover transform hover:scale-[1.02] transition-all duration-300 relative z-10 border-2 border-primary-glow/50">
              <span className="relative z-10">SCOPRI DI PIÙ</span>
            </Button>
          </div>

          {/* Consulenza Strategica Card */}
          <div className="group glass-card rounded-3xl p-10 h-[620px] flex flex-col justify-between shadow-premium hover:shadow-glow-hover transition-all duration-700 hover:scale-[1.03] relative overflow-hidden border-2 border-secondary/30 hover:border-primary/40">
            {/* Premium background gradients */}
            <div className="absolute inset-0 bg-gradient-service-2 opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Floating accent elements */}
            <div className="absolute top-6 right-6 w-20 h-20 bg-secondary/30 rounded-full blur-xl" />
            <div className="absolute bottom-24 left-8 w-14 h-14 bg-primary/20 rounded-full blur-lg" />
            
            <div className="relative z-10">
              <div className="bg-secondary/30 backdrop-blur-sm rounded-2xl p-2 w-fit mb-6 border border-secondary/50">
                <div className="w-3 h-3 bg-foreground rounded-full animate-glow-pulse" />
              </div>
              
              <h3 className="text-4xl font-black mb-6 leading-tight text-foreground">
                Consulenza<br />
                Strategica
              </h3>
              <p className="text-lg text-muted-foreground/90 mb-10 leading-relaxed font-medium">
                Processi di management per vendite e marketing 100% personalizzati.
              </p>
              
              <div className="space-y-5">
                <div className="glass-card text-sm font-black uppercase tracking-wide rounded-xl px-6 py-4 border border-foreground/20 glow-primary">
                  <span className="text-primary-glow">●</span> DIRETTORE VENDITE<br />
                  <span className="text-foreground ml-3">ON DEMAND</span>
                </div>
                <div className="glass-card text-sm font-bold uppercase tracking-wide rounded-xl px-6 py-3 border border-foreground/15">
                  <span className="text-primary">●</span> <span className="text-foreground ml-2">DIRETTORE MARKETING ON DEMAND</span>
                </div>
                <div className="glass-card text-sm font-bold uppercase tracking-wide rounded-xl px-6 py-3 border border-foreground/15">
                  <span className="text-primary">●</span> <span className="text-foreground ml-2">STRATEGIA PERSONALIZZATA IN 30 GIORNI</span>
                </div>
              </div>
            </div>
            
            <Button className="w-full btn-premium py-5 rounded-2xl text-base font-black uppercase tracking-wider shadow-premium hover:shadow-glow-hover transform hover:scale-[1.02] transition-all duration-300 relative z-10 border-2 border-primary-glow/50">
              <span className="relative z-10">SCOPRI DI PIÙ</span>
            </Button>
          </div>

          {/* Automazioni AI Card */}
          <div className="group glass-card rounded-3xl p-10 h-[620px] flex flex-col justify-between shadow-premium hover:shadow-glow-hover transition-all duration-700 hover:scale-[1.03] relative overflow-hidden border-2 border-primary-glow/30 hover:border-primary-glow/60">
            {/* Premium background gradients */}
            <div className="absolute inset-0 bg-gradient-service-3 opacity-85" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-glow/30 via-primary/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Floating accent elements */}
            <div className="absolute top-6 right-6 w-28 h-28 bg-primary-glow/25 rounded-full blur-xl animate-float" />
            <div className="absolute bottom-16 left-6 w-18 h-18 bg-primary/25 rounded-full blur-lg" />
            
            <div className="relative z-10">
              <div className="bg-primary-glow/25 backdrop-blur-sm rounded-2xl p-2 w-fit mb-6 border border-primary-glow/40">
                <div className="w-3 h-3 bg-primary-glow rounded-full animate-glow-pulse" />
              </div>
              
              <h3 className="text-4xl font-black mb-6 leading-tight text-foreground">
                Automazioni AI
              </h3>
              <p className="text-lg text-muted-foreground/90 mb-10 leading-relaxed font-medium">
                Intelligenza artificiale al servizio delle tue comunicazioni.
              </p>
              
              <div className="space-y-5">
                <div className="glass-card text-sm font-black uppercase tracking-wide rounded-xl px-6 py-4 border border-primary-glow/40 glow-primary">
                  <span className="text-primary-glow">●</span> CHATBOT AI<br />
                  <span className="text-foreground ml-3">PER SITI E MESSAGGISTICA</span>
                </div>
                <div className="glass-card text-sm font-bold uppercase tracking-wide rounded-xl px-6 py-3 border border-primary/25">
                  <span className="text-primary-glow">●</span> <span className="text-foreground ml-2">INSTANT AVATAR PER VIDEO PERSONALIZZATI</span>
                </div>
                <div className="glass-card text-sm font-bold uppercase tracking-wide rounded-xl px-6 py-3 border border-primary/25">
                  <span className="text-primary-glow">●</span> <span className="text-foreground ml-2">AUTOMAZIONI MARKETING CON IA</span>
                </div>
              </div>
            </div>
            
            <Button className="w-full btn-premium py-5 rounded-2xl text-base font-black uppercase tracking-wider shadow-premium hover:shadow-glow-hover transform hover:scale-[1.02] transition-all duration-300 relative z-10 border-2 border-primary-glow/50">
              <span className="relative z-10">SCOPRI DI PIÙ</span>
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-24">
          <p className="text-3xl lg:text-4xl text-foreground font-light mb-3 leading-tight">
            Tutto in outsourcing, tutto su misura.
          </p>
          <p className="text-3xl lg:text-4xl text-primary gradient-text font-bold mb-12 leading-tight">
            Zero sprechi, solo risultati.
          </p>
          
          <Button className="btn-premium px-16 py-6 rounded-full text-xl font-black uppercase tracking-wider shadow-premium hover:shadow-glow-hover transform hover:scale-105 transition-all duration-500 border-2 border-primary-glow/50">
            <span className="relative z-10">Scopri di più</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewServicesSection;