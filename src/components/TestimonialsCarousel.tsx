
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
    <section className="py-40 relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1752359130/a14ff2cd-e917-4480-9942-acd5b5e88d41.mp4_2_iuvhrj.mp4" type="video/mp4" />
      </video>
      
      {/* Professional Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#55ACEE]/10 to-[#2E8BC0]/10 z-10" />

      {/* Main Content Container */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Cosa dicono i nostri <span className="text-[#87CEEB]">clienti</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Risultati reali da persone reali che hanno trasformato il loro business
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
              >
                {/* Quote */}
                <div className="text-white/90 text-sm leading-relaxed mb-6 italic">
                  "{testimonial.quote.substring(0, 120)}..."
                </div>
                
                {/* Author Info */}
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12 border-2 border-white/20">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-r from-[#55ACEE] to-[#2E8BC0] text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-white/70 text-xs">{testimonial.role}</div>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex justify-center space-x-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">⭐</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default TestimonialsCarousel;
