import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TestimonialsModern = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      quote: "Abbiamo raddoppiato i lead in 30 giorni. Il sistema di automazione AI ha trasformato completamente il nostro processo di vendita.",
      name: "Giulia Romano",
      role: "CEO",
      company: "TechSolutions",
      companyLogo: "/lovable-uploads/ada1d4fd-49a4-4da5-92fe-ac3367d74743.png",
      avatar: "/lovable-uploads/ada1d4fd-49a4-4da5-92fe-ac3367d74743.png"
    },
    {
      quote: "Il ROI è aumentato del 400% nel primo trimestre. Non avevamo mai visto risultati così concreti e immediati.",
      name: "Chiara Bianchi",
      role: "Marketing Director",
      company: "InnovateCorp",
      companyLogo: "/lovable-uploads/6fc89ca3-7ee8-4e7f-87bb-2aaa90c96cf4.png",
      avatar: "/lovable-uploads/6fc89ca3-7ee8-4e7f-87bb-2aaa90c96cf4.png"
    },
    {
      quote: "Finalmente un sistema di vendita che funziona davvero. L'automazione ci ha fatto risparmiare ore di lavoro ogni giorno.",
      name: "Francesca Verdi",
      role: "Sales Manager",
      company: "GrowthPlus",
      companyLogo: "/lovable-uploads/981ed56a-ba22-44a8-91a6-e6a1961bc0ae.png",
      avatar: "/lovable-uploads/981ed56a-ba22-44a8-91a6-e6a1961bc0ae.png"
    },
    {
      quote: "L'automazione AI ha trasformato il nostro business. Ora possiamo concentrarci sulla strategia mentre il sistema lavora per noi.",
      name: "Marco Ferrari",
      role: "Founder",
      company: "DigitalEdge",
      companyLogo: "/lovable-uploads/323e86a5-01ec-49ee-bbae-944b976822f2.png",
      avatar: "/lovable-uploads/323e86a5-01ec-49ee-bbae-944b976822f2.png"
    },
    {
      quote: "Risultati concreti dal primo mese di collaborazione. Il miglior investimento che abbiamo mai fatto per la crescita aziendale.",
      name: "Andrea Lombardi",
      role: "Business Owner",
      company: "ScaleUp",
      companyLogo: "/lovable-uploads/55ba51af-1df7-42c2-9eb0-7808ffbd9c64.png",
      avatar: "/lovable-uploads/55ba51af-1df7-42c2-9eb0-7808ffbd9c64.png"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentSlide];

  return (
    <section 
      ref={ref}
      className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-primary-glow/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-primary-glow/5 to-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">Cosa dicono i nostri clienti</span>
          </div>
          
          <h2 className={`text-5xl lg:text-6xl font-bold text-slate-900 mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Testimonianze di <span className="text-primary">Successo</span>
          </h2>
        </div>

        {/* Main Testimonial Card */}
        <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-slate-200/50">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Company Logo */}
              <div className="lg:col-span-3 text-center lg:text-left">
                <div className="relative inline-block group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <img 
                    src={currentTestimonial.companyLogo}
                    alt={`${currentTestimonial.company} Logo`}
                    className="relative h-16 w-auto mx-auto lg:mx-0 object-contain grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="mt-4 text-slate-600 font-medium">
                  {currentTestimonial.company}
                </div>
              </div>

              {/* Quote */}
              <div className="lg:col-span-6">
                <blockquote className="text-center">
                  <div className="text-6xl text-primary/20 font-serif leading-none mb-4">"</div>
                  <p className="text-xl lg:text-2xl text-slate-700 leading-relaxed font-light mb-6">
                    {currentTestimonial.quote}
                  </p>
                  
                  <div className="flex justify-center space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </blockquote>
              </div>

              {/* Author */}
              <div className="lg:col-span-3 text-center lg:text-right">
                <div className="relative inline-block group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <img 
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="relative w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg mx-auto lg:mx-0 lg:ml-auto"
                  />
                </div>
                <div className="mt-4">
                  <div className="text-lg font-semibold text-slate-900">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-primary font-medium">
                    {currentTestimonial.role}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-primary scale-125 shadow-lg' 
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-[5000ms] ease-linear"
              style={{
                width: `${((currentSlide + 1) / testimonials.length) * 100}%`
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsModern;