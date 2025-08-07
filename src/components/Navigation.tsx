
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ChevronDown, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import Quiz from "@/components/quiz/Quiz";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
// Import logo images (will be replaced with actual images)
import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";

const Navigation = () => {
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

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
            
            {/* Services Navigation Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`flex items-center space-x-1 transition-colors cursor-pointer bg-transparent ${
                    isNavDark 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-600 hover:text-slate-900'
                  }`}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className={`${
                    isNavDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'
                  } shadow-xl min-w-[600px] p-6`}>
                    <div className="grid grid-cols-3 gap-6">
                      {/* Sales On Demand */}
                      <div className="space-y-3">
                        <NavigationMenuLink asChild>
                          <Link to="/sales-on-demand" className={`font-semibold text-lg transition-colors hover:underline ${
                            isNavDark ? 'text-white hover:text-gray-200' : 'text-slate-900 hover:text-slate-700'
                          }`}>
                            Sales On Demand
                          </Link>
                        </NavigationMenuLink>
                        <div className="space-y-2">
                          <NavigationMenuLink asChild>
                            <Link to="/outsourcing-salesforce" className={`block px-3 py-2 rounded-md transition-colors ${
                              isNavDark ? 'text-gray-300 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-gray-100'
                            }`}>
                              Outsourcing Salesforce
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/telemarketing-teleselling" className={`block px-3 py-2 rounded-md transition-colors ${
                              isNavDark ? 'text-gray-300 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-gray-100'
                            }`}>
                              Telemarketing & Teleselling
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/contact-center-inbound" className={`block px-3 py-2 rounded-md transition-colors ${
                              isNavDark ? 'text-gray-300 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-gray-100'
                            }`}>
                              Contact Center Inbound
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/outsourcing-marketing" className={`block px-3 py-2 rounded-md transition-colors ${
                              isNavDark ? 'text-gray-300 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-gray-100'
                            }`}>
                              Outsourcing Marketing
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>

                      {/* Consultation */}
                      <div className="space-y-3">
                        <NavigationMenuLink asChild>
                          <Link to="/consulenza-strategica" className={`font-semibold text-lg transition-colors hover:underline ${
                            isNavDark ? 'text-white hover:text-gray-200' : 'text-slate-900 hover:text-slate-700'
                          }`}>
                            Consultation
                          </Link>
                        </NavigationMenuLink>
                        <div className="space-y-2">
                          <NavigationMenuLink asChild>
                            <Link to="/audit-vendite" className={`block px-3 py-2 rounded-md transition-colors ${
                              isNavDark ? 'text-gray-300 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-gray-100'
                            }`}>
                              Audit Vendite
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/consulenza-marketing" className={`block px-3 py-2 rounded-md transition-colors ${
                              isNavDark ? 'text-gray-300 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-gray-100'
                            }`}>
                              Consulenza Marketing
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>

                      {/* AI Services */}
                      <div className="space-y-3">
                        <NavigationMenuLink asChild>
                          <Link to="/ai" className={`font-semibold text-lg transition-colors hover:underline ${
                            isNavDark ? 'text-white hover:text-gray-200' : 'text-slate-900 hover:text-slate-700'
                          }`}>
                            AI Services
                          </Link>
                        </NavigationMenuLink>
                        <div className="space-y-2">
                          <NavigationMenuLink asChild>
                            <Link to="/monetizza-youtube" className={`block px-3 py-2 rounded-md transition-colors ${
                              isNavDark ? 'text-gray-300 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-gray-100'
                            }`}>
                              Monetizza YouTube
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/instant-avatar" className={`block px-3 py-2 rounded-md transition-colors ${
                              isNavDark ? 'text-gray-300 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-gray-100'
                            }`}>
                              Instant Avatar
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/chatbot-ai" className={`block px-3 py-2 rounded-md transition-colors ${
                              isNavDark ? 'text-gray-300 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-gray-100'
                            }`}>
                              Chatbot AI
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/automazione-ai" className={`block px-3 py-2 rounded-md transition-colors ${
                              isNavDark ? 'text-gray-300 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-gray-100'
                            }`}>
                              Automazione AI
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/web-app-development" className={`block px-3 py-2 rounded-md transition-colors ${
                              isNavDark ? 'text-gray-300 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-gray-100'
                            }`}>
                              Web & App Development
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/saas-platforms" className={`block px-3 py-2 rounded-md transition-colors ${
                              isNavDark ? 'text-gray-300 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-gray-100'
                            }`}>
                              SaaS Platforms
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/smart-ai-tools" className={`block px-3 py-2 rounded-md transition-colors ${
                              isNavDark ? 'text-gray-300 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-gray-100'
                            }`}>
                              Smart AI Tools
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/ai-integration" className={`block px-3 py-2 rounded-md transition-colors ${
                              isNavDark ? 'text-gray-300 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-gray-100'
                            }`}>
                              AI Integration
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

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
            <Button 
              onClick={() => setIsQuizOpen(true)}
              className={`hidden lg:inline-flex font-semibold px-6 py-3 rounded-full transition-all duration-300 ${
                isNavDark 
                  ? 'bg-white text-black hover:bg-gray-100' 
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              Start now
            </Button>
          </div>
        </div>
      </div>
      
      {/* Quiz Component */}
      <Quiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </nav>
  );
};

export default Navigation;
