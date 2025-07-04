
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageCircle, Sparkles, CheckCircle2 } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-glow/20 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-primary/5 rounded-full filter blur-3xl" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-32 left-10 opacity-20">
        <Sparkles className="w-8 h-8 text-primary animate-pulse" />
      </div>
      <div className="absolute bottom-32 right-10 opacity-20">
        <Sparkles className="w-6 h-6 text-primary-glow animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="relative container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Main content */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              È il momento di crescere
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-8">
              Pronto a far crescere la tua{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent relative">
                azienda?
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-primary rounded-full opacity-30" />
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
              Parla con Marco e scopri cosa può fare il suo team per te.
            </p>
            
            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
              Il prossimo passo è tuo.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button variant="hero" size="xl" className="text-lg px-12 py-6 h-16 group">
              <Calendar className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              Prenota una Consulenza Gratuita
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" className="text-lg px-10 py-6 h-16 bg-background/50 backdrop-blur-sm border-2 hover:bg-primary/5 group">
              <MessageCircle className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              Contattaci
            </Button>
          </div>
          
          {/* Features/Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "Consulenza gratuita di 30 minuti",
                description: "Analisi approfondita del tuo business"
              },
              {
                icon: <CheckCircle2 className="w-6 h-6" />,
                title: "Analisi personalizzata",
                description: "Strategia su misura per i tuoi obiettivi"
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Strategia su misura",
                description: "Piano d'azione concreto e realizzabile"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* Trust indicators */}
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/30">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Aziende aiutate</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">300%</div>
                <div className="text-sm text-muted-foreground">Crescita media</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">24h</div>
                <div className="text-sm text-muted-foreground">Tempo di risposta</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
