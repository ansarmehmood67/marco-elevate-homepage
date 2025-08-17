import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const IntroSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-background/95 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Marketing e vendite{" "}
                  <span className="text-primary">performanti</span>
                  <br />
                  per il tuo business
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Sales on Demand è un'azienda specializzata nel costruire{" "}
                  <span className="text-primary font-semibold">funnel di vendita completi</span>{" "}
                  in outsourcing. Un team esterno che lavora con la mentalità di un 
                  reparto interno: strategia, operatività e controllo, tutto sotto un'unica regia.
                </p>

                <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Scalabili, controllabili.
                    <br />
                    <span className="text-primary">In outsourcing.</span>
                  </h3>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Inizia adesso
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Right Content - Benefits */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-4 uppercase tracking-wide">
                  OUTSOURCING END-TO-END
                </h3>
                <p className="text-foreground font-semibold text-lg">
                  GESTIAMO VENDITE E MARKETING IN OUTSOURCING PER TE
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-6">
                <h4 className="text-lg font-bold text-foreground mb-4">
                  CON SALES ON DEMAND HAI:
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>STRATEGIA DEDICATA AL TUO MERCATO E AI TUOI OBIETTIVI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>TEAM OPERATIVO COME UN REPARTO INTERNO, SENZA COSTI FISSI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>MONITORAGGIO COSTANTE DI KPI E RISULTATI IN REAL TIME</span>
                  </li>
                </ul>
              </div>

              <div className="text-center p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                <p className="text-xl font-bold text-foreground mb-4">
                  NESSUNO SPRECO. SOLO CRESCITA MISURABILE.
                </p>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  SCOPRI COME
                </Button>
              </div>

              <div className="text-center">
                <p className="text-muted-foreground italic">marco ferrario</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;