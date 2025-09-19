import React from 'react';
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { useMobileOptimization } from "@/hooks/useMobileOptimization";
import MobileOptimizedVideo from './MobileOptimizedVideo';

const MobileOptimizedHero = () => {
  const { ref, visibleItems } = useStaggeredAnimation(6, 200);
  const mobileConfig = useMobileOptimization();
  
  return (
    <section className="pt-32 sm:pt-36 lg:pt-28 pb-16 px-0 bg-black relative overflow-hidden min-h-screen">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[85vh] lg:min-h-[90vh] rounded-3xl overflow-hidden border border-gray-800/30 shadow-2xl bg-black">
          
          {/* Optimized Background Video */}
          <MobileOptimizedVideo
            src="https://res.cloudinary.com/dsergeqc9/video/upload/v1758129844/salesondemand_hero_mze6vo.mp4"
            poster="/lovable-uploads/hero-poster.jpg"
            mobilePoster="/lovable-uploads/hero-poster-mobile.jpg"
            alt="Sales On Demand Hero Background"
            className="absolute inset-0"
            autoPlay={mobileConfig.shouldLoadVideo}
            loop
            muted
            playsInline
          />
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/70" />
          
          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent" />
          
          {/* Mobile-friendly flex layout */}
          <div ref={ref} className="absolute inset-0 flex flex-col justify-center lg:justify-center p-4 sm:p-6 lg:p-12 z-20">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
              {/* Content */}
              <div className="flex-1 max-w-5xl text-center lg:text-left">
                <div className="mb-6 flex items-center space-x-2 justify-center lg:justify-start">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 lg:w-5 h-4 lg:h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white/90 font-medium text-sm lg:text-base">Di fiducia per 500+ aziende</span>
                </div>
                
                <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-tight text-white mb-6 lg:mb-8 drop-shadow-2xl transition-all duration-1200 ease-out ${
                  visibleItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  La tua forza vendita in Outsourcing
                </h1>
                
                <p className={`text-lg sm:text-xl lg:text-2xl text-white/95 leading-relaxed mb-6 lg:mb-8 transition-all duration-600 ease-out delay-200 ${
                  visibleItems[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  Venditori a noleggio per garantire un reparto vendite modulabile, competente e orientato ai risultati, senza oneri di assunzione diretta.
                </p>
                
                {/* Micro payoff - Simplified for mobile */}
                <div className={`mb-6 lg:mb-8 transition-all duration-600 ease-out delay-400 ${
                  visibleItems[2] ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-8'
                }`}>
                  <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <p className="text-sm sm:text-base lg:text-lg text-white font-bold">
                      <span className="text-primary-glow">✓</span> Audit 30 min • 
                      <span className="text-primary-glow mx-1 sm:mx-2">✓</span> Nessun impegno
                      <span className="hidden sm:inline">
                        <span className="text-primary-glow mx-2">✓</span> Risposta entro 2 ore • 
                        <span className="text-primary-glow mx-2">✓</span> 500+ clienti
                      </span>
                    </p>
                  </div>
                </div>
                
                <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-450 ease-out delay-600 ${
                  visibleItems[3] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                  <Button 
                    onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group font-semibold px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 text-base sm:text-lg lg:text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-blue-900 hover:bg-blue-50 border-2 border-white/30"
                  >
                    <span className="flex items-center space-x-2">
                      <span>Scopri di più</span>
                      <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>
              </div>

              {/* YouTube Video Player - Mobile optimized */}
              <div className={`relative w-full sm:w-72 lg:w-80 h-40 sm:h-44 lg:h-48 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm lg:flex-shrink-0 transition-all duration-600 ease-out delay-800 ${
                visibleItems[4] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}>
                {/* Video Label Badge - Mobile optimized */}
                <div className={`absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-300 ease-out delay-1000 ${
                  visibleItems[5] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  <span className="inline-block bg-blue-600/90 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium shadow-md backdrop-blur-sm whitespace-nowrap">
                    30 min demo
                  </span>
                </div>
                
                <iframe
                  src="https://www.youtube.com/embed/ZocHP6N9Aig"
                  title="Demo Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading={mobileConfig.connectionType === '4g' ? 'eager' : 'lazy'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileOptimizedHero;