
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full filter blur-3xl" />
      
      <div className="relative container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
            Pronto a far crescere la tua{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              azienda?
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Parla con Marco e scopri cosa può fare il suo team per te.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="xl" className="text-lg px-10 py-5">
              Prenota una Consulenza Gratuita
            </Button>
            
            <Button variant="outline" size="lg" className="text-base px-8 py-3">
              Contattaci
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground pt-6">
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
      </div>
    </section>
  );
};

export default FinalCTASection;
