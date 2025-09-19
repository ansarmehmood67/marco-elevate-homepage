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
    canonical: "https://marco-business.com",
    ogTitle: "Sales On Demand - Il tuo reparto vendite in outsourcing",
    ogDescription: "Team commerciale dedicato che lavora come fosse interno alla tua azienda. Strategia, vendite e fatturato garantiti.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-homepage.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
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
    canonical: "https://marco-business.com/sales-on-demand",
    ogTitle: "Sales On Demand - Venditori Professionali a Noleggio",
    ogDescription: "Un team commerciale completo che lavora per la tua azienda. Risultati immediati e crescita scalabile.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-sales-on-demand.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
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
  strategicConsulting: {
    title: "Consulenza Strategica Marketing e Vendite | Marco Ferrario",
    description: "Consulenza strategica con Marco Ferrario. Direttore vendite e marketing dedicato per definire strategie vincenti e supervisionare risultati. 25+ anni esperienza.",
    canonical: "https://marco-business.com/consulenza-strategica",
    ogTitle: "Consulenza Strategica - Direttore Commerciale On Demand",
    ogDescription: "Marco Ferrario come tuo direttore commerciale dedicato. Strategie vincenti e supervisione risultati.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-consulenza-strategica.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
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
  }
};