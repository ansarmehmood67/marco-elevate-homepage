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
  }
};