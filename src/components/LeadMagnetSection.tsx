import { Button } from "@/components/ui/button";
import { BookOpen, Award, CheckCircle2, Target } from "lucide-react";

interface LeadMagnetSectionProps {
  visibleItems?: boolean[];
}

const LeadMagnetSection = ({ visibleItems = [false, false] }: LeadMagnetSectionProps) => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Subtle Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-primary-glow/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-gradient-to-br from-primary-glow/4 to-primary/3 rounded-full blur-3xl"></div>
        
        {/* Subtle Premium Effects */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header Section with Enhanced Prominence */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-full border border-primary/20 backdrop-blur-sm mb-8 transition-all duration-1000 ${
            visibleItems[0] ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
          }`}>
            <Award className="w-6 h-6 text-primary" />
            <span className="text-primary font-bold text-sm tracking-[0.3em] uppercase">RISORSA ESCLUSIVA GRATUITA</span>
            <Award className="w-6 h-6 text-primary" />
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tight text-slate-800 mb-8">
            <span className={`inline-block transform transition-all duration-1000 ${
              visibleItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              Guida per far{" "}
            </span>
            <br />
            <span className={`bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent inline-block transition-all duration-1000 ${
              visibleItems[1] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              crescere il business
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-5xl mx-auto font-medium">
            La guida completa di <span className="text-primary font-bold">Marco Ferrario</span> per trasformare vendite e marketing con strategie comprovate su oltre <span className="text-primary font-bold">500 aziende</span>.
          </p>
        </div>

        {/* Refined Book Display */}
        <div className="flex justify-center mb-12">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary-glow/15 to-primary/20 rounded-xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
            
            <img 
              src="/lovable-uploads/7a5a9505-672f-4d4e-b7c5-de56bbe2ebf5.png" 
              alt="Sales as a Service - Marco Ferrario Book Stack" 
              className="relative w-[400px] lg:w-[500px] xl:w-[550px] h-auto transform group-hover:scale-105 transition-all duration-500 drop-shadow-xl"
            />
          </div>
        </div>

        {/* Refined Guide Description */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <CheckCircle2 className="w-6 h-6 text-primary" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent via-primary to-transparent"></div>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-slate-800 mb-4 leading-[0.9] tracking-tight">
            La guida completa al{" "}
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Sales Outsourcing
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto font-medium">
            Strategie, metodologie e casi studio per trasformare le tue vendite. Un 
            framework testato su oltre <span className="font-bold text-primary">500 aziende italiane</span>.
          </p>
        </div>

        {/* Refined Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
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
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-50 rounded-2xl border border-slate-200 transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl"></div>
              
              <div className="relative p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg lg:text-xl font-bold text-slate-800 mb-3 leading-tight">{feature.title}</h4>
                <p className="text-sm lg:text-base text-slate-600 font-medium">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Refined Premium CTA Button */}
        <div className="text-center">
          <div className="relative inline-block group mb-8">
            <a href="/sales-as-a-service-book">
              <Button 
                className="relative font-bold px-12 py-4 text-lg bg-gradient-to-r from-primary to-primary-glow text-white hover:from-primary-glow hover:to-primary rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-primary/20"
              >
                <BookOpen className="w-6 h-6 mr-3" />
                Scarica la Guida Gratuita Ora
              </Button>
            </a>
          </div>
          
          <div className="inline-flex flex-wrap items-center justify-center gap-4 px-6 py-3 bg-slate-100/80 rounded-xl border border-slate-200 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-slate-700">Download immediato</span>
            </div>
            <div className="w-px h-4 bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-slate-700">Nessun costo nascosto</span>
            </div>
            <div className="w-px h-4 bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-slate-700">Contenuto di valore garantito</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;