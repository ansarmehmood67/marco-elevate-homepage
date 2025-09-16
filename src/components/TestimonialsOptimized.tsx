import { useState, useEffect, useCallback, useMemo } from 'react';
import personAvatar from '@/assets/testimonials/person-avatar.png';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  backgroundImage?: string;
  backgroundColor?: string;
  avatar: string;
  logo: string;
  role?: string;
  company?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Diego di Vittorio",
    title: "Dalla Svizzera al mondo in meno di un anno",
    quote: "Senza una direzione marketing e vendite interna, ci siamo affidati a Marco Ferrario per internazionalizzare il business. Grazie al suo metodo abbiamo aperto nuovi clienti in Italia, consolidato il mercato svizzero e lanciato la piattaforma a livello globale.",
    backgroundColor: "#ff914d",
    avatar: "https://res.cloudinary.com/dufcnrcfe/image/upload/v1757630315/Untitled_design_96_sa3c1z.png",
    logo: "https://res.cloudinary.com/dufcnrcfe/image/upload/v1757630344/Untitled_design_14_oap64s.svg"
  },
  {
    id: 2,
    name: "Manuel Villanova",
    title: "Dalla consulenza alla crescita, con outsourcing e AI",
    quote: "Con Marco Ferrario abbiamo trasformato un’idea in una piattaforma innovativa per la sicurezza sul lavoro. Il suo supporto strategico ci ha aiutati a strutturare il modello di business e a crescere più velocemente, grazie a vendite in outsourcing e marketing potenziato dall’AI.",
    backgroundColor: "#ae1b25",
    avatar: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1757286913/ferrari_1_tso9pa.png",
    logo: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1757283389/Untitled_design_8_yyufxy.svg"
  },
  {
    id: 3,
    name: "Manuel Manueli",
    title: "Sales on Demand: serietà, efficacia e risultati",
    quote: "Avevamo bisogno di generare lead pre-qualificati e ci siamo rivolti a Sales on Demand. Azienda seria, efficace e reattiva, che ha compreso fin da subito i nostri servizi e li ha trasmessi al meglio ai contatti. Collaboriamo da mesi e i risultati sono stati eccellenti.",
    backgroundColor: "#15a5a5",
    avatar: "https://res.cloudinary.com/dufcnrcfe/image/upload/v1757631355/cecece_1_bqkhhv.svg",
    logo: "https://res.cloudinary.com/dufcnrcfe/image/upload/v1757631351/cecece_og4kpb.svg"
  }
];

const TestimonialsOptimized = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());

  // Preload images for better performance
  const preloadImage = useCallback((src: string) => {
    if (preloadedImages.has(src)) return;
    
    const img = new Image();
    img.onload = () => {
      setPreloadedImages(prev => new Set(prev).add(src));
    };
    img.src = src;
  }, [preloadedImages]);

  // Preload current and next images (including logos and avatars)
  useEffect(() => {
    if (isInView) {
      if (testimonials[currentSlide].backgroundImage) {
        preloadImage(testimonials[currentSlide].backgroundImage);
      }
      preloadImage(testimonials[currentSlide].logo);
      preloadImage(testimonials[currentSlide].avatar);
      const nextIndex = (currentSlide + 1) % testimonials.length;
      if (testimonials[nextIndex].backgroundImage) {
        preloadImage(testimonials[nextIndex].backgroundImage);
      }
      preloadImage(testimonials[nextIndex].logo);
      preloadImage(testimonials[nextIndex].avatar);
    }
  }, [currentSlide, isInView, preloadImage]);

  // Fixed auto-slide with proper dependency
  useEffect(() => {
    if (!isInView) return;
    
    let timeoutId: NodeJS.Timeout;
    
    const scheduleNextSlide = () => {
      timeoutId = setTimeout(() => {
        setCurrentSlide(prev => (prev + 1) % testimonials.length);
      }, 8000);
    };
    
    scheduleNextSlide();
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isInView, currentSlide]);

  // Intersection observer for performance optimization
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
        rootMargin: '50px 0px'
      }
    );

    const element = document.getElementById('testimonials-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handlePersonClick = useCallback((index: number) => {
    // Use requestAnimationFrame for smoother transitions
    requestAnimationFrame(() => {
      setCurrentSlide(index);
    });
  }, []);

  const currentTestimonial = useMemo(() => testimonials[currentSlide], [currentSlide]);

  return (
    <section 
      id="testimonials-section"
      className="relative min-h-screen flex items-center bg-background pt-16 pb-16"
      style={{ contain: 'layout style paint' }}
    >
      {/* Optimized Background with support for both images and colors */}
      <div className="absolute inset-0">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              willChange: index === currentSlide ? 'opacity' : 'auto'
            }}
          >
            {/* Render background color if specified */}
            {testimonial.backgroundColor && (
              <div 
                className="w-full h-full"
                style={{ backgroundColor: testimonial.backgroundColor }}
              />
            )}
            
            {/* Render background image if specified and preloaded */}
            {testimonial.backgroundImage && isInView && preloadedImages.has(testimonial.backgroundImage) && (
              <>
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.company} avatar`}
                  className="w-full h-full object-cover"
                  style={{
                    transform: 'translate3d(0, 0, 0)', // Force GPU layer
                    backfaceVisibility: 'hidden'
                  }}
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/60" />
              </>
            )}
            
            {/* Light overlay for solid colors to ensure text readability */}
            {testimonial.backgroundColor && (
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-white/30" />
            )}
          </div>
        ))}
      </div>

      {/* Content Overlay - Right Side */}
      <div className="relative z-10 w-full flex justify-end">
        {/* Synchronized Logo in top-left corner */}
        <div className="absolute top-8 left-8 lg:top-16 lg:left-16 z-20">
          <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 premium-logo-container">
            {testimonials.map((testimonial, index) => (
              <img
                key={testimonial.id}
                src={testimonial.logo}
                alt={`${testimonial.name} logo`}
                className={`w-full h-full object-contain premium-logo-shadow absolute inset-0 transition-all duration-1000 ease-out ${
                  index === currentSlide 
                    ? `opacity-100 ${testimonial.id !== 2 ? 'premium-logo-glow' : ''}` 
                    : 'opacity-0'
                }`}
                style={{
                  transform: 'translate3d(0, 0, 0)', // Force GPU layer
                  backfaceVisibility: 'hidden'
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="w-full lg:w-[70%] px-8 lg:px-16 xl:px-20 py-16 lg:py-32">
          <div className="max-w-5xl mx-auto h-full flex flex-col justify-center">
            {/* Premium Title Section */}
            <div className="mb-8 lg:mb-12">
              <h2 className="premium-testimonial-title text-4xl lg:text-6xl xl:text-7xl font-black mb-8 lg:mb-12 transition-all duration-700 ease-out tracking-tight leading-tight">
                {currentTestimonial.title}
              </h2>
            </div>
            
            {/* Quote Section */}
            <div className="mb-12 lg:mb-16 min-h-[200px] flex flex-col justify-center">
              <div className="relative flex items-center">
                <div className="premium-quote-mark-left absolute -top-4 -left-4 text-6xl lg:text-7xl select-none">"</div>
                <div className="flex-1 flex items-center">
                  <blockquote 
                    className="premium-testimonial-quote text-2xl lg:text-3xl xl:text-4xl font-medium leading-relaxed lg:leading-relaxed pl-12 lg:pl-16 pr-8 transition-all duration-700 ease-out"
                    key={`quote-${currentSlide}`}
                    style={{
                      transform: 'translate3d(0, 0, 0)', // Force GPU layer
                      willChange: 'contents'
                    }}
                  >
                    {currentTestimonial.quote}
                  </blockquote>
                </div>
                <div className="premium-quote-mark-right absolute -bottom-4 right-0 text-6xl lg:text-7xl select-none">"</div>
              </div>
            </div>

            {/* Person Selectors - Premium */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-12">
              {testimonials.map((testimonial, index) => (
                <PersonSelector
                  key={testimonial.id}
                  testimonial={testimonial}
                  index={index}
                  isActive={index === currentSlide}
                  onClick={() => handlePersonClick(index)}
                />
              ))}
            </div>

            {/* Premium Progress Indicator */}
            <div className="flex justify-center lg:justify-start mt-12 space-x-3">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-500 ease-out premium-progress-bar ${
                    index === currentSlide 
                      ? 'w-16 bg-gradient-to-r from-primary to-primary-glow' 
                      : 'w-6 bg-border/60'
                  }`}
                  style={{
                    transform: 'translate3d(0, 0, 0)' // Force GPU layer
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Background Overlay */}
      <div className="absolute inset-0 bg-background/40 lg:hidden" />
    </section>
  );
};

// Premium Person Selector Component
const PersonSelector = ({ 
  testimonial, 
  index, 
  isActive, 
  onClick 
}: {
  testimonial: Testimonial;
  index: number;
  isActive: boolean;
  onClick: () => void;
}) => (
  <div
    className={`flex flex-col items-center cursor-pointer transition-all duration-300 ease-out premium-person-selector ${
      isActive 
        ? 'opacity-100 scale-110' 
        : 'opacity-60 hover:opacity-80 hover:scale-105'
    }`}
    onClick={onClick}
    style={{
      transform: 'translate3d(0, 0, 0)', // Force GPU layer
      willChange: isActive ? 'transform, opacity' : 'opacity'
    }}
  >
    {/* Premium Person Avatar */}
    <div className={`relative mb-4 transition-all duration-300 ${
      isActive ? 'premium-avatar-ring-active' : 'premium-avatar-ring'
    } rounded-full overflow-hidden bg-white/95 p-1.5`}>
      <img
        src={testimonial.avatar}
        alt={`${testimonial.name} avatar`}
        className="w-20 h-20 lg:w-24 lg:h-24 object-cover rounded-full premium-avatar-image"
        style={{
          transform: 'translate3d(0, 0, 0)', // Force GPU layer
        }}
      />
      {isActive && (
        <div className="absolute inset-0 premium-avatar-overlay rounded-full" />
      )}
    </div>
    
    {/* Premium Person Info */}
    <div className="text-center">
      <h4 className={`font-bold text-base lg:text-lg transition-all duration-300 premium-person-name ${
        isActive ? 'text-white premium-person-name-active' : 'text-white/90'
      }`}>
        {testimonial.name}
      </h4>
    </div>
  </div>
);

export default TestimonialsOptimized;

// Custom scrollbar styles are handled in index.css