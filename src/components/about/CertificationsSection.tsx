import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const CertificationsSection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
            Riconoscimenti
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Certificazioni & Premi
          </h2>
        </div>
        <Card className="glass-card max-w-4xl mx-auto">
          <CardContent className="p-12 text-center">
            <Award className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-6">
              Leader nel Sales Consulting
            </h3>
            <p className="text-xl text-white/80">
              Riconosciuti come eccellenza nel settore della consulenza commerciale
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CertificationsSection;