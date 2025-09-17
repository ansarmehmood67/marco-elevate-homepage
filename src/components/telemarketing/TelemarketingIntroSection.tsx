import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface TelemarketingIntroSectionProps {
  badge?: string;
  ctaText: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  ctaSubtext?: string;
}

const TelemarketingIntroSection = ({
  badge,
  ctaText,
  ctaHref,
  onCtaClick,
  ctaSubtext
}: TelemarketingIntroSectionProps) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([false, false, false, false, false, false]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the animations
            [0, 1, 2, 3, 4, 5].forEach((index) => {
              setTimeout(() => {
                setVisibleItems((prev) => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 120);
            });
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else if (ctaHref) {
      window.location.href = ctaHref;
    }
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          {/* Badge */}
          {badge && (
            <div className={`transition-all duration-300 ${
              visibleItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 transition-all duration-300 hover:scale-105 shadow-lg bg-primary/10 text-primary border border-primary/20">
                {badge}
              </div>
            </div>
          )}

          {/* Multi-line Heading Structure */}
          <div className={`transition-all duration-300 ${
            visibleItems[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-5xl lg:text-7xl font-black leading-[0.8] tracking-tight text-black mb-10">
              <span className="block mb-4">La forza del Telemarketing:</span>
              <span className={`block ${visibleItems[2] ? 'animate-swipe-in-left' : 'opacity-0'}`} 
                    style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                  Connessione,
                </span>
              </span>
              <span className={`block ${visibleItems[3] ? 'animate-swipe-in-left' : 'opacity-0'}`} 
                    style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
                <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                  Conversione,
                </span>
              </span>
              <span className={`block ${visibleItems[4] ? 'animate-swipe-in-left' : 'opacity-0'}`} 
                    style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>
                <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                  Crescita
                </span>
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className={`transition-all duration-500 ${
            visibleItems[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-4xl mx-auto mb-12">
              <strong className="text-primary font-bold">La connessione diretta</strong> è uno degli strumenti più potenti per creare relazioni autentiche. 
              La telefonata, grazie alla sua <strong className="text-primary font-bold">immediatezza</strong>, resta un canale decisivo per instaurare fiducia. 
              Il <strong className="text-primary font-bold">telemarketing strategico</strong> è il metodo più efficace e personalizzato per raggiungere e coinvolgere il pubblico.
            </p>
          </div>

          {/* CTA Button */}
          <div className={`transition-all duration-700 ${
            visibleItems[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center mt-8">
              <Button
                onClick={handleCtaClick}
                className="group bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                {ctaText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>
            
            {/* CTA Subtext with swipe-in-left animation */}
            {ctaSubtext && (
              <div className={`text-center mt-6 transition-all duration-300 ${
                visibleItems[5] ? 'opacity-100 animate-swipe-in-left' : 'opacity-0'
              }`} style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
                <div className="inline-flex items-center px-6 py-3 bg-slate-100 rounded-full border border-slate-200">
                  <p className="text-base lg:text-lg font-bold text-slate-700">
                    <span className="text-[#2E8BC0]">●</span> Audit 30 min • 
                    <span className="text-[#2E8BC0] mx-2">●</span> Nessun impegno • 
                    <span className="text-[#2E8BC0] mx-2">●</span> Risposta entro 2 ore • 
                    <span className="text-[#2E8BC0] mx-2">●</span> 500+ clienti
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelemarketingIntroSection;