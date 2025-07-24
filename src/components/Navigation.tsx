
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { 
  ChevronDown, 
  Moon, 
  Sun, 
  Phone, 
  HeadphonesIcon, 
  Users, 
  TrendingUp,
  Bot,
  Zap,
  MessageSquare,
  Cog,
  Globe,
  Layers,
  Smartphone,
  Settings
} from "lucide-react";
import { useState, useEffect } from "react";
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md ${
      isNavDark 
        ? 'bg-black/90 border-b border-white/10' 
        : 'bg-white/90 shadow-elegant border-b border-gray-200/50'
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
                ? 'text-white hover:text-white hover:shadow-glow' 
                : 'text-slate-900 hover:text-slate-900'
            }`}>
              <span>About</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            
            {/* Services Navigation Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`flex items-center space-x-1 transition-colors cursor-pointer bg-transparent hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent ${
                    isNavDark 
                      ? 'text-white hover:text-white data-[active]:text-white data-[state=open]:text-white hover:shadow-glow' 
                      : 'text-slate-900 hover:text-slate-900 data-[active]:text-slate-900 data-[state=open]:text-slate-900'
                  }`}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className={`glass-card border-0 shadow-premium backdrop-blur-xl w-[95vw] max-w-[1100px] p-8 right-0 ${
                    isNavDark 
                      ? 'bg-background/95 border-white/10' 
                      : 'bg-card/95 border-gray-200/20'
                  }`}>
                    <div className="grid grid-cols-3 gap-8">
                      {/* Sales On Demand */}
                      <div className="space-y-4 group">
                        <NavigationMenuLink asChild>
                          <Link to="/sales-on-demand" className="flex items-center space-x-3 mb-4 p-3 rounded-lg transition-all duration-300 hover:bg-primary/10 group/main">
                            <div className={`p-2 rounded-lg transition-all duration-300 ${
                              isNavDark 
                                ? 'bg-primary/20 text-primary group-hover/main:bg-primary/30' 
                                : 'bg-primary/10 text-primary group-hover/main:bg-primary/20'
                            }`}>
                              <TrendingUp className="w-5 h-5" />
                            </div>
                            <h3 className={`font-bold text-lg gradient-text ${
                              isNavDark ? 'text-white group-hover/main:text-white' : 'text-slate-900 group-hover/main:text-slate-900'
                            }`}>
                              Sales On Demand
                            </h3>
                          </Link>
                        </NavigationMenuLink>
                        <div className="space-y-1">
                          <NavigationMenuLink asChild>
                            <Link to="/outsourcing-salesforce" className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 hover-scale group/item ${
                              isNavDark 
                                ? 'text-white hover:text-white hover:bg-white/10 hover:shadow-glow' 
                                : 'text-slate-600 hover:text-slate-900 hover:bg-primary/5 hover:shadow-card'
                            }`}>
                              <Users className="w-4 h-4 text-primary" />
                              <span className="font-medium">Outsourcing Salesforce</span>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/telemarketing-teleselling" className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 hover-scale group/item ${
                              isNavDark 
                                ? 'text-white hover:text-white hover:bg-white/10 hover:shadow-glow' 
                                : 'text-slate-600 hover:text-slate-900 hover:bg-primary/5 hover:shadow-card'
                            }`}>
                              <Phone className="w-4 h-4 text-primary" />
                              <span className="font-medium">Telemarketing & Teleselling</span>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/contact-center-inbound" className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 hover-scale group/item ${
                              isNavDark 
                                ? 'text-white hover:text-white hover:bg-white/10 hover:shadow-glow' 
                                : 'text-slate-600 hover:text-slate-900 hover:bg-primary/5 hover:shadow-card'
                            }`}>
                              <HeadphonesIcon className="w-4 h-4 text-primary" />
                              <span className="font-medium">Contact Center Inbound</span>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/outsourcing-marketing" className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 hover-scale group/item ${
                              isNavDark 
                                ? 'text-white hover:text-white hover:bg-white/10 hover:shadow-glow' 
                                : 'text-slate-600 hover:text-slate-900 hover:bg-primary/5 hover:shadow-card'
                            }`}>
                              <TrendingUp className="w-4 h-4 text-primary" />
                              <span className="font-medium">Outsourcing Marketing</span>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>

                      {/* Consultation */}
                      <div className="space-y-4 group">
                        <NavigationMenuLink asChild>
                          <Link to="/consulenza-strategica" className="flex items-center space-x-3 mb-4 p-3 rounded-lg transition-all duration-300 hover:bg-primary/10 group/main">
                            <div className={`p-2 rounded-lg transition-all duration-300 ${
                              isNavDark 
                                ? 'bg-primary/20 text-primary group-hover/main:bg-primary/30' 
                                : 'bg-primary/10 text-primary group-hover/main:bg-primary/20'
                            }`}>
                              <Cog className="w-5 h-5" />
                            </div>
                            <h3 className={`font-bold text-lg gradient-text ${
                              isNavDark ? 'text-white group-hover/main:text-white' : 'text-slate-900 group-hover/main:text-slate-900'
                            }`}>
                              Consultation
                            </h3>
                          </Link>
                        </NavigationMenuLink>
                        <div className="space-y-1">
                          <NavigationMenuLink asChild>
                            <a href="https://shopify.com/sales-services" target="_blank" rel="noopener noreferrer" className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 hover-scale group/item ${
                              isNavDark 
                                ? 'text-white hover:text-white hover:bg-white/10 hover:shadow-glow' 
                                : 'text-slate-600 hover:text-slate-900 hover:bg-primary/5 hover:shadow-card'
                            }`}>
                              <TrendingUp className="w-4 h-4 text-primary" />
                              <span className="font-medium">Sales Services</span>
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="https://shopify.com/marketing-services" target="_blank" rel="noopener noreferrer" className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 hover-scale group/item ${
                              isNavDark 
                                ? 'text-white hover:text-white hover:bg-white/10 hover:shadow-glow' 
                                : 'text-slate-600 hover:text-slate-900 hover:bg-primary/5 hover:shadow-card'
                            }`}>
                              <Globe className="w-4 h-4 text-primary" />
                              <span className="font-medium">Marketing Services</span>
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="https://shopify.com/consultant-services" target="_blank" rel="noopener noreferrer" className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 hover-scale group/item ${
                              isNavDark 
                                ? 'text-white hover:text-white hover:bg-white/10 hover:shadow-glow' 
                                : 'text-slate-600 hover:text-slate-900 hover:bg-primary/5 hover:shadow-card'
                            }`}>
                              <Users className="w-4 h-4 text-primary" />
                              <span className="font-medium">Consultant Services</span>
                            </a>
                          </NavigationMenuLink>
                        </div>
                      </div>

                      {/* AI Services */}
                      <div className="space-y-4 group">
                        <NavigationMenuLink asChild>
                          <Link to="/ai" className="flex items-center space-x-3 mb-4 p-3 rounded-lg transition-all duration-300 hover:bg-primary/10 group/main">
                            <div className={`p-2 rounded-lg transition-all duration-300 ${
                              isNavDark 
                                ? 'bg-primary/20 text-primary group-hover/main:bg-primary/30' 
                                : 'bg-primary/10 text-primary group-hover/main:bg-primary/20'
                            }`}>
                              <Bot className="w-5 h-5" />
                            </div>
                            <h3 className={`font-bold text-lg gradient-text ${
                              isNavDark ? 'text-white group-hover/main:text-white' : 'text-slate-900 group-hover/main:text-slate-900'
                            }`}>
                              AI Services
                            </h3>
                          </Link>
                        </NavigationMenuLink>
                        <div className="space-y-1 grid grid-cols-2 gap-2">
                          <NavigationMenuLink asChild>
                            <Link to="/monetizza-youtube" className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover-scale group/item ${
                              isNavDark 
                                ? 'text-white hover:text-white hover:bg-white/10 hover:shadow-glow' 
                                : 'text-slate-600 hover:text-slate-900 hover:bg-primary/5 hover:shadow-card'
                            }`}>
                              <Zap className="w-4 h-4 text-primary" />
                              <span className="font-medium text-sm">Monetizza YouTube</span>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/instant-avatar" className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover-scale group/item ${
                              isNavDark 
                                ? 'text-white hover:text-white hover:bg-white/10 hover:shadow-glow' 
                                : 'text-slate-600 hover:text-slate-900 hover:bg-primary/5 hover:shadow-card'
                            }`}>
                              <Users className="w-4 h-4 text-primary" />
                              <span className="font-medium text-sm">Instant Avatar</span>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/chatbot-ai" className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover-scale group/item ${
                              isNavDark 
                                ? 'text-white hover:text-white hover:bg-white/10 hover:shadow-glow' 
                                : 'text-slate-600 hover:text-slate-900 hover:bg-primary/5 hover:shadow-card'
                            }`}>
                              <MessageSquare className="w-4 h-4 text-primary" />
                              <span className="font-medium text-sm">Chatbot AI</span>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/automazione-ai" className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover-scale group/item ${
                              isNavDark 
                                ? 'text-white hover:text-white hover:bg-white/10 hover:shadow-glow' 
                                : 'text-slate-600 hover:text-slate-900 hover:bg-primary/5 hover:shadow-card'
                            }`}>
                              <Settings className="w-4 h-4 text-primary" />
                              <span className="font-medium text-sm">Automazione AI</span>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/web-app-development" className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover-scale group/item ${
                              isNavDark 
                                ? 'text-white hover:text-white hover:bg-white/10 hover:shadow-glow' 
                                : 'text-slate-600 hover:text-slate-900 hover:bg-primary/5 hover:shadow-card'
                            }`}>
                              <Globe className="w-4 h-4 text-primary" />
                              <span className="font-medium text-sm">Web & App Development</span>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/saas-platforms" className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover-scale group/item ${
                              isNavDark 
                                ? 'text-white hover:text-white hover:bg-white/10 hover:shadow-glow' 
                                : 'text-slate-600 hover:text-slate-900 hover:bg-primary/5 hover:shadow-card'
                            }`}>
                              <Layers className="w-4 h-4 text-primary" />
                              <span className="font-medium text-sm">SaaS Platforms</span>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/smart-ai-tools" className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover-scale group/item ${
                              isNavDark 
                                ? 'text-white hover:text-white hover:bg-white/10 hover:shadow-glow' 
                                : 'text-slate-600 hover:text-slate-900 hover:bg-primary/5 hover:shadow-card'
                            }`}>
                              <Smartphone className="w-4 h-4 text-primary" />
                              <span className="font-medium text-sm">Smart AI Tools</span>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/ai-integration" className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover-scale group/item ${
                              isNavDark 
                                ? 'text-white hover:text-white hover:bg-white/10 hover:shadow-glow' 
                                : 'text-slate-600 hover:text-slate-900 hover:bg-primary/5 hover:shadow-card'
                            }`}>
                              <Cog className="w-4 h-4 text-primary" />
                              <span className="font-medium text-sm">AI Integration</span>
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
                ? 'text-white hover:text-white hover:shadow-glow' 
                : 'text-slate-900 hover:text-slate-900'
            }`}>
              <span>Results</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <a href="#contact" className={`transition-colors ${
              isNavDark 
                ? 'text-white hover:text-white hover:shadow-glow' 
                : 'text-slate-900 hover:text-slate-900'
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
