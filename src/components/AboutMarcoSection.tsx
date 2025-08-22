import { Button } from "@/components/ui/button";
import { Award, Users, TrendingUp, Star } from "lucide-react";
import marcoPortrait from "@/assets/marco-portrait.jpg";
import marcoBg from "@/assets/marco-bg.png";

const AboutMarcoSection = () => {
  return (
    <section className="py-20 px-4 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background Image with Heavy Blur */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={marcoBg}
          alt="Background"
          className="w-full h-full object-cover blur-3xl opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Marco Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-md">
              <img 
                src={marcoPortrait}
                alt="Marco Ferrario - Sales Expert"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-primary/10 text-primary border border-primary/20">
                <Star className="w-4 h-4 mr-2" />
                Esperto di Vendite
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
                CHI È
                <span className="block text-primary">
                  MARCO FERRARIO
                </span>
              </h2>

              <p className="text-lg mb-8 leading-relaxed text-gray-700">
                Trasformatore di business e mentor strategico con oltre 15 anni di esperienza nel settore delle vendite ad alto impatto. Marco ha guidato centinaia di aziende verso risultati straordinari.
              </p>
            </div>

            {/* Stats Cards - Horizontal Layout */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
                <div className="text-2xl lg:text-3xl font-bold mb-2 text-primary">
                  500+
                </div>
                <div className="text-sm font-medium text-gray-600">
                  Clienti
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
                <div className="text-2xl lg:text-3xl font-bold mb-2 text-primary">
                  15+
                </div>
                <div className="text-sm font-medium text-gray-600">
                  Anni Esperienza
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
                <div className="text-2xl lg:text-3xl font-bold mb-2 text-primary">
                  95%
                </div>
                <div className="text-sm font-medium text-gray-600">
                  Successo
                </div>
              </div>
            </div>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <span className="text-gray-700">
                  Strategia di vendita personalizzata
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <span className="text-gray-700">
                  Risultati misurabili e crescita sostenibile
                </span>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <Button className="group font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 bg-primary hover:bg-primary/90 text-white">
                <Users className="w-5 h-5 mr-3" />
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
