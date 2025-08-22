
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

const Navigation = () => {
  
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
              src={isNavDark ? "/src/assets/logo-light.png" : "/src/assets/logo-dark.png"}
              alt="Logo"
              className="h-12 w-auto transition-all duration-500"
            />
          </Link>
          
          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/about" className={`flex items-center space-x-1 transition-colors ${
              isNavDark 
                ? 'text-gray-300 hover:text-white' 
                : 'text-gray-600 hover:text-slate-900'
            }`}>
              <span>Chi Siamo</span>
            </Link>
            
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
                  } shadow-xl min-w-[800px] p-8`}>
                    <div className="grid grid-cols-3 gap-8">
                      {/* Sales On Demand - Premium Blue Theme */}
                      <div className="space-y-3 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/80 border border-blue-300/50 shadow-lg hover:shadow-xl transition-all duration-300">
                        <NavigationMenuLink asChild>
                          <Link to="/sales-on-demand" className="font-bold text-xl text-blue-800 hover:text-blue-600 transition-colors flex items-center gap-3">
                            <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-md"></div>
                            Sales On Demand
                          </Link>
                        </NavigationMenuLink>
                        <div className="space-y-2">
                          <NavigationMenuLink asChild>
                            <Link to="/outsourcing-salesforce" className="block px-4 py-3 rounded-xl text-blue-600 hover:text-blue-800 hover:bg-blue-200/60 transition-all duration-200 font-medium">
                              Outsourcing Salesforce
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/telemarketing-teleselling" className="block px-4 py-3 rounded-xl text-blue-600 hover:text-blue-800 hover:bg-blue-200/60 transition-all duration-200 font-medium">
                              Telemarketing & Teleselling
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/contact-center-inbound" className="block px-4 py-3 rounded-xl text-blue-600 hover:text-blue-800 hover:bg-blue-200/60 transition-all duration-200 font-medium">
                              Contact Center Inbound
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/outsourcing-marketing" className="block px-4 py-3 rounded-xl text-blue-600 hover:text-blue-800 hover:bg-blue-200/60 transition-all duration-200 font-medium">
                              Outsourcing Marketing
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>

                      {/* Consultation - Premium Purple Theme */}
                      <div className="space-y-3 p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100/80 border border-purple-300/50 shadow-lg hover:shadow-xl transition-all duration-300">
                        <NavigationMenuLink asChild>
                          <Link to="/consulenza-strategica" className="font-bold text-xl text-purple-800 hover:text-purple-600 transition-colors flex items-center gap-3">
                            <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full shadow-md"></div>
                            Consulenza
                          </Link>
                        </NavigationMenuLink>
                        <div className="space-y-2">
                          <NavigationMenuLink asChild>
                            <Link to="/consulenza-strategica/sales-services" className="block px-4 py-3 rounded-xl text-purple-600 hover:text-purple-800 hover:bg-purple-200/60 transition-all duration-200 font-medium">
                              Sales Services
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/consulenza-strategica/marketing-services" className="block px-4 py-3 rounded-xl text-purple-600 hover:text-purple-800 hover:bg-purple-200/60 transition-all duration-200 font-medium">
                              Marketing Services
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/consulenza-strategica/consultation-services" className="block px-4 py-3 rounded-xl text-purple-600 hover:text-purple-800 hover:bg-purple-200/60 transition-all duration-200 font-medium">
                              Consultation Services
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>

                      {/* AI Services - Premium Green Theme */}
                      <div className="space-y-3 p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/80 border border-emerald-300/50 shadow-lg hover:shadow-xl transition-all duration-300">
                        <NavigationMenuLink asChild>
                          <Link to="/ai" className="font-bold text-xl text-emerald-800 hover:text-emerald-600 transition-colors flex items-center gap-3">
                            <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full shadow-md"></div>
                            Automazioni AI
                          </Link>
                        </NavigationMenuLink>
                        <div className="space-y-2">
                          <NavigationMenuLink asChild>
                            <Link to="/monetizza-youtube" className="block px-4 py-3 rounded-xl text-emerald-600 hover:text-emerald-800 hover:bg-emerald-200/60 transition-all duration-200 font-medium">
                              Monetizza YouTube
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/instant-avatar" className="block px-4 py-3 rounded-xl text-emerald-600 hover:text-emerald-800 hover:bg-emerald-200/60 transition-all duration-200 font-medium">
                              Instant Avatar
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/chatbot-ai" className="block px-4 py-3 rounded-xl text-emerald-600 hover:text-emerald-800 hover:bg-emerald-200/60 transition-all duration-200 font-medium">
                              Chatbot AI
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/automazione-ai" className="block px-4 py-3 rounded-xl text-emerald-600 hover:text-emerald-800 hover:bg-emerald-200/60 transition-all duration-200 font-medium">
                              Automazione AI
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/web-app-development" className="block px-4 py-3 rounded-xl text-emerald-600 hover:text-emerald-800 hover:bg-emerald-200/60 transition-all duration-200 font-medium">
                              Web & App Development
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/saas-platforms" className="block px-4 py-3 rounded-xl text-emerald-600 hover:text-emerald-800 hover:bg-emerald-200/60 transition-all duration-200 font-medium">
                              SaaS Platforms
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/smart-ai-tools" className="block px-4 py-3 rounded-xl text-emerald-600 hover:text-emerald-800 hover:bg-emerald-200/60 transition-all duration-200 font-medium">
                              Smart AI Tools
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/ai-integration" className="block px-4 py-3 rounded-xl text-emerald-600 hover:text-emerald-800 hover:bg-emerald-200/60 transition-all duration-200 font-medium">
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

            <Link to="/blog" className={`transition-colors ${
              isNavDark 
                ? 'text-gray-300 hover:text-white' 
                : 'text-gray-600 hover:text-slate-900'
            }`}>
              Blog
            </Link>
            <Link to="/contact" className={`transition-colors ${
              isNavDark 
                ? 'text-gray-300 hover:text-white' 
                : 'text-gray-600 hover:text-slate-900'
            }`}>
              Contatti
            </Link>
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
              <SheetContent side="right" className="w-full sm:max-w-sm">
                <nav className="mt-8 space-y-6">
                  <Link to="/about" className="block text-foreground text-lg font-medium">Chi Siamo</Link>
                  <div>
                    <div className="text-xs uppercase text-muted-foreground mb-2">Servizi</div>
                    <div className="grid grid-cols-1 gap-2">
                      <Link to="/sales-on-demand" className="block px-3 py-2 rounded-md hover:bg-muted">Sales On Demand</Link>
                      <Link to="/outsourcing-salesforce" className="block px-3 py-2 rounded-md hover:bg-muted">Outsourcing Salesforce</Link>
                      <Link to="/telemarketing-teleselling" className="block px-3 py-2 rounded-md hover:bg-muted">Telemarketing & Teleselling</Link>
                      <Link to="/contact-center-inbound" className="block px-3 py-2 rounded-md hover:bg-muted">Contact Center Inbound</Link>
                      <Link to="/outsourcing-marketing" className="block px-3 py-2 rounded-md hover:bg-muted">Outsourcing Marketing</Link>
                      <Link to="/consulenza-marketing" className="block px-3 py-2 rounded-md hover:bg-muted">Consulenza Marketing</Link>
                      <Link to="/ai" className="block px-3 py-2 rounded-md hover:bg-muted">AI Services</Link>
                      <Link to="/monetizza-youtube" className="block px-3 py-2 rounded-md hover:bg-muted">Monetizza YouTube</Link>
                      <Link to="/instant-avatar" className="block px-3 py-2 rounded-md hover:bg-muted">Instant Avatar</Link>
                      <Link to="/chatbot-ai" className="block px-3 py-2 rounded-md hover:bg-muted">Chatbot AI</Link>
                      <Link to="/automazione-ai" className="block px-3 py-2 rounded-md hover:bg-muted">Automazione AI</Link>
                      <Link to="/web-app-development" className="block px-3 py-2 rounded-md hover:bg-muted">Web & App Development</Link>
                      <Link to="/saas-platforms" className="block px-3 py-2 rounded-md hover:bg-muted">SaaS Platforms</Link>
                      <Link to="/smart-ai-tools" className="block px-3 py-2 rounded-md hover:bg-muted">Smart AI Tools</Link>
                      <Link to="/ai-integration" className="block px-3 py-2 rounded-md hover:bg-muted">AI Integration</Link>
                    </div>
                  </div>
                  <Link to="/contact" className="block text-foreground text-lg font-medium">Contatti</Link>
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
