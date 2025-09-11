import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, Award, Target, Users, Rocket } from "lucide-react";

const CompanyStorySection = () => {
  const milestones = [
    {
      year: "2010",
      title: "Visione Pionieristica",
      description: "Marco fonda l'azienda con una missione chiara: rivoluzionare il sales consulting italiano attraverso metodologie innovative e risultati misurabili.",
      icon: Rocket,
      stats: "Prima metodologia proprietaria",
      gradient: "from-primary/30 to-primary/20",
      highlight: "IL PRIMO PASSO"
    },
    {
      year: "2012", 
      title: "Metodologia Marco",
      description: "Sviluppo del framework proprietario 'Sales as a service': un approccio scientifico che combina psicologia delle vendite e tecniche di persuasione avanzate.",
      icon: Target,
      stats: "Framework brevettato",
      gradient: "from-blue-500/30 to-blue-500/20",
      highlight: "INNOVAZIONE METODOLOGICA"
    },
    {
      year: "2018",
      title: "Modello in crescita",
      description: "Riconoscimento come thought leader nel settore. Marco diventa il consulente di riferimento per le principali aziende italiane nel B2B che vogliono migrare il loro modello da classico ad outsourcing",
      icon: Award,
      stats: "winning culture",
      gradient: "from-green-500/30 to-green-500/20",
      highlight: "CREAZIONE FRAMEWORK MARKETING"
    },
    {
      year: "2022",
      title: "Integrazione AI",
      description: "Prima integrazione di intelligenza artificiale nelle strategie commerciali. Marco anticipa i trend del futuro mantenendo il focus sull'elemento umano.",
      icon: TrendingUp,
      stats: "Tecnologia all'avanguardia",
      gradient: "from-purple-500/30 to-purple-500/20", 
      highlight: "FUTURO PRESENTE"
    },
    {
      year: "2024",
      title: "Scala Internazionale",
      description: "Espansione europea (inghilterra e francia) con consulenze per multinazionali. Il team cresce mantenendo gli standard qualitativi elevati",
      icon: Users,
      stats: "500+ aziende trasformate",
      gradient: "from-orange-500/30 to-orange-500/20",
      highlight: "CRESCITA SOSTENIBILE"
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-6 px-6 py-3 text-base">
            I Momenti Chiave
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.8] tracking-tight text-white mb-8">
            Il Percorso di
            <span className="block bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Marco Ferrario
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Dalla visione iniziale al successo consolidato: i momenti che hanno definito 
            la leadership di Marco nel sales consulting italiano.
          </p>
        </div>

        {/* Milestone Grid - Creative 5-card layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 [&>:nth-child(5)]:md:col-span-2 [&>:nth-child(5)]:lg:col-span-1 [&>:nth-child(5)]:lg:col-start-2">
          {milestones.map((milestone, index) => (
            <Card key={milestone.year} className="glass-card group hover:shadow-glow transition-all duration-500 hover:scale-[1.02] border-2 border-transparent hover:border-primary/20 relative overflow-hidden">
              {/* Gradient top bar */}
              <div className={`h-3 bg-gradient-to-r ${milestone.gradient}`}></div>
              
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${milestone.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <Badge className="bg-white/10 text-white border-white/20 px-4 py-1 text-lg font-bold">
                    {milestone.year}
                  </Badge>
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${milestone.gradient} group-hover:scale-110 transition-transform duration-300`}>
                    <milestone.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
                  {milestone.highlight}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {milestone.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed mb-6 text-sm group-hover:text-white/90 transition-colors duration-300">
                  {milestone.description}
                </p>
                
                <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                  <TrendingUp className="h-3 w-3" />
                  {milestone.stats}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Current Status */}
        <Card className="glass-card border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-md">
          <CardContent className="p-12 text-center">
            <div className="mb-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/20 rounded-full border border-primary/30 backdrop-blur-sm mb-6">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-primary font-semibold">Oggi</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                500+ Successi
              </h3>
              <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Traguardo storico: oltre 500 aziende trasformate. Marco continua a guidare personalmente ogni progetto strategico mantenendo l'eccellenza.
                <span className="font-semibold text-primary block mt-2">
                500+ aziende trasformate</span>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-2">500+</div>
                <div className="text-white/70 font-medium">Aziende Partner</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-2">95%</div>
                <div className="text-white/70 font-medium">Successo Progetti</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-2">50M€</div>
                <div className="text-white/70 font-medium">Fatturato Generato</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-2">15+</div>
                <div className="text-white/70 font-medium">Anni Esperienza</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CompanyStorySection;