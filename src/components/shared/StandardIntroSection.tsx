import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

interface StandardIntroSectionProps {
  badge?: string;
  title: string;
  highlightedText: string;
  description: string;
  ctaText: string;
  ctaSubtext?: string;
  onCtaClick?: () => void;
  ctaHref?: string;
}

const StandardIntroSection = ({
  badge = "OUTSOURCING END-TO-END",
  title,
  highlightedText,
  description,
  ctaText,
  ctaSubtext = "Audit 30 min • Nessun impegno • Risposta entro 2 ore • 500+ clienti",
  onCtaClick,
  ctaHref = "/quiz"
}: StandardIntroSectionProps) => {
  const { ref, visibleItems } = useStaggeredAnimation(5, 120);

  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else if (ctaHref) {
      window.location.href = ctaHref;
    }
  };

  return (
    <div className="bg-white py-24 lg:py-32 relative">
      <div ref={ref} className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-12">
          {/* Premium Badge */}
          <div className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-full border border-primary/20 backdrop-blur-sm transition-all duration-700 ease-out ${
            visibleItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm">{badge}</span>
          </div>

          {/* Main Headlines with Modern Typography and scroll animations */}
          <div className="space-y-8">
            <div className={`transition-all duration-700 ease-out ${
              visibleItems[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h1 className="text-5xl lg:text-7xl font-black leading-[0.8] tracking-tight text-black mb-10">
                <span className="block">{title}</span>
                <span
                  className={`block bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent ${visibleItems[1] ? 'animate-swipe-in-left' : ''}`}
                >
                  {highlightedText}
                </span>
              </h1>
            </div>
            
            <div className={`transition-all duration-700 ease-out ${
              visibleItems[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-4xl mx-auto leading-relaxed">
                <span dangerouslySetInnerHTML={{ __html: description }} />
              </p>
            </div>
          </div>

          {/* CTA Button with animation */}
          <div className={`pt-8 transition-all duration-700 ease-out ${
            visibleItems[4] ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-glow rounded-full blur opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
              <Button 
                size="xl" 
                className="relative bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-white font-bold px-12 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={handleCtaClick}
              >
                <span className="flex items-center gap-3">
                  {ctaText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>
            
            {/* CTA Subtext with swipe-in-left animation */}
            {ctaSubtext && (
              <div className={`mt-8 transition-all duration-300 ${
                visibleItems[4] ? 'opacity-100 animate-swipe-in-left' : 'opacity-0'
              }`} style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                <p className="text-base lg:text-lg text-primary font-bold tracking-wide">
                  {ctaSubtext}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandardIntroSection;