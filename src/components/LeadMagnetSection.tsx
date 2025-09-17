import { Button } from "@/components/ui/button";
import { BookOpen, Award, CheckCircle2, Target } from "lucide-react";

interface LeadMagnetSectionProps {
  visibleItems?: boolean[];
}

const LeadMagnetSection = ({ visibleItems = [false, false] }: LeadMagnetSectionProps) => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Enhanced Premium Background with Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Premium Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 to-primary-glow/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary-glow/25 to-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-10 w-48 h-48 bg-gradient-to-br from-primary/40 to-transparent rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/3 right-16 w-40 h-40 bg-gradient-to-br from-primary-glow/50 to-transparent rounded-full blur-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        
        {/* Additional Premium Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header Section with Enhanced Prominence */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-full border border-primary/30 backdrop-blur-sm mb-8 transition-all duration-1000 ${
            visibleItems[0] ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
          }`}>
            <Award className="w-6 h-6 text-primary-glow" />
            <span className="text-primary-glow font-bold text-lg tracking-[0.2em] uppercase">RISORSA ESCLUSIVA GRATUITA</span>
            <Award className="w-6 h-6 text-primary-glow" />
          </div>
          
          <h2 className="text-6xl lg:text-8xl xl:text-9xl font-black leading-[0.85] tracking-tight text-white mb-12 pb-6">
            <span className={`inline-block transform transition-all duration-1000 ${
              visibleItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              Guida per far{" "}
            </span>
            <br />
            <span className={`bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent inline-block transition-all duration-1000 animate-swipe-in-left ${
              visibleItems[1] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              crescere il business
            </span>
          </h2>
          
          <p className="text-2xl lg:text-3xl xl:text-4xl leading-relaxed text-slate-200 max-w-5xl mx-auto font-medium">
            La guida completa di <span className="text-primary-glow font-bold">Marco Ferrario</span> per trasformare vendite e marketing con strategie comprovate su oltre <span className="text-primary-glow font-bold">500 aziende</span>.
          </p>
        </div>

        {/* Enhanced Book Display */}
        <div className="flex justify-center mb-16">
          <div className="relative group">
            <div className="absolute -inset-16 bg-gradient-to-r from-primary/40 via-primary-glow/30 to-primary/40 rounded-full blur-3xl group-hover:blur-[50px] opacity-80 group-hover:opacity-100 transition-all duration-1000"></div>
            
            <img 
              src="/lovable-uploads/7a5a9505-672f-4d4e-b7c5-de56bbe2ebf5.png" 
              alt="Sales as a Service - Marco Ferrario Book Stack" 
              className="relative w-[500px] lg:w-[600px] xl:w-[700px] h-auto transform group-hover:scale-110 transition-all duration-1000 drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Enhanced Guide Description */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary-glow to-transparent"></div>
            <CheckCircle2 className="w-8 h-8 text-primary-glow" />
            <div className="w-16 h-1 bg-gradient-to-l from-transparent via-primary-glow to-transparent"></div>
          </div>
          
          <h3 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6 leading-tight">
            La guida completa al{" "}
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Sales Outsourcing
            </span>
          </h3>
          
          <p className="text-xl lg:text-2xl xl:text-3xl text-slate-200 leading-relaxed max-w-4xl mx-auto font-medium">
            Strategie, metodologie e casi studio per trasformare le tue vendite. Un 
            framework testato su oltre <span className="font-bold text-primary-glow">500 aziende italiane</span>.
          </p>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {[
            {
              title: "Framework completo di vendita",
              description: "Metodologie testate e comprovate",
              icon: Target
            },
            {
              title: "Casi studio reali e risultati",
              description: "Esempi concreti di successo",
              icon: Award
            },
            {
              title: "Template e checklist operative",
              description: "Strumenti pronti all'uso",
              icon: CheckCircle2
            }
          ].map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 via-slate-700/60 to-slate-800/80 rounded-3xl border border-primary/30 transform group-hover:scale-105 transition-all duration-500 shadow-2xl group-hover:shadow-primary/20"></div>
              
              <div className="relative p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center shadow-lg group-hover:shadow-primary/50 transition-all duration-500">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl lg:text-2xl font-bold text-white mb-4 leading-tight">{feature.title}</h4>
                <p className="text-lg text-slate-300 font-medium">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Premium CTA Button */}
        <div className="text-center">
          <div className="relative inline-block group mb-8">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary via-primary-glow to-primary rounded-full blur opacity-75 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
            
            <a href="/sales-as-a-service-book">
              <Button 
                className="relative font-bold px-16 py-6 text-xl lg:text-2xl bg-gradient-to-r from-primary to-primary-glow text-white hover:from-primary-glow hover:to-primary rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-110 border border-primary-glow/20"
              >
                <BookOpen className="w-7 h-7 mr-4" />
                Scarica la Guida Gratuita Ora
              </Button>
            </a>
          </div>
          
          <div className="inline-flex flex-wrap items-center justify-center gap-4 px-8 py-4 bg-slate-800/60 rounded-2xl border border-primary/20 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-glow" />
              <span className="text-lg font-bold text-white">Download immediato</span>
            </div>
            <div className="w-px h-6 bg-primary/30"></div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-glow" />
              <span className="text-lg font-bold text-white">Nessun costo nascosto</span>
            </div>
            <div className="w-px h-6 bg-primary/30"></div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-glow" />
              <span className="text-lg font-bold text-white">Contenuto di valore garantito</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;