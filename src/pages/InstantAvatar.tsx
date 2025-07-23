import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import FinalCTASection from "@/components/FinalCTASection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Users } from "lucide-react";

const InstantAvatar = () => {
  const brandLogos = [
    "/lovable-uploads/c015aef0-9ac6-47d5-8f1b-ea8aff14dd08.png",
    "/lovable-uploads/655e08e7-f709-41c5-9b01-f624d4dea2ce.png",
    "/lovable-uploads/fe2c67ca-9c86-4598-b7ce-05d1ef35dbbf.png",
    "/lovable-uploads/871bbc8b-f67d-4537-a7a2-574d06a9e919.png",
    "/lovable-uploads/d4a117b0-a098-4850-9d53-82ee30cbdb21.png",
    "/lovable-uploads/5a8470d1-8aa8-4ee0-a0c5-efbe23f61c0b.png",
    "/lovable-uploads/57e4bdda-6fe0-4184-b948-1e51ef3229c1.png",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-2 px-0 bg-black">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="relative min-h-[85vh] rounded-3xl overflow-hidden bg-black border border-gray-800/30 shadow-2xl">
            {/* Background Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290666/instant_avatar_page_yxlyqy.mp4" type="video/mp4" />
            </video>
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/70" />
            
            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent" />
            
            {/* Content positioned at bottom left */}
            <div className="absolute bottom-12 left-12 max-w-2xl z-20">
              <div className="mb-6 flex items-center space-x-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                  <Bot className="w-4 h-4 text-white" />
                  <span className="text-white font-medium text-sm">Instant Avatar</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-white drop-shadow-2xl">
                Be Everywhere Without Being There
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-100 mb-8 font-light leading-relaxed max-w-2xl">
                Create videos, reels, and posts in any language—without stepping in front of the camera. Your digital twin is ready to speak for you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="group font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-black hover:bg-gray-100 border-2 border-white/30">
                  <span className="flex items-center space-x-2">
                    <span>Crea il tuo avatar</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </div>

            {/* YouTube Video Player - Bottom Right */}
            <div className="absolute bottom-12 right-12 z-20">
              <div className="w-80 h-48 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm">
                <iframe
                  src="https://www.youtube.com/embed/ZocHP6N9Aig"
                  title="Demo Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section - Homepage Style */}
      <section className="relative overflow-hidden">
        {/* Hero Section with Modern Design */}
        <div className="bg-white py-24 lg:py-32 relative">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center space-y-12">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2E8BC0]/10 to-[#87CEEB]/10 rounded-full border border-[#2E8BC0]/20 backdrop-blur-sm">
                <Bot className="w-4 h-4 text-[#2E8BC0]" />
                <span className="text-[#2E8BC0] font-semibold text-sm">Avatar AI Personalizzati</span>
              </div>

              {/* Main Headlines with Modern Typography */}
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                  Il tuo{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-[#2E8BC0] via-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                      avatar parla per te
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full opacity-60"></div>
                  </span>
                  <br />
                  in ogni lingua, ovunque tu sia
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-4xl mx-auto leading-relaxed">
                  Creiamo <span className="text-[#2E8BC0] font-semibold">avatar digitali realistici</span> che replicano il tuo volto, la tua voce e le tue espressioni. Protagonista in video, demo di prodotto, contenuti formativi e post social—senza riprese né montaggi. Lavora meglio, raggiungi più persone e fai crescere il tuo brand con semplicità.
                </p>
              </div>

              {/* Second headline */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  <span className="text-slate-600">Presenza globale.</span>
                  <br />
                  <span className="text-slate-900">Produzione automatica.</span>
                </h2>
              </div>

              {/* CTA Button */}
              <div className="pt-8">
                <div className="relative inline-block group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full blur opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
                  <Button 
                    size="xl" 
                    className="relative bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] hover:from-[#87CEEB] hover:to-[#2E8BC0] text-white font-bold px-12 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <span className="flex items-center gap-3">
                      Crea il tuo avatar
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section with Modern Design */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#2E8BC0]/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#87CEEB]/5 to-transparent rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div className="space-y-8">
              {/* Quote Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                <span className="text-[#87CEEB] font-medium text-sm">Innovazione AI</span>
              </div>

              <blockquote className="space-y-6">
                <div className="relative">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Ogni parola {" "}
                    <span className="bg-gradient-to-r from-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                      riflette la tua identità
                    </span>
                  </h3>
                  
                  {/* Modern Quote Marks */}
                  <div className="absolute -top-6 -left-6 w-8 h-8 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] rounded-lg flex items-center justify-center opacity-20">
                    <span className="text-white text-lg font-bold">"</span>
                  </div>
                </div>

                <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  Avatar digitali che replicano il tuo volto, la tua voce e i tuoi gesti con una precisione straordinaria. Comunicazione autentica, potenza automatica.
                </p>

                <div className="pt-6">
                  <Button 
                    size="lg"
                    className="bg-white/10 text-white hover:bg-white/20 font-semibold px-10 py-4 rounded-full transition-all duration-300 border border-white/20 hover:border-white/30 backdrop-blur-sm"
                  >
                    <span className="flex items-center gap-2">
                      Scopri la tecnologia
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </div>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Enhanced Brand Logos Section */}
        <div className="bg-gradient-to-br from-slate-50 to-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2E8BC0]/10 rounded-full border border-[#2E8BC0]/20 mb-6">
                <Users className="w-4 h-4 text-[#2E8BC0]" />
                <span className="text-[#2E8BC0] font-medium text-sm">I nostri clienti</span>
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Scelti ogni giorno da più di{" "}
                <span className="text-[#2E8BC0]">500 clienti</span>
              </h4>
              <div className="w-24 h-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full mx-auto"></div>
            </div>
            
            {/* Enhanced Logo Slider */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-50 via-white to-slate-50 p-8 border border-slate-200/50">
              {/* Fade effects */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
              
              {/* Sliding logos */}
              <div className="flex animate-[slide_30s_linear_infinite] items-center gap-16">
                {/* First set */}
                {brandLogos.map((logo, index) => (
                  <div key={index} className="flex-shrink-0 group">
                    <div className="p-4 rounded-xl bg-white shadow-sm border border-slate-100 group-hover:shadow-md group-hover:border-[#2E8BC0]/20 transition-all duration-300">
                      <img 
                        src={logo} 
                        alt={`Brand ${index + 1}`}
                        className="h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {brandLogos.map((logo, index) => (
                  <div key={`dup-${index}`} className="flex-shrink-0 group">
                    <div className="p-4 rounded-xl bg-white shadow-sm border border-slate-100 group-hover:shadow-md group-hover:border-[#2E8BC0]/20 transition-all duration-300">
                      <img 
                        src={logo} 
                        alt={`Brand ${index + 1}`}
                        className="h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <style>{`
          @keyframes slide {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Funzionalità <span className="text-[#87CEEB]">Avanzate</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tecnologia AI all'avanguardia per avatar fotorealistici e video personalizzati
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🌍",
                title: "Multilingual Mastery",
                description: "Speak fluently in 30+ languages. Engage global audiences without needing translation or subtitles.",
                features: ["30+ languages supported", "Natural accent adaptation", "Cultural context awareness"]
              },
              {
                icon: "🎬",
                title: "Video Creation, Simplified",
                description: "Create videos for YouTube, Instagram, LinkedIn—instantly. No filming, no reshoots, no editing stress.",
                features: ["Multi-platform optimization", "Instant content generation", "No technical skills required"]
              },
              {
                icon: "🎭",
                title: "Brand-Perfect Voice & Style",
                description: "Clone your voice and gestures with stunning accuracy. Your personality remains front and center—just smarter.",
                features: ["Voice cloning technology", "Gesture replication", "Personality preservation"]
              },
              {
                icon: "🎙️",
                title: "Audio Content Automation",
                description: "Publish podcasts and audiobooks automatically with your cloned voice. Never record a word again.",
                features: ["Automated podcast creation", "Audiobook generation", "Voice consistency guarantee"]
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-[#2E8BC0] rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Image Section */}
      <section className="py-40 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(https://res.cloudinary.com/dufcnrcfe/image/upload/v1752765216/u_24_owe54j.png)` }}
        />
        
        {/* Enhanced Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/30 via-transparent to-[#55ACEE]/20 z-10" />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl bg-black/20 backdrop-blur-sm rounded-lg px-6 py-4 mb-6 border border-white/10">
              Trasforma la tua comunicazione con{" "}
              <span className="text-[#87CEEB] bg-gradient-to-r from-[#87CEEB] to-[#55ACEE] bg-clip-text text-transparent">avatar AI</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-xl font-medium bg-black/30 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/10">
              Crea video personalizzati scalabili che mantengono l'autenticità della presenza umana 
              con l'efficienza dell'automazione.
            </p>
            
            <Button className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Crea il tuo primo avatar
            </Button>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Instant Avatar <span className="text-[#2E8BC0]">in Action</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how businesses are transforming their communication with AI avatars
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Product Tutorials",
                description: "Deliver easy-to-follow guides in any language to boost product understanding and customer satisfaction.",
                icon: "📚"
              },
              {
                title: "Corporate Presentations",
                description: "Present updates, data, and pitches professionally without being physically present.",
                icon: "💼"
              },
              {
                title: "Social Media Content",
                description: "Create a month's worth of video content in one go—authentic, personal, and high-performing.",
                icon: "📱"
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-6">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{useCase.title}</h3>
                <p className="text-slate-600 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#2E8BC0]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-[#87CEEB]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 bg-[#2E8BC0]/10 text-[#2E8BC0] border border-[#2E8BC0]/20 transition-all duration-300 hover:scale-105 shadow-lg">
              <Bot className="w-6 h-6 mr-3 animate-spin" style={{ animationDuration: '3s' }} />
              Avatar Creation Process
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-slate-900 mb-12">
              How We Create{" "}
              <span className="bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] bg-clip-text text-transparent">
                Your Avatar
              </span>
            </h2>
            <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
              A simple 3-step process that delivers <span className="font-bold text-[#2E8BC0]">professional results</span>
            </p>
          </div>
          
          {/* Revolutionary Timeline Layout */}
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {[
                {
                  number: "01",
                  title: "2-Hour Filming Session",
                  description: "We meet you on-site to capture your appearance, voice, and expressions with professional equipment.",
                  benefit: "High-quality capture session at your location",
                  icon: "📹"
                },
                {
                  number: "02", 
                  title: "Data Processing & Voice Cloning",
                  description: "We process your video data and create a perfect clone of your voice using advanced AI technology.",
                  benefit: "Accurate voice replication in multiple languages",
                  icon: "🎤"
                },
                {
                  number: "03",
                  title: "Avatar Model Training", 
                  description: "Our AI system trains three unique avatar models to match different tones and use cases for maximum versatility.",
                  benefit: "Multiple avatar variations for different scenarios",
                  icon: "🤖"
                },
                {
                  number: "04",
                  title: "Deployment & Usage", 
                  description: "You receive your complete avatar toolkit, ready to produce multilingual content across all channels instantly.",
                  benefit: "Ready-to-use platform with full control",
                  icon: "🚀"
                }
              ].map((phase, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className={`group relative ${isEven ? 'lg:mr-8' : 'lg:ml-8 lg:mt-16'}`}>
                    {/* Phase Number Badge */}
                    <div className={`absolute -top-6 ${isEven ? '-left-6' : '-right-6'} w-16 h-16 rounded-full bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] flex items-center justify-center text-white font-black text-xl shadow-2xl group-hover:scale-110 transition-transform duration-300 z-10`}>
                      {phase.number}
                    </div>
                    
                    {/* Main Card */}
                    <div className="relative p-10 rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-700 hover:scale-105 group-hover:rotate-1 overflow-hidden">
                      
                      {/* Animated background particles */}
                      <div className="absolute inset-0 opacity-20">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-2 bg-[#2E8BC0] rounded-full animate-pulse"
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
                        <div className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#2E8BC0]/10 to-[#87CEEB]/10 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                          <span className="text-3xl">{phase.icon}</span>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-3xl lg:text-4xl font-black mb-6 text-slate-900 group-hover:text-[#2E8BC0] transition-colors duration-300">
                            {phase.title}
                          </h3>
                          <p className="text-xl lg:text-2xl mb-8 text-gray-700 leading-relaxed">
                            {phase.description}
                          </p>
                          
                          {/* Benefit Badge */}
                          <div className="inline-flex items-center space-x-3 px-6 py-4 rounded-2xl bg-[#2E8BC0]/10 border border-[#2E8BC0]/20 group-hover:scale-105 transition-transform duration-300">
                            <span className="w-6 h-6 text-[#2E8BC0]">✓</span>
                            <span className="font-bold text-lg text-[#2E8BC0]">
                              {phase.benefit}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#2E8BC0]/20 rounded-full blur-2xl group-hover:blur-xl transition-all duration-500" />
                      <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#87CEEB]/20 rounded-full blur-2xl group-hover:blur-xl transition-all duration-500" />
                    </div>
                    
                    {/* Connection Line */}
                    {index < 3 && (
                      <div className={`hidden lg:block absolute ${isEven ? 'right-0 top-1/2' : 'left-0 top-1/2'} w-16 h-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] ${isEven ? 'translate-x-full' : '-translate-x-full'} -translate-y-1/2 animate-pulse`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#2E8BC0]/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#87CEEB]/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Traditional Video vs{" "}
              <span className="bg-gradient-to-r from-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                Instant Avatar
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] mx-auto rounded-full"></div>
          </div>

          {/* Creative Comparison Table */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Features Column */}
              <div className="lg:col-span-1 space-y-4">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
                    <span className="text-[#87CEEB] font-bold text-lg">Features</span>
                  </div>
                </div>
                
                {[
                  "Studio & Crew Required",
                  "Time to Produce Content", 
                  "Cost Per Video",
                  "Language Limitation",
                  "Real-Time Editing"
                ].map((feature, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <h4 className="font-semibold text-white text-center">{feature}</h4>
                  </div>
                ))}
              </div>

              {/* Traditional Video Column */}
              <div className="lg:col-span-1 space-y-4">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-3 bg-red-500/20 border border-red-500/30 px-6 py-3 rounded-full">
                    <span className="text-2xl">❌</span>
                    <h3 className="text-lg font-bold text-red-300">Traditional Video</h3>
                  </div>
                </div>
                
                {[
                  "✅",
                  "Days to Weeks",
                  "$$$",
                  "❌",
                  "❌"
                ].map((value, index) => (
                  <div key={index} className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 text-center">
                    <p className="text-red-300 font-medium">{value}</p>
                  </div>
                ))}
              </div>

              {/* Instant Avatar Column */}
              <div className="lg:col-span-1 space-y-4">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-3 bg-[#2E8BC0]/20 border border-[#2E8BC0]/30 px-6 py-3 rounded-full">
                    <span className="text-2xl">✨</span>
                    <h3 className="text-lg font-bold text-[#87CEEB]">Instant Avatar</h3>
                  </div>
                </div>
                
                {[
                  "❌",
                  "Minutes",
                  "$",
                  "✅ 30+ Languages",
                  "✅"
                ].map((value, index) => (
                  <div key={index} className="bg-[#2E8BC0]/10 border border-[#2E8BC0]/20 rounded-lg p-6 text-center hover:bg-[#2E8BC0]/20 transition-colors">
                    <p className="text-[#87CEEB] font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-12 backdrop-blur-sm">
                <p className="text-2xl text-white mb-8 leading-relaxed">
                  Ready to revolutionize your video content?<br />
                  <span className="font-semibold bg-gradient-to-r from-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                    Create your first avatar today.
                  </span>
                </p>
                <Button className="bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] hover:from-[#87CEEB] hover:to-[#2E8BC0] text-white font-semibold px-12 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Get Started with Instant Avatar →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default InstantAvatar;