
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";
import { CheckCircle, Moon, Sun, TrendingUp, Users, Target, BarChart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SalesOnDemand = () => {
  const [isDark, setIsDark] = useState(true);

  const phases = [
    {
      number: "01",
      title: "Analysis & Custom Strategy",
      description: "We analyze your market, current flow, and goals to build a custom growth plan.",
      benefit: "Strategic plan aligned with company goals",
      icon: Target
    },
    {
      number: "02", 
      title: "Implementation & Coordination",
      description: "We manage the team, generate leads, and execute sales campaigns.",
      benefit: "Optimized process and synchronized team",
      icon: Users
    },
    {
      number: "03",
      title: "Monitoring & Optimization", 
      description: "We track key metrics to improve closing rates and ensure ROI.",
      benefit: "Tangible results and performance tracking",
      icon: BarChart
    },
    {
      number: "04",
      title: "Scalability",
      description: "Once it works, we scale. Build long-term predictable sales.",
      benefit: "Sustainable growth and flexibility",
      icon: TrendingUp
    }
  ];

  const whyCards = [
    {
      title: "Convert cost into service",
      description: "Cancel anytime, high performance guaranteed"
    },
    {
      title: "All-in-one system",
      description: "Lead gen + closing with experts"
    },
    {
      title: "Replicable and scalable",
      description: "Built to grow with you"
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark ? 'bg-black text-white' : 'bg-white text-slate-900'
    }`}>
      <Navigation />

      {/* Hero Section */}
      <section className={`pt-20 pb-2 px-0 transition-all duration-500 ${
        isDark ? 'bg-black' : 'bg-white'
      }`}>
        {/* Theme Toggle */}
        <div className="absolute top-24 right-6 z-50">
          <div className={`flex items-center space-x-3 backdrop-blur-sm rounded-full px-4 py-2 border transition-all duration-500 ${
            isDark 
              ? 'bg-white/10 border-white/20' 
              : 'bg-white/90 border-gray-200 shadow-lg'
          }`}>
            <Sun className={`w-4 h-4 transition-colors ${isDark ? 'text-slate-400' : 'text-amber-500'}`} />
            <Switch 
              checked={isDark} 
              onCheckedChange={setIsDark}
              className={isDark ? "data-[state=checked]:bg-slate-700 data-[state=unchecked]:bg-amber-100" : "data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-amber-200"}
            />
            <Moon className={`w-4 h-4 transition-colors ${isDark ? 'text-blue-400' : 'text-slate-500'}`} />
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div 
            className={`relative min-h-[85vh] rounded-3xl overflow-hidden transition-all duration-500 ${
              isDark 
                ? 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900' 
                : 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 border border-blue-200/30 shadow-2xl'
            }`}
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Dark overlay */}
            <div className={`absolute inset-0 transition-all duration-500 ${
              isDark 
                ? 'bg-gradient-to-br from-black/40 via-transparent to-black/60' 
                : 'bg-gradient-to-br from-blue-900/70 via-blue-800/50 to-blue-900/80'
            }`} />
            
            <div className={`absolute bottom-0 left-0 right-0 h-32 transition-all duration-500 ${
              isDark 
                ? 'bg-gradient-to-t from-black/80 via-black/40 to-transparent' 
                : 'bg-gradient-to-t from-blue-900/90 via-blue-800/60 to-transparent'
            }`} />
            
            {/* Content */}
            <div className="absolute bottom-12 left-12 max-w-2xl">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-white drop-shadow-2xl">
                Sales On Demand
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-200 mb-10 font-medium">
                Your outsourced sales force, ready to grow your revenue.
              </p>
              
              <Button className={`font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                isDark 
                  ? 'bg-white text-blue-900 hover:bg-gray-100 hover:shadow-white/30 border-2 border-white/20' 
                  : 'bg-white text-blue-900 hover:bg-blue-50 hover:shadow-white/40 border-2 border-white/30 font-bold'
              }`}>
                Discover how it works →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className={`py-20 px-6 transition-all duration-500 ${
        isDark ? 'bg-slate-900' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Why keep hiring when you can rent top sales talent?
          </h2>
          <p className="text-xl lg:text-2xl leading-relaxed opacity-80">
            Free up your time and increase your sales by renting experienced salespeople, already trained and ready to work for you. Forget the stress of recruitment and activate your sales force instantly.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={`py-20 px-6 transition-all duration-500 ${
        isDark ? 'bg-black' : 'bg-white'
      }`}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            How It Works
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <Card key={index} className={`p-8 transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-800' 
                    : 'bg-white border-gray-200 hover:shadow-xl'
                }`}>
                  <div className="flex items-start space-x-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                      isDark ? 'bg-blue-600' : 'bg-blue-100'
                    }`}>
                      <Icon className={`w-8 h-8 ${isDark ? 'text-white' : 'text-blue-600'}`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className={`text-sm font-bold mb-2 ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        Phase {phase.number}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                      <p className="text-lg mb-4 opacity-80">{phase.description}</p>
                      <div className={`flex items-center space-x-2 ${
                        isDark ? 'text-green-400' : 'text-green-600'
                      }`}>
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-medium">{phase.benefit}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className={`py-20 px-6 transition-all duration-500 ${
        isDark ? 'bg-slate-900' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            Why Choose Sales On Demand
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {whyCards.map((card, index) => (
              <Card key={index} className={`p-8 text-center transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-800' 
                  : 'bg-white border-gray-200 hover:shadow-xl'
              }`}>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-lg opacity-80">{card.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className={`py-20 px-6 relative overflow-hidden transition-all duration-500 ${
        isDark ? 'bg-black' : 'bg-white'
      }`}>
        {/* Animated background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-16">
            Let the numbers speak.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className={`text-4xl font-bold mb-2 ${
                isDark ? 'text-green-400' : 'text-green-600'
              }`}>
                +30%
              </div>
              <div className="text-lg">Revenue increase</div>
            </div>
            <div className="text-center">
              <div className={`text-4xl font-bold mb-2 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}>
                +25%
              </div>
              <div className="text-lg">Closing rate improvement</div>
            </div>
            <div className="text-center">
              <div className={`text-4xl font-bold mb-2 ${
                isDark ? 'text-purple-400' : 'text-purple-600'
              }`}>
                +20%
              </div>
              <div className="text-lg">Team productivity boost</div>
            </div>
          </div>
          
          <div className={`p-8 rounded-2xl ${
            isDark ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50' : 'bg-gradient-to-r from-blue-100 to-purple-100'
          }`}>
            <p className="text-2xl font-bold">
              "Every €1 invested in an On-Demand Sales Director can generate €5–10 in revenue."
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className={`py-20 px-6 transition-all duration-500 ${
        isDark ? 'bg-slate-900' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto max-w-4xl">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/1RYOQhiJcmk"
              title="Marco Ferrario - Sales On Demand"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Book Promo Section */}
      <section className={`py-20 px-6 transition-all duration-500 ${
        isDark ? 'bg-black' : 'bg-white'
      }`}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Want to go deeper?
              </h2>
              <p className="text-xl mb-8 opacity-80">
                Download Marco Ferrario's book "Sales as a Service" to learn how to create effective and repeatable sales processes.
              </p>
              <Button className={`px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
              }`}>
                I Want to Read the Book
              </Button>
            </div>
            <div className="text-center">
              <div className={`w-80 h-96 mx-auto rounded-lg shadow-2xl ${
                isDark ? 'bg-slate-800' : 'bg-gray-200'
              } flex items-center justify-center`}>
                <span className="text-lg font-medium opacity-60">Book Cover</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section 
        className="py-20 px-6 relative overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10 text-white">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            Book a free consultation
          </h2>
          <p className="text-2xl mb-12 opacity-90">
            Let us show you how to optimize resources and boost your revenue.
          </p>
          
          <div className={`max-w-2xl mx-auto p-8 rounded-2xl backdrop-blur-sm ${
            isDark ? 'bg-black/30' : 'bg-white/20'
          } border border-white/20`}>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <Button className="w-full py-4 text-lg font-semibold bg-white text-black hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-105">
                Book Now
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SalesOnDemand;
