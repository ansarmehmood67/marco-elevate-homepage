import { Button } from "@/components/ui/button";
import { Star, Sparkles, BookOpen, Award, CheckCircle2 } from "lucide-react";

const LeadMagnetSection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-500/8 to-blue-700/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-gradient-to-br from-blue-300/15 to-transparent rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/3 right-16 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header Section with Enhanced Typography */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full border border-blue-200/50 shadow-lg mb-8 backdrop-blur-sm">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm tracking-wide uppercase">Risorsa Esclusiva Gratuita</span>
            <Sparkles className="w-4 h-4 text-blue-500" />
          </div>
          
          {/* Elegant Main Headline */}
          <div className="space-y-4 mb-8">
            <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight tracking-tight">
              Scarica ora il libro di{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent relative">
                Marco Ferrario
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-30"></div>
              </span>
            </h2>
          </div>
          
          {/* Stylized Amazon Reference */}
          <div className="space-y-3 mb-6">
            <div className="flex flex-wrap justify-center items-center gap-3 text-2xl lg:text-3xl xl:text-4xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                In vendita su Amazon
              </span>
              <Award className="w-8 h-8 text-amber-500" />
              <span className="text-slate-800">è in regalo ed</span>
            </div>
            <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-800">
              in versione integrale per te!
            </div>
          </div>
        </div>

        {/* Enhanced Book Display */}
        <div className="flex justify-center mb-24">
          <div className="relative group">
            {/* Multiple layered glow effects */}
            <div className="absolute -inset-12 bg-gradient-to-r from-blue-400/20 via-blue-500/15 to-blue-600/20 rounded-full blur-3xl group-hover:blur-[50px] opacity-70 group-hover:opacity-100 transition-all duration-1000"></div>
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-300/15 to-blue-500/15 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
            
            {/* Floating particles effect */}
            <div className="absolute -inset-6 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <div className="absolute top-0 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-1/4 right-0 w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <img 
              src="/lovable-uploads/7a5a9505-672f-4d4e-b7c5-de56bbe2ebf5.png" 
              alt="Sales as a Service - Marco Ferrario Book Stack" 
              className="relative w-96 lg:w-[550px] xl:w-[600px] h-auto transform group-hover:scale-110 transition-all duration-1000 drop-shadow-2xl filter group-hover:brightness-110"
            />
          </div>
        </div>

        {/* Elegant Guide Description */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-400"></div>
            <CheckCircle2 className="w-6 h-6 text-blue-600" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-blue-400"></div>
          </div>
          
          <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4">
            La guida completa al{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Sales Outsourcing
            </span>
          </h3>
          
          <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto font-medium">
            Strategie, metodologie e casi studio per trasformare le tue vendite. Un 
            framework testato su oltre <span className="font-bold text-blue-700">500 aziende italiane</span>.
          </p>
        </div>

        {/* Premium Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {[
            {
              title: "Framework completo",
              subtitle: "di vendita",
              icon: "🎯",
              description: "Metodologie testate e comprovate"
            },
            {
              title: "Casi studio reali",
              subtitle: "e risultati",
              icon: "📊",
              description: "Esempi concreti di successo"
            },
            {
              title: "Template e checklist",
              subtitle: "operative",
              icon: "🛠️",
              description: "Strumenti pronti all'uso"
            }
          ].map((feature, index) => (
            <div key={index} className="group relative">
              {/* Card with advanced styling */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white rounded-3xl transform group-hover:scale-105 transition-all duration-500 shadow-lg group-hover:shadow-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <div className="relative p-8 text-center">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">{feature.title}</h4>
                <h5 className="text-xl font-bold text-slate-900 mb-3">{feature.subtitle}</h5>
                <p className="text-sm text-slate-600 font-medium">{feature.description}</p>
                
                {/* Decorative element */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium CTA Button matching hero style */}
        <div className="text-center">
          <div className="relative inline-block group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full blur opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
            
            <Button 
              className="relative font-semibold px-12 py-6 text-lg bg-white text-blue-900 hover:bg-blue-50 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-blue-100 hover:border-blue-200"
            >
              <BookOpen className="w-5 h-5 mr-3" />
              Scarica il libro gratuito
              <Sparkles className="w-4 h-4 ml-3" />
            </Button>
          </div>
          
          {/* Trust indicator */}
          <p className="text-sm text-slate-500 mt-4 font-medium">
            ✓ Download immediato • ✓ Nessun costo nascosto • ✓ Contenuto di valore garantito
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;