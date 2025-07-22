import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ArrowRight, Sparkles, Users, Settings, BarChart, Zap, Database, Shield, FileText, TrendingUp, Bot, MessageSquare, CheckCircle, Target, Layers, LinkIcon } from "lucide-react";

const SmartAITools = () => {
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
      <section className="pt-20 pb-2 px-0 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="relative min-h-[85vh] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 border border-blue-200/30 shadow-2xl">
            {/* Background Video */}
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0"
            >
              <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1752757859/salesondemand_2_c3el1b.mp4" type="video/mp4" />
            </video>
            
            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/90 via-blue-800/60 to-transparent z-10" />
            
            {/* Content positioned at bottom left */}
            <div className="absolute bottom-12 left-12 max-w-2xl z-20">
              <div className="mb-6 flex items-center space-x-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                  <Settings className="w-4 h-4 text-white" />
                  <span className="text-white font-medium text-sm">Smart AI Tools</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-white drop-shadow-2xl">
                Custom AI Tools That Work Like a Team Member
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-100 mb-8 font-light leading-relaxed max-w-2xl">
                We build internal dashboards, automation panels, and <span className="font-semibold text-blue-200">intelligent assistants</span> tailored to your daily workflow.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="group font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-blue-900 hover:bg-blue-50 border-2 border-white/30">
                  <span className="flex items-center space-x-2">
                    <span>Request a Demo</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button className="group font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/10 text-white hover:bg-white/20 border-2 border-white/30 backdrop-blur-sm">
                  <span className="flex items-center space-x-2">
                    <span>Talk to our engineers</span>
                    <Settings className="w-5 h-5 group-hover:rotate-12 transition-transform" />
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
                <span className="text-[#2E8BC0] font-semibold text-sm">Internal Automation</span>
              </div>

              {/* Main Headlines with Modern Typography */}
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                  AI tools that work{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-[#2E8BC0] via-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                      behind the scenes
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full opacity-60"></div>
                  </span>
                  <br />
                  for your team
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-4xl mx-auto leading-relaxed">
                  Need an internal lead tracker? Auto-report generator?{" "}
                  <span className="text-[#2E8BC0] font-semibold">Instead of generic tools, we build smart mini-platforms</span> that do exactly what your team needs — no bloat, no monthly fees.
                </p>
              </div>

              {/* Second headline */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  <span className="text-slate-600">Custom-built, intelligent.</span>
                  <br />
                  <span className="text-slate-900">Zero subscription fees.</span>
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
                      Build our tools
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
                <span className="text-[#87CEEB] font-medium text-sm">Our approach</span>
              </div>

              <blockquote className="space-y-6">
                <div className="relative">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Every tool we build{" "}
                    <span className="bg-gradient-to-r from-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                      replaces hours of human work per week — and never calls in sick
                    </span>
                  </h3>
                  
                  {/* Modern Quote Marks */}
                  <div className="absolute -top-6 -left-6 w-8 h-8 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] rounded-lg flex items-center justify-center opacity-20">
                    <span className="text-white text-lg font-bold">"</span>
                  </div>
                </div>

                <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  Smart automation that thinks like your best employee
                </p>

                <div className="pt-6">
                  <Button 
                    size="lg"
                    className="bg-white/10 text-white hover:bg-white/20 font-semibold px-10 py-4 rounded-full transition-all duration-300 border border-white/20 hover:border-white/30 backdrop-blur-sm"
                  >
                    <span className="flex items-center gap-2">
                      See examples
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

      {/* Use Case Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Esempi di soluzioni{" "}
              <span className="text-[#2E8BC0]">Smart AI</span>{" "}
              che possiamo costruire
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Soluzioni personalizzate per ogni esigenza aziendale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: "Generatori di contenuti intelligenti",
                points: [
                  "Testi personalizzati per il tuo settore",
                  "E-mail automatiche su misura",
                  "Descrizioni prodotto ottimizzate",
                  "Articoli SEO nel tuo tone of voice"
                ]
              },
              {
                icon: TrendingUp,
                title: "Dashboard predittive",
                points: [
                  "Previsioni vendite accurate",
                  "Analisi comportamento clienti",
                  "Insight automatici dai tuoi dati",
                  "Report intelligenti personalizzati"
                ]
              },
              {
                icon: Bot,
                title: "Bot per processi interni",
                points: [
                  "Automatizza ticketing aziendale",
                  "Gestione richieste HR",
                  "Onboarding automatizzato",
                  "Compilazione report automatica"
                ]
              },
              {
                icon: MessageSquare,
                title: "Strumenti di analisi linguistica",
                points: [
                  "Classificatori di testo avanzati",
                  "Sintesi automatica documenti",
                  "Sentiment analysis social",
                  "Analisi recensioni intelligente"
                ]
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="glass-card p-8 hover:shadow-premium transition-all duration-500 group hover:scale-[1.02] bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10">
                  <div className="space-y-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#2E8BC0]/20 to-[#87CEEB]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-[#2E8BC0]/30">
                        <IconComponent className="w-8 h-8 text-[#87CEEB]" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-[#87CEEB] to-[#2E8BC0] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#87CEEB] transition-colors duration-300">{feature.title}</h3>
                      <ul className="space-y-2">
                        {feature.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                            <CheckCircle className="w-4 h-4 text-[#87CEEB] mt-0.5 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
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
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight bg-black/30 backdrop-blur-sm rounded-lg px-6 py-4 mb-6 border border-white/10">
              Ready to automate{" "}
              <span className="text-[#87CEEB] bg-gradient-to-r from-[#87CEEB] to-[#55ACEE] bg-clip-text text-transparent">your daily workflow?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed font-medium bg-black/30 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/10">
              Let's build tools that work smarter, not harder
            </p>
            
            <Button className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Get started
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Perché scegliere strumenti{" "}
              <span className="text-[#2E8BC0]">AI su misura?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Più efficienza, meno margine d'errore",
                description: "L'AI lavora in modo costante e preciso, anche su task ripetitivi."
              },
              {
                icon: Layers,
                title: "Soluzioni adattabili e scalabili",
                description: "Gli strumenti si evolvono con il tuo business e si integrano facilmente in ambienti esistenti."
              },
              {
                icon: Zap,
                title: "Zero codice, massima potenza",
                description: "Usiamo tecnologie no-code o low-code quando possibile, così puoi gestirli anche in autonomia."
              },
              {
                icon: LinkIcon,
                title: "Integrazione con i tuoi sistemi",
                description: "CRM, Google Sheets, email, API… colleghiamo tutto."
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-[#2E8BC0]/5 to-[#87CEEB]/5 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group border border-[#2E8BC0]/10">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-slate-900">{benefit.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#2E8BC0]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#87CEEB]/5 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Hai un'idea di{" "}
                <span className="text-[#87CEEB]">strumento AI?</span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Parlaci del tuo caso d'uso e costruiremo la soluzione in pochi giorni.
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <Button 
                size="xl" 
                className="bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] hover:from-[#87CEEB] hover:to-[#2E8BC0] text-white font-bold px-12 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  Inizia il tuo progetto AI
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-slate-200/50">
            <blockquote className="space-y-6">
              <div className="text-6xl text-[#2E8BC0]/20 font-serif">"</div>
              <p className="text-2xl md:text-3xl font-medium text-slate-700 leading-relaxed">
                Non serve essere OpenAI per creare qualcosa di utile. A volte bastano le giuste API, un flusso chiaro e un problema reale da risolvere.{" "}
                <span className="text-[#2E8BC0] font-semibold">Il resto… lo facciamo noi.</span>
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Domande frequenti su{" "}
              <span className="text-[#2E8BC0]">strumenti AI personalizzati</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-gradient-to-br from-[#2E8BC0]/5 to-[#87CEEB]/5 rounded-xl border border-[#2E8BC0]/20 px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#2E8BC0] transition-colors">
                Potete davvero costruire da zero uno strumento per la mia azienda?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Assolutamente sì. Analizziamo i tuoi processi attuali, identifichiamo le aree di miglioramento e costruiamo strumenti personalizzati che si integrano perfettamente nel tuo workflow esistente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-gradient-to-br from-[#2E8BC0]/5 to-[#87CEEB]/5 rounded-xl border border-[#2E8BC0]/20 px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#2E8BC0] transition-colors">
                Quanto tempo serve per sviluppare un tool AI?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Dipende dalla complessità, ma generalmente sviluppiamo MVP funzionanti in 1-2 settimane. Strumenti più complessi possono richiedere 3-4 settimane. Ti forniamo sempre una timeline precisa dopo l'analisi iniziale.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-gradient-to-br from-[#2E8BC0]/5 to-[#87CEEB]/5 rounded-xl border border-[#2E8BC0]/20 px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#2E8BC0] transition-colors">
                Gli strumenti sono facili da usare per chi non è tecnico?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Progettiamo sempre interfacce intuitive e user-friendly. Includiamo training per il tuo team e documentazione dettagliata. L'obiettivo è che chiunque possa utilizzare gli strumenti senza competenze tecniche.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-gradient-to-br from-[#2E8BC0]/5 to-[#87CEEB]/5 rounded-xl border border-[#2E8BC0]/20 px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#2E8BC0] transition-colors">
                Posso collegare l'AI a dati che ho già (es. fogli, CRM)?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Certamente. Integriamo con Google Sheets, Excel, CRM come HubSpot o Salesforce, database esistenti, API personalizzate e molte altre fonti dati. L'integrazione è una parte fondamentale del nostro approccio.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-gradient-to-br from-[#2E8BC0]/5 to-[#87CEEB]/5 rounded-xl border border-[#2E8BC0]/20 px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#2E8BC0] transition-colors">
                È possibile creare strumenti che generano testi, immagini o report?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Sì, possiamo integrare le migliori AI generative (GPT, Claude, DALL-E, etc.) nei tuoi strumenti personalizzati. Creiamo interfacce su misura per generazione contenuti, report automatici, analisi predittive e molto altro.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <AboutSection />
      
      {/* Final CTA Section */}
      <section className="py-20 bg-white text-slate-900">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to build your first Smart AI tool?
          </h2>
          <p className="text-xl mb-10 leading-relaxed text-slate-600">
            Let's create something that makes your team more efficient and your business smarter.
          </p>
          <Button 
            size="xl" 
            className="bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] hover:from-[#87CEEB] hover:to-[#2E8BC0] text-white font-bold px-12 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center gap-3">
              Let's get started
              <ArrowRight className="w-5 h-5" />
            </span>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SmartAITools;