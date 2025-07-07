
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";
import { CheckCircle, Moon, Sun, TrendingUp, Users, Target, BarChart, Star, ArrowRight, Play, Zap, Shield, Rocket } from "lucide-react";
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
      <section className={`pt-20 pb-2 px-0 transition-all duration-500 relative overflow-hidden ${
        isDark ? 'bg-black' : 'bg-white'
      }`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            isDark ? 'bg-blue-500' : 'bg-blue-300'
          } animate-pulse`} style={{ animationDuration: '4s' }} />
          <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-15 ${
            isDark ? 'bg-purple-500' : 'bg-purple-300'
          } animate-pulse`} style={{ animationDuration: '6s', animationDelay: '2s' }} />
        </div>

        {/* Theme Toggle */}
        <div className="absolute top-24 right-6 z-50">
          <div className={`flex items-center space-x-3 backdrop-blur-xl rounded-full px-6 py-3 border transition-all duration-500 shadow-2xl ${
            isDark 
              ? 'bg-black/20 border-white/10 shadow-white/10' 
              : 'bg-white/90 border-gray-200/50 shadow-black/10'
          }`}>
            <Sun className={`w-5 h-5 transition-all duration-300 ${isDark ? 'text-slate-400 scale-90' : 'text-amber-500 scale-110'}`} />
            <Switch 
              checked={isDark} 
              onCheckedChange={setIsDark}
              className={`transition-all duration-300 ${
                isDark 
                  ? "data-[state=checked]:bg-slate-700 data-[state=unchecked]:bg-amber-100" 
                  : "data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-amber-200"
              }`}
            />
            <Moon className={`w-5 h-5 transition-all duration-300 ${isDark ? 'text-blue-400 scale-110' : 'text-slate-500 scale-90'}`} />
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div 
            className={`relative min-h-[85vh] rounded-3xl overflow-hidden transition-all duration-500 shadow-2xl ${
              isDark 
                ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 border border-white/10' 
                : 'bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 border border-blue-200/30'
            }`}
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Floating Elements */}
            <div className="absolute top-20 right-20 opacity-20">
              <div className={`w-32 h-32 rounded-full border-2 animate-spin ${
                isDark ? 'border-white/20 border-t-white/40' : 'border-white/30 border-t-white/60'
              }`} style={{ animationDuration: '20s' }} />
            </div>
            <div className="absolute bottom-20 left-20 opacity-30">
              <Zap className={`w-16 h-16 ${isDark ? 'text-blue-400' : 'text-white'} animate-pulse`} />
            </div>
            
            {/* Enhanced Gradient Overlays */}
            <div className={`absolute inset-0 transition-all duration-500 ${
              isDark 
                ? 'bg-gradient-to-br from-black/30 via-transparent to-purple-900/50' 
                : 'bg-gradient-to-br from-blue-900/60 via-indigo-800/40 to-purple-900/60'
            }`} />
            
            <div className={`absolute bottom-0 left-0 right-0 h-40 transition-all duration-500 ${
              isDark 
                ? 'bg-gradient-to-t from-black/80 via-black/30 to-transparent' 
                : 'bg-gradient-to-t from-purple-900/90 via-purple-800/50 to-transparent'
            }`} />
            
            {/* Enhanced Content */}
            <div className="absolute bottom-16 left-16 max-w-3xl">
              <div className="mb-6 flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-white/90 font-medium">Trusted by 500+ companies</span>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-black leading-tight mb-8 text-white drop-shadow-2xl bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Sales On Demand
              </h1>
              
              <p className="text-2xl lg:text-3xl text-gray-100 mb-12 font-light leading-relaxed max-w-2xl">
                Your outsourced sales force, ready to <span className="font-semibold text-blue-200">grow your revenue</span> exponentially.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className={`group font-bold px-10 py-5 text-xl rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-3xl ${
                  isDark 
                    ? 'bg-white text-blue-900 hover:bg-blue-50 border-2 border-white/30' 
                    : 'bg-white text-blue-900 hover:bg-blue-50 border-2 border-white/40'
                } backdrop-blur-sm relative overflow-hidden`}>
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Discover how it works</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-20 transition-opacity" />
                </Button>
                
                <Button variant="outline" className={`font-semibold px-8 py-5 text-xl rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'border-white/40 text-white hover:bg-white/10 backdrop-blur-sm' 
                    : 'border-white/60 text-white hover:bg-white/20 backdrop-blur-sm'
                }`}>
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Performance Indicators */}
            <div className="absolute top-20 left-20 space-y-4">
              <div className={`backdrop-blur-xl rounded-xl p-4 border transition-all duration-500 ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-white/10 border-white/20'
              }`}>
                <div className="text-3xl font-bold text-white">+30%</div>
                <div className="text-white/80 text-sm">Revenue Growth</div>
              </div>
              <div className={`backdrop-blur-xl rounded-xl p-4 border transition-all duration-500 ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-white/10 border-white/20'
              }`}>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-white/80 text-sm">Success Stories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className={`py-24 px-6 transition-all duration-500 relative overflow-hidden ${
        isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${isDark ? 'white' : 'black'} 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-6 py-2 rounded-full text-sm font-medium mb-6 ${
              isDark ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-blue-100 text-blue-700 border border-blue-200'
            }`}>
              <Rocket className="w-4 h-4 mr-2" />
              The Solution You've Been Looking For
            </div>
            <h2 className={`text-5xl lg:text-7xl font-black mb-12 leading-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Why keep <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'} italic`}>hiring</span><br />
              when you can <span className={`${isDark ? 'text-purple-400' : 'text-purple-600'} italic`}>rent</span><br />
              top sales talent?
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className={`text-2xl lg:text-3xl leading-relaxed font-light ${
                isDark ? 'text-gray-300' : 'text-slate-700'
              }`}>
                Free up your time and <span className="font-semibold text-green-500">increase your sales</span> by renting experienced salespeople, already trained and ready to work for you.
              </p>
              <p className={`text-xl leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-slate-600'
              }`}>
                Forget the stress of recruitment and activate your sales force <span className="font-semibold">instantly</span>.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className={`p-6 rounded-2xl ${
                  isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-white border border-gray-200'
                } shadow-lg`}>
                  <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                    0 Days
                  </div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Setup Time
                  </div>
                </div>
                <div className={`p-6 rounded-2xl ${
                  isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-white border border-gray-200'
                } shadow-lg`}>
                  <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    100%
                  </div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Ready to Go
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className={`p-8 rounded-3xl ${
                isDark ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-white/10' : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200/50'
              } backdrop-blur-sm shadow-2xl`}>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full ${isDark ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-600'}`}>
                      <span className="text-2xl">❌</span>
                    </div>
                    <div>
                      <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Traditional Hiring</h4>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Months of recruitment, training costs, uncertain results
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-l-2 border-dashed border-gray-400 ml-6 h-8" />
                  
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full ${isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'}`}>
                      <span className="text-2xl">✅</span>
                    </div>
                    <div>
                      <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Sales On Demand</h4>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Instant activation, proven results, scalable solution
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className={`absolute -top-4 -right-4 px-4 py-2 rounded-full text-sm font-bold ${
                isDark ? 'bg-yellow-500 text-black' : 'bg-yellow-400 text-yellow-900'
              } shadow-lg transform rotate-12`}>
                Smart Choice!
              </div>
            </div>
          </div>
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
