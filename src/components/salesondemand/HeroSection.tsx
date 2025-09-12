
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Play } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref, visibleItems } = useStaggeredAnimation(6, 200);
  
  return (
    <section className="pt-20 pb-2 px-0 bg-black">
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
              src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1752757859/salesondemand_2_c3el1b.mp4"
              type="video/mp4"
            />
          </video>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/70" />
          
          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent" />
          
          {/* Mobile-friendly flex layout */}
          <div ref={ref} className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 lg:p-12 z-20">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
              {/* Content */}
              <div className="flex-1 max-w-2xl text-center lg:text-left">
                <div className="mb-6 flex items-center space-x-2 justify-center lg:justify-start">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 lg:w-5 h-4 lg:h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white/90 font-medium text-sm lg:text-base">Di fiducia per 500+ aziende</span>
                </div>
                
                <h1 className={`text-6xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white mb-6 lg:mb-8 drop-shadow-2xl transition-all duration-1200 ease-out ${
                  visibleItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  La tua forza vendita in Outsourcing
                </h1>
                
                <p className={`text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed mb-6 lg:mb-8 transition-all duration-600 ease-out delay-200 ${
                  visibleItems[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  Venditori a noleggio per garantire un reparto vendite modulabile, competente e orientato ai risultati, senza oneri di assunzione diretta.
                </p>
                
                {/* Micro payoff */}
                <div className={`mb-6 lg:mb-8 transition-all duration-600 ease-out delay-400 ${
                  visibleItems[2] ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-8'
                }`}>
                  <p className="text-sm text-white/80 font-medium">
                    <span className="text-primary">✓</span> Audit 30 min • 
                    <span className="text-primary mx-2">✓</span> Nessun impegno • 
                    <span className="text-primary mx-2">✓</span> Risposta entro 2 ore • 
                    <span className="text-primary mx-2">✓</span> 500+ clienti
                  </p>
                </div>
                
                <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-450 ease-out delay-600 ${
                  visibleItems[3] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                  <Button 
                    onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group font-semibold px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-blue-900 hover:bg-blue-50 border-2 border-white/30"
                  >
                    <span className="flex items-center space-x-2">
                      <span>Scopri di più</span>
                      <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>
              </div>

              {/* YouTube Video Player - Responsive positioning */}
              <div className={`relative w-full sm:w-80 lg:w-80 h-48 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm lg:flex-shrink-0 transition-all duration-600 ease-out delay-800 ${
                visibleItems[4] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}>
                {/* Video Label Badge - Compact single line */}
                <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-300 ease-out delay-1000 ${
                  visibleItems[5] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  <span className="inline-block bg-blue-600/90 text-white px-3 py-1 rounded-full text-xs font-medium shadow-md backdrop-blur-sm whitespace-nowrap">
                    30 min demo
                  </span>
                </div>
                
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
