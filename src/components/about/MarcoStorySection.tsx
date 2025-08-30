import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Quote, Target, Lightbulb, Award, TrendingUp } from "lucide-react";

const MarcoStorySection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-black via-slate-900/95 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-6 px-4 py-2">
                La Storia di Marco
              </Badge>
              <h2 className="text-5xl lg:text-7xl font-black leading-[0.8] tracking-tight text-white mb-8">
                Il Perché della
                <span className="block bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                  Mia Missione
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-white/80">
              <p className="text-lg leading-relaxed">
                Nel <span className="font-semibold text-primary">1996</span>, ho iniziato come giovane venditore in una multinazionale. 
                Vedevo troppi talenti sprecati e aziende che lottavano senza una strategia chiara.
              </p>
              
              <p className="text-lg leading-relaxed">
                Il <span className="font-semibold text-primary">momento decisivo</span> arrivò quando aiutai una piccola azienda 
                familiare a triplicare il fatturato in 18 mesi. Capii che la mia missione era trasformare 
                le sfide commerciali in opportunità di crescita.
              </p>
              
              <p className="text-lg leading-relaxed">
                Oggi, dopo <span className="font-semibold text-primary">25+ anni di esperienza</span>, la mia filosofia rimane invariata: 
                "Non esistono mercati saturi, esistono solo approcci obsoleti."
              </p>
              
              <p className="text-lg leading-relaxed">
                Ogni strategia che sviluppiamo è il risultato di anni di perfezionamento, 
                <span className="font-semibold text-primary"> fallimenti trasformati in successi</span> e 
                la costante ricerca dell'eccellenza.
              </p>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary-glow rounded-full"></div>
              <div className="text-xl font-semibold text-white">Marco Ferrario</div>
            </div>
          </div>

          {/* Portrait Side */}
          <div className="space-y-8">
            <Card className="glass-card overflow-hidden group hover:shadow-glow transition-all duration-500">
              <div className="aspect-[4/5] relative overflow-hidden">
                <img 
                  src="/lovable-uploads/a9f6f226-da2a-4d9d-b830-26333af3d8d9.png" 
                  alt="Marco Ferrario - Portrait" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Quote overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <Quote className="h-5 w-5 text-primary mb-2" />
                    <p className="text-sm text-slate-700 font-medium italic">
                      "Il successo non è un caso. È il risultato di strategia, 
                      dedizione e la capacità di trasformare ogni sfida in opportunità."
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Philosophy Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="glass-card group hover:shadow-glow transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-6 text-center">
                  <Target className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-lg font-bold text-white mb-2">Strategia</div>
                  <div className="text-sm text-white/70">Approccio scientifico</div>
                </CardContent>
              </Card>
              
              <Card className="glass-card group hover:shadow-glow transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-6 text-center">
                  <Lightbulb className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-lg font-bold text-white mb-2">Innovazione</div>
                  <div className="text-sm text-white/70">Soluzioni all'avanguardia</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarcoStorySection;