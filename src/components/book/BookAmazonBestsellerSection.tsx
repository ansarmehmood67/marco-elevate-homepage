import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const BookAmazonBestsellerSection = () => {
  return (
    <div className="relative py-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          className="w-full h-full object-cover"
        >
          <source src="/assets/videos/dark-quote-section.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-8">
          {/* 5 Golden Stars */}
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          {/* Sales Count */}
          <p className="text-white text-lg font-medium">
            oltre 3.000 copie vendute
          </p>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            Best seller su Amazon
          </h2>

          {/* Blue "Gratis per te" */}
          <div className="mb-8">
            <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Gratis per te
            </span>
          </div>

          {/* Description */}
          <p className="text-xl lg:text-2xl leading-relaxed text-gray-200 font-light max-w-4xl mx-auto">
            Sales as a Service è già diventato un punto di riferimento per imprenditori e manager su Amazon. Ora hai l'occasione di scaricarlo gratuitamente e scoprire il metodo che sta rivoluzionando il modo di fare vendite.
          </p>

          <div className="pt-6">
            <Button 
              className="bg-white/10 text-white hover:bg-white/20 font-semibold px-10 py-4 rounded-full transition-all duration-300 border border-white/20 hover:border-white/30 backdrop-blur-sm" 
              size="lg"
              onClick={() => window.location.href = "#contact"}
            >
              <span className="flex items-center gap-2">
                Scarica il libro
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAmazonBestsellerSection;