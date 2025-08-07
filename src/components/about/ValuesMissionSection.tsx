import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Heart, Lightbulb, Users } from "lucide-react";

const ValuesMissionSection = () => {
  const values = [
    {
      icon: Target,
      title: "Risultati Misurabili",
      description: "Ogni progetto ha KPI chiari e risultati verificabili"
    },
    {
      icon: Heart,
      title: "Passione Autentica",
      description: "Crediamo profondamente nel potenziale di ogni azienda"
    },
    {
      icon: Lightbulb,
      title: "Innovazione Continua",
      description: "Integriamo sempre le tecnologie più avanzate"
    },
    {
      icon: Users,
      title: "Partnership Duratura",
      description: "Costruiamo relazioni a lungo termine basate sulla fiducia"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
            I Nostri Valori
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-sky-blue-400 bg-clip-text text-transparent">
              Cosa Ci Guida
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="glass-card text-center hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-sky-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesMissionSection;