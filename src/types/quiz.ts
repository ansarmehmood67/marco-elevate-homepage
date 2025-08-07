export interface QuizState {
  currentStep: number;
  answers: {
    businessNeed?: string;
    teamSize?: string;
    preference?: string;
    name?: string;
    email?: string;
  };
}

export interface QuizStepProps {
  onNext: (answer: string) => void;
  onPrevious: () => void;
  currentAnswer?: string;
  isFirst: boolean;
  isLast: boolean;
}

export interface ServiceRecommendation {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  features: string[];
  benefits?: string[];
  ctaText: string;
  route: string;
  icon: string;
  videoUrl?: string;
  testimonial?: {
    text: string;
    author: string;
  };
}

export type BusinessNeed = 
  | "Generate more qualified leads"
  | "Close more sales without hiring a team"
  | "Improve customer support or inbound call handling"
  | "Build stronger marketing presence"
  | "Analyze and improve sales performance"
  | "Develop a winning marketing strategy"
  | "Monetize YouTube content"
  | "Automate conversations or onboarding"
  | "Automate business processes using AI"
  | "Build a website or mobile app"
  | "Launch a SaaS product or platform"
  | "Build smart internal tools"
  | "Integrate AI into existing systems"
  | "Not sure – I need expert guidance";

export type TeamSize = "Solo / Freelancer" | "Small team (2–5)" | "Medium (6–20)" | "Larger company (20+)";

export type Preference = "I want someone to do it for me" | "I prefer expert consulting and strategy" | "I want to automate my workflows" | "Not sure – I want to see what's best";