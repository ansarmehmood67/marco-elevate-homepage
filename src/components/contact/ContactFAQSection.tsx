import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, Clock, Euro, Users, Lightbulb, Shield } from "lucide-react";

const ContactFAQSection = () => {
  const faqCategories = [
    {
      category: "Generale",
      icon: HelpCircle,
      color: "text-primary",
      faqs: [
        {
          question: "Quanto tempo ci vuole per vedere i primi risultati?",
          answer: "I primi miglioramenti sono visibili già dalle prime 2-3 settimane. Risultati significativi e consolidati si ottengono tipicamente entro 60-90 giorni, a seconda della complessità del progetto e dello stato iniziale del tuo sales process."
        },
        {
          question: "Lavorate solo con grandi aziende?",
          answer: "Assolutamente no! Lavoriamo con aziende di tutte le dimensioni, dalle startup alle multinazionali. Ogni progetto viene personalizzato in base alle specifiche esigenze e al budget disponibile."
        },
        {
          question: "Offrite supporto post-progetto?",
          answer: "Sì, offriamo diversi pacchetti di supporto continuativo. Include monitoraggio delle performance, aggiornamenti strategici e supporto tecnico per mantenere e migliorare i risultati ottenuti."
        }
      ]
    },
    {
      category: "Servizi",
      icon: Lightbulb,
      color: "text-sky-blue-400",
      faqs: [
        {
          question: "Quali sono i vostri servizi principali?",
          answer: "I nostri servizi core includono: Sales On Demand, consulenza strategica commerciale, implementazione CRM, automazione AI per le vendite, formazione team sales, lead generation e outsourcing salesforce completo."
        },
        {
          question: "Potete gestire completamente il nostro reparto vendite?",
          answer: "Sì! Il nostro servizio di Outsourcing Salesforce permette di gestire completamente il tuo reparto commerciale: dal recruiting alla formazione, dalla strategia all'esecuzione, fino al reporting e all'ottimizzazione continua."
        },
        {
          question: "Integrate tecnologie AI nei vostri servizi?",
          answer: "Assolutamente sì. Utilizziamo AI per automazione lead generation, chatbot commerciali, analisi predittiva, scoring automatico dei prospect e personalizzazione delle comunicazioni commerciali."
        }
      ]
    },
    {
      category: "Prezzi",
      icon: Euro,
      color: "text-green-400",
      faqs: [
        {
          question: "Come funziona la vostra struttura prezzi?",
          answer: "Offriamo diverse modalità: progetti a prezzo fisso, consulenza oraria, retainer mensile e modelli performance-based. Durante la consulenza gratuita definiamo insieme l'approccio più adatto alle tue esigenze e budget."
        },
        {
          question: "C'è un investimento minimo richiesto?",
          answer: "L'investimento varia in base al servizio. Consulenze puntuali partono da 500€, progetti completi da 5.000€, mentre soluzioni enterprise sono personalizzate. La prima consulenza di 15 minuti è sempre gratuita."
        },
        {
          question: "Offrite garanzie sui risultati?",
          answer: "Sì! Offriamo garanzia 'Soddisfatti o Rimborsati' sui primi 30 giorni. Inoltre, molti nostri progetti includono KPI specifici e milestone misurabili per garantire il raggiungimento degli obiettivi concordati."
        }
      ]
    },
    {
      category: "Processo",
      icon: Users,
      color: "text-purple-400",
      faqs: [
        {
          question: "Come inizia una collaborazione?",
          answer: "1) Consulenza gratuita di 15 min per capire le tue esigenze 2) Analisi approfondita della situazione attuale 3) Proposta strategica personalizzata 4) Kick-off del progetto con timeline chiara 5) Esecuzione con monitoraggio costante."
        },
        {
          question: "Quanto siete coinvolti operativamente?",
          answer: "Dipende dal servizio scelto. Possiamo fornire solo consulenza strategica, affiancare il tuo team, o gestire completamente le attività commerciali. Definiamo insieme il livello di coinvolgimento più adatto."
        },
        {
          question: "Come monitorate i progressi?",
          answer: "Utilizziamo dashboard in tempo reale, report settimanali dettagliati, call di allineamento periodiche e KPI specifici concordati. Tutto è trasparente e misurabile."
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2E8BC0]/10 to-[#87CEEB]/10 rounded-full border border-[#2E8BC0]/20 backdrop-blur-sm mb-4">
            <span className="text-[#2E8BC0] font-semibold text-sm">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Domande Frequenti
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Trova le risposte alle domande più comuni sui nostri servizi e processi
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="glass-card h-fit">
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-primary/20`}>
                    <category.icon className={`h-5 w-5 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{category.category}</h3>
                </div>
              </div>
              
              <CardContent className="p-0">
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border-slate-200"
                    >
                      <AccordionTrigger className="px-6 py-4 text-left text-slate-900 hover:text-primary transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-slate-600 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-16 text-center">
          <Card className="glass-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <HelpCircle className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Non hai trovato la risposta?
              </h3>
              <p className="text-slate-600 mb-6">
                Contattaci direttamente per una consulenza personalizzata gratuita
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center space-x-2 text-slate-600">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Risposta entro 30 minuti</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Consulenza gratuita</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQSection;