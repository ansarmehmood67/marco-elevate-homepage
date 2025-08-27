import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowLeft, ArrowRight, Users, PhoneCall, Headphones, Megaphone, PieChart, TrendingUp, Youtube, Bot, UserRound, Workflow, Globe, Cloud, Plug, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import Quiz from "@/components/quiz/Quiz";

const PremiumServicesCarouselOptimized = () => {
  const navigate = useNavigate();
  const { ref: headerRef, visibleItems: headerItems } = useStaggeredAnimation(3, 100);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(true); // Default to true for reliability
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const services = [
    { 
      title: "Outsourcing Salesforce", 
      subtitle: "Team vendita dedicato",
      pillar: "Sales On Demand",
      icon: Users,
      accent: "blue",
      path: "/outsourcing-salesforce",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290356/outsourced_sales_force_page_ydama6.mp4"
    },
    { 
      title: "Telemarketing & Teleselling", 
      subtitle: "Chiamate commerciali professionali",
      pillar: "Sales On Demand",
      icon: PhoneCall,
      accent: "blue",
      path: "/telemarketing-teleselling",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290362/telemarketing_page_1_vrqa0n.mp4"
    },
    { 
      title: "Contact Center Inbound", 
      subtitle: "Supporto clienti professionale",
      pillar: "Sales On Demand",
      icon: Headphones,
      accent: "blue",
      path: "/contact-center-inbound",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290377/inbound_contact_center_page_a8rtme.mp4"
    },
    { 
      title: "Outsourcing Marketing", 
      subtitle: "Marketing completo in outsourcing",
      pillar: "Consulting",
      icon: Megaphone,
      accent: "violet",
      path: "/outsourcing-marketing",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290298/outsourced_markteting_page_ndawq6.mp4"
    },
    { 
      title: "Audit Vendite", 
      subtitle: "Analisi processi commerciali",
      pillar: "Consulting",
      icon: PieChart,
      accent: "violet",
      path: "/audit-vendite",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290380/ai_tools_page_uqjdsu.mp4"
    },
    { 
      title: "Consulenza Marketing", 
      subtitle: "Strategia marketing personalizzata",
      pillar: "Consulting",
      icon: TrendingUp,
      accent: "violet",
      path: "/consulenza-marketing",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290298/outsourced_markteting_page_ndawq6.mp4"
    },
    { 
      title: "Monetizza YouTube", 
      subtitle: "Trasforma i video in profitti",
      pillar: "Consulting",
      icon: Youtube,
      accent: "violet",
      path: "/monetizza-youtube",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1755364792/20250816_2127_Marketing_Team_Strategy_Buzz_simple_compose_01k2sva0wpexqa68v9zccbyxq1_nxgujp.mp4"
    },
    { 
      title: "Instant Avatar", 
      subtitle: "Avatar AI per video personali",
      pillar: "AI & Automation",
      icon: UserRound,
      accent: "green",
      path: "/instant-avatar",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290666/instant_avatar_page_yxlyqy.mp4"
    },
    { 
      title: "Chatbot AI", 
      subtitle: "Assistenti virtuali intelligenti",
      pillar: "AI & Automation",
      icon: Bot,
      accent: "green",
      path: "/chatbot-ai",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290521/chatbot_ai_page_jgsw1x.mp4"
    },
    { 
      title: "Automazione AI", 
      subtitle: "Processi automatizzati con AI",
      pillar: "AI & Automation",
      icon: Workflow,
      accent: "green",
      path: "/automazione-ai",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290567/ai_automation_page_audup1.mp4"
    },
    { 
      title: "Web & App Development", 
      subtitle: "Sviluppo applicazioni su misura",
      pillar: "AI & Automation",
      icon: Globe,
      accent: "green",
      path: "/web-app-development",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290228/web_and_app_development_page_xnkfqj.mp4"
    },
    { 
      title: "Piattaforme SaaS", 
      subtitle: "Software as a Service personalizzato",
      pillar: "AI & Automation",
      icon: Cloud,
      accent: "green",
      path: "/saas-platforms",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290535/saas_tools_page_inne6r.mp4"
    },
    { 
      title: "Smart AI Tools", 
      subtitle: "Strumenti AI per il business",
      pillar: "AI & Automation",
      icon: Bot,
      accent: "green",
      path: "/smart-ai-tools",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290380/ai_tools_page_uqjdsu.mp4"
    },
    { 
      title: "AI Integration", 
      subtitle: "Integrazione AI nei processi",
      pillar: "AI & Automation",
      icon: Plug,
      accent: "green",
      path: "/ai-integration",
      video: "https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290499/ai_integrations_page_dwcnaj.mp4"
    }
  ];

  // Triple services for seamless infinite loop
  const extendedServices = [...services, ...services, ...services];

  // Intersection observer for viewport detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '100px 0px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Optimized CSS-based animation with better performance
  useEffect(() => {
    if (!trackRef.current || isPaused || !isInView) return;

    const track = trackRef.current;
    const cardWidth = 365; // width + gap
    const singleSetWidth = services.length * cardWidth;
    
    // Use CSS animation instead of requestAnimationFrame
    track.style.animation = 'none';
    track.offsetHeight; // Trigger reflow
    track.style.animation = `slideLeft 60s linear infinite`;
    
    // Define the keyframes if not already defined
    if (!document.querySelector('#carousel-keyframes')) {
      const style = document.createElement('style');
      style.id = 'carousel-keyframes';
      style.textContent = `
        @keyframes slideLeft {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-${singleSetWidth}px, 0, 0); }
        }
      `;
      document.head.appendChild(style);
    }

    return () => {
      if (track) {
        track.style.animation = 'none';
      }
    };
  }, [isPaused, isInView, services.length]);

  const handlePrevious = useCallback(() => {
    if (!trackRef.current) return;
    
    const track = trackRef.current;
    track.style.animation = 'none';
    
    const currentTransform = getComputedStyle(track).transform;
    const matrix = new DOMMatrix(currentTransform);
    const currentX = matrix.m41;
    const newX = currentX + 365;
    
    track.style.transform = `translate3d(${newX}px, 0, 0)`;
    track.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    
    setTimeout(() => {
      track.style.transition = '';
      if (isInView && !isPaused) {
        track.style.animation = `slideLeft 60s linear infinite`;
      }
    }, 300);
  }, [isInView, isPaused]);

  const handleNext = useCallback(() => {
    if (!trackRef.current) return;
    
    const track = trackRef.current;
    track.style.animation = 'none';
    
    const currentTransform = getComputedStyle(track).transform;
    const matrix = new DOMMatrix(currentTransform);
    const currentX = matrix.m41;
    const newX = currentX - 365;
    
    track.style.transform = `translate3d(${newX}px, 0, 0)`;
    track.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    
    setTimeout(() => {
      track.style.transition = '';
      if (isInView && !isPaused) {
        track.style.animation = `slideLeft 60s linear infinite`;
      }
    }, 300);
  }, [isInView, isPaused]);

  const handleCardClick = useCallback((path: string) => {
    navigate(path);
  }, [navigate]);

  const pillarColors = {
    "Sales On Demand": "text-blue-400",
    "Consulting": "text-violet-400", 
    "AI & Automation": "text-green-400"
  };

  return (
    <section 
      ref={containerRef}
      className="py-20 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M0 0h80v80H0V0zm10 10h60v60H10V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary/10 via-primary/2 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-primary-glow/8 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div ref={headerRef} className="text-center max-w-5xl mx-auto mb-24">
          <div className={`inline-block mb-8 transition-all duration-700 ease-out ${
            headerItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="text-sm font-bold tracking-[0.3em] uppercase px-8 py-4 rounded-full bg-gradient-to-r from-primary/20 to-primary-glow/20 text-primary border border-primary/30 backdrop-blur-sm">
              Premium Solutions
            </span>
          </div>
          
          <h2 className={`text-5xl lg:text-7xl font-black leading-[0.8] tracking-tight text-white mb-10 transition-all duration-700 ease-out ${
            headerItems[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block">
              Soluzioni per la Tua{" "}
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Crescita
            </span>
          </h2>
          
          <p className={`text-xl lg:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto font-light transition-all duration-700 ease-out ${
            headerItems[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Trasforma il tuo business con soluzioni innovative e risultati misurabili.<br />
            <span className="text-primary font-medium">Ogni progetto è su misura per te.</span>
          </p>
        </div>

        {/* Optimized Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>

          {/* Edge Fade Gradients - Simplified */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          {/* Carousel Container */}
          <div 
            className="overflow-hidden pb-8 pt-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div
              ref={trackRef}
              className="flex gap-5"
              style={{ 
                willChange: 'transform',
                transform: 'translate3d(0, 0, 0)' // Force GPU layer
              }}
            >
              {extendedServices.map((service, index) => (
                <ServiceCard
                  key={`${service.title}-${index}`}
                  service={service}
                  index={index}
                  isHovered={hoveredCard === index}
                  isInView={isInView}
                  pillarColors={pillarColors}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => handleCardClick(service.path)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Quiz CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-300 mb-6">
              Non sai da dove iniziare?
              <span className="text-white font-medium"> Lascia che ti guidiamo.</span>
            </p>
            
            <Button 
              onClick={() => setIsQuizOpen(true)}
              className="group bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-white px-10 py-5 text-xl font-semibold rounded-full shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105 border border-primary/20"
            >
              <Zap className="w-6 h-6 mr-3 group-hover:animate-pulse" />
              Fai il Quiz di 45 Secondi
            </Button>
            
            <p className="text-sm text-gray-400 mt-4">
              ⚡ Risultati immediati • 🎯 Soluzione personalizzata • 💡 Consulenza gratuita
            </p>
          </div>
        </div>

        {/* Quiz Modal */}
        {isQuizOpen && (
          <Quiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
        )}
      </div>
    </section>
  );
};

// Optimized Service Card Component
const ServiceCard = ({ 
  service, 
  index, 
  isHovered, 
  isInView,
  pillarColors, 
  onMouseEnter, 
  onMouseLeave, 
  onClick 
}: {
  service: any;
  index: number;
  isHovered: boolean;
  isInView: boolean;
  pillarColors: any;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play video on hover
  useEffect(() => {
    if (!videoRef.current) return;

    if (isHovered) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHovered]);

  return (
    <div
      className="flex-shrink-0 w-[320px] lg:w-[360px] h-[520px] lg:h-[560px] relative group cursor-pointer transition-all duration-300 hover:-translate-y-1"
      style={{ 
        scrollSnapAlign: 'start'
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      aria-label={`Navigate to ${service.title} service page`}
    >
      {/* Video Background */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={service.video}
          muted
          loop
          playsInline
          preload="none"
          style={{ 
            transform: 'translate3d(0, 0, 0)' // Force GPU layer
          }}
        />
        
        {/* Simplified gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      </div>

      {/* Card Border */}
      <div className="absolute inset-0 rounded-3xl border border-white/10 shadow-2xl transition-all duration-300 group-hover:shadow-primary/20"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 text-left">
        <div className={`text-sm font-semibold uppercase tracking-wider mb-3 ${pillarColors[service.pillar as keyof typeof pillarColors]}`}>
          {service.pillar}
        </div>
        
        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
          {service.title}
        </h3>
        
        <p className="text-lg text-gray-300 font-medium leading-relaxed">
          {service.subtitle}
        </p>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
    </div>
  );
};

export default PremiumServicesCarouselOptimized;