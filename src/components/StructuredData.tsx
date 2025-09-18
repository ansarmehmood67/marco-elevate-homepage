import React from 'react';

interface StructuredDataProps {
  type?: 'Organization' | 'WebSite' | 'Service' | 'Person';
  data?: any;
}

/**
 * Structured Data component for SEO
 * Adds JSON-LD schema markup for better search visibility
 */
const StructuredData: React.FC<StructuredDataProps> = ({ 
  type = 'Organization',
  data = {}
}) => {
  const getStructuredData = () => {
    const baseUrl = 'https://marco-business.com';
    
    switch (type) {
      case 'Organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Marco Business Consulting",
          "alternateName": "Marco Ferrario Business Consulting",
          "description": "Sales On Demand, Consulenza Strategica e servizi di Outsourcing per far crescere il tuo business con 25+ anni di esperienza.",
          "url": baseUrl,
          "logo": `${baseUrl}/lovable-uploads/logo-dark.png`,
          "image": `${baseUrl}/lovable-uploads/marco-portrait.jpg`,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+39-XXX-XXXXXXX",
            "contactType": "customer service",
            "availableLanguage": ["Italian", "English"]
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IT",
            "addressRegion": "Italy"
          },
          "sameAs": [
            "https://www.linkedin.com/in/marcoferrario",
            "https://www.youtube.com/channel/UCxxxxx"
          ],
          "founder": {
            "@type": "Person",
            "name": "Marco Ferrario",
            "jobTitle": "CEO & Business Consultant",
            "description": "Expert in sales outsourcing and strategic consulting with 25+ years of experience"
          },
          "numberOfEmployees": "10-50",
          "foundingDate": "1999",
          "areaServed": ["IT", "EU"],
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": "45.4642",
              "longitude": "9.1900"
            },
            "geoRadius": "1000"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Business Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Sales On Demand",
                  "description": "Servizio di outsourcing forza vendita professionale"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Consulenza Strategica",
                  "description": "Consulenza strategica per crescita e sviluppo business"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "AI Integration",
                  "description": "Integrazione di intelligenza artificiale nei processi aziendali"
                }
              }
            ]
          },
          ...data
        };

      case 'WebSite':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Marco Business Consulting",
          "url": baseUrl,
          "description": "Esternalizza il reparto commerciale, costruisci strategie di vendita efficaci e automatizza con AI. 25+ anni di esperienza al tuo servizio.",
          "publisher": {
            "@type": "Organization",
            "name": "Marco Business Consulting"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          },
          "inLanguage": "it-IT",
          ...data
        };

      case 'Service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name || "Sales On Demand",
          "description": data.description || "Servizio professionale di outsourcing forza vendita",
          "provider": {
            "@type": "Organization",
            "name": "Marco Business Consulting",
            "url": baseUrl
          },
          "serviceType": "Business Consulting",
          "areaServed": ["IT", "EU"],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Business Services Catalog"
          },
          ...data
        };

      case 'Person':
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Marco Ferrario",
          "jobTitle": "CEO & Business Consultant",
          "description": "Expert in sales outsourcing and strategic consulting with 25+ years of experience",
          "image": `${baseUrl}/lovable-uploads/marco-portrait.jpg`,
          "worksFor": {
            "@type": "Organization",
            "name": "Marco Business Consulting"
          },
          "url": `${baseUrl}/about`,
          "sameAs": [
            "https://www.linkedin.com/in/marcoferrario"
          ],
          "knowsAbout": [
            "Sales Outsourcing",
            "Strategic Consulting", 
            "Business Development",
            "AI Integration",
            "Marketing Automation"
          ],
          ...data
        };

      default:
        return {};
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData || Object.keys(structuredData).length === 0) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
};

export default StructuredData;