import { SEOData } from '@/components/SEO/SEOHead';

export const createOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Marco Business Consulting",
  "alternateName": "Sales On Demand",
  "url": "https://salesondemand.it",
  "logo": "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146318/sales_5_gt3n7v.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+39-02-8295-9857",
    "contactType": "customer service",
    "email": "info@salesondemand.it",
    "availableLanguage": "Italian"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Brera 8",
    "addressLocality": "Milano",
    "postalCode": "20121",
    "addressCountry": "IT"
  },
  "sameAs": [
    "https://www.linkedin.com/company/sales-on-demand"
  ],
  "description": "Azienda leader nell'outsourcing commerciale e marketing in Italia. 25+ anni di esperienza, 500+ clienti serviti."
});

export const createWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Marco Business Consulting",
  "url": "https://salesondemand.it",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://salesondemand.it/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

export const createServiceSchema = (service: {
  name: string;
  description: string;
  price?: string;
  category: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "Organization",
    "name": "Marco Business Consulting"
  },
  "serviceType": service.category,
  "areaServed": {
    "@type": "Country",
    "name": "Italy"
  },
  ...(service.price && {
    "offers": {
      "@type": "Offer",
      "price": service.price,
      "priceCurrency": "EUR"
    }
  })
});

export const createLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Marco Business Consulting",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Brera 8",
    "addressLocality": "Milano",
    "postalCode": "20121",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "45.4654",
    "longitude": "9.1859"
  },
  "telephone": "+39-02-8295-9857",
  "email": "info@salesondemand.it",
  "url": "https://salesondemand.it",
  "openingHours": "Mo-Fr 09:00-18:00"
});

export const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const createPersonSchema = (person: {
  name: string;
  jobTitle: string;
  description: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": person.name,
  "jobTitle": person.jobTitle,
  "description": person.description,
  "worksFor": {
    "@type": "Organization",
    "name": "Marco Business Consulting"
  },
  ...(person.image && { "image": person.image })
});

export const createFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const seoPages: Record<string, SEOData> = {
  // Legal and informational pages
  cookiePolicy: {
    title: "Cookie Policy | Sales On Demand Italia",
    description: "Informativa sui cookie utilizzati sul sito Sales On Demand. Scopri come utilizziamo i cookie per migliorare la tua esperienza di navigazione.",
    canonical: "https://salesondemand.it/cookie-policy",
    lang: "it-IT",
    ogTitle: "Cookie Policy - Sales On Demand Italia",
    ogDescription: "Informativa completa sui cookie utilizzati sul nostro sito web per offrirti la migliore esperienza di navigazione.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-image-default.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-image-default.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Cookie Policy",
      "description": "Informativa sui cookie utilizzati sul sito Sales On Demand",
      "url": "https://salesondemand.it/cookie-policy",
      "publisher": createOrganizationSchema()
    }
  },
  
  privacyPolicy: {
    title: "Privacy Policy | Sales On Demand Italia",
    description: "Informativa sulla privacy di Sales On Demand. Scopri come proteggiamo i tuoi dati personali e rispettiamo la normativa GDPR.",
    canonical: "https://salesondemand.it/privacy-policy",
    lang: "it-IT",
    ogTitle: "Privacy Policy - Sales On Demand Italia",
    ogDescription: "Informativa completa sulla privacy e protezione dei dati personali secondo il GDPR.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-image-default.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-image-default.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy",
      "description": "Informativa sulla privacy e protezione dei dati personali",
      "url": "https://salesondemand.it/privacy-policy",
      "publisher": createOrganizationSchema()
    }
  },
  
  termsOfService: {
    title: "Termini e Condizioni | Sales On Demand Italia",
    description: "Termini e condizioni d'uso del sito Sales On Demand. Leggi i nostri termini di servizio per utilizzare al meglio i nostri servizi.",
    canonical: "https://salesondemand.it/terms-of-service",
    lang: "it-IT",
    ogTitle: "Termini e Condizioni - Sales On Demand Italia",
    ogDescription: "Termini e condizioni d'uso dei servizi di consulenza aziendale e marketing digitale.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-image-default.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-image-default.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Termini e Condizioni",
      "description": "Termini e condizioni d'uso dei servizi Sales On Demand",
      "url": "https://salesondemand.it/terms-of-service",
      "publisher": createOrganizationSchema()
    }
  },
  
  notFound: {
    title: "Pagina Non Trovata - 404 | Sales On Demand Italia",
    description: "La pagina che stai cercando non è stata trovata. Torna alla homepage per scoprire i nostri servizi di outsourcing vendite e marketing.",
    canonical: "https://salesondemand.it/404",
    lang: "it-IT",
    noIndex: true,
    ogTitle: "Pagina Non Trovata - Sales On Demand Italia",
    ogDescription: "La pagina richiesta non è disponibile. Esplora i nostri servizi di outsourcing vendite e marketing.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-image-default.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-image-default.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Pagina Non Trovata",
      "description": "Errore 404 - Pagina non trovata",
      "url": "https://salesondemand.it/404",
      "publisher": createOrganizationSchema()
    }
  },
  
  quizResult: {
    title: "Risultato Quiz - Raccomandazioni Personalizzate | Sales On Demand Italia",
    description: "Scopri i servizi di outsourcing personalizzati basati sulle tue esigenze aziendali. Risultati del quiz per trovare la soluzione perfetta.",
    canonical: "https://salesondemand.it/quiz-result",
    lang: "it-IT",
    noIndex: true,
    ogTitle: "Raccomandazioni Personalizzate - Sales On Demand Italia",
    ogDescription: "Servizi di outsourcing su misura per le tue esigenze aziendali specifiche.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-image-default.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-image-default.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Risultato Quiz",
      "description": "Raccomandazioni personalizzate di servizi di outsourcing aziendale",
      "url": "https://salesondemand.it/quiz-result",
      "publisher": createOrganizationSchema()
    }
  },
  homepage: {
    title: "Outsourcing Vendite e Marketing | Sales On Demand Italia",
    description: "Reparto vendite e marketing in outsourcing con metodo e AI. Team dedicato, oltre 500 aziende servite. Audit gratuito di 30 minuti.",
    canonical: "https://salesondemand.it",
    ogTitle: "Outsourcing Vendite e Marketing | Sales On Demand Italia",
    ogDescription: "Il tuo reparto commerciale in outsourcing: strategia, operatività e AI per crescere più veloce. Oltre 500 aziende servite.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-homepage.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    lang: "it-IT",
    twitterCard: "summary_large_image",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-homepage.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createWebSiteSchema(),
        createLocalBusinessSchema()
      ]
    }
  },
  salesOnDemand: {
    title: "Forza Vendita in Outsourcing | Sales On Demand (Italia)",
    description: "Forza vendita in outsourcing pronta all'uso: team vendita esterno, metodo validato e KPI monitorati. Risultati in giorni, non mesi. Demo di 30 minuti.",
    canonical: "https://salesondemand.it/sales-on-demand",
    ogTitle: "Forza Vendita in Outsourcing – Sales On Demand Italia",
    ogDescription: "Team vendita esterno pronto all'uso con metodo validato su oltre 500 aziende. Risultati rapidi e KPI monitorati.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-sales-on-demand.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    lang: "it-IT",
    twitterCard: "summary_large_image",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-sales-on-demand.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Forza Vendita in Outsourcing",
          description: "Servizio completo di outsourcing forza vendita con team dedicato, telemarketing B2B e lead generation",
          category: "Forza vendita in outsourcing"
        }),
        createBreadcrumbSchema([
          { name: "Home", url: "https://salesondemand.it" },
          { name: "Sales On Demand", url: "https://salesondemand.it/sales-on-demand" }
        ]),
        createFAQSchema([
          {
            question: "Cos'è la forza vendita in outsourcing?",
            answer: "La forza vendita in outsourcing è un team commerciale esterno dedicato alla tua azienda, composto da venditori professionali che operano come se fossero dipendenti interni ma con la flessibilità e l'esperienza di un servizio specializzato."
          },
          {
            question: "Quali vantaggi rispetto a un team interno?",
            answer: "Risparmi sui costi fissi, hai accesso immediato a venditori esperti, puoi scalare velocemente su e giù in base alle esigenze, e benefici di metodologie commerciali testate su centinaia di aziende."
          },
          {
            question: "In quanto tempo partono le attività?",
            answer: "Le attività possono partire in 2-3 settimane dall'accordo, includendo formazione del team, integrazione con i vostri sistemi CRM e definizione di KPI e processi operativi."
          },
          {
            question: "Quali strumenti e CRM utilizzate?",
            answer: "Ci integriamo con tutti i principali CRM (Salesforce, HubSpot, Pipedrive) e utilizziamo strumenti professionali per telemarketing B2B, lead generation e reportistica in tempo reale."
          }
        ])
      ]
    }
  },

  // Subpage SEO Data  
  outsourcingSalesforce: {
    title: "Forza Vendita in Outsourcing | Team Vendita Esterno",
    description: "Attiva un team vendita esterno pronto: metodo validato, direzione vendite e KPI monitorati. Risultati rapidi. Richiedi una demo di 30 minuti.",
    canonical: "https://salesondemand.it/outsourcing-salesforce",
    lang: "it-IT",
    ogTitle: "Forza Vendita in Outsourcing | Team Vendita Esterno",
    ogDescription: "Team vendita esterno pronto all'uso con metodo validato e KPI monitorati. Risultati garantiti in tempi rapidi.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-outsourcing-salesforce.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-outsourcing-salesforce.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createServiceSchema({
          name: "Forza Vendita in Outsourcing",
          description: "Team vendita esterno con metodo validato, direzione vendite e KPI monitorati per risultati immediati",
          category: "Forza vendita in outsourcing"
        }),
        createBreadcrumbSchema([
          { name: "Home", url: "https://salesondemand.it" },
          { name: "Sales On Demand", url: "https://salesondemand.it/sales-on-demand" },
          { name: "Outsourcing Salesforce", url: "https://salesondemand.it/outsourcing-salesforce" }
        ]),
        createFAQSchema([
          {
            question: "Quali sono i costi e il modello di pricing?",
            answer: "I nostri costi sono trasparenti e basati sui risultati. Offriamo modelli flessibili: fee fissa mensile, commissioni sui risultati o modello ibrido. Durante la demo di 30 minuti analizziamo insieme la soluzione più conveniente per la tua azienda."
          },
          {
            question: "Come definite KPI e obiettivi?",
            answer: "Definiamo KPI personalizzati in base ai tuoi obiettivi di business: numero di contatti qualificati, appuntamenti fissati, deal chiusi, fatturato generato. Ogni settimana ricevi report dettagliati con analisi delle performance e azioni correttive."
          },
          {
            question: "Quali sono i tempi di attivazione del servizio?",
            answer: "Il team vendita esterno può essere attivato in 2-3 settimane dall'accordo. Il processo include: analisi della tua offerta, selezione e formazione del team, integrazione con i tuoi sistemi CRM, definizione di script e processi operativi."
          }
        ])
      ]
    }
  },

  telemarketingTeleselling: {
    title: "Telemarketing B2B & Teleselling | Lead e Appuntamenti Qualificati",
    description: "Campagne di telemarketing B2B per lead e appuntamenti qualificati. Script personalizzati, operatori dedicati, report KPI. Richiedi una demo.",
    canonical: "https://salesondemand.it/telemarketing-teleselling",
    lang: "it-IT",
    ogTitle: "Telemarketing B2B & Teleselling | Lead e Appuntamenti Qualificati", 
    ogDescription: "Campagne di telemarketing B2B professionali per generare lead qualificati e appuntamenti. Operatori esperti e KPI trasparenti.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-telemarketing.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-telemarketing.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createServiceSchema({
          name: "Telemarketing B2B & Teleselling",
          description: "Campagne di telemarketing B2B per lead generation e conversione con script personalizzati e operatori dedicati",
          category: "Telemarketing B2B"
        }),
        createBreadcrumbSchema([
          { name: "Home", url: "https://salesondemand.it" },
          { name: "Sales On Demand", url: "https://salesondemand.it/sales-on-demand" },
          { name: "Telemarketing B2B", url: "https://salesondemand.it/telemarketing-teleselling" }
        ]),
        createFAQSchema([
          {
            question: "Come garantite la conformità GDPR nelle campagne telefoniche?",
            answer: "Tutte le nostre campagne di telemarketing B2B rispettano rigorosamente la normativa GDPR. Utilizziamo solo database con consenso esplicito, registriamo tutte le chiamate per quality assurance e implementiamo procedure di opt-out immediate su richiesta del prospect."
          },
          {
            question: "Quali KPI monitorate per le campagne di telemarketing?",
            answer: "Monitoriamo KPI dettagliati: tasso di contatto, conversion rate da lead a appuntamento, qualità dei prospect (scoring A/B/C), durata media chiamate, follow-up necessari. Ogni settimana ricevi report completi con analisi delle performance e ottimizzazioni."
          }
        ])
      ]
    }
  },

  contactCenterInbound: {
    title: "Contact Center Inbound | Customer Care in Outsourcing 24/7",
    description: "Assistenza clienti inbound multicanale (voce, chat, email). SLA chiari, tempi di risposta ottimali, qualità garantita. Soluzioni 24/7.",
    canonical: "https://salesondemand.it/contact-center-inbound",
    lang: "it-IT",
    ogTitle: "Contact Center Inbound | Customer Care in Outsourcing 24/7",
    ogDescription: "Servizio di customer care inbound professionale con SLA garantiti e copertura 24/7. Gestione multicanale e qualità certificata.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-contact-center.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-contact-center.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createServiceSchema({
          name: "Contact Center Inbound",
          description: "Gestione professionale delle chiamate in entrata e supporto clienti con SLA chiari e servizio multicanale 24/7",
          category: "Contact center inbound"
        }),
        createBreadcrumbSchema([
          { name: "Home", url: "https://salesondemand.it" },
          { name: "Sales On Demand", url: "https://salesondemand.it/sales-on-demand" },
          { name: "Contact Center Inbound", url: "https://salesondemand.it/contact-center-inbound" }
        ]),
        createFAQSchema([
          {
            question: "Offrite copertura 24/7 e in quali lingue?",
            answer: "Sì, offriamo copertura 24/7 con operatori dedicati. Gestiamo chiamate in italiano, inglese, francese, tedesco e spagnolo. Ogni lingua ha operatori madrelingua formati specificamente sui tuoi prodotti e servizi."
          },
          {
            question: "Quali sono gli SLA garantiti per i tempi di risposta?",
            answer: "Garantiamo SLA personalizzati in base alle tue esigenze: risposta entro 20 secondi per il 90% delle chiamate, risoluzione first call resolution superiore all'80%, tempo medio di attesa inferiore ai 30 secondi. Monitoriamo costantemente questi KPI con report in tempo reale."
          }
        ])
      ]
    }
  },

  outsourcingMarketingPage: {
    title: "Outsourcing Marketing B2B | Lead Generation & Automation",
    description: "Strategie integrate per generare lead B2B e aumentare le conversioni. Campagne mirate, marketing automation e nurturing. ROI trasparente.",
    canonical: "https://salesondemand.it/outsourcing-marketing",
    lang: "it-IT",
    ogTitle: "Outsourcing Marketing B2B | Lead Generation & Automation",
    ogDescription: "Strategie di marketing B2B integrate per generazione lead e conversioni. Automation, nurturing e ROI trasparente garantito.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-outsourcing-marketing.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-outsourcing-marketing.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createServiceSchema({
          name: "Outsourcing Marketing B2B",
          description: "Strategie integrate di marketing B2B per generare lead e aumentare le conversioni con campagne mirate e automation",
          category: "Outsourcing marketing B2B"
        }),
        createBreadcrumbSchema([
          { name: "Home", url: "https://salesondemand.it" },
          { name: "Sales On Demand", url: "https://salesondemand.it/sales-on-demand" },
          { name: "Outsourcing Marketing", url: "https://salesondemand.it/outsourcing-marketing" }
        ]),
        createFAQSchema([
          {
            question: "Come misurate il ROI delle campagne marketing?",
            answer: "Implementiamo sistemi di tracking completi che monitorano ogni touchpoint del customer journey: dalla prima impression alla conversione finale. Utilizziamo attribution modeling multicanale, UTM parametrizzati e integrazione con il tuo CRM per tracciare ROI e ROAS in tempo reale."
          },
          {
            question: "Quali canali integrate nelle strategie marketing B2B?",
            answer: "Integriamo tutti i principali canali B2B: LinkedIn Ads, Google Ads, email marketing automation, content marketing, SEO, webinar, eventi digitali. Ogni strategia è personalizzata in base al tuo target, budget e obiettivi di lead generation."
          }
        ])
      ]
    }
  },
  strategicConsulting: {
    title: "Consulenza Strategica Marketing e Vendite | Marco Ferrario",
    description: "Consulenza strategica con Marco Ferrario. Direttore vendite e marketing dedicato per definire strategie vincenti e supervisionare risultati. 25+ anni esperienza.",
    canonical: "https://marco-business.com/consulenza-strategica",
    ogTitle: "Consulenza Strategica - Direttore Commerciale On Demand",
    ogDescription: "Marco Ferrario come tuo direttore commerciale dedicato. Strategie vincenti e supervisione risultati.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-consulenza-strategica.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    lang: "it-IT",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Consulenza Strategica",
          description: "Servizi di consulenza strategica per marketing e vendite con direttore dedicato",
          category: "Management Consulting"
        })
      ]
    }
  },
  marketingConsulting: {
    title: "Consulenza Marketing Strategico | Outsourcing Marketing | Marco Business",
    description: "Consulenza marketing strategico e outsourcing completo. Piano marketing personalizzato, implementazione e gestione. Crescita vendite garantita con ROI misurabile.",
    canonical: "https://marco-business.com/consulenza-marketing",
    ogTitle: "Consulenza Marketing - Strategia e Outsourcing Completo",
    ogDescription: "Piano marketing personalizzato con implementazione e gestione completa per crescita aziendale.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-marketing-consulting.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    lang: "it-IT",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Consulenza Marketing",
          description: "Consulenza strategica e outsourcing marketing completo per crescita aziendale",
          category: "Marketing Services"
        })
      ]
    }
  },
  salesAsAServiceBook: {
    title: "Sales as a Service - Il Libro di Marco Ferrario | Metodologie Commerciali",
    description: "Scopri le metodologie commerciali vincenti di Marco Ferrario nel libro 'Sales as a Service'. Strategie, tecniche e case study per accelerare le vendite aziendali.",
    canonical: "https://marco-business.com/sales-as-a-service-book",
    ogTitle: "Sales as a Service - Il Libro delle Vendite Efficaci",
    ogDescription: "Le metodologie commerciali di Marco Ferrario: strategie, tecniche e case study per crescita vendite.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-book.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    lang: "it-IT",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "Sales as a Service",
      "author": {
        "@type": "Person",
        "name": "Marco Ferrario"
      },
      "description": "Guida completa alle metodologie commerciali moderne per accelerare le vendite aziendali",
      "publisher": {
        "@type": "Organization",
        "name": "Marco Business Consulting"
      }
    }
  },
  // AI Services Pages
  aiServices: {
    title: "Servizi AI e Automazioni Intelligenti | Soluzioni Innovative | Marco Business",
    description: "Servizi AI avanzati per automatizzare marketing e vendite. Intelligenza artificiale personalizzata per business scalabili. Scopri le soluzioni innovative di automazione.",
    canonical: "https://marco-business.com/ai",
    ogTitle: "Servizi AI - Automazioni Intelligenti per il Business",
    ogDescription: "Soluzioni AI complete per automatizzare processi aziendali. Tecnologie all'avanguardia per crescita e efficienza.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-ai-services.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    lang: "it-IT",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Servizi AI e Automazioni",
          description: "Soluzioni di intelligenza artificiale per automatizzazione marketing e vendite",
          category: "Artificial Intelligence Services"
        })
      ]
    }
  },
  aiIntegration: {
    title: "Integrazione AI Aziendale | Trasforma i Tuoi Sistemi | Marco Business",
    description: "Integriamo AI nei tuoi sistemi esistenti. Chatbot, automazioni e strumenti intelligenti che potenziamo il tuo flusso di lavoro senza interruzioni.",
    canonical: "https://marco-business.com/ai-integration",
    ogTitle: "Integrazione AI - Potenzia i Tuoi Sistemi Esistenti",
    ogDescription: "Trasforma i tuoi strumenti in piattaforme intelligenti con integrazioni AI seamless.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-ai-integration.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    lang: "it-IT",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Integrazione AI Aziendale",
          description: "Integrazione di intelligenza artificiale nei sistemi aziendali esistenti",
          category: "Technology Integration Services"
        })
      ]
    }
  },
  automazioneAI: {
    title: "Automazione AI Processi Aziendali | Efficienza Massima | Marco Business",
    description: "Automazioni AI per eliminare attività ripetitive. Sistemi intelligenti che ottimizzano processi aziendali 24/7. Riduci costi e aumenta produttività.",
    canonical: "https://marco-business.com/automazione-ai",
    ogTitle: "Automazione AI - Elimina le Attività Ripetitive",
    ogDescription: "Sistemi AI che automatizzano processi aziendali per massima efficienza e riduzione costi.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-automazione-ai.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    lang: "it-IT",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Automazione AI Processi",
          description: "Automazione intelligente di processi aziendali con tecnologie AI",
          category: "Process Automation Services"
        })
      ]
    }
  },
  chatbotAI: {
    title: "Chatbot AI Personalizzati | Assistenti Virtuali 24/7 | Marco Business", 
    description: "Chatbot AI avanzati per customer service e vendite. Assistenti virtuali intelligenti che convertono visitatori in clienti. Supporto automatico 24/7.",
    canonical: "https://marco-business.com/chatbot-ai",
    ogTitle: "Chatbot AI - Il Tuo Miglior Collaboratore Attivo 24/7",
    ogDescription: "Assistenti virtuali intelligenti che trasformano ogni conversazione in opportunità di business.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-chatbot-ai.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    lang: "it-IT",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Chatbot AI Personalizzati",
          description: "Sviluppo chatbot AI avanzati per customer service e lead generation",
          category: "Chatbot Development Services"
        })
      ]
    }
  },
  instantAvatar: {
    title: "Instant Avatar AI | Gemello Digitale Parlante | Marco Business",
    description: "Crea il tuo avatar digitale AI che parla in ogni lingua. Video personalizzati senza telecamera. Presenta ovunque senza esserci fisicamente.",
    canonical: "https://marco-business.com/instant-avatar",
    ogTitle: "Instant Avatar - Presente Ovunque Senza Esserci",
    ogDescription: "Avatar digitale AI che replica il tuo volto e la tua voce per video e presentazioni automatiche.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-instant-avatar.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    lang: "it-IT",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Instant Avatar AI",
          description: "Creazione avatar digitali AI per video e presentazioni personalizzate",
          category: "Digital Avatar Services"
        })
      ]
    }
  },
  // Company Pages
  about: {
    title: "Chi Siamo | Marco Business Consulting | Team Esperti Vendite Marketing",
    description: "Scopri Marco Business Consulting: 25+ anni di esperienza, team di esperti in vendite, marketing e AI. La storia di successo che ha trasformato 500+ aziende italiane.",
    canonical: "https://marco-business.com/about",
    ogTitle: "Chi Siamo - Il Team di Esperti Marco Business Consulting",
    ogDescription: "25+ anni di esperienza nel trasformare aziende con soluzioni innovative di vendite e marketing.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-about.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    lang: "it-IT",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createLocalBusinessSchema()
      ]
    }
  },
  contact: {
    title: "Contatti | Marco Business Consulting | Consulenza Gratuita Milano",
    description: "Contatta Marco Business Consulting per una consulenza gratuita. Sede Milano, supporto personalizzato per crescita aziendale. Prenota il tuo appuntamento oggi.",
    canonical: "https://marco-business.com/contact",
    ogTitle: "Contatti - Prenota la Tua Consulenza Gratuita",
    ogDescription: "Consulenza personalizzata gratuita con Marco Business Consulting. Sede Milano, esperti in crescita aziendale.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-contact.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    lang: "it-IT",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createLocalBusinessSchema(),
        createFAQSchema([
          {
            question: "Quanto costa una consulenza?",
            answer: "La prima consulenza strategica è completamente gratuita e senza impegno. Durante questo incontro analizziamo la tua situazione e definiamo insieme la strategia più adatta."
          },
          {
            question: "Dove siete ubicati?",
            answer: "La nostra sede principale è a Milano in Via Brera 8. Lavoriamo però con clienti in tutta Italia, anche in modalità remota."
          },
          {
            question: "Quanto tempo richiede un progetto?",
            answer: "Dipende dal tipo di servizio. I progetti di consulenza strategica possono partire in 48 ore, mentre servizi come Sales On Demand richiedono 2-3 settimane per l'implementazione completa."
          }
        ])
      ]
    }
  },
  marcoFerrario: {
    title: "Marco Ferrario | Esperto Vendite e Direttore Commerciale | 25+ Anni Esperienza",
    description: "Marco Ferrario, direttore vendite esperto con 25+ anni di esperienza. Fondatore Sales On Demand, ha trasformato oltre 500 aziende italiane con strategie commerciali innovative.",
    canonical: "https://marco-business.com/marco-ferrario",
    ogTitle: "Marco Ferrario - Esperto di Vendite e Leadership Commerciale",
    ogDescription: "25+ anni di esperienza nella crescita aziendale. Metodologie innovative testate su 500+ aziende italiane.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-marco-ferrario.jpg",
    ogImageWidth: "1200", 
    ogImageHeight: "630",
    lang: "it-IT",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createPersonSchema({
          name: "Marco Ferrario",
          jobTitle: "Fondatore e Direttore Commerciale",
          description: "Esperto di vendite con oltre 25 anni di esperienza nel settore, specializzato nello sviluppo di strategie commerciali innovative e scalabili.",
          image: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/marco-ferrario-profile.jpg"
        })
      ]
    }
  },
  monetizzaYoutube: {
    title: "Monetizzazione YouTube Professionale | Crescita Canale | Marco Business",
    description: "Servizi professionali per monetizzare YouTube. Crescita canale, contenuti strategici e revenue optimization. Trasforma visualizzazioni in vendite concrete.",
    canonical: "https://marco-business.com/monetizza-youtube",
    ogTitle: "Monetizzazione YouTube - Da Zero alla Monetizzazione e Oltre",
    ogDescription: "Trasforma il tuo canale YouTube in una macchina di vendite con strategie professionali.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-youtube-monetization.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    lang: "it-IT",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Monetizzazione YouTube",
          description: "Servizi professionali per crescita e monetizzazione canali YouTube aziendali",
          category: "Digital Marketing Services"
        })
      ]
    }
  },
  saasPlatforms: {
    title: "Sviluppo Piattaforme SaaS | Software Scalabile | Marco Business",
    description: "Sviluppiamo piattaforme SaaS personalizzate che scalano automaticamente. Dall'MVP al lancio globale, gestiamo tutto con tecnologie cloud-native e AI.",
    canonical: "https://marco-business.com/saas-platforms",
    ogTitle: "Piattaforme SaaS - Costruiamo Prodotti che Scalano Automaticamente",
    ogDescription: "Sviluppo SaaS enterprise con architettura cloud-native, AI-ready e performance ottimizzate.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-saas-platforms.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    lang: "it-IT",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Sviluppo Piattaforme SaaS",
          description: "Sviluppo software-as-a-service scalabile con architettura cloud-native",
          category: "Software Development Services"
        })
      ]
    }
  },
  webAppDevelopment: {
    title: "Sviluppo Web App e App Mobile | Soluzioni Personalizzate | Marco Business",
    description: "Sviluppo web app e app mobile personalizzate per crescita aziendale. Piattaforme ad alte prestazioni integrate con AI e strategie di marketing.",
    canonical: "https://marco-business.com/web-app-development",
    ogTitle: "Web & App Development - Piattaforme Personalizzate per Crescita",
    ogDescription: "Sviluppiamo web app e app mobile che si integrano perfettamente con obiettivi e strategie AI.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-web-app-development.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    lang: "it-IT",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Sviluppo Web App e App Mobile",
          description: "Sviluppo applicazioni web e mobile personalizzate per business growth",
          category: "Web Development Services"
        })
      ]
    }
  },
  smartAITools: {
    title: "Strumenti AI Personalizzati | Dashboard e Automazioni | Marco Business",
    description: "Strumenti AI personalizzati per il tuo team. Dashboard interne, automazioni intelligenti e assistenti che lavorano come membri del team.",
    canonical: "https://marco-business.com/smart-ai-tools",
    ogTitle: "Smart AI Tools - Strumenti Personalizzati che Lavorano per Te",
    ogDescription: "Strumenti AI su misura: dashboard, automazioni e assistenti intelligenti per il tuo workflow quotidiano.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-smart-ai-tools.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    lang: "it-IT",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Strumenti AI Personalizzati",
          description: "Sviluppo strumenti AI custom per automazione e ottimizzazione workflow aziendali",
          category: "AI Tools Development"
        })
      ]
    }
  },
  auditVendite: {
    title: "Audit Vendite | Analisi Performance Commerciali | Marco Business",
    description: "Audit professionale delle performance di vendita. Analisi approfondita processi commerciali, identificazione criticità e opportunità di miglioramento.",
    canonical: "https://marco-business.com/audit-vendite",
    ogTitle: "Audit Vendite - Analisi Performance e Ottimizzazione Commerciale",
    ogDescription: "Audit completo per identificare criticità e opportunità nel tuo processo di vendita.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-audit-vendite.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    lang: "it-IT",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Audit Vendite",
          description: "Analisi approfondita performance commerciali e ottimizzazione processi di vendita",
          category: "Sales Consulting Services"
        })
      ]
    }
  },
  consultationServices: {
    title: "Servizi di Consulenza Strategica | Consulenza Business | Marco Business",
    description: "Servizi di consulenza strategica per crescita aziendale. Marketing, vendite, AI e automazioni. Esperti dedicati per trasformare il tuo business.",
    canonical: "https://marco-business.com/consultation-services",
    ogTitle: "Consulenza Strategica - Servizi Professionali per Crescita Business",
    ogDescription: "Consulenza completa: marketing, vendite, AI e automazioni per accelerare crescita aziendale.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-consultation-services.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    lang: "it-IT",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Servizi di Consulenza Strategica",
          description: "Consulenza strategica completa per marketing, vendite e crescita aziendale",
          category: "Business Consulting Services"
        })
      ]
    }
  },
  outsourcingMarketing: {
    title: "Outsourcing Marketing | Marketing Esterno | Marco Business",
    description: "Outsourcing marketing completo con team di esperti. Strategia, implementazione e gestione marketing esterno. Crescita garantita e ROI misurabile.",
    canonical: "https://marco-business.com/outsourcing-marketing",
    ogTitle: "Outsourcing Marketing - Team Marketing Completo Esterno",
    ogDescription: "Team marketing esterno che implementa strategie complete per crescita aziendale sostenibile.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-outsourcing-marketing.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    lang: "it-IT",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Outsourcing Marketing",
          description: "Servizi di outsourcing marketing completo con team di esperti esterni",
          category: "Marketing Outsourcing Services"
        })
      ]
    }
  },
  salesServices: {
    title: "Servizi Vendite Professionali | Sales Services | Marco Business",
    description: "Servizi vendite professionali per crescita aziendale. Team sales dedicato, strategie personalizzate e risultati garantiti. Esperienza 25+ anni.",
    canonical: "https://marco-business.com/sales-services",
    ogTitle: "Sales Services - Servizi Vendite Professionali per Crescita",
    ogDescription: "Team sales professionale con strategie personalizzate per accelerare vendite e crescita.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-sales-services.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    lang: "it-IT",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Servizi Vendite Professionali",
          description: "Servizi sales professionali con team dedicato e strategie personalizzate",
          category: "Professional Sales Services"
        })
      ]
    }
  }
};