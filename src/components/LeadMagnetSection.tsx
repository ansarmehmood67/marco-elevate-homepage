import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const LeadMagnetSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#55ACEE]/8 to-[#87CEEB]/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#87CEEB]/8 to-[#55ACEE]/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-br from-[#55ACEE]/5 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-gradient-to-br from-[#87CEEB]/5 to-transparent rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          {/* Main Headline */}
          <h2 className="text-5xl lg:text-7xl font-black text-[#111827] mb-8 leading-tight tracking-tight">
            SCARICA ORA IL LIBRO DI MARCO FERRARIO:
          </h2>
          
          {/* Highlighted Amazon text */}
          <div className="mb-6">
            <span className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#55ACEE] via-[#87CEEB] to-[#55ACEE] bg-clip-text text-transparent animate-gradient">
              IN VENDITA SU AMAZON
            </span>
            <span className="text-4xl lg:text-5xl font-black text-[#111827] ml-3">
              É IN REGALO ED
            </span>
          </div>
          <div className="text-4xl lg:text-5xl font-black text-[#111827] mb-20">
            IN VERSIONE INTEGRALE PER TE!
          </div>
        </div>

        {/* Book Image */}
        <div className="flex justify-center mb-16">
          <div className="relative group">
            <div className="absolute -inset-8 bg-gradient-to-r from-[#55ACEE]/10 to-[#87CEEB]/10 rounded-full blur-3xl group-hover:blur-[40px] opacity-60 group-hover:opacity-80 transition-all duration-700"></div>
            <img 
              src="/lovable-uploads/7a5a9505-672f-4d4e-b7c5-de56bbe2ebf5.png" 
              alt="Sales as a Service - Marco Ferrario Book Stack" 
              className="relative w-96 lg:w-[500px] h-auto transform group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Guide Title */}
        <div className="text-center mb-12">
          <h3 className="text-4xl lg:text-5xl font-black text-[#111827] mb-4">
            LA GUIDA COMPLETA AL
          </h3>
          <h4 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] bg-clip-text text-transparent mb-6">
            SALES OUTSOURCING
          </h4>
          <p className="text-xl text-[#4B5563] leading-relaxed max-w-3xl mx-auto font-medium">
            Strategie, metodologie e casi studio per trasformare le tue vendite. Un 
            framework testato su oltre 500 aziende italiane.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Framework completo di",
              subtitle: "vendita",
              icon: "⭐"
            },
            {
              title: "Casi studio reali e risultati",
              subtitle: "",
              icon: "⭐"
            },
            {
              title: "Template e checklist",
              subtitle: "operative",
              icon: "⭐"
            }
          ].map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#55ACEE]/10 to-[#87CEEB]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 group-hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <div className="text-lg font-bold text-[#111827]">
                    {feature.title}
                  </div>
                  {feature.subtitle && (
                    <div className="text-lg font-bold text-[#111827]">
                      {feature.subtitle}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-20">
          <div className="relative inline-block group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] rounded-full blur opacity-60 group-hover:opacity-100 transition-all duration-300"></div>
            <Button 
              size="lg" 
              className="relative px-16 py-8 text-2xl font-black bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 border-4 border-white/30"
            >
              SCARICA IL LIBRO GRATUITO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;