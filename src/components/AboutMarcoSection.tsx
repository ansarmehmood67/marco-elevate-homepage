import { Button } from "@/components/ui/button";
import { Award, Users, TrendingUp, Star } from "lucide-react";
import marcoPortrait from "@/assets/marco-portrait.jpg";
import marcoBg from "@/assets/marco-bg.png";

const AboutMarcoSection = () => {
  return (
    <section className="px-4 lg:px-8 bg-gray-50 relative overflow-hidden" style={{ height: '600px' }}>
      {/* Background Image with Heavy Blur */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={marcoBg}
          alt="Background"
          className="w-full h-full object-cover blur-3xl opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          {/* Left Side - Marco Image */}
          <div className="flex items-end justify-center lg:justify-start pt-8">
            <div className="w-full max-w-md h-full flex items-end">
              <img 
                src={marcoPortrait}
                alt="Marco Ferrario - Sales Expert"
                className="w-full h-full object-cover object-top rounded-2xl shadow-2xl"
                style={{ maxHeight: '550px' }}
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="h-full flex flex-col justify-center py-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 bg-primary/10 text-primary border border-primary/20">
                <Star className="w-4 h-4 mr-2" />
                Esperto di Vendite e Comunicazione
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight text-gray-900">
                CHI È
                <span className="block text-primary">
                  MARCO FERRARIO
                </span>
              </h2>

              <p className="text-base mb-6 leading-relaxed text-gray-700">
                Direttore vendite esperto attivo dal 1996 con una carriera dedicata allo sviluppo di strategie di vendita innovative e scalabili.
              </p>
            </div>

            {/* Stats Cards - Horizontal Layout */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-white rounded-xl p-4 text-center shadow-lg border border-gray-100">
                <div className="text-xl font-bold mb-1 text-primary">
                  500+
                </div>
                <div className="text-xs font-medium text-gray-600">
                  Aziende Clienti
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-lg border border-gray-100">
                <div className="text-xl font-bold mb-1 text-primary">
                  15+
                </div>
                <div className="text-xs font-medium text-gray-600">
                  Anni Esperienza
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-lg border border-gray-100">
                <div className="text-xl font-bold mb-1 text-primary">
                  95%
                </div>
                <div className="text-xs font-medium text-gray-600">
                  Tasso di Successo
                </div>
              </div>
            </div>

            {/* Key Points */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-1.5 rounded-full bg-primary/10">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-gray-700">
                  Strategia di vendita personalizzata per ogni business
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-1.5 rounded-full bg-primary/10">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-gray-700">
                  Crescita sostenibile e risultati misurabili
                </span>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <Button className="group font-semibold px-6 py-3 text-base rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 bg-primary hover:bg-primary/90 text-white">
                Scopri il Metodo Marco
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMarcoSection;
