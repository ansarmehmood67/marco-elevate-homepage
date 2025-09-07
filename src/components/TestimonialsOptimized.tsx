import { useState, useEffect, useCallback, useMemo } from 'react';
import personAvatar from '@/assets/testimonials/person-avatar.png';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  backgroundImage: string;
  avatar: string;
  logo: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marco Karon",
    role: "CEO & Founder",
    company: "Karon Industries",
    quote: "Grazie al team di Marco Ferrario abbiamo aumentato il fatturato del 180% in 8 mesi. Il loro approccio strategico ha trasformato completamente il nostro processo di vendita.",
    backgroundImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1757281947/karon_2_jdeyjr.png",
    avatar: personAvatar,
    logo: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1757281948/Untitled_design_6_u8cwv2.svg"
  },
  {
    id: 2,
    name: "Alessandro Ferrari", 
    role: "Direttore Commerciale",
    company: "Ferrari Group",
    quote: "Non credevo fosse possibile automatizzare così efficacemente il follow-up clienti. Ora il nostro tasso di conversione è triplicato e il team si concentra solo sui deal più promettenti.",
    backgroundImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1757281948/ferrari_3_wolr7e.png",
    avatar: personAvatar,
    logo: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1757282336/Untitled_design_7_srjyza.svg"
  },
  {
    id: 3,
    name: "Sofia Utego",
    role: "Managing Director", 
    company: "Utego Solutions",
    quote: "L'outsourcing del reparto marketing ci ha permesso di scalare rapidamente senza assumere personale. ROI del 340% nel primo trimestre - risultati che non avremmo mai immaginato.",
    backgroundImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1757281947/utego_2_rqhhux.png",
    avatar: personAvatar,
    logo: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1757282336/Untitled_design_7_srjyza.svg"
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

  // Preload current and next images (including logos)
  useEffect(() => {
    if (isInView) {
      preloadImage(testimonials[currentSlide].backgroundImage);
      preloadImage(testimonials[currentSlide].logo);
      const nextIndex = (currentSlide + 1) % testimonials.length;
      preloadImage(testimonials[nextIndex].backgroundImage);
      preloadImage(testimonials[nextIndex].logo);
    }
  }, [currentSlide, isInView, preloadImage]);

  // Optimized auto-slide with better performance
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % testimonials.length);
    }, 4000); // Slightly longer interval for better UX

    return () => clearInterval(interval);
  }, [isInView]);

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
    setCurrentSlide(index);
  }, []);

  const currentTestimonial = useMemo(() => testimonials[currentSlide], [currentSlide]);

  return (
    <section 
      id="testimonials-section"
      className="relative min-h-screen flex items-center bg-background overflow-hidden"
      style={{ contain: 'layout style paint' }}
    >
      {/* Optimized Background Images with better transitions */}
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
            {/* Only render images when in view and preloaded */}
            {isInView && preloadedImages.has(testimonial.backgroundImage) && (
              <>
                <img
                  src={testimonial.backgroundImage}
                  alt={`${testimonial.company} background`}
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
          </div>
        ))}
      </div>

      {/* Content Overlay - Right Side */}
      <div className="relative z-10 w-full flex justify-end">
        {/* Logo in top-left corner */}
        <div className="absolute top-6 left-6 lg:top-12 lg:left-12 z-20">
          <div className="w-24 h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 transition-opacity duration-1000 ease-out">
            <img
              src={currentTestimonial.logo}
              alt={`${currentTestimonial.company} logo`}
              className="w-full h-full object-contain filter drop-shadow-md"
              style={{
                transform: 'translate3d(0, 0, 0)', // Force GPU layer
                backfaceVisibility: 'hidden'
              }}
            />
          </div>
        </div>
        
        <div className="w-full lg:w-[70%] px-6 lg:px-12 xl:px-16 py-12 lg:py-24">
          <div className="max-w-4xl mx-auto">
            {/* Quote Section with better performance */}
            <div className="mb-12 lg:mb-16">
              <div className="relative">
                <div className="absolute -top-4 -left-2 text-6xl lg:text-8xl text-primary/20 font-bold select-none">"</div>
                <blockquote 
                  className="text-2xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight lg:leading-tight pl-8 lg:pl-12 transition-all duration-700 ease-out"
                  key={`quote-${currentSlide}`}
                  style={{
                    transform: 'translate3d(0, 0, 0)', // Force GPU layer
                    willChange: 'contents'
                  }}
                >
                  {currentTestimonial.quote}
                </blockquote>
                <div className="absolute -bottom-4 right-4 text-6xl lg:text-8xl text-primary/20 font-bold select-none">"</div>
              </div>
            </div>

            {/* Person Selectors - Optimized */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8">
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

            {/* Progress Indicator - Simplified */}
            <div className="flex justify-center lg:justify-start mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-500 ease-out ${
                    index === currentSlide 
                      ? 'w-12 bg-primary' 
                      : 'w-4 bg-border'
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

// Optimized Person Selector Component
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
    className={`flex flex-col items-center cursor-pointer transition-all duration-300 ease-out ${
      isActive 
        ? 'opacity-100 scale-105' 
        : 'opacity-50 hover:opacity-75'
    }`}
    onClick={onClick}
    style={{
      transform: 'translate3d(0, 0, 0)', // Force GPU layer
      willChange: isActive ? 'transform, opacity' : 'opacity'
    }}
  >
    {/* Avatar */}
    <div className={`relative mb-3 transition-all duration-300 ${
      isActive ? 'ring-4 ring-primary' : 'ring-2 ring-border'
    } rounded-full overflow-hidden`}>
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-16 h-16 lg:w-20 lg:h-20 object-cover"
        style={{
          transform: 'translate3d(0, 0, 0)', // Force GPU layer
        }}
      />
      {isActive && (
        <div className="absolute inset-0 bg-primary/10 rounded-full" />
      )}
    </div>
    
    {/* Person Info */}
    <div className="text-center">
      <h4 className={`font-bold text-sm lg:text-base transition-colors duration-300 ${
        isActive ? 'text-primary' : 'text-foreground'
      }`}>
        {testimonial.name}
      </h4>
      <p className="text-xs lg:text-sm text-muted-foreground mt-1">
        {testimonial.role}
      </p>
      <p className="text-xs text-muted-foreground">
        {testimonial.company}
      </p>
    </div>
  </div>
);

export default TestimonialsOptimized;