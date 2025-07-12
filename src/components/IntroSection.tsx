import { Button } from "@/components/ui/button";

const IntroSection = () => {
  const brandLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", 
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
  ];

  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Content Card */}
        <div className="bg-white rounded-3xl p-12 md:p-16 shadow-xl shadow-slate-200/50 mb-16">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] leading-tight">
              MARKETING E VENDITE PERFORMANTI,<br />
              SCALABILI, CONTROLLABILI.
            </h2>
            
            {/* Subheading */}
            <h3 className="text-5xl md:text-6xl font-black text-[#111827] tracking-tight">
              IN OUTSOURCING.
            </h3>
            
            {/* Description */}
            <p className="text-xl text-[#4B5563] leading-relaxed max-w-3xl mx-auto">
              Sales on Demand è un'azienda specializzata nel costruire funnel di vendita completi in outsourcing. Un team esterno che lavora con la mentalità di un reparto interno: strategia, operatività e controllo, tutto sotto un'unica regia.
            </p>
            
            {/* Emphasized line */}
            <p className="text-2xl font-bold text-[#111827] italic">
              Vendere non è più un problema. È un processo strutturato.
            </p>
            
            {/* CTA Button */}
            <Button className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Inizia adesso
            </Button>
          </div>
        </div>
        
        {/* Brand Logos Section */}
        <div className="text-center">
          <h4 className="text-lg font-semibold text-[#4B5563] mb-8">
            scelti ogni giorno da più di 500 clienti
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {brandLogos.map((logo, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
                <img 
                  src={logo} 
                  alt={`Brand ${index + 1}`}
                  className="h-8 md:h-10 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
