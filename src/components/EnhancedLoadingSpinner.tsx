import { useEffect, useState } from 'react';

interface EnhancedLoadingSpinnerProps {
  showDelay?: number;
  message?: string;
}

const EnhancedLoadingSpinner = ({ 
  showDelay = 100,
  message = "Caricamento..." 
}: EnhancedLoadingSpinnerProps) => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Delay showing spinner to prevent flash for fast loads
    const delayTimer = setTimeout(() => {
      setShowSpinner(true);
    }, showDelay);

    // Simulate loading progress
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => {
      clearTimeout(delayTimer);
      clearInterval(progressTimer);
    };
  }, [showDelay]);

  if (!showSpinner) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A2E4F] via-[#1E4A6B] to-[#2E8BC0]">
        {/* Empty state - prevents flash */}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2E4F] via-[#1E4A6B] to-[#2E8BC0] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-primary-glow/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-16 h-16 bg-accent/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main spinner container */}
      <div className="relative z-10 flex flex-col items-center space-y-8 animate-fade-in">
        {/* Enhanced spinner */}
        <div className="relative">
          {/* Outer ring */}
          <div className="w-16 h-16 border-4 border-primary/30 rounded-full animate-spin"></div>
          
          {/* Inner animated ring */}
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
          
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </div>

        {/* Loading text */}
        <div className="text-center space-y-3">
          <p className="text-white text-lg font-medium animate-pulse">
            {message}
          </p>
          
          {/* Progress bar */}
          <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          
          <p className="text-white/70 text-sm">
            Preparazione della pagina in corso...
          </p>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-60"
            style={{
              top: `${20 + (i * 15)}%`,
              left: `${10 + (i * 12)}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default EnhancedLoadingSpinner;