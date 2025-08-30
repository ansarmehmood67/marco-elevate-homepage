import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Target, Users, Lightbulb, Shield, Rocket } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passione",
    description: "Mettiamo il cuore in ogni progetto, perché la tua crescita è la nostra missione.",
    gradient: "from-red-500/20 to-pink-500/20"
  },
  {
    icon: Target,
    title: "Precisione",
    description: "Ogni strategia è studiata nei minimi dettagli per garantire risultati concreti.",
    gradient: "from-primary/20 to-blue-500/20"
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Non siamo fornitori, siamo partner strategici per il tuo successo a lungo termine.",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Lightbulb,
    title: "Innovazione",
    description: "Integriamo sempre le ultime tecnologie per mantenerti all'avanguardia.",
    gradient: "from-yellow-500/20 to-orange-500/20"
  },
  {
    icon: Shield,
    title: "Affidabilità",
    description: "La fiducia è la base di ogni relazione duratura e proficua.",
    gradient: "from-purple-500/20 to-indigo-500/20"
  },
  {
    icon: Rocket,
    title: "Crescita",
    description: "Il nostro obiettivo è accelerare la tua crescita in modo sostenibile.",
    gradient: "from-secondary/20 to-accent/20"
  }
];

const ValuesMissionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-background/95 to-background/90 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm mb-6">
            <Heart className="h-4 w-4 text-primary" />
            <span className="text-primary font-semibold text-sm">Cosa Ci Guida</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
            I Nostri
            <span className="block text-primary">Valori</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Principi solidi che guidano ogni nostra azione e decisione nel percorso verso il tuo successo
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="glass-card group hover:shadow-glow transition-all duration-500 hover:scale-[1.05] border-2 border-transparent hover:border-primary/20 relative overflow-hidden">
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardContent className="p-8 text-center relative z-10">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${value.gradient} mx-auto mb-6 w-fit group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesMissionSection;