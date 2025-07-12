
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ChevronDown, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
// Import logo images (will be replaced with actual images)
import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";

const Navigation = () => {
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine navbar state: initially black, white when scrolled
  const isNavDark = !isScrolled;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isNavDark ? 'bg-black' : 'bg-white shadow-lg'
    }`}>
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="transition-opacity duration-500">
            <img 
              src={isNavDark ? "/lovable-uploads/6e880c32-395f-4bee-afdc-3c3ddfa8eac4.png" : "/lovable-uploads/4942e788-ba8d-426d-bd98-bf362a153c59.png"}
              alt="Logo"
              className="h-8 w-auto transition-all duration-500"
            />
          </Link>
          
          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className={`flex items-center space-x-1 transition-colors cursor-pointer ${
              isNavDark 
                ? 'text-gray-300 hover:text-white' 
                : 'text-gray-600 hover:text-slate-900'
            }`}>
              <span>About</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center space-x-1 transition-colors cursor-pointer ${
                isNavDark 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-600 hover:text-slate-900'
              }`}>
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className={`${
                isNavDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'
              } shadow-xl`}>
                <DropdownMenuItem asChild>
                  <Link to="/sales-on-demand" className={`${
                    isNavDark ? 'text-white hover:bg-slate-800' : 'text-slate-900 hover:bg-gray-100'
                  }`}>
                    Sales On Demand
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/consulenza-strategica" className={`${
                    isNavDark ? 'text-white hover:bg-slate-800' : 'text-slate-900 hover:bg-gray-100'
                  }`}>
                    Consultation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className={`${
                  isNavDark ? 'text-white hover:bg-slate-800' : 'text-slate-900 hover:bg-gray-100'
                }`}>
                  Instant Avatar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className={`flex items-center space-x-1 transition-colors cursor-pointer ${
              isNavDark 
                ? 'text-gray-300 hover:text-white' 
                : 'text-gray-600 hover:text-slate-900'
            }`}>
              <span>Results</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <a href="#contact" className={`transition-colors ${
              isNavDark 
                ? 'text-gray-300 hover:text-white' 
                : 'text-gray-600 hover:text-slate-900'
            }`}>
              Contact
            </a>
          </div>

          {/* Theme Toggle and CTA */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <div className={`flex items-center space-x-3 backdrop-blur-sm rounded-full px-4 py-2 border transition-all duration-500 ${
              isNavDark 
                ? 'bg-white/10 border-white/20' 
                : 'bg-black/10 border-black/20'
            }`}>
              <Sun className={`w-4 h-4 transition-colors ${isDark ? 'text-slate-400' : 'text-amber-500'}`} />
              <Switch 
                checked={isDark} 
                onCheckedChange={setIsDark}
                className={isDark ? "data-[state=checked]:bg-slate-700 data-[state=unchecked]:bg-amber-100" : "data-[state=checked]:bg-slate-600 data-[state=unchecked]:bg-amber-200"}
              />
              <Moon className={`w-4 h-4 transition-colors ${isDark ? 'text-blue-400' : 'text-slate-400'}`} />
            </div>
            
            {/* CTA Button */}
            <Button className={`hidden lg:inline-flex font-semibold px-6 py-3 rounded-full transition-all duration-300 ${
              isNavDark 
                ? 'bg-white text-black hover:bg-gray-100' 
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}>
              Start now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
