import React from 'react';
import { useParams } from 'react-router-dom';
import ServiceProductPage from '@/components/shared/ServiceProductPage';
import { findServiceBySlug, getRelatedServices } from '@/utils/serviceUtils';
import NotFound from '../NotFound';
import SEOHead from '@/components/SEO/SEOHead';

const ConsultationServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
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
    keywords: `${service.title.toLowerCase()}, consulenza strategica, consulenza aziendale, ${service.title.toLowerCase().replace(/\s+/g, ' ')}, marco business consulting`,
    ogTitle: `${service.title} - Consulenza Strategica`,
    ogDescription: service.description.length > 160 ? 
      service.description.substring(0, 157) + '...' : 
      service.description,
    ogImage: 'https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/consulenza-strategica-og.jpg',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.title,
      "description": service.description,
      "provider": {
        "@type": "Organization",
        "name": "Marco Business Consulting"
      }
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