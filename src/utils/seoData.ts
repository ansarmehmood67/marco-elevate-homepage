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
  }
};