
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
              src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1755354320/outsourcing_salesforce_3_nvc1rd.mp4"
              type="video/mp4"
            />
          </video>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/70" />
          
          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent" />
          
          {/* Subtle animated elements for premium feel */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full filter blur-3xl animate-pulse transition-colors duration-500 bg-blue-400/10" />
          <div className="absolute bottom-1/3 right-1/5 w-48 h-48 rounded-full filter blur-3xl animate-pulse delay-1000 transition-colors duration-500 bg-primary/15" />
          
          {/* Content positioned at bottom left */}
          <div className="absolute bottom-12 left-12 max-w-2xl z-20">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary border border-primary/30 rounded-full text-sm font-medium backdrop-blur-sm">
                Claim
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-white drop-shadow-2xl">
              Esternalizza vendite e marketing: cresci senza pensieri
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-100 mb-8 font-light leading-relaxed max-w-2xl">
              Un'unica squadra dedicata che prende in mano i tuoi funnel B2B, ottimizza performance e libera il tuo tempo.
            </p>
            
            <Button className="group font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-black hover:bg-gray-100 border-2 border-white/30">
              <span className="flex items-center space-x-2">
                <span>Inizia ora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
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
