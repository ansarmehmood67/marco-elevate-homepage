
import { useState, useEffect } from "react";
import { Star } from "lucide-react";

const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "Abbiamo raddoppiato i lead in 30 giorni. Il sistema di automazione AI ha trasformato completamente il nostro processo di vendita.",
      name: "Giulia Romano",
      role: "CEO, TechSolutions",
      image: "/lovable-uploads/ada1d4fd-49a4-4da5-92fe-ac3367d74743.png"
    },
    {
      quote: "Il ROI è aumentato del 400% nel primo trimestre. Non avevamo mai visto risultati così concreti e immediati.",
      name: "Chiara Bianchi",
      role: "Marketing Director, InnovateCorp",
      image: "/lovable-uploads/6fc89ca3-7ee8-4e7f-87bb-2aaa90c96cf4.png"
    },
    {
      quote: "Finalmente un sistema di vendita che funziona davvero. L'automazione ci ha fatto risparmiare ore di lavoro ogni giorno.",
      name: "Francesca Verdi",
      role: "Sales Manager, GrowthPlus",
      image: "/lovable-uploads/981ed56a-ba22-44a8-91a6-e6a1961bc0ae.png"
    },
    {
      quote: "L'automazione AI ha trasformato il nostro business. Ora possiamo concentrarci sulla strategia mentre il sistema lavora per noi.",
      name: "Marco Ferrari",
      role: "Founder, DigitalEdge",
      image: "/lovable-uploads/323e86a5-01ec-49ee-bbae-944b976822f2.png"
    },
    {
      quote: "Risultati concreti dal primo mese di collaborazione. Il miglior investimento che abbiamo mai fatto per la crescita aziendale.",
      name: "Andrea Lombardi",
      role: "Business Owner, ScaleUp",
      image: "/lovable-uploads/55ba51af-1df7-42c2-9eb0-7808ffbd9c64.png"
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

      {/* Content - Positioned on Left */}
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl">
          {/* Quote */}
          <blockquote className="text-lg md:text-2xl lg:text-3xl font-light text-white mb-6 leading-relaxed animate-fade-in">
            "{currentTestimonial.quote}"
          </blockquote>

          {/* Author Info */}
          <div className="animate-fade-in animation-delay-200">
            {/* Star Rating */}
            <div className="flex space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Author Details */}
            <div className="text-white">
              <div className="text-lg md:text-xl font-semibold mb-1">
                {currentTestimonial.name}
              </div>
              <div className="text-sm md:text-base text-white/80">
                {currentTestimonial.role}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators - Positioned at Bottom Left */}
      <div className="absolute bottom-8 left-6 flex space-x-3 z-20">
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
