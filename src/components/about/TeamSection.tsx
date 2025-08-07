import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkedinIcon, Mail, Award } from "lucide-react";
import marcoPortrait from "@/assets/marco-portrait.jpg";

const TeamSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
            Il Nostro Team
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-sky-blue-400 bg-clip-text text-transparent">
              Marco Ferrario
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founder & CEO - Il tuo partner strategico per il successo commerciale
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Card className="glass-card overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-sky-blue-400/20 flex items-center justify-center">
                <img 
                  src={marcoPortrait} 
                  alt="Marco Ferrario" 
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">La Mia Storia</h3>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                Da oltre 15 anni aiuto aziende di ogni dimensione a trasformare le loro vendite 
                in successi straordinari. La mia passione per il sales e l'innovazione mi ha portato 
                a sviluppare metodologie uniche che combinano esperienza umana e tecnologia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-2">500+</div>
                  <div className="text-white/70">Aziende Aiutate</div>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-2">15+</div>
                  <div className="text-white/70">Anni Esperienza</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;