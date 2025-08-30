import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Target, BarChart3, Rocket, Users, CheckCircle } from "lucide-react";

const methodologySteps = [
  {
    icon: Lightbulb,
    title: "Analisi",
    description: "Studio approfondito della situazione attuale e identificazione delle opportunità di crescita",
    phase: "01"
  },
  {
    icon: Target,
    title: "Strategia",
    description: "Sviluppo di una strategia personalizzata basata sui tuoi obiettivi specifici",
    phase: "02"
  },
  {
    icon: Rocket,
    title: "Implementazione",
    description: "Esecuzione della strategia con il supporto del nostro team specializzato",
    phase: "03"
  },
  {
    icon: BarChart3,
    title: "Monitoraggio",
    description: "Controllo costante dei risultati e ottimizzazione continua delle performance",
    phase: "04"
  },
  {
    icon: Users,
    title: "Formazione",
    description: "Training del tuo team per garantire l'autonomia e la continuità dei risultati",
    phase: "05"
  },
  {
    icon: CheckCircle,
    title: "Successo",
    description: "Raggiungimento degli obiettivi e consolidamento della crescita sostenibile",
    phase: "06"
  }
];

const MethodologySection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-background/95 to-background/90 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm mb-6">
            <Target className="h-4 w-4 text-primary" />
            <span className="text-primary font-semibold text-sm">La Nostra Metodologia</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
            Sales Excellence
            <span className="block text-primary">Framework</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            La nostra metodologia proprietaria in 6 fasi per trasformare le tue vendite 
            in un motore di crescita sostenibile e misurabile
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {methodologySteps.map((step, index) => (
            <Card key={index} className="glass-card group hover:shadow-glow transition-all duration-500 hover:scale-[1.05] border-2 border-transparent hover:border-primary/20 relative overflow-hidden">
              {/* Phase number background */}
              <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                {step.phase}
              </div>
              
              <CardContent className="p-8 relative z-10">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 mx-auto mb-6 w-fit group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Central Framework Card */}
        <Card className="glass-card max-w-4xl mx-auto border-2 border-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
          <CardContent className="p-12 text-center relative z-10">
            <div className="mb-8">
              <div className="p-6 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 mx-auto w-fit mb-6">
                <Rocket className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-4xl font-bold text-foreground mb-6">
                Risultati Garantiti
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Il nostro framework ha generato oltre <span className="text-primary font-bold">50 milioni di euro</span> 
                di fatturato per i nostri clienti, con un tasso di successo del <span className="text-primary font-bold">95%</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MethodologySection;