import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
          <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1756303017/Untitled_design_16_ptw7gt.mp4" type="video/mp4" />
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

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="space-y-8">
          {/* Quote Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
            <span className="text-primary-glow font-medium text-sm">{badge}</span>
          </div>

          <blockquote className="space-y-8">
            <div className="relative">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                {mainQuote}
              </h3>
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent leading-tight">
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

            <div className="pt-6">
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
              
              <div className="mt-4">
                <p className="text-sm text-slate-400">
                  {ctaSubtext}
                </p>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default StandardQuoteSection;