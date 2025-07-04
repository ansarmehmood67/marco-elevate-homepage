
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            MARCO
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors cursor-pointer">
              <span>About</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors cursor-pointer">
              <span>Services</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors cursor-pointer">
              <span>Results</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </div>
          
          {/* CTA Button */}
          <Button className="hidden lg:inline-flex bg-white text-black hover:bg-gray-100 font-semibold px-6 py-3 rounded-full">
            Start now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
