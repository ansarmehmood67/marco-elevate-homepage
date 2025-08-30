import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StandardIntroSection from "@/components/shared/StandardIntroSection";
import StandardCustomersSection from "@/components/shared/StandardCustomersSection";
import StandardQuoteSection from "@/components/shared/StandardQuoteSection";
import AboutSection from "@/components/AboutSection";
import FinalCTASection from "@/components/FinalCTASection";
import CrossSellRecommendations from "@/components/CrossSellRecommendations";
import AllServicesCarousel from "@/components/shared/AllServicesCarousel";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Users, TrendingUp } from "lucide-react";

const ChatbotAI = () => {
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
              <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290521/chatbot_ai_page_jgsw1x.mp4" type="video/mp4" />
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
                      <MessageSquare className="w-4 h-4 text-white" />
                      <span className="text-white font-medium text-sm">Chatbot AI</span>
                    </div>
                  </div>
                  
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight mb-6 lg:mb-8 text-white drop-shadow-2xl">
                    Il tuo miglior collaboratore è attivo 24/7
                  </h1>
                  
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 mb-6 lg:mb-8 font-light leading-relaxed">
                    Chatbot AI personalizzati che accolgono, guidano, assistono e gestiscono le escalation — tutto su misura per il tuo business.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="group font-semibold px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-black hover:bg-gray-100 border-2 border-white/30">
                      <span className="flex items-center space-x-2">
                        <span>Costruisci il mio chatbot →</span>
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
        badge="ASSISTENTI VIRTUALI INTELLIGENTI"
        title="Conversazioni che convertono 24 ore al"
        highlightedText="giorno"
        description="AI che comprende, risponde e qualifica i tuoi prospect come un vero consulente. Supporto clienti avanzato e lead qualification automatica."
        ctaText="Attiva chatbot"
        ctaHref="/contact"
      />
      <StandardCustomersSection />
      <StandardQuoteSection
        mainQuote="Ogni chat"
        highlightedQuote="è un'opportunità"
        description="Assistenti virtuali che trasformano ogni interazione in un momento di valore per il cliente"
        ctaText="Vedi demo live"
        ctaHref="/contact"
      />

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Funzionalità <span className="text-[#87CEEB]">Avanzate</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Assistenti virtuali intelligenti che comprendono e rispondono come esperti umani
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🧠",
                title: "NLP Avanzato",
                description: "Comprensione del linguaggio naturale e contesto conversazionale",
                features: ["Analisi del sentiment", "Intent recognition", "Context awareness"]
              },
              {
                icon: "🎯",
                title: "Lead Qualification",
                description: "Qualificazione automatica dei prospect attraverso conversazioni intelligenti",
                features: ["Scoring automatico", "Segmentazione dinamica", "Handoff intelligente"]
              },
              {
                icon: "🌐",
                title: "Multicanale",
                description: "Integrazione perfetta su web, social e piattaforme messaging",
                features: ["WhatsApp Business", "Facebook Messenger", "Sito web integrato"]
              },
              {
                icon: "📈",
                title: "Analytics Real-time",
                description: "Monitoraggio delle performance e ottimizzazione continua",
                features: ["Metriche conversazione", "A/B testing", "ROI tracking"]
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
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1753301939/ai_chatbot_2_uairsy.mp4" type="video/mp4" />
        </video>
        
        {/* Enhanced Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/30 via-transparent to-[#55ACEE]/20 z-10" />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl">
              Rivoluziona il customer service con{" "}
              <span className="text-[#87CEEB]">chatbot AI</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-xl font-medium">
              Assistenti virtuali che trasformano ogni conversazione in un'opportunità di business, 
              garantendo supporto 24/7 di qualità superiore.
            </p>
            
            <Button className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Attiva il tuo chatbot
            </Button>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Perfetto per ogni tipo di{" "}
              <span className="bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] bg-clip-text text-transparent">azienda</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Automazione dell'Onboarding",
                description: "Guida passo dopo passo gli utenti dalla registrazione all'attivazione senza alcuno sforzo manuale.",
                icon: "🚀",
                features: ["Registrazione guidata", "Tutorial interattivi", "Supporto automatico"]
              },
              {
                title: "Assistente al Supporto Clienti", 
                description: "Risponde alle domande frequenti, risolve problemi e gestisce automaticamente i casi più complessi.",
                icon: "🎯",
                features: ["FAQ automatiche", "Escalation intelligente", "Supporto multilingue"]
              },
              {
                title: "Bot per Vendite e Promozioni",
                description: "Invia offerte mirate, aggiornamenti e promemoria per aumentare l'engagement e le conversioni.",
                icon: "💼",
                features: ["Offerte personalizzate", "Follow-up automatico", "Analytics avanzate"]
              }
            ].map((useCase, index) => (
              <div key={index} className="group">
                <div className="relative bg-white p-8 rounded-3xl border border-gray-200/20 hover:border-[#2E8BC0]/40 transition-all duration-500 hover:shadow-2xl group-hover:shadow-[#2E8BC0]/20 h-full backdrop-blur-sm overflow-hidden">
                  {/* Premium gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/5 via-transparent to-[#87CEEB]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  
                  {/* Floating light effect */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#2E8BC0]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="relative space-y-6 z-10">
                    {/* Premium Icon */}
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#2E8BC0]/15 to-[#87CEEB]/5 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                        <span className="text-3xl">{useCase.icon}</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Premium Content */}
                    <div className="space-y-5">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#2E8BC0] transition-colors duration-300">{useCase.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-base">{useCase.description}</p>
                      
                      {/* Premium Features */}
                      <div className="space-y-3 pt-2">
                        {useCase.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3 text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                            <div className="w-2 h-2 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full shadow-sm"></div>
                            <span className="font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
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
              <MessageSquare className="w-6 h-6 mr-3 animate-spin" style={{ animationDuration: '3s' }} />
              Il nostro processo in 4 fasi
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-slate-900 mb-12">
              Come costruiamo il tuo{" "}
              <span className="bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] bg-clip-text text-transparent">
                chatbot personalizzato
              </span>
            </h2>
            <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
              Un approccio sistematico che garantisce <span className="font-bold text-[#2E8BC0]">risultati perfetti</span>
            </p>
          </div>
          
          {/* Revolutionary Timeline Layout */}
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {[
                {
                  number: "01",
                  title: "Ci racconti il tuo flusso aziendale",
                  description: "Comprendiamo il tuo modello di business, le domande più frequenti e le risposte che il bot deve fornire.",
                  benefit: "Analisi completa del business model",
                  icon: MessageSquare
                },
                {
                  number: "02", 
                  title: "Creiamo e personalizziamo il tuo chatbot",
                  description: "Utilizziamo i tuoi dati per addestrare l'AI, definiamo la logica e testiamo i casi d'uso.",
                  benefit: "AI addestrata su misura per te",
                  icon: Users
                },
                {
                  number: "03",
                  title: "Lo distribuiamo sulla piattaforma scelta", 
                  description: "Che sia WhatsApp, sito web o altro, il tuo chatbot è pronto a lavorare dove serve.",
                  benefit: "Integrazione completa e seamless",
                  icon: TrendingUp
                },
                {
                  number: "04",
                  title: "Gestisci tutto con semplicità",
                  description: "Monitora le performance, intervieni nelle chat e modifica i flussi tramite un pannello di controllo intuitivo.",
                  benefit: "Controllo totale e ottimizzazione continua",
                  icon: ArrowRight
                }
              ].map((phase, index) => {
                const Icon = phase.icon;
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
                          <Icon className="w-10 h-10 text-[#2E8BC0] group-hover:scale-110 transition-transform duration-300" />
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
                            <div className="w-6 h-6 text-[#2E8BC0] animate-pulse">✓</div>
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
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#2E8BC0]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#87CEEB]/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="text-white">Supporto tradizionale</span>{" "}
              <span className="text-slate-500">vs</span>{" "}
              <span className="bg-gradient-to-r from-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">AI Chatbot</span>
            </h2>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-6 px-4 text-xl font-bold text-white">Caratteristica</th>
                    <th className="text-center py-6 px-4 text-xl font-bold text-slate-400">Supporto solo umano</th>
                    <th className="text-center py-6 px-4 text-xl font-bold bg-gradient-to-r from-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">Supporto con AI Chatbot</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Disponibile 24/7", traditional: "❌", chatbot: "✅" },
                    { feature: "Gestisce centinaia di chat", traditional: "❌", chatbot: "✅" },
                    { feature: "Richiede formazione", traditional: "✅", chatbot: "✅ (una volta sola)" },
                    { feature: "Risponde istantaneamente", traditional: "❌", chatbot: "✅" },
                    { feature: "Può passare a un umano", traditional: "❌", chatbot: "✅" }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors duration-300">
                      <td className="py-6 px-4 text-lg font-medium text-white">{row.feature}</td>
                      <td className="py-6 px-4 text-center text-2xl">{row.traditional}</td>
                      <td className="py-6 px-4 text-center text-2xl text-green-400">{row.chatbot}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Quote/Emotive Section */}
      <section className="py-20 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <blockquote className="space-y-8">
            <div className="relative">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                "Il nostro chatbot non è solo un risponditore — è la tua prima impressione, la tua guida e il tuo venditore. Non dorme mai, non dimentica mai e parla sempre con la tua voce."
              </h3>
              
              {/* Modern Quote Marks */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center opacity-60">
                <span className="text-white text-2xl font-bold">"</span>
              </div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center opacity-60 rotate-180">
                <span className="text-white text-2xl font-bold">"</span>
              </div>
            </div>
          </blockquote>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Domande? <span className="bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] bg-clip-text text-transparent">Ci pensiamo noi</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Posso addestrare il bot in più lingue?",
                answer: "Sì, il nostro chatbot supporta oltre 30 lingue e può essere addestrato per rispondere in modo naturale in qualsiasi idioma tu preferisca."
              },
              {
                question: "Su quali canali posso usarlo?",
                answer: "Il chatbot può essere integrato su WhatsApp, sito web, Facebook Messenger, Telegram e molte altre piattaforme di messaggistica."
              },
              {
                question: "Può raccogliere dati e feedback?",
                answer: "Assolutamente sì. Il chatbot può raccogliere informazioni sui clienti, feedback, lead qualificati e dati per il tuo CRM."
              },
              {
                question: "È conforme al GDPR?",
                answer: "Sì, tutti i nostri chatbot sono progettati nel rispetto delle normative GDPR e della privacy dei dati degli utenti."
              },
              {
                question: "Posso modificare i flussi successivamente?",
                answer: "Certo, attraverso il pannello di controllo puoi modificare risposte, aggiungere nuovi flussi e aggiornare la logica del chatbot in tempo reale."
              },
              {
                question: "Cosa succede se il chatbot non risponde correttamente?",
                answer: "Il sistema è progettato per passare automaticamente a un operatore umano quando non riesce a gestire una richiesta, garantendo sempre un'esperienza cliente ottimale."
              }
            ].map((faq, index) => (
              <div key={index} className="group border border-slate-200 rounded-2xl overflow-hidden hover:border-[#2E8BC0]/40 transition-all duration-300">
                <details className="group-hover:bg-slate-50/50">
                  <summary className="px-8 py-6 cursor-pointer flex items-center justify-between text-lg font-semibold text-slate-900 hover:text-[#2E8BC0] transition-colors duration-300">
                    <span>{faq.question}</span>
                    <div className="w-8 h-8 rounded-full bg-[#2E8BC0]/10 flex items-center justify-center group-hover:bg-[#2E8BC0]/20 transition-colors duration-300">
                      <span className="text-[#2E8BC0] transform transition-transform duration-300 group-open:rotate-45">+</span>
                    </div>
                  </summary>
                  <div className="px-8 pb-6 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Sell Recommendations - Mid-page focused cross-sell */}
      <CrossSellRecommendations
        currentService="chatbot-ai"
        layout="horizontal"
        title="Amplia la tua strategia conversazionale"
        subtitle="I chatbot AI performano meglio quando integrati con questi servizi complementari"
      />

      <AboutSection />
      <FinalCTASection />
      
      {/* All Services Carousel - Complete service discovery */}
      <AllServicesCarousel />
      <Footer />
    </div>
  );
};

export default ChatbotAI;