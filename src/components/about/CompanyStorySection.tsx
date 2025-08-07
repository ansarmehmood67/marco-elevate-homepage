import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, Users, Lightbulb, Award, Rocket } from "lucide-react";

const CompanyStorySection = () => {
  const milestones = [
    {
      year: "2009",
      icon: Rocket,
      title: "L'Inizio del Viaggio",
      description: "Marco Ferrario fonda la sua prima consulenza commerciale dopo anni di esperienza nel sales. Prime 10 aziende clienti.",
      stats: "10 clienti acquisiti",
      color: "from-blue-500 to-cyan-400"
    },
    {
      year: "2012",
      icon: TrendingUp,
      title: "Prima Espansione",
      description: "Sviluppo della metodologia proprietaria Sales Excellence Framework. Team di 5 consulenti specializzati.",
      stats: "50+ progetti completati",
      color: "from-green-500 to-emerald-400"
    },
    {
      year: "2016",
      icon: Lightbulb,
      title: "Innovazione Digitale",
      description: "Integrazione delle prime soluzioni AI e CRM avanzati. Lancio del servizio Sales On Demand.",
      stats: "200+ aziende servite",
      color: "from-purple-500 to-pink-400"
    },
    {
      year: "2020",
      icon: Users,
      title: "Crescita Strategica",
      description: "Espansione del team a 20+ specialisti. Apertura di nuove verticali: automazione AI e piattaforme SaaS.",
      stats: "500M€ fatturato generato",
      color: "from-orange-500 to-red-400"
    },
    {
      year: "2023",
      icon: Award,
      title: "Leadership di Mercato",
      description: "Riconoscimento come leader nel sales consulting in Italia. 500+ aziende aiutate con 95% di successo.",
      stats: "95% tasso di successo",
      color: "from-yellow-500 to-orange-400"
    },
    {
      year: "2024",
      icon: Rocket,
      title: "Il Futuro Oggi",
      description: "Lancio di nuove soluzioni AI proprietarie e espansione internazionale. Vision: 1000 aziende trasformate entro il 2025.",
      stats: "Next: 1000 aziende",
      color: "from-primary to-sky-blue-400"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm mb-4">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm">Timeline</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            <span className="bg-gradient-to-r from-primary to-sky-blue-400 bg-clip-text text-transparent">
              La Nostra Storia
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Un percorso di crescita costante, innovazione e risultati straordinari che ci ha portati 
            a diventare leader nel sales consulting
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-sky-blue-400 to-primary opacity-30"></div>
          
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-8 lg:space-y-0 space-y-8`}>
                
                {/* Content Card */}
                <div className="flex-1 max-w-lg">
                <Card className="border shadow-lg hover:scale-105 transition-all duration-300 relative group bg-white">
                    {/* Year Badge */}
                    <div className="absolute -top-4 left-6">
                      <Badge className={`bg-gradient-to-r ${milestone.color} text-white border-none px-4 py-2 text-lg font-bold`}>
                        {milestone.year}
                      </Badge>
                    </div>
                    
                    <CardContent className="p-8 pt-12">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${milestone.color}`}>
                          <milestone.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">{milestone.title}</h3>
                      </div>
                      
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {milestone.description}
                      </p>
                      
                      <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          <span className="text-primary font-semibold">{milestone.stats}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Node */}
                <div className="relative flex-shrink-0">
                  <div className="w-6 h-6 bg-gradient-to-r from-primary to-sky-blue-400 rounded-full border-4 border-background shadow-lg"></div>
                  <div className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-primary to-sky-blue-400 rounded-full animate-ping opacity-75"></div>
                </div>

                {/* Spacer for odd items */}
                <div className="flex-1 max-w-lg lg:block hidden"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-primary to-sky-blue-400 bg-clip-text text-transparent">
              I Nostri Risultati Chiave
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border shadow-lg text-center hover:scale-105 transition-all duration-300 bg-white">
              <CardContent className="p-6">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-slate-900 mb-2">15+</div>
                <div className="text-slate-600">Anni di Esperienza</div>
              </CardContent>
            </Card>
            
            <Card className="border shadow-lg text-center hover:scale-105 transition-all duration-300 bg-white">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-slate-900 mb-2">500+</div>
                <div className="text-slate-600">Aziende Trasformate</div>
              </CardContent>
            </Card>
            
            <Card className="border shadow-lg text-center hover:scale-105 transition-all duration-300 bg-white">
              <CardContent className="p-6">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-slate-900 mb-2">50M€</div>
                <div className="text-slate-600">Fatturato Generato</div>
              </CardContent>
            </Card>
            
            <Card className="border shadow-lg text-center hover:scale-105 transition-all duration-300 bg-white">
              <CardContent className="p-6">
                <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-slate-900 mb-2">95%</div>
                <div className="text-slate-600">Tasso di Successo</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStorySection;