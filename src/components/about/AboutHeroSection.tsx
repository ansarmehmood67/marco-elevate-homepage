import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";
import heroBackgroundImg from "@/assets/about-hero-bg.png";
import heroPersonImg from "@/assets/about-hero-person.png";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const AboutHeroSection = () => {
  const { ref, visibleItems } = useStaggeredAnimation(6, 200);
  
  const [counters, setCounters] = useState({
    clients: 0,
    revenue: 0,
    success: 0,
    years: 0,
  });

  const finalValues = {
    clients: 500,
    revenue: 50,
    success: 95,
    years: 15,
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      setCounters((prev) => ({
        clients: Math.min(prev.clients + finalValues.clients / steps, finalValues.clients),
        revenue: Math.min(prev.revenue + finalValues.revenue / steps, finalValues.revenue),
        success: Math.min(prev.success + finalValues.success / steps, finalValues.success),
        years: Math.min(prev.years + finalValues.years / steps, finalValues.years),
      }));
    }, stepDuration);

    const timeout = setTimeout(() => {
      clearInterval(timer);
      setCounters(finalValues);
    }, duration);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section ref={ref} className="pt-32 sm:pt-36 lg:pt-28 pb-16 px-0 bg-black relative overflow-hidden min-h-screen">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[85vh] lg:min-h-[90vh] rounded-3xl overflow-hidden border border-gray-800/30 shadow-2xl bg-black">
          {/* Background Image */}
          <img
            src={heroBackgroundImg}
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent" />

          {/* Desktop Layout: Two Columns */}
          <div className="absolute inset-0 flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-between z-20 p-4 sm:p-6 lg:p-12">
            {/* Left Content Section */}
            <div className="flex-1 flex flex-col justify-center lg:max-w-5xl">
              <div className={`mb-6 flex items-center space-x-2 ${
                visibleItems[0] 
                  ? "animate-swipe-in-left" 
                  : "opacity-0"
              }`}>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-white/90 font-medium text-sm lg:text-base">
                  La nostra Filosofia
                </span>
              </div>

              <h1 className={`text-hero-title font-black leading-constrained-tight tracking-tight text-white mb-4 lg:mb-6 drop-shadow-2xl text-center lg:text-left ${
                visibleItems[1] 
                  ? "animate-swipe-in-left" 
                  : "opacity-0"
              }`}>
                La missione di
                <span className="block bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                  Sales on Demand
                </span>
              </h1>

              <div className={`${
                visibleItems[2] 
                  ? "animate-fade-in-bottom" 
                  : "opacity-0"
              }`}>
                <p className="text-hero-body text-gray-100 mb-4 lg:mb-4 font-light leading-constrained-relaxed text-center lg:text-left">
                  Crediamo che ogni azienda possa crescere in modo <span className="text-white font-semibold">rapido e sostenibile</span> se supportata dal <span className="text-white font-semibold">giusto metodo</span>.
                </p>
                <p className="text-hero-body text-gray-100 mb-4 lg:mb-6 font-light leading-constrained-relaxed text-center lg:text-left">
                  Con <span className="text-white font-semibold">Sales on Demand</span> uniamo <span className="text-white font-semibold">innovazione</span>, <span className="text-white font-semibold">esperienza</span> e <span className="text-white font-semibold">outsourcing strategico</span> per trasformare le tue sfide commerciali in <span className="text-white font-semibold">risultati concreti</span>. Il nostro obiettivo? Creare <span className="text-white font-semibold">sistemi di vendita scalabili</span> che funzionano davvero, senza sprechi di tempo e risorse.
                </p>
              </div>

              <div className={`flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start ${
                visibleItems[3] 
                  ? "animate-scale-in" 
                  : "opacity-0"
              }`}>
                  <Button className="group font-semibold px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-primary to-primary-glow text-white">
                  <span className="flex items-center space-x-2">
                    <span>Scopri chi siamo</span>
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button variant="outline" className="group font-semibold px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl rounded-full border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
                  <span className="flex items-center space-x-2">
                    <span>Guarda Video 60sec</span>
                    <Star className="w-4 h-4 lg:w-5 lg:h-5 group-hover:rotate-12 transition-transform" />
                  </span>
                </Button>
              </div>
            </div>

            {/* Right Image Section - Desktop Only */}
            <div className={`hidden lg:flex lg:w-80 xl:w-96 relative items-end justify-center lg:justify-end flex-shrink-0 transform-gpu will-change-[transform,opacity] ${
              visibleItems[4] 
                ? "animate-fade-in" 
                : "opacity-0"
            }`}>
              <img
                src={heroPersonImg}
                alt="About Us Person"
                className="w-full h-auto object-contain object-bottom"
              />
            </div>
          </div>

          {/* Mobile Image Section - Below content on mobile only */}
          <div className="lg:hidden flex justify-center pt-8 pb-4 relative z-10">
            <img
              src={heroPersonImg}
              alt="About Us Person"
              className="w-full max-w-[320px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
