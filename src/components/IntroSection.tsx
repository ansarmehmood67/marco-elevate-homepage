
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
    <section className="relative overflow-hidden">
      {/* Top Light Section with Enhanced Styling */}
      <div className="bg-gradient-to-br from-[#FAFAFA] via-[#F8FAFC] to-[#F1F5F9] py-24 relative">
        {/* Subtle background patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-[#55ACEE]/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-[#2E8BC0]/20 rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          {/* Main Headlines */}
          <div className="space-y-10">
            <div className="relative">
              <h1 className="text-5xl md:text-8xl font-black text-[#111827] leading-[0.85] tracking-tight">
                MARKETING E VENDITE<br />
                <span className="gradient-text bg-gradient-to-r from-[#55ACEE] via-[#2E8BC0] to-[#55ACEE] bg-clip-text text-transparent animate-gradient-x">
                  PERFORMANTI
                </span>
                <span className="text-[#111827]">,</span>
              </h1>
              {/* Decorative lines */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#55ACEE] to-[#2E8BC0] rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-[#4B5563] font-medium max-w-4xl mx-auto leading-relaxed backdrop-blur-sm bg-white/50 p-6 rounded-2xl border border-white/20 shadow-lg">
                Sales on Demand è un'azienda specializzata nel costruire funnel di vendita completi in outsourcing. 
                Un team esterno che lavora con la mentalità di un reparto interno: strategia, operatività e controllo, 
                tutto sotto un'unica regia.
              </p>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-[#111827] leading-tight tracking-tight">
              <span className="text-[#4B5563]">SCALABILI, CONTROLLABILI.</span><br />
              <span className="text-[#111827]">IN OUTSOURCING.</span>
            </h2>

            <div className="pt-8">
              <Button 
                size="xl" 
                className="bg-gradient-to-r from-[#55ACEE] to-[#2E8BC0] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-bold px-16 py-8 rounded-full text-xl shadow-2xl hover:shadow-[#55ACEE]/30 transform hover:scale-105 transition-all duration-300 border-2 border-white/20"
              >
                Inizia adesso
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Quote Section - Full Black Background */}
      <div className="bg-black py-20 relative overflow-hidden">
        {/* Enhanced geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-[#55ACEE]/30 rotate-45 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-[#87CEEB]/30 rotate-12 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-[#55ACEE]/20 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute top-20 right-1/4 w-12 h-12 bg-[#55ACEE]/10 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-[#87CEEB]/10 rotate-45 animate-pulse delay-1500"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <blockquote className="space-y-8">
            <div className="relative">
              <h3 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
                Vendere non è un problema.<br />
                <span className="gradient-text bg-gradient-to-r from-[#87CEEB] via-[#55ACEE] to-[#2E8BC0] bg-clip-text text-transparent">
                  è un processo strutturato
                </span>
              </h3>
              
              {/* Enhanced decorative elements */}
              <div className="absolute -top-6 -left-6 text-[#55ACEE] text-8xl opacity-20 font-serif animate-pulse">"</div>
              <div className="absolute -bottom-6 -right-6 text-[#87CEEB] text-8xl opacity-20 font-serif rotate-180 animate-pulse delay-1000">"</div>
            </div>

            <div className="pt-10">
              <Button 
                variant="outline" 
                size="lg"
                className="border-[#87CEEB] text-[#87CEEB] hover:bg-[#87CEEB] hover:text-black font-bold px-12 py-5 rounded-full backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Scopri come
              </Button>
            </div>
          </blockquote>
        </div>
      </div>

      {/* Brand Logos Section */}
      <div className="bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h4 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4">
              Scelti ogni giorno da più di 500 clienti
            </h4>
            <div className="w-24 h-1 bg-gradient-to-r from-[#55ACEE] to-[#2E8BC0] rounded-full mx-auto"></div>
          </div>
          
          {/* Animated Logo Slider */}
          <div className="relative overflow-hidden">
            {/* Fade effects */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10"></div>
            
            {/* Sliding logos */}
            <div className="flex animate-[slide_30s_linear_infinite] items-center gap-16">
              {/* First set */}
              {brandLogos.map((logo, index) => (
                <div key={index} className="flex-shrink-0 hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-white/10 backdrop-blur-sm">
                  <img 
                    src={logo} 
                    alt={`Brand ${index + 1}`}
                    className="h-14 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {brandLogos.map((logo, index) => (
                <div key={`dup-${index}`} className="flex-shrink-0 hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-white/10 backdrop-blur-sm">
                  <img 
                    src={logo} 
                    alt={`Brand ${index + 1}`}
                    className="h-14 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-[#55ACEE] rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-[#87CEEB] rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-[#2E8BC0] rounded-full opacity-20 animate-pulse delay-2000"></div>
    </section>
  );
};

export default IntroSection;
