import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSalesOnDemandSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Cos'è la forza vendita in outsourcing?",
      answer: "La forza vendita in outsourcing è un team commerciale esterno dedicato alla tua azienda, composto da venditori professionali che operano come se fossero dipendenti interni ma con la flessibilità e l'esperienza di un servizio specializzato. Include telemarketing B2B, vendite dirette e gestione dell'intero processo commerciale."
    },
    {
      question: "Quali vantaggi rispetto a un team interno?",
      answer: "I principali vantaggi sono: riduzione dei costi fissi (niente stipendi, benefit o formazione), accesso immediato a venditori esperti, scalabilità rapida in base alle esigenze, metodologie commerciali testate su centinaia di aziende, e possibilità di partire subito senza lunghi processi di recruiting."
    },
    {
      question: "In quanto tempo partono le attività?",
      answer: "Le attività possono partire in 2-3 settimane dall'accordo. Il processo include: analisi della tua situazione (3-5 giorni), formazione del team sui tuoi prodotti/servizi (1 settimana), integrazione con i tuoi sistemi CRM e definizione di KPI e processi operativi personalizzati."
    },
    {
      question: "Quali strumenti e CRM utilizzate?",
      answer: "Ci integriamo con tutti i principali CRM (Salesforce, HubSpot, Pipedrive, Zoho) e utilizziamo strumenti professionali per telemarketing B2B, lead generation, email marketing automation e reportistica in tempo reale. Possiamo anche implementare nuovi sistemi se necessario."
    },
    {
      question: "Come vengono misurati i risultati?",
      answer: "Definiamo insieme KPI chiari e misurabili: numero di lead qualificati, appuntamenti fissati, tasso di conversione, fatturato generato, costo per acquisizione cliente (CAC) e lifetime value (LTV). Ricevi report settimanali con tutte le metriche e un dashboard in tempo reale."
    },
    {
      question: "Qual è l'investimento richiesto?",
      answer: "L'investimento varia in base al tipo di servizio e dimensione del team. Partiamo da 3.000€/mese per un servizio di telemarketing B2B base, fino a 15.000€/mese per un team commerciale completo. Include tutto: personale, tecnologie, formazione e management. ROI tipico: 3-5x in 6-12 mesi."
    },
    {
      question: "Offrite garanzie sui risultati?",
      answer: "Sì, offriamo una garanzia risultati nei primi 90 giorni. Se non raggiungi gli obiettivi concordati nel contratto (es. numero minimo di lead qualificati o appuntamenti), rimborsiamo il 100% del servizio. Questo è possibile perché il nostro metodo è validato su 500+ aziende."
    },
    {
      question: "Lavorate solo in Italia?",
      answer: "Il nostro focus principale è il mercato italiano B2B, dove abbiamo la maggiore esperienza. Tuttavia, gestiamo anche progetti per aziende italiane che vogliono espandersi in Europa, utilizzando team specializzati per ogni mercato e lingua."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 transition-all duration-300 hover:scale-105 shadow-lg bg-primary/10 text-primary border border-primary/20">
            DOMANDE FREQUENTI
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-12 text-slate-900">
            FAQ{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Sales On Demand
            </span>
          </h2>
          
          <p className="text-xl leading-relaxed max-w-3xl mx-auto text-slate-600">
            Le risposte alle domande più frequenti sul nostro servizio di outsourcing 
            vendite e marketing. Non trovi la tua domanda? Contattaci direttamente.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:border-primary/20 transition-colors duration-300"
            >
              <button
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-primary/20"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg lg:text-xl font-bold text-slate-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-400 flex-shrink-0" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="h-px bg-slate-200 mb-4"></div>
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default FAQSalesOnDemandSection;