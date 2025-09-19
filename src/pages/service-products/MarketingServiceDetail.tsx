import React from 'react';
import { useParams } from 'react-router-dom';
import ServiceProductPage from '@/components/shared/ServiceProductPage';
import { findServiceBySlug, getRelatedServices } from '@/utils/serviceUtils';
import NotFound from '../NotFound';
import SEOHead from '@/components/SEO/SEOHead';

const MarketingServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
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
    keywords: `${service.title.toLowerCase()}, servizi marketing, consulenza marketing, ${service.title.toLowerCase().replace(/\s+/g, ' ')}, marco business consulting`,
    ogTitle: `${service.title} - Servizi Marketing Professionali`,
    ogDescription: service.description.length > 160 ? 
      service.description.substring(0, 157) + '...' : 
      service.description,
    ogImage: 'https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/marketing-services-og.jpg',
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
        backPath="/consulenza-strategica/marketing-services"
        backLabel="Servizi Marketing"
        relatedServices={relatedServices}
      />
    </>
  );
};

export default MarketingServiceDetail;