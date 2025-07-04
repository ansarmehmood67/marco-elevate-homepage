import { Button } from "@/components/ui/button";
import marcoPortrait from "@/assets/marco-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      
      <div className="relative container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              Porta vendite e comunicazione al{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                livello successivo.
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              Affidati a un team esperto in outsourcing vendite, marketing e intelligenza artificiale.
            </p>
            
            <Button variant="hero" size="xl" className="mt-8">
              Inizia adesso
            </Button>
          </div>
          
          {/* Right side - Portrait */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full filter blur-2xl opacity-30 animate-pulse" />
              <img
                src={marcoPortrait}
                alt="Marco - Business Consultant"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-premium border-4 border-primary/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;