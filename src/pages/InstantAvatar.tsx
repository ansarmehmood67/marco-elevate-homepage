import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StandardIntroSection from "@/components/shared/StandardIntroSection";
import StandardCustomersSection from "@/components/shared/StandardCustomersSection";
import StandardQuoteSection from "@/components/shared/StandardQuoteSection";
import AboutSection from "@/components/AboutSection";
import MailerLiteContactSectionAnimated from "@/components/MailerLiteContactSectionAnimated";
import CrossSellRecommendations from "@/components/CrossSellRecommendations";
import AllServicesCarousel from "@/components/shared/AllServicesCarousel";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Users, Target } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const InstantAvatar = () => {
  const { ref, visibleItems } = useStaggeredAnimation(6, 200);
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
      <section className="pt-24 sm:pt-24 lg:pt-24 pb-16 px-0 bg-black relative overflow-hidden min-h-screen">
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
            
            {/* Mobile-friendly flex layout */}
            <div ref={ref} className="absolute inset-0 flex flex-col justify-center lg:justify-center p-4 sm:p-6 lg:p-12 z-20">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
                {/* Content */}
                <div className="flex-1 max-w-5xl text-center lg:text-left">
                  <div className={`mb-6 flex items-center space-x-2 ${
                    visibleItems[0] 
                      ? "animate-swipe-in-left" 
                      : "opacity-0"
                  }`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                      <Bot className="w-4 h-4 text-white" />
                      <span className="text-white font-medium text-sm">Instant Avatar</span>
                    </div>
                  </div>
                  
                  <h1 className={`text-hero-title font-black leading-constrained-tight mb-6 lg:mb-8 text-white drop-shadow-2xl ${
                    visibleItems[1] 
                      ? "animate-swipe-in-left" 
                      : "opacity-0"
                  }`}>
                    Presente Ovunque Senza Esserci
                  </h1>
                  
                  <p className={`text-hero-body text-gray-100 mb-6 lg:mb-8 font-light leading-constrained-relaxed ${
                    visibleItems[2] 
                      ? "animate-fade-in-bottom" 
                      : "opacity-0"
                  }`}>
                    Crea video, reel e post in qualsiasi lingua, senza mai comparire davanti alla telecamera. Il tuo gemello digitale è pronto a parlare per te.
                  </p>
                  
                  <div className={`flex flex-col sm:flex-row gap-4 ${
                    visibleItems[3] 
                      ? "animate-scale-in" 
                      : "opacity-0"
                  }`}>
                     <Button 
                       onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                       className="group font-semibold px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-black hover:bg-gray-100 border-2 border-white/30">
                       <span className="flex items-center space-x-2">
                         <span>Crea il tuo avatar</span>
                         <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5 group-hover:translate-x-1 transition-transform" />
                       </span>
                     </Button>
                  </div>
                </div>

                {/* YouTube Video Player - Responsive positioning */}
                <div className={`w-full sm:w-80 lg:w-80 h-48 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm lg:flex-shrink-0 transform-gpu will-change-[transform,opacity] ${
                  visibleItems[4] 
                    ? "animate-fade-in" 
                    : "opacity-0"
                }`}>
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
        </div>
      </section>

      <StandardIntroSection
        badge="AVATAR AI PERSONALIZZATI"
        title="Il tuo avatar parla per te in ogni lingua, ovunque tu"
        highlightedText="sia"
        description="Creiamo avatar digitali realistici che replicano il tuo volto, la tua voce e le tue espressioni. Protagonista in video, demo di prodotto, contenuti formativi e post social—senza riprese né montaggi. Lavora meglio, raggiungi più persone e fai crescere il tuo brand con semplicità."
        ctaText="Crea il tuo avatar"
        onCtaClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      />
      <StandardCustomersSection />
      <StandardQuoteSection
        mainQuote="Ogni parola"
        highlightedQuote="riflette la tua identità"
        description="Avatar digitali che replicano il tuo volto, la tua voce e i tuoi gesti con una precisione straordinaria. Comunicazione autentica, potenza automatica."
        ctaText="Scopri la tecnologia"
        onCtaClick={() => document.getElementById('funzionalita-avanzate')?.scrollIntoView({ behavior: 'smooth' })}
      />

      {/* Features Section */}
      <section id="funzionalita-avanzate" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 rounded-full text-sm font-bold tracking-[0.3em] uppercase mb-8 transition-all duration-300 hover:scale-105 shadow-lg bg-primary/10 text-primary border border-primary/20">
              AVATAR AI AVANZATO
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-white mb-8">
              Funzionalità{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Avanzate
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tecnologia AI all'avanguardia per avatar fotorealistici e video personalizzati
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🌍",
                title: "Espansione Globale Multilingue",
                description: "Comunica perfettamente in 40+ lingue con accenti nativi autentici. Conquista mercati internazionali con la stessa naturalezza del tuo idioma madre.",
                features: ["Localizzazione culturale avanzata", "Accenti regionali autentici", "Traduzione contestuale intelligente", "Adattamento culturale dei contenuti"]
              },
              {
                icon: "🎭",
                title: "Clonazione Identità Fotorealistica",
                description: "Tecnologia di clonazione AI che replica voce, micro-espressioni e gestualità con precisione millimetrica per un'autenticità indistinguibile dall'originale.",
                features: ["Deep voice cloning premium", "Micro-expression mapping", "Gestural synchronization AI", "Personality preservation technology"]
              },
              {
                icon: "🎬",
                title: "Studio di Produzione Virtuale 24/7",
                description: "Ecosistema di produzione completo che trasforma idee in contenuti video professionali istantaneamente, eliminando location, crew e tempi di setup.",
                features: ["Instant video studio access", "Multi-format content generation", "Broadcast-quality output", "Real-time content adaptation"]
              }
            ].map((feature, index) => (
              <div key={index} className="group relative rounded-3xl p-10 min-h-[480px] flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] overflow-hidden shadow-2xl">
                {/* Primary gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-primary"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-4xl mb-6">{feature.icon}</div>
                  <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight text-white tracking-tight">{feature.title}</h3>
                  <p className="text-lg text-white/90 mb-8 leading-relaxed font-normal">{feature.description}</p>
                  
                  <div className="space-y-4 flex-1">
                    {feature.features.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Image Section */}
      <section className="py-40 relative overflow-hidden">
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1753301887/instant_avatar_2_lovoru.mp4" type="video/mp4" />
        </video>
        
        {/* Enhanced Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/30 via-transparent to-[#55ACEE]/20 z-10" />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl">
              Trasforma la tua comunicazione con{" "}
              <span className="text-[#87CEEB]">avatar AI</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-xl font-medium">
              Crea video personalizzati scalabili che mantengono l'autenticità della presenza umana 
              con l'efficienza dell'automazione.
            </p>
            
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Crea il tuo primo avatar
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
            <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 bg-gradient-to-r from-primary to-primary-glow text-white shadow-lg transition-all duration-300 hover:scale-105">
              <Bot className="w-6 h-6 mr-3 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="italic">Avatar Creation Process</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-slate-900 mb-12">
              Come{" "}
              <span className="text-primary">
                Funziona
              </span>
            </h2>
            <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
              Un approccio sistematico che garantisce <span className="font-bold text-primary">risultati misurabili</span>
            </p>
          </div>
          
          {/* Timeline Structure */}
          <div className="max-w-5xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-primary via-primary-glow to-primary opacity-30"></div>
            
            <div className="space-y-16">
              {[
                {
                  number: "01",
                  title: "Setup & Customization",
                  description: "We meet you on-site to capture your appearance, voice, and expressions with professional equipment.",
                  benefit: "High-quality capture session at your location",
                  icon: Bot
                },
                {
                  number: "02", 
                  title: "Processing & Training",
                  description: "We process your video data and create a perfect clone of your voice using advanced AI technology.",
                  benefit: "Accurate voice replication in multiple languages",
                  icon: Users
                },
                {
                  number: "03",
                  title: "Integration & Testing", 
                  description: "Our AI system trains three unique avatar models to match different tones and use cases for maximum versatility.",
                  benefit: "Multiple avatar variations for different scenarios",
                  icon: ArrowRight
                },
                {
                  number: "04",
                  title: "Scaling & Growth", 
                  description: "You receive your complete avatar toolkit, ready to produce multilingual content across all channels instantly.",
                  benefit: "Ready-to-use platform with full control",
                  icon: Target
                }
              ].map((phase, index) => {
                const Icon = phase.icon;
                const isLeft = index % 2 === 0;
                return (
                  <div key={index} className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}>
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-primary via-primary-glow to-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                    
                    {/* Phase Card */}
                    <div className={`w-6/12 ${isLeft ? 'pr-16' : 'pl-16'}`}>
                      <div className="relative min-h-[360px] p-10 rounded-2xl bg-gradient-to-br from-primary via-primary-glow to-primary shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group">
                        {/* Phase Number Badge */}
                        <div className={`absolute -top-4 ${isLeft ? '-right-4' : '-left-4'} w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary font-black text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {phase.number}
                        </div>
                        
                        {/* Content */}
                        <div className="space-y-6">
                          {/* Icon */}
                          <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          
                          {/* Title and Description */}
                          <h3 className="text-2xl font-black text-white leading-tight">
                            {phase.title}
                          </h3>
                          <p className="text-white/90 leading-relaxed text-base">
                            {phase.description}
                          </p>
                          
                          {/* Benefit Badge */}
                          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/20 border border-white/30 backdrop-blur-sm">
                            <Users className="w-4 h-4 text-white" />
                            <span className="font-semibold text-white text-sm">
                              {phase.benefit}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
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

      {/* Cross-Sell Recommendations */}
      <CrossSellRecommendations
        currentService="instant-avatar"
        layout="horizontal"
        title="Potenzia la tua strategia video"
        subtitle="Clienti che usano Instant Avatar spesso aggiungono questi servizi per risultati straordinari"
      />

      <AboutSection />
      
      {/* All Services Carousel */}
      <AllServicesCarousel />
      
      <div id="contact"><MailerLiteContactSectionAnimated /></div>
      <Footer />
    </div>
  );
};

export default InstantAvatar;