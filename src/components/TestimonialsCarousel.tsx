
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Marco ha trasformato completamente il nostro approccio alle vendite. In soli 3 mesi abbiamo triplicato i nostri ricavi e finalmente abbiamo un sistema che funziona davvero.",
      name: "Elena Rossi",
      role: "CEO, TechStart Italia",
      avatar: "/lovable-uploads/25280549-6553-430d-9dff-5462347e4238.png",
      backgroundImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop"
    },
    {
      id: 2,
      quote: "Non credevo fosse possibile, ma Marco ci ha aiutato a raggiungere risultati che non avevamo mai immaginato. Il suo metodo è rivoluzionario e i risultati parlano da soli.",
      name: "Giuseppe Bianchi",
      role: "Founder, Digital Solutions",
      avatar: "/lovable-uploads/25280549-6553-430d-9dff-5462347e4238.png",
      backgroundImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2187&auto=format&fit=crop"
    },
    {
      id: 3,
      quote: "Grazie a Marco abbiamo automatizzato il 90% dei nostri processi di vendita. Ora possiamo concentrarci sulla crescita mentre il sistema lavora per noi 24/7.",
      name: "Sofia Marchetti",
      role: "CMO, Innovation Hub",
      avatar: "/lovable-uploads/25280549-6553-430d-9dff-5462347e4238.png",
      backgroundImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2088&auto=format&fit=crop"
    },
    {
      id: 4,
      quote: "Il ROI che abbiamo ottenuto lavorando con Marco è semplicemente incredibile. Ogni euro investito ci ha fatto guadagnare 10 volte tanto. È il miglior investimento che abbiamo mai fatto.",
      name: "Marco Conti",
      role: "Sales Director, Growth Corp",
      avatar: "/lovable-uploads/25280549-6553-430d-9dff-5462347e4238.png",
      backgroundImage: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Transition */}
      {testimonials.map((testimonial, index) => (
        <div
          key={testimonial.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${testimonial.backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Quote Section */}
            <div className="lg:col-span-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-700 ease-out ${
                    index === currentSlide 
                      ? 'opacity-100 transform translate-x-0' 
                      : 'opacity-0 transform translate-x-4 absolute'
                  }`}
                  style={{ display: index === currentSlide ? 'block' : 'none' }}
                >
                  <blockquote className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-white leading-relaxed mb-8">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              ))}
            </div>

            {/* Author Section */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-700 ease-out ${
                    index === currentSlide 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-4 absolute'
                  }`}
                  style={{ display: index === currentSlide ? 'flex' : 'none' }}
                >
                  <div className="flex flex-col items-center lg:items-start space-y-4">
                    <Avatar className="w-24 h-24 border-4 border-white/30 shadow-2xl">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xl font-bold">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-center lg:text-left">
                      <div className="text-xl font-bold text-white mb-1">
                        {testimonial.name}
                      </div>
                      <div className="text-lg text-white/80">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 left-6 transform -translate-y-1/2 z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
      </div>

      <div className="absolute top-1/2 right-6 transform -translate-y-1/2 z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
