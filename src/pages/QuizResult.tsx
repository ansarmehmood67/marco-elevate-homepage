import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getServiceRecommendation } from "@/services/quizLogic";
import { ServiceRecommendation, BusinessNeed, TeamSize, Preference } from "@/types/quiz";
import { 
  ArrowRight, 
  CheckCircle, 
  Share2, 
  Calendar,
  Users,
  Target,
  MessageCircle,
  Zap,
  BarChart3,
  Lightbulb,
  Youtube,
  Bot,
  Code,
  Cloud,
  Wrench,
  Puzzle,
  Phone,
  Headphones,
  Megaphone,
  HelpCircle,
  Star,
  Play,
  TrendingUp,
  Award,
  Shield
} from "lucide-react";

const QuizResult = () => {
  const [searchParams] = useSearchParams();
  const [recommendation, setRecommendation] = useState<ServiceRecommendation | null>(null);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const businessNeed = searchParams.get('need') as BusinessNeed;
    const teamSize = searchParams.get('size') as TeamSize;
    const preference = searchParams.get('pref') as Preference;
    const nameParam = searchParams.get('name') || '';
    const emailParam = searchParams.get('email') || '';

    // Use name if provided, otherwise extract from email
    let displayName = nameParam;
    if (!displayName && emailParam) {
      displayName = emailParam.split('@')[0];
      // Capitalize first letter and remove numbers/special chars
      displayName = displayName.replace(/[^a-zA-Z]/g, '');
      if (displayName) {
        displayName = displayName.charAt(0).toUpperCase() + displayName.slice(1);
      }
    }
    
    setUserName(displayName || 'there');

    if (businessNeed && teamSize && preference) {
      const result = getServiceRecommendation(businessNeed, teamSize, preference);
      setRecommendation(result);
    }
  }, [searchParams]);

  const getServiceIcon = (iconName: string) => {
    const icons: Record<string, any> = {
      Users,
      Target,
      MessageCircle,
      Zap,
      BarChart3,
      Lightbulb,
      Youtube,
      Bot,
      Code,
      Cloud,
      Wrench,
      Puzzle,
      Phone,
      Headphones,
      Megaphone,
      HelpCircle
    };
    
    return icons[iconName] || Target;
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `My Recommended Service: ${recommendation?.title}`,
          text: `I just discovered the perfect solution for my business needs!`,
          url: window.location.href,
        });
      } catch (error) {
        await navigator.clipboard.writeText(window.location.href);
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  if (!recommendation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-[#2E8BC0] border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-slate-600 text-lg">Loading your personalized recommendation...</p>
        </div>
      </div>
    );
  }

  const IconComponent = getServiceIcon(recommendation.icon);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24 pb-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-[#2E8BC0]/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-32 h-32 bg-[#87CEEB]/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/20">
                <CheckCircle className="w-5 h-5 text-[#87CEEB]" />
                <span className="font-semibold">Perfect Match Found!</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Hey {userName}! 👋
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Based on your responses, here's the perfect solution to accelerate your business growth:
              </p>
            </div>
          </div>
        </section>

        {/* Service Recommendation Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              {/* Main Service Card */}
              <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl border border-slate-200/50 mb-16 overflow-hidden">
                <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-8 xl:space-x-12">
                  {/* Service Icon & Title */}
                  <div className="flex-shrink-0 lg:max-w-md">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] rounded-3xl flex items-center justify-center mb-6 shadow-lg">
                      <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-white" />
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight break-words">
                        {recommendation.title}
                      </h2>
                      <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                        {recommendation.detailedDescription || recommendation.description}
                      </p>
                    </div>
                  </div>

                  {/* Features & Benefits */}
                  <div className="flex-1 min-w-0 space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-6">
                        What you'll get:
                      </h3>
                      <div className="grid gap-3">
                        {recommendation.features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                            <CheckCircle className="w-5 h-5 text-[#2E8BC0] flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits Section */}
                    {recommendation.benefits && (
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">
                          Key Benefits:
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {recommendation.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-[#2E8BC0]/10 to-[#87CEEB]/10 border border-[#2E8BC0]/20">
                              <TrendingUp className="w-5 h-5 text-[#2E8BC0] flex-shrink-0" />
                              <span className="text-slate-700 font-medium">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Primary CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                      <Button 
                        asChild 
                        size="lg" 
                        className="bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] hover:from-[#87CEEB] hover:to-[#2E8BC0] text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex-1 sm:flex-initial"
                      >
                        <Link to={recommendation.route} className="flex items-center justify-center">
                          {recommendation.ctaText}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="border-2 border-[#2E8BC0] text-[#2E8BC0] hover:bg-[#2E8BC0] hover:text-white font-bold flex-1 sm:flex-initial"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Free Consultation
                      </Button>
                      
                      <Button 
                        variant="ghost" 
                        size="lg"
                        onClick={handleShare}
                        className="text-slate-600 hover:text-slate-900 hidden sm:flex"
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Section */}
              {recommendation.videoUrl && (
                <div className="bg-slate-900 rounded-3xl p-6 md:p-8 lg:p-12 mb-16 overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="order-2 lg:order-1">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6">
                        See it in action
                      </h3>
                      <p className="text-lg md:text-xl text-slate-300 mb-6 lg:mb-8 leading-relaxed">
                        Watch how we've helped businesses like yours achieve remarkable results.
                      </p>
                      <div className="flex items-center space-x-4 text-slate-400">
                        <Play className="w-5 h-5" />
                        <span>3 minute overview</span>
                      </div>
                    </div>
                    <div className="order-1 lg:order-2 aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
                      <iframe
                        src={recommendation.videoUrl}
                        title={`${recommendation.title} Demo`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Testimonial Section */}
              {recommendation.testimonial && (
                <div className="bg-gradient-to-r from-[#2E8BC0]/10 to-[#87CEEB]/10 rounded-3xl p-8 md:p-12 mb-16 border border-[#2E8BC0]/20">
                  <div className="text-center max-w-4xl mx-auto">
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 leading-relaxed">
                      "{recommendation.testimonial.text}"
                    </blockquote>
                    <cite className="text-lg text-slate-600 font-medium">
                      — {recommendation.testimonial.author}
                    </cite>
                  </div>
                </div>
              )}

              {/* Why This Match Section */}
              <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl border border-slate-200/50 mb-16 overflow-hidden">
                <div className="text-center mb-8 lg:mb-12">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                    Why this is perfect for you
                  </h3>
                  <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                    Our AI matched you based on your specific needs and preferences
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  <div className="text-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Target className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Perfect Fit</h4>
                    <p className="text-slate-600">Matches your business size and goals</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Award className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Proven Results</h4>
                    <p className="text-slate-600">Trusted by 500+ successful businesses</p>
                  </div>
                  
                  <div className="text-center sm:col-span-2 lg:col-span-1">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Risk-Free</h4>
                    <p className="text-slate-600">30-day money-back guarantee</p>
                  </div>
                </div>
              </div>

              {/* Final CTA Section */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-6 md:p-8 lg:p-12 text-center overflow-hidden">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6">
                  Ready to transform your business?
                </h3>
                <p className="text-lg md:text-xl text-slate-300 mb-6 lg:mb-8 max-w-3xl mx-auto leading-relaxed">
                  Join hundreds of businesses that have already accelerated their growth with our proven solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center max-w-lg mx-auto">
                  <Button 
                    asChild
                    size="lg" 
                    className="bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] hover:from-[#87CEEB] hover:to-[#2E8BC0] text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                  >
                    <Link to={recommendation.route} className="flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Start Now
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold w-full sm:w-auto"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Free Call
                  </Button>
                </div>

                <div className="mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-slate-700">
                  <p className="text-slate-400 text-sm">
                    Still not sure? <Link to="/" className="text-[#87CEEB] hover:underline">Explore all our services</Link> or take the quiz again.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default QuizResult;