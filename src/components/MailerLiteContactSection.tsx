import { ArrowRight, Phone, Clock, Shield, Mail, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const MailerLiteContactSection = () => {
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  const [isFormError, setIsFormError] = useState(false);
  const [debugInfo, setDebugInfo] = useState<string[]>([]);
  const [useIframe, setUseIframe] = useState(false);
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const addDebugInfo = (info: string) => {
    console.log('MailerLite Debug:', info);
    setDebugInfo(prev => [...prev, `${new Date().toLocaleTimeString()}: ${info}`]);
  };

  useEffect(() => {
    const initializeForm = () => {
      addDebugInfo('Starting form detection...');
      
      // First try iframe method if universal script fails
      if (!useIframe) {
        setTimeout(() => {
          if (!isFormLoaded && !isFormError) {
            addDebugInfo('Switching to iframe method...');
            setUseIframe(true);
          }
        }, 3000);
      }

      // Enhanced form detection
      const selectors = [
        '.ml-embedded iframe',
        '.ml-embedded form',
        '.ml-embedded [data-testid="form"]',
        '.ml-embedded .ml-form',
        '.ml-embedded .ml-block-form',
        '.ml-embedded [role="form"]',
        '.ml-embedded input',
        '.ml-embedded button',
        'iframe[src*="mailerlite"]'
      ];

      // Use MutationObserver for better detection
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            const hasFormElements = selectors.some(selector => 
              document.querySelector(selector)
            );
            
            if (hasFormElements) {
              addDebugInfo('Form elements detected via MutationObserver');
              setIsFormLoaded(true);
              observer.disconnect();
              return;
            }
          }
        });
      });

      const formContainer = document.querySelector('.ml-embedded[data-form="YqzMqi"]');
      if (formContainer) {
        observer.observe(formContainer, {
          childList: true,
          subtree: true,
          attributes: true
        });
        addDebugInfo('MutationObserver started on .ml-embedded');
      }

      // Periodic check as backup
      const checkInterval = setInterval(() => {
        const hasFormElements = selectors.some(selector => {
          const element = document.querySelector(selector);
          if (element) {
            addDebugInfo(`Form found with selector: ${selector}`);
            return true;
          }
          return false;
        });

        if (hasFormElements) {
          setIsFormLoaded(true);
          clearInterval(checkInterval);
          observer.disconnect();
        } else {
          addDebugInfo('No form elements found with any selector');
        }
      }, 1000);

      // Reduced timeout to 8 seconds for better UX
      const timeout = setTimeout(() => {
        addDebugInfo('Form loading timeout reached');
        if (!useIframe) {
          addDebugInfo('Trying iframe method...');
          setUseIframe(true);
          // Give iframe method 5 more seconds
          setTimeout(() => {
            if (!isFormLoaded) {
              setIsFormError(true);
              addDebugInfo('All methods failed, showing error state');
            }
          }, 5000);
        } else {
          setIsFormError(true);
          addDebugInfo('All methods failed, showing error state');
        }
        clearInterval(checkInterval);
        observer.disconnect();
      }, 8000);

      return () => {
        clearInterval(checkInterval);
        clearTimeout(timeout);
        observer.disconnect();
      };
    };

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeForm);
    } else {
      setTimeout(initializeForm, 1000);
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', initializeForm);
    };
  }, [useIframe, isFormLoaded]);

  const handleRetry = () => {
    setIsFormError(false);
    setIsFormLoaded(false);
    setUseIframe(false);
    setShowCustomForm(false);
    setDebugInfo([]);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  const handleCustomFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Richiesta Informazioni dal Sito Web');
    const body = encodeURIComponent(`
Nome: ${formData.name}
Email: ${formData.email}
Telefono: ${formData.phone}
Messaggio: ${formData.message}
    `);
    window.open(`mailto:info@salesondemand.it?subject=${subject}&body=${body}`, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
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
              
              {/* MailerLite Forms - Multiple Methods */}
              <div className="relative">
                {!useIframe ? (
                  // Method 1: Universal Script
                  <div className="ml-embedded" data-form="YqzMqi"></div>
                ) : (
                  // Method 2: Direct Iframe
                  <iframe
                    src="https://landing.mailerlite.com/webforms/landing/y6q4z8"
                    style={{ width: '100%', height: '500px', border: 'none', borderRadius: '8px' }}
                    title="Contact Form"
                    onLoad={() => {
                      addDebugInfo('Iframe loaded successfully');
                      setIsFormLoaded(true);
                    }}
                    onError={() => {
                      addDebugInfo('Iframe failed to load');
                      setIsFormError(true);
                    }}
                  />
                )}
                
                {/* Loading State */}
                {!isFormLoaded && !isFormError && !showCustomForm && (
                  <div className="absolute inset-0 bg-white/5 rounded-lg animate-pulse flex flex-col items-center justify-center space-y-3">
                    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <div className="text-gray-400">Caricamento form...</div>
                  </div>
                )}
                
                {/* Custom Fallback Form */}
                {showCustomForm && (
                  <div className="space-y-4">
                    <form onSubmit={handleCustomFormSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                          Nome *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-white/20 rounded-md bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Il tuo nome"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-white/20 rounded-md bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="la-tua@email.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                          Telefono
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-white/20 rounded-md bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="+39 XXX XXXXXXX"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                          Messaggio *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-white/20 rounded-md bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                          placeholder="Descrivi brevemente la tua richiesta..."
                        />
                      </div>
                      
                      <Button type="submit" className="w-full bg-primary hover:bg-primary-glow">
                        <Send className="h-4 w-4 mr-2" />
                        Invia Messaggio
                      </Button>
                    </form>
                  </div>
                )}
                
                {/* Error State */}
                {isFormError && !showCustomForm && (
                  <div className="absolute inset-0 bg-white/5 rounded-lg flex flex-col items-center justify-center space-y-4 text-center p-6">
                    <div className="text-red-400 text-lg">⚠️ Problemi di connessione</div>
                    <p className="text-gray-400 text-sm">
                      Il modulo non si carica. Usa uno dei metodi alternativi qui sotto.
                    </p>
                    
                    {/* Direct Contact Options */}
                    <div className="grid grid-cols-1 gap-3 w-full max-w-sm">
                      <a 
                        href="tel:+390248864354" 
                        className="flex items-center justify-center space-x-2 p-3 border border-white/20 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <Phone className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-white">+39 02 4886 4354</span>
                      </a>
                      
                      <a 
                        href="mailto:info@salesondemand.it" 
                        className="flex items-center justify-center space-x-2 p-3 border border-white/20 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <Mail className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-white">info@salesondemand.it</span>
                      </a>
                    </div>
                    
                    <div className="flex flex-col space-y-2 w-full max-w-sm">
                      <Button 
                        onClick={() => setShowCustomForm(true)} 
                        variant="default" 
                        size="sm"
                        className="w-full"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Usa Modulo Semplice
                      </Button>
                      
                      <Button onClick={handleRetry} variant="outline" size="sm" className="w-full">
                        Riprova Caricamento
                      </Button>
                      
                      <Button
                        onClick={() => window.open('https://landing.mailerlite.com/webforms/landing/y6q4z8', '_blank')}
                        variant="ghost"
                        size="sm"
                        className="text-xs w-full"
                      >
                        Apri in Nuova Finestra
                      </Button>
                    </div>
                    
                    {/* Debug Info in Development */}
                    {process.env.NODE_ENV === 'development' && debugInfo.length > 0 && (
                      <details className="text-left w-full">
                        <summary className="cursor-pointer text-xs text-gray-400">
                          Debug Info ({debugInfo.length} entries)
                        </summary>
                        <div className="mt-2 text-xs font-mono bg-black/20 p-2 rounded max-h-32 overflow-y-auto">
                          {debugInfo.map((info, index) => (
                            <div key={index} className="text-gray-400">{info}</div>
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