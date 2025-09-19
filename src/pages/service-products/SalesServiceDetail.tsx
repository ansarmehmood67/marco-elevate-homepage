import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ServiceProductPage from '@/components/shared/ServiceProductPage';
import { findServiceBySlug, getRelatedServices } from '@/utils/serviceUtils';
import NotFound from '../NotFound';
import SEOHead from '@/components/SEO/SEOHead';

const SalesServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  
  if (!slug) {
    return <NotFound />;
  }

  const service = findServiceBySlug(slug, 'sales');
  
  if (!service) {
    return <NotFound />;
  }

  const relatedServices = getRelatedServices(service.id, 'sales', 2);

  // Dynamic SEO data based on service
  const seoData = {
    title: `${service.title} | Servizi Vendite | Marco Business Consulting`,
    description: service.description.length > 160 ? 
      service.description.substring(0, 157) + '...' : 
      service.description,
    canonical: `https://marco-business.com${location.pathname}`,
    ogTitle: `${service.title} - Servizi Vendite Professionali`,
    ogDescription: service.description.length > 160 ? 
      service.description.substring(0, 157) + '...' : 
      service.description,
    ogImage: 'https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/sales-services-og.jpg',
    ogImageWidth: "1200",
    ogImageHeight: "630",
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
        backPath="/consulenza-strategica/sales-services"
        backLabel="Servizi Vendite"
        relatedServices={relatedServices}
      />
    </>
  );
};

export default SalesServiceDetail;