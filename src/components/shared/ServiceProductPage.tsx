import React from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import ServiceGallery from './ServiceGallery';
import ServiceDetails from './ServiceDetails';
import AllServicesCarousel from './AllServicesCarousel';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceProductPageProps {
  service: {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    benefits?: string[];
    youtubeUrl: string;
    shopifyProductId: string;
    category: 'basic' | 'popular' | 'premium';
    price: string;
    originalPrice?: string;
    rating?: number;
    reviewCount?: number;
    availability?: 'available' | 'limited' | 'sold-out';
    duration?: string;
    deliverables?: string[];
    thumbnails?: string[];
  };
  backPath: string;
  backLabel: string;
  relatedServices?: any[];
}

const ServiceProductPage: React.FC<ServiceProductPageProps> = ({
  service,
  backPath,
  backLabel,
  relatedServices = []
}) => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section with Breadcrumb */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              to={backPath}
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Torna a {backLabel}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Product Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Gallery */}
            <div className="space-y-6">
              <ServiceGallery 
                youtubeUrl={service.youtubeUrl}
                title={service.title}
                thumbnails={service.thumbnails}
              />
            </div>

            {/* Right Column - Details */}
            <div className="space-y-8">
              <ServiceDetails
                title={service.title}
                subtitle={service.subtitle}
                description={service.description}
                features={service.features}
                benefits={service.benefits}
                price={service.price}
                originalPrice={service.originalPrice}
                category={service.category}
                rating={service.rating}
                reviewCount={service.reviewCount}
                availability={service.availability}
                duration={service.duration}
                deliverables={service.deliverables}
                shopifyProductId={service.shopifyProductId}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-white mb-4">
                Servizi Correlati
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Scopri altri servizi che potrebbero interessarti per completare la tua strategia
              </p>
            </div>
            
            <AllServicesCarousel />
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ServiceProductPage;