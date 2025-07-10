import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAVideoSectionProps {
  isDark: boolean;
}

const CTAVideoSection = ({ isDark }: CTAVideoSectionProps) => {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1751915074/6389-191704465_wn49on.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              No fixed costs. No long hiring cycles.
            </h2>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Why hire, when you can rent proven sales results?
            </p>
            
            {/* Call to Action Text */}
            <div className="space-y-6">
              
              
              {/* CTA Button */}
              <Button
                size="xl"
                className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6 rounded-full font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              >
                Start Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />
    </section>
  );
};

export default CTAVideoSection;