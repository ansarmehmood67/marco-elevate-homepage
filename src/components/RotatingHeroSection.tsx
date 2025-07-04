
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const RotatingHeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Professional business background images
  const backgroundImages = [
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Team collaboration with screens
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Professional meeting
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Person using MacBook
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Modern workspace
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Code on MacBook
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative w-full h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Background Images with Fade Transition */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl">
          {/* Main Title */}
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
            Accelera la tua{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              crescita
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium">
            Scopri il metodo che ha trasformato centinaia di imprese italiane.
          </p>

          {/* CTA Button */}
          <Button 
            size="xl"
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-bold px-10 py-5 text-lg rounded-full shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 border-2 border-white/20 backdrop-blur-sm"
          >
            Prenota una consulenza
          </Button>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white shadow-lg scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }} />
    </section>
  );
};

export default RotatingHeroSection;
