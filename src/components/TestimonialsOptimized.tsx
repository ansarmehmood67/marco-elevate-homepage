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
    backgroundColor: "#ff6100",
    avatar: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758196482/Untitled_design_99_m4bwal.png",
    logo: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758196693/Untitled_design_100_ugucqt.png"
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
    avatar: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758196483/Untitled_design_98_odvpv4.png",
    logo: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758196692/Untitled_design_-_2025-09-18T165758.082_y6103a.png"
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
      className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center bg-background py-16 lg:py-20"
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
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/60" />
              </>
            )}
            
            {/* Enhanced overlay for solid colors */}
            {testimonial.backgroundColor && (
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/40" />
            )}
          </div>
        ))}
      </div>

      {/* Content Overlay - Right Side */}
      <div className="relative z-10 w-full flex justify-end">
        {/* Synchronized Logo in top-left corner - Enhanced - Hidden on mobile */}
        <div className="absolute top-12 left-12 lg:top-20 lg:left-20 z-20 hidden lg:block">
          <div className="w-80 h-80 xl:w-96 xl:h-96 premium-logo-container">
            {testimonials.map((testimonial, index) => (
              <img
                key={testimonial.id}
                src={testimonial.logo}
                alt={`${testimonial.name} logo`}
                className={`w-full h-full object-contain absolute inset-0 transition-all duration-1000 ease-out drop-shadow-2xl ${
                  index === currentSlide 
                    ? 'opacity-100' 
                    : 'opacity-0'
                }`}
                style={{
                  transform: 'translate3d(0, 0, 0)', // Force GPU layer
                  backfaceVisibility: 'hidden',
                  filter: index === currentSlide ? 'brightness(1.1) contrast(1.1)' : 'none'
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="w-full lg:w-[70%] px-8 lg:px-16 xl:px-20 py-12 lg:py-16">
          <div className="max-w-5xl mx-auto h-full flex flex-col justify-center">
            {/* Premium Title Section - Enhanced */}
            <div className="mb-6 lg:mb-8">
              <h2 className="premium-testimonial-title text-3xl lg:text-4xl xl:text-5xl font-black mb-6 lg:mb-8 transition-all duration-700 ease-out tracking-tight leading-tight text-white drop-shadow-lg">
                {currentTestimonial.title}
              </h2>
            </div>
            
            {/* Quote Section - Enhanced */}
            <div className="mb-10 lg:mb-12 min-h-[180px] flex flex-col justify-center">
              <div className="relative flex items-center">
                <div className="premium-quote-mark-left absolute -top-6 -left-6 text-7xl lg:text-8xl select-none text-white">"</div>
                <div className="flex-1 flex items-center">
                  <blockquote 
                    className="premium-testimonial-quote text-lg lg:text-xl xl:text-2xl font-semibold leading-relaxed lg:leading-relaxed pl-16 lg:pl-20 pr-12 transition-all duration-700 ease-out text-white drop-shadow-sm"
                    key={`quote-${currentSlide}`}
                    style={{
                      transform: 'translate3d(0, 0, 0)', // Force GPU layer
                      willChange: 'contents'
                    }}
                  >
                    {currentTestimonial.quote}
                  </blockquote>
                </div>
                <div className="premium-quote-mark-right absolute -bottom-6 right-0 text-7xl lg:text-8xl select-none text-white">"</div>
              </div>
            </div>

            {/* Person Selectors - Premium Enhanced - Mobile optimized */}
            <div className="grid grid-cols-3 gap-4 lg:flex lg:flex-nowrap lg:justify-start lg:gap-16 justify-items-center">
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

            {/* Premium Progress Indicator - Enhanced */}
            <div className="flex justify-center lg:justify-start mt-10 lg:mt-12 space-x-4">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-500 ease-out premium-progress-bar ${
                    index === currentSlide 
                      ? 'w-20 bg-gradient-to-r from-white to-white/80 shadow-lg' 
                      : 'w-8 bg-white/30 hover:bg-white/50'
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

// Premium Person Selector Component - Enhanced
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
        ? 'opacity-100 scale-115' 
        : 'opacity-70 hover:opacity-100 hover:scale-110'
    }`}
    onClick={onClick}
    style={{
      transform: 'translate3d(0, 0, 0)', // Force GPU layer
      willChange: isActive ? 'transform, opacity' : 'opacity'
    }}
  >
    {/* Premium Person Avatar - Enhanced - Mobile optimized */}
    <div className={`relative mb-3 lg:mb-6 transition-all duration-300 ${
      isActive 
        ? 'ring-2 lg:ring-4 ring-white/80 ring-offset-2 lg:ring-offset-4 ring-offset-transparent shadow-xl lg:shadow-2xl' 
        : 'ring-1 lg:ring-2 ring-white/40 ring-offset-1 lg:ring-offset-2 ring-offset-transparent shadow-md lg:shadow-lg hover:ring-white/60'
    } rounded-full overflow-hidden bg-white/95 p-1 lg:p-2`}>
      <img
        src={testimonial.avatar}
        alt={`${testimonial.name} avatar`}
        className="w-16 h-16 lg:w-28 lg:h-28 object-cover rounded-full premium-avatar-image"
        style={{
          transform: 'translate3d(0, 0, 0)', // Force GPU layer
        }}
      />
      {isActive && (
        <div className="absolute inset-0 premium-avatar-overlay rounded-full bg-white/10" />
      )}
    </div>
    
    {/* Premium Person Info - Enhanced - Mobile optimized */}
    <div className="text-center">
      <h4 className={`font-bold text-sm lg:text-xl transition-all duration-300 premium-person-name ${
        isActive ? 'text-white drop-shadow-lg premium-person-name-active' : 'text-white/80 hover:text-white'
      }`}>
        {testimonial.name}
      </h4>
    </div>
  </div>
);

export default TestimonialsOptimized;

// Custom scrollbar styles are handled in index.css