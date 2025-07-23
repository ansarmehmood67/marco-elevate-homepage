import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, TrendingUp, Cloud, CreditCard, UserCheck, BarChart, Target, CheckCircle, Shield, Settings, Database, Smartphone, Headphones } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SaasPlatforms = () => {
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
              className="absolute inset-0 w-full h-full object-cover z-0"
            >
              <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290535/saas_tools_page_inne6r.mp4" type="video/mp4" />
            </video>
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/70" />
            
            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent z-10" />
            
            {/* Content positioned at bottom left */}
            <div className="absolute bottom-12 left-12 max-w-2xl z-20">
              <div className="mb-6 flex items-center space-x-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                  <TrendingUp className="w-4 h-4 text-white" />
                  <span className="text-white font-medium text-sm">SaaS Platforms</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-white drop-shadow-2xl">
                We Build SaaS Products That Scale Automatically
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-100 mb-8 font-light leading-relaxed max-w-2xl">
                Turn your business idea into a powerful cloud-based platform. <span className="font-semibold text-blue-200">From MVP to global launch</span> — we handle everything.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="group font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-black hover:bg-gray-100 border-2 border-white/30">
                  <span className="flex items-center space-x-2">
                    <span>Let's build your SaaS</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button className="group font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/10 text-white hover:bg-white/20 border-2 border-white/30 backdrop-blur-sm">
                  <span className="flex items-center space-x-2">
                    <span>Talk to a product expert</span>
                    <TrendingUp className="w-5 h-5 group-hover:rotate-12 transition-transform" />
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

      {/* Intro Section */}
      <section className="relative overflow-hidden">
        {/* Main Intro Section with Light Background */}
        <div className="bg-white py-24 lg:py-32 relative">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center space-y-12">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2E8BC0]/10 to-[#87CEEB]/10 rounded-full border border-[#2E8BC0]/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[#2E8BC0]" />
                <span className="text-[#2E8BC0] font-semibold text-sm">SaaS Development</span>
              </div>

              {/* Main Headlines with Modern Typography */}
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                  SaaS platforms{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-[#2E8BC0] via-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                      that scale
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full opacity-60"></div>
                  </span>
                  <br />
                  automatically
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-4xl mx-auto leading-relaxed">
                  Whether you're a startup or an established brand, we help you productize your vision.{" "}
                  <span className="text-[#2E8BC0] font-semibold">Build subscription tools, client portals, reporting apps</span>, or AI-powered services — all under your brand.
                </p>
              </div>

              {/* Second headline */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  <span className="text-slate-600">Scalable, profitable.</span>
                  <br />
                  <span className="text-slate-900">Built for growth.</span>
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
                      Start building
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Quote Section */}
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
                <span className="text-[#87CEEB] font-medium text-sm">Our mission</span>
              </div>

              <blockquote className="space-y-6">
                <div className="relative">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Every SaaS we build{" "}
                    <span className="bg-gradient-to-r from-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                      is designed to grow without growing your overhead
                    </span>
                  </h3>
                  
                  {/* Modern Quote Marks */}
                  <div className="absolute -top-6 -left-6 w-8 h-8 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] rounded-lg flex items-center justify-center opacity-20">
                    <span className="text-white text-lg font-bold">"</span>
                  </div>
                </div>

                <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  Smart architecture meets beautiful design for sustainable growth
                </p>

                <div className="pt-6">
                  <Button 
                    size="lg"
                    className="bg-white/10 text-white hover:bg-white/20 font-semibold px-10 py-4 rounded-full transition-all duration-300 border border-white/20 hover:border-white/30 backdrop-blur-sm"
                  >
                    <span className="flex items-center gap-2">
                      Discover how
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
                <span className="text-[#2E8BC0] font-medium text-sm">Our clients</span>
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Trusted by over{" "}
                <span className="text-[#2E8BC0]">500 clients</span>
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
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Key{" "}
              <span className="text-[#2E8BC0]">Features</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Everything you need to launch and scale your SaaS platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Settings,
                title: "Sviluppo SaaS End-to-End",
                description: "Dalla validazione dell'idea al design UI, sviluppo backend, API e deploy — pensiamo a tutto noi."
              },
              {
                icon: Target,
                title: "Funzionalità su Misura",
                description: "Costruiamo ciò di cui hai bisogno: ruoli utente, abbonamenti, pannelli admin, analisi, automazioni e altro."
              },
              {
                icon: Database,
                title: "Tecnologie Moderne",
                description: "Utilizziamo stack performanti e scalabili come React, Node.js, Python, Firebase, PostgreSQL, ecc."
              },
              {
                icon: Cloud,
                title: "Hosting Cloud & Manutenzione",
                description: "Distribuiamo la tua piattaforma su cloud (AWS, Vercel, ecc.), monitoriamo performance e forniamo supporto continuo."
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-[#2E8BC0]" />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Image Section */}
      <section className="py-40 relative overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(https://res.cloudinary.com/dufcnrcfe/image/upload/v1752430999/a14ff2cd-e917-4480-9942-acd5b5e88d41.mp4_5_fg4olu.png)` }}
        />
        
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/30 via-transparent to-[#55ACEE]/20 z-10" />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl">
              Trasforma la tua idea in una{" "}
              <span className="text-[#87CEEB]">piattaforma SaaS</span> di successo
            </h2>
            
            <p className="text-xl md:text-2xl text-white leading-relaxed font-medium drop-shadow-xl">
              Dalla visione al prodotto — realizziamo soluzioni che scalano automaticamente
            </p>
            
            <Button className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Inizia ora
            </Button>
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
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary-glow/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 bg-primary/10 text-primary border border-primary/20 transition-all duration-300 hover:scale-105 shadow-lg">
              <Target className="w-6 h-6 mr-3 animate-spin" style={{ animationDuration: '3s' }} />
              Il nostro processo
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-slate-900 mb-12">
              Dalla visione{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                al prodotto
              </span>
            </h2>
            <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
              Un approccio sistematico che porta <span className="font-bold text-primary">risultati garantiti</span>
            </p>
          </div>
          
          {/* Timeline Layout */}
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {[
                {
                  number: "01",
                  title: "Definizione & Strategia",
                  description: "Ci racconti la tua idea SaaS, gli obiettivi e il tipo di utenti. Insieme definiamo le funzionalità e i flussi.",
                  benefit: "Visione chiara e roadmap definita",
                  icon: Target
                },
                {
                  number: "02",
                  title: "Design & Architettura",
                  description: "Creiamo mockup e architettura, poi avviamo lo sviluppo completo.",
                  benefit: "Interfacce utente ottimizzate e stack tecnico robusto",
                  icon: Settings
                },
                {
                  number: "03",
                  title: "Sviluppo & Testing",
                  description: "Testiamo tutte le funzionalità su vari dispositivi, correggiamo bug e ottimizziamo per la scalabilità.",
                  benefit: "Piattaforma affidabile e performante",
                  icon: Database
                },
                {
                  number: "04",
                  title: "Lancio & Supporto",
                  description: "Lanciamo la piattaforma e ti supportiamo con manutenzione, analisi e miglioramenti continui.",
                  benefit: "Crescita sostenibile e supporto dedicato",
                  icon: TrendingUp
                }
              ].map((phase, index) => {
                const Icon = phase.icon;
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className={`group relative ${isEven ? 'lg:mr-8' : 'lg:ml-8 lg:mt-16'}`}>
                    {/* Phase Number Badge */}
                    <div className={`absolute -top-6 ${isEven ? '-left-6' : '-right-6'} w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white font-black text-xl shadow-2xl group-hover:scale-110 transition-transform duration-300 z-10`}>
                      {phase.number}
                    </div>
                    
                    {/* Main Card */}
                    <div className="relative p-10 rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-700 hover:scale-105 group-hover:rotate-1 overflow-hidden">
                      
                      {/* Animated background particles */}
                      <div className="absolute inset-0 opacity-20">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-2 bg-primary rounded-full animate-pulse"
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
                        <div className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary-glow/10 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                          <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-3xl lg:text-4xl font-black mb-6 text-slate-900 group-hover:text-primary transition-colors duration-300">
                            {phase.title}
                          </h3>
                          <p className="text-xl lg:text-2xl mb-8 text-gray-700 leading-relaxed">
                            {phase.description}
                          </p>
                          
                          {/* Benefit Badge */}
                          <div className="inline-flex items-center space-x-3 px-6 py-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:scale-105 transition-transform duration-300">
                            <CheckCircle className="w-6 h-6 text-primary animate-pulse" />
                            <span className="font-bold text-lg text-primary">
                              {phase.benefit}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl group-hover:blur-xl transition-all duration-500" />
                      <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-glow/20 rounded-full blur-2xl group-hover:blur-xl transition-all duration-500" />
                    </div>
                    
                    {/* Connection Line */}
                    {index < 3 && (
                      <div className={`hidden lg:block absolute ${isEven ? 'right-0 top-1/2' : 'left-0 top-1/2'} w-16 h-1 bg-gradient-to-r from-primary to-primary-glow ${isEven ? 'translate-x-full' : '-translate-x-full'} -translate-y-1/2 animate-pulse`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Section */}
      <section className="relative overflow-hidden bg-white">
        {/* Premium Background */}
        <div className="absolute inset-0">
          {/* Elegant Geometric Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <svg className="w-full h-full" viewBox="0 0 1200 800">
              <defs>
                <pattern id="saas-premium-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="80" height="80" fill="none" stroke="hsl(var(--slate-900))" strokeWidth="1"/>
                  <circle cx="40" cy="40" r="2" fill="hsl(var(--slate-900))"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#saas-premium-grid)" />
            </svg>
          </div>
          
          {/* Elegant Gradient Orbs */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Premium Light Rays */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-primary/5" />
        </div>
        
        <div className="container mx-auto px-6 py-32 relative z-20">
          <div className="text-center mb-24 animate-fade-in">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold mb-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-2xl border border-slate-700/20 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-3xl group">
              <Shield className="w-6 h-6 mr-3 group-hover:animate-pulse" />
              <span className="bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">Soluzioni Complete</span>
            </div>
            
            {/* Elegant Typography */}
            <h2 className="text-5xl lg:text-7xl font-black mb-6 leading-tight text-slate-900 tracking-tight">
              Tipi di piattaforme <br />
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent drop-shadow-sm">
                che realizziamo
              </span>
            </h2>
            
            {/* Decorative Line */}
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full shadow-lg" />
          </div>
          
          {/* Premium Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "CRM & Portali Clienti",
                description: "Gestisci clienti, attività e dati in un'unica piattaforma intuitiva."
              },
              {
                title: "Sistemi di Prenotazione & Scheduling",
                description: "Permetti agli utenti di prenotare servizi, appuntamenti o eventi con flussi automatizzati."
              },
              {
                title: "Strumenti Interni & Dashboard Amministrative",
                description: "Costruiamo strumenti gestionali e interfacce su misura per migliorare la produttività interna."
              }
            ].map((card, index) => (
              <div 
                key={index} 
                className="group relative animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Premium Number Badge */}
                <div className="absolute -top-6 -left-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center text-white font-black text-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 z-10 border border-slate-700/30">
                  <span className="bg-gradient-to-br from-white to-slate-200 bg-clip-text text-transparent">
                    {index + 1}
                  </span>
                </div>
                
                {/* Elegant Card */}
                <div className="relative p-10 pt-16 rounded-3xl bg-white shadow-[0_20px_70px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_80px_-15px_rgba(0,0,0,0.15)] border border-slate-100 transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 group-hover:border-slate-200 overflow-hidden">
                  
                  {/* Elegant Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-50/30 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Premium Floating Elements */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-br from-primary to-primary-glow rounded-full"
                        style={{
                          left: `${20 + i * 20}%`,
                          top: `${30 + i * 15}%`,
                          animation: `pulse 3s ease-in-out infinite`,
                          animationDelay: `${i * 0.8}s`
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-slate-900 group-hover:text-primary transition-colors duration-500 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-slate-600 group-hover:text-slate-700 transition-colors duration-500">
                      {card.description}
                    </p>
                    
                    {/* Elegant Accent Line */}
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary-glow mt-8 rounded-full group-hover:w-24 transition-all duration-500 shadow-sm" />
                  </div>
                  
                  {/* Premium Glow Effects */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-glow/10 rounded-full blur-2xl group-hover:blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  
                  {/* Subtle Border Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/0 via-primary-glow/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary-glow/10 group-hover:to-primary/10 transition-all duration-700 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / Trust Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#2E8BC0]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#87CEEB]/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="space-y-8">
            {/* Quote Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
              <span className="text-[#87CEEB] font-medium text-sm">La nostra missione</span>
            </div>

            <blockquote className="space-y-6">
              <div className="relative">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  "Non costruiamo solo software —{" "}
                  <span className="bg-gradient-to-r from-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                    realizziamo prodotti che risolvono problemi reali, crescono con il tuo team e generano vero valore
                  </span>
                  "
                </h3>
                
                {/* Modern Quote Marks */}
                <div className="absolute -top-6 -left-6 w-8 h-8 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] rounded-lg flex items-center justify-center opacity-20">
                  <span className="text-white text-lg font-bold">"</span>
                </div>
              </div>

              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Architettura intelligente e design eccellente per una crescita sostenibile
              </p>

              <div className="pt-6">
                <Button 
                  size="lg"
                  className="bg-white/10 text-white hover:bg-white/20 font-semibold px-10 py-4 rounded-full transition-all duration-300 border border-white/20 hover:border-white/30 backdrop-blur-sm"
                >
                  <span className="flex items-center gap-2">
                    Scopri come
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Domande frequenti sulle{" "}
              <span className="text-[#2E8BC0]">piattaforme SaaS</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full mx-auto"></div>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#2E8BC0]">
                Quanto tempo ci vuole per sviluppare una piattaforma SaaS?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                I tempi dipendono dalla complessità del progetto. Un MVP semplice può essere sviluppato in 8-12 settimane, mentre piattaforme più complesse richiedono 4-6 mesi. Lavoriamo con metodologie agili per consegnare valore incrementale durante tutto il processo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#2E8BC0]">
                Quali tecnologie utilizzate?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Utilizziamo stack moderni e performanti: React/Vue.js per il frontend, Node.js/Python per il backend, PostgreSQL/MongoDB per i database, AWS/Vercel per l'hosting. La scelta dipende dalle specifiche esigenze del progetto.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#2E8BC0]">
                È possibile integrare sistemi di pagamento e abbonamenti?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Assolutamente sì. Integriamo sistemi di pagamento come Stripe, PayPal e altri, gestendo abbonamenti ricorrenti, fatturazione automatica, prove gratuite e piani tariffari personalizzati.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#2E8BC0]">
                Offrite supporto continuo dopo il lancio?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Sì, offriamo piani di supporto e manutenzione continui che includono aggiornamenti di sicurezza, ottimizzazioni performance, correzione bug e sviluppo di nuove funzionalità basate sul feedback degli utenti.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#2E8BC0]">
                La piattaforma sarà scalabile in futuro?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Progettiamo tutte le nostre piattaforme con l'architettura cloud-native e microservizi per garantire scalabilità automatica. Questo significa che la tua piattaforma può gestire migliaia di utenti senza problemi di performance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#2E8BC0]">
                Potete sviluppare anche una versione mobile o un'app integrata?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Certamente. Sviluppiamo app mobile native (iOS/Android) o progressive web app (PWA) che si integrano perfettamente con la piattaforma web, condividendo lo stesso backend e database.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                From Idea to Launch
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                We help you plan, validate, and build your MVP fast — without cutting corners. UX-first, ROI-focused.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#2E8BC0]/10 to-[#87CEEB]/10 rounded-2xl p-8 border border-[#2E8BC0]/20">
              <div className="w-16 h-16 bg-[#2E8BC0] rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">MVP Development</h4>
              <p className="text-slate-600">Fast, validated launches with measurable market fit</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-[#87CEEB]/10 to-[#2E8BC0]/10 rounded-2xl p-8 border border-[#87CEEB]/20">
              <div className="w-16 h-16 bg-[#87CEEB] rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">AI-Ready by Default</h4>
              <p className="text-slate-600">Future-proof platforms with smart automation capabilities</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                AI-Ready by Default
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Every SaaS we build can be integrated with smart assistants, automation workflows, or machine learning features — future-proof from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            Have a SaaS idea? Let's make it real.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] hover:from-[#87CEEB] hover:to-[#2E8BC0] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Start Building
            </Button>
            <Button className="bg-white border-2 border-[#2E8BC0] text-[#2E8BC0] hover:bg-[#2E8BC0] hover:text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              See Examples
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SaasPlatforms;