import React from 'react';
import { useParams } from 'react-router-dom';
import ServiceProductPage from '@/components/shared/ServiceProductPage';
import { findServiceBySlug, getRelatedServices } from '@/utils/serviceUtils';
import NotFound from '../NotFound';

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

  return (
    <ServiceProductPage
      service={service}
      backPath="/consulenza-strategica/marketing-services"
      backLabel="Servizi Marketing"
      relatedServices={relatedServices}
    />
  );
};

export default MarketingServiceDetail;