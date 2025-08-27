import { Button } from "@/components/ui/button";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const CTAImageSection = () => {
  const { ref, visibleItems } = useStaggeredAnimation(3, 120);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Logo */}
          <div className={`transition-all duration-700 ease-out ${
            visibleItems[0] ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
           <div className="flex justify-center mb-6 md:mb-8">
  <img
    src="https://res.cloudinary.com/dufcnrcfe/image/upload/f_auto,q_auto,w_96,h_96,c_fit/LOGO-DEF-logo_1_ykizlt.png"
    srcSet="
      https://res.cloudinary.com/dufcnrcfe/image/upload/f_auto,q_auto,w_96,h_96,c_fit/LOGO-DEF-logo_1_ykizlt.png 1x,
      https://res.cloudinary.com/dufcnrcfe/image/upload/f_auto,q_auto,w_192,h_192,c_fit/LOGO-DEF-logo_1_ykizlt.png 2x"
    alt="Sales on Demand"
    className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
    width="96" height="96" loading="lazy" decoding="async"
  />
</div>

          </div>

          {/* Headlines */}
          <div className={`transition-all duration-700 ease-out ${
            visibleItems[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4">
              Tutto in outsourcing, tutto su misura.
            </h2>
            <h3 className="text-2xl md:text-3xl text-slate-600 font-semibold">
              Zero sprechi, solo risultati.
            </h3>
          </div>
          
          {/* CTA Button */}
          <div className={`pt-8 transition-all duration-700 ease-out ${
            visibleItems[2] ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            <Button 
              className="bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] hover:from-[#87CEEB] hover:to-[#2E8BC0] text-white font-semibold px-12 py-6 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = '/sales-on-demand'}
            >
              Scopri di più
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAImageSection;