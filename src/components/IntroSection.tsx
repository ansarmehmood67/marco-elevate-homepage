
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Users, Target } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const IntroSection = () => {
  const { ref, visibleItems } = useStaggeredAnimation(5, 120);
  const brandLogos = [
    "/lovable-uploads/c015aef0-9ac6-47d5-8f1b-ea8aff14dd08.png", // TUTELAIMPRESA
    "/lovable-uploads/655e08e7-f709-41c5-9b01-f624d4dea2ce.png", // karon
    "/lovable-uploads/fe2c67ca-9c86-4598-b7ce-05d1ef35dbbf.png", // VORSICHER
    "/lovable-uploads/871bbc8b-f67d-4537-a7a2-574d06a9e919.png", // inplace
    "/lovable-uploads/d4a117b0-a098-4850-9d53-82ee30cbdb21.png", // edilgo
    "/lovable-uploads/5a8470d1-8aa8-4ee0-a0c5-efbe23f61c0b.png", // easycassa
    "/lovable-uploads/57e4bdda-6fe0-4184-b948-1e51ef3229c1.png", // CROWN
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Hero Section with Modern Design */}
      <div className="bg-white py-24 lg:py-32 relative">
        

        <div ref={ref} className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-12">
            {/* Premium Badge */}
            <div className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2E8BC0]/10 to-[#87CEEB]/10 rounded-full border border-[#2E8BC0]/20 backdrop-blur-sm transition-all duration-700 ease-out ${
              visibleItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Sparkles className="w-4 h-4 text-[#2E8BC0]" />
              <span className="text-[#2E8BC0] font-semibold text-sm">OUTSOURCING END-TO-END</span>
            </div>

            {/* Main Headlines with Modern Typography and scroll animations */}
            <div className="space-y-8">
              <div className={`transition-all duration-700 ease-out ${
                visibleItems[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <h1 className="text-5xl lg:text-7xl font-black leading-[0.8] tracking-tight text-black mb-10">
                  Il tuo reparto vendite e marketing,{" "}
                  <span className="bg-gradient-to-r from-[#2E8BC0] via-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                    pronto all'uso
                  </span>
                </h1>
              </div>
              
              <div className={`transition-all duration-700 ease-out ${
                visibleItems[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-4xl mx-auto leading-relaxed">
                  Sales on Demand si occupa di strategia, esecuzione e ottimizzazione dei tuoi funnel, offrendo team operativi in outsourcing che lavorano come un reparto interno. A guidare il progetto c'è la consulenza diretta di un direttore vendite e marketing esperto, che definisce le priorità operative e supervisiona i risultati.
                </p>
              </div>

              <div className={`transition-all duration-700 ease-out ${
                visibleItems[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <p className="text-lg text-[#2E8BC0] font-semibold max-w-3xl mx-auto">
                  Inizia con un audit rapido e ricevi il piano operativo su misura.
                </p>
              </div>
            </div>

            {/* CTA Button with animation */}
            <div className={`pt-8 transition-all duration-700 ease-out ${
              visibleItems[4] ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}>
              <div className="relative inline-block group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full blur opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
                <Button 
                  size="xl" 
                  className="relative bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] hover:from-[#87CEEB] hover:to-[#2E8BC0] text-white font-bold px-12 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.location.href = '/quiz'}
                >
                  <span className="flex items-center gap-3">
                    Inizia subito
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </div>
              
              <div className="mt-6">
                <p className="text-sm text-slate-500">
                  Audit 30 min • Nessun impegno • Risposta entro 2 ore • 500+ clienti
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Brand Logos Section with Premium Solutions Styling */}
      <div className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M0 0h80v80H0V0zm10 10h60v60H10V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          {/* Radial Gradients */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-primary-glow/15 via-transparent to-transparent rounded-full blur-3xl"></div>
        </div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-primary-glow/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-br from-primary-glow/20 to-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-white/5 to-primary/10 rounded-full blur-xl animate-pulse delay-2000"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Enhanced Header Section matching Premium Solutions */}
          <div className="text-center max-w-5xl mx-auto mb-24">
            <div className="inline-block mb-8 group">
              <span className="text-sm font-bold tracking-[0.3em] uppercase px-8 py-4 rounded-full bg-gradient-to-r from-primary/20 to-primary-glow/20 text-primary border border-primary/30 backdrop-blur-sm shadow-lg hover:shadow-primary/20 transition-all duration-300 group-hover:scale-105">
                <Users className="w-4 h-4 inline-block mr-2" />
                Clienti di Fiducia
              </span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.8] tracking-tight text-white mb-10 group">
              <span className="inline-block transform transition-transform duration-500 group-hover:scale-105">
                Scelti ogni giorno da{" "}
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent inline-block transform transition-transform duration-500 hover:scale-110 ">
                500+ Aziende
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto font-light">
              Dalle startup alle grandi aziende, ci fidano per la loro crescita.<br />
              <span className="text-primary font-medium">Ogni progetto è una partnership di successo.</span>
            </p>
            
            {/* Enhanced visual separator */}
            <div className="mt-12 flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
            </div>
          </div>
          
          {/* Enhanced Logo Slider */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-white/5 via-white/10 to-white/5 p-8 border border-white/10 backdrop-blur-sm shadow-2xl">
            {/* Fade effects */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent z-10"></div>
            
            {/* Sliding logos */}
            <div className="flex animate-[slide_20s_linear_infinite] items-center gap-16">
              {/* First set */}
              {brandLogos.map((logo, index) => (
                <div key={index} className="flex-shrink-0 group">
                  <div className="p-4 rounded-xl bg-white shadow-lg border border-white/20 group-hover:shadow-xl group-hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                    <img 
                      src={logo} 
                      alt={`Brand ${index + 1}`}
                      className="h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {brandLogos.map((logo, index) => (
                <div key={`dup-${index}`} className="flex-shrink-0 group">
                  <div className="p-4 rounded-xl bg-white shadow-lg border border-white/20 group-hover:shadow-xl group-hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                    <img 
                      src={logo} 
                      alt={`Brand ${index + 1}`}
                      className="h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/3 right-1/5 w-2 h-32 bg-gradient-to-b from-primary/30 to-transparent transform rotate-45 animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-1/6 w-1 h-24 bg-gradient-to-t from-primary-glow/40 to-transparent animate-pulse delay-1500"></div>
      </div>

      {/* Quote Section with Modern Design */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#2E8BC0]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#87CEEB]/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="space-y-8">
            {/* Quote Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
              <span className="text-[#87CEEB] font-medium text-sm">La nostra filosofia</span>
            </div>

            <blockquote className="space-y-6">
              <div className="relative">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Processi chiari. Team in outsourcing.
                <br />
                <span className="bg-gradient-to-r from-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl">
                  Risultati veri.
                </span>
              </h3>
                
                {/* Modern Quote Marks */}
                <div className="absolute -top-6 -left-6 w-8 h-8 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] rounded-lg flex items-center justify-center opacity-20">
                  <span className="text-white text-lg font-bold">"</span>
                </div>
              </div>

              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Mettiamo a disposizione marketing, vendite e direzione strategica in outsourcing per trasformare le attività in risultati misurabili.
              </p>

              <div className="pt-6">
                <Button 
                  size="lg"
                  className="bg-white/10 text-white hover:bg-white/20 font-semibold px-10 py-4 rounded-full transition-all duration-300 border border-white/20 hover:border-white/30 backdrop-blur-sm"
                >
                  <span className="flex items-center gap-2">
                    Prenota audit rapido
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
                
                <div className="mt-4">
                  <p className="text-sm text-slate-400">
                    Audit 30 min • Nessun impegno • Risposta entro 2 ore • 500+ clienti
                  </p>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Remove duplicate logos section since moved above */}

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-[#2E8BC0] rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-[#87CEEB] rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-[#2E8BC0] rounded-full opacity-20 animate-pulse delay-2000"></div>
      
      <style>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default IntroSection;
