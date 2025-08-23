import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Star, Users, Target, TrendingUp, Zap } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  features: string[];
  shopifyLink: string;
  category: 'basic' | 'popular' | 'premium';
  icon: React.ReactNode;
  results: string[];
  timeline: string;
}

interface InteractiveServiceSelectorProps {
  services: Service[];
  category: 'sales' | 'marketing' | 'consultation';
}

const InteractiveServiceSelector: React.FC<InteractiveServiceSelectorProps> = ({ 
  services, 
  category 
}) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [comparisonMode, setComparisonMode] = useState(false);

  const getCategoryGradient = (serviceCategory: string) => {
    switch (serviceCategory) {
      case 'basic':
        return 'from-gray-100 to-gray-200';
      case 'popular':
        return 'from-blue-100 to-purple-200';
      case 'premium':
        return 'from-purple-100 to-pink-200';
      default:
        return 'from-gray-100 to-gray-200';
    }
  };

  const getCategoryBorder = (serviceCategory: string) => {
    switch (serviceCategory) {
      case 'basic':
        return 'border-gray-300';
      case 'popular':
        return 'border-blue-500';
      case 'premium':
        return 'border-purple-500';
      default:
        return 'border-gray-300';
    }
  };

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(selectedService === serviceId ? null : serviceId);
  };

  const handleShopifyRedirect = (shopifyLink: string) => {
    // Add tracking parameters and open in new tab
    const trackingParams = `?utm_source=landing&utm_medium=service_selector&utm_campaign=${category}`;
    window.open(`${shopifyLink}${trackingParams}`, '_blank');
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full border border-indigo-200 mb-6">
          <Target className="w-4 h-4 text-indigo-600" />
          <span className="text-indigo-600 font-medium text-sm">Selettore Intelligente</span>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Scegli il servizio perfetto per te
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Confronta i nostri servizi e trova quello più adatto alle tue esigenze
        </p>
        
        <div className="flex justify-center gap-4">
          <Button
            variant={comparisonMode ? "outline" : "default"}
            onClick={() => setComparisonMode(false)}
            className="min-w-32"
          >
            Vista Singola
          </Button>
          <Button
            variant={comparisonMode ? "default" : "outline"}
            onClick={() => setComparisonMode(true)}
            className="min-w-32"
          >
            Confronta Tutto
          </Button>
        </div>
      </div>

      {/* Services Grid */}
      <div className={`grid gap-8 ${comparisonMode ? 'grid-cols-1 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
        {services.map((service) => (
          <Card
            key={service.id}
            className={`relative overflow-hidden transition-all duration-300 cursor-pointer ${
              selectedService === service.id || hoveredService === service.id
                ? `ring-2 ${getCategoryBorder(service.category)} scale-105 shadow-xl`
                : 'hover:shadow-lg hover:scale-102'
            } ${service.category === 'popular' ? 'border-2 border-blue-500' : ''}`}
            onClick={() => handleServiceClick(service.id)}
            onMouseEnter={() => setHoveredService(service.id)}
            onMouseLeave={() => setHoveredService(null)}
          >
            {/* Popular Badge */}
            {service.category === 'popular' && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 shadow-lg">
                  <Star className="w-3 h-3 mr-1" />
                  PIÙ SCELTO
                </Badge>
              </div>
            )}

            {/* Premium Badge */}
            {service.category === 'premium' && (
              <div className="absolute -top-3 right-4 z-10">
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1 shadow-lg">
                  <Zap className="w-3 h-3 mr-1" />
                  PREMIUM
                </Badge>
              </div>
            )}

            <CardContent className={`p-8 bg-gradient-to-br ${getCategoryGradient(service.category)}`}>
              {/* Icon and Title */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white shadow-lg flex items-center justify-center">
                  <div className="text-blue-600">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  {service.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      €{service.originalPrice.toLocaleString()}
                    </span>
                  )}
                  <span className="text-3xl font-bold text-gray-900">
                    €{service.price.toLocaleString()}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  Investimento una tantum
                </div>
                {service.originalPrice && (
                  <Badge variant="destructive" className="mt-2">
                    Risparmi €{(service.originalPrice - service.price).toLocaleString()}
                  </Badge>
                )}
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Expanded Content */}
              {selectedService === service.id && (
                <div className="space-y-4 mb-6 animate-in slide-in-from-top duration-300">
                  {/* Results */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Risultati Tipici
                    </h4>
                    <ul className="space-y-2">
                      {service.results.map((result, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Timeline
                    </h4>
                    <p className="text-sm text-gray-600">{service.timeline}</p>
                  </div>
                </div>
              )}

              {/* CTA Button */}
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  handleShopifyRedirect(service.shopifyLink);
                }}
                className={`w-full transition-all duration-300 ${
                  service.category === 'popular'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                    : service.category === 'premium'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                    : 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800'
                } text-white shadow-lg hover:shadow-xl transform hover:scale-105`}
                size="lg"
              >
                <span className="flex items-center gap-2">
                  Scegli Questo Servizio
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>

              {/* Quick Actions */}
              {selectedService === service.id && (
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add to comparison or contact action
                    }}
                  >
                    Confronta
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Contact action
                    }}
                  >
                    Contattaci
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Comparison Table (when in comparison mode) */}
      {comparisonMode && services.length > 1 && (
        <div className="mt-16">
          <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Confronto Dettagliato
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-4 font-semibold text-gray-900">Caratteristiche</th>
                  {services.map(service => (
                    <th key={service.id} className="text-center p-4 font-semibold text-gray-900">
                      {service.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-4 font-medium text-gray-900">Prezzo</td>
                  {services.map(service => (
                    <td key={service.id} className="text-center p-4">
                      <span className="text-xl font-bold text-gray-900">
                        €{service.price.toLocaleString()}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">Timeline</td>
                  {services.map(service => (
                    <td key={service.id} className="text-center p-4 text-sm text-gray-600">
                      {service.timeline}
                    </td>
                  ))}
                </tr>
                {/* Add more comparison rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveServiceSelector;