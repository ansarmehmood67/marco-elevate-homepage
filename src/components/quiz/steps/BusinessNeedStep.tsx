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
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          In quale area hai bisogno di maggiore supporto?
        </h2>
        <p className="text-base text-white/80 max-w-2xl mx-auto">
          Scegli l'area in cui la tua azienda necessita di maggiore supporto per crescere e raggiungere i tuoi obiettivi
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {businessNeeds.map((need, index) => {
          const IconComponent = need.icon;
          const isSelected = currentAnswer === need.value;
          
          return (
            <Button
              key={need.value}
              variant="outline"
              className={`relative overflow-hidden w-full h-auto p-6 flex flex-col items-start space-y-4 text-left transition-all duration-300 hover:scale-105 whitespace-normal break-words ${
                isSelected 
                  ? 'bg-primary-glow/10 border-primary-glow shadow-glow-primary text-white' 
                  : 'bg-white/5 hover:bg-white/10 border-white/20 hover:border-primary-glow/50'
              }`}
              onClick={() => onNext(need.value)}
            >
              <div className="relative w-full flex flex-col space-y-4">
                <div className={`p-3 rounded-xl transition-all duration-300 ${
                  isSelected 
                    ? 'bg-primary-glow/20 shadow-glow-primary' 
                    : 'bg-white/10 hover:bg-primary-glow/10'
                }`}>
                  <IconComponent className={`w-6 h-6 transition-all duration-300 ${
                    isSelected 
                      ? 'text-primary-glow' 
                      : 'text-white/80 hover:text-primary-glow'
                  }`} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm text-white">
                    {need.label}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {need.description}
                  </p>
                </div>
              </div>
              
              {/* Selection indicator */}
              {isSelected && (
                <div className="absolute top-3 right-3 w-5 h-5 bg-primary-glow rounded-full flex items-center justify-center shadow-glow-primary">
                  <div className="w-2 h-2 bg-white rounded-full" />
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