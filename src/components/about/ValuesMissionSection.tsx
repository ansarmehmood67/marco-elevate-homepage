import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Target, Users, Lightbulb, Shield, Rocket, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrità",
    description: "Trasparenza e onestà in ogni relazione commerciale. I risultati parlano da soli.",
    gradient: "from-primary/30 to-primary/20"
  },
  {
    icon: Target,
    title: "KPI-Driven", 
    description: "Ogni strategia è basata su metriche concrete e risultati misurabili.",
    gradient: "from-blue-500/30 to-blue-500/20"
  },
  {
    icon: Rocket,
    title: "Velocità",
    description: "Implementazione rapida ed efficace. Il tempo è il tuo vantaggio competitivo.",
    gradient: "from-green-500/30 to-green-500/20"
  },
  {
    icon: Users,
    title: "Ownership",
    description: "Ci prendiamo la responsabilità dei risultati come se fosse la nostra azienda.",
    gradient: "from-orange-500/30 to-orange-500/20"
  },
  {
    icon: Lightbulb,
    title: "Innovazione",
    description: "Tecnologie all'avanguardia integrate con l'esperienza umana di Marco.",
    gradient: "from-purple-500/30 to-purple-500/20"
  },
  {
    icon: Heart,
    title: "Partnership",
    description: "Relazioni a lungo termine basate sulla crescita reciproca e il successo condiviso.",
    gradient: "from-pink-500/30 to-pink-500/20"
  }
];

const frameworkSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "Marco analizza personalmente la tua situazione attuale e identifica le opportunità nascoste.",
    icon: Target
  },
  {
    step: "02", 
    title: "Strategy",
    description: "Sviluppiamo una strategia su misura basata sui tuoi obiettivi e sul mercato di riferimento.",
    icon: Lightbulb
  },
  {
    step: "03",
    title: "Execution", 
    description: "Il team implementa la strategia con precisione chirurgica e monitoraggio costante.",
    icon: Rocket
  },
  {
    step: "04",
    title: "Optimization",
    description: "Ottimizziamo continuamente i processi in base ai dati raccolti e ai feedback del mercato.",
    icon: Users
  },
  {
    step: "05",
    title: "Scale",
    description: "Scaliamo i successi ottenuti per massimizzare la crescita sostenibile a lungo termine.",
    icon: TrendingUp
  }
];

const ValuesMissionSection = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Values Section */}
        <div className="text-center mb-20">
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-6 px-6 py-3 text-base">
            Come Lavoriamo
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.8] tracking-tight text-white mb-8">
            Metodo &
            <span className="block bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Valori
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            I principi che guidano Marco e il team verso l'eccellenza in ogni progetto
          </p>
        </div>
        
        {/* Value Chips */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {values.map((value, index) => (
            <Card key={index} className="glass-card group hover:shadow-glow transition-all duration-500 hover:scale-[1.02] border-2 border-transparent hover:border-primary/20 relative overflow-hidden">
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${value.gradient} group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                </div>
                <p className="text-white/70 leading-relaxed text-sm group-hover:text-white/90 transition-colors duration-300">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Framework Section */}
        <div className="text-center mb-16">
          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Framework in 5 Fasi
          </h3>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Il processo step-by-step che garantisce il successo di ogni progetto
          </p>
        </div>

        <Card className="glass-card border-2 border-primary/30 bg-primary/8 backdrop-blur-md">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {frameworkSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <Badge className="bg-white/10 text-white border-white/20 text-xs font-bold px-3 py-1 absolute -top-2 -right-2">
                      {step.step}
                    </Badge>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-sm text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {step.description}
                  </p>
                  
                  {/* Connector Arrow */}
                  {index < frameworkSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-6 transform -translate-y-1/2">
                      <div className="w-full h-0.5 bg-gradient-to-r from-primary to-primary-glow opacity-50"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rotate-45"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ValuesMissionSection;