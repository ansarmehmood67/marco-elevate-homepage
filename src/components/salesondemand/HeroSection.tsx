
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
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
          <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 lg:p-12 z-20">
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
                
                <h1 className="text-6xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white mb-6 lg:mb-8 drop-shadow-2xl">
                  Sales On Demand
                </h1>
                <div className="text-2xl sm:text-5xl lg:text-5xl text-white/95 font-bold tracking-wide mb-4">
                  cresci senza pensieri
                </div>
                
                <p className="text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed mb-6 lg:mb-8">
                  La tua forza vendite esternalizzata, pronta a <span className="font-semibold text-primary">far crescere le tue entrate</span> in modo esponenziale.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button className="group font-semibold px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-blue-900 hover:bg-blue-50 border-2 border-white/30">
                    <span className="flex items-center space-x-2">
                      <span>Scopri come funziona</span>
                      <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                  
                  <Button variant="outline" className="font-semibold px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-full border-2 border-white/60 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                    <Play className="w-4 lg:w-5 h-4 lg:h-5 mr-2" />
                    Guarda Demo
                  </Button>
                </div>
              </div>

              {/* YouTube Video Player - Responsive positioning */}
              <div className="relative w-full sm:w-80 lg:w-80 h-48 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm lg:flex-shrink-0">
                {/* Video Label Badge - Compact single line */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-30">
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
