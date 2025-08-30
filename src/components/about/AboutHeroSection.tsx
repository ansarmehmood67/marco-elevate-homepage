import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Award, Target, ArrowRight, Sparkles, Star } from "lucide-react";
import heroBackgroundImg from "@/assets/about-hero-bg.png";
import heroPersonImg from "@/assets/about-hero-person.png";

const AboutHeroSection = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    revenue: 0,
    success: 0,
    years: 0
  });

  const finalValues = {
    clients: 500,
    revenue: 50,
    success: 95,
    years: 15
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => ({
        clients: Math.min(prev.clients + finalValues.clients / steps, finalValues.clients),
        revenue: Math.min(prev.revenue + finalValues.revenue / steps, finalValues.revenue),
        success: Math.min(prev.success + finalValues.success / steps, finalValues.success),
        years: Math.min(prev.years + finalValues.years / steps, finalValues.years)
      }));
    }, stepDuration);

    const timeout = setTimeout(() => {
      clearInterval(timer);
      setCounters(finalValues);
    }, duration);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="pt-20 pb-2 px-0 bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[85vh] rounded-3xl overflow-hidden border border-gray-800/30 shadow-2xl bg-black">
          {/* Background Image */}
          <img
            src={heroBackgroundImg}
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60" />
          
          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent" />
          
          {/* Desktop Layout: Two Columns */}
          <div className="absolute inset-0 flex flex-col lg:flex-row z-20">
            {/* Left Content Section */}
            <div className="flex-1 flex flex-col justify-end p-4 sm:p-6 lg:p-12">
              <div className="max-w-2xl">
                <div className="mb-6 flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white/90 font-medium text-sm lg:text-base">La nostra storia</span>
                </div>
                
                <h1 className="text-6xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white mb-4 lg:mb-6 drop-shadow-2xl">
                  Chi Siamo
                </h1>
                <div className="text-2xl sm:text-5xl lg:text-5xl text-white/95 font-bold tracking-wide mb-6 lg:mb-8">
                  la nostra storia
                </div>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 mb-6 lg:mb-8 font-light leading-relaxed">
                  Da oltre 15 anni trasformiamo le <span className="font-semibold text-blue-200">vendite in successi</span> per centinaia di aziende italiane.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button className="group font-semibold px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-blue-900 hover:bg-blue-50 border-2 border-white/30">
                    <span className="flex items-center space-x-2">
                      <span>Scopri la nostra storia</span>
                      <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>

                {/* Statistics Cards - Mobile Only */}
                <div className="lg:hidden grid grid-cols-2 gap-3 w-full">
                  <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-center hover:scale-105 transition-all duration-300 hover:bg-white/20">
                    <CardContent className="p-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-xl font-bold text-white mb-1">
                        {Math.round(counters.clients)}+
                      </div>
                      <div className="text-white/70 text-xs">Aziende</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-center hover:scale-105 transition-all duration-300 hover:bg-white/20">
                    <CardContent className="p-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-400 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <TrendingUp className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-xl font-bold text-white mb-1">
                        {Math.round(counters.revenue)}M€
                      </div>
                      <div className="text-white/70 text-xs">Fatturato</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-center hover:scale-105 transition-all duration-300 hover:bg-white/20">
                    <CardContent className="p-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <Award className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-xl font-bold text-white mb-1">
                        {Math.round(counters.success)}%
                      </div>
                      <div className="text-white/70 text-xs">Successo</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-center hover:scale-105 transition-all duration-300 hover:bg-white/20">
                    <CardContent className="p-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-400 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <Target className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-xl font-bold text-white mb-1">
                        {Math.round(counters.years)}+
                      </div>
                      <div className="text-white/70 text-xs">Anni</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Right Image Section - Hidden on Mobile */}
            <div className="hidden lg:flex lg:w-1/3 relative items-end">
              <img
                src={heroPersonImg}
                alt="About Us Person"
                className="w-full h-auto object-contain object-bottom"
              />
              
              {/* Statistics Cards positioned over the image */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2 grid grid-cols-1 gap-4 w-64">
                <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-center hover:scale-105 transition-all duration-300 hover:bg-white/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {Math.round(counters.clients)}+
                    </div>
                    <div className="text-white/70 text-sm">Aziende</div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-center hover:scale-105 transition-all duration-300 hover:bg-white/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {Math.round(counters.revenue)}M€
                    </div>
                    <div className="text-white/70 text-sm">Fatturato</div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-center hover:scale-105 transition-all duration-300 hover:bg-white/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {Math.round(counters.success)}%
                    </div>
                    <div className="text-white/70 text-sm">Successo</div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-center hover:scale-105 transition-all duration-300 hover:bg-white/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {Math.round(counters.years)}+
                    </div>
                    <div className="text-white/70 text-sm">Anni</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;