import { Button } from "@/components/ui/button";

const IntroSection = () => {
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
    <section className="py-24 bg-gradient-to-br from-[#FAFAFA] via-white to-[#F8FAFC] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#55ACEE] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2E8BC0] rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Hero Content */}
        <div className="text-center space-y-16 mb-32">
          {/* Premium Headlines with Glass Effect */}
          <div className="space-y-8">
            <div className="inline-block bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20 relative">
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-[#55ACEE] to-[#2E8BC0] rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-[#87CEEB] to-[#55ACEE] rounded-full opacity-40"></div>
              
              <h1 className="text-4xl md:text-7xl font-black text-[#111827] leading-[0.85] tracking-tight">
                MARKETING E VENDITE<br />
                <span className="bg-gradient-to-r from-[#55ACEE] via-[#2E8BC0] to-[#87CEEB] bg-clip-text text-transparent">
                  PERFORMANTI
                </span>,<br />
                <span className="text-slate-600">SCALABILI, CONTROLLABILI.</span>
              </h1>
            </div>
            
            <div className="relative inline-block">
              <div className="bg-gradient-to-r from-[#55ACEE] to-[#2E8BC0] p-1 rounded-3xl">
                <div className="bg-white rounded-3xl px-12 py-6">
                  <h2 className="text-3xl md:text-6xl font-black text-[#111827] tracking-tight">
                    IN OUTSOURCING.
                  </h2>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#55ACEE]/20 to-[#2E8BC0]/20 rounded-3xl blur-xl scale-110"></div>
            </div>
          </div>
          
          {/* Premium Content Layout */}
          <div className="grid lg:grid-cols-3 gap-12 items-start max-w-6xl mx-auto">
            {/* Left - Key Message */}
            <div className="lg:col-span-1">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-[#55ACEE] to-[#2E8BC0] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-2xl font-bold">🎯</span>
                </div>
                <p className="text-xl font-bold text-[#111827] italic text-center leading-tight">
                  "Vendere non è più un problema.<br />È un <span className="text-[#55ACEE]">processo strutturato</span>."
                </p>
              </div>
            </div>
            
            {/* Center - Description */}
            <div className="lg:col-span-1">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-2xl font-bold">⚡</span>
                </div>
                <p className="text-lg text-[#4B5563] leading-relaxed text-center">
                  Sales on Demand è un'azienda specializzata nel costruire <strong className="text-[#55ACEE]">funnel di vendita completi</strong> in outsourcing. Un team esterno che lavora con la mentalità di un reparto interno.
                </p>
              </div>
            </div>
            
            {/* Right - CTA */}
            <div className="lg:col-span-1">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#87CEEB] to-[#55ACEE] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-2xl font-bold">🚀</span>
                </div>
                <p className="text-lg text-[#4B5563] mb-6">
                  Pronto a trasformare il tuo business?
                </p>
                <Button className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-bold px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 w-full">
                  Inizia adesso
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Premium Brand Logos Section */}
        <div className="relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-xl border border-white/30 mb-6">
              <h3 className="text-3xl font-black text-[#111827]">
                Scelti ogni giorno da più di <span className="text-[#55ACEE]">500 clienti</span>
              </h3>
            </div>
            <p className="text-lg text-[#4B5563]">Aziende leader che hanno trasformato il loro business con noi</p>
          </div>
          
          {/* Premium Logo Container */}
          <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/40 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-8 w-24 h-24 bg-[#55ACEE] rounded-full blur-2xl" />
              <div className="absolute bottom-4 right-8 w-32 h-32 bg-[#2E8BC0] rounded-full blur-2xl" />
            </div>
            
            {/* Enhanced Fade effects */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white/60 via-white/40 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white/60 via-white/40 to-transparent z-10"></div>
            
            {/* Premium Sliding logos */}
            <div className="flex animate-[slide_40s_linear_infinite] items-center gap-20 py-4">
              {/* First set */}
              {brandLogos.map((logo, index) => (
                <div key={index} className="flex-shrink-0 group">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-2xl hover:scale-110 transition-all duration-500 group-hover:bg-white/90">
                    <img 
                      src={logo} 
                      alt={`Brand ${index + 1}`}
                      className="h-16 object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {brandLogos.map((logo, index) => (
                <div key={`dup-${index}`} className="flex-shrink-0 group">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-2xl hover:scale-110 transition-all duration-500 group-hover:bg-white/90">
                    <img 
                      src={logo} 
                      alt={`Brand ${index + 1}`}
                      className="h-16 object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/30">
              <div className="text-center">
                <div className="text-3xl font-black text-[#55ACEE] mb-2">500+</div>
                <div className="text-sm font-semibold text-[#4B5563]">Clienti Attivi</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#2E8BC0] mb-2">15+</div>
                <div className="text-sm font-semibold text-[#4B5563]">Anni Esperienza</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#87CEEB] mb-2">95%</div>
                <div className="text-sm font-semibold text-[#4B5563]">Tasso Successo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
