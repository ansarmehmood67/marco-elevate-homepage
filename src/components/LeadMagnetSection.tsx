import { Button } from "@/components/ui/button";
import { BookOpen, Award, CheckCircle2, Target } from "lucide-react";

const LeadMagnetSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0A2E4F] via-[#1E4A6B] to-[#2E8BC0] relative overflow-hidden">
      {/* Animated Background Elements matching brand */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-br from-[#2E8BC0]/10 to-[#87CEEB]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-gradient-to-br from-[#87CEEB]/8 to-[#2E8BC0]/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-gradient-to-br from-[#2E8BC0]/15 to-transparent rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/3 right-16 w-24 h-24 bg-gradient-to-br from-[#87CEEB]/20 to-transparent rounded-full blur-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header Section - reduced spacing */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#2E8BC0]/20 to-[#87CEEB]/20 rounded-full border border-[#87CEEB]/30 shadow-lg mb-6 backdrop-blur-sm">
            <BookOpen className="w-5 h-5 text-[#87CEEB]" />
            <span className="text-white font-semibold text-sm tracking-wide">Risorsa esclusiva gratuita</span>
          </div>
          
          <div className="space-y-3 mb-6">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Scarica ora il libro di{" "}
              <span className="bg-gradient-to-r from-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent relative">
                Marco Ferrario
              </span>
            </h2>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex flex-wrap justify-center items-center gap-3 text-xl lg:text-2xl xl:text-3xl font-bold">
              <span className="text-[#87CEEB]">In vendita su Amazon</span>
              <Award className="w-6 h-6 text-[#87CEEB]" />
              <span className="text-white">è in regalo ed</span>
            </div>
            <div className="text-xl lg:text-2xl xl:text-3xl font-bold text-white">
              in versione integrale per te!
            </div>
          </div>
        </div>

        {/* Book Display - reduced spacing */}
        <div className="flex justify-center mb-12">
          <div className="relative group">
            <div className="absolute -inset-8 bg-gradient-to-r from-[#2E8BC0]/20 via-[#87CEEB]/15 to-[#2E8BC0]/20 rounded-full blur-3xl group-hover:blur-[40px] opacity-70 group-hover:opacity-100 transition-all duration-1000"></div>
            
            <img 
              src="/lovable-uploads/7a5a9505-672f-4d4e-b7c5-de56bbe2ebf5.png" 
              alt="Sales as a Service - Marco Ferrario Book Stack" 
              className="relative w-96 lg:w-[450px] xl:w-[500px] h-auto transform group-hover:scale-105 transition-all duration-1000 drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Guide Description - reduced spacing */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#87CEEB]"></div>
            <CheckCircle2 className="w-5 h-5 text-[#87CEEB]" />
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-[#87CEEB]"></div>
          </div>
          
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3">
            La guida completa al{" "}
            <span className="bg-gradient-to-r from-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
              Sales Outsourcing
            </span>
          </h3>
          
          <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Strategie, metodologie e casi studio per trasformare le tue vendite. Un 
            framework testato su oltre <span className="font-bold text-[#87CEEB]">500 aziende italiane</span>.
          </p>
        </div>

        {/* Features Grid - simplified without icons */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {[
            {
              title: "Framework completo di vendita",
              description: "Metodologie testate e comprovate"
            },
            {
              title: "Casi studio reali e risultati",
              description: "Esempi concreti di successo"
            },
            {
              title: "Template e checklist operative",
              description: "Strumenti pronti all'uso"
            }
          ].map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2E8BC0]/10 to-[#87CEEB]/10 rounded-2xl transform group-hover:scale-105 transition-all duration-500 shadow-lg group-hover:shadow-xl border border-[#87CEEB]/20"></div>
              
              <div className="relative p-6 text-center">
                <div className="w-8 h-8 mx-auto mb-3 rounded-full bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] flex items-center justify-center">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-white/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button matching website style */}
        <div className="text-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full blur opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
            
            <Button 
              className="relative font-semibold px-10 py-4 text-lg bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] text-white hover:from-[#87CEEB] hover:to-[#2E8BC0] rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-[#87CEEB]/20"
            >
              <BookOpen className="w-5 h-5 mr-3" />
              Scarica il libro gratuito
            </Button>
          </div>
          
          <p className="text-sm text-white/60 mt-4">
            ✓ Download immediato • ✓ Nessun costo nascosto • ✓ Contenuto di valore garantito
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;