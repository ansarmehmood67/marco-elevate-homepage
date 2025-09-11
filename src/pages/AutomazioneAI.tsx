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
import { 
  ArrowRight, 
  Zap, 
  Users, 
  Target, 
  BarChart, 
  TrendingUp, 
  CheckCircle,
  Bot,
  Mail,
  FileText,
  Settings,
  Briefcase,
  ShoppingCart,
  Building,
  Sparkles
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AutomazioneAI = () => {
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
              <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290567/ai_automation_page_audup1.mp4" type="video/mp4" />
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
                      <Zap className="w-4 h-4 text-white" />
                      <span className="text-white font-medium text-sm">Automazione AI</span>
                    </div>
                  </div>
                  
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight mb-6 lg:mb-8 text-white drop-shadow-2xl">
                    Automazioni AI per lavorare meglio, non di più
                  </h1>
                  
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 mb-6 lg:mb-8 font-light leading-relaxed">
                    Riduci i tempi. Taglia i costi. Elimina gli errori.<br/>
                    Ti aiutiamo ad automatizzare processi aziendali ripetitivi con l'intelligenza artificiale, rendendo il tuo lavoro più fluido, veloce e intelligente.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="group font-semibold px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-black hover:bg-gray-100 border-2 border-white/30">
                      <span className="flex items-center space-x-2">
                        <span>Scopri le Automazioni AI</span>
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
        badge="AUTOMAZIONE INTELLIGENTE"
        title="Efficienza massima con AI"
        highlightedText="integrata"
        description="Ogni giorno le aziende perdono tempo prezioso in attività manuali: invii di email, raccolta dati, risposte clienti, inserimenti in CRM… Noi automatizziamo tutto questo con soluzioni su misura basate su AI e automazioni low-code. Nessun team tecnico interno, nessuna complessità."
        ctaText="Automatizza ora"
        ctaHref="/contact"
      />
      <StandardCustomersSection />
      <StandardQuoteSection
        mainQuote="L'AI non sostituisce"
        highlightedQuote="potenzia il team"
        description="Sistemi intelligenti che liberano il potenziale umano eliminando le attività ripetitive"
        ctaText="Scopri come funziona"
        ctaHref="/contact"
      />

      {/* Features Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 rounded-full text-sm font-bold tracking-[0.3em] uppercase mb-8 transition-all duration-300 hover:scale-105 shadow-lg bg-primary/10 text-primary border border-primary/20">
              AUTOMAZIONI AI
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-white mb-8">
              Cosa possiamo{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                automatizzare per te?
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Soluzioni AI che trasformano processi ripetitivi in automazioni intelligenti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Mail,
                title: "Comunicazioni & Email Intelligenti",
                description: "Sistemi di comunicazione AI che gestiscono follow-up personalizzati, risposte automatiche e nurturing avanzato per massimizzare l'engagement.",
                features: ["Follow-up comportamentali", "Risposte AI contestuali", "Segmentazione predittiva"]
              },
              {
                icon: Users,
                title: "CRM e Gestione Clienti Automatizzata",
                description: "Automazione completa del customer journey con scoring predittivo, pipeline intelligence e feedback loop automatici per crescita sostenibile.",
                features: ["Lead scoring AI-driven", "Pipeline prediction", "Customer intelligence centralizzata"]
              },
              {
                icon: FileText,
                title: "Business Intelligence Automatizzata",
                description: "Generazione automatica di report executive con insights predittivi, analisi cross-platform e dashboard intelligenti per decisioni data-driven.",
                features: ["Executive reporting automatico", "Predictive analytics", "Cross-platform intelligence"]
              },
              {
                icon: Settings,
                title: "Orchestrazione Operativa AI",
                description: "Automazione end-to-end dei processi HR, approval workflows e task management con intelligenza adattiva e scaling automatico.",
                features: ["Smart onboarding orchestration", "Workflow approval AI", "Adaptive task management"]
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group relative rounded-3xl p-10 min-h-[480px] flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] overflow-hidden shadow-2xl">
                  {/* Primary gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-primary"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

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
              );
            })}
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
          <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1753302167/ai_automations_d2kaqt.mp4" type="video/mp4" />
        </video>
        
        {/* Enhanced Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/30 via-transparent to-[#55ACEE]/20 z-10" />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl">
              Automatizza il futuro con{" "}
              <span className="text-[#87CEEB]">intelligenza artificiale</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-xl font-medium">
              Trasforma i tuoi processi aziendali con sistemi AI che imparano, 
              si adattano e ottimizzano automaticamente ogni operazione.
            </p>
            
            <Button className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Inizia l'automazione
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
              <span className="italic">Come funziona il nostro approccio</span>
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
                  title: "Analisi dei tuoi flussi attuali",
                  description: "Individuiamo le attività ripetitive e dove l'AI può fare la differenza.",
                  benefit: "Mappa completa dei processi ottimizzabili",
                  icon: Target
                },
                {
                  number: "02", 
                  title: "Proposta e prototipo rapido",
                  description: "Ti mostriamo una demo del flusso automatizzato, cucito sulle tue esigenze.",
                  benefit: "Anteprima funzionante della soluzione",
                  icon: Users
                },
                {
                  number: "03",
                  title: "Integrazione con i tuoi strumenti", 
                  description: "Colleghiamo la soluzione ai tuoi strumenti (CRM, email, database, ecc.)",
                  benefit: "Ecosistema integrato e automatizzato",
                  icon: BarChart
                },
                {
                  number: "04",
                  title: "Go live & supporto continuo",
                  description: "Monitoraggio, ottimizzazione e aggiornamenti garantiti.",
                  benefit: "Automazione sempre performante e aggiornata",
                  icon: TrendingUp
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
                            <Sparkles className="w-4 h-4 text-white" />
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

      {/* Use Cases Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Automazioni già realizzate per i{" "}
              <span className="text-[#87CEEB]">nostri clienti</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Esempi reali di come abbiamo trasformato i processi di diverse aziende
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Studio legale",
                description: "Automatizzazione dei follow-up email per appuntamenti e aggiornamenti cause.",
                features: ["Email automatiche", "Tracking appuntamenti", "Report casi"]
              },
              {
                icon: ShoppingCart,
                title: "E-commerce",
                description: "Risposte automatiche su WhatsApp, tracking ordini, gestione ticket.",
                features: ["Bot WhatsApp", "Stato ordini", "Supporto clienti"]
              },
              {
                icon: Building,
                title: "Agenzia di consulenza",
                description: "Generazione automatica di report settimanali e aggiornamento CRM.",
                features: ["Report automatici", "CRM aggiornato", "Dashboard insight"]
              }
            ].map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group border border-[#2E8BC0]/20 hover:border-[#87CEEB]/30">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2E8BC0]/20 to-[#87CEEB]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-[#87CEEB]" />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{useCase.description}</p>
                      <div className="space-y-2">
                        {useCase.features.map((feature, i) => (
                          <div key={i} className="flex items-center text-sm text-slate-400">
                            <div className="w-2 h-2 bg-[#87CEEB] rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote className="space-y-8">
            <div className="relative">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                "Ogni attività ripetitiva che svolgi a mano può diventare un flusso automatizzato.{" "}
                <span className="bg-gradient-to-r from-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                  L'AI non sostituisce le persone, ma restituisce loro tempo.
                </span>"
              </h3>
              
              {/* Modern Quote Marks */}
              <div className="absolute -top-6 -left-6 w-8 h-8 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] rounded-lg flex items-center justify-center opacity-20">
                <span className="text-white text-lg font-bold">"</span>
              </div>
            </div>
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Vuoi scoprire cosa puoi{" "}
              <span className="bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] bg-clip-text text-transparent">
                automatizzare oggi?
              </span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Raccontaci come lavori e ti mostreremo una demo gratuita del tuo flusso automatizzato.
            </p>
            <div className="pt-4">
              <div className="relative inline-block group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full blur opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
                <Button 
                  size="xl" 
                  className="relative bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] hover:from-[#87CEEB] hover:to-[#2E8BC0] text-white font-bold px-12 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    Prenota una call
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Domande frequenti sulle{" "}
              <span className="text-[#2E8BC0]">automazioni AI</span>
            </h2>
            <p className="text-xl text-slate-600">
              Risposte alle domande più comuni sui nostri servizi di automazione
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg border border-slate-200 px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#2E8BC0]">
                Serve avere un team tecnico per usare queste soluzioni?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                No, assolutamente. Le nostre automazioni sono progettate per essere utilizzate da chiunque, senza competenze tecniche. Ci occupiamo noi di tutta la parte tecnica e ti forniamo interfacce semplici e intuitive per gestire i tuoi flussi automatizzati.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg border border-slate-200 px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#2E8BC0]">
                Quanto tempo serve per implementare un'automazione?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Dipende dalla complessità del processo, ma generalmente riusciamo a implementare automazioni semplici in 3-5 giorni lavorativi, mentre quelle più complesse possono richiedere 1-2 settimane. Ti forniamo sempre una timeline precisa dopo l'analisi iniziale.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg border border-slate-200 px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#2E8BC0]">
                Posso collegare più strumenti (es. WhatsApp + Google Sheets + Email)?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Assolutamente sì! Una delle nostre specialità è creare automazioni che collegano diversi strumenti e piattaforme. Possiamo integrare praticamente qualsiasi servizio che abbia delle API disponibili, creando flussi complessi che funzionano perfettamente insieme.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg border border-slate-200 px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#2E8BC0]">
                Posso modificare il flusso dopo la consegna?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Certamente! Ti forniamo sempre la possibilità di modificare e ottimizzare i tuoi flussi automatizzati. Offriamo supporto continuo e, quando possibile, creiamo interfacce che ti permettono di fare modifiche semplici in autonomia.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg border border-slate-200 px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#2E8BC0]">
                Offrite supporto e aggiornamenti nel tempo?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Sì, offriamo diversi piani di supporto che includono monitoraggio, manutenzione, aggiornamenti e ottimizzazioni continue. Le automazioni devono evolvere con il tuo business, e noi ci assicuriamo che funzionino sempre al meglio.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Cross-Sell Recommendations - Mid-page focused cross-sell */}
      <CrossSellRecommendations
        currentService="automazione-ai"
        layout="horizontal"
        title="Completa la tua trasformazione digitale"
        subtitle="Le aziende che combinano automazione AI con questi servizi vedono un ROI del 340% superiore"
      />

      <AboutSection />
      <MailerLiteContactSection />
      
      {/* All Services Carousel - Complete service discovery */}
      <AllServicesCarousel />
      <Footer />
    </div>
  );
};

export default AutomazioneAI;