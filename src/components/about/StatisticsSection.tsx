import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Award, Target } from "lucide-react";

const StatisticsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="glass-card text-center">
            <CardContent className="p-8">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/70">Aziende Trasformate</div>
            </CardContent>
          </Card>
          <Card className="glass-card text-center">
            <CardContent className="p-8">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">50M€</div>
              <div className="text-white/70">Fatturato Generato</div>
            </CardContent>
          </Card>
          <Card className="glass-card text-center">
            <CardContent className="p-8">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-white/70">Tasso di Successo</div>
            </CardContent>
          </Card>
          <Card className="glass-card text-center">
            <CardContent className="p-8">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-white/70">Anni Esperienza</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;