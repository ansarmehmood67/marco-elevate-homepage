import { ArrowRight, Phone, Clock, Shield, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const MailerLiteContactSection = () => {
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  const [isFormError, setIsFormError] = useState(false);
  const [debugInfo, setDebugInfo] = useState<string[]>([]);

  const addDebugInfo = (info: string) => {
    console.log('MailerLite Debug:', info);
    setDebugInfo(prev => [...prev, `${new Date().toLocaleTimeString()}: ${info}`]);
  };

  useEffect(() => {
    addDebugInfo('Starting form detection...');
    
    // Check if MailerLite script is loaded
    if (typeof (window as any).ml === 'undefined') {
      addDebugInfo('MailerLite script not found on window.ml');
    } else {
      addDebugInfo('MailerLite script found');
    }

    const checkFormLoaded = () => {
      // Try multiple selectors
      const selectors = [
        '.ml-embedded form',
        '.ml-embedded iframe',
        '.ml-embedded div',
        '[data-form="YqzMqi"] form',
        '[data-form="YqzMqi"] iframe'
      ];
      
      for (const selector of selectors) {
        const element = document.querySelector(selector);
        if (element) {
          addDebugInfo(`Form found with selector: ${selector}`);
          setIsFormLoaded(true);
          return true;
        }
      }
      
      addDebugInfo('No form elements found with any selector');
      return false;
    };

    // Use MutationObserver for better detection
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          addDebugInfo('DOM change detected, checking for form...');
          if (checkFormLoaded()) {
            observer.disconnect();
          }
        }
      });
    });

    // Start observing the ml-embedded container
    const container = document.querySelector('.ml-embedded');
    if (container) {
      observer.observe(container, {
        childList: true,
        subtree: true
      });
      addDebugInfo('MutationObserver started on .ml-embedded');
    } else {
      addDebugInfo('No .ml-embedded container found for observer');
    }

    // Initial check
    checkFormLoaded();
    
    // Periodic checks as fallback
    const interval = setInterval(() => {
      if (!isFormLoaded) {
        checkFormLoaded();
      } else {
        clearInterval(interval);
      }
    }, 2000);

    // Set error state if form doesn't load within 15 seconds
    const timeout = setTimeout(() => {
      if (!isFormLoaded) {
        addDebugInfo('Timeout reached - form failed to load');
        setIsFormError(true);
        clearInterval(interval);
        observer.disconnect();
      }
    }, 15000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-background via-slate-900 to-background">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/50"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="text-sm uppercase tracking-[0.3em] text-primary font-bold">
              CONTATTACI OGGI
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight">
              <span className="text-white">Pronto a far </span>
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                crescere il business?
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl leading-relaxed text-gray-300 font-light">
              Parla con Marco e scopri cosa può fare il suo team per portare la tua azienda al livello successivo.
            </p>

            {/* Trust Indicators */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 rounded-full bg-primary/20">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <span className="text-lg">Risposta entro 2 ore</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 rounded-full bg-primary/20">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="text-lg">Consulenza gratuita di 30 min</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 rounded-full bg-primary/20">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <span className="text-lg">Nessun impegno</span>
              </div>
            </div>
          </div>

          {/* Right Column - MailerLite Form */}
          <div className="relative">
            <div className="p-8 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 shadow-2xl">
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Inizia Subito</h3>
                <p className="text-gray-300">Compila il form per essere ricontattato</p>
              </div>
              
              {/* MailerLite Embedded Form */}
              <div className="relative">
                <div className="ml-embedded" data-form="YqzMqi"></div>
                
                {/* Loading skeleton - only show when form is not loaded and no error */}
                {!isFormLoaded && !isFormError && (
                  <div className="absolute inset-0 bg-white/5 rounded-lg animate-pulse flex flex-col items-center justify-center space-y-3">
                    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <div className="text-gray-400">Caricamento form...</div>
                  </div>
                )}
                
                {/* Error state with better fallbacks */}
                {isFormError && (
                  <div className="absolute inset-0 bg-white/5 rounded-lg flex flex-col items-center justify-center space-y-4 text-center p-6">
                    <div className="text-red-400 text-lg">⚠️ Errore nel caricamento</div>
                    <p className="text-gray-400 text-sm">
                      Il form non si è caricato.<br/>
                      Contattaci direttamente:
                    </p>
                    
                    {/* Direct Contact Options */}
                    <div className="space-y-3 mt-4">
                      <a 
                        href="mailto:info@marcoferrario.com" 
                        className="flex items-center gap-2 text-primary hover:text-primary-glow transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        info@marcoferrario.com
                      </a>
                      <a 
                        href="tel:+393291234567" 
                        className="flex items-center gap-2 text-primary hover:text-primary-glow transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        +39 329 123 4567
                      </a>
                    </div>
                    
                    <div className="flex gap-2">
                      <button 
                        onClick={() => {
                          setIsFormError(false);
                          setIsFormLoaded(false);
                          setDebugInfo([]);
                        }}
                        className="px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition-colors"
                      >
                        Riprova
                      </button>
                      <a 
                        href="https://dashboard.mailerlite.com/forms/851102/113753665819290115/share"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-primary hover:bg-primary-glow text-white rounded-lg transition-colors"
                      >
                        Apri Form Diretto
                      </a>
                    </div>
                    
                    {/* Debug Info (only in development) */}
                    {process.env.NODE_ENV === 'development' && debugInfo.length > 0 && (
                      <details className="mt-4 text-xs text-gray-500 max-w-full">
                        <summary className="cursor-pointer">Debug Info</summary>
                        <div className="mt-2 text-left bg-black/20 p-2 rounded max-h-32 overflow-y-auto">
                          {debugInfo.map((info, index) => (
                            <div key={index}>{info}</div>
                          ))}
                        </div>
                      </details>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS will be added to index.css for MailerLite form styling */}
    </section>
  );
};

export default MailerLiteContactSection;