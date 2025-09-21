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
  "provider": createOrganizationSchema(),
  "serviceType": service.category,
  ...(service.price && { "offers": {
    "@type": "Offer",
    "price": service.price,
    "priceCurrency": "EUR"
  }})
});

export const createLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Marco Business Consulting",
  "image": "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146318/sales_5_gt3n7v.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Brera 8",
    "addressLocality": "Milano",
    "postalCode": "20121",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.4654219,
    "longitude": 9.1859243
  },
  "telephone": "+39-02-8295-9857",
  "email": "info@salesondemand.it",
  "url": "https://salesondemand.it",
  "openingHours": ["Mo-Fr 09:00-18:00"],
  "description": "Consulenza commerciale e marketing strategico per aziende B2B in Italia."
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
  "image": person.image,
  "worksFor": createOrganizationSchema()
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
  cookiePolicy: {
    title: "Cookie Policy | Sales On Demand Italia",
    description: "Informativa sui cookie di Sales On Demand Italia. Dettagli su utilizzo, gestione e controllo dei cookie del nostro sito web.",
    canonical: "https://salesondemand.it/cookie-policy",
    ogTitle: "Cookie Policy - Sales On Demand Italia",
    ogDescription: "Informativa completa sui cookie utilizzati dal nostro sito web e modalità di gestione.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-cookie-policy.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterTitle: "Cookie Policy - Sales On Demand Italia",
    twitterDescription: "Informativa completa sui cookie utilizzati dal nostro sito web.",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-cookie-policy.jpg",
    lang: "it-IT",
    noIndex: true
  },
  privacyPolicy: {
    title: "Privacy Policy | Sales On Demand Italia",
    description: "Informativa sulla privacy di Sales On Demand Italia. Trattamento dati personali, diritti utenti e conformità GDPR.",
    canonical: "https://salesondemand.it/privacy-policy",
    ogTitle: "Privacy Policy - Sales On Demand Italia",
    ogDescription: "Informativa completa sulla privacy e trattamento dati personali conforme GDPR.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-privacy-policy.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterTitle: "Privacy Policy - Sales On Demand Italia",
    twitterDescription: "Informativa completa sulla privacy e trattamento dati personali conforme GDPR.",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-privacy-policy.jpg",
    lang: "it-IT",
    noIndex: true
  },
  homepage: {
    title: "Sales On Demand Italia | Team Vendita Esterno e Marketing B2B",
    description: "Team vendita esterno e marketing B2B professionale. 25+ anni esperienza, 500+ clienti serviti. Aumenta le vendite del 30-50% con il nostro team dedicato.",
    canonical: "https://salesondemand.it",
    ogTitle: "Sales On Demand Italia - Team Vendita Esterno Professionale",
    ogDescription: "Team vendita esterno che aumenta le vendite del 30-50%. 25+ anni esperienza nel B2B italiano.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-homepage.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterTitle: "Sales On Demand Italia - Team Vendita Esterno",
    twitterDescription: "Team vendita esterno che aumenta le vendite del 30-50%. 25+ anni esperienza nel B2B italiano.",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-homepage.jpg",
    lang: "it-IT",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createWebSiteSchema(),
        createLocalBusinessSchema(),
        createFAQSchema([
          {
            question: "Cos'è Sales On Demand?",
            answer: "Sales On Demand è il servizio di team vendita esterno leader in Italia. Forniamo venditori professionali, marketing B2B e consulenza strategica per far crescere le vendite aziendali del 30-50%."
          },
          {
            question: "Come funziona il team vendita esterno?",
            answer: "Il nostro team si integra perfettamente nella tua azienda: analizziamo il tuo mercato, definiamo la strategia commerciale, implementiamo i processi e gestiamo l'intero ciclo di vendita con KPI misurabili."
          },
          {
            question: "Quali risultati posso aspettarmi?",
            answer: "I nostri clienti vedono mediamente crescita vendite del 30-50% nel primo anno, aumento pipeline del 40-60% e miglioramento conversion rate del 25-35%. Ogni progetto include KPI chiari e reportistica mensile."
          },
          {
            question: "Lavorate con tutte le tipologie di aziende?",
            answer: "Ci specializziamo in aziende B2B con fatturato 1-50M€: tecnologia, manifatturiero, servizi professionali, healthcare, fintech. 25+ anni di esperienza in tutti i settori del mercato italiano."
          }
        ])
      ]
    }
  },
  salesOnDemand: {
    title: "Sales On Demand | Team Vendita Esterno B2B | Marco Business",
    description: "Servizio completo di team vendita esterno B2B. Venditori professionali, gestione pipeline, lead generation. Aumenta vendite 30-50% con esperienza 25+ anni.",
    canonical: "https://salesondemand.it/sales-on-demand",
    ogTitle: "Sales On Demand - Team Vendita Esterno B2B Professionale", 
    ogDescription: "Team vendita esterno che gestisce l'intero processo commerciale. Venditori esperti, lead generation, pipeline management.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-sales-on-demand.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterTitle: "Sales On Demand - Team Vendita Esterno B2B",
    twitterDescription: "Team vendita esterno che gestisce l'intero processo commerciale. Venditori esperti, lead generation, pipeline management.",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-sales-on-demand.jpg",
    lang: "it-IT",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Sales On Demand",
          description: "Servizio completo di team vendita esterno B2B con venditori professionali dedicati",
          category: "Business Development Services"
        }),
        createFAQSchema([
          {
            question: "Come funziona Sales On Demand?",
            answer: "Il nostro team vendita esterno si integra nella tua azienda gestendo l'intero processo commerciale: lead generation, qualificazione prospect, presentazioni, negoziazioni e chiusura contratti."
          },
          {
            question: "Che tipo di aziende servite?",
            answer: "Serviamo aziende B2B con fatturato 1-50M€ in tutti i settori: tecnologia, manifatturiero, servizi professionali, healthcare, fintech. Ogni settore richiede approcci commerciali specifici che conosciamo bene."
          },
          {
            question: "Quali risultati garantite?",
            answer: "Non garantiamo risultati ma li misuriamo: i nostri clienti vedono mediamente crescita vendite 30-50%, aumento pipeline 40-60% e miglioramento conversion rate 25-35% nel primo anno."
          },
          {
            question: "Come misurate le performance?",
            answer: "Utilizziamo KPI specifici: numero lead generati, tasso di conversione, valore medio deal, ciclo di vendita, pipeline value. Report mensili dettagliati con analisi trend e raccomandazioni."
          }
        ])
      ]
    }
  },
  strategicConsulting: {
    title: "Consulenza Strategica Marketing e Vendite | Marco Ferrario",
    description: "Consulenza strategica con Marco Ferrario. Direttore vendite e marketing dedicato per definire strategie vincenti e supervisionare risultati. 25+ anni esperienza.",
    canonical: "https://salesondemand.it/consulenza-strategica",
    ogTitle: "Consulenza Strategica - Direttore Commerciale On Demand",
    ogDescription: "Marco Ferrario come tuo direttore commerciale dedicato. Strategie vincenti e supervisione risultati.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-consulenza-strategica.jpg",
    ogImageWidth: "1200",  
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterTitle: "Consulenza Strategica - Direttore Commerciale On Demand",
    twitterDescription: "Marco Ferrario come tuo direttore commerciale dedicato. Strategie vincenti e supervisione risultati.",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-consulenza-strategica.jpg",
    lang: "it-IT",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Consulenza Strategica",
          description: "Servizi di consulenza strategica per marketing e vendite con direttore dedicato",
          category: "Management Consulting"
        }),
        createFAQSchema([
          {
            question: "Come funziona la consulenza strategica?",
            answer: "La consulenza strategica prevede un'analisi approfondita della situazione aziendale, definizione obiettivi chiari, sviluppo strategia personalizzata e supervisione implementazione con KPI misurabili."
          },
          {
            question: "Quali settori seguite per la consulenza strategica?",
            answer: "Seguiamo PMI e aziende B2B in tutti i settori: tecnologia, manifatturiero, servizi professionali, healthcare, fintech. L'esperienza 25+ anni ci permette di adattarci a qualsiasi mercato."
          },
          {
            question: "Quanto dura un progetto di consulenza strategica?", 
            answer: "I progetti variano da 3 a 12 mesi in base alla complessità. Includiamo sempre milestone intermedie e reportistica mensile per monitorare progressi e risultati."
          },
          {
            question: "Che ROI posso aspettarmi dalla consulenza strategica?",
            answer: "I nostri clienti vedono mediamente crescita vendite 20-40% nel primo anno. Forniamo sempre framework di misurazione chiari con KPI specifici per il tuo settore e obiettivi."
          }
        ])
      ]
    }
  },
  marketingServices: {
    title: "Servizi Marketing Strategico | Marketing Services | Marco Business",
    description: "Servizi marketing strategico completi: lead generation, digital marketing, consulenza strategica. Team esperti dedicati per crescita aziendale misurabile.",
    canonical: "https://salesondemand.it/consulenza-strategica/marketing-services",
    ogTitle: "Marketing Services - Servizi Marketing Strategico Completi",
    ogDescription: "Team marketing dedicato per lead generation, digital strategy e crescita aziendale sostenibile.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-marketing-services.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterTitle: "Marketing Services - Servizi Marketing Strategico",
    twitterDescription: "Team marketing dedicato per lead generation, digital strategy e crescita aziendale sostenibile.",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-marketing-services.jpg",
    lang: "it-IT",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Servizi Marketing Strategico",
          description: "Servizi marketing completi per lead generation, digital strategy e crescita aziendale",
          category: "Strategic Marketing Services"
        }),
        createFAQSchema([
          {
            question: "Che tipo di servizi marketing offrite?",
            answer: "Offriamo servizi marketing completi: lead generation, digital marketing, consulenza strategica, automazioni marketing, gestione campagne e ottimizzazione conversion rate."
          },
          {
            question: "Come misurate il ROI delle campagne marketing?",
            answer: "Utilizziamo KPI specifici: costo per lead, conversion rate, LTV, ROAS. Forniamo dashboard in tempo reale e report mensili dettagliati con analisi performance e raccomandazioni."
          },
          {
            question: "Lavorate con tutti i canali marketing digitali?",
            answer: "Sì, integriamo tutti i principali canali: Google Ads, LinkedIn Ads, Facebook Ads, email marketing, SEO, content marketing, automation e social media marketing."
          },
          {
            question: "Quanto budget pubblicitario è necessario?",
            answer: "Il budget dipende dal settore e dagli obiettivi. Tipicamente consigliamo un minimo di €3.000-5.000/mese per campagne B2B efficaci. Analizziamo il mercato per fornire raccomandazioni specifiche."
          }
        ])
      ]
    }
  },
  consultationServices: {
    title: "Servizi di Consulenza Strategica | Consulenza Business | Marco Business",
    description: "Servizi di consulenza strategica per crescita aziendale. Marketing, vendite, AI e automazioni. Esperti dedicati per trasformare il tuo business.",
    canonical: "https://salesondemand.it/consulenza-strategica/consultation-services",
    ogTitle: "Consulenza Strategica - Servizi Professionali per Crescita Business",
    ogDescription: "Consulenza completa: marketing, vendite, AI e automazioni per accelerare crescita aziendale.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-consultation-services.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterTitle: "Consulenza Strategica - Servizi Business Professionali",
    twitterDescription: "Consulenza completa: marketing, vendite, AI e automazioni per accelerare crescita aziendale.",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-consultation-services.jpg",
    lang: "it-IT",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Servizi di Consulenza Strategica",
          description: "Consulenza strategica completa per marketing, vendite e crescita aziendale",
          category: "Business Consulting Services"
        }),
        createFAQSchema([
          {
            question: "Che tipo di consulenza strategica offrite?",
            answer: "Offriamo consulenza completa per marketing, vendite, AI e automazioni. I nostri consulenti senior definiscono strategie personalizzate e supervisionano l'implementazione con KPI chiari."
          },
          {
            question: "Come strutturate i progetti di consulenza?",
            answer: "Ogni progetto inizia con audit approfondito, seguito da strategia personalizzata, implementazione guidata e monitoraggio risultati. Include milestone mensili e reportistica dettagliata."
          },
          {
            question: "Quali sono i tempi di implementazione?",
            answer: "I progetti variano da 1 a 6 mesi in base alla complessità. Le prime ottimizzazioni sono visibili già nelle prime 2-4 settimane dall'avvio."
          },
          {
            question: "Come garantite il ROI della consulenza?",
            answer: "Ogni consulenza include KPI chiari e misurabili. Forniamo framework di misurazione e scorecard per tracciare i progressi. Il nostro approccio è sempre orientato ai risultati business tangibili."
          }
        ])
      ]
    }
  },
  salesServices: {
    title: "Servizi Vendite Professionali | Sales Services | Marco Business",
    description: "Servizi vendite professionali per crescita aziendale. Team sales dedicato, strategie personalizzate e risultati garantiti. Esperienza 25+ anni.",
    canonical: "https://salesondemand.it/consulenza-strategica/sales-services",
    ogTitle: "Sales Services - Servizi Vendite Professionali per Crescita",
    ogDescription: "Team sales professionale con strategie personalizzate per accelerare vendite e crescita.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-sales-services.jpg",
    ogImageWidth: "1200", 
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterTitle: "Sales Services - Servizi Vendite Professionali",
    twitterDescription: "Team sales professionale con strategie personalizzate per accelerare vendite e crescita.",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-sales-services.jpg",
    lang: "it-IT",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Servizi Vendite Professionali",
          description: "Servizi sales professionali con team dedicato e strategie personalizzate",
          category: "Professional Sales Services"
        }),
        createFAQSchema([
          {
            question: "Come funzionano i vostri servizi vendite?",
            answer: "I nostri sales services includono audit commerciale, ottimizzazione processi di vendita, training team e supporto implementazione. Ogni progetto è personalizzato sui tuoi obiettivi."
          },
          {
            question: "Che risultati posso aspettarmi dal team sales?",
            answer: "I clienti vedono mediamente crescita conversion rate 25-50% e aumento pipeline 30-60% nei primi 3-6 mesi. Forniamo reportistica dettagliata con KPI di performance."
          },
          {
            question: "Lavorate con aziende del mio settore?",
            answer: "Abbiamo esperienza in tutti i settori B2B: tecnologia, manifatturiero, servizi professionali, healthcare, fintech. Il nostro approccio si adatta a qualsiasi mercato e target."
          },
          {
            question: "Offrite supporto post-implementazione?",
            answer: "Sì, includiamo sempre un periodo di supporto per assicurarci che il sistema funzioni perfettamente. Offriamo anche piani di mantenimento per ottimizzazioni continue."
          }
        ])
      ]
    }
  },

  aiServices: {
    title: "Servizi AI e Automazione - Sales on Demand Italia",
    description: "Soluzioni di intelligenza artificiale avanzate per automatizzare marketing e vendite. Chatbot AI, automazioni intelligenti e integrazione AI per il tuo business.",
    canonical: "https://salesondemand.it/ai",
    lang: "it-IT",
    ogTitle: "Servizi AI e Automazione Intelligente | Sales on Demand Italia",
    ogDescription: "Rivoluziona il tuo business con soluzioni AI innovative. Automazioni intelligenti, chatbot avanzati e integrazione AI per marketing e vendite.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-image-ai-services.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterTitle: "Servizi AI e Automazione Intelligente | Sales on Demand Italia",
    twitterDescription: "Rivoluziona il tuo business con soluzioni AI innovative. Automazioni intelligenti, chatbot avanzati e integrazione AI per marketing e vendite.",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-image-ai-services.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Servizi AI e Automazione",
          description: "Soluzioni di intelligenza artificiale per automatizzare processi di marketing e vendite",
          category: "Artificial Intelligence Services"
        }),
        createFAQSchema([
          {
            question: "Che tipo di automazioni AI offrite?",
            answer: "Offriamo chatbot intelligenti, automazione marketing, lead nurturing automatico, integrazione CRM con AI e analytics predittive per ottimizzare performance commerciali."
          },
          {
            question: "Come si integra l'AI con i sistemi esistenti?",
            answer: "Le nostre soluzioni AI si integrano facilmente con CRM, piattaforme email marketing e sistemi aziendali esistenti tramite API sicure e configurazioni personalizzate."
          },
          {
            question: "Quali sono i vantaggi dell'automazione AI?",
            answer: "Riduzione costi operativi fino al 40%, maggiore efficienza con automazione 24/7, miglior customer experience e analytics avanzate per decisioni data-driven."
          },
          {
            question: "Quanto tempo serve per implementare soluzioni AI?",
            answer: "Le prime automazioni sono attive in 2-4 settimane. L'implementazione completa varia da 1-3 mesi secondo complessità e personalizzazioni richieste."
          }
        ])
      ]
    }
  },

  monetizzaYoutube: {
    title: "Monetizzazione YouTube - Servizi Professionali | Sales on Demand",
    description: "Trasforma YouTube in una macchina di vendite. Strategie avanzate per monetizzare canali YouTube, creare contenuti revenue-focused e automatizzare i processi.",
    canonical: "https://salesondemand.it/monetizza-youtube",
    lang: "it-IT",
    ogTitle: "Monetizzazione YouTube Professionale | Sales on Demand Italia",
    ogDescription: "Da zero alla monetizzazione e oltre. Aiutiamo le aziende a creare, far crescere e monetizzare canali YouTube che generano clienti e vendite.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-image-youtube-monetization.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterTitle: "Monetizzazione YouTube Professionale | Sales on Demand Italia",
    twitterDescription: "Da zero alla monetizzazione e oltre. Aiutiamo le aziende a creare, far crescere e monetizzare canali YouTube che generano clienti e vendite.",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-image-youtube-monetization.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Servizi di Monetizzazione YouTube",
          description: "Servizi professionali per monetizzare canali YouTube e trasformarli in macchine di vendite",
          category: "YouTube Marketing Services"
        }),
        createFAQSchema([
          {
            question: "Quanto tempo ci vuole per monetizzare un canale YouTube?",
            answer: "Dipende dal tuo punto di partenza. Alcuni canali raggiungono i requisiti in 30–90 giorni con la giusta strategia di contenuti e ottimizzazione."
          },
          {
            question: "Devo metterci la faccia nei video?",
            answer: "No. Possiamo usare avatar AI, voiceover o video basati su presentazioni per creare contenuti professionali senza che tu appaia in video."
          },
          {
            question: "Gestite voi la creazione dei video?",
            answer: "Sì. Possiamo creare contenuti per te o affiancarti con strumenti, template e AI per semplificare tutto il processo di produzione."
          },
          {
            question: "Posso guadagnare solo dagli annunci YouTube?",
            answer: "No. Oltre alla monetizzazione YouTube, integriamo affiliazioni, vendite dirette e lead generation nei tuoi video per massimizzare i ricavi."
          },
          {
            question: "Funziona anche per aziende B2B?",
            answer: "Assolutamente sì. Un canale YouTube ben strutturato costruisce fiducia e autorevolezza anche in settori tecnici o professionali B2B."
          }
        ])
      ]
    }
  },

  outsourcingSalesforce: {
    title: "Outsourcing Salesforce - Forza Vendite a Noleggio | Sales on Demand",
    description: "La tua forza vendita a noleggio. Team di venditori professionali che lavorano per te con flessibilità, scalabilità e risultati garantiti.",
    canonical: "https://salesondemand.it/outsourcing-salesforce",
    lang: "it-IT",
    ogTitle: "Outsourcing Salesforce Professionale | Sales on Demand Italia",
    ogDescription: "Non solo vendiamo per te, diventiamo il tuo reparto vendite. Outsourcing salesforce con team su misura e performance costanti.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-image-outsourcing-salesforce.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterTitle: "Outsourcing Salesforce Professionale | Sales on Demand Italia",
    twitterDescription: "Non solo vendiamo per te, diventiamo il tuo reparto vendite. Outsourcing salesforce con team su misura e performance costanti.",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-image-outsourcing-salesforce.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Outsourcing Salesforce",
          description: "Servizio di outsourcing per forza vendite con team dedicati e risultati garantiti",
          category: "Sales Outsourcing Services"
        }),
        createFAQSchema([
          {
            question: "Come funziona l'outsourcing salesforce?",
            answer: "Mettiamo a disposizione un team di venditori professionali che lavora esclusivamente per la tua azienda, gestendo l'intero processo commerciale con massima flessibilità."
          },
          {
            question: "Quanto costa avere una forza vendite esternalizzata?",
            answer: "I costi variano in base alle tue esigenze. Offriamo soluzioni flessibili che ti permettono di avere venditori professionali senza i costi fissi di assunzione e formazione."
          },
          {
            question: "In quanto tempo vedo i primi risultati?",
            answer: "I primi risultati sono visibili già nelle prime 2-4 settimane, con un incremento significativo delle vendite entro 60-90 giorni dall'avvio."
          },
          {
            question: "Posso scalare il team in base alle necessità?",
            answer: "Assolutamente sì. La flessibilità è uno dei nostri punti di forza: puoi aumentare o ridurre il team in base ai picchi stagionali o alle esigenze di business."
          }
        ])
      ]
    }
  },

  // AI & Technology Services
  aiIntegration: {
    title: "Integrazione AI | Servizi Intelligenza Artificiale B2B | Sales on Demand",
    description: "Servizi di integrazione AI per aziende B2B. Automazioni intelligenti, chatbot, AI per vendite e marketing. Ottimizza processi e aumenta produttività.",
    canonical: "https://salesondemand.it/ai-integration",
    lang: "it-IT",
    ogTitle: "Integrazione AI - Servizi Intelligenza Artificiale B2B",
    ogDescription: "Integrazione AI per automazioni intelligenti, chatbot e ottimizzazione processi aziendali.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-ai-integration.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterTitle: "Integrazione AI - Servizi Intelligenza Artificiale B2B",
    twitterDescription: "Integrazione AI per automazioni intelligenti, chatbot e ottimizzazione processi aziendali.",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-ai-integration.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Integrazione AI",
          description: "Servizi di integrazione intelligenza artificiale per automazioni e ottimizzazione processi aziendali",
          category: "AI Integration Services"
        }),
        createFAQSchema([
          {
            question: "Che tipo di soluzioni AI implementate?",
            answer: "Implementiamo chatbot intelligenti, automazioni per vendite e marketing, AI per analisi dati, sistemi di raccomandazione e assistenti virtuali personalizzati per il tuo business."
          },
          {
            question: "Come integrate l'AI nei processi esistenti?",
            answer: "Analizziamo i tuoi processi attuali, identifichiamo opportunità di automazione e implementiamo soluzioni AI che si integrano perfettamente con i tuoi sistemi esistenti."
          },
          {
            question: "Quanto tempo richiede l'implementazione AI?",
            answer: "Dipende dalla complessità: chatbot semplici in 2-4 settimane, automazioni avanzate in 6-12 settimane. Include sempre formazione team e supporto post-implementazione."
          },
          {
            question: "Che ROI posso aspettarmi dall'AI?",
            answer: "I nostri clienti vedono mediamente riduzione costi operativi del 20-40%, aumento produttività del 30-50% e miglioramento customer experience del 25-35%."
          }
        ])
      ]
    }
  },

  automazioneAI: {
    title: "Automazione AI | Automazioni Intelligenti Aziendali | Sales on Demand",
    description: "Automazioni AI per processi aziendali. Workflow intelligenti, AI per vendite, marketing automation avanzata. Riduci costi e aumenta efficienza.",
    canonical: "https://salesondemand.it/automazione-ai",
    lang: "it-IT",
    ogTitle: "Automazione AI - Automazioni Intelligenti per Aziende",
    ogDescription: "Workflow intelligenti e automazioni AI per ottimizzare processi aziendali e aumentare produttività.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-automazione-ai.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterTitle: "Automazione AI - Automazioni Intelligenti Aziendali",
    twitterDescription: "Workflow intelligenti e automazioni AI per ottimizzare processi aziendali e aumentare produttività.",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-automazione-ai.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Automazione AI",
          description: "Servizi di automazione con intelligenza artificiale per ottimizzazione processi aziendali",
          category: "AI Automation Services"
        }),
        createFAQSchema([
          {
            question: "Che processi aziendali potete automatizzare con l'AI?",
            answer: "Automatizziamo vendite, marketing, customer service, gestione lead, reportistica, analisi dati, comunicazioni clienti e workflow operativi complessi."
          },
          {
            question: "Come scegliete quali processi automatizzare?",
            answer: "Conduciamo audit dettagliato dei processi esistenti, identifichiamo bottleneck e attività ripetitive, valutiamo ROI potenziale e prioritizziamo implementazioni per massimo impatto."
          },
          {
            question: "Le automazioni AI sostituiscono il personale?",
            answer: "No, le automazioni AI liberano il personale da attività ripetitive permettendo di concentrarsi su compiti strategici e creativi che richiedono competenze umane."
          },
          {
            question: "Che supporto fornite dopo l'implementazione?",
            answer: "Forniamo formazione completa del team, documentazione dettagliata, supporto tecnico continuo e ottimizzazioni periodiche per massimizzare risultati."
          }
        ])
      ]
    }
  },

  chatbotAI: {
    title: "Chatbot AI | Assistenti Virtuali Intelligenti | Sales on Demand",
    description: "Chatbot AI personalizzati per vendite e customer service. Assistenti virtuali 24/7 che qualificano lead, rispondono clienti e aumentano conversioni.",
    canonical: "https://salesondemand.it/chatbot-ai",
    lang: "it-IT",
    ogTitle: "Chatbot AI - Assistenti Virtuali Intelligenti 24/7",
    ogDescription: "Chatbot AI per vendite e customer service. Qualificazione lead automatica e supporto clienti intelligente.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-chatbot-ai.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterTitle: "Chatbot AI - Assistenti Virtuali Intelligenti",
    twitterDescription: "Chatbot AI per vendite e customer service. Qualificazione lead automatica e supporto clienti intelligente.",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-chatbot-ai.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Chatbot AI",
          description: "Chatbot intelligenti e assistenti virtuali per vendite, customer service e supporto clienti 24/7",
          category: "AI Chatbot Services"
        }),
        createFAQSchema([
          {
            question: "Che funzioni hanno i vostri chatbot AI?",
            answer: "I nostri chatbot qualificano lead, rispondono domande frequenti, prenotano appuntamenti, forniscono supporto tecnico, guidano acquisti e trasferiscono conversazioni complesse al team umano."
          },
          {
            question: "Come addestrate i chatbot per il nostro business?",
            answer: "Analizziamo le vostre FAQ, conversazioni clienti storiche, prodotti/servizi e processi. Addestriamo il chatbot con dati specifici del vostro settore e linguaggio aziendale."
          },
          {
            question: "I chatbot AI sostituiscono l'assistenza umana?",
            answer: "No, i chatbot gestiscono richieste semplici e ripetitive 24/7, mentre trasferiscono conversazioni complesse al team umano. Migliorano l'efficienza senza sostituire l'elemento umano."
          },
          {
            question: "Che risultati posso aspettarmi dal chatbot AI?",
            answer: "I clienti vedono tipicamente aumento lead qualificati del 40-60%, riduzione tempi risposta del 90%, miglioramento customer satisfaction del 25-40% e riduzione costi supporto del 30-50%."
          }
        ])
      ]
    }
  },

  smartAITools: {
    title: "Smart AI Tools | Strumenti AI Intelligenti Aziendali | Sales on Demand",
    description: "Strumenti AI personalizzati per aziende. Tool intelligenti per analisi dati, automazioni, reportistica e ottimizzazione processi business.",
    canonical: "https://salesondemand.it/smart-ai-tools",
    lang: "it-IT",
    ogTitle: "Smart AI Tools - Strumenti Intelligenti Personalizzati",
    ogDescription: "Tool AI su misura per analisi dati, automazioni e ottimizzazione processi aziendali.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-smart-ai-tools.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterTitle: "Smart AI Tools - Strumenti AI Intelligenti",
    twitterDescription: "Tool AI su misura per analisi dati, automazioni e ottimizzazione processi aziendali.",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-smart-ai-tools.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Smart AI Tools",
          description: "Sviluppo strumenti AI personalizzati per automazioni, analisi dati e ottimizzazione processi",
          category: "AI Tools Development"
        }),
        createFAQSchema([
          {
            question: "Che tipo di strumenti AI sviluppate?",
            answer: "Sviluppiamo dashboard intelligenti, tool di analisi predittiva, automazioni workflow, sistemi di raccomandazione, strumenti di reportistica avanzata e AI assistant personalizzati."
          },
          {
            question: "Come identificate quali strumenti AI servono?",
            answer: "Conduciamo analisi approfondita dei vostri processi, interviste con stakeholder chiave, mapping workflow esistenti e identifichiamo opportunità di ottimizzazione con AI."
          },
          {
            question: "I tool AI si integrano con i nostri sistemi?",
            answer: "Sì, sviluppiamo tool che si integrano perfettamente con CRM, ERP, database esistenti e altri software aziendali tramite API e connettori personalizzati."
          },
          {
            question: "Che supporto offrite per gli strumenti sviluppati?",
            answer: "Forniamo formazione completa, documentazione dettagliata, supporto tecnico continuo, aggiornamenti regolari e ottimizzazioni basate sui feedback d'uso."
          }
        ])
      ]
    }
  },

  instantAvatar: {
    title: "Instant Avatar AI | Avatar Digitali Personalizzati | Sales on Demand",
    description: "Crea avatar digitali AI personalizzati per presentazioni, video marketing e comunicazione aziendale. Tecnologia avanzata per presenza digitale professionale.",
    canonical: "https://salesondemand.it/instant-avatar",
    lang: "it-IT",
    ogTitle: "Instant Avatar AI - Avatar Digitali Professionali",
    ogDescription: "Avatar AI personalizzati per video marketing, presentazioni e comunicazione aziendale professionale.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-instant-avatar.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterTitle: "Instant Avatar AI - Avatar Digitali Personalizzati",
    twitterDescription: "Avatar AI personalizzati per video marketing, presentazioni e comunicazione aziendale professionale.",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-instant-avatar.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Instant Avatar AI",
          description: "Creazione avatar digitali AI personalizzati per comunicazione e marketing aziendale",
          category: "AI Avatar Creation Services"
        }),
        createFAQSchema([
          {
            question: "Come funzionano gli avatar AI personalizzati?",
            answer: "Utilizziamo tecnologia AI avanzata per creare avatar digitali realistici che replicano aspetto, voce e movimenti. Perfetti per video marketing, presentazioni e comunicazione aziendale."
          },
          {
            question: "Che utilizzi hanno gli avatar digitali?",
            answer: "Gli avatar sono perfetti per video marketing, presentazioni aziendali, formazione online, comunicazioni interne, social media e customer service digitale."
          },
          {
            question: "Quanto tempo serve per creare un avatar?",
            answer: "La creazione richiede 3-7 giorni lavorativi. Include sessione di registrazione, processing AI, personalizzazioni e consegna con istruzioni d'uso complete."
          },
          {
            question: "Posso modificare l'avatar dopo la creazione?",
            answer: "Sì, offriamo servizi di modifica e aggiornamento. Puoi cambiare outfit, background, aggiungere nuovi script vocali e personalizzare movimenti e espressioni."
          }
        ])
      ]
    }
  },

  // Technology Platform Services
  saasPlatforms: {
    title: "Piattaforme SaaS | Sviluppo Software as a Service | Sales on Demand",
    description: "Sviluppo piattaforme SaaS personalizzate. Software cloud scalabili per automazioni, CRM, gestione clienti e processi aziendali B2B.",
    canonical: "https://salesondemand.it/saas-platforms",
    lang: "it-IT",
    ogTitle: "Piattaforme SaaS - Sviluppo Software as a Service",
    ogDescription: "Sviluppo SaaS personalizzati: CRM, automazioni, gestione clienti e software cloud scalabili per aziende B2B.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-saas-platforms.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterTitle: "Piattaforme SaaS - Sviluppo Software Cloud",
    twitterDescription: "Sviluppo SaaS personalizzati: CRM, automazioni, gestione clienti e software cloud scalabili per aziende B2B.",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-saas-platforms.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Piattaforme SaaS",
          description: "Sviluppo piattaforme Software as a Service personalizzate per automazioni e gestione processi aziendali",
          category: "SaaS Development Services"
        }),
        createFAQSchema([
          {
            question: "Che tipo di piattaforme SaaS sviluppate?",
            answer: "Sviluppiamo CRM personalizzati, piattaforme di automazione marketing, software gestione progetti, sistemi di reportistica, tool di analisi dati e dashboard aziendali."
          },
          {
            question: "Come garantite scalabilità delle piattaforme SaaS?",
            answer: "Utilizziamo architetture cloud native, microservizi, database scalabili e CDN globali. Le piattaforme crescono automaticamente con il tuo business senza limiti tecnici."
          },
          {
            question: "Che livello di personalizzazione offrite?",
            answer: "Offriamo personalizzazione completa: UI/UX su misura, workflow personalizzati, integrazioni API, branding aziendale e funzionalità specifiche per il tuo settore."
          },
          {
            question: "Come gestite sicurezza e compliance?",
            answer: "Implementiamo sicurezza enterprise-grade: crittografia end-to-end, backup automatici, conformità GDPR, auditing completo e monitoraggio 24/7 per massima protezione dati."
          }
        ])
      ]
    }
  },

  webAppDevelopment: {
    title: "Sviluppo Web App | Applicazioni Web Aziendali | Sales on Demand",
    description: "Sviluppo web app personalizzate per aziende B2B. Applicazioni web scalabili, responsive e integrate con i tuoi sistemi esistenti.",
    canonical: "https://salesondemand.it/web-app-development",
    lang: "it-IT",
    ogTitle: "Sviluppo Web App - Applicazioni Web Professionali",
    ogDescription: "Web app personalizzate scalabili e responsive per ottimizzare processi aziendali e migliorare produttività.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-web-app-development.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterTitle: "Sviluppo Web App - Applicazioni Web Aziendali",
    twitterDescription: "Web app personalizzate scalabili e responsive per ottimizzare processi aziendali e migliorare produttività.",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-web-app-development.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Sviluppo Web App",
          description: "Sviluppo applicazioni web personalizzate per ottimizzazione processi aziendali e automazioni",
          category: "Web Application Development"
        }),
        createFAQSchema([
          {
            question: "Che tipo di web app sviluppate?",
            answer: "Sviluppiamo CRM personalizzati, dashboard di controllo, piattaforme e-commerce B2B, sistemi di gestione documenti, applicazioni di reportistica e tool di automazione workflow."
          },
          {
            question: "Come garantite performance delle web app?",
            answer: "Utilizziamo tecnologie moderne, ottimizzazione codice, caching intelligente, CDN e monitoraggio performance continuo. Le app sono veloci, responsive e scalabili."
          },
          {
            question: "Le web app si integrano con sistemi esistenti?",
            answer: "Sì, sviluppiamo API personalizzate e connettori per integrare perfettamente con CRM, ERP, database e software esistenti. Garantiamo sincronizzazione dati in tempo reale."
          },
          {
            question: "Che supporto offrite post-sviluppo?",
            answer: "Forniamo manutenzione continua, aggiornamenti di sicurezza, backup automatici, supporto tecnico 24/7, ottimizzazioni performance e nuove funzionalità su richiesta."
          }
        ])
      ]
    }
  },

  // Business & Marketing Services  
  about: {
    title: "Chi Siamo | Team Sales on Demand | Marco Ferrario",
    description: "Scopri il team Sales on Demand e Marco Ferrario. 25+ anni esperienza, 500+ clienti serviti. Il team di esperti che fa crescere le vendite aziendali.",
    canonical: "https://salesondemand.it/about",
    lang: "it-IT",
    ogTitle: "Chi Siamo - Team Sales on Demand e Marco Ferrario",
    ogDescription: "Team di esperti con 25+ anni esperienza in vendite e marketing B2B. 500+ clienti serviti con successo.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-about.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterTitle: "Chi Siamo - Team Sales on Demand",
    twitterDescription: "Team di esperti con 25+ anni esperienza in vendite e marketing B2B. 500+ clienti serviti con successo.",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-about.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createPersonSchema({
          name: "Marco Ferrario",
          jobTitle: "Founder & CEO",
          description: "Imprenditore seriale con 25+ anni esperienza in vendite e marketing B2B. Fondatore di Sales on Demand, azienda leader nell'outsourcing commerciale.",
          image: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/marco-ferrario.jpg"
        }),
        createBreadcrumbSchema([
          { name: "Home", url: "https://salesondemand.it" },
          { name: "Chi Siamo", url: "https://salesondemand.it/about" }
        ])
      ]
    }
  },

  marcoFerrario: {
    title: "Marco Ferrario | Founder Sales on Demand | Esperto Vendite B2B",
    description: "Marco Ferrario, founder Sales on Demand. 25+ anni esperienza vendite B2B, 500+ aziende aiutate. Consulente strategico e speaker riconosciuto.",
    canonical: "https://salesondemand.it/marco-ferrario",
    lang: "it-IT",
    ogTitle: "Marco Ferrario - Founder Sales on Demand | Esperto B2B",
    ogDescription: "Imprenditore seriale, founder Sales on Demand. 25+ anni esperienza vendite B2B e consulenza strategica.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-marco-ferrario.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterTitle: "Marco Ferrario - Founder Sales on Demand",
    twitterDescription: "Imprenditore seriale, founder Sales on Demand. 25+ anni esperienza vendite B2B e consulenza strategica.",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-marco-ferrario.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createPersonSchema({
          name: "Marco Ferrario",
          jobTitle: "Founder & CEO di Sales on Demand",
          description: "Imprenditore seriale con 25+ anni di esperienza in vendite e marketing B2B. Ha aiutato oltre 500 aziende a crescere attraverso strategie commerciali innovative.",
          image: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/marco-ferrario.jpg"
        }),
        createOrganizationSchema(),
        createBreadcrumbSchema([
          { name: "Home", url: "https://salesondemand.it" },
          { name: "Marco Ferrario", url: "https://salesondemand.it/marco-ferrario" }
        ])
      ]
    }
  },

  contact: {
    title: "Contatti | Sales on Demand Italia | Richiedi Consulenza Gratuita",
    description: "Contatta Sales on Demand per consulenza gratuita. Team vendita esterno, marketing B2B e consulenza strategica. Chiamaci: +39-02-8295-9857",
    canonical: "https://salesondemand.it/contact",
    lang: "it-IT",
    ogTitle: "Contatti - Sales on Demand Italia | Consulenza Gratuita",
    ogDescription: "Richiedi consulenza gratuita per team vendita esterno e marketing B2B. Chiamaci subito: +39-02-8295-9857",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-contact.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterTitle: "Contatti Sales on Demand - Consulenza Gratuita",
    twitterDescription: "Richiedi consulenza gratuita per team vendita esterno e marketing B2B. Chiamaci subito: +39-02-8295-9857",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-contact.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createLocalBusinessSchema(),
        createBreadcrumbSchema([
          { name: "Home", url: "https://salesondemand.it" },
          { name: "Contatti", url: "https://salesondemand.it/contact" }
        ])
      ]
    }
  },

  // Specialized Services
  auditVendite: {
    title: "Audit Vendite | Analisi Processo Commerciale | Sales on Demand",
    description: "Audit completo del processo vendite. Analizziamo pipeline, conversion rate, team performance. Identifichiamo opportunità per aumentare risultati.",
    canonical: "https://salesondemand.it/audit-vendite",
    lang: "it-IT",
    ogTitle: "Audit Vendite - Analisi Completa Processo Commerciale",
    ogDescription: "Audit vendite professionale per identificare colli di bottiglia e ottimizzare performance commerciali.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-audit-vendite.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterTitle: "Audit Vendite - Analisi Processo Commerciale",
    twitterDescription: "Audit vendite professionale per identificare colli di bottiglia e ottimizzare performance commerciali.",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-audit-vendite.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Audit Vendite",
          description: "Analisi completa del processo commerciale per identificare opportunità di miglioramento",
          category: "Sales Audit Services"
        }),
        createFAQSchema([
          {
            question: "Cosa include l'audit vendite?",
            answer: "L'audit include analisi pipeline, conversion rate, performance team, processi lead generation, strumenti utilizzati, metodologie vendita e benchmark settoriali."
          },
          {
            question: "Quanto dura l'audit del processo vendite?",
            answer: "L'audit completo richiede 2-4 settimane, include interviste con team, analisi dati storici, osservazione processi e report dettagliato con raccomandazioni specifiche."
          },
          {
            question: "Che risultati posso aspettarmi dall'audit?",
            answer: "Otterrai roadmap chiara per migliorare performance, identificazione colli di bottiglia, benchmark settoriali, priorità di intervento e stima ROI potenziale."
          }
        ])
      ]
    }
  },

  outsourcingMarketing: {
    title: "Outsourcing Marketing | Marketing Esterno B2B | Sales on Demand",
    description: "Outsourcing marketing completo per aziende B2B. Team marketing dedicato, lead generation, digital strategy e gestione campagne con risultati misurabili.",
    canonical: "https://salesondemand.it/outsourcing-marketing",
    lang: "it-IT",
    ogTitle: "Outsourcing Marketing - Team Marketing Esterno B2B",
    ogDescription: "Team marketing dedicato per lead generation, digital strategy e campagne B2B con risultati garantiti.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-outsourcing-marketing.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterTitle: "Outsourcing Marketing - Team Marketing B2B",
    twitterDescription: "Team marketing dedicato per lead generation, digital strategy e campagne B2B con risultati garantiti.",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-outsourcing-marketing.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Outsourcing Marketing",
          description: "Servizio completo di outsourcing marketing per aziende B2B con team dedicato",
          category: "Marketing Outsourcing Services"
        }),
        createFAQSchema([
          {
            question: "Cosa include l'outsourcing marketing?",
            answer: "Include strategia marketing, lead generation, digital marketing, gestione campagne, content creation, automation, analisi performance e reportistica dettagliata."
          },
          {
            question: "Come strutturate il team marketing esterno?",
            answer: "Assegniamo team dedicato con marketing manager, specialist digital, content creator, data analyst. Team scalabile in base alle esigenze e obiettivi aziendali."
          },
          {
            question: "Che canali marketing utilizzate?",
            answer: "Utilizziamo tutti i canali B2B: LinkedIn Ads, Google Ads, email marketing, content marketing, SEO, social media, automation e marketing diretto integrato."
          }
        ])
      ]
    }
  },

  contactCenterInbound: {
    title: "Contact Center Inbound | Customer Service Outsourcing | Sales on Demand",
    description: "Contact center inbound professionale. Customer service outsourcing, supporto clienti 24/7, gestione chiamate e lead qualification con operatori esperti.",
    canonical: "https://salesondemand.it/contact-center-inbound",
    lang: "it-IT",
    ogTitle: "Contact Center Inbound - Customer Service Professionale",
    ogDescription: "Contact center inbound con operatori esperti per customer service, supporto clienti e lead qualification 24/7.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-contact-center.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterTitle: "Contact Center Inbound - Customer Service",
    twitterDescription: "Contact center inbound con operatori esperti per customer service, supporto clienti e lead qualification 24/7.",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-contact-center.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Contact Center Inbound",
          description: "Servizi di contact center inbound per customer service e supporto clienti professionale",
          category: "Contact Center Services"
        }),
        createFAQSchema([
          {
            question: "Che servizi include il contact center inbound?",
            answer: "Include customer service, supporto tecnico, lead qualification, gestione reclami, prenotazione appuntamenti, up-selling e cross-selling con operatori formati."
          },
          {
            question: "Gli operatori sono formati sul nostro business?",
            answer: "Sì, tutti gli operatori ricevono formazione specifica su prodotti, servizi, processi aziendali e tone of voice. Diventano parte integrante del vostro team."
          },
          {
            question: "Che orari di copertura offrite?",
            answer: "Offriamo copertura flessibile: orario ufficio, esteso fino alle 21:00, weekend e 24/7. Adattiamo gli orari alle esigenze del vostro business e clientela."
          }
        ])
      ]
    }
  },

  telemarketingTeleselling: {
    title: "Telemarketing e Teleselling | Vendite Telefoniche B2B | Sales on Demand",
    description: "Telemarketing e teleselling professionale per aziende B2B. Prospect generation, lead qualification, vendite telefoniche con operatori esperti e risultati misurabili.",
    canonical: "https://salesondemand.it/telemarketing-teleselling",
    lang: "it-IT",
    ogTitle: "Telemarketing e Teleselling - Vendite Telefoniche B2B",
    ogDescription: "Telemarketing professionale per prospect generation, lead qualification e vendite telefoniche B2B efficaci.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-telemarketing.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterTitle: "Telemarketing e Teleselling B2B Professionale",
    twitterDescription: "Telemarketing professionale per prospect generation, lead qualification e vendite telefoniche B2B efficaci.",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-telemarketing.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Telemarketing e Teleselling",
          description: "Servizi di telemarketing e teleselling per prospect generation e vendite telefoniche B2B",
          category: "Telemarketing Services"
        }),
        createFAQSchema([
          {
            question: "Che tipo di attività di telemarketing svolgete?",
            answer: "Svolgiamo prospect generation, lead qualification, appointment setting, follow-up commerciali, teleselling, customer care e indagini di mercato con script personalizzati."
          },
          {
            question: "Come selezionate e formate i teleoperatori?",
            answer: "Selezioniamo operatori con esperienza B2B, ottima dialettica e orientamento al risultato. Formazione intensiva su prodotti, script, obiezioni e tecniche di vendita."
          },
          {
            question: "Che risultati posso aspettarmi dal telemarketing?",
            answer: "Mediamente generiamo 15-25 lead qualificati per operatore/giorno, con conversion rate 2-5% a seconda del settore. Include report dettagliati e analisi performance."
          }
        ])
      ]
    }
  },

  // Monetization & Books

  salesAsAServiceBook: {
    title: "Sales as a Service Libro | Marco Ferrario | Strategia Vendite B2B",
    description: "Libro 'Sales as a Service' di Marco Ferrario. Strategia vendite B2B, outsourcing commerciale, metodi testati per crescita aziendale sostenibile.",
    canonical: "https://salesondemand.it/sales-as-a-service-book",
    lang: "it-IT",
    ogTitle: "Sales as a Service - Libro Marco Ferrario | Strategia B2B",
    ogDescription: "Il libro di Marco Ferrario su outsourcing commerciale e strategie vendite B2B per crescita aziendale.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-sales-book.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterTitle: "Sales as a Service Libro - Marco Ferrario",
    twitterDescription: "Il libro di Marco Ferrario su outsourcing commerciale e strategie vendite B2B per crescita aziendale.",
    twitterImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-sales-book.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Book",
          "name": "Sales as a Service",
          "author": {
            "@type": "Person",
            "name": "Marco Ferrario"
          },
          "description": "Guida completa all'outsourcing commerciale e strategie vendite B2B per crescita aziendale sostenibile",
          "publisher": createOrganizationSchema(),
          "genre": "Business & Management"
        },
        createPersonSchema({
          name: "Marco Ferrario",
          jobTitle: "Autore e CEO Sales on Demand",
          description: "Autore del libro 'Sales as a Service' e founder di Sales on Demand con 25+ anni esperienza vendite B2B",
          image: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/marco-ferrario.jpg"
        }),
        createOrganizationSchema()
      ]
    }
  },

  // Legal & System Pages
  quizResult: {
    title: "Risultato Quiz | Strategia Personalizzata | Sales on Demand",
    description: "Risultato del quiz personalizzato. Strategia commerciale su misura per la tua azienda basata sulle risposte fornite e analisi settoriale.",
    canonical: "https://salesondemand.it/quiz-result",
    lang: "it-IT",
    ogTitle: "Risultato Quiz - Strategia Commerciale Personalizzata",
    ogDescription: "Strategia commerciale su misura basata sul quiz completato e analisi specifica del tuo business.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-quiz-result.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    noIndex: true
  },

  termsOfService: {
    title: "Termini di Servizio | Sales on Demand Italia",
    description: "Termini e condizioni di utilizzo dei servizi Sales on Demand. Condizioni legali, diritti, responsabilità e modalità di utilizzo dei nostri servizi.",
    canonical: "https://salesondemand.it/terms-of-service",
    lang: "it-IT",
    ogTitle: "Termini di Servizio - Sales on Demand Italia",
    ogDescription: "Termini e condizioni legali per l'utilizzo dei servizi Sales on Demand Italia.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-terms.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    noIndex: true
  },

  notFound: {
    title: "Pagina Non Trovata | 404 | Sales on Demand Italia",
    description: "La pagina che stai cercando non esiste. Torna alla homepage di Sales on Demand per scoprire tutti i nostri servizi di vendite e marketing B2B.",
    canonical: "https://salesondemand.it/404",
    lang: "it-IT",
    ogTitle: "Pagina Non Trovata - Sales on Demand Italia",
    ogDescription: "La pagina richiesta non è stata trovata. Scopri tutti i servizi Sales on Demand per far crescere la tua azienda.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-404.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    noIndex: true
  }
};