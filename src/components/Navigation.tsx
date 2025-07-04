
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            MARCO
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
              Results
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </div>
          
          {/* CTA Button */}
          <Button className="hidden lg:inline-flex bg-white text-black hover:bg-gray-100 font-semibold px-6 py-2 rounded-full">
            Start now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
