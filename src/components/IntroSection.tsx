
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

      {/* Premium Brand Logos Section with Sophisticated Light Background */}
      <div className="py-20 lg:py-32 bg-gradient-to-br from-slate-100 via-blue-50/50 to-indigo-50/30 relative overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute inset-0">
          {/* Sophisticated Grid Pattern */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grain' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='50' cy='50' r='1' fill='%232E8BC0' fill-opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grain)'/%3E%3C/svg%3E")`
          }}></div>
          
          {/* Premium Radial Gradients */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-primary/20 via-primary-glow/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-indigo-300/15 via-blue-200/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-full blur-3xl"></div>
          
          {/* Glass Morphism Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/20 backdrop-blur-[1px]"></div>
        </div>
        
        {/* Premium Floating Elements */}
        <div className="absolute top-32 left-20 w-40 h-40 bg-gradient-to-br from-primary/15 to-primary-glow/8 rounded-full blur-2xl animate-pulse opacity-60"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 bg-gradient-to-br from-indigo-200/20 to-blue-300/10 rounded-full blur-3xl animate-pulse delay-1000 opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-slate-300/15 to-primary/8 rounded-full blur-xl animate-pulse delay-2000 opacity-40"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Premium Header Section */}
          <div className="text-center max-w-5xl mx-auto mb-24">
            <div className="inline-block mb-8 group">
              <span className="text-sm font-bold tracking-[0.3em] uppercase px-10 py-5 rounded-full bg-gradient-to-r from-white/80 via-white/60 to-white/80 text-primary border border-primary/20 backdrop-blur-md shadow-2xl hover:shadow-primary/20 transition-all duration-500 group-hover:scale-105 group-hover:border-primary/30">
                <Users className="w-4 h-4 inline-block mr-3" />
                Clienti di Fiducia
              </span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.8] tracking-tight text-slate-800 mb-12 group">
              <span className="inline-block transform transition-transform duration-500 group-hover:scale-105">
                Scelti ogni giorno da{" "}
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-primary-glow to-indigo-500 bg-clip-text text-transparent inline-block transform transition-transform duration-500 hover:scale-110 drop-shadow-sm">
                500+ Aziende
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl leading-relaxed text-slate-700 max-w-4xl mx-auto font-light mb-8">
              Dalle startup alle grandi aziende, ci fidano per la loro crescita.<br />
              <span className="text-primary font-semibold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Ogni progetto è una partnership di successo.</span>
            </p>
            
            {/* Premium visual separator with glow effect */}
            <div className="mt-16 flex justify-center">
              <div className="relative">
                <div className="w-40 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
                <div className="absolute inset-0 w-40 h-1 bg-gradient-to-r from-transparent via-primary-glow to-transparent rounded-full blur-sm opacity-50"></div>
              </div>
            </div>
          </div>
          
          {/* Premium Logo Slider with Glass Morphism */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-white/70 via-white/85 to-white/70 p-10 border border-white/50 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500">
            {/* Premium fade effects with sophisticated gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-100/90 via-blue-50/60 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-100/90 via-blue-50/60 to-transparent z-10"></div>
            
            {/* Inner glow effect */}
            <div className="absolute inset-2 rounded-2xl bg-gradient-to-r from-primary/5 via-transparent to-primary-glow/5 pointer-events-none"></div>
            
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

      {/* Quote Section with Video Background */}
      <div className="relative py-20 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1756303017/Untitled_design_16_ptw7gt.mp4" type="video/mp4" />
          </video>
          
          {/* Rich Overlay - Similar to Hero Sections */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/70 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#2E8BC0]/15 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#87CEEB]/10 to-transparent rounded-full blur-3xl"></div>
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
