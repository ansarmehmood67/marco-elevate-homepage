import { Button } from "@/components/ui/button";
import { QuizStepProps, TeamSize } from "@/types/quiz";
import { User, Users, Building, Building2 } from "lucide-react";

const TeamSizeStep = ({ onNext, currentAnswer }: QuizStepProps) => {
  const teamSizes: { value: TeamSize; label: string; icon: any; description: string }[] = [
    {
      value: "Solo / Freelancer",
      label: "Solo / Freelancer",
      icon: User,
      description: "Just me working on my business or projects"
    },
    {
      value: "Small team (2–5)",
      label: "Small Team (2–5)",
      icon: Users,
      description: "A small, close-knit team of professionals"
    },
    {
      value: "Medium (6–20)",
      label: "Medium Company (6–20)",
      icon: Building,
      description: "Growing business with multiple departments"
    },
    {
      value: "Larger company (20+)",
      label: "Larger Company (20+)",
      icon: Building2,
      description: "Established company with complex needs"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">
          How large is your current team?
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Understanding your team size helps us recommend solutions that scale perfectly with your organization.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {teamSizes.map((size) => {
          const IconComponent = size.icon;
          const isSelected = currentAnswer === size.value;
          
          return (
            <Button
              key={size.value}
              variant="outline"
              className={`h-auto p-8 flex flex-col items-center space-y-4 text-center transition-all duration-300 group shadow-sm ${
                isSelected 
                  ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-md' 
                  : 'bg-white hover:bg-slate-50 border-slate-300 hover:border-blue-400 hover:shadow-md'
              }`}
              onClick={() => onNext(size.value)}
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
                  {size.label}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  isSelected ? 'text-blue-600' : 'text-slate-600'
                }`}>
                  {size.description}
                </p>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default TeamSizeStep;