import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, Award, Target, Users, Rocket } from "lucide-react";

const CompanyStorySection = () => {
  const milestones = [
    {
      year: "2009",
      title: "Fondazione",
      description: "Nasce l'idea di rivoluzionare il modo di fare vendite in Italia",
      icon: Rocket,
      stats: "Prima azienda cliente",
      gradient: "from-primary/20 to-primary/10"
    },
    {
      year: "2012",
      title: "Espansione",
      description: "Sviluppo delle prime metodologie proprietarie e crescita del team",
      icon: TrendingUp,
      stats: "50+ aziende clienti",
      gradient: "from-secondary/20 to-secondary/10"
    },
    {
      year: "2016",
      title: "Innovazione",
      description: "Integrazione delle prime tecnologie AI nelle strategie di vendita",
      icon: Award,
      stats: "200+ progetti completati",
      gradient: "from-accent/20 to-accent/10"
    },
    {
      year: "2020",
      title: "Leadership",
      description: "Riconoscimento come leader nel sales consulting in Italia",
      icon: Target,
      stats: "500+ aziende trasformate",
      gradient: "from-primary/30 to-primary/20"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background/95 to-background/90 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm mb-6">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-primary font-semibold text-sm">La Nostra Storia</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
            15 Anni di
            <span className="block text-primary">Eccellenza</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dalla startup visionaria al leader riconosciuto nel sales consulting. 
            Un percorso di crescita costante e innovazione continua.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent opacity-30"></div>
          
          <div className="space-y-24">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-8`}>
                {/* Content Card */}
                <div className="flex-1 max-w-lg">
                  <Card className={`glass-card overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-[1.02] border-2 border-transparent hover:border-primary/20`}>
                    <div className={`h-2 bg-gradient-to-r ${milestone.gradient}`}></div>
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${milestone.gradient} group-hover:scale-110 transition-transform duration-300`}>
                          <milestone.icon className="h-6 w-6 text-primary" />
                        </div>
                        <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 px-4 py-1 text-lg font-bold">
                          {milestone.year}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                        {milestone.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                        <TrendingUp className="h-4 w-4" />
                        {milestone.stats}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-background shadow-glow"></div>
                  <div className="absolute -inset-2 bg-primary/20 rounded-full animate-pulse"></div>
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 max-w-lg hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground mb-6">
              Risultati che Parlano
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I numeri della nostra crescita testimoniano l'eccellenza del nostro approccio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card text-center group hover:shadow-glow transition-all duration-500 hover:scale-[1.05] border-2 border-transparent hover:border-primary/20">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Users className="h-16 w-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">500+</div>
                  <div className="text-muted-foreground font-semibold">Aziende Trasformate</div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card text-center group hover:shadow-glow transition-all duration-500 hover:scale-[1.05] border-2 border-transparent hover:border-secondary/20">
              <CardContent className="p-8">
                <div className="mb-6">
                  <TrendingUp className="h-16 w-16 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-5xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">50M€</div>
                  <div className="text-muted-foreground font-semibold">Fatturato Generato</div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card text-center group hover:shadow-glow transition-all duration-500 hover:scale-[1.05] border-2 border-transparent hover:border-accent/20">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Award className="h-16 w-16 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">95%</div>
                  <div className="text-muted-foreground font-semibold">Tasso di Successo</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStorySection;