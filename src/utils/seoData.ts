import { SEOData } from '@/components/SEO/SEOHead';

export const createOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Marco Business Consulting",
  "alternateName": "Sales On Demand",
  "url": "https://marco-business.com",
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
  "url": "https://marco-business.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://marco-business.com/search?q={search_term_string}",
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
  "url": "https://marco-business.com",
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

export const seoPages: Record<string, SEOData> = {
  homepage: {
    title: "Sales On Demand | Outsourcing Vendite e Marketing | Marco Business",
    description: "Esternalizza il reparto commerciale con Sales On Demand. Team dedicato per vendite, marketing e crescita aziendale. 25+ anni esperienza, 500+ clienti. Inizia subito.",
    keywords: "outsourcing vendite, sales on demand, consulenza strategica, marketing outsourcing, direttore commerciale, venditori a noleggio",
    ogTitle: "Sales On Demand - Il tuo reparto vendite in outsourcing",
    ogDescription: "Team commerciale dedicato che lavora come fosse interno alla tua azienda. Strategia, vendite e fatturato garantiti.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-homepage.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createWebSiteSchema()
      ]
    }
  },
  salesOnDemand: {
    title: "Sales On Demand - Outsourcing Forza Vendita Professionale | Marco",
    description: "Venditori professionali a noleggio per la tua azienda. Sales On Demand: team commerciale dedicato, risultati garantiti, crescita scalabile. Scopri il servizio.",
    keywords: "sales on demand, outsourcing forza vendita, venditori a noleggio, team commerciale, outsourcing salesforce",
    ogTitle: "Sales On Demand - Venditori Professionali a Noleggio",
    ogDescription: "Un team commerciale completo che lavora per la tua azienda. Risultati immediati e crescita scalabile.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-sales-on-demand.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Sales On Demand",
          description: "Servizio completo di outsourcing forza vendita con venditori professionali a noleggio",
          category: "Business Consulting"
        }),
        createBreadcrumbSchema([
          { name: "Home", url: "https://marco-business.com" },
          { name: "Sales On Demand", url: "https://marco-business.com/sales-on-demand" }
        ])
      ]
    }
  },
  consulenzaStrategica: {
    title: "Consulenza Strategica Marketing e Vendite | Marco Ferrario",
    description: "Consulenza strategica con Marco Ferrario. Direttore vendite e marketing dedicato per definire strategie vincenti e supervisionare risultati. 25+ anni esperienza.",
    keywords: "consulenza strategica, consulente marketing, direttore commerciale, strategia vendite, marco ferrario",
    ogTitle: "Consulenza Strategica - Direttore Commerciale On Demand",
    ogDescription: "Marco Ferrario come tuo direttore commerciale dedicato. Strategie vincenti e supervisione risultati.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-consulenza-strategica.jpg",
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
  aiServices: {
    title: "Automazioni AI per Vendite e Marketing | Intelligenza Artificiale Business",
    description: "Automazioni AI per vendite e marketing: chatbot intelligenti, follow-up automatizzati, CRM integrato. Trasforma contatti in clienti con l'intelligenza artificiale.",
    keywords: "automazione ai vendite, intelligenza artificiale marketing, chatbot commerciale, ai crm, automazione follow-up",
    ogTitle: "Automazioni AI - Trasforma il tuo Business con l'AI",
    ogDescription: "Chatbot intelligenti, automazioni CRM e follow-up personalizzati per aumentare le vendite.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-ai-services.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Automazioni AI",
          description: "Servizi di automazione con intelligenza artificiale per vendite e marketing",
          category: "Technology Services"
        })
      ]
    }
  },
  about: {
    title: "Chi Siamo - Marco Business Consulting | 25+ Anni di Esperienza",
    description: "Scopri Marco Business Consulting: 25+ anni di esperienza nell'outsourcing commerciale, 500+ clienti serviti, team di esperti dedicati al tuo successo.",
    keywords: "marco business consulting, chi siamo, outsourcing commerciale, esperienza vendite marketing",
    ogTitle: "Chi Siamo - Marco Business Consulting",
    ogDescription: "25+ anni di esperienza nell'outsourcing commerciale. Scopri il nostro team e la nostra storia.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-about.jpg"
  },
  contact: {
    title: "Contatti - Marco Business Consulting | Consulenza Gratuita",
    description: "Contatta Marco Business Consulting per una consulenza gratuita. Via Brera 8, Milano. Tel: 02 8295 9857. Email: info@salesondemand.it. Rispondiamo entro 2 ore.",
    keywords: "contatti marco business, consulenza gratuita, milano via brera, telefono consulenza",
    ogTitle: "Contatti - Consulenza Gratuita Disponibile",
    ogDescription: "Contattaci per una consulenza gratuita. Siamo a Milano e rispondiamo entro 2 ore.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-contact.jpg",
    structuredData: createLocalBusinessSchema()
  },
  outsourcingSalesforce: {
    title: "Outsourcing Salesforce CRM | Gestione Clienti Professionale | Marco Business",
    description: "Outsourcing completo per Salesforce CRM: configurazione, automazioni, gestione dati e supporto. Team dedicato per ottimizzare il tuo CRM Salesforce.",
    keywords: "outsourcing salesforce, crm salesforce, gestione salesforce, consulente salesforce crm, automazioni salesforce",
    ogTitle: "Outsourcing Salesforce - CRM Gestito Professionalmente",
    ogDescription: "Team dedicato per gestire il tuo Salesforce CRM: configurazione, automazioni e ottimizzazione completa.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-salesforce.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Outsourcing Salesforce",
          description: "Outsourcing completo per gestione e ottimizzazione Salesforce CRM",
          category: "Technology Services"
        })
      ]
    }
  },
  telemarketingTeleselling: {
    title: "Telemarketing e Teleselling Professionale | Vendite Telefoniche | Marco Business",
    description: "Servizi di telemarketing e teleselling professionale per aumentare le vendite. Team dedicato per contatti qualificati e closing telefonico efficace.",
    keywords: "telemarketing professionale, teleselling, vendite telefoniche, call center vendite, lead generation telefonica",
    ogTitle: "Telemarketing & Teleselling - Vendite Telefoniche Efficaci",
    ogDescription: "Team specializzato in telemarketing e teleselling per aumentare le tue vendite con contatti qualificati.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-telemarketing.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Telemarketing e Teleselling",
          description: "Servizi professionali di telemarketing e teleselling per crescita vendite",
          category: "Sales Services"
        })
      ]
    }
  },
  contactCenterInbound: {
    title: "Contact Center Inbound | Customer Service Professionale | Marco Business",
    description: "Contact center inbound per customer service e supporto clienti. Team qualificato per gestire chiamate in entrata e assistenza professionale.",
    keywords: "contact center inbound, customer service, assistenza clienti, call center inbound, supporto telefonico",
    ogTitle: "Contact Center Inbound - Customer Service Professionale",
    ogDescription: "Contact center specializzato in chiamate inbound per assistenza clienti e customer service di qualità.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-contact-center.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Contact Center Inbound",
          description: "Servizi professionali di contact center per customer service e assistenza clienti",
          category: "Customer Service"
        })
      ]
    }
  },
  marcoFerrario: {
    title: "Marco Ferrario | Direttore Commerciale e Marketing On Demand",
    description: "Marco Ferrario: 25+ anni di esperienza come direttore commerciale e marketing. Consulenza strategica personalizzata per accelerare la crescita del tuo business.",
    keywords: "marco ferrario, direttore commerciale, consulente marketing, strategia vendite, outsourcing direttore commerciale",
    ogTitle: "Marco Ferrario - Il Tuo Direttore Commerciale On Demand",
    ogDescription: "25+ anni di esperienza in vendite e marketing. Marco Ferrario come tuo direttore commerciale dedicato.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-marco-ferrario.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Marco Ferrario",
      "jobTitle": "Direttore Commerciale e Marketing",
      "worksFor": {
        "@type": "Organization",
        "name": "Marco Business Consulting"
      },
      "description": "Esperto in outsourcing commerciale con 25+ anni di esperienza in vendite e marketing strategico",
      "url": "https://marco-business.com/marco-ferrario",
      "image": "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758195422/Untitled_design_79_ujzoze.png",
      "sameAs": [
        "https://www.linkedin.com/in/marco-ferrario"
      ]
    }
  },
  consultationServices: {
    title: "Consulenza Strategica Vendite e Marketing | Marco Business Consulting",
    description: "Consulenza strategica personalizzata per accelerare vendite e marketing. Strategie su misura, analisi competitiva e implementazione guidata per crescita aziendale.",
    keywords: "consulenza strategica, consulente vendite, strategia marketing, crescita aziendale, outsourcing consulenza",
    ogTitle: "Consulenza Strategica - Crescita Aziendale Guidata",
    ogDescription: "Strategie personalizzate per vendite e marketing con consulenza esperta dedicata.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-consultation.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Consulenza Strategica",
          description: "Consulenza strategica personalizzata per vendite e marketing aziendale",
          category: "Management Consulting"
        })
      ]
    }
  },
  marketingServices: {
    title: "Servizi Marketing Professionale | Outsourcing Marketing | Marco Business",
    description: "Servizi marketing completi in outsourcing: strategia digitale, lead generation, content marketing, automazioni. Team dedicato per crescita e ROI garantito.",
    keywords: "servizi marketing, outsourcing marketing, marketing digitale, lead generation, content marketing, automazioni marketing",
    ogTitle: "Servizi Marketing - Outsourcing Marketing Professionale",
    ogDescription: "Team marketing dedicato per strategia digitale, lead generation e crescita aziendale.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-marketing.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Servizi Marketing",
          description: "Servizi completi di marketing in outsourcing per crescita aziendale",
          category: "Marketing Services"
        })
      ]
    }
  },
  salesServices: {
    title: "Servizi Vendite Professionali | Outsourcing Vendite | Marco Business",
    description: "Servizi vendite completi in outsourcing: team commerciale dedicato, lead qualification, closing, CRM management. Risultati garantiti e crescita scalabile.",
    keywords: "servizi vendite, outsourcing vendite, team commerciale, lead qualification, closing vendite, crm management",
    ogTitle: "Servizi Vendite - Outsourcing Vendite Professionale",
    ogDescription: "Team vendite dedicato per lead qualification, closing e crescita commerciale garantita.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-sales.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Servizi Vendite",
          description: "Servizi completi di vendite in outsourcing con team commerciale dedicato",
          category: "Sales Services"
        })
      ]
    }
  },
  
  // AI Services Pages
  aiIntegration: {
    title: "Integrazione AI | Potenzia i Tuoi Strumenti Esistenti | Marco Business Consulting",
    description: "Integriamo l'intelligenza artificiale nei tuoi strumenti esistenti. Chatbot AI, automazioni e analisi predittive per trasformare il tuo workflow senza interruzioni.",
    keywords: "integrazione AI, intelligenza artificiale, chatbot personalizzati, automazione AI, strumenti intelligenti, AI aziendale, machine learning",
    ogTitle: "Integrazione AI - Trasforma i Tuoi Strumenti Esistenti",
    ogDescription: "Integriamo AI nei tuoi flussi di lavoro: chatbot, automazioni e motori predittivi per rendere i tuoi strumenti più intelligenti.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/ai-integration-og.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Integrazione AI",
          description: "Servizi di integrazione intelligenza artificiale per ottimizzare processi aziendali esistenti",
          category: "AI Services"
        }),
        createWebSiteSchema()
      ]
    }
  },

  automazioneAI: {
    title: "Automazione AI | Sistemi Intelligenti per l'Efficienza | Marco Business Consulting",
    description: "Automatizziamo i tuoi processi aziendali con l'intelligenza artificiale. Riduci tempi, costi ed errori con soluzioni AI personalizzate e scalabili.",
    keywords: "automazione AI, processi automatizzati, intelligenza artificiale, workflow automation, efficienza aziendale, AI business",
    ogTitle: "Automazione AI - Processi Aziendali Intelligenti",
    ogDescription: "Automatizza processi ripetitivi con AI. Sistemi intelligenti che riducono tempi, costi e aumentano l'efficienza operativa.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/automazione-ai-og.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Automazione AI",
          description: "Soluzioni di automazione intelligente per processi aziendali efficaci e scalabili",
          category: "AI Services"
        }),
        createWebSiteSchema()
      ]
    }
  },

  chatbotAI: {
    title: "Chatbot AI | Assistenti Virtuali Intelligenti 24/7 | Marco Business Consulting",
    description: "Chatbot AI personalizzati per customer service, lead generation e vendite. Assistenti virtuali che comprendono, rispondono e convertono 24 ore al giorno.",
    keywords: "chatbot AI, assistente virtuale, intelligenza artificiale conversazionale, customer service automation, lead qualification AI",
    ogTitle: "Chatbot AI - Il Tuo Miglior Collaboratore è Attivo 24/7",
    ogDescription: "Chatbot AI che accolgono, assistono e convertono clienti. Conversazioni intelligenti per supporto e vendite automatiche.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/chatbot-ai-og.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Chatbot AI",
          description: "Sviluppo di chatbot intelligenti per customer service e lead generation automatizzati",
          category: "AI Services"
        }),
        createWebSiteSchema()
      ]
    }
  },

  instantAvatar: {
    title: "Avatar AI | Presenza Digitale Senza Limiti | Marco Business Consulting",
    description: "Crea avatar AI fotorealistici per video, presentazioni e contenuti. Comunica in qualsiasi lingua senza mai comparire davanti alla telecamera.",
    keywords: "avatar AI, gemello digitale, video AI, avatar fotorealistico, clonazione voce, contenuti video automatici, intelligenza artificiale",
    ogTitle: "Avatar AI - Presente Ovunque Senza Esserci",
    ogDescription: "Avatar digitali che replicano voce, volto ed espressioni. Crea contenuti video personalizzati in ogni lingua automaticamente.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/instant-avatar-og.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Avatar AI",
          description: "Creazione di avatar digitali fotorealistici per contenuti video e presentazioni automatizzate",
          category: "AI Services"
        }),
        createWebSiteSchema()
      ]
    }
  },

  smartAITools: {
    title: "Strumenti AI Personalizzati | Dashboard e Automazioni su Misura | Marco Business Consulting",
    description: "Costruiamo strumenti AI personalizzati per il tuo team: dashboard interne, pannelli di automazione e assistenti intelligenti che lavorano come membri del team.",
    keywords: "strumenti AI personalizzati, dashboard intelligenti, automazione interna, AI tools, piattaforme su misura, business intelligence AI",
    ogTitle: "Strumenti AI Personalizzati - Tecnologia che Lavora per Te",
    ogDescription: "Strumenti AI su misura per il tuo business. Dashboard, automazioni e assistenti che sostituiscono ore di lavoro manuale.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/smart-ai-tools-og.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Strumenti AI Personalizzati",
          description: "Sviluppo di strumenti e dashboard AI personalizzati per ottimizzazione dei processi aziendali",
          category: "AI Services"
        }),
        createWebSiteSchema()
      ]
    }
  },

  // Development Services
  saasPlatforms: {
    title: "Sviluppo Piattaforme SaaS | Software as a Service su Misura | Marco Business Consulting",
    description: "Costruiamo piattaforme SaaS scalabili e sicure. Dall'MVP al lancio globale, creiamo software che crescono con il tuo business e generano ricavi ricorrenti.",
    keywords: "sviluppo SaaS, piattaforma cloud, software as a service, MVP development, applicazioni scalabili, SaaS personalizzato",
    ogTitle: "Piattaforme SaaS - Software che Scala Automaticamente",
    ogDescription: "Sviluppiamo SaaS su misura dall'idea al lancio. Piattaforme cloud scalabili con AI integrata e architettura enterprise.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/saas-platforms-og.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Sviluppo Piattaforme SaaS",
          description: "Sviluppo di piattaforme Software as a Service scalabili e sicure per business moderni",
          category: "Development Services"
        }),
        createWebSiteSchema()
      ]
    }
  },

  webAppDevelopment: {
    title: "Sviluppo Web App | Applicazioni Web e Mobile Personalizzate | Marco Business Consulting",
    description: "Sviluppiamo web app e app mobile ad alte prestazioni. Soluzioni personalizzate, SEO ottimizzato, performance eccellenti e integrazione AI per la crescita del business.",
    keywords: "sviluppo web app, applicazioni mobile, sviluppo app personalizzate, progressive web app, app native iOS Android",
    ogTitle: "Sviluppo Web & App - Piattaforme per la Crescita",
    ogDescription: "Web app e app mobile personalizzate. Performance ottimali, design professionale e integrazione AI per il tuo business.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/web-app-development-og.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Sviluppo Web & App",
          description: "Sviluppo di applicazioni web e mobile personalizzate ad alte prestazioni per business",
          category: "Development Services"
        }),
        createWebSiteSchema()
      ]
    }
  },

  // Marketing Services
  outsourcingMarketing: {
    title: "Marketing in Outsourcing | Crescita Senza Costi Fissi | Marco Business Consulting",
    description: "Affida il tuo marketing a specialisti esterni. Riduci i costi fissi, accedi a competenze avanzate e ottieni risultati misurabili con il marketing outsourcing.",
    keywords: "marketing outsourcing, marketing esterno, consulenza marketing, agenzia marketing, crescita business, marketing strategico",
    ogTitle: "Marketing Outsourcing - Supera i Limiti del Team Interno",
    ogDescription: "Marketing strategico in outsourcing. Competenze specialistiche, costi ottimizzati e risultati misurabili per la crescita.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/outsourcing-marketing-og.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Marketing Outsourcing",
          description: "Servizi di marketing strategico in outsourcing per aziende che vogliono crescere senza costi fissi",
          category: "Marketing Services"
        }),
        createWebSiteSchema()
      ]
    }
  },

  monetizzaYoutube: {
    title: "Monetizzazione YouTube | Trasforma Video in Vendite | Marco Business Consulting",
    description: "Monetizza il tuo canale YouTube con strategie avanzate. Dalla creazione alla crescita, trasformiamo ogni visualizzazione in opportunità di business reale.",
    keywords: "monetizzazione YouTube, YouTube marketing, video marketing, crescita canale YouTube, YouTube business, content strategy",
    ogTitle: "Monetizzazione YouTube - Da Zero alla Monetizzazione e Oltre",
    ogDescription: "Strategie avanzate per monetizzare YouTube. Crescita del canale, content strategy e conversione visualizzazioni in vendite.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/monetizza-youtube-og.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Monetizzazione YouTube",
          description: "Servizi completi per monetizzare canali YouTube e trasformare contenuti in revenue streams",
          category: "Marketing Services"
        }),
        createWebSiteSchema()
      ]
    }
  },

  consulenzaMarketing: {
    title: "Consulenza Marketing Strategica | Strategie Personalizzate | Marco Business Consulting",
    description: "Consulenza marketing professionale per far crescere il tuo business. Strategie personalizzate, analisi competitive e piani di crescita data-driven per risultati concreti.",
    keywords: "consulenza marketing, strategia marketing, marketing strategico, consulente marketing, piano marketing, crescita business",
    ogTitle: "Consulenza Marketing - Strategie che Generano Risultati",
    ogDescription: "Consulenza marketing strategica personalizzata. Analisi, strategie e implementazione per far crescere il tuo business.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/consulenza-marketing-og.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Consulenza Marketing",
          description: "Consulenza marketing strategica per crescita business attraverso strategie personalizzate e data-driven",
          category: "Marketing Services"
        }),
        createWebSiteSchema()
      ]
    }
  },

  auditVendite: {
    title: "Audit Vendite Professionale | Marco Business Consulting",
    description: "Scopri i punti deboli del tuo processo di vendita con il nostro audit completo. Analisi dettagliata, strategie personalizzate e risultati misurabili.",
    keywords: "audit vendite, analisi processo vendita, consulenza commerciale, ottimizzazione vendite, strategia vendite, performance commercial",
    ogTitle: "Audit Vendite - Ottimizza il Tuo Processo Commerciale",
    ogDescription: "Audit professionale del tuo processo di vendita. Identifichiamo problemi e opportunità per aumentare le tue conversioni.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/audit-vendite-og.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Audit Vendite",
          description: "Audit completo del processo di vendita per identificare punti di forza e aree di miglioramento",
          category: "Sales Services"
        }),
        createWebSiteSchema()
      ]
    }
  }
};