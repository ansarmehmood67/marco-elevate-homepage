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
      label: "Generate More Qualified Leads",
      icon: Target,
      description: "Increase your pipeline with high-quality prospects"
    },
    {
      value: "Close more sales without hiring a team",
      label: "Close More Sales Without Hiring",
      icon: Users,
      description: "Get a dedicated sales team without recruitment costs"
    },
    {
      value: "Improve customer support or inbound call handling",
      label: "Improve Customer Support",
      icon: Headphones,
      description: "Professional 24/7 customer service and support"
    },
    {
      value: "Build stronger marketing presence",
      label: "Build Stronger Marketing Presence",
      icon: Megaphone,
      description: "Complete marketing team to boost your brand"
    },
    {
      value: "Analyze and improve sales performance",
      label: "Analyze Sales Performance",
      icon: BarChart3,
      description: "Deep dive into your sales data and optimization"
    },
    {
      value: "Develop a winning marketing strategy",
      label: "Develop Marketing Strategy",
      icon: Lightbulb,
      description: "Strategic consulting for marketing success"
    },
    {
      value: "Monetize YouTube content",
      label: "Monetize YouTube Content",
      icon: Youtube,
      description: "Maximize revenue from your YouTube channel"
    },
    {
      value: "Automate conversations or onboarding",
      label: "Automate Conversations",
      icon: Bot,
      description: "AI-powered chat and onboarding automation"
    },
    {
      value: "Automate business processes using AI",
      label: "Automate Business Processes",
      icon: Zap,
      description: "Streamline operations with intelligent automation"
    },
    {
      value: "Build a website or mobile app",
      label: "Build Website or Mobile App",
      icon: Code,
      description: "Custom development for web and mobile platforms"
    },
    {
      value: "Launch a SaaS product or platform",
      label: "Launch SaaS Product",
      icon: Cloud,
      description: "Complete SaaS development and launch support"
    },
    {
      value: "Build smart internal tools",
      label: "Build Smart Internal Tools",
      icon: Wrench,
      description: "Custom AI-powered tools for your business"
    },
    {
      value: "Integrate AI into existing systems",
      label: "Integrate AI into Systems",
      icon: Puzzle,
      description: "Enhance current systems with AI capabilities"
    },
    {
      value: "Not sure – I need expert guidance",
      label: "Not Sure – Need Expert Guidance",
      icon: HelpCircle,
      description: "Let our experts analyze your needs and recommend solutions"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">
          What's your biggest business need right now?
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Choose the area where you need the most help. This will help us recommend the perfect solution for your business.
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