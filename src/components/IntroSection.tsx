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
    <section className="py-20 bg-gradient-to-br from-[#FAFAFA] to-[#F3F4F6]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Content - Minimal Layout */}
        <div className="text-center space-y-12 mb-20">
          {/* Main Headlines */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-[#111827] leading-[0.9] tracking-tight">
              MARKETING E VENDITE<br />
              <span className="text-[#55ACEE]">PERFORMANTI</span>,<br />
              <span className="text-slate-600">SCALABILI, CONTROLLABILI.</span>
            </h2>
            
            <div className="relative">
              <h3 className="text-5xl md:text-7xl font-black text-[#111827] tracking-tight relative z-10">
                IN OUTSOURCING.
              </h3>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#55ACEE] to-[#2E8BC0] rounded-full"></div>
            </div>
          </div>
          
          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Left - Description */}
            <div className="space-y-6 text-left">
              <p className="text-lg text-[#4B5563] leading-relaxed">
                Sales on Demand è un'azienda specializzata nel costruire funnel di vendita completi in outsourcing. Un team esterno che lavora con la mentalità di un reparto interno: strategia, operatività e controllo, tutto sotto un'unica regia.
              </p>
            </div>
            
            {/* Right - Emphasized line + CTA */}
            <div className="space-y-8 text-left">
              <p className="text-2xl font-bold text-[#111827] italic relative">
                "Vendere non è più un problema.<br />È un processo strutturato."
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#55ACEE] to-[#2E8BC0] rounded-full"></div>
              </p>
              
              <Button className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Inizia adesso
              </Button>
            </div>
          </div>
        </div>
        
        {/* Brand Logos Section - Animated */}
        <div className="relative">
          <div className="text-center mb-12">
            <h4 className="text-2xl font-bold text-[#111827] mb-2">
              Scelti ogni giorno da più di 500 clienti
            </h4>
            <div className="w-24 h-1 bg-gradient-to-r from-[#55ACEE] to-[#2E8BC0] rounded-full mx-auto"></div>
          </div>
          
          {/* Animated Logo Slider */}
          <div className="relative overflow-hidden">
            {/* Fade effects */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10"></div>
            
            {/* Sliding logos */}
            <div className="flex animate-[slide_30s_linear_infinite] items-center gap-16">
              {/* First set */}
              {brandLogos.map((logo, index) => (
                <div key={index} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
                  <img 
                    src={logo} 
                    alt={`Brand ${index + 1}`}
                    className="h-12 object-contain opacity-70 hover:opacity-100"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {brandLogos.map((logo, index) => (
                <div key={`dup-${index}`} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
                  <img 
                    src={logo} 
                    alt={`Brand ${index + 1}`}
                    className="h-12 object-contain opacity-70 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default IntroSection;
