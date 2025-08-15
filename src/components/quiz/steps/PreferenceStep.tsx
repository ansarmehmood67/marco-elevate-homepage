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
        <h2 className="text-3xl font-bold text-slate-900">
          Preferisci consulenza, esecuzione o automazione?
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Aiutaci a capire il tuo approccio preferito così possiamo trovarti la soluzione perfetta.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {preferences.map((preference) => {
          const IconComponent = preference.icon;
          const isSelected = currentAnswer === preference.value;
          
          return (
            <Button
              key={preference.value}
              variant="outline"
              className={`h-auto p-8 flex flex-col items-center space-y-4 text-center transition-all duration-300 group shadow-sm ${
                isSelected 
                  ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-md' 
                  : 'bg-white hover:bg-slate-50 border-slate-300 hover:border-blue-400 hover:shadow-md'
              }`}
              onClick={() => onNext(preference.value)}
            >
              <div className={`p-4 rounded-full transition-colors ${
                isSelected 
                  ? 'bg-blue-100' 
                  : 'bg-slate-100 group-hover:bg-blue-50'
              }`}>
                <IconComponent className={`w-8 h-8 ${
                  isSelected ? 'text-blue-600' : 'text-slate-600 group-hover:text-blue-600'
                }`} />
              </div>
              
              <div className="space-y-2">
                <h3 className={`font-semibold text-lg ${
                  isSelected ? 'text-blue-700' : 'text-slate-900'
                }`}>
                  {preference.label}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  isSelected ? 'text-blue-600' : 'text-slate-600'
                }`}>
                  {preference.description}
                </p>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default PreferenceStep;