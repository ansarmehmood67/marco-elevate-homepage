import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Users, PhoneCall, Headphones, Megaphone, PieChart, TrendingUp, Youtube, Bot, UserRound, Workflow, Globe, Cloud, Plug } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const PremiumServicesCarousel = () => {
  const navigate = useNavigate();
  const { ref: headerRef, visibleItems: headerItems } = useStaggeredAnimation(3, 120);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    { 
      title: "Outsourcing Salesforce", 
      subtitle: "Team vendita dedicato",
      pillar: "Sales On Demand",
      icon: Users,
      accent: "blue",
      path: "/outsourcing-salesforce",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290356/outsourced_sales_force_page_ydama6.mp4",
      poster: "/lovable-uploads/55ba51af-1df7-42c2-9eb0-7808ffbd9c64.png"
    },
    { 
      title: "Telemarketing & Teleselling", 
      subtitle: "Chiamate commerciali professionali",
      pillar: "Sales On Demand",
      icon: PhoneCall,
      accent: "blue",
      path: "/telemarketing-teleselling",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290362/telemarketing_page_1_vrqa0n.mp4",
      poster: "/lovable-uploads/57e4bdda-6fe0-4184-b948-1e51ef3229c1.png"
    },
    { 
      title: "Contact Center Inbound", 
      subtitle: "Supporto clienti professionale",
      pillar: "Sales On Demand",
      icon: Headphones,
      accent: "blue",
      path: "/contact-center-inbound",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290377/inbound_contact_center_page_a8rtme.mp4",
      poster: "/lovable-uploads/5a8470d1-8aa8-4ee0-a0c5-efbe23f61c0b.png"
    },
    { 
      title: "Outsourcing Marketing", 
      subtitle: "Marketing completo in outsourcing",
      pillar: "Consulting",
      icon: Megaphone,
      accent: "violet",
      path: "/outsourcing-marketing",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290298/outsourced_markteting_page_ndawq6.mp4",
      poster: "/lovable-uploads/6e880c32-395f-4bee-afdc-3c3ddfa8eac4.png"
    },
    { 
      title: "Audit Vendite", 
      subtitle: "Analisi processi commerciali",
      pillar: "Consulting",
      icon: PieChart,
      accent: "violet",
      path: "/audit-vendite",
      poster: "/lovable-uploads/6fc89ca3-7ee8-4e7f-87bb-2aaa90c96cf4.png"
    },
    { 
      title: "Consulenza Marketing", 
      subtitle: "Strategia marketing personalizzata",
      pillar: "Consulting",
      icon: TrendingUp,
      accent: "violet",
      path: "/consulenza-marketing",
      poster: "/lovable-uploads/72a42abc-cce3-430b-ab34-02973dafaf92.png"
    },
    { 
      title: "Monetizza YouTube", 
      subtitle: "Trasforma i video in profitti",
      pillar: "Consulting",
      icon: Youtube,
      accent: "violet",
      path: "/monetizza-youtube",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1755364792/20250816_2127_Marketing_Team_Strategy_Buzz_simple_compose_01k2sva0wpexqa68v9zccbyxq1_nxgujp.mp4",
      poster: "/lovable-uploads/7a5a9505-672f-4d4e-b7c5-de56bbe2ebf5.png"
    },
    { 
      title: "Instant Avatar", 
      subtitle: "Avatar AI per video personali",
      pillar: "AI & Automation",
      icon: UserRound,
      accent: "green",
      path: "/instant-avatar",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290666/instant_avatar_page_yxlyqy.mp4",
      poster: "/lovable-uploads/81b2f01b-2e68-4d8c-9de0-8db4e74eb18f.png"
    },
    { 
      title: "Chatbot AI", 
      subtitle: "Assistenti virtuali intelligenti",
      pillar: "AI & Automation",
      icon: Bot,
      accent: "green",
      path: "/chatbot-ai",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290521/chatbot_ai_page_jgsw1x.mp4",
      poster: "/lovable-uploads/871bbc8b-f67d-4537-a7a2-574d06a9e919.png"
    },
    { 
      title: "Automazione AI", 
      subtitle: "Processi automatizzati con AI",
      pillar: "AI & Automation",
      icon: Workflow,
      accent: "green",
      path: "/automazione-ai",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290567/ai_automation_page_audup1.mp4",
      poster: "/lovable-uploads/911930fd-818f-4633-a9f4-f2abce87bc72.png"
    },
    { 
      title: "Web & App Development", 
      subtitle: "Sviluppo applicazioni su misura",
      pillar: "AI & Automation",
      icon: Globe,
      accent: "green",
      path: "/web-app-development",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290228/web_and_app_development_page_xnkfqj.mp4",
      poster: "/lovable-uploads/981ed56a-ba22-44a8-91a6-e6a1961bc0ae.png"
    },
    { 
      title: "Piattaforme SaaS", 
      subtitle: "Software as a Service personalizzato",
      pillar: "AI & Automation",
      icon: Cloud,
      accent: "green",
      path: "/saas-platforms",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290535/saas_tools_page_inne6r.mp4",
      poster: "/lovable-uploads/38b36456-8e63-4824-a0c6-3af4d21ae30b.png"
    },
    { 
      title: "Smart AI Tools", 
      subtitle: "Strumenti AI per il business",
      pillar: "AI & Automation",
      icon: Bot,
      accent: "green",
      path: "/smart-ai-tools",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290380/ai_tools_page_uqjdsu.mp4",
      poster: "/lovable-uploads/4942e788-ba8d-426d-bd98-bf362a153c59.png"
    },
    { 
      title: "AI Integration", 
      subtitle: "Integrazione AI nei processi",
      pillar: "AI & Automation",
      icon: Plug,
      accent: "green",
      path: "/ai-integration",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290499/ai_integrations_page_dwcnaj.mp4",
      poster: "/lovable-uploads/25280549-6553-430d-9dff-5462347e4238.png"
    }
  ];

  // Duplicate services for infinite loop
  const extendedServices = [...services, ...services, ...services];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  // Scroll to current service
  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = 360; // Card width + gap
      const scrollPosition = currentIndex * cardWidth;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  const pillarColors = {
    "Sales On Demand": "text-blue-400",
    "Consulting": "text-violet-400", 
    "AI & Automation": "text-green-400"
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M0 0h80v80H0V0zm10 10h60v60H10V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Radial Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-primary-glow/15 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-primary-glow/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-br from-primary-glow/20 to-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-white/5 to-primary/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-1/3 right-1/5 w-2 h-32 bg-gradient-to-b from-primary/30 to-transparent transform rotate-45 animate-pulse delay-500"></div>
      <div className="absolute bottom-1/4 left-1/6 w-1 h-24 bg-gradient-to-t from-primary-glow/40 to-transparent animate-pulse delay-1500"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header Section */}
        <div ref={headerRef} className="text-center max-w-5xl mx-auto mb-24">
          <div className={`inline-block mb-8 group transition-all duration-700 ease-out ${
            headerItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="text-sm font-bold tracking-[0.3em] uppercase px-8 py-4 rounded-full bg-gradient-to-r from-primary/20 to-primary-glow/20 text-primary border border-primary/30 backdrop-blur-sm shadow-lg hover:shadow-primary/20 transition-all duration-300 group-hover:scale-105">
              Premium Solutions
            </span>
          </div>
          
          <h2 className={`text-5xl lg:text-7xl font-black leading-[0.8] tracking-tight text-white mb-10 group transition-all duration-700 ease-out ${
            headerItems[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block transform transition-transform duration-500 group-hover:scale-105">
              Soluzioni per la Tua{" "}
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent inline-block transform transition-transform duration-500 hover:scale-110 ">
              Crescita
            </span>
          </h2>
          
          <p className={`text-xl lg:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto font-light transition-all duration-700 ease-out ${
            headerItems[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Trasforma il tuo business con soluzioni innovative e risultati misurabili.<br />
            <span className="text-primary font-medium">Ogni progetto è su misura per te.</span>
          </p>
          
          {/* Enhanced visual separator */}
          <div className="mt-12 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Premium Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>

          {/* Edge Fade Gradients */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black via-black/50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none"></div>

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="flex gap-5 overflow-x-hidden pb-8 pt-4"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            style={{
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth'
            }}
          >
            {extendedServices.map((service, index) => {
              const actualIndex = index % services.length;
              const isHovered = hoveredCard === index;
              
              return (
                <div
                  key={`${service.title}-${index}`}
                  className="flex-shrink-0 w-[320px] lg:w-[360px] h-[520px] lg:h-[560px] relative group cursor-pointer transition-all duration-300 hover:-translate-y-1"
                  style={{ scrollSnapAlign: 'start' }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => handleCardClick(service.path)}
                  aria-label={`Navigate to ${service.title} service page`}
                >
                  {/* Video/Image Background */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    {service.video ? (
                      <video
                        className="w-full h-full object-cover"
                        poster={service.poster}
                        muted
                        loop
                        playsInline
                        preload="none"
                        ref={(el) => {
                          if (el && isHovered) {
                            el.src = service.video!;
                            el.play().catch(() => {});
                          } else if (el && !isHovered) {
                            el.pause();
                            el.currentTime = 0;
                          }
                        }}
                      />
                    ) : (
                      <img
                        src={service.poster}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    
                    {/* Bottom gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  </div>

                  {/* Card Border */}
                  <div className="absolute inset-0 rounded-3xl border border-white/10 shadow-2xl transition-all duration-300 group-hover:shadow-primary/20"></div>

                  {/* Content - Tony Robbins Style (Bottom-left) */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-left">
                    {/* Pillar Label */}
                    <div className={`text-sm font-semibold uppercase tracking-wider mb-3 ${pillarColors[service.pillar as keyof typeof pillarColors]}`}>
                      {service.pillar}
                    </div>
                    
                    {/* Service Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
                      {service.title}
                    </h3>
                    
                    {/* Service Subtitle/Description */}
                    <p className="text-lg text-gray-300 font-medium leading-relaxed">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Bar */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary via-primary-glow to-primary hover:from-primary-glow hover:via-primary hover:to-primary-glow text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              onClick={() => navigate('/contact')}
            >
              Book a Consultation
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              onClick={() => navigate('/services')}
            >
              View All Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumServicesCarousel;