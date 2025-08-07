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
    <div className="fixed inset-0 bg-white z-50 overflow-hidden">
      {/* Header */}
      <div className="relative bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-6">
            <span className="text-sm font-medium text-slate-600">
              Step {quizState.currentStep} of {totalSteps}
            </span>
            <div className="w-48 bg-slate-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <span className="text-sm text-slate-500">{Math.round(progressPercentage)}% Complete</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full p-2"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto bg-gradient-to-br from-slate-50 to-white">
        <div className="min-h-[calc(100vh-140px)] flex items-center justify-center py-8">
          <div className="w-full max-w-4xl mx-auto px-6">
            {renderStep()}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={quizState.currentStep === 1}
            className="flex items-center space-x-2 border-slate-300 text-slate-600 hover:bg-slate-50"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </Button>

          <div className="flex items-center space-x-2 text-sm text-slate-500">
            <span>Find your perfect solution in minutes</span>
          </div>
          
          <div className="w-24"> {/* Spacer for alignment */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;