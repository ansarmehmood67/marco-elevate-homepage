import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const SimplifiedContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    gdprConsent: false,
    marketingConsent: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Convert to FormData for MailerLite compatibility
      const submitData = new FormData();
      submitData.append('fields[name]', formData.name);
      submitData.append('fields[last_name]', formData.lastname);
      submitData.append('fields[company]', formData.company);
      submitData.append('fields[email]', formData.email);
      submitData.append('fields[phone]', formData.phone);
      submitData.append('fields[country]', formData.service);
      submitData.append('fields[city]', formData.message);
      
      if (formData.marketingConsent) {
        submitData.append('gdpr[]', 'Email');
      }

      await fetch('https://assets.mailerlite.com/jsonp/851102/forms/164508757461566831/subscribe', {
        method: 'POST',
        body: submitData,
        mode: 'no-cors'
      });
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
        <div className="text-center">
          <h4 className="text-xl font-bold text-white mb-4">
            Grazie per il tuo interesse!
          </h4>
          <p className="text-gray-300">
            Ti ricontatteremo entro 2 ore lavorative.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Nome *</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              className="bg-black/20 border-primary/30 text-white placeholder:text-gray-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastname" className="text-white">Cognome *</Label>
            <Input
              id="lastname"
              type="text"
              value={formData.lastname}
              onChange={(e) => handleInputChange('lastname', e.target.value)}
              required
              className="bg-black/20 border-primary/30 text-white placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Company */}
        <div className="space-y-2">
          <Label htmlFor="company" className="text-white">Azienda *</Label>
          <Input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            required
            className="bg-black/20 border-primary/30 text-white placeholder:text-gray-400"
          />
        </div>

        {/* Contact fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              className="bg-black/20 border-primary/30 text-white placeholder:text-gray-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white">Telefono *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              required
              className="bg-black/20 border-primary/30 text-white placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Service selection */}
        <div className="space-y-2">
          <Label className="text-white">A quale servizio sei interessato? *</Label>
          <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
            <SelectTrigger className="bg-black/20 border-primary/30 text-white">
              <SelectValue placeholder="Seleziona un servizio" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="outsourcing-vendite">Outsourcing forza Vendite</SelectItem>
              <SelectItem value="outsourcing-marketing">Outsourcing Marketing</SelectItem>
              <SelectItem value="telemarketing">Telemarketing e teleselling</SelectItem>
              <SelectItem value="consulenza">Servizi di consulenza strategica</SelectItem>
              <SelectItem value="chatbot">Chatbot</SelectItem>
              <SelectItem value="web-app">Siti internet/App</SelectItem>
              <SelectItem value="ai-automation">Automazioni AI</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message" className="text-white">Le tue esigenze in due righe</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            maxLength={255}
            className="bg-black/20 border-primary/30 text-white placeholder:text-gray-400 min-h-[100px]"
          />
        </div>

        {/* Consent checkboxes */}
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="marketing"
              checked={formData.marketingConsent}
              onCheckedChange={(checked) => handleInputChange('marketingConsent', checked)}
            />
            <div className="space-y-1">
              <Label htmlFor="marketing" className="text-sm text-white cursor-pointer">
                Email Marketing
              </Label>
              <p className="text-xs text-gray-400">
                Ti invieremo occasionalmente e-mail riguardo promozioni e aggiornamenti.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox 
              id="gdpr"
              checked={formData.gdprConsent}
              onCheckedChange={(checked) => handleInputChange('gdprConsent', checked)}
              required
            />
            <Label htmlFor="gdpr" className="text-sm text-white cursor-pointer">
              Acconsenti a ricevere notizie e aggiornamenti. *
            </Label>
          </div>
        </div>

        {/* GDPR Notice */}
        <div className="bg-black/20 rounded-lg p-4">
          <p className="text-xs text-gray-400">
            Cliccando qui sotto per inviare questo modulo, riconosci che le informazioni che fornisci 
            saranno trattate in conformità con la nostra Privacy Policy.
          </p>
        </div>

        {/* Submit button */}
        <Button 
          type="submit" 
          disabled={isLoading || !formData.gdprConsent}
          className="w-full bg-primary hover:bg-primary-glow text-white font-bold py-3"
        >
          {isLoading ? 'Invio in corso...' : 'Invia Richiesta'}
        </Button>
      </form>
    </div>
  );
};

export default SimplifiedContactForm;