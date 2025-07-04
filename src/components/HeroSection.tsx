import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-8 px-6">
      <div className="container mx-auto">
        <div 
          className="relative min-h-[80vh] rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
          
          {/* Subtle animated elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-primary-glow/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
          
          {/* Content positioned at bottom left */}
          <div className="absolute bottom-12 left-12 max-w-2xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
              Porta vendite e
            </h1>
            
            <Button variant="hero" size="xl">
              inizia adesso
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;