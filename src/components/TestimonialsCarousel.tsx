
import { useState, useEffect } from "react";
import { Star } from "lucide-react";

const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "Abbiamo raddoppiato i lead in 30 giorni. Il sistema di automazione AI ha trasformato completamente il nostro processo di vendita.",
      name: "Marco Rossi",
      role: "CEO, TechSolutions",
      image: "/lovable-uploads/25280549-6553-430d-9dff-5462347e4238.png"
    },
    {
      quote: "Il ROI è aumentato del 400% nel primo trimestre. Non avevamo mai visto risultati così concreti e immediati.",
      name: "Elena Bianchi",
      role: "Marketing Director, InnovateCorp",
      image: "/lovable-uploads/38b36456-8e63-4824-a0c6-3af4d21ae30b.png"
    },
    {
      quote: "Finalmente un sistema di vendita che funziona davvero. L'automazione ci ha fatto risparmiare ore di lavoro ogni giorno.",
      name: "Giuseppe Verdi",
      role: "Sales Manager, GrowthPlus",
      image: "/lovable-uploads/4942e788-ba8d-426d-bd98-bf362a153c59.png"
    },
    {
      quote: "L'automazione AI ha trasformato il nostro business. Ora possiamo concentrarci sulla strategia mentre il sistema lavora per noi.",
      name: "Sofia Ferrari",
      role: "Founder, DigitalEdge",
      image: "/lovable-uploads/57e4bdda-6fe0-4184-b948-1e51ef3229c1.png"
    },
    {
      quote: "Risultati concreti dal primo mese di collaborazione. Il miglior investimento che abbiamo mai fatto per la crescita aziendale.",
      name: "Andrea Lombardi",
      role: "Business Owner, ScaleUp",
      image: "/lovable-uploads/5a8470d1-8aa8-4ee0-a0c5-efbe23f61c0b.png"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentSlide];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${currentTestimonial.image})`
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Quote */}
          <blockquote className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-8 leading-relaxed animate-fade-in">
            "{currentTestimonial.quote}"
          </blockquote>

          {/* Author Info */}
          <div className="animate-fade-in animation-delay-200">
            {/* Star Rating */}
            <div className="flex justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Author Details */}
            <div className="text-white">
              <div className="text-xl md:text-2xl font-semibold mb-2">
                {currentTestimonial.name}
              </div>
              <div className="text-lg md:text-xl text-white/80">
                {currentTestimonial.role}
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-4000 ease-linear"
          style={{
            width: `${((currentSlide + 1) / testimonials.length) * 100}%`
          }}
        />
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
