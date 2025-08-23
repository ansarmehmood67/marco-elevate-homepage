import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TestimonialsModern = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      quote: "Il ROI è aumentato del 400% nel primo trimestre. Risultati concreti e immediati.",
      author: "Chiara Bianchi",
      role: "Marketing Manager",
      company: "Karon",
      avatar: "/lovable-uploads/655e08e7-f709-41c5-9b01-f624d4dea2ce.png",
      logo: "/lovable-uploads/655e08e7-f709-41c5-9b01-f624d4dea2ce.png",
      brandColor: "from-blue-400 to-blue-600",
      textColor: "text-white"
    },
    {
      id: 2,
      quote: "Processi chiari e crescita misurabile: onboarding e pipeline sotto controllo.",
      author: "Luca Rossi",
      role: "Direttore Commerciale", 
      company: "InPlace",
      avatar: "/lovable-uploads/871bbc8b-f67d-4537-a7a2-574d06a9e919.png",
      logo: "/lovable-uploads/871bbc8b-f67d-4537-a7a2-574d06a9e919.png",
      brandColor: "from-red-400 to-red-600",
      textColor: "text-white"
    },
    {
      id: 3,
      quote: "Team in outsourcing, risultati veri: tempi ridotti e KPI in miglioramento.",
      author: "Marco Verdi",
      role: "CEO",
      company: "TutelaImpresa",
      avatar: "/lovable-uploads/c015aef0-9ac6-47d5-8f1b-ea8aff14dd08.png",
      logo: "/lovable-uploads/c015aef0-9ac6-47d5-8f1b-ea8aff14dd08.png",
      brandColor: "from-green-400 to-green-600", 
      textColor: "text-white"
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2E8BC0]/10 rounded-full border border-[#2E8BC0]/20 mb-6">
            <Star className="w-4 h-4 text-[#2E8BC0]" />
            <span className="text-[#2E8BC0] font-medium text-sm">Testimonianze</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Cosa dicono i nostri <span className="text-[#2E8BC0]">clienti</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Risultati reali da aziende che hanno scelto il nostro approccio
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div 
          ref={ref}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
          }`}>
            
            {/* Single Slide Container */}
            <div className="relative">
              <div className={`bg-gradient-to-br ${currentTestimonial.brandColor} rounded-3xl p-12 relative overflow-hidden min-h-[400px] flex items-center justify-center`}>
                
                {/* Logo Watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-8">
                  <img 
                    src={currentTestimonial.logo} 
                    alt={`${currentTestimonial.company} logo`}
                    className="w-80 h-80 object-contain opacity-20"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center max-w-4xl">
                  
                  {/* Star Rating */}
                  <div className="flex justify-center mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className={`text-2xl md:text-3xl lg:text-4xl font-bold ${currentTestimonial.textColor} leading-tight mb-8`}>
                    "{currentTestimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <img 
                      src={currentTestimonial.avatar} 
                      alt={currentTestimonial.author}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white/30"
                    />
                    <div className="text-left">
                      <p className={`font-semibold text-lg ${currentTestimonial.textColor}`}>
                        {currentTestimonial.author}
                      </p>
                      <p className={`text-sm ${currentTestimonial.textColor}/80`}>
                        {currentTestimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows - Desktop */}
            <div className="hidden md:block">
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Dots Navigation - Mobile */}
            <div className="flex justify-center mt-8 gap-3 md:hidden">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-[#2E8BC0] scale-125' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-8">
              <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full transition-all duration-100 ease-linear"
                  style={{ 
                    width: isPaused ? '100%' : '0%',
                    animation: isPaused ? 'none' : 'progress 2.5s linear infinite'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsModern;