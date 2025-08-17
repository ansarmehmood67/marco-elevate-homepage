import { useState, useEffect } from "react";
import { TrendingUp, Users, Target, Zap } from "lucide-react";

interface SuccessMetric {
  label: string;
  value: string;
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

  const metrics: SuccessMetric[] = [
    {
      label: "Revenue Generated",
      value: "€2.8M+",
      icon: TrendingUp,
      color: "text-green-400"
    },
    {
      label: "Active Clients",
      value: "247",
      icon: Users,
      color: "text-blue-400"
    },
    {
      label: "Conversion Rate",
      value: "34.2%",
      icon: Target,
      color: "text-purple-400"
    },
    {
      label: "Projects Completed",
      value: "1,847",
      icon: Zap,
      color: "text-yellow-400"
    }
  ];

  const recentSuccesses: RecentSuccess[] = [
    {
      company: "TechCorp Ltd",
      achievement: "Increased sales conversion",
      value: "+127%",
      timeAgo: "2 hours ago"
    },
    {
      company: "InnovateCo",
      achievement: "Monthly revenue boost",
      value: "+€45K",
      timeAgo: "5 hours ago"
    },
    {
      company: "GrowthStart",
      achievement: "Lead generation improvement",
      value: "+89%",
      timeAgo: "8 hours ago"
    },
    {
      company: "ScaleUp Inc",
      achievement: "Market expansion success",
      value: "+€78K",
      timeAgo: "12 hours ago"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSuccessIndex((prev) => (prev + 1) % recentSuccesses.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [recentSuccesses.length]);

  return (
    <section className="w-full bg-gradient-to-r from-background via-background/95 to-background border-y border-border/50 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Live Metrics */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Live Success Metrics
              </span>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {metrics.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <div key={index} className="flex items-center gap-2">
                    <IconComponent className={`w-4 h-4 ${metric.color}`} />
                    <div>
                      <div className="text-lg font-bold text-foreground">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Success Feed */}
          <div className="flex-1 lg:max-w-md">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Recent Client Success
              </span>
            </div>
            
            <div className="relative h-16 overflow-hidden">
              {recentSuccesses.map((success, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ${
                    index === currentSuccessIndex
                      ? "opacity-100 transform translate-y-0"
                      : "opacity-0 transform translate-y-4"
                  }`}
                >
                  <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-lg p-3">
                    <div className="flex justify-between items-start gap-2">
                      <div className="flex-1">
                        <div className="font-semibold text-sm text-foreground">{success.company}</div>
                        <div className="text-xs text-muted-foreground">{success.achievement}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-green-400">{success.value}</div>
                        <div className="text-xs text-muted-foreground">{success.timeAgo}</div>
                      </div>
                    </div>
                  </div>
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