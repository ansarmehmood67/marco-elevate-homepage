import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { X, Gift, Clock, ArrowRight, Star, Users } from "lucide-react";

interface ExitIntentModalProps {
  category: 'sales' | 'marketing' | 'consultation';
  onClose: () => void;
  onCapture: (email: string) => void;
}

const ExitIntentModal: React.FC<ExitIntentModalProps> = ({ 
  category, 
  onClose, 
  onCapture 
}) => {
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onCapture(email);
    setIsSubmitting(false);
  };

  const getOfferConfig = () => {
    switch (category) {
      case 'sales':
        return {
          title: '🚀 Offerta Esclusiva Sales',
          subtitle: 'Non andartene a mani vuote!',
          discount: '30%', 
          originalPrice: '€3,500',
          newPrice: '€2,450',
          bonuses: [
            'Audit gratuito del pitch (valore €800)',
            'Template di email sequenze (valore €300)',
            'Accesso VIP al nostro CRM Setup (valore €500)'
          ],
          urgency: 'Solo per i prossimi 47 visitatori',
          color: 'from-blue-600 to-cyan-600'
        };
      case 'marketing':
        return {
          title: '📈 Super Offerta Marketing',
          subtitle: 'Ultima possibilità per risparmiare!',
          discount: '35%',
          originalPrice: '€4,200', 
          newPrice: '€2,730',
          bonuses: [
            'Analisi competitor gratuita (valore €600)',
            'Kit creativi premium (valore €400)', 
            'Setup automazioni incluso (valore €700)'
          ],
          urgency: 'Offerta valida per altri 23 visitatori',
          color: 'from-green-600 to-emerald-600'
        };
      case 'consultation':
        return {
          title: '💡 Consulenza Strategica VIP',
          subtitle: 'Approfitta di questa occasione unica!',
          discount: '25%',
          originalPrice: '€2,800',
          newPrice: '€2,100', 
          bonuses: [
            'Sessione strategica extra (valore €500)',
            'Piano 90 giorni personalizzato (valore €300)',
            'Follow-up mensili per 3 mesi (valore €900)'
          ],
          urgency: 'Ultimi 12 slot disponibili questo mese',
          color: 'from-purple-600 to-pink-600'
        };
      default:
        return {
          title: 'Offerta Speciale',
          subtitle: 'Non perdere questa opportunità!',
          discount: '30%',
          originalPrice: '€3,000',
          newPrice: '€2,100',
          bonuses: [],
          urgency: 'Offerta limitata',
          color: 'from-blue-600 to-purple-600'
        };
    }
  };

  const offer = getOfferConfig();

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-gray-200">
        {/* Header */}
        <CardHeader 
          className={`relative bg-gradient-to-r ${offer.color} text-white text-center`}
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white/20"
          >
            <X className="w-4 h-4" />
          </Button>
          
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              <Clock className="w-4 h-4" />
              Scade tra {formatTime(timeLeft)}
            </div>
          </div>
          
          <CardTitle className="text-3xl font-bold mb-2">
            {offer.title}
          </CardTitle>
          <p className="text-xl opacity-90">
            {offer.subtitle}
          </p>
        </CardHeader>

        <CardContent className="p-8">
          {/* Offer Details */}
          <div className="text-center mb-8">
            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="text-2xl text-gray-400 line-through">
                  {offer.originalPrice}
                </span>
                <span className="text-4xl font-bold text-green-600">
                  {offer.newPrice}
                </span>
              </div>
              <Badge className={`bg-gradient-to-r ${offer.color} text-white text-lg px-4 py-2`}>
                Risparmi {offer.discount}% = €{(parseInt(offer.originalPrice.replace('€', '').replace(',', '')) - parseInt(offer.newPrice.replace('€', '').replace(',', ''))).toLocaleString()}!
              </Badge>
            </div>

            {/* Urgency */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center gap-2 text-red-600 font-medium">
                <Users className="w-4 h-4" />
                {offer.urgency}
              </div>
            </div>

            {/* Bonuses */}
            <div className="text-left mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                🎁 Bonus Inclusi (valore €{offer.bonuses.reduce((sum, bonus) => {
                  const value = bonus.match(/€(\d+)/)?.[1];
                  return sum + (value ? parseInt(value) : 0);
                }, 0).toLocaleString()})
              </h3>
              
              <div className="space-y-3">
                {offer.bonuses.map((bonus, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <Gift className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{bonus}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <div className="flex items-center justify-center gap-4 text-sm text-blue-800">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-medium">4.9/5</span>
                </div>
                <span>•</span>
                <span>✓ 247 clienti soddisfatti</span>
                <span>•</span>
                <span>✓ Garanzia 30 giorni</span>
              </div>
            </div>

            {/* Email Capture Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Inserisci la tua email per ricevere l'offerta"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-center text-lg py-3"
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting || !email}
                className={`w-full bg-gradient-to-r ${offer.color} hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-lg py-4`}
                size="lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Processando...
                  </div>
                ) : (
                  <span className="flex items-center gap-2">
                    🔥 Richiedi Offerta Esclusiva
                    <ArrowRight className="w-5 h-5" />
                  </span>
                )}
              </Button>
            </form>

            {/* Trust Signals */}
            <div className="flex items-center justify-center gap-6 mt-6 text-xs text-gray-500">
              <span>🔒 100% Sicuro</span>
              <span>📧 No Spam</span>
              <span>✨ Cancellazione Facile</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExitIntentModal;