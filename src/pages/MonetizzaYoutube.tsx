import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StandardIntroSection from "@/components/shared/StandardIntroSection";
import StandardCustomersSection from "@/components/shared/StandardCustomersSection";
import StandardQuoteSection from "@/components/shared/StandardQuoteSection";
import AboutSection from "@/components/AboutSection";
import MailerLiteContactSection from "@/components/MailerLiteContactSection";
import CrossSellRecommendations from "@/components/CrossSellRecommendations";
import AllServicesCarousel from "@/components/shared/AllServicesCarousel";
import { Button } from "@/components/ui/button";
import { ArrowRight, Youtube, Users, CheckCircle } from "lucide-react";

const MonetizzaYoutube = () => {
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
              <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1755364792/20250816_2127_Marketing_Team_Strategy_Buzz_simple_compose_01k2sva0wpexqa68v9zccbyxq1_nxgujp.mp4" type="video/mp4" />
            </video>
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/70" />
            
            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent" />
            
            {/* Mobile-friendly flex layout */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 lg:p-12 z-20">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
                {/* Content */}
                <div className="flex-1 max-w-2xl">
                  <div className="mb-6 flex items-center space-x-2">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                      <Youtube className="w-4 h-4 text-white" />
                      <span className="text-white font-medium text-sm">Monetizza YouTube</span>
                    </div>
                  </div>
                  
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight mb-6 lg:mb-8 text-white drop-shadow-2xl">
                    Da Zero alla Monetizzazione — e Oltre
                  </h1>
                  
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 mb-6 lg:mb-8 font-light leading-relaxed">
                    Aiutiamo le aziende a creare, far crescere e monetizzare canali YouTube che generano visualizzazioni, clienti e vendite — senza diventare "YouTuber".
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="group font-semibold px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-black hover:bg-gray-100 border-2 border-white/30">
                      <span className="flex items-center space-x-2">
                        <span>Monetizza il Mio Canale →</span>
                        <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </div>
                </div>

                {/* YouTube Video Player - Responsive positioning */}
                <div className="w-full sm:w-80 lg:w-80 h-48 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm lg:flex-shrink-0">
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
        badge="YOUTUBE MONETIZATION"
        title="Ogni video genera opportunità di"
        highlightedText="business"
        description="Trasforma i tuoi contenuti video in un funnel di vendita automatizzato e altamente performante. Strategie avanzate per monetizzare YouTube."
        ctaText="Monetizza ora"
        ctaHref="/contact"
      />
      <StandardCustomersSection />
      <StandardQuoteSection
        mainQuote="Il video marketing"
        highlightedQuote="del futuro è qui"
        description="Strategie innovative che trasformano ogni visualizzazione in una potenziale vendita"
        ctaText="Scopri le strategie"
        ctaHref="/contact"
      />

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 rounded-full text-sm font-bold tracking-[0.3em] uppercase mb-8 transition-all duration-300 hover:scale-105 shadow-lg bg-primary/10 text-primary border border-primary/20">
              MONETIZZAZIONE YOUTUBE
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-white mb-8">
              Strategie di{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Monetizzazione
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Metodologie avanzate per trasformare il tuo canale YouTube in un motore di vendite
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎨",
                title: "Setup & Ottimizzazione Canale Premium",
                description: "Trasformiamo il tuo canale YouTube in una piattaforma di business professionale con branding strategico e infrastruttura ottimizzata per la massima monetizzazione.",
                features: ["Branding enterprise-grade", "Architettura canale revenue-focused", "SEO strategy avanzata per discovery", "Setup monetizzazione completa"]
              },
              {
                icon: "📈",
                title: "Content Strategy che Genera Revenue",
                description: "Sviluppiamo un ecosistema di contenuti data-driven che trasforma ogni view in opportunità di business attraverso funnel di conversione scientificamente progettati.",
                features: ["Piano editoriale ROI-focused", "Content funnel multi-touchpoint", "Viral content engineering", "Conversion optimization per video"]
              },
              {
                icon: "🤖",
                title: "AI-Powered Scaling & Automation",
                description: "Sistemi di intelligenza artificiale che automatizzano produzione, distribuzione e ottimizzazione dei contenuti per scaling esponenziale senza incremento di costi operativi.",
                features: ["AI content generation engine", "Automated publishing workflows", "Performance optimization AI", "Multi-language scaling automation"]
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
          <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1755366408/20250816_2152_Futuristic_YouTube_Dashboard_simple_compose_01k2swq1ame3avqw7745dcyjpy_ioksnx.mp4" type="video/mp4" />
        </video>
        
        {/* Enhanced Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/30 via-transparent to-[#55ACEE]/20 z-10" />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl">
              Trasforma YouTube in una{" "}
              <span className="text-[#87CEEB]">macchina di vendite</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-xl font-medium">
              Strategie avanzate di video marketing che trasformano ogni visualizzazione 
              in un'opportunità concreta di business e crescita.
            </p>
            
            <Button className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Inizia la monetizzazione
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
              <Youtube className="w-6 h-6 mr-3 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="italic">Il Nostro Processo in 4 Fasi</span>
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
                  title: "Analysis & Strategy",
                  description: "Analizziamo il tuo modello di business, il target di riferimento e definiamo insieme gli obiettivi di monetizzazione del canale YouTube.",
                  benefit: "Base solida per una strategia personalizzata",
                  icon: Youtube
                },
                {
                  number: "02", 
                  title: "Implementation & Development",
                  description: "Sviluppiamo un piano strategico completo che include branding, contenuti, ottimizzazione SEO e tattiche di crescita accelerata.",
                  benefit: "Strategia su misura per il tuo business",
                  icon: Users
                },
                {
                  number: "03",
                  title: "Content & Optimization", 
                  description: "Creiamo contenuti video di alta qualità orientati alle conversioni, oppure ti formiamo per produrli autonomamente con i nostri strumenti.",
                  benefit: "Contenuti che convertono realmente",
                  icon: CheckCircle
                },
                {
                  number: "04",
                  title: "Scaling & Growth",
                  description: "Il tuo canale diventa un sistema automatico di acquisizione clienti e generazione di revenue attraverso multiple fonti di monetizzazione.",
                  benefit: "Revenue stream automatico e scalabile",
                  icon: ArrowRight
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
                            <CheckCircle className="w-4 h-4 text-white" />
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

      {/* Quote Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#2E8BC0]/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#87CEEB]/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="space-y-8">
            {/* YouTube Icons */}
            <div className="flex justify-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] rounded-xl flex items-center justify-center">
                <Youtube className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-[#87CEEB] to-[#2E8BC0] rounded-xl flex items-center justify-center">
                <Youtube className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] rounded-xl flex items-center justify-center">
                <Youtube className="w-6 h-6 text-white" />
              </div>
            </div>

            <blockquote className="space-y-6">
              <div className="relative">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  "YouTube è l'unica piattaforma dove i tuoi contenuti{" "}
                  <span className="bg-gradient-to-r from-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                    lavorano per te, ogni ora, ogni giorno
                  </span>
                  {" "}— senza investimenti pubblicitari."
                </h3>
                
                {/* Modern Quote Marks */}
                <div className="absolute -top-6 -left-6 w-8 h-8 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] rounded-lg flex items-center justify-center opacity-20">
                  <span className="text-white text-lg font-bold">"</span>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 rounded-full text-sm font-bold tracking-[0.3em] uppercase mb-8 transition-all duration-300 hover:scale-105 shadow-lg bg-primary/10 text-primary border border-primary/20">
              FAQ YOUTUBE
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-slate-900 mb-8">
              Domande{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Frequenti
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Quanto tempo ci vuole per monetizzare un canale YouTube?",
                answer: "Dipende dal tuo punto di partenza. Alcuni canali raggiungono i requisiti in 30–90 giorni con la giusta strategia."
              },
              {
                question: "Devo metterci la faccia nei video?",
                answer: "No. Possiamo usare avatar AI, voiceover o video basati su presentazioni per creare contenuti professionali senza che tu appaia in video."
              },
              {
                question: "Gestite voi la creazione dei video?",
                answer: "Sì. Possiamo creare contenuti per te o affiancarti con strumenti, template e AI per semplificare tutto."
              },
              {
                question: "Posso guadagnare solo dagli annunci?",
                answer: "No. Oltre alla monetizzazione YouTube, integriamo affiliazioni, vendite dirette e lead generation nei tuoi video."
              },
              {
                question: "Funziona anche per aziende B2B?",
                answer: "Assolutamente sì. Un canale YouTube ben strutturato costruisce fiducia e autorevolezza anche in settori tecnici o professionali."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-r from-slate-50 to-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors duration-200">
                    <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] rounded-full flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                      <ArrowRight className="w-4 h-4 text-white transform rotate-90" />
                    </div>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Sell Recommendations */}
      <CrossSellRecommendations
        currentService="monetizza-youtube"
        layout="horizontal"
        title="Amplifica la tua strategia di content marketing"
        subtitle="Creator e business di successo combinano YouTube con questi servizi per risultati moltiplicati"
      />

      <AboutSection />
      
      {/* All Services Carousel */}
      <AllServicesCarousel />
      
      <MailerLiteContactSection />
      <Footer />
    </div>
  );
};

export default MonetizzaYoutube;