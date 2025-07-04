
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ChevronDown, Moon, Sun } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isDark ? 'bg-black' : 'bg-white shadow-lg'
    }`}>
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className={`text-2xl font-bold transition-colors duration-500 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            MARCO
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className={`flex items-center space-x-1 transition-colors cursor-pointer ${
              isDark 
                ? 'text-gray-300 hover:text-white' 
                : 'text-gray-600 hover:text-slate-900'
            }`}>
              <span>About</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className={`flex items-center space-x-1 transition-colors cursor-pointer ${
              isDark 
                ? 'text-gray-300 hover:text-white' 
                : 'text-gray-600 hover:text-slate-900'
            }`}>
              <span>Services</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className={`flex items-center space-x-1 transition-colors cursor-pointer ${
              isDark 
                ? 'text-gray-300 hover:text-white' 
                : 'text-gray-600 hover:text-slate-900'
            }`}>
              <span>Results</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <a href="#contact" className={`transition-colors ${
              isDark 
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
              isDark 
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
              isDark 
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
