import { Button } from "@/components/ui/button";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const CTAImageSection = () => {
  const { ref, visibleItems } = useStaggeredAnimation(4, 120);

  return (
    <section className="py-40 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(/lovable-uploads/81b2f01b-2e68-4d8c-9de0-8db4e74eb18f.png)` }}
      />
      
      {/* Enhanced Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/30 via-transparent to-[#55ACEE]/20 z-10" />
      
      <div ref={ref} className="max-w-6xl mx-auto px-6 text-center relative z-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className={`text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl transition-all duration-700 ease-out ${
            visibleItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Trasforma il tuo business con soluzioni{" "}
            <span className="text-[#87CEEB]">su misura</span>
          </h2>
          
          <p className={`text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-xl font-medium transition-all duration-700 ease-out ${
            visibleItems[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Scopri come le nostre metodologie innovative possono rivoluzionare 
            il tuo approccio alle vendite e al marketing.
          </p>
          
          <div className={`transition-all duration-700 ease-out ${
            visibleItems[2] ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            <Button className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Richiedi una demo
            </Button>
            
            <div className={`mt-6 transition-all duration-700 ease-out ${
              visibleItems[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className="text-sm text-white/80 bg-black/30 backdrop-blur-sm rounded-full px-6 py-2 inline-block">
                Audit 30 min • Nessun impegno • Risposta entro 2 ore • 500+ clienti
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAImageSection;