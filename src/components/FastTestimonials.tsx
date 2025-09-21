import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  image?: string;
  color?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ferrari",
    quote: "Collaborazione eccellente, risultati concreti. Marco e il suo team hanno trasformato la nostra strategia commerciale.",
    image: "/lovable-uploads/aae386e9-46e4-472f-8b3a-aa28673a1c85.png"
  },
  {
    id: 2,
    name: "Karon",
    quote: "Un approccio professionale che ha portato a risultati tangibili. Competenza e dedizione al massimo livello.",
    image: "/lovable-uploads/c015aef0-9ac6-47d5-8f1b-ea8aff14dd08.png"
  },
  {
    id: 3,
    name: "Utego",
    quote: "Partnership strategica che ha superato le nostre aspettative. Consiglio vivamente Marco e il suo team.",
    image: "/lovable-uploads/655e08e7-f709-41c5-9b01-f624d4dea2ce.png"
  }
];

/**
 * Fast testimonials component with optimized performance and minimal timers
 */
const FastTestimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Simplified auto-slide with minimal timer usage
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePersonClick = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const currentTestimonial = useMemo(() => testimonials[currentSlide], [currentSlide]);

  return (
    <section 
      className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center bg-background py-16 lg:py-20"
    >
      {/* Fast background transitions */}
      <div className="absolute inset-0">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {testimonial.image ? (
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${testimonial.image})`
                }}
              />
            ) : (
              <div
                className="w-full h-full"
                style={{ backgroundColor: testimonial.color }}
              />
            )}
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Quote */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-2xl lg:text-4xl font-light text-white leading-relaxed mb-8">
              "{currentTestimonial.quote}"
            </blockquote>
            
            <cite className="text-xl lg:text-2xl font-semibold text-primary not-italic">
              {currentTestimonial.name}
            </cite>
          </div>

          {/* Person selectors */}
          <div className="flex justify-center space-x-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => handlePersonClick(index)}
                className={`w-16 h-16 rounded-full border-2 transition-all duration-300 ${
                  index === currentSlide
                    ? 'border-primary scale-110'
                    : 'border-white/30 hover:border-white/60'
                }`}
              >
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div 
                    className="w-full h-full rounded-full flex items-center justify-center text-white font-semibold"
                    style={{ backgroundColor: testimonial.color }}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FastTestimonials;