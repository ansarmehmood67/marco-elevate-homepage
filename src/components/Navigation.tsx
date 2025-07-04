import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-foreground">
            MARCO
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Results
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
          
          {/* CTA Button */}
          <Button variant="outline" className="hidden lg:inline-flex">
            Start now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;