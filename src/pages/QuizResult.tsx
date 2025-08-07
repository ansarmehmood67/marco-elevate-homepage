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
  HelpCircle
} from "lucide-react";

const QuizResult = () => {
  const [searchParams] = useSearchParams();
  const [recommendation, setRecommendation] = useState<ServiceRecommendation | null>(null);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const businessNeed = searchParams.get('need') as BusinessNeed;
    const teamSize = searchParams.get('size') as TeamSize;
    const preference = searchParams.get('pref') as Preference;
    const name = searchParams.get('name') || "there";

    setUserName(name);

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
        // Fallback to clipboard
        await navigator.clipboard.writeText(window.location.href);
      }
    } else {
      // Fallback to clipboard
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  if (!recommendation) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-muted-foreground">Loading your personalized recommendation...</p>
        </div>
      </div>
    );
  }

  const IconComponent = getServiceIcon(recommendation.icon);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center space-y-6 mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Perfect Match Found!</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Hey {userName}! 👋
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Based on your responses, here's the perfect solution to accelerate your business growth:
            </p>
          </div>

          {/* Service Recommendation Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-premium">
              <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-12">
                {/* Service Icon & Title */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-10 h-10 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-foreground">
                      {recommendation.title}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      {recommendation.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    What you'll get:
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {recommendation.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      asChild 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Link to={recommendation.route} className="flex items-center">
                        {recommendation.ctaText}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg"
                      onClick={handleShare}
                      className="flex items-center"
                    >
                      <Share2 className="w-5 h-5 mr-2" />
                      Share Result
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional CTA Section */}
            <div className="mt-12 text-center space-y-6">
              <div className="bg-muted/50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to get started?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Book a free 15-minute consultation to discuss your specific needs and see how we can help you achieve your business goals.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Free Consultation
                  </Button>
                  
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/">
                      <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
                      Back to Home
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default QuizResult;