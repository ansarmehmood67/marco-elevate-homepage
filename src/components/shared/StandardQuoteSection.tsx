import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

interface StandardQuoteSectionProps {
  badge?: string;
  mainQuote: string;
  highlightedQuote: string;
  subheading?: string;
  description: string;
  ctaText: string;
  ctaSubtext?: string;
  onCtaClick?: () => void;
  ctaHref?: string;
}

const StandardQuoteSection = ({
  badge = "La nostra filosofia",
  mainQuote,
  highlightedQuote,
  subheading,
  description,
  ctaText,
  ctaSubtext = "Audit 30 min • Nessun impegno • Risposta entro 2 ore • 500+ clienti",
  onCtaClick,
  ctaHref
}: StandardQuoteSectionProps) => {
  const { ref, visibleItems } = useStaggeredAnimation(3, 200);
  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else if (ctaHref) {
      window.location.href = ctaHref;
    }
  };

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/videos/homepage/dark-quote-section-2.mp4" type="video/mp4" />
        </video>
        
        {/* Rich Overlay - Similar to Hero Sections */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/70 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-primary-glow/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div ref={ref} className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="space-y-8">
          {/* Quote Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm transition-all duration-700 ease-out ${
            visibleItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="text-primary-glow font-medium text-sm">{badge}</span>
          </div>

          <blockquote className="space-y-8">
            <div className={`relative transition-all duration-700 ease-out ${
              visibleItems[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
                {mainQuote}
              </h3>
              <div className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent leading-tight transition-all duration-700 ease-out delay-300 ${
                visibleItems[1] ? 'opacity-100 translate-x-0 animate-swipe-in-left' : 'opacity-0 -translate-x-12'
              }`}>
                {highlightedQuote}
              </div>
              
              {/* Modern Quote Marks */}
              <div className="absolute -top-4 -left-4 w-6 h-6 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center opacity-30">
                <span className="text-white text-sm font-bold">"</span>
              </div>
            </div>

            {subheading && (
              <div className="border-l-2 border-primary/30 pl-6">
                <p className="text-lg md:text-xl text-primary-glow font-medium italic leading-relaxed">
                  {subheading}
                </p>
              </div>
            )}

            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>

            <div className={`pt-6 transition-all duration-700 ease-out ${
              visibleItems[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Button 
                size="lg"
                className="bg-white/10 text-white hover:bg-white/20 font-semibold px-10 py-4 rounded-full transition-all duration-300 border border-white/20 hover:border-white/30 backdrop-blur-sm"
                onClick={handleCtaClick}
              >
                <span className="flex items-center gap-2">
                  {ctaText}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
              
              <div className="mt-6">
                <div className={`inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-700 ease-out delay-300 ${
                  visibleItems[2] ? 'opacity-100 translate-x-0 animate-swipe-in-left' : 'opacity-0 -translate-x-12'
                }`}>
                  <p className="text-base lg:text-lg font-bold text-white">
                    <span className="text-[#87CEEB]">●</span> Audit 30 min • 
                    <span className="text-[#87CEEB] mx-2">●</span> Nessun impegno • 
                    <span className="text-[#87CEEB] mx-2">●</span> Risposta entro 2 ore • 
                    <span className="text-[#87CEEB] mx-2">●</span> 500+ clienti
                  </p>
                </div>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default StandardQuoteSection;