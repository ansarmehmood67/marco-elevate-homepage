
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
      <section className={`pt-24 pb-2 px-0 transition-all duration-500 relative overflow-hidden ${
        isDark ? 'bg-black' : 'bg-white'
      }`}>
        {/* Animated Moving Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Geometric Shapes */}
          <div className={`absolute top-20 left-10 w-32 h-32 ${isDark ? 'bg-blue-500/20' : 'bg-blue-400/30'} rounded-full animate-bounce`} style={{ animationDuration: '3s', animationDelay: '0s' }} />
          <div className={`absolute top-40 right-20 w-24 h-24 ${isDark ? 'bg-purple-500/20' : 'bg-purple-400/30'} rotate-45 animate-spin`} style={{ animationDuration: '8s' }} />
          <div className={`absolute bottom-32 left-1/4 w-16 h-16 ${isDark ? 'bg-cyan-500/20' : 'bg-cyan-400/30'} rounded-full animate-pulse`} style={{ animationDuration: '2s' }} />
          
          {/* Moving Gradient Orbs */}
          <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-30 ${
            isDark ? 'bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500' : 'bg-gradient-to-br from-blue-300 via-purple-300 to-cyan-300'
          }`} style={{ 
            animation: 'float 6s ease-in-out infinite',
            transform: 'translateX(-50px)',
          }} />
          <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-25 ${
            isDark ? 'bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-500' : 'bg-gradient-to-tr from-purple-300 via-pink-300 to-orange-300'
          }`} style={{ 
            animation: 'float 8s ease-in-out infinite reverse',
            animationDelay: '2s',
            transform: 'translateX(30px)',
          }} />
          
          {/* Animated Lines */}
          <div className="absolute inset-0">
            <svg className="w-full h-full opacity-10" viewBox="0 0 1200 800">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: isDark ? '#3B82F6' : '#60A5FA', stopOpacity: 0.6}} />
                  <stop offset="100%" style={{stopColor: isDark ? '#8B5CF6' : '#A78BFA', stopOpacity: 0.2}} />
                </linearGradient>
              </defs>
              <path d="M0,400 Q300,200 600,400 T1200,400" fill="none" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" />
              <path d="M0,300 Q400,100 800,300 T1200,300" fill="none" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{animationDelay: '1s'}} />
            </svg>
          </div>
        </div>
        
        {/* CSS Keyframes for custom animations */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(-50px); }
            50% { transform: translateY(-20px) translateX(50px); }
          }
        `}</style>

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
          >
            {/* Video Background */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ zIndex: 1 }}
            >
              <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1751915074/6389-191704465_wn49on.mp4" type="video/mp4" />
            </video>
            
            {/* Video Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" style={{ zIndex: 2 }} />
            {/* Floating Elements */}
            <div className="absolute top-20 right-20 opacity-20" style={{ zIndex: 3 }}>
              <div className={`w-32 h-32 rounded-full border-2 animate-spin ${
                isDark ? 'border-white/20 border-t-white/40' : 'border-white/30 border-t-white/60'
              }`} style={{ animationDuration: '20s' }} />
            </div>
            <div className="absolute bottom-20 left-20 opacity-30" style={{ zIndex: 3 }}>
              <Zap className={`w-16 h-16 ${isDark ? 'text-blue-400' : 'text-white'} animate-pulse`} />
            </div>
            
            {/* Enhanced Content */}
            <div className="absolute bottom-16 left-16 max-w-3xl" style={{ zIndex: 4 }}>
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

            
          </div>
        </div>
      </section>

      {/* The Problem Section - Enhanced */}
      <section className={`py-32 px-0 transition-all duration-500 relative overflow-hidden ${
        isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}>
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          {/* Floating particles */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 ${isDark ? 'bg-blue-400' : 'bg-blue-600'} rounded-full animate-pulse`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
          
          {/* Geometric background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, ${isDark ? 'white' : 'black'} 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          {/* Moving gradient orbs */}
          <div className={`absolute top-20 right-20 w-64 h-64 ${isDark ? 'bg-blue-500/10' : 'bg-blue-400/20'} rounded-full blur-3xl animate-pulse`} />
          <div className={`absolute bottom-20 left-20 w-80 h-80 ${isDark ? 'bg-purple-500/10' : 'bg-purple-400/20'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className={`inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 backdrop-blur-xl shadow-2xl ${
              isDark ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-blue-100 text-blue-700 border border-blue-200'
            } transition-all duration-300 hover:scale-105`}>
              <Rocket className="w-6 h-6 mr-3 animate-bounce" />
              The Solution You've Been Looking For
            </div>
            <h2 className={`text-6xl lg:text-8xl font-black mb-16 leading-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            } animate-fade-in`}>
              Why keep <span className={`${isDark ? 'text-blue-400 drop-shadow-lg' : 'text-blue-600'} italic bg-gradient-to-r ${isDark ? 'from-blue-400 to-cyan-400' : 'from-blue-600 to-cyan-600'} bg-clip-text text-transparent`}>hiring</span><br />
              when you can <span className={`${isDark ? 'text-purple-400 drop-shadow-lg' : 'text-purple-600'} italic bg-gradient-to-r ${isDark ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600'} bg-clip-text text-transparent`}>rent</span><br />
              top sales talent?
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="relative">
                <p className={`text-3xl lg:text-4xl leading-relaxed font-light ${
                  isDark ? 'text-gray-300' : 'text-slate-700'
                } mb-8`}>
                  Free up your time and <span className={`font-bold ${isDark ? 'text-green-400' : 'text-green-600'} bg-gradient-to-r ${isDark ? 'from-green-400 to-emerald-400' : 'from-green-600 to-emerald-600'} bg-clip-text text-transparent`}>increase your sales</span> by renting experienced salespeople, already trained and ready to work for you.
                </p>
                <div className={`absolute -left-4 top-0 w-1 h-full ${isDark ? 'bg-blue-400' : 'bg-blue-600'} rounded-full animate-pulse`} />
              </div>
              
              <p className={`text-2xl leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-slate-600'
              }`}>
                Forget the stress of recruitment and activate your sales force <span className={`font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>instantly</span>.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-12">
                <div className={`group p-8 rounded-3xl ${
                  isDark ? 'bg-gradient-to-br from-slate-800/80 to-slate-700/80 border border-slate-600' : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
                } shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 backdrop-blur-sm`}>
                  <div className={`text-5xl font-black mb-4 ${isDark ? 'text-green-400' : 'text-green-600'} group-hover:scale-110 transition-transform duration-300`}>
                    0
                  </div>
                  <div className={`text-2xl font-bold mb-2 ${isDark ? 'text-green-300' : 'text-green-700'}`}>
                    Days
                  </div>
                  <div className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Setup Time
                  </div>
                </div>
                <div className={`group p-8 rounded-3xl ${
                  isDark ? 'bg-gradient-to-br from-slate-800/80 to-slate-700/80 border border-slate-600' : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
                } shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 backdrop-blur-sm`}>
                  <div className={`text-5xl font-black mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'} group-hover:scale-110 transition-transform duration-300`}>
                    100<span className="text-2xl">%</span>
                  </div>
                  <div className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Ready to Go
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* 3D Comparison Card */}
              <div className={`group p-10 rounded-3xl ${
                isDark ? 'bg-gradient-to-br from-slate-800/90 via-blue-900/50 to-purple-900/50 border border-white/20' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50 border border-blue-200/50'
              } backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 relative overflow-hidden`}>
                
                {/* Animated background particles */}
                <div className="absolute inset-0 opacity-30">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 ${isDark ? 'bg-white' : 'bg-blue-400'} rounded-full animate-pulse`}
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${10 + i * 20}%`,
                        animationDelay: `${i * 0.5}s`
                      }}
                    />
                  ))}
                </div>
                
                <div className="space-y-8 relative z-10">
                  <div className="flex items-start space-x-6">
                    <div className={`p-4 rounded-2xl ${isDark ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-red-100 text-red-600 border border-red-200'} animate-bounce`} style={{ animationDuration: '2s' }}>
                      <span className="text-3xl">❌</span>
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Traditional Hiring</h4>
                      <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Months of recruitment, training costs, uncertain results
                      </p>
                      <div className="flex space-x-2 mt-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${isDark ? 'bg-red-500/20 text-red-300' : 'bg-red-100 text-red-600'}`}>
                          Slow
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm ${isDark ? 'bg-red-500/20 text-red-300' : 'bg-red-100 text-red-600'}`}>
                          Expensive
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm ${isDark ? 'bg-red-500/20 text-red-300' : 'bg-red-100 text-red-600'}`}>
                          Risky
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`border-l-4 border-dashed ${isDark ? 'border-gray-500' : 'border-gray-400'} ml-8 h-12 animate-pulse`} />
                  
                  <div className="flex items-start space-x-6">
                    <div className={`p-4 rounded-2xl ${isDark ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-green-100 text-green-600 border border-green-200'} animate-bounce`} style={{ animationDuration: '2s', animationDelay: '0.5s' }}>
                      <span className="text-3xl">✅</span>
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Sales On Demand</h4>
                      <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Instant activation, proven results, scalable solution
                      </p>
                      <div className="flex space-x-2 mt-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${isDark ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-600'}`}>
                          Instant
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm ${isDark ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-600'}`}>
                          Cost-effective
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm ${isDark ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-600'}`}>
                          Proven
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Floating Badge */}
              <div className={`absolute -top-6 -right-6 px-6 py-3 rounded-2xl text-lg font-black ${
                isDark ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black' : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
              } shadow-2xl transform rotate-12 animate-pulse hover:rotate-6 hover:scale-110 transition-all duration-300`}>
                Smart Choice! 🚀
              </div>
              
              {/* Additional floating elements */}
              <div className={`absolute -bottom-4 -left-4 w-16 h-16 ${isDark ? 'bg-blue-500/20' : 'bg-blue-400/30'} rounded-full blur-xl animate-pulse`} />
              <div className={`absolute top-1/2 -right-8 w-12 h-12 ${isDark ? 'bg-purple-500/20' : 'bg-purple-400/30'} rounded-full blur-lg animate-pulse`} style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Revolutionary Design */}
      <section className={`py-32 px-0 transition-all duration-500 relative overflow-hidden ${
        isDark ? 'bg-gradient-to-br from-black via-slate-900 to-black' : 'bg-gradient-to-br from-white via-gray-50 to-white'
      }`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Dynamic grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 gap-4 h-full">
              {[...Array(48)].map((_, i) => (
                <div
                  key={i}
                  className={`${isDark ? 'bg-blue-500' : 'bg-blue-600'} rounded-full opacity-20 animate-pulse`}
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: `${2 + Math.random()}s`
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Flowing gradients */}
          <div className={`absolute top-20 left-1/4 w-96 h-96 ${isDark ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' : 'bg-gradient-to-br from-blue-400/30 to-purple-400/30'} rounded-full blur-3xl animate-pulse`} />
          <div className={`absolute bottom-20 right-1/4 w-80 h-80 ${isDark ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20' : 'bg-gradient-to-br from-purple-400/30 to-pink-400/30'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '3s' }} />
        </div>
        
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <div className={`inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 backdrop-blur-xl shadow-2xl ${
              isDark ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'bg-purple-100 text-purple-700 border border-purple-200'
            } transition-all duration-300 hover:scale-105`}>
              <Target className="w-6 h-6 mr-3 animate-spin" style={{ animationDuration: '3s' }} />
              Our Proven 4-Phase Process
            </div>
            <h2 className={`text-6xl lg:text-8xl font-black mb-12 leading-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              How It <span className={`bg-gradient-to-r ${isDark ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'} bg-clip-text text-transparent`}>Works</span>
            </h2>
            <p className={`text-2xl lg:text-3xl ${isDark ? 'text-gray-300' : 'text-gray-700'} max-w-4xl mx-auto`}>
              A systematic approach that delivers <span className={`font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>guaranteed results</span>
            </p>
          </div>
          
          {/* Revolutionary Timeline Layout */}
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {phases.map((phase, index) => {
                const Icon = phase.icon;
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className={`group relative ${isEven ? 'lg:mr-8' : 'lg:ml-8 lg:mt-16'}`}>
                    {/* Phase Number Badge */}
                    <div className={`absolute -top-6 ${isEven ? '-left-6' : '-right-6'} w-16 h-16 rounded-full ${
                      isDark ? 'bg-gradient-to-br from-blue-500 to-purple-500' : 'bg-gradient-to-br from-blue-600 to-purple-600'
                    } flex items-center justify-center text-white font-black text-xl shadow-2xl group-hover:scale-110 transition-transform duration-300 z-10`}>
                      {phase.number}
                    </div>
                    
                    {/* Main Card */}
                    <div className={`relative p-10 rounded-3xl ${
                      isDark 
                        ? 'bg-gradient-to-br from-slate-800/90 via-slate-700/90 to-slate-800/90 border border-slate-600/50' 
                        : 'bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200/50'
                    } backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 group-hover:rotate-1 overflow-hidden`}>
                      
                      {/* Animated background particles */}
                      <div className="absolute inset-0 opacity-20">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className={`absolute w-2 h-2 ${isDark ? 'bg-blue-400' : 'bg-blue-600'} rounded-full animate-pulse`}
                            style={{
                              left: `${10 + i * 12}%`,
                              top: `${10 + i * 15}%`,
                              animationDelay: `${i * 0.3}s`
                            }}
                          />
                        ))}
                      </div>
                      
                      {/* Icon Section */}
                      <div className="flex items-start space-x-8 relative z-10">
                        <div className={`flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center ${
                          isDark ? 'bg-gradient-to-br from-blue-600 to-purple-600' : 'bg-gradient-to-br from-blue-100 to-purple-100'
                        } group-hover:rotate-12 transition-transform duration-500 shadow-lg`}>
                          <Icon className={`w-10 h-10 ${isDark ? 'text-white' : 'text-blue-600'} group-hover:scale-110 transition-transform duration-300`} />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className={`text-3xl lg:text-4xl font-black mb-6 ${isDark ? 'text-white' : 'text-slate-900'} group-hover:text-blue-500 transition-colors duration-300`}>
                            {phase.title}
                          </h3>
                          <p className={`text-xl lg:text-2xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                            {phase.description}
                          </p>
                          
                          {/* Benefit Badge */}
                          <div className={`inline-flex items-center space-x-3 px-6 py-4 rounded-2xl ${
                            isDark ? 'bg-green-500/20 border border-green-500/30' : 'bg-green-100 border border-green-200'
                          } group-hover:scale-105 transition-transform duration-300`}>
                            <CheckCircle className={`w-6 h-6 ${isDark ? 'text-green-400' : 'text-green-600'} animate-pulse`} />
                            <span className={`font-bold text-lg ${isDark ? 'text-green-300' : 'text-green-700'}`}>
                              {phase.benefit}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className={`absolute -bottom-4 -right-4 w-20 h-20 ${isDark ? 'bg-blue-500/10' : 'bg-blue-400/20'} rounded-full blur-2xl group-hover:blur-xl transition-all duration-500`} />
                      <div className={`absolute -top-4 -left-4 w-16 h-16 ${isDark ? 'bg-purple-500/10' : 'bg-purple-400/20'} rounded-full blur-2xl group-hover:blur-xl transition-all duration-500`} />
                    </div>
                    
                    {/* Connection Line */}
                    {index < phases.length - 1 && (
                      <div className={`hidden lg:block absolute ${isEven ? 'right-0 top-1/2' : 'left-0 top-1/2'} w-16 h-1 ${
                        isDark ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-blue-600 to-purple-600'
                      } ${isEven ? 'translate-x-full' : '-translate-x-full'} -translate-y-1/2 animate-pulse`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section - Luxury Experience */}
      <section className={`py-32 px-0 transition-all duration-500 relative overflow-hidden ${
        isDark ? 'bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900' : 'bg-gradient-to-br from-gray-50 via-blue-50/50 to-gray-50'
      }`}>
        {/* Sophisticated Background */}
        <div className="absolute inset-0">
          {/* Geometric patterns */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 1200 800">
              <defs>
                <pattern id="hexagons" x="0" y="0" width="50" height="43.4" patternUnits="userSpaceOnUse">
                  <polygon points="25,0 50,14.43 50,28.87 25,43.3 0,28.87 0,14.43" fill={isDark ? 'white' : 'black'} fillOpacity="0.1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexagons)" />
            </svg>
          </div>
          
          {/* Animated gradient orbs */}
          <div className={`absolute top-32 right-20 w-72 h-72 ${isDark ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20' : 'bg-gradient-to-br from-blue-400/30 to-cyan-400/30'} rounded-full blur-3xl animate-pulse`} />
          <div className={`absolute bottom-32 left-20 w-64 h-64 ${isDark ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20' : 'bg-gradient-to-br from-purple-400/30 to-pink-400/30'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className={`inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 backdrop-blur-xl shadow-2xl ${
              isDark ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-cyan-100 text-cyan-700 border border-cyan-200'
            } transition-all duration-300 hover:scale-105`}>
              <Shield className="w-6 h-6 mr-3 animate-pulse" />
              Unmatched Advantages
            </div>
            <h2 className={`text-6xl lg:text-8xl font-black mb-12 leading-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Why Choose <br />
              <span className={`bg-gradient-to-r ${isDark ? 'from-cyan-400 via-blue-400 to-purple-400' : 'from-cyan-600 via-blue-600 to-purple-600'} bg-clip-text text-transparent`}>
                Sales On Demand
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {whyCards.map((card, index) => (
              <div key={index} className="group relative">
                {/* Floating number badge */}
                <div className={`absolute -top-6 -left-6 w-16 h-16 rounded-full ${
                  isDark ? 'bg-gradient-to-br from-cyan-500 to-blue-500' : 'bg-gradient-to-br from-cyan-600 to-blue-600'
                } flex items-center justify-center text-white font-black text-xl shadow-2xl group-hover:scale-110 transition-transform duration-300 z-10`}>
                  {index + 1}
                </div>
                
                {/* Main card with premium styling */}
                <div className={`relative p-12 rounded-3xl ${
                  isDark 
                    ? 'bg-gradient-to-br from-slate-800/90 via-blue-900/30 to-slate-800/90 border border-slate-600/50' 
                    : 'bg-gradient-to-br from-white via-blue-50/50 to-white border border-gray-200/50'
                } backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 group-hover:-rotate-1 text-center overflow-hidden`}>
                  
                  {/* Animated particles background */}
                  <div className="absolute inset-0 opacity-30">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-1 h-1 ${isDark ? 'bg-cyan-400' : 'bg-blue-600'} rounded-full animate-pulse`}
                        style={{
                          left: `${15 + i * 15}%`,
                          top: `${20 + i * 20}%`,
                          animationDelay: `${i * 0.4}s`
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className={`text-3xl lg:text-4xl font-black mb-8 ${isDark ? 'text-white' : 'text-slate-900'} group-hover:text-blue-500 transition-colors duration-300`}>
                      {card.title}
                    </h3>
                    <p className={`text-xl lg:text-2xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {card.description}
                    </p>
                    
                    {/* Decorative line */}
                    <div className={`w-20 h-1 ${isDark ? 'bg-gradient-to-r from-cyan-400 to-blue-400' : 'bg-gradient-to-r from-cyan-600 to-blue-600'} mx-auto mt-8 rounded-full group-hover:w-32 transition-all duration-500`} />
                  </div>
                  
                  {/* Floating decorative elements */}
                  <div className={`absolute -bottom-4 -right-4 w-24 h-24 ${isDark ? 'bg-cyan-500/10' : 'bg-blue-400/20'} rounded-full blur-2xl group-hover:blur-xl transition-all duration-500`} />
                  <div className={`absolute -top-4 -left-4 w-20 h-20 ${isDark ? 'bg-blue-500/10' : 'bg-cyan-400/20'} rounded-full blur-2xl group-hover:blur-xl transition-all duration-500`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Section - Data Visualization */}
      <section className={`py-32 px-0 relative overflow-hidden transition-all duration-500 ${
        isDark ? 'bg-gradient-to-br from-black via-slate-900 to-black' : 'bg-gradient-to-br from-white via-gray-50 to-white'
      }`}>
        {/* Dynamic Animated Background */}
        <div className="absolute inset-0">
          {/* Animated data visualization background */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1200 800">
              <defs>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: isDark ? '#10B981' : '#059669', stopOpacity: 0.8}} />
                  <stop offset="50%" style={{stopColor: isDark ? '#3B82F6' : '#2563EB', stopOpacity: 0.6}} />
                  <stop offset="100%" style={{stopColor: isDark ? '#8B5CF6' : '#7C3AED', stopOpacity: 0.4}} />
                </linearGradient>
              </defs>
              
              {/* Animated chart lines */}
              <path d="M50,700 Q300,300 600,200 T1150,100" fill="none" stroke="url(#chartGradient)" strokeWidth="3" className="animate-pulse" />
              <path d="M50,750 Q400,400 800,250 T1150,150" fill="none" stroke="url(#chartGradient)" strokeWidth="2" className="animate-pulse" style={{animationDelay: '1s'}} />
              
              {/* Animated data points */}
              {[...Array(8)].map((_, i) => (
                <circle 
                  key={i}
                  cx={50 + i * 150} 
                  cy={700 - i * 80} 
                  r="4" 
                  fill={isDark ? '#10B981' : '#059669'} 
                  className="animate-pulse"
                  style={{animationDelay: `${i * 0.3}s`}}
                />
              ))}
            </svg>
          </div>
          
          {/* Floating statistical elements */}
          <div className={`absolute top-20 left-20 w-64 h-64 ${isDark ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20' : 'bg-gradient-to-br from-green-400/30 to-emerald-400/30'} rounded-full blur-3xl animate-pulse`} />
          <div className={`absolute bottom-20 right-20 w-80 h-80 ${isDark ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' : 'bg-gradient-to-br from-blue-400/30 to-purple-400/30'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-20">
            <div className={`inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 backdrop-blur-xl shadow-2xl ${
              isDark ? 'bg-green-500/20 text-green-300 border border-green-500/30' : 'bg-green-100 text-green-700 border border-green-200'
            } transition-all duration-300 hover:scale-105`}>
              <BarChart className="w-6 h-6 mr-3 animate-bounce" />
              Proven Results & ROI
            </div>
            <h2 className={`text-6xl lg:text-8xl font-black mb-12 leading-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Let the <span className={`bg-gradient-to-r ${isDark ? 'from-green-400 via-blue-400 to-purple-400' : 'from-green-600 via-blue-600 to-purple-600'} bg-clip-text text-transparent`}>numbers</span><br />
              speak.
            </h2>
          </div>
          
          {/* Enhanced Statistics Display */}
          <div className="grid md:grid-cols-3 gap-12 mb-20 max-w-6xl mx-auto">
            {[
              { value: '+30%', label: 'Revenue increase', color: 'green', icon: TrendingUp },
              { value: '+25%', label: 'Closing rate improvement', color: 'blue', icon: Target },
              { value: '+20%', label: 'Team productivity boost', color: 'purple', icon: Users }
            ].map((stat, index) => (
              <div key={index} className="group relative">
                {/* Background card */}
                <div className={`p-12 rounded-3xl ${
                  isDark 
                    ? 'bg-gradient-to-br from-slate-800/90 via-slate-700/90 to-slate-800/90 border border-slate-600/50' 
                    : 'bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200/50'
                } backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-110 relative overflow-hidden`}>
                  
                  {/* Animated background particles */}
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-1 h-1 ${
                          stat.color === 'green' ? (isDark ? 'bg-green-400' : 'bg-green-600') :
                          stat.color === 'blue' ? (isDark ? 'bg-blue-400' : 'bg-blue-600') :
                          (isDark ? 'bg-purple-400' : 'bg-purple-600')
                        } rounded-full animate-pulse`}
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${15 + i * 20}%`,
                          animationDelay: `${i * 0.3}s`
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-20 h-20 mx-auto mb-8 rounded-2xl flex items-center justify-center ${
                    stat.color === 'green' ? (isDark ? 'bg-green-500/20 border border-green-500/30' : 'bg-green-100 border border-green-200') :
                    stat.color === 'blue' ? (isDark ? 'bg-blue-500/20 border border-blue-500/30' : 'bg-blue-100 border border-blue-200') :
                    (isDark ? 'bg-purple-500/20 border border-purple-500/30' : 'bg-purple-100 border border-purple-200')
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`w-10 h-10 ${
                      stat.color === 'green' ? (isDark ? 'text-green-400' : 'text-green-600') :
                      stat.color === 'blue' ? (isDark ? 'text-blue-400' : 'text-blue-600') :
                      (isDark ? 'text-purple-400' : 'text-purple-600')
                    } group-hover:rotate-12 transition-transform duration-300`} />
                  </div>
                  
                  {/* Value */}
                  <div className={`text-6xl lg:text-7xl font-black mb-6 ${
                    stat.color === 'green' ? (isDark ? 'text-green-400' : 'text-green-600') :
                    stat.color === 'blue' ? (isDark ? 'text-blue-400' : 'text-blue-600') :
                    (isDark ? 'text-purple-400' : 'text-purple-600')
                  } group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className={`text-xl lg:text-2xl font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {stat.label}
                  </div>
                  
                  {/* Progress bar animation */}
                  <div className="mt-8 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full animate-pulse ${
                      stat.color === 'green' ? 'bg-gradient-to-r from-green-400 to-emerald-500' :
                      stat.color === 'blue' ? 'bg-gradient-to-r from-blue-400 to-cyan-500' :
                      'bg-gradient-to-r from-purple-400 to-pink-500'
                    }`} style={{ width: '85%', animationDelay: `${index * 0.5}s` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Enhanced ROI Quote */}
          <div className={`max-w-5xl mx-auto p-12 rounded-3xl ${
            isDark ? 'bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-pink-900/50 border border-white/10' : 'bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 border border-blue-200/50'
          } backdrop-blur-xl shadow-2xl relative overflow-hidden`}>
            
            {/* Quote icon */}
            <div className={`w-16 h-16 mx-auto mb-8 rounded-full ${
              isDark ? 'bg-gradient-to-br from-yellow-400 to-orange-400' : 'bg-gradient-to-br from-yellow-500 to-orange-500'
            } flex items-center justify-center text-3xl font-black ${isDark ? 'text-black' : 'text-white'}`}>
              "
            </div>
            
            <p className={`text-3xl lg:text-4xl font-black leading-relaxed ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Every <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>€1</span> invested in an On-Demand Sales Director can generate{' '}
              <span className={`bg-gradient-to-r ${isDark ? 'from-green-400 to-emerald-400' : 'from-green-600 to-emerald-600'} bg-clip-text text-transparent`}>
                €5–10
              </span>{' '}
              in revenue.
            </p>
            
            {/* Floating elements */}
            <div className={`absolute -top-4 -right-4 w-24 h-24 ${isDark ? 'bg-yellow-400/20' : 'bg-yellow-500/30'} rounded-full blur-2xl animate-pulse`} />
            <div className={`absolute -bottom-4 -left-4 w-20 h-20 ${isDark ? 'bg-green-400/20' : 'bg-green-500/30'} rounded-full blur-2xl animate-pulse`} style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </section>

      {/* Video Section - Cinematic Experience */}
      <section className={`py-32 px-0 transition-all duration-500 relative overflow-hidden ${
        isDark ? 'bg-gradient-to-br from-slate-900 via-black to-slate-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
      }`}>
        {/* Cinematic Background */}
        <div className="absolute inset-0">
          {/* Film strip pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="flex flex-col h-full">
              {[...Array(20)].map((_, i) => (
                <div key={i} className={`flex-1 border-b ${isDark ? 'border-white' : 'border-black'} relative`}>
                  <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 ${isDark ? 'bg-white' : 'bg-black'} rounded-full`} />
                  <div className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 ${isDark ? 'bg-white' : 'bg-black'} rounded-full`} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Spotlight effects */}
          <div className={`absolute top-20 left-1/4 w-96 h-96 ${isDark ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' : 'bg-gradient-to-br from-blue-400/30 to-purple-400/30'} rounded-full blur-3xl animate-pulse`} />
          <div className={`absolute bottom-20 right-1/4 w-80 h-80 ${isDark ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20' : 'bg-gradient-to-br from-purple-400/30 to-pink-400/30'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 backdrop-blur-xl shadow-2xl ${
              isDark ? 'bg-pink-500/20 text-pink-300 border border-pink-500/30' : 'bg-pink-100 text-pink-700 border border-pink-200'
            } transition-all duration-300 hover:scale-105`}>
              <Play className="w-6 h-6 mr-3 animate-pulse" />
              Expert Insights from Marco Ferrario
            </div>
            <h2 className={`text-6xl lg:text-8xl font-black mb-8 leading-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              See It In <span className={`bg-gradient-to-r ${isDark ? 'from-pink-400 to-purple-400' : 'from-pink-600 to-purple-600'} bg-clip-text text-transparent`}>Action</span>
            </h2>
            <p className={`text-2xl lg:text-3xl ${isDark ? 'text-gray-300' : 'text-gray-700'} max-w-4xl mx-auto mb-12`}>
              Watch Marco Ferrario explain the <span className={`font-bold ${isDark ? 'text-pink-400' : 'text-pink-600'}`}>Sales On Demand</span> methodology that's transforming businesses worldwide.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Video Player - Enhanced */}
              <div className="lg:col-span-3">
                <div className={`relative p-4 rounded-3xl ${
                  isDark ? 'bg-gradient-to-br from-slate-800/90 to-slate-700/90 border border-slate-600/50' : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200/50'
                } backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 group`}>
                  
                  {/* Play button overlay for aesthetics */}
                  <div className="relative">
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-xl group-hover:scale-105 transition-transform duration-500">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/1RYOQhiJcmk"
                        title="Marco Ferrario - Sales On Demand"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-2xl"
                      />
                    </div>
                    
                    {/* Decorative elements */}
                    <div className={`absolute -bottom-4 -right-4 w-20 h-20 ${isDark ? 'bg-pink-500/20' : 'bg-pink-400/30'} rounded-full blur-2xl group-hover:blur-xl transition-all duration-500`} />
                    <div className={`absolute -top-4 -left-4 w-16 h-16 ${isDark ? 'bg-purple-500/20' : 'bg-purple-400/30'} rounded-full blur-2xl group-hover:blur-xl transition-all duration-500`} />
                  </div>
                </div>
              </div>
              
              {/* Video Details & Additional Content */}
              <div className="lg:col-span-2 space-y-8">
                <div className={`p-8 rounded-2xl ${
                  isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-white border border-gray-200'
                } shadow-lg`}>
                  <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    What You'll Learn:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'The 4-phase Sales On Demand process',
                      'How to scale without hiring internally',
                      'Real case studies and results',
                      'ROI calculations and projections'
                    ].map((item, index) => (
                      <li key={index} className={`flex items-start space-x-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <CheckCircle className={`w-6 h-6 ${isDark ? 'text-pink-400' : 'text-pink-600'} mt-0.5 flex-shrink-0`} />
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`p-8 rounded-2xl ${
                  isDark ? 'bg-gradient-to-br from-pink-900/30 to-purple-900/30 border border-pink-500/30' : 'bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-200/50'
                } backdrop-blur-sm`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-16 h-16 rounded-full ${isDark ? 'bg-gradient-to-br from-pink-500 to-purple-500' : 'bg-gradient-to-br from-pink-600 to-purple-600'} flex items-center justify-center text-white text-2xl font-bold`}>
                      MF
                    </div>
                    <div>
                      <h4 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Marco Ferrario
                      </h4>
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Sales Expert & Author
                      </p>
                    </div>
                  </div>
                  <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    "Over 15 years helping companies transform their sales processes with proven, scalable methodologies."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Promo Section - Premium Library Experience */}
      <section className={`py-32 px-0 transition-all duration-500 relative overflow-hidden ${
        isDark ? 'bg-gradient-to-br from-black via-amber-900/20 to-black' : 'bg-gradient-to-br from-white via-amber-50/50 to-white'
      }`}>
        {/* Library-inspired Background */}
        <div className="absolute inset-0">
          {/* Bookshelf pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 gap-2 h-full">
              {[...Array(60)].map((_, i) => (
                <div
                  key={i}
                  className={`${isDark ? 'bg-amber-400' : 'bg-amber-600'} rounded-t-sm opacity-30`}
                  style={{
                    height: `${Math.random() * 60 + 40}%`,
                    marginTop: `${Math.random() * 40}%`
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Warm reading light effects */}
          <div className={`absolute top-20 right-20 w-80 h-80 ${isDark ? 'bg-gradient-to-br from-amber-500/20 to-yellow-500/20' : 'bg-gradient-to-br from-amber-400/30 to-yellow-400/30'} rounded-full blur-3xl animate-pulse`} />
          <div className={`absolute bottom-20 left-20 w-72 h-72 ${isDark ? 'bg-gradient-to-br from-orange-500/20 to-red-500/20' : 'bg-gradient-to-br from-orange-400/30 to-red-400/30'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 backdrop-blur-xl shadow-2xl ${
              isDark ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-amber-100 text-amber-700 border border-amber-200'
            } transition-all duration-300 hover:scale-105`}>
              <Star className="w-6 h-6 mr-3 animate-pulse" />
              Exclusive Knowledge Library
            </div>
            <h2 className={`text-6xl lg:text-8xl font-black mb-8 leading-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Want to go <br />
              <span className={`bg-gradient-to-r ${isDark ? 'from-amber-400 to-orange-400' : 'from-amber-600 to-orange-600'} bg-clip-text text-transparent`}>deeper?</span>
            </h2>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content Side */}
              <div className="space-y-8">
                <p className={`text-3xl lg:text-4xl leading-relaxed font-light ${
                  isDark ? 'text-gray-300' : 'text-slate-700'
                } mb-8`}>
                  Download Marco Ferrario's comprehensive guide{' '}
                  <span className={`font-bold bg-gradient-to-r ${isDark ? 'from-amber-400 to-orange-400' : 'from-amber-600 to-orange-600'} bg-clip-text text-transparent`}>
                    "Sales as a Service"
                  </span>{' '}
                  to master the art of creating effective and repeatable sales processes.
                </p>
                
                {/* Book features */}
                <div className="space-y-6">
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-6`}>
                    What's Inside:
                  </h3>
                  {[
                    { title: 'Complete Sales Framework', desc: 'Step-by-step methodology for building scalable sales systems' },
                    { title: 'Real Case Studies', desc: 'Detailed analysis of successful transformations' },
                    { title: 'Implementation Toolkit', desc: 'Templates, checklists, and resources for immediate use' },
                    { title: 'ROI Calculations', desc: 'Financial models to predict and measure success' }
                  ].map((feature, index) => (
                    <div key={index} className={`flex items-start space-x-4 p-6 rounded-2xl ${
                      isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-white border border-gray-200'
                    } shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                      <div className={`w-12 h-12 rounded-full ${isDark ? 'bg-amber-500/20 text-amber-400' : 'bg-amber-100 text-amber-600'} flex items-center justify-center font-bold text-lg flex-shrink-0`}>
                        {index + 1}
                      </div>
                      <div>
                        <h4 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {feature.title}
                        </h4>
                        <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button className={`group px-12 py-6 text-xl rounded-2xl font-bold transition-all duration-500 hover:scale-105 ${
                  isDark 
                    ? 'bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-700 hover:via-orange-700 hover:to-red-700 text-white' 
                    : 'bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-700 hover:via-orange-700 hover:to-red-700 text-white'
                } shadow-2xl hover:shadow-3xl relative overflow-hidden`}>
                  <span className="relative z-10 flex items-center space-x-3">
                    <span>Download Your Free Copy</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                </Button>
              </div>
              
              {/* Book Display Side */}
              <div className="relative">
                {/* 3D Book Display */}
                <div className="relative mx-auto perspective-1000" style={{ width: '320px', height: '480px' }}>
                  {/* Book cover */}
                  <div className={`relative w-80 h-96 mx-auto rounded-2xl shadow-2xl ${
                    isDark ? 'bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900' : 'bg-gradient-to-br from-slate-200 via-white to-gray-100'
                  } group hover:scale-105 transition-all duration-500 overflow-hidden border-4 ${isDark ? 'border-amber-400/30' : 'border-amber-600/30'}`}>
                    
                    {/* Book content mockup */}
                    <div className="p-8 h-full flex flex-col justify-between">
                      <div>
                        <div className={`text-lg font-bold mb-4 ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
                          MARCO FERRARIO
                        </div>
                        <h3 className={`text-3xl font-black mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          Sales as a<br />Service
                        </h3>
                        <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                          The Ultimate Guide to Building Scalable Sales Systems That Drive Consistent Growth
                        </p>
                      </div>
                      
                      <div className="flex justify-center">
                        <div className={`w-20 h-20 rounded-full ${isDark ? 'bg-amber-500/20 border border-amber-500/30' : 'bg-amber-100 border border-amber-200'} flex items-center justify-center`}>
                          <Star className={`w-10 h-10 ${isDark ? 'text-amber-400' : 'text-amber-600'}`} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Shiny effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Book spine effect */}
                  <div className={`absolute right-0 top-4 w-6 h-80 ${
                    isDark ? 'bg-gradient-to-b from-slate-700 to-slate-900' : 'bg-gradient-to-b from-gray-300 to-gray-500'
                  } rounded-r-lg transform rotate-y-90 origin-left shadow-lg`} />
                </div>
                
                {/* Floating elements */}
                <div className={`absolute -top-8 -right-8 px-4 py-2 rounded-2xl text-lg font-bold ${
                  isDark ? 'bg-gradient-to-r from-green-400 to-emerald-400 text-black' : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                } shadow-2xl transform rotate-12 animate-pulse`}>
                  FREE! 📚
                </div>
                
                <div className={`absolute -bottom-4 -left-4 w-24 h-24 ${isDark ? 'bg-amber-500/20' : 'bg-amber-400/30'} rounded-full blur-2xl animate-pulse`} />
                <div className={`absolute top-1/2 -right-8 w-16 h-16 ${isDark ? 'bg-orange-500/20' : 'bg-orange-400/30'} rounded-full blur-lg animate-pulse`} style={{ animationDelay: '1s' }} />
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
