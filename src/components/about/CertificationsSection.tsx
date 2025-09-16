import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, Star, Medal, Crown, Zap } from "lucide-react";

const achievements = [
  {
    icon: Crown,
    title: "Leader Sales Consulting Italia",
    description: "Riconosciuti come eccellenza nazionale nel settore della consulenza commerciale",
    year: "2023",
    gradient: "from-yellow-500/20 to-orange-500/20"
  },
  {
    icon: Trophy,
    title: "Best Innovation Award",
    description: "Premio per l'innovazione nell'integrazione di AI e strategie di vendita tradizionali",
    year: "2022",
    gradient: "from-primary/20 to-blue-500/20"
  },
  {
    icon: Star,
    title: "Excellence in Customer Success",
    description: "Certificazione per il 95% di tasso di successo nei progetti clienti",
    year: "2021",
    gradient: "from-purple-500/20 to-indigo-500/20"
  },
  {
    icon: Medal,
    title: "Top Sales Methodology",
    description: "Riconoscimento per il Sales Excellence Framework proprietario",
    year: "2020",
    gradient: "from-green-500/20 to-emerald-500/20"
  }
];

const CertificationsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background/30 via-background/60 to-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm mb-6">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-primary font-semibold text-sm">Riconoscimenti</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
            Certificazioni &
            <span className="block text-primary">Premi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            La qualità del nostro lavoro è riconosciuta a livello nazionale ed internazionale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="glass-card group hover:shadow-glow transition-all duration-500 hover:scale-[1.03] border-2 border-transparent hover:border-primary/20 relative overflow-hidden">
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Year badge */}
              <div className="absolute top-6 right-6">
                <Badge className="bg-primary/20 text-primary border-primary/30 px-3 py-1 font-bold">
                  {achievement.year}
                </Badge>
              </div>

              <CardContent className="p-10 relative z-10">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${achievement.gradient} mb-6 w-fit group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground/90 transition-colors duration-300">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main certification card */}
        <Card className="glass-card max-w-4xl mx-auto border-2 border-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/8"></div>
          <CardContent className="p-16 text-center relative z-10">
            <div className="flex justify-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-primary/20">
                <Zap className="h-12 w-12 text-primary" />
              </div>
              <div className="p-4 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20">
                <Award className="h-12 w-12 text-secondary" />
              </div>
              <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20">
                <Crown className="h-12 w-12 text-accent" />
              </div>
            </div>
            <h3 className="text-4xl font-bold text-foreground mb-6">
              Eccellenza Certificata
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Oltre 15 anni di successi documentati e riconoscimenti ufficiali 
              confermano la nostra posizione di leadership nel sales consulting italiano
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CertificationsSection;