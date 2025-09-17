import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Users, Monitor, Target, Coffee, Lightbulb } from "lucide-react";

const BehindScenesSection = () => {
  const moments = [
    {
      title: "Strategy Session",
      description: "Marco guida sessioni strategiche settimanali",
      icon: Target,
      image: "/lovable-uploads/13f46ac7-4c9f-4d36-97bf-eba678643498.png"
    },
    {
      title: "Team Collaboration", 
      description: "Il team sviluppa soluzioni innovative",
      icon: Users,
      image: "/lovable-uploads/25280549-6553-430d-9dff-5462347e4238.png"
    },
    {
      title: "Data Analysis",
      description: "Monitoraggio costante delle performance",
      icon: Monitor,
      image: "/lovable-uploads/323e86a5-01ec-49ee-bbae-944b976822f2.png"
    },
    {
      title: "Innovation Lab",
      description: "Ricerca e sviluppo di nuove metodologie",
      icon: Lightbulb,
      image: "/lovable-uploads/38b36456-8e63-4824-a0c6-3af4d21ae30b.png"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-black to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-primary-glow/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-6 px-6 py-3 text-base">
            Behind the Scenes
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tight text-white mb-8 pb-3">
            Il Lato
            <span className="block bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Umano
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Uno sguardo dietro le quinte del lavoro quotidiano che porta ai risultati straordinari
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Video/Main Content */}
          <div className="space-y-6">
            <Card className="glass-card overflow-hidden group hover:shadow-glow transition-all duration-500 aspect-video">
              <div className="relative w-full h-full bg-primary/15 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/30"></div>
                <Button 
                  size="lg" 
                  className="relative z-10 group bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 backdrop-blur-sm rounded-full px-8 py-4"
                >
                  <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  Guarda il Video (60 sec)
                </Button>
                
                {/* Placeholder for video thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-glow/10 flex items-center justify-center opacity-50">
                  <div className="text-6xl text-white/30">▶</div>
                </div>
              </div>
            </Card>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Un Giorno con Marco e il Team</h3>
              <p className="text-white/70 leading-relaxed">
                Dalle sessioni strategiche mattutine alle riunioni di ottimizzazione serali, 
                scopri come lavoriamo per garantire il successo di ogni progetto.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-white/80">
                  <Coffee className="h-4 w-4 text-primary" />
                  <span className="text-sm">Daily Standups</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Monitor className="h-4 w-4 text-primary" />
                  <span className="text-sm">Live Dashboards</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Target className="h-4 w-4 text-primary" />
                  <span className="text-sm">Goal Tracking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Strip */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {moments.map((moment, index) => (
                <Card key={index} className="glass-card group hover:shadow-glow transition-all duration-300 hover:scale-[1.02] overflow-hidden">
                  <div className="aspect-square relative">
                    <img 
                      src={moment.image} 
                      alt={moment.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                          <moment.icon className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">{moment.title}</div>
                          <div className="text-white/80 text-xs">{moment.description}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Values in Action */}
        <Card className="glass-card border-2 border-primary/30 bg-primary/8 backdrop-blur-md">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              I Valori in Azione
            </h3>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Ogni giorno applichiamo i nostri principi per creare valore autentico. 
              Non sono solo parole: sono azioni concrete che puoi vedere e toccare con mano.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div className="text-lg font-bold text-white mb-2">Trasparenza Totale</div>
                <div className="text-white/70 text-sm">
                  Dashboard in tempo reale per monitorare ogni KPI
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-lg font-bold text-white mb-2">Collaborazione</div>
                <div className="text-white/70 text-sm">
                  Il tuo team lavora fianco a fianco con i nostri esperti
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <div className="text-lg font-bold text-white mb-2">Innovazione</div>
                <div className="text-white/70 text-sm">
                  Soluzioni all'avanguardia testate sul campo
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BehindScenesSection;