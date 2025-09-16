import React from 'react';
import { useParams } from 'react-router-dom';
import ServiceProductPage from '@/components/shared/ServiceProductPage';
import { findServiceBySlug, getRelatedServices } from '@/utils/serviceUtils';
import NotFound from '../NotFound';

const SalesServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <NotFound />;
  }

  const service = findServiceBySlug(slug, 'sales');
  
  if (!service) {
    return <NotFound />;
  }

  const relatedServices = getRelatedServices(service.id, 'sales', 2);

  return (
    <ServiceProductPage
      service={service}
      backPath="/consulenza-strategica/sales-services"
      backLabel="Servizi Vendite"
      relatedServices={relatedServices}
    />
  );
};

export default SalesServiceDetail;