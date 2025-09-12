import { useState } from "react";
import { X, ArrowLeft, Sparkles } from "lucide-react";
import { QuizState } from "@/types/quiz";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
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

  const handleEmailSubmit = (email: string, name: string) => {
    const finalAnswers = {
      ...quizState.answers,
      email,
      name
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

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[85vh] p-0 border-0 bg-transparent shadow-none z-[100]">
        <DialogTitle className="sr-only">Quiz per Trovare la Soluzione Perfetta</DialogTitle>
        <DialogDescription className="sr-only">
          Completa questo quiz in {totalSteps} passaggi per trovare la soluzione di business più adatta alle tue esigenze.
        </DialogDescription>
        
        <div className="relative bg-gradient-to-br from-background/95 via-secondary/30 to-primary/20 rounded-2xl shadow-premium-lg border border-white/10 backdrop-blur-xl overflow-hidden">
          {/* Premium Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary-glow/20 rounded-full filter blur-3xl opacity-40" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl opacity-40" />
          
          {/* Header */}
          <div className="relative z-10 border-b border-white/10 bg-white/5 backdrop-blur-sm px-6 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow-primary">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-white">
                      Trova la Tua Soluzione Perfetta
                    </span>
                    <span className="text-sm text-primary-glow">
                      Step {quizState.currentStep} di {totalSteps}
                    </span>
                  </div>
                </div>
                
                {/* Premium Progress Bar */}
                <div className="hidden md:flex items-center space-x-4 ml-8">
                  <div className="w-48 h-2 bg-white/10 rounded-full overflow-hidden shadow-inner">
                    <div 
                      className="h-full bg-gradient-primary rounded-full transition-all duration-700 ease-out shadow-glow-primary"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-primary-glow font-semibold min-w-[4rem]">
                    {Math.round(progressPercentage)}%
                  </span>
                </div>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-white/70 hover:text-white hover:bg-white/10 rounded-full p-3 transition-all duration-300 hover:scale-110"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            {/* Mobile Progress Bar */}
            <div className="md:hidden mt-4">
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-gradient-primary rounded-full transition-all duration-700 ease-out shadow-glow-primary"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-white/70">
                  {Math.round(progressPercentage)}% completato
                </span>
                <div className="flex items-center space-x-1 text-xs text-primary-glow">
                  <div className="w-1.5 h-1.5 bg-primary-glow rounded-full animate-pulse" />
                  <span>Soluzione personalizzata</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-6 md:p-8 overflow-y-auto max-h-[60vh]">
            <div className="bg-white/5 rounded-xl p-6 md:p-8 backdrop-blur-xl border border-white/10">
              {renderStep()}
            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10 border-t border-white/10 bg-white/5 backdrop-blur-sm px-6 py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={quizState.currentStep === 1}
                className="flex items-center space-x-2 bg-white/10 border-white/20 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Indietro</span>
              </Button>

              <div className="flex items-center justify-center space-x-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse shadow-glow-primary" />
                  <span className="text-primary-glow font-medium">
                    Soluzione personalizzata in pochi minuti
                  </span>
                </div>
              </div>
              
              {/* Step indicators */}
              <div className="flex items-center space-x-2">
                {Array.from({ length: totalSteps }, (_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i + 1 <= quizState.currentStep
                        ? 'bg-primary-glow shadow-glow-primary'
                        : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Quiz;