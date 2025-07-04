import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full filter blur-3xl" />
      
      <div className="relative container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
            Pronto a far crescere la tua{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              azienda?
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Non aspettare. Ogni giorno che passa è un'opportunità di crescita che stai perdendo.
          </p>
          
          <div className="space-y-6 pt-8">
            <Button variant="hero" size="xl" className="text-xl px-12 py-6">
              Prenota una chiamata gratuita
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Consulenza gratuita di 30 minuti</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Analisi personalizzata del tuo business</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Strategia su misura per te</span>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-border/20">
            <p className="text-lg text-muted-foreground">
              Hai domande? Scrivici a{" "}
              <a href="mailto:info@marco.it" className="text-primary hover:text-primary-glow transition-colors">
                info@marco.it
              </a>{" "}
              o chiamaci al{" "}
              <a href="tel:+393331234567" className="text-primary hover:text-primary-glow transition-colors">
                +39 333 123 4567
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;