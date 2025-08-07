import { useState } from "react";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { QuizState } from "@/types/quiz";
import { Button } from "@/components/ui/button";
import BusinessNeedStep from "./steps/BusinessNeedStep";
import TeamSizeStep from "./steps/TeamSizeStep";
import PreferenceStep from "./steps/PreferenceStep";
import LeadCaptureStep from "./steps/LeadCaptureStep";
import { generateResultUrl } from "@/services/quizLogic";
import { useNavigate } from "react-router-dom";

interface QuizProps {
  isOpen: boolean;
  onClose: () => void;
}

const Quiz = ({ isOpen, onClose }: QuizProps) => {
  const navigate = useNavigate();
  const [quizState, setQuizState] = useState<QuizState>({
    currentStep: 1,
    answers: {}
  });

  const totalSteps = 4;
  const progressPercentage = (quizState.currentStep / totalSteps) * 100;

  const handleNext = (answer: string) => {
    const stepAnswerMap: Record<number, keyof QuizState['answers']> = {
      1: 'businessNeed',
      2: 'teamSize',
      3: 'preference',
      4: 'name'
    };

    const answerKey = stepAnswerMap[quizState.currentStep];
    
    setQuizState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [answerKey]: answer
      }
    }));

    if (quizState.currentStep < totalSteps) {
      setQuizState(prev => ({
        ...prev,
        currentStep: prev.currentStep + 1
      }));
    }
  };

  const handleEmailSubmit = (email: string) => {
    const finalAnswers = {
      ...quizState.answers,
      email
    };
    
    setQuizState(prev => ({
      ...prev,
      answers: finalAnswers
    }));

    // Generate result URL and navigate
    const resultUrl = generateResultUrl(finalAnswers);
    navigate(resultUrl);
    onClose();
  };

  const handlePrevious = () => {
    if (quizState.currentStep > 1) {
      setQuizState(prev => ({
        ...prev,
        currentStep: prev.currentStep - 1
      }));
    }
  };

  const renderStep = () => {
    const stepProps = {
      onNext: handleNext,
      onPrevious: handlePrevious,
      isFirst: quizState.currentStep === 1,
      isLast: quizState.currentStep === totalSteps
    };

    switch (quizState.currentStep) {
      case 1:
        return <BusinessNeedStep {...stepProps} currentAnswer={quizState.answers.businessNeed} />;
      case 2:
        return <TeamSizeStep {...stepProps} currentAnswer={quizState.answers.teamSize} />;
      case 3:
        return <PreferenceStep {...stepProps} currentAnswer={quizState.answers.preference} />;
      case 4:
        return <LeadCaptureStep 
          {...stepProps} 
          onEmailSubmit={handleEmailSubmit}
          currentName={quizState.answers.name}
          currentEmail={quizState.answers.email}
        />;
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold text-foreground">
                Find Your Perfect Solution
              </h1>
              <span className="text-sm text-muted-foreground">
                Step {quizState.currentStep} of {totalSteps}
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4 w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {renderStep()}
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="sticky bottom-0 bg-background/80 backdrop-blur-sm border-t border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={quizState.currentStep === 1}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </Button>
            
            <div className="text-sm text-muted-foreground">
              {quizState.currentStep === totalSteps ? "Complete your information" : "Choose an option to continue"}
            </div>
            
            <div className="w-24"> {/* Spacer for alignment */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;