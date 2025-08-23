import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Play, TrendingUp, Award, Users, Quote, ArrowLeft, ArrowRight } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  content: string;
  results: {
    metric: string;
    value: string;
    improvement: string;
  }[];
  videoUrl?: string;
  industry: string;
  companySize: string;
  serviceUsed: string;
}

interface EnhancedTestimonialsProps {
  category: 'sales' | 'marketing' | 'consultation';
}

const EnhancedTestimonials: React.FC<EnhancedTestimonialsProps> = ({ category }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showVideo, setShowVideo] = useState<string | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Marco Rossi',
      role: 'CEO & Founder',
      company: 'TechStart Milano',
      image: '/lovable-uploads/4942e788-ba8d-426d-bd98-bf362a153c59.png',
      rating: 5,
      content: 'Abbiamo triplicato le nostre vendite in 6 mesi. Il loro approccio sistemico ha trasformato completamente il nostro team commerciale.',
      results: [
        { metric: 'Vendite', value: '+280%', improvement: 'in 6 mesi' },
        { metric: 'Conversion Rate', value: '+45%', improvement: 'costante' },
        { metric: 'Deal Size', value: '+60%', improvement: 'medio' }
      ],
      videoUrl: 'https://www.youtube.com/embed/ZocHP6N9Aig',
      industry: 'Technology',
      companySize: '50-100',
      serviceUsed: 'Sales Accelerator'
    },
    {
      id: '2',
      name: 'Laura Bianchi',
      role: 'Marketing Director',
      company: 'GrowthCorp',
      image: '/lovable-uploads/55ba51af-1df7-42c2-9eb0-7808ffbd9c64.png',
      rating: 5,
      content: 'Il ROI delle nostre campagne è aumentato del 340%. Finalmente abbiamo un sistema di marketing che genera lead qualificati costantemente.',
      results: [
        { metric: 'ROI Campagne', value: '+340%', improvement: 'sostenibile' },
        { metric: 'Lead Qualificati', value: '+150%', improvement: 'mensili' },
        { metric: 'Costo Acquisizione', value: '-35%', improvement: 'ridotto' }
      ],
      industry: 'E-commerce',
      companySize: '20-50',
      serviceUsed: 'Marketing Audit + Campaigns'
    },
    {
      id: '3',
      name: 'Alessandro Verdi',
      role: 'Managing Partner',
      company: 'Consulting Pro',
      image: '/lovable-uploads/57e4bdda-6fe0-4184-b948-1e51ef3229c1.png',
      rating: 5,
      content: 'La consulenza strategica ci ha permesso di ristrutturare completamente il nostro approccio commerciale. Risultati visibili dal primo mese.',
      results: [
        { metric: 'Efficienza Vendite', value: '+120%', improvement: 'team' },
        { metric: 'Time to Close', value: '-40%', improvement: 'velocità' },
        { metric: 'Customer Lifetime', value: '+85%', improvement: 'valore' }
      ],
      industry: 'Consulting',
      companySize: '10-20',
      serviceUsed: 'Strategic Consultation'
    }
  ];

  const filters = [
    { id: 'all', label: 'Tutti', count: testimonials.length },
    { id: 'sales', label: 'Sales', count: 1 },
    { id: 'marketing', label: 'Marketing', count: 1 },
    { id: 'consultation', label: 'Consulenza', count: 1 }
  ];

  const filteredTestimonials = testimonials.filter(testimonial => {
    if (activeFilter === 'all') return true;
    return testimonial.serviceUsed.toLowerCase().includes(activeFilter);
  });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, [filteredTestimonials.length]);

  const currentTestimonial = filteredTestimonials[currentIndex];

  if (!currentTestimonial) return null;

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full border border-yellow-200 mb-6">
          <Award className="w-4 h-4 text-yellow-600" />
          <span className="text-yellow-600 font-medium text-sm">Testimonianze Verificate</span>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Storie di Successo Reali
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Scopri come abbiamo aiutato aziende come la tua a raggiungere risultati straordinari
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-2 mb-12">
        {filters.map(filter => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? "default" : "outline"}
            onClick={() => setActiveFilter(filter.id)}
            className="min-w-20"
          >
            {filter.label}
            <Badge variant="secondary" className="ml-2">
              {filter.count}
            </Badge>
          </Button>
        ))}
      </div>

      {/* Main Testimonial */}
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {/* Testimonial Content */}
        <div className="lg:col-span-2">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-xl">
            <CardContent className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src={currentTestimonial.image} 
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-gray-600">
                      {currentTestimonial.role} • {currentTestimonial.company}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Badge variant="secondary" className="ml-2">
                        Verificato ✓
                      </Badge>
                    </div>
                  </div>
                </div>
                
                {currentTestimonial.videoUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowVideo(currentTestimonial.videoUrl!)}
                    className="flex items-center gap-2"
                  >
                    <Play className="w-4 h-4" />
                    Video
                  </Button>
                )}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-300" />
                <blockquote className="text-lg leading-relaxed text-gray-800 italic pl-6">
                  "{currentTestimonial.content}"
                </blockquote>
              </div>

              {/* Company Info */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{currentTestimonial.companySize} dipendenti</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>{currentTestimonial.industry}</span>
                </div>
                <Badge variant="outline" className="text-blue-600">
                  {currentTestimonial.serviceUsed}
                </Badge>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevTestimonial}
                    disabled={filteredTestimonials.length <= 1}
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextTestimonial}
                    disabled={filteredTestimonials.length <= 1}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="text-sm text-gray-500">
                  {currentIndex + 1} di {filteredTestimonials.length}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Dashboard */}
        <div className="space-y-4">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-6">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Risultati Ottenuti
              </h4>
              
              <div className="space-y-4">
                {currentTestimonial.results.map((result, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {result.metric}
                      </span>
                      <Badge 
                        variant="secondary" 
                        className="bg-green-100 text-green-700"
                      >
                        {result.improvement}
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold text-green-600">
                      {result.value}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardContent className="p-6">
              <h4 className="font-bold text-gray-900 mb-4">
                Panoramica Clienti
              </h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">98%</div>
                  <div className="text-xs text-gray-600">Soddisfazione</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">6.2x</div>
                  <div className="text-xs text-gray-600">ROI Medio</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">45</div>
                  <div className="text-xs text-gray-600">Giorni Medi</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">500+</div>
                  <div className="text-xs text-gray-600">Progetti</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl overflow-hidden max-w-4xl w-full">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-bold text-lg">Video Testimonianza</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowVideo(null)}
              >
                Chiudi
              </Button>
            </div>
            <div className="aspect-video">
              <iframe
                src={showVideo}
                title="Video Testimonianza"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Progress Dots */}
      <div className="flex justify-center gap-2">
        {filteredTestimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex 
                ? 'bg-blue-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EnhancedTestimonials;