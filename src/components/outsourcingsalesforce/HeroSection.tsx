import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Play } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref, visibleItems } = useStaggeredAnimation(6, 200);

  return (
    <section ref={ref} className="pt-20 pb-2 px-0 bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[85vh] rounded-3xl overflow-hidden border border-gray-800/30 shadow-2xl bg-black">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290356/outsourced_sales_force_page_ydama6.mp4"
              type="video/mp4"
            />
          </video>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/70" />
          
          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent" />
          
          {/* Mobile-friendly flex layout */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 lg:p-12 z-20">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
            <div className="flex-1 max-w-2xl">
              <div className={`mb-6 flex items-center space-x-2 justify-center lg:justify-start ${
                visibleItems[0] 
                  ? "animate-swipe-in-left" 
                  : "opacity-0"
              }`}>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-white/90 font-medium text-sm lg:text-base">Di fiducia per 500+ aziende</span>
              </div>
              
              <h1 className={`text-6xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white mb-4 lg:mb-6 drop-shadow-2xl ${
                visibleItems[1] 
                  ? "animate-swipe-in-left" 
                  : "opacity-0"
              }`}>
                Outsourcing Forza Vendita
              </h1>
              <div className={`text-2xl sm:text-5xl lg:text-5xl text-white/95 font-bold tracking-wide mb-6 lg:mb-8 ${
                visibleItems[2] 
                  ? "animate-swipe-in-left" 
                  : "opacity-0"
              }`}>
                Il tuo reparto vendite a noleggio
              </div>
              
              <p className={`text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed mb-6 lg:mb-8 ${
                visibleItems[3] 
                  ? "animate-fade-in-bottom" 
                  : "opacity-0"
              }`}>
                Un team di esperti già pronto a generare clienti e opportunità, senza costi fissi o tempi di attesa.
              </p>
              
              {/* Micro payoff */}
              <div className={`mb-6 lg:mb-8 ${
                visibleItems[3] 
                  ? "animate-swipe-in-left" 
                  : "opacity-0"
              }`}>
                <p className="text-sm text-white/80 font-medium">
                  <span className="text-primary">✓</span> Più lead qualificati • 
                  <span className="text-primary mx-2">✓</span> Più vendite chiuse • 
                  <span className="text-primary mx-2">✓</span> Più tempo per la strategia
                </p>
              </div>
              
              <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${
                visibleItems[4] 
                  ? "animate-scale-in" 
                  : "opacity-0"
              }`}>
                <Button className="group font-semibold px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-black hover:bg-gray-100 border-2 border-white/30">
                  <span className="flex items-center space-x-2">
                    <span>Scopri il servizio</span>
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </div>

            {/* Video Player Section */}
            <div className={`w-full lg:w-80 xl:w-96 h-48 lg:h-48 xl:h-56 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm flex-shrink-0 transform-gpu will-change-[transform,opacity] ${
              visibleItems[5] 
                ? "animate-swipe-in-right" 
                : "opacity-0"
            }`}>
              <iframe
                src="https://www.youtube.com/embed/ZocHP6N9Aig"
                title="Demo Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;