import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Phone } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-background via-slate-900 to-background">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/50"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="space-y-12">
          <div className="text-center space-y-8">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-center">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Pronto a far crescere
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                il tuo business?
              </span>
            </h2>
            
            <p className="text-muted-foreground text-xl text-center max-w-3xl mx-auto leading-relaxed">
              Parla con Marco e scopri cosa può fare il suo team per portare la tua azienda al livello successivo.
            </p>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="group relative bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white font-semibold px-10 py-6 rounded-2xl shadow-2xl hover:shadow-primary/25 transform hover:scale-105 transition-all duration-500 border border-primary/20 backdrop-blur-sm overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="relative flex items-center gap-3">
                <Phone className="w-5 h-5" />
                Prenota una consulenza gratuita
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold px-10 py-6 rounded-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="relative flex items-center gap-3">
                Contattaci
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm">Risposta entro 2 ore</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-primary/80 rounded-full animate-pulse"></div>
              <span className="text-sm">Consulenza gratuita di 30 min</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm">Nessun impegno</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;