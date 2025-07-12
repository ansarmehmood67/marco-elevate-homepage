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
    <section className="py-32 bg-gradient-to-b from-white via-[#FAFBFC] to-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#55ACEE] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#2E8BC0] rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Hero Typography Section */}
        <div className="text-center space-y-20 mb-32">
          {/* Main Headlines - Clean & Bold */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-8xl font-black text-[#111827] leading-[0.8] tracking-tighter">
                MARKETING E VENDITE
              </h1>
              <div className="flex items-center justify-center gap-6">
                <div className="h-px bg-gradient-to-r from-transparent via-[#55ACEE] to-transparent flex-1 max-w-32"></div>
                <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-[#55ACEE] via-[#2E8BC0] to-[#87CEEB] bg-clip-text text-transparent">
                  PERFORMANTI
                </h2>
                <div className="h-px bg-gradient-to-r from-transparent via-[#55ACEE] to-transparent flex-1 max-w-32"></div>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-[#4B5563] tracking-wide">
                SCALABILI • CONTROLLABILI
              </h3>
            </div>
            
            <div className="relative inline-block">
              <h4 className="text-4xl md:text-7xl font-black text-[#111827] tracking-tight">
                IN OUTSOURCING
              </h4>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-[#55ACEE] to-[#2E8BC0] rounded-full"></div>
            </div>
          </div>
          
          {/* Content Cards - Elegant & Minimal */}
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Left Card - Description */}
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100/50 group-hover:shadow-2xl transition-all duration-700 transform group-hover:-translate-y-1">
                <div className="space-y-6">
                  <div className="w-12 h-1 bg-gradient-to-r from-[#55ACEE] to-[#2E8BC0] rounded-full"></div>
                  <p className="text-lg text-[#4B5563] leading-relaxed font-medium">
                    Sales on Demand è un'azienda specializzata nel costruire{" "}
                    <span className="font-bold text-[#111827]">funnel di vendita completi in outsourcing</span>. 
                    Un team esterno che lavora con la mentalità di un reparto interno: strategia, operatività e controllo.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Card - Quote + CTA */}
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100/50 group-hover:shadow-2xl transition-all duration-700 transform group-hover:-translate-y-1">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="w-12 h-1 bg-gradient-to-r from-[#87CEEB] to-[#55ACEE] rounded-full"></div>
                    <blockquote className="text-xl font-bold text-[#111827] italic leading-tight">
                      "Vendere non è più un problema.<br />
                      È un <span className="text-[#55ACEE]">processo strutturato</span>."
                    </blockquote>
                  </div>
                  
                  <button className="group/btn bg-gradient-to-r from-[#55ACEE] to-[#2E8BC0] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                    <span className="relative z-10">Inizia adesso</span>
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Brand Logos Section - Premium & Minimal */}
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-6">
            <h5 className="text-sm font-bold text-[#4B5563] uppercase tracking-widest">
              TRUSTED BY INDUSTRY LEADERS
            </h5>
            <h6 className="text-3xl font-black text-[#111827]">
              Scelti da più di <span className="text-[#55ACEE]">500</span> clienti
            </h6>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Aziende leader che hanno trasformato il loro business con le nostre soluzioni
            </p>
          </div>
          
          {/* Logos Container - Clean & Elegant */}
          <div className="relative">
            <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-3xl p-12 shadow-inner border border-gray-100/50">
              {/* Fade effects */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 via-white/80 to-transparent z-10 rounded-l-3xl"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 via-white/80 to-transparent z-10 rounded-r-3xl"></div>
              
              {/* Animated Logo Track */}
              <div className="flex animate-[slide_45s_linear_infinite] items-center gap-20">
                {/* First set */}
                {brandLogos.map((logo, index) => (
                  <div key={index} className="flex-shrink-0 group">
                    <div className="relative">
                      <img 
                        src={logo} 
                        alt={`Brand ${index + 1}`}
                        className="h-14 object-contain opacity-60 group-hover:opacity-100 transition-all duration-500 filter grayscale group-hover:grayscale-0"
                      />
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {brandLogos.map((logo, index) => (
                  <div key={`dup-${index}`} className="flex-shrink-0 group">
                    <div className="relative">
                      <img 
                        src={logo} 
                        alt={`Brand ${index + 1}`}
                        className="h-14 object-contain opacity-60 group-hover:opacity-100 transition-all duration-500 filter grayscale group-hover:grayscale-0"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Stats Bar - Minimal & Clean */}
            <div className="mt-12 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50">
              <div className="flex justify-center items-center divide-x divide-gray-200">
                <div className="px-8 text-center">
                  <div className="text-2xl font-black text-[#55ACEE]">500+</div>
                  <div className="text-sm font-medium text-[#6B7280]">Clienti</div>
                </div>
                <div className="px-8 text-center">
                  <div className="text-2xl font-black text-[#2E8BC0]">15+</div>
                  <div className="text-sm font-medium text-[#6B7280]">Anni</div>
                </div>
                <div className="px-8 text-center">
                  <div className="text-2xl font-black text-[#87CEEB]">95%</div>
                  <div className="text-sm font-medium text-[#6B7280]">Successo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
