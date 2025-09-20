import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ServiceProductPage from '@/components/shared/ServiceProductPage';
import { findServiceBySlug, getRelatedServices } from '@/utils/serviceUtils';
import NotFound from '../NotFound';
import SEOHead from '@/components/SEO/SEOHead';

const ConsultationServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  
  if (!slug) {
    return <NotFound />;
  }

  const service = findServiceBySlug(slug, 'consultation');
  
  if (!service) {
    return <NotFound />;
  }

  const relatedServices = getRelatedServices(service.id, 'consultation', 2);

  // Dynamic SEO data based on service
  const seoData = {
    title: `${service.title} | Consulenza Strategica | Marco Business Consulting`,
    description: service.description.length > 160 ? 
      service.description.substring(0, 157) + '...' : 
      service.description,
    canonical: `https://salesondemand.it${location.pathname}`,
    ogTitle: `${service.title} - Consulenza Strategica`,
    ogDescription: service.description.length > 160 ? 
      service.description.substring(0, 157) + '...' : 
      service.description,
    ogImage: 'https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/consulenza-strategica-og.jpg',
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterCard: "summary_large_image",
    twitterTitle: `${service.title} - Consulenza Strategica`,
    twitterDescription: service.description.length > 160 ? 
      service.description.substring(0, 157) + '...' : 
      service.description,
    twitterImage: 'https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/consulenza-strategica-og.jpg',
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
              "name": "Consultation Services",
              "item": "https://salesondemand.it/consulenza-strategica/consultation-services"
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
        backPath="/consulenza-strategica/consultation-services"
        backLabel="Consulenza Strategica"
        relatedServices={relatedServices}
      />
    </>
  );
};

export default ConsultationServiceDetail;