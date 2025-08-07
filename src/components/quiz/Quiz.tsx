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
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      {/* Header */}
      <div className="flex-shrink-0 bg-white border-b border-border px-6 py-5 shadow-sm">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">{quizState.currentStep}</span>
              </div>
              <span className="text-sm font-semibold text-foreground">
                Step {quizState.currentStep} of {totalSteps}
              </span>
            </div>
            <div className="w-56 bg-muted rounded-full h-3 shadow-inner">
              <div 
                className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-700 ease-out shadow-sm"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <span className="text-sm text-muted-foreground font-medium">{Math.round(progressPercentage)}% Complete</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-full p-2.5 transition-colors"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Content - Scrollable */}
      <div className="flex-1 overflow-y-auto bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="min-h-full flex items-center justify-center py-12 px-6">
          <div className="w-full max-w-5xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-border/50">
              {renderStep()}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex-shrink-0 bg-card/80 backdrop-blur-sm border-t border-border px-6 py-5">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={quizState.currentStep === 1}
            className="flex items-center space-x-2 border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </Button>

          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="font-medium">Find your perfect solution in minutes</span>
          </div>
          
          <div className="w-24"> {/* Spacer for alignment */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;