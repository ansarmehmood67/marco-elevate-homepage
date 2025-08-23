import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, TrendingUp, ArrowRight } from "lucide-react";

interface Service {
  id: string;
  title: string;
  basePrice: number;
  description: string;
  features: string[];
  shopifyLink: string;
}

interface PriceConfiguratorProps {
  services: Service[];
  category: 'sales' | 'marketing' | 'consultation';
}

const PriceConfigurator: React.FC<PriceConfiguratorProps> = ({ services, category }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [bundleDiscount, setBundleDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const baseTotal = selectedServices.reduce((sum, serviceId) => {
      const service = services.find(s => s.id === serviceId);
      return sum + (service?.basePrice || 0);
    }, 0);

    // Apply bundle discounts
    let discount = 0;
    if (selectedServices.length === 2) discount = 0.15; // 15% off for 2 services
    if (selectedServices.length >= 3) discount = 0.25; // 25% off for 3+ services

    setBundleDiscount(discount);
    setTotalPrice(baseTotal * (1 - discount));
  }, [selectedServices, services]);

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const getCategoryColor = () => {
    switch (category) {
      case 'sales': return 'from-blue-600 to-blue-700';
      case 'marketing': return 'from-green-600 to-green-700';
      case 'consultation': return 'from-purple-600 to-purple-700';
      default: return 'from-blue-600 to-blue-700';
    }
  };

  const getAccentColor = () => {
    switch (category) {
      case 'sales': return 'text-blue-600 border-blue-200 bg-blue-50';
      case 'marketing': return 'text-green-600 border-green-200 bg-green-50';
      case 'consultation': return 'text-purple-600 border-purple-200 bg-purple-50';
      default: return 'text-blue-600 border-blue-200 bg-blue-50';
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-100 to-pink-100 rounded-full border border-violet-200 mb-6">
          <Sparkles className="w-4 h-4 text-violet-600" />
          <span className="text-violet-600 font-medium text-sm">Configuratore Intelligente</span>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Personalizza il tuo pacchetto
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Seleziona i servizi che ti servono e ottieni automaticamente il miglior prezzo con i nostri bundle
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Services Selection */}
        <div className="lg:col-span-2 space-y-4">
          {services.map((service) => (
            <Card 
              key={service.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                selectedServices.includes(service.id) 
                  ? 'ring-2 ring-blue-500 bg-blue-50/50' 
                  : 'hover:border-gray-300'
              }`}
              onClick={() => toggleService(service.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
                        selectedServices.includes(service.id)
                          ? 'bg-blue-500 border-blue-500'
                          : 'border-gray-300'
                      }`}>
                        {selectedServices.includes(service.id) && (
                          <Check className="w-4 h-4 text-white m-0.5" />
                        )}
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900">
                        {service.title}
                      </h4>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-3 h-3 text-green-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">
                      €{service.basePrice.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">una tantum</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Price Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                Riepilogo Ordine
              </h4>
              
              {selectedServices.length === 0 ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500">Seleziona uno o più servizi per vedere il prezzo</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Selected Services */}
                  <div className="space-y-3">
                    {selectedServices.map(serviceId => {
                      const service = services.find(s => s.id === serviceId);
                      if (!service) return null;
                      
                      return (
                        <div key={serviceId} className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">{service.title}</span>
                          <span className="font-medium">€{service.basePrice.toLocaleString()}</span>
                        </div>
                      );
                    })}
                  </div>
                  
                  <hr className="my-4" />
                  
                  {/* Bundle Discount */}
                  {bundleDiscount > 0 && (
                    <div className="flex justify-between items-center text-sm text-green-600">
                      <span>Sconto Bundle ({Math.round(bundleDiscount * 100)}%)</span>
                      <span>-€{Math.round(selectedServices.reduce((sum, serviceId) => {
                        const service = services.find(s => s.id === serviceId);
                        return sum + (service?.basePrice || 0);
                      }, 0) * bundleDiscount).toLocaleString()}</span>
                    </div>
                  )}
                  
                  <hr className="my-4" />
                  
                  {/* Total */}
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">Totale</span>
                    <span className="text-2xl font-bold text-gray-900">
                      €{Math.round(totalPrice).toLocaleString()}
                    </span>
                  </div>
                  
                  {/* Bundle Benefits */}
                  {bundleDiscount > 0 && (
                    <div className={`p-3 rounded-lg border ${getAccentColor()}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4" />
                        <span className="font-medium text-sm">Bundle Premium Attivo!</span>
                      </div>
                      <ul className="text-xs space-y-1">
                        <li>• Supporto prioritario incluso</li>
                        <li>• Sessioni di follow-up extra</li>
                        <li>• Accesso ai tool premium</li>
                      </ul>
                    </div>
                  )}
                  
                  {/* CTA Button */}
                  <Button 
                    className={`w-full bg-gradient-to-r ${getCategoryColor()} hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                    size="lg"
                  >
                    <span className="flex items-center gap-2">
                      Procedi all'Acquisto
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    Sarai reindirizzato a Shopify per completare l'acquisto
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PriceConfigurator;