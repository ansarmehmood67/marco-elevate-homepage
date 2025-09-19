import { useState, useEffect, useRef } from "react";
import { TrendingUp, Users, Target, Zap } from "lucide-react";

interface SuccessMetric {
  label: string;
  value: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

interface RecentSuccess {
  company: string;
  achievement: string;
  value: string;
  timeAgo: string;
}

const LiveSuccessTracker = () => {
  const [currentSuccessIndex, setCurrentSuccessIndex] = useState(0);
  const [animatedValues, setAnimatedValues] = useState([false, false, false, false]);
  const sectionRef = useRef<HTMLElement>(null);

  const metrics: SuccessMetric[] = [
    {
      label: "Fatturato generato",
      description: "(dal 2021)",
      value: "€2,8M+",
      icon: TrendingUp,
      color: "text-emerald-300"
    },
    {
      label: "Clienti attivi",
      description: "(rolling 30 gg)",
      value: "247",
      icon: Users,
      color: "text-sky-300"
    },
    {
      label: "Tasso di conversione",
      description: "(lead→opportunità, YTD)",
      value: "34,2%",
      icon: Target,
      color: "text-emerald-300"
    },
    {
      label: "Progetti completati",
      description: "(lifetime)",
      value: "1.847",
      icon: Zap,
      color: "text-sky-300"
    }
  ];

  const recentSuccesses: RecentSuccess[] = [
    {
      company: "TechCorp Ltd",
      achievement: "Aumento conversioni vendite",
      value: "+127%",
      timeAgo: "2 ore fa"
    },
    {
      company: "InnovateCo",
      achievement: "Incremento fatturato mensile",
      value: "+€45K",
      timeAgo: "5 ore fa"
    },
    {
      company: "GrowthStart",
      achievement: "Miglioramento lead generation",
      value: "+89%",
      timeAgo: "8 ore fa"
    },
    {
      company: "ScaleUp Inc",
      achievement: "Successo espansione mercato",
      value: "+€78K",
      timeAgo: "12 ore fa"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSuccessIndex((prev) => (prev + 1) % recentSuccesses.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [recentSuccesses.length]);

  // Intersection Observer for count-up animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedValues.some(val => val)) {
            setAnimatedValues([true, true, true, true]);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animatedValues]);

  const handleRecentSuccessClick = () => {
    // TODO: Link to case studies or open drawer
    // Case studies functionality to be implemented
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-gradient-to-r from-background via-background/95 to-background border-y border-border/50 py-8 sm:py-10"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Live Metrics */}
          <div className="flex-1 w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white uppercase tracking-wide">
                Metriche di successo in tempo reale
              </span>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <IconComponent className={`w-5 h-5 ${metric.color} flex-shrink-0 mt-1`} />
                    <div className="min-w-0">
                      <div 
                        className={`text-lg lg:text-xl font-bold ${metric.color} whitespace-nowrap transition-all duration-700 ${
                          animatedValues[index] ? 'transform translate-y-0 opacity-100' : 'transform translate-y-2 opacity-0'
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        {metric.value}
                      </div>
                      <div className="text-sm text-white font-medium">{metric.label}</div>
                      <div className="text-xs text-slate-300">{metric.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Success Feed */}
          <div className="flex-1 lg:max-w-md w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white uppercase tracking-wide">
                Successi clienti recenti
              </span>
            </div>
            
            <div className="relative h-20 overflow-hidden">
              {recentSuccesses.map((success, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ${
                    index === currentSuccessIndex
                      ? "opacity-100 transform translate-y-0"
                      : "opacity-0 transform translate-y-4"
                  }`}
                >
                  <button
                    onClick={handleRecentSuccessClick}
                    className="w-full bg-card/50 backdrop-blur-sm border border-border/30 rounded-lg p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:ring-1 hover:ring-white/20 focus-visible:ring-2 focus-visible:ring-sky-500 focus:outline-none"
                  >
                    <div className="flex justify-between items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-white">{success.company}</div>
                        <div className="text-xs text-slate-300">{success.achievement}</div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-sm font-bold text-emerald-300 whitespace-nowrap">{success.value}</div>
                        <div className="text-xs text-slate-300">{success.timeAgo}</div>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveSuccessTracker;