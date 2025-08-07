import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MethodologySection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
            La Nostra Metodologia
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-sky-blue-400 bg-clip-text text-transparent">
              Come Lavoriamo
            </span>
          </h2>
        </div>
        <Card className="glass-card max-w-4xl mx-auto">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Sales Excellence Framework
            </h3>
            <p className="text-xl text-white/80">
              La nostra metodologia proprietaria per trasformare le vendite
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MethodologySection;