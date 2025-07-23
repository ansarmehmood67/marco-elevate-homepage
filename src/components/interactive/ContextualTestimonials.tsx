import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote, Star, MessageSquare, Code, Play, TrendingUp } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  metrics?: {
    label: string;
    value: string;
    improvement: string;
  };
  serviceContext: string;
  industry: string;
}

interface ContextualTestimonialsProps {
  serviceType: "chatbot" | "development" | "sales" | "marketing" | "youtube";
}

const ContextualTestimonials = ({ serviceType }: ContextualTestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getTestimonialsForService = (): Testimonial[] => {
    switch (serviceType) {
      case "chatbot":
        return [
          {
            id: "1",
            name: "Marco Santini",
            role: "Customer Service Manager",
            company: "TechFlow Solutions",
            avatar: "MS",
            content: "Il chatbot AI ha rivoluzionato completamente il nostro customer service. Ora gestiamo 3x più richieste con la stessa squadra, e la soddisfazione clienti è aumentata del 40%. I clienti ottengono risposte immediate anche di notte.",
            metrics: {
              label: "Richieste Gestite",
              value: "15,000/mese",
              improvement: "+300%"
            },
            serviceContext: "Assistenza clienti automatizzata per piattaforma SaaS",
            industry: "Technology"
          },
          {
            id: "2",
            name: "Elena Rossi",
            role: "Marketing Director",
            company: "Wellness Pro",
            avatar: "ER",
            content: "Il chatbot non si limita a rispondere: qualifica i lead, prenota appuntamenti e ha aumentato le nostre conversioni del 65%. È come avere un sales assistant che lavora 24/7 senza mai stancarsi.",
            metrics: {
              label: "Lead Qualificati",
              value: "450/mese",
              improvement: "+65%"
            },
            serviceContext: "Lead qualification per centro benessere",
            industry: "Health & Wellness"
          },
          {
            id: "3",
            name: "Giuseppe Bianchi",
            role: "Operations Manager",
            company: "Quick Delivery",
            avatar: "GB",
            content: "Con il chatbot multicanale, i nostri clienti possono tracciare ordini, modificare consegne e richiedere supporto via WhatsApp, web e app. Il tempo di risoluzione è diminuito dell'80%.",
            metrics: {
              label: "Tempo Risoluzione",
              value: "2 minuti",
              improvement: "-80%"
            },
            serviceContext: "Customer support per servizio delivery",
            industry: "Logistics"
          }
        ];

      case "development":
        return [
          {
            id: "1",
            name: "Andrea Ferrari",
            role: "CEO",
            company: "Design Studio Milano",
            avatar: "AF",
            content: "Il loro team ha creato un sito che non solo è bellissimo, ma converte davvero. In 6 mesi abbiamo triplicato le richieste di preventivo. PageSpeed 98/100 e zero problemi tecnici.",
            metrics: {
              label: "Richieste Preventivo",
              value: "180/mese",
              improvement: "+300%"
            },
            serviceContext: "Sito web corporate per studio di design",
            industry: "Design & Creative"
          },
          {
            id: "2",
            name: "Lucia Martini",
            role: "E-commerce Manager",
            company: "Fashion Boutique",
            avatar: "LM",
            content: "L'e-commerce che hanno sviluppato è una macchina da vendita. Integrazione perfetta con inventory, pagamenti e spedizioni. Le vendite online sono cresciute del 450% nel primo anno.",
            metrics: {
              label: "Vendite Online",
              value: "€85,000/mese",
              improvement: "+450%"
            },
            serviceContext: "E-commerce platform per fashion retail",
            industry: "Fashion & Retail"
          },
          {
            id: "3",
            name: "Roberto Conti",
            role: "Digital Manager",
            company: "Fitness Chain",
            avatar: "RC",
            content: "L'app mobile che hanno creato ha digitalizzato completamente la nostra catena di palestre. Prenotazioni, pagamenti, workout tracking - tutto in un'app velocissima. 50,000+ download in 8 mesi.",
            metrics: {
              label: "App Downloads",
              value: "50,000+",
              improvement: "Da zero"
            },
            serviceContext: "App mobile per catena fitness",
            industry: "Fitness & Sports"
          }
        ];

      case "youtube":
        return [
          {
            id: "1",
            name: "Matteo Verdi",
            role: "Content Creator",
            company: "Tech Review Italia",
            avatar: "MV",
            content: "In 8 mesi sono passato da 5K a 125K iscritti seguendo la loro strategia. I video ora generano €8,000-12,000 al mese tra ads, sponsorizzazioni e prodotti digitali. ROI incredibile.",
            metrics: {
              label: "Revenue Mensile",
              value: "€10,500",
              improvement: "Da €200"
            },
            serviceContext: "Monetizzazione canale tech review",
            industry: "Technology & Reviews"
          },
          {
            id: "2",
            name: "Sofia Romano",
            role: "Business Coach",
            company: "Success Academy",
            avatar: "SR",
            content: "YouTube è diventato il mio miglior canale di acquisizione clienti. Ogni video porta 20-30 richieste di consulenza. Il corso online lanciato via YouTube ha fatturato €150,000 in 6 mesi.",
            metrics: {
              label: "Lead da YouTube",
              value: "350/mese",
              improvement: "+2,400%"
            },
            serviceContext: "YouTube marketing per business coaching",
            industry: "Business & Coaching"
          },
          {
            id: "3",
            name: "Davide Russo",
            role: "Founder",
            company: "Cooking Master",
            avatar: "DR",
            content: "Il canale YouTube ha superato 2 milioni di views. Ora monetizzo con corsi online, affiliate marketing e brand partnership. Da hobby a business da €15,000/mese in meno di un anno.",
            metrics: {
              label: "Views Totali",
              value: "2.5M+",
              improvement: "+1,200%"
            },
            serviceContext: "Monetizzazione canale cucina",
            industry: "Food & Lifestyle"
          }
        ];

      default:
        return [];
    }
  };

  const testimonials = getTestimonialsForService();
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getServiceIcon = () => {
    switch (serviceType) {
      case "chatbot":
        return <MessageSquare className="w-5 h-5 text-[#2E8BC0]" />;
      case "development":
        return <Code className="w-5 h-5 text-[#2E8BC0]" />;
      case "youtube":
        return <Play className="w-5 h-5 text-[#2E8BC0]" />;
      default:
        return <TrendingUp className="w-5 h-5 text-[#2E8BC0]" />;
    }
  };

  const getServiceTitle = () => {
    switch (serviceType) {
      case "chatbot":
        return "Clienti che hanno trasformato il customer service";
      case "development":
        return "Progetti che hanno rivoluzionato il business";
      case "youtube":
        return "Creator che hanno monetizzato con successo";
      default:
        return "Storie di successo";
    }
  };

  if (testimonials.length === 0) return null;

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#2E8BC0]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#87CEEB]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm mb-6">
            {getServiceIcon()}
            <span className="text-[#87CEEB] font-medium text-sm">Storie di Successo</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {getServiceTitle()}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Risultati concreti che dimostrano l'impatto delle nostre soluzioni
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Testimonial Content */}
              <div className="md:col-span-2 space-y-6">
                <div className="relative">
                  <Quote className="w-12 h-12 text-[#2E8BC0]/20 absolute -top-2 -left-2" />
                  <blockquote className="text-xl md:text-2xl text-white leading-relaxed pl-8">
                    "{currentTestimonial.content}"
                  </blockquote>
                </div>

                <div className="flex items-center gap-4 pt-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] rounded-full flex items-center justify-center text-white font-bold">
                    {currentTestimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{currentTestimonial.name}</h4>
                    <p className="text-slate-300">{currentTestimonial.role}</p>
                    <p className="text-[#87CEEB] font-medium">{currentTestimonial.company}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                    <span className="w-2 h-2 bg-[#2E8BC0] rounded-full"></span>
                    {currentTestimonial.serviceContext}
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300">
                    {currentTestimonial.industry}
                  </div>
                </div>
              </div>

              {/* Metrics Card */}
              {currentTestimonial.metrics && (
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full text-green-400 text-sm font-medium">
                      <TrendingUp className="w-4 h-4" />
                      {currentTestimonial.metrics.improvement}
                    </div>
                    <div>
                      <h5 className="text-2xl md:text-3xl font-bold text-white mb-1">
                        {currentTestimonial.metrics.value}
                      </h5>
                      <p className="text-slate-300 text-sm">{currentTestimonial.metrics.label}</p>
                    </div>
                    <div className="flex justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="sm"
              className="border-white/20 text-white hover:bg-white/10"
              disabled={testimonials.length <= 1}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Precedente
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-[#2E8BC0] scale-125" 
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="sm"
              className="border-white/20 text-white hover:bg-white/10"
              disabled={testimonials.length <= 1}
            >
              Successivo
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContextualTestimonials;