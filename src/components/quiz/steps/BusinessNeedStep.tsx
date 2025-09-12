import { Button } from "@/components/ui/button";
import { QuizStepProps, BusinessNeed } from "@/types/quiz";
import { 
  Target, 
  Users, 
  Headphones, 
  Megaphone, 
  BarChart3, 
  Lightbulb,
  Youtube,
  Bot,
  Zap,
  Code,
  Cloud,
  Wrench,
  Puzzle,
  HelpCircle
} from "lucide-react";

const BusinessNeedStep = ({ onNext, currentAnswer }: QuizStepProps) => {
  const businessNeeds: { value: BusinessNeed; label: string; icon: any; description: string }[] = [
    {
      value: "Generate more qualified leads",
      label: "Generare Lead Qualificati",
      icon: Target,
      description: "Aumenta la tua pipeline con prospect di alta qualità"
    },
    {
      value: "Close more sales without hiring a team",
      label: "Chiudere Più Vendite Senza Assumere",
      icon: Users,
      description: "Ottieni un team di vendita dedicato senza costi di reclutamento"
    },
    {
      value: "Improve customer support or inbound call handling",
      label: "Migliorare l'Assistenza Clienti",
      icon: Headphones,
      description: "Servizio clienti professionale 24/7 e supporto"
    },
    {
      value: "Build stronger marketing presence",
      label: "Costruire Presenza Marketing Forte",
      icon: Megaphone,
      description: "Team di marketing completo per potenziare il tuo brand"
    },
    {
      value: "Analyze and improve sales performance",
      label: "Analizzare Performance Vendite",
      icon: BarChart3,
      description: "Analisi approfondita dei dati di vendita e ottimizzazione"
    },
    {
      value: "Develop a winning marketing strategy",
      label: "Sviluppare Strategia Marketing",
      icon: Lightbulb,
      description: "Consulenza strategica per il successo nel marketing"
    },
    {
      value: "Monetize YouTube content",
      label: "Monetizzare Contenuti YouTube",
      icon: Youtube,
      description: "Massimizza i ricavi dal tuo canale YouTube"
    },
    {
      value: "Automate conversations or onboarding",
      label: "Automatizzare Conversazioni",
      icon: Bot,
      description: "Automazione chat e onboarding basata su AI"
    },
    {
      value: "Automate business processes using AI",
      label: "Automatizzare Processi Aziendali",
      icon: Zap,
      description: "Semplifica le operazioni con automazione intelligente"
    },
    {
      value: "Build a website or mobile app",
      label: "Creare Sito Web o App Mobile",
      icon: Code,
      description: "Sviluppo personalizzato per piattaforme web e mobile"
    },
    {
      value: "Launch a SaaS product or platform",
      label: "Lanciare Prodotto SaaS",
      icon: Cloud,
      description: "Supporto completo per sviluppo e lancio SaaS"
    },
    {
      value: "Build smart internal tools",
      label: "Creare Strumenti Interni Smart",
      icon: Wrench,
      description: "Strumenti personalizzati basati su AI per la tua azienda"
    },
    {
      value: "Integrate AI into existing systems",
      label: "Integrare AI nei Sistemi",
      icon: Puzzle,
      description: "Potenzia i sistemi attuali con capacità AI"
    },
    {
      value: "Not sure – I need expert guidance",
      label: "Non Sono Sicuro – Serve Guida Esperta",
      icon: HelpCircle,
      description: "Lascia che i nostri esperti analizzino le tue esigenze e raccomandino soluzioni"
    }
  ];

  return (
    <div className="space-y-10">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center space-x-3 bg-gradient-primary/10 px-6 py-3 rounded-full border border-primary/20">
          <div className="w-3 h-3 bg-primary-glow rounded-full animate-pulse shadow-glow-primary" />
          <span className="text-sm font-semibold text-primary-glow uppercase tracking-wide">
            Personalizzazione Intelligente
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
          <span className="gradient-text">Qual è la tua più grande</span>
          <br />
          <span className="text-foreground">esigenza aziendale?</span>
        </h2>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Scegli l'area dove hai più bisogno di supporto. La nostra AI analizzerà la tua risposta 
          per raccomandare la <span className="text-primary-glow font-semibold">soluzione perfetta</span> per la tua azienda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {businessNeeds.map((need, index) => {
          const IconComponent = need.icon;
          const isSelected = currentAnswer === need.value;
          
          return (
            <Button
              key={need.value}
              variant="outline"
              className={`h-auto p-6 flex flex-col items-start space-y-4 text-left transition-all duration-500 group relative overflow-hidden transform hover:scale-105 ${
                isSelected 
                  ? 'bg-gradient-primary/10 border-primary shadow-glow-primary text-foreground' 
                  : 'bg-white/5 hover:bg-white/10 border-white/20 hover:border-primary/40 shadow-card hover:shadow-glow'
              }`}
              onClick={() => onNext(need.value)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 ${
                isSelected 
                  ? 'from-primary/10 via-transparent to-secondary/10 opacity-100' 
                  : 'from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100'
              }`} />
              
              <div className="relative z-10 w-full flex flex-col space-y-4">
                <div className={`p-4 rounded-xl transition-all duration-300 shadow-inner ${
                  isSelected 
                    ? 'bg-gradient-primary/20 shadow-glow-primary' 
                    : 'bg-white/10 group-hover:bg-primary/10 group-hover:shadow-glow-primary'
                }`}>
                  <IconComponent className={`w-7 h-7 transition-all duration-300 ${
                    isSelected 
                      ? 'text-primary-glow drop-shadow-lg' 
                      : 'text-muted-foreground group-hover:text-primary-glow group-hover:drop-shadow-lg'
                  }`} />
                </div>
                
                <div className="space-y-3">
                  <h3 className={`font-bold text-base transition-colors duration-300 ${
                    isSelected 
                      ? 'text-foreground' 
                      : 'text-foreground group-hover:text-foreground'
                  }`}>
                    {need.label}
                  </h3>
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                    isSelected 
                      ? 'text-muted-foreground' 
                      : 'text-muted-foreground/80 group-hover:text-muted-foreground'
                  }`}>
                    {need.description}
                  </p>
                </div>
              </div>
              
              {/* Selection indicator */}
              {isSelected && (
                <div className="absolute top-4 right-4 w-6 h-6 bg-primary-glow rounded-full flex items-center justify-center shadow-glow-primary animate-scale-in">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
              )}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default BusinessNeedStep;