import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { useShopifyBuyButton } from "@/hooks/useShopifyBuyButton";

interface ServiceDetailsProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits?: string[];
  price: string;
  originalPrice?: string;
  category: 'basic' | 'popular' | 'premium';
  rating?: number;
  reviewCount?: number;
  availability?: 'available' | 'limited' | 'sold-out';
  duration?: string;
  deliverables?: string[];
  shopifyProductId: string;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  title,
  subtitle,
  description,
  features,
  benefits = [],
  price,
  originalPrice,
  category,
  rating = 5,
  reviewCount = 45,
  availability = 'available',
  duration,
  deliverables = [],
  shopifyProductId
}) => {
  const { containerRef, createBuyButton } = useShopifyBuyButton({ productId: shopifyProductId });

  useEffect(() => {
    if (containerRef.current && !containerRef.current.innerHTML) {
      createBuyButton();
    }
  }, [createBuyButton]);

  const getCategoryStyles = () => {
    switch (category) {
      case 'popular':
        return {
          badge: 'bg-primary text-white',
          badgeText: 'Più Scelto',
        };
      case 'premium':
        return {
          badge: 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black',
          badgeText: 'Premium',
        };
      default:
        return {
          badge: 'bg-slate-600 text-white',
          badgeText: 'Base',
        };
    }
  };

  const getAvailabilityStatus = () => {
    switch (availability) {
      case 'available':
        return { color: 'text-green-600', text: 'Disponibile', icon: '🟢' };
      case 'limited':
        return { color: 'text-yellow-600', text: 'Posti Limitati', icon: '🟡' };
      case 'sold-out':
        return { color: 'text-red-600', text: 'Esaurito', icon: '🔴' };
      default:
        return { color: 'text-green-600', text: 'Disponibile', icon: '🟢' };
    }
  };

  const styles = getCategoryStyles();
  const availabilityInfo = getAvailabilityStatus();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        {/* Category Badge */}
        {category !== 'basic' && (
          <div>
            <Badge className={`${styles.badge} font-bold px-4 py-2 text-sm shadow-lg`}>
              {styles.badgeText}
            </Badge>
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
          {title}
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <span className="text-slate-600 text-sm font-medium">
              {rating}.0 ({reviewCount} recensioni)
            </span>
          </div>
        </div>
      </div>

      {/* Price and Availability */}
      <div className="space-y-4">
        <div className="flex items-baseline gap-3">
          <span className="text-4xl font-black text-slate-900">{price}</span>
          {originalPrice && (
            <span className="text-xl text-slate-400 line-through">{originalPrice}</span>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <span className={`text-lg font-semibold ${availabilityInfo.color}`}>
            {availabilityInfo.icon} {availabilityInfo.text}
          </span>
        </div>

        {duration && (
          <div className="text-slate-600">
            <span className="font-medium">Durata:</span> {duration}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="space-y-4">
        {/* Shopify Buy Button */}
        <div ref={containerRef} className="w-full" />

        {/* Contact Button */}
        <Button 
          variant="outline"
          className="w-full border-2 border-slate-300 text-slate-700 hover:text-white hover:bg-slate-800 hover:border-slate-800 rounded-2xl py-4 text-lg transition-all duration-300 group"
        >
          <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
          Hai domande? Contattaci
        </Button>
      </div>

      {/* Description */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Descrizione</h2>
        <p className="text-slate-700 text-lg leading-relaxed">
          {subtitle}
        </p>
        <p className="text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* What's Included */}
      {features.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Cosa Include</h2>
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span 
                  className="text-slate-700 leading-relaxed" 
                  dangerouslySetInnerHTML={{ __html: feature }} 
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Benefits */}
      {benefits.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Benefici</h2>
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/20">
                <div className="w-5 h-5 bg-gradient-to-r from-primary to-primary-glow rounded-full flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Deliverables */}
      {deliverables.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Cosa Ricevi</h2>
          <div className="space-y-3">
            {deliverables.map((deliverable, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
                <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary-glow rounded-full flex-shrink-0 mt-2" />
                <span className="text-slate-700 leading-relaxed">{deliverable}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;