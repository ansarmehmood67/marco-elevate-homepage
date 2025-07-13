
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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Headlines */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-[#111827] leading-tight tracking-tight mb-8">
            MARKETING E VENDITE<br />
            <span className="text-[#55ACEE]">PERFORMANTI</span>,<br />
            <span className="text-slate-600">SCALABILI, CONTROLLABILI.</span>
          </h2>
          
          <div className="relative mb-12">
            <h3 className="text-5xl md:text-7xl font-black text-[#111827] tracking-tight relative z-10">
              IN OUTSOURCING.
            </h3>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#55ACEE] to-[#2E8BC0] rounded-full"></div>
          </div>
        </div>
        
        {/* Content Flow */}
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Introduction Text */}
          <div className="text-center">
            <p className="text-xl text-[#4B5563] leading-relaxed">
              Sales on Demand è un'azienda specializzata nel costruire funnel di vendita completi in outsourcing. Un team esterno che lavora con la mentalità di un reparto interno: strategia, operatività e controllo, tutto sotto un'unica regia.
            </p>
          </div>

          {/* Key Quote Section - Dark Highlighted */}
          <div className="bg-[#111827] rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#55ACEE]/10 to-[#2E8BC0]/10"></div>
            <div className="relative z-10">
              <blockquote className="text-3xl md:text-4xl font-bold text-white italic leading-relaxed">
                "Vendere non è più un problema.<br />È un processo strutturato."
              </blockquote>
              <div className="w-16 h-1 bg-gradient-to-r from-[#55ACEE] to-[#2E8BC0] rounded-full mx-auto mt-8"></div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Button className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold px-12 py-6 rounded-full text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Inizia adesso
            </Button>
          </div>
        </div>
        
        {/* Brand Logos Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h4 className="text-2xl font-bold text-[#111827] mb-4">
              Scelti ogni giorno da più di 500 clienti
            </h4>
            <div className="w-24 h-1 bg-gradient-to-r from-[#55ACEE] to-[#2E8BC0] rounded-full mx-auto"></div>
          </div>
          
          {/* Animated Logo Slider */}
          <div className="relative overflow-hidden">
            {/* Fade effects */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            {/* Sliding logos */}
            <div className="flex animate-[slide_30s_linear_infinite] items-center gap-16">
              {/* First set */}
              {brandLogos.map((logo, index) => (
                <div key={index} className="flex-shrink-0 hover:scale-110 transition-all duration-300">
                  <img 
                    src={logo} 
                    alt={`Brand ${index + 1}`}
                    className="h-12 object-contain"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {brandLogos.map((logo, index) => (
                <div key={`dup-${index}`} className="flex-shrink-0 hover:scale-110 transition-all duration-300">
                  <img 
                    src={logo} 
                    alt={`Brand ${index + 1}`}
                    className="h-12 object-contain"
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
