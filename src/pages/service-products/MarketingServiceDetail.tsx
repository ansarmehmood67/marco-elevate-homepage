import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ServiceProductPage from '@/components/shared/ServiceProductPage';
import { findServiceBySlug, getRelatedServices } from '@/utils/serviceUtils';
import NotFound from '../NotFound';
import SEOHead from '@/components/SEO/SEOHead';

const MarketingServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  
  if (!slug) {
    return <NotFound />;
  }

  const service = findServiceBySlug(slug, 'marketing');
  
  if (!service) {
    return <NotFound />;
  }

  const relatedServices = getRelatedServices(service.id, 'marketing', 2);

  // Dynamic SEO data based on service
  const seoData = {
    title: `${service.title} | Servizi Marketing | Marco Business Consulting`,
    description: service.description.length > 160 ? 
      service.description.substring(0, 157) + '...' : 
      service.description,
    canonical: `https://salesondemand.it${location.pathname}`,
    ogTitle: `${service.title} - Servizi Marketing Professionali`,
    ogDescription: service.description.length > 160 ? 
      service.description.substring(0, 157) + '...' : 
      service.description,
    ogImage: 'https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/marketing-services-og.jpg',
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterTitle: `${service.title} - Marketing Services`,
    twitterDescription: service.description.length > 160 ? 
      service.description.substring(0, 157) + '...' : 
      service.description,
    twitterImage: 'https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/marketing-services-og.jpg',
    lang: "it-IT",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "provider": {
            "@type": "Organization",
            "name": "Marco Business Consulting"
          }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://salesondemand.it"
            },
            {
              "@type": "ListItem", 
              "position": 2,
              "name": "Consulenza Strategica",
              "item": "https://salesondemand.it/consulenza-strategica"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Marketing Services",
              "item": "https://salesondemand.it/consulenza-strategica/marketing-services"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": service.title,
              "item": `https://salesondemand.it${location.pathname}`
            }
          ]
        }
      ]
    }
  };

  return (
    <>
      <SEOHead data={seoData} />
      <ServiceProductPage
        service={service}
        backPath="/consulenza-strategica/marketing-services"
        backLabel="Servizi Marketing"
        relatedServices={relatedServices}
      />
    </>
  );
};

export default MarketingServiceDetail;