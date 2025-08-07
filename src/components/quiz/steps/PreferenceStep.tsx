import { Button } from "@/components/ui/button";
import { QuizStepProps, Preference } from "@/types/quiz";
import { HandHeart, MessageCircle, Zap, HelpCircle } from "lucide-react";

const PreferenceStep = ({ onNext, currentAnswer }: QuizStepProps) => {
  const preferences: { value: Preference; label: string; icon: any; description: string }[] = [
    {
      value: "I want someone to do it for me",
      label: "Do It For Me",
      icon: HandHeart,
      description: "I want a team to handle everything while I focus on my business"
    },
    {
      value: "I prefer expert consulting and strategy",
      label: "Expert Consulting",
      icon: MessageCircle,
      description: "I want strategic guidance and expert advice to do it myself"
    },
    {
      value: "I want to automate my workflows",
      label: "Automation Solutions",
      icon: Zap,
      description: "I want technology and AI to automate repetitive tasks"
    },
    {
      value: "Not sure – I want to see what's best",
      label: "Not Sure",
      icon: HelpCircle,
      description: "I'm open to recommendations based on what works best"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">
          Do you prefer consulting, execution, or automation?
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Help us understand your preferred approach so we can match you with the perfect solution.
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