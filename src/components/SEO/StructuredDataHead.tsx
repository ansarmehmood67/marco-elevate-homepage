import { Helmet } from 'react-helmet-async';

interface StructuredDataHeadProps {
  type?: 'website' | 'organization' | 'service';
  data?: any;
}

const StructuredDataHead: React.FC<StructuredDataHeadProps> = ({ 
  type = 'website', 
  data = {} 
}) => {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type === 'website' ? 'WebSite' : type === 'organization' ? 'Organization' : 'Service',
      name: "Sales On Demand - Marco Ferrario",
      url: "https://www.salesondemand.it",
      description: "Outsourcing vendite e marketing professionale. Team operativi, consulenza strategica e automazioni AI per accelerare la crescita aziendale.",
      ...data
    };

    if (type === 'organization') {
      return {
        ...baseData,
        "@type": "Organization",
        logo: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758145901/sales_3_baw70d.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+39-123-456-7890",
          contactType: "customer service",
          availableLanguage: ["Italian"]
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "IT",
          addressLocality: "Milano"
        }
      };
    }

    if (type === 'website') {
      return {
        ...baseData,
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.salesondemand.it/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      };
    }

    return baseData;
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};

export default StructuredDataHead;