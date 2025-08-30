import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Award, Target } from "lucide-react";

const statistics = [
  {
    icon: Users,
    value: "500+",
    label: "Aziende Trasformate",
    description: "Partner di successo in tutta Italia",
    gradient: "from-primary/20 to-blue-500/20",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    value: "50M€",
    label: "Fatturato Generato",
    description: "Crescita economica dei nostri clienti",
    gradient: "from-green-500/20 to-emerald-500/20",
    color: "text-green-400"
  },
  {
    icon: Award,
    value: "95%",
    label: "Tasso di Successo",
    description: "Progetti completati con successo",
    gradient: "from-yellow-500/20 to-orange-500/20",
    color: "text-yellow-400"
  },
  {
    icon: Target,
    value: "15+",
    label: "Anni Esperienza",
    description: "Leadership consolidata nel settore",
    gradient: "from-purple-500/20 to-indigo-500/20",
    color: "text-purple-400"
  }
];

const StatisticsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background/50 via-background/80 to-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
            I Numeri del
            <span className="block text-primary">Successo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Risultati concreti che testimoniano la qualità del nostro approccio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <Card key={index} className="glass-card text-center group hover:shadow-glow transition-all duration-500 hover:scale-[1.05] border-2 border-transparent hover:border-primary/20 relative overflow-hidden">
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardContent className="p-8 relative z-10">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${stat.gradient} mx-auto mb-6 w-fit group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className={`text-5xl font-bold mb-3 bg-gradient-to-r from-foreground to-${stat.color.replace('text-', '')} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;