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
              src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290356/outsourced_sales_force_page_ydama6.mp4"
              type="video/mp4"
            />
          </video>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/70" />
          
          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent" />
          
          {/* Content positioned at bottom left */}
          <div className="absolute bottom-12 left-12 max-w-2xl z-20">
            <div className="mb-6 flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white/90 font-medium">Di fiducia per 500+ aziende</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-white drop-shadow-2xl">
              Outsourcing Force Vendite
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-100 mb-8 font-light leading-relaxed max-w-2xl">
              Venditori esternalizzati pronti all'uso. Noi gestiamo il processo, tu ottieni i risultati.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="group font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-black hover:bg-gray-100 border-2 border-white/30">
                <span className="flex items-center space-x-2">
                  <span>Scopri il servizio</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
          </div>

          {/* YouTube Video Player - Bottom Right */}
          <div className="absolute bottom-12 right-12 z-20">
            <div className="w-80 h-48 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm">
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
    </section>
  );
};

export default HeroSection;