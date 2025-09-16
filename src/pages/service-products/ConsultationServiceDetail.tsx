import React from 'react';
import { useParams } from 'react-router-dom';
import ServiceProductPage from '@/components/shared/ServiceProductPage';
import { findServiceBySlug, getRelatedServices } from '@/utils/serviceUtils';
import NotFound from '../NotFound';

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

  return (
    <ServiceProductPage
      service={service}
      backPath="/consulenza-strategica/consultation-services"
      backLabel="Consulenza Strategica"
      relatedServices={relatedServices}
    />
  );
};

export default ConsultationServiceDetail;