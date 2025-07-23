import { useState, useEffect } from "react";
import { TrendingUp, Users, Clock, Target, MessageSquare, Code, Play, DollarSign } from "lucide-react";

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  description: string;
  animated?: boolean;
}

const MetricCard = ({ icon, title, value, change, trend, description, animated = false }: MetricCardProps) => {
  const [displayValue, setDisplayValue] = useState(animated ? "0" : value);

  useEffect(() => {
    if (animated) {
      const numericValue = parseInt(value.replace(/[^\d]/g, ""));
      let current = 0;
      const increment = numericValue / 30;
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current).toString() + value.replace(/[\d]/g, "").slice(-1));
        }
      }, 50);
      return () => clearInterval(timer);
    }
  }, [value, animated]);

  const trendColor = trend === "up" ? "text-green-500" : trend === "down" ? "text-red-500" : "text-slate-500";

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-gradient-to-br from-[#2E8BC0]/10 to-[#87CEEB]/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className={`flex items-center gap-1 text-sm ${trendColor}`}>
          <TrendingUp className={`w-4 h-4 ${trend === "down" ? "rotate-180" : ""}`} />
          {change}
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-slate-900">{displayValue}</h3>
        <p className="font-medium text-slate-700">{title}</p>
        <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

interface ServiceMetricsProps {
  serviceType: "chatbot" | "development" | "sales" | "marketing" | "youtube" | "integration" | "automation" | "support" | "saas" | "tools";
}

const ServiceMetrics = ({ serviceType }: ServiceMetricsProps) => {
  const getMetricsForService = () => {
    switch (serviceType) {
      case "chatbot":
        return [
          {
            icon: <MessageSquare className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Conversazioni Gestite",
            value: "15,000+",
            change: "+45%",
            trend: "up" as const,
            description: "Interazioni clienti automatizzate al mese",
            animated: true
          },
          {
            icon: <Clock className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Tempo Risposta",
            value: "<2sec",
            change: "-67%",
            trend: "up" as const,
            description: "Risposta istantanea 24/7"
          },
          {
            icon: <Target className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Lead Qualificati",
            value: "3,200+",
            change: "+89%",
            trend: "up" as const,
            description: "Lead di qualità generati automaticamente",
            animated: true
          },
          {
            icon: <Users className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Soddisfazione Cliente",
            value: "94%",
            change: "+12%",
            trend: "up" as const,
            description: "Rating medio delle interazioni"
          }
        ];
      
      case "development":
        return [
          {
            icon: <Code className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Progetti Completati",
            value: "150+",
            change: "+25%",
            trend: "up" as const,
            description: "Siti e app sviluppati con successo",
            animated: true
          },
          {
            icon: <TrendingUp className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Performance Media",
            value: "98/100",
            change: "+15%",
            trend: "up" as const,
            description: "Score PageSpeed e Core Web Vitals"
          },
          {
            icon: <Clock className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Tempo di Caricamento",
            value: "1.2s",
            change: "-45%",
            trend: "up" as const,
            description: "Velocità media dei nostri siti"
          },
          {
            icon: <Target className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Progetti in Tempo",
            value: "97%",
            change: "+8%",
            trend: "up" as const,
            description: "Consegne rispettando le deadline"
          }
        ];

      case "youtube":
        return [
          {
            icon: <Play className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Visualizzazioni Generate",
            value: "2.5M+",
            change: "+340%",
            trend: "up" as const,
            description: "Views totali sui canali clienti",
            animated: true
          },
          {
            icon: <DollarSign className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Revenue Media Mensile",
            value: "€12,500",
            change: "+180%",
            trend: "up" as const,
            description: "Entrate medie per canale monetizzato"
          },
          {
            icon: <Users className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Iscritti Acquisiti",
            value: "125K+",
            change: "+220%",
            trend: "up" as const,
            description: "Nuovi subscriber sui canali gestiti",
            animated: true
          },
          {
            icon: <Target className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Tasso di Coinvolgimento",
            value: "8.5%",
            change: "+95%",
            trend: "up" as const,
            description: "Engagement rate medio"
          }
        ];

      case "sales":
        return [
          {
            icon: <TrendingUp className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Lead Generati",
            value: "8,500+",
            change: "+65%",
            trend: "up" as const,
            description: "Lead qualificati al mese",
            animated: true
          },
          {
            icon: <DollarSign className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Fatturato Generato",
            value: "€450K",
            change: "+120%",
            trend: "up" as const,
            description: "Revenue mensile dai progetti attivi"
          },
          {
            icon: <Target className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Tasso di Conversione",
            value: "12.8%",
            change: "+35%",
            trend: "up" as const,
            description: "Da lead a cliente pagante"
          },
          {
            icon: <Users className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Clienti Acquisiti",
            value: "1,200+",
            change: "+80%",
            trend: "up" as const,
            description: "Nuovi clienti acquisiti",
            animated: true
          }
        ];

      case "marketing":
        return [
          {
            icon: <Target className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Campagne Attive",
            value: "180+",
            change: "+55%",
            trend: "up" as const,
            description: "Campagne marketing gestite",
            animated: true
          },
          {
            icon: <TrendingUp className="w-6 h-6 text-[#2E8BC0]" />,
            title: "ROAS Medio",
            value: "4.2x",
            change: "+85%",
            trend: "up" as const,
            description: "Return on advertising spend"
          },
          {
            icon: <Users className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Reach Organico",
            value: "2.8M",
            change: "+150%",
            trend: "up" as const,
            description: "Persone raggiunte mensilmente",
            animated: true
          },
          {
            icon: <MessageSquare className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Engagement Rate",
            value: "6.7%",
            change: "+45%",
            trend: "up" as const,
            description: "Coinvolgimento medio sui contenuti"
          }
        ];

      case "integration":
        return [
          {
            icon: <Target className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Sistemi Integrati",
            value: "500+",
            change: "+120%",
            trend: "up" as const,
            description: "API e automazioni implementate",
            animated: true
          },
          {
            icon: <Clock className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Tempo di Setup",
            value: "48h",
            change: "-60%",
            trend: "up" as const,
            description: "Deploy medio delle integrazioni"
          },
          {
            icon: <TrendingUp className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Efficienza Operativa",
            value: "+65%",
            change: "+65%",
            trend: "up" as const,
            description: "Miglioramento processi automatizzati"
          },
          {
            icon: <DollarSign className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Risparmio Mensile",
            value: "€8,500",
            change: "+140%",
            trend: "up" as const,
            description: "Riduzione costi operativi medio"
          }
        ];

      case "automation":
        return [
          {
            icon: <Target className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Processi Automatizzati",
            value: "1,200+",
            change: "+85%",
            trend: "up" as const,
            description: "Workflow AI implementati",
            animated: true
          },
          {
            icon: <Clock className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Ore Risparmiate",
            value: "320h/mese",
            change: "+200%",
            trend: "up" as const,
            description: "Tempo liberato per attività strategiche"
          },
          {
            icon: <TrendingUp className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Accuratezza Processi",
            value: "99.2%",
            change: "+15%",
            trend: "up" as const,
            description: "Riduzione errori umani"
          },
          {
            icon: <DollarSign className="w-6 h-6 text-[#2E8BC0]" />,
            title: "ROI Automazioni",
            value: "340%",
            change: "+180%",
            trend: "up" as const,
            description: "Ritorno investimento medio"
          }
        ];

      case "support":
        return [
          {
            icon: <MessageSquare className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Chiamate Gestite",
            value: "25,000+",
            change: "+75%",
            trend: "up" as const,
            description: "Contatti mensili gestiti",
            animated: true
          },
          {
            icon: <Clock className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Tempo Risposta",
            value: "15sec",
            change: "-45%",
            trend: "up" as const,
            description: "Attesa media prima del supporto"
          },
          {
            icon: <Users className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Soddisfazione Cliente",
            value: "96%",
            change: "+18%",
            trend: "up" as const,
            description: "Rating di gradimento del servizio"
          },
          {
            icon: <Target className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Risoluzione al Primo Contatto",
            value: "89%",
            change: "+25%",
            trend: "up" as const,
            description: "Problemi risolti immediatamente"
          }
        ];

      case "saas":
        return [
          {
            icon: <Code className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Piattaforme SaaS",
            value: "85+",
            change: "+40%",
            trend: "up" as const,
            description: "Prodotti SaaS sviluppati e lanciati",
            animated: true
          },
          {
            icon: <Users className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Utenti Attivi Totali",
            value: "150K+",
            change: "+280%",
            trend: "up" as const,
            description: "Utenti mensili sulle nostre piattaforme"
          },
          {
            icon: <DollarSign className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Revenue Ricorrente",
            value: "€45K/mese",
            change: "+195%",
            trend: "up" as const,
            description: "MRR medio generato dai SaaS clienti"
          },
          {
            icon: <TrendingUp className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Uptime Medio",
            value: "99.9%",
            change: "+2%",
            trend: "up" as const,
            description: "Affidabilità delle piattaforme"
          }
        ];

      case "tools":
        return [
          {
            icon: <Target className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Tool AI Sviluppati",
            value: "200+",
            change: "+90%",
            trend: "up" as const,
            description: "Soluzioni custom create",
            animated: true
          },
          {
            icon: <Clock className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Tempo Sviluppo",
            value: "2-4 sett",
            change: "-35%",
            trend: "up" as const,
            description: "Dalla richiesta al deploy"
          },
          {
            icon: <TrendingUp className="w-6 h-6 text-[#2E8BC0]" />,
            title: "Produttività Team",
            value: "+185%",
            change: "+185%",
            trend: "up" as const,
            description: "Incremento efficienza media"
          },
          {
            icon: <DollarSign className="w-6 h-6 text-[#2E8BC0]" />,
            title: "ROI Tool Interni",
            value: "420%",
            change: "+220%",
            trend: "up" as const,
            description: "Ritorno investimento strumenti custom"
          }
        ];

      default:
        return [];
    }
  };

  const metrics = getMetricsForService();

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2E8BC0]/10 rounded-full border border-[#2E8BC0]/20 mb-6">
            <TrendingUp className="w-4 h-4 text-[#2E8BC0]" />
            <span className="text-[#2E8BC0] font-medium text-sm">Risultati Misurabili</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Performance in{" "}
            <span className="bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] bg-clip-text text-transparent">
              Tempo Reale
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Dati concreti dai nostri progetti attivi che dimostrano l'efficacia delle nostre soluzioni
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceMetrics;