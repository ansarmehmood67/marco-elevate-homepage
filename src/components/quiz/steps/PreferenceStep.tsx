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
        <h2 className="text-3xl font-bold text-foreground">
          Do you prefer consulting, execution, or automation?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
              className={`h-auto p-8 flex flex-col items-center space-y-4 text-center transition-all duration-300 group ${
                isSelected 
                  ? 'bg-primary/10 border-primary text-primary' 
                  : 'bg-card hover:bg-card/80 border-border hover:border-primary/50'
              }`}
              onClick={() => onNext(preference.value)}
            >
              <div className={`p-4 rounded-full transition-colors ${
                isSelected 
                  ? 'bg-primary/20' 
                  : 'bg-muted group-hover:bg-primary/10'
              }`}>
                <IconComponent className={`w-8 h-8 ${
                  isSelected ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                }`} />
              </div>
              
              <div className="space-y-2">
                <h3 className={`font-semibold text-lg ${
                  isSelected ? 'text-primary' : 'text-foreground'
                }`}>
                  {preference.label}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  isSelected ? 'text-primary/80' : 'text-muted-foreground'
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