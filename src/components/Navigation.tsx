
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import EnhancedNavigationLink from "./EnhancedNavigationLink";

const Navigation = () => {
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
          <EnhancedNavigationLink to="/" className="transition-opacity duration-500">
            <img 
              src={isNavDark 
                ? "/assets/images/logos/logo-bw.png"  // B&W logo for black header
                : "/assets/images/logos/logo-color.png"   // Colorful logo for white header
              }
              alt="Logo"
              className="h-12 w-auto transition-all duration-500"
            />
          </EnhancedNavigationLink>
          
          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <EnhancedNavigationLink 
              to="/about" 
              className={`flex items-center space-x-1 transition-colors ${
                isNavDark 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-600 hover:text-slate-900'
              }`}
            >
              <span>Chi Siamo</span>
            </EnhancedNavigationLink>
            
            {/* Services Navigation Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`flex items-center space-x-1 transition-colors cursor-pointer bg-transparent ${
                    isNavDark 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-600 hover:text-slate-900'
                  }`}>
                     Servizi
                  </NavigationMenuTrigger>
                   <NavigationMenuContent className={`${
                    isNavDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'
                  } shadow-xl min-w-[800px] p-6`}>
                    <div className="grid grid-cols-3 gap-6">
                      {/* Sales On Demand */}
                      <div className="space-y-4">
                        <NavigationMenuLink asChild>
                          <EnhancedNavigationLink 
                            to="/sales-on-demand" 
                            className={`text-lg font-bold transition-colors ${
                              isNavDark ? 'text-white hover:text-primary' : 'text-slate-900 hover:text-primary'
                            }`}
                          >
                            Sales On Demand
                          </EnhancedNavigationLink>
                        </NavigationMenuLink>
                        <div className="space-y-1 ml-0">
                          <NavigationMenuLink asChild>
                            <EnhancedNavigationLink 
                              to="/outsourcing-salesforce" 
                              className={`block py-2 text-sm transition-colors ${
                                isNavDark ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
                              }`}
                            >
                              Outsourcing Salesforce
                            </EnhancedNavigationLink>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <EnhancedNavigationLink 
                              to="/telemarketing-teleselling" 
                              className={`block py-2 text-sm transition-colors ${
                                isNavDark ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
                              }`}
                            >
                              Telemarketing e Teleselling
                            </EnhancedNavigationLink>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <EnhancedNavigationLink 
                              to="/contact-center-inbound" 
                              className={`block py-2 text-sm transition-colors ${
                                isNavDark ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
                              }`}
                            >
                              Contact Center Inbound
                            </EnhancedNavigationLink>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <EnhancedNavigationLink 
                              to="/outsourcing-marketing" 
                              className={`block py-2 text-sm transition-colors ${
                                isNavDark ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
                              }`}
                            >
                              Outsourcing Marketing
                            </EnhancedNavigationLink>
                          </NavigationMenuLink>
                        </div>
                      </div>

                      {/* Consulenza Strategica */}
                      <div className="space-y-4">
                        <NavigationMenuLink asChild>
                          <EnhancedNavigationLink 
                            to="/consulenza-strategica" 
                            className={`text-lg font-bold transition-colors ${
                              isNavDark ? 'text-white hover:text-primary' : 'text-slate-900 hover:text-primary'
                            }`}
                          >
                            Consulenza Strategica
                          </EnhancedNavigationLink>
                        </NavigationMenuLink>
                        <div className="space-y-1 ml-0">
                          <NavigationMenuLink asChild>
                            <EnhancedNavigationLink 
                              to="/consulenza-strategica/sales-services" 
                              className={`block py-2 text-sm transition-colors ${
                                isNavDark ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
                              }`}
                            >
                              Direttore vendite on demand
                            </EnhancedNavigationLink>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <EnhancedNavigationLink 
                              to="/consulenza-strategica/marketing-services" 
                              className={`block py-2 text-sm transition-colors ${
                                isNavDark ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
                              }`}
                            >
                              Direttore marketing on demand
                            </EnhancedNavigationLink>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <EnhancedNavigationLink to="/consulenza-strategica/consultation-services" className={`block py-2 text-sm transition-colors ${
                              isNavDark ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
                            }`}>
                              Outsourcing setup
                            </EnhancedNavigationLink>
                          </NavigationMenuLink>
                        </div>
                      </div>

                      {/* Automazioni AI */}
                      <div className="space-y-4">
                        <NavigationMenuLink asChild>
                          <EnhancedNavigationLink 
                            to="/ai" 
                            className={`text-lg font-bold transition-colors ${
                              isNavDark ? 'text-white hover:text-primary' : 'text-slate-900 hover:text-primary'
                            }`}
                          >
                            Automazioni AI
                          </EnhancedNavigationLink>
                        </NavigationMenuLink>
                        <div className="space-y-1 ml-0">
                          <NavigationMenuLink asChild>
                            <EnhancedNavigationLink 
                              to="/monetizza-youtube" 
                              className={`block py-2 text-sm transition-colors ${
                                isNavDark ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
                              }`}
                            >
                              Monetizza YouTube
                            </EnhancedNavigationLink>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <EnhancedNavigationLink 
                              to="/instant-avatar" 
                              className={`block py-2 text-sm transition-colors ${
                                isNavDark ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
                              }`}
                            >
                              Instant Avatar
                            </EnhancedNavigationLink>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <EnhancedNavigationLink 
                              to="/chatbot-ai" 
                              className={`block py-2 text-sm transition-colors ${
                                isNavDark ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
                              }`}
                            >
                              Chatbot AI
                            </EnhancedNavigationLink>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <EnhancedNavigationLink 
                              to="/automazione-ai" 
                              className={`block py-2 text-sm transition-colors ${
                                isNavDark ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
                              }`}
                            >
                              Automazione AI
                            </EnhancedNavigationLink>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <EnhancedNavigationLink 
                              to="/web-app-development" 
                              className={`block py-2 text-sm transition-colors ${
                                isNavDark ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
                              }`}
                            >
                              Sviluppo Web e App
                            </EnhancedNavigationLink>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <EnhancedNavigationLink 
                              to="/saas-platforms" 
                              className={`block py-2 text-sm transition-colors ${
                                isNavDark ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
                              }`}
                            >
                              Piattaforme SaaS
                            </EnhancedNavigationLink>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <EnhancedNavigationLink 
                              to="/smart-ai-tools" 
                              className={`block py-2 text-sm transition-colors ${
                                isNavDark ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
                              }`}
                            >
                              Strumenti AI Intelligenti
                            </EnhancedNavigationLink>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <EnhancedNavigationLink 
                              to="/ai-integration" 
                              className={`block py-2 text-sm transition-colors ${
                                isNavDark ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
                              }`}
                            >
                              Integrazione AI
                            </EnhancedNavigationLink>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a 
              href="https://blog.salesondemand.it/"
              target="_self"
              className={`transition-colors ${
                isNavDark 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-600 hover:text-slate-900'
              }`}
            >
              Blog
            </a>
            <EnhancedNavigationLink 
              to="/contact" 
              className={`transition-colors ${
                isNavDark 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-600 hover:text-slate-900'
              }`}
            >
              Contatti
            </EnhancedNavigationLink>
          </div>

          {/* Right actions */}
          <div className="flex items-center space-x-3">
            {/* Mobile CTA */}
            <Button
              onClick={() => setIsQuizOpen(true)}
              className={`lg:hidden font-semibold px-3 py-2 rounded-full transition-all duration-300 text-xs ${
                isNavDark ? 'bg-white text-black hover:bg-gray-100' : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
              size="sm"
            >
              Audit rapido
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className={`h-6 w-6 ${isNavDark ? 'text-white' : 'text-slate-900'}`} />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-sm overflow-y-auto">
                <nav className="mt-8 space-y-6 pb-8">
                  <EnhancedNavigationLink to="/about" className="block text-foreground text-lg font-medium hover:text-primary transition-colors">Chi Siamo</EnhancedNavigationLink>
                  
                  {/* Services Section */}
                  <div className="space-y-4">
                    <div className="text-lg font-medium text-foreground">Servizi</div>
                    
                    {/* Sales On Demand Category */}
                    <div className="space-y-2">
                      <EnhancedNavigationLink to="/sales-on-demand" className="block text-blue-600 font-medium px-3 py-2 rounded-md hover:bg-blue-50 transition-colors">
                        Sales On Demand
                      </EnhancedNavigationLink>
                      <div className="ml-4 space-y-1">
                        <EnhancedNavigationLink to="/outsourcing-salesforce" className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors">
                          Outsourcing Salesforce
                        </EnhancedNavigationLink>
                        <EnhancedNavigationLink to="/telemarketing-teleselling" className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors">
                          Telemarketing e Teleselling
                        </EnhancedNavigationLink>
                        <EnhancedNavigationLink to="/contact-center-inbound" className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors">
                          Contact Center Inbound
                        </EnhancedNavigationLink>
                        <EnhancedNavigationLink to="/outsourcing-marketing" className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors">
                          Outsourcing Marketing
                        </EnhancedNavigationLink>
                      </div>
                    </div>
                    
                    {/* Consulenza Strategica Category */}
                    <div className="space-y-2">
                      <EnhancedNavigationLink to="/consulenza-strategica" className="block text-purple-600 font-medium px-3 py-2 rounded-md hover:bg-purple-50 transition-colors">
                        Consulenza Strategica
                      </EnhancedNavigationLink>
                      <div className="ml-4 space-y-1">
                        <EnhancedNavigationLink to="/consulenza-strategica/sales-services" className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors">
                          Direttore vendite on demand
                        </EnhancedNavigationLink>
                        <EnhancedNavigationLink to="/consulenza-strategica/marketing-services" className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors">
                          Direttore marketing on demand
                        </EnhancedNavigationLink>
                        <EnhancedNavigationLink to="/consulenza-strategica/consultation-services" className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors">
                          Outsourcing setup
                        </EnhancedNavigationLink>
                      </div>
                    </div>
                    
                    {/* Automazioni AI Category */}
                    <div className="space-y-2">
                      <EnhancedNavigationLink to="/ai" className="block text-emerald-600 font-medium px-3 py-2 rounded-md hover:bg-emerald-50 transition-colors">
                        Automazioni AI
                      </EnhancedNavigationLink>
                      <div className="ml-4 space-y-1">
                        <EnhancedNavigationLink to="/monetizza-youtube" className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors">
                          Monetizza YouTube
                        </EnhancedNavigationLink>
                        <EnhancedNavigationLink to="/instant-avatar" className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors">
                          Instant Avatar
                        </EnhancedNavigationLink>
                        <EnhancedNavigationLink to="/chatbot-ai" className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors">
                          Chatbot AI
                        </EnhancedNavigationLink>
                        <EnhancedNavigationLink to="/automazione-ai" className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors">
                          Automazione AI
                        </EnhancedNavigationLink>
                        <EnhancedNavigationLink to="/web-app-development" className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors">
                          Sviluppo Web e App
                        </EnhancedNavigationLink>
                        <EnhancedNavigationLink to="/saas-platforms" className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors">
                          Piattaforme SaaS
                        </EnhancedNavigationLink>
                        <EnhancedNavigationLink to="/smart-ai-tools" className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors">
                          Strumenti AI Intelligenti
                        </EnhancedNavigationLink>
                        <EnhancedNavigationLink to="/ai-integration" className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors">
                          Integrazione AI
                        </EnhancedNavigationLink>
                      </div>
                    </div>
                  </div>
                  
                  <a href="https://blog.salesondemand.it/" target="_self" className="block text-foreground text-lg font-medium hover:text-primary transition-colors">Blog</a>
                  <EnhancedNavigationLink to="/contact" className="block text-foreground text-lg font-medium hover:text-primary transition-colors">Contatti</EnhancedNavigationLink>
                </nav>
              </SheetContent>
            </Sheet>

            {/* Desktop CTA */}
            <Button
              onClick={() => setIsQuizOpen(true)}
              className={`hidden lg:inline-flex font-semibold px-6 py-3 rounded-full transition-all duration-300 ${
                isNavDark ? 'bg-white text-black hover:bg-gray-100' : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              Inizia ora
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
