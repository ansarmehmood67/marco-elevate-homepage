import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MethodologySection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm mb-4">
            <span className="text-primary font-semibold text-sm">La Nostra Metodologia</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Come Lavoriamo
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