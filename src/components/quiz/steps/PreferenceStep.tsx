import { Button } from "@/components/ui/button";
import { QuizStepProps, Preference } from "@/types/quiz";
import { HandHeart, MessageCircle, Zap, HelpCircle } from "lucide-react";

const PreferenceStep = ({ onNext, currentAnswer }: QuizStepProps) => {
  const preferences: { value: Preference; label: string; icon: any; description: string }[] = [
    {
      value: "I want someone to do it for me",
      label: "Fallo Per Me",
      icon: HandHeart,
      description: "Voglio un team che gestisca tutto mentre mi concentro sul mio business"
    },
    {
      value: "I prefer expert consulting and strategy",
      label: "Consulenza Esperta",
      icon: MessageCircle,
      description: "Voglio guida strategica e consigli esperti per farlo da solo"
    },
    {
      value: "I want to automate my workflows",
      label: "Soluzioni di Automazione",
      icon: Zap,
      description: "Voglio tecnologia e AI per automatizzare compiti ripetitivi"
    },
    {
      value: "Not sure – I want to see what's best",
      label: "Non Sono Sicuro",
      icon: HelpCircle,
      description: "Sono aperto a raccomandazioni basate su ciò che funziona meglio"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Quale approccio preferisci?
        </h2>
        <p className="text-base text-white/80 max-w-2xl mx-auto">
          Seleziona il tipo di supporto che meglio si adatta alle tue esigenze e al tuo stile di lavoro
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {preferences.map((preference, index) => {
          const IconComponent = preference.icon;
          const isSelected = currentAnswer === preference.value;
          
          return (
            <Button
              key={preference.value}
              variant="outline"
              className={`h-auto p-8 flex flex-col items-center space-y-6 text-center transition-all duration-300 hover:scale-105 ${
                isSelected 
                  ? 'bg-primary-glow/10 border-primary-glow shadow-glow-primary text-white' 
                  : 'bg-white/5 hover:bg-white/10 border-white/20 hover:border-primary-glow/50'
              }`}
              onClick={() => onNext(preference.value)}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className={`p-4 rounded-2xl transition-all duration-300 ${
                  isSelected 
                    ? 'bg-primary-glow/20 shadow-glow-primary' 
                    : 'bg-white/10 hover:bg-primary-glow/10'
                }`}>
                  <IconComponent className={`w-10 h-10 transition-all duration-300 ${
                    isSelected 
                      ? 'text-primary-glow' 
                      : 'text-white/80 hover:text-primary-glow'
                  }`} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-white">
                    {preference.label}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {preference.description}
                  </p>
                </div>
              </div>
              
              {/* Selection indicator */}
              {isSelected && (
                <div className="absolute top-4 right-4 w-6 h-6 bg-primary-glow rounded-full flex items-center justify-center shadow-glow-primary">
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

export default PreferenceStep;