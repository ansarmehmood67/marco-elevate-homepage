import { useState, useEffect } from 'react';
import karonBg from '@/assets/testimonials/karon-bg.png';
import ferrariBg from '@/assets/testimonials/ferrari-bg.png';
import utegoBg from '@/assets/testimonials/utego-bg.png';
import personAvatar from '@/assets/testimonials/person-avatar.png';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  backgroundImage: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marco Karon",
    role: "CEO & Founder",
    company: "Karon Industries",
    quote: "Il successo non è un caso, è una scelta. Ogni giorno decidiamo di crescere, di innovare, di superare i nostri limiti. La vera forza sta nel non arrendersi mai.",
    backgroundImage: karonBg,
    avatar: personAvatar
  },
  {
    id: 2,
    name: "Alessandro Ferrari", 
    role: "Direttore Commerciale",
    company: "Ferrari Group",
    quote: "La velocità nel business è tutto. Chi si muove per primo, chi anticipa il mercato, chi ha il coraggio di rischiare: quello è il vincitore. Non aspettare, agisci.",
    backgroundImage: ferrariBg,
    avatar: personAvatar
  },
  {
    id: 3,
    name: "Sofia Utego",
    role: "Managing Director", 
    company: "Utego Solutions",
    quote: "L'innovazione nasce dalla passione di trasformare i sogni in realtà. Ogni sfida è un'opportunità per dimostrare che l'impossibile è solo una questione di prospettiva.",
    backgroundImage: utegoBg,
    avatar: personAvatar
  }
];

const TestimonialsTonyRobbins = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % testimonials.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const handlePersonClick = (index: number) => {
    setCurrentSlide(index);
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <section 
      className="relative min-h-screen flex items-center bg-background overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Full Width Background Images */}
      <div className="absolute inset-0">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={testimonial.backgroundImage}
              alt={`${testimonial.company} background`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/60" />
          </div>
        ))}
      </div>

      {/* Content Overlay - Right Side */}
      <div className="relative z-10 w-full flex justify-end">
        <div className="w-full lg:w-[70%] px-6 lg:px-12 xl:px-16 py-12 lg:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Quote Section */}
          <div className="mb-12 lg:mb-16">
            <div className="relative">
              <div className="absolute -top-4 -left-2 text-6xl lg:text-8xl text-primary/20 font-bold">"</div>
              <blockquote 
                className="text-2xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight lg:leading-tight pl-8 lg:pl-12 transition-all duration-1000"
                key={currentSlide}
              >
                {currentTestimonial.quote}
              </blockquote>
              <div className="absolute -bottom-4 right-4 text-6xl lg:text-8xl text-primary/20 font-bold">"</div>
            </div>
          </div>

          {/* Person Selectors */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`flex flex-col items-center cursor-pointer transition-all duration-500 ${
                  index === currentSlide 
                    ? 'opacity-100 scale-105' 
                    : 'opacity-50 hover:opacity-75'
                }`}
                onClick={() => handlePersonClick(index)}
              >
                {/* Avatar */}
                <div className={`relative mb-3 transition-all duration-500 ${
                  index === currentSlide ? 'ring-4 ring-primary' : 'ring-2 ring-border'
                } rounded-full overflow-hidden`}>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 lg:w-20 lg:h-20 object-cover"
                  />
                  {index === currentSlide && (
                    <div className="absolute inset-0 bg-primary/10 rounded-full" />
                  )}
                </div>
                
                {/* Person Info */}
                <div className="text-center">
                  <h4 className={`font-bold text-sm lg:text-base transition-colors duration-500 ${
                    index === currentSlide ? 'text-primary' : 'text-foreground'
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
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center lg:justify-start mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === currentSlide 
                    ? 'w-12 bg-primary' 
                    : 'w-4 bg-border'
                }`}
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

export default TestimonialsTonyRobbins;