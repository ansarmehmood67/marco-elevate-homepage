
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
      {/* Top Light Section */}
      <div className="bg-gradient-to-br from-[#FAFAFA] via-[#F8FAFC] to-[#F1F5F9] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Main Headlines */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-black text-[#111827] leading-[0.85] tracking-tight">
              MARKETING E VENDITE<br />
              <span className="gradient-text bg-gradient-to-r from-[#55ACEE] to-[#2E8BC0] bg-clip-text text-transparent">
                PERFORMANTI
              </span>
              <span className="text-[#111827]">,</span>
            </h1>
            
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-[#4B5563] font-medium max-w-3xl mx-auto leading-relaxed">
                Sales on Demand è un'azienda specializzata nel costruire funnel di vendita completi in outsourcing. 
                Un team esterno che lavora con la mentalità di un reparto interno: strategia, operatività e controllo, 
                tutto sotto un'unica regia.
              </p>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-[#111827] leading-tight tracking-tight">
              <span className="text-[#4B5563]">SCALABILI, CONTROLLABILI.</span><br />
              <span className="text-[#111827]">IN OUTSOURCING.</span>
            </h2>

            <div className="pt-6">
              <Button 
                size="xl" 
                className="bg-gradient-to-r from-[#55ACEE] to-[#2E8BC0] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-bold px-12 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Inizia adesso
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Quote Section */}
      <div className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote className="space-y-6">
            <div className="relative">
              <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Vendere non è un problema.<br />
                <span className="gradient-text bg-gradient-to-r from-[#87CEEB] to-[#55ACEE] bg-clip-text text-transparent">
                  è un processo strutturato
                </span>
              </h3>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 text-[#55ACEE] text-6xl opacity-30 font-serif">"</div>
              <div className="absolute -bottom-4 -right-4 text-[#55ACEE] text-6xl opacity-30 font-serif rotate-180">"</div>
            </div>

            <div className="pt-8">
              <Button 
                size="lg"
                className="bg-black text-white hover:bg-gray-800 font-semibold px-10 py-4 rounded-full transition-all duration-300"
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
                <div key={index} className="flex-shrink-0 hover:scale-110 transition-all duration-300">
                  <img 
                    src={logo} 
                    alt={`Brand ${index + 1}`}
                    className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {brandLogos.map((logo, index) => (
                <div key={`dup-${index}`} className="flex-shrink-0 hover:scale-110 transition-all duration-300">
                  <img 
                    src={logo} 
                    alt={`Brand ${index + 1}`}
                    className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
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
