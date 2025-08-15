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
        <h2 className="text-3xl font-bold text-slate-900">
          Qual è la tua più grande esigenza aziendale in questo momento?
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Scegli l'area dove hai più bisogno di aiuto. Questo ci aiuterà a raccomandare la soluzione perfetta per la tua azienda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {businessNeeds.map((need) => {
          const IconComponent = need.icon;
          const isSelected = currentAnswer === need.value;
          
          return (
            <Button
              key={need.value}
              variant="outline"
              className={`h-auto p-6 flex flex-col items-start space-y-3 text-left transition-all duration-300 group shadow-sm ${
                isSelected 
                  ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-md' 
                  : 'bg-white hover:bg-slate-50 border-slate-300 hover:border-blue-400 hover:shadow-md'
              }`}
              onClick={() => onNext(need.value)}
            >
              <div className={`p-3 rounded-lg transition-colors ${
                isSelected 
                  ? 'bg-blue-100' 
                  : 'bg-slate-100 group-hover:bg-blue-50'
              }`}>
                <IconComponent className={`w-6 h-6 ${
                  isSelected ? 'text-blue-600' : 'text-slate-600 group-hover:text-blue-600'
                }`} />
              </div>
              
              <div className="space-y-2">
                <h3 className={`font-semibold text-sm ${
                  isSelected ? 'text-blue-700' : 'text-slate-900'
                }`}>
                  {need.label}
                </h3>
                <p className={`text-xs leading-relaxed ${
                  isSelected ? 'text-blue-600' : 'text-slate-600'
                }`}>
                  {need.description}
                </p>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default BusinessNeedStep;