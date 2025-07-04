
import { useState, useEffect } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-primary-glow/20 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-primary/30 rounded-full blur-lg animate-pulse delay-2000" />
      </div>

      {/* Background Images with Enhanced Transition */}
      {testimonials.map((testimonial, index) => (
        <div
          key={testimonial.id}
          className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${testimonial.backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
        </div>
      ))}

      {/* Main Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-8 lg:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            
            {/* Quote Section - Takes more space */}
            <div className="lg:col-span-3 space-y-8">
              {/* Large Quote Mark */}
              <div className="text-6xl lg:text-8xl font-bold text-primary/40 leading-none">
                "
              </div>
              
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-1000 ease-out ${
                    index === currentSlide 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-8 absolute'
                  }`}
                  style={{ display: index === currentSlide ? 'block' : 'none' }}
                >
                  <blockquote className="text-xl lg:text-2xl xl:text-3xl font-medium text-white leading-relaxed tracking-wide">
                    {testimonial.quote}
                  </blockquote>
                </div>
              ))}

              {/* Decorative Line */}
              <div className="w-20 h-1 bg-gradient-primary rounded-full" />
            </div>

            {/* Author Section - Redesigned */}
            <div className="lg:col-span-2 flex justify-center lg:justify-end">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-1000 ease-out ${
                    index === currentSlide 
                      ? 'opacity-100 transform translate-x-0 scale-100' 
                      : 'opacity-0 transform translate-x-8 scale-95 absolute'
                  }`}
                  style={{ display: index === currentSlide ? 'block' : 'none' }}
                >
                  <div className="flex flex-col items-center space-y-6 bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
                    {/* Avatar with Glow Effect */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-primary rounded-full blur-md opacity-50 scale-110" />
                      <Avatar className="w-20 h-20 relative border-4 border-white/20 shadow-xl">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className="bg-gradient-primary text-white text-lg font-bold">
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    
                    {/* Name and Role */}
                    <div className="text-center space-y-2">
                      <div className="text-lg font-bold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-white/70 font-medium tracking-wide">
                        {testimonial.role}
                      </div>
                    </div>

                    {/* Decorative Stars */}
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4 text-yellow-400">
                          ⭐
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Dots Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-8 h-3 bg-gradient-primary shadow-glow'
                  : 'w-3 h-3 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
        <div 
          className="h-full bg-gradient-primary transition-all duration-4000 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / testimonials.length) * 100}%`,
          }}
        />
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
