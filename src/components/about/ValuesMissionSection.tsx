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
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm mb-4">
            <span className="text-primary font-semibold text-sm">I Nostri Valori</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Cosa Ci Guida
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