
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
          
          {/* Content positioned at bottom left */}
          <div className="absolute bottom-12 left-12 max-w-2xl">
            <div className="mb-6 flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white/90 font-medium">Di fiducia per 500+ aziende</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-white drop-shadow-2xl">
              Sales On Demand
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-100 mb-8 font-light leading-relaxed max-w-2xl">
              La tua forza vendite esternalizzata, pronta a <span className="font-semibold text-blue-200">far crescere le tue entrate</span> in modo esponenziale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="group font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-blue-900 hover:bg-blue-50 border-2 border-white/30">
                <span className="flex items-center space-x-2">
                  <span>Scopri come funziona</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <Button variant="outline" className="font-semibold px-8 py-4 text-lg rounded-full border-2 border-white/60 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <Play className="w-5 h-5 mr-2" />
                Guarda Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
