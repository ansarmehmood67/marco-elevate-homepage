import { useEffect } from 'react';

interface SEOSchemaProps {
  type?: 'organization' | 'webpage';
  pageTitle?: string;
  pageDescription?: string;
  pageUrl?: string;
}

const SEOSchema = ({ 
  type = 'organization',
  pageTitle,
  pageDescription,
  pageUrl 
}: SEOSchemaProps) => {
  useEffect(() => {
    const addSchema = () => {
      // Remove existing schema
      const existingSchema = document.querySelector('script[type="application/ld+json"]');
      if (existingSchema) {
        existingSchema.remove();
      }

      let schemaData;

      if (type === 'organization') {
        schemaData = {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Marco Ferrario Business Consulting",
          "url": "https://marcoferrario.com",
          "logo": "https://res.cloudinary.com/dc1zzgsjw/image/upload/f_auto,q_auto,w_400/v1758145901/sales_3_baw70d.png",
          "founder": {
            "@type": "Person",
            "name": "Marco Ferrario",
            "jobTitle": "Business Consultant & Sales Expert"
          },
          "description": "Sales On Demand, Consulenza Strategica e servizi di automazione AI per accelerare la crescita del business",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IT"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": "Italian"
          },
          "sameAs": [
            "https://www.linkedin.com/in/marcoferrario/"
          ],
          "offers": [
            {
              "@type": "Service",
              "name": "Sales on Demand",
              "description": "Servizi di vendita outsourcing per accelerare la crescita"
            },
            {
              "@type": "Service", 
              "name": "Consulenza Strategica",
              "description": "Consulenza strategica per ottimizzare i processi di business"
            },
            {
              "@type": "Service",
              "name": "Automazione AI",
              "description": "Soluzioni di intelligenza artificiale per automatizzare i processi aziendali"
            }
          ]
        };
      } else if (type === 'webpage' && pageTitle && pageDescription && pageUrl) {
        schemaData = {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": pageTitle,
          "description": pageDescription,
          "url": pageUrl,
          "isPartOf": {
            "@type": "WebSite",
            "name": "Marco Ferrario Business Consulting",
            "url": "https://marcoferrario.com"
          },
          "about": {
            "@type": "Organization",
            "name": "Marco Ferrario Business Consulting"
          }
        };
      }

      if (schemaData) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schemaData);
        document.head.appendChild(script);
      }
    };

    addSchema();
  }, [type, pageTitle, pageDescription, pageUrl]);

  return null;
};

export default SEOSchema;