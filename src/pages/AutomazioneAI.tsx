import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import FinalCTASection from "@/components/FinalCTASection";
import CrossSellRecommendations from "@/components/CrossSellRecommendations";
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
  Building
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

      {/* Intro Section - Homepage Style */}
      <section className="relative overflow-hidden">
        {/* Hero Section with Modern Design */}
        <div className="bg-white py-24 lg:py-32 relative">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center space-y-12">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2E8BC0]/10 to-[#87CEEB]/10 rounded-full border border-[#2E8BC0]/20 backdrop-blur-sm">
                <Zap className="w-4 h-4 text-[#2E8BC0]" />
                <span className="text-[#2E8BC0] font-semibold text-sm">Automazione Intelligente</span>
              </div>

              {/* Main Headlines with Modern Typography */}
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                  Efficienza{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-[#2E8BC0] via-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                      massima
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full opacity-60"></div>
                  </span>
                  <br />
                  con AI integrata
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-4xl mx-auto leading-relaxed">
                  Ogni giorno le aziende perdono tempo prezioso in attività manuali: invii di email, raccolta dati, risposte clienti, inserimenti in CRM…<br/>
                  Noi automatizziamo tutto questo con soluzioni su misura basate su AI e automazioni low-code. Nessun team tecnico interno, nessuna complessità.
                </p>
              </div>

              {/* Second headline */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  <span className="text-slate-600">Processi automatizzati.</span>
                  <br />
                  <span className="text-slate-900">Risultati amplificati.</span>
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
                      Automatizza ora
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
                <span className="text-[#87CEEB] font-medium text-sm">Il futuro dell'automazione</span>
              </div>

              <blockquote className="space-y-6">
                <div className="relative">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    L'AI non sostituisce{" "}
                    <span className="bg-gradient-to-r from-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                      potenzia il team
                    </span>
                  </h3>
                  
                  {/* Modern Quote Marks */}
                  <div className="absolute -top-6 -left-6 w-8 h-8 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] rounded-lg flex items-center justify-center opacity-20">
                    <span className="text-white text-lg font-bold">"</span>
                  </div>
                </div>

                <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  Sistemi intelligenti che liberano il potenziale umano eliminando le attività ripetitive
                </p>

                <div className="pt-6">
                  <Button 
                    size="lg"
                    className="bg-white/10 text-white hover:bg-white/20 font-semibold px-10 py-4 rounded-full transition-all duration-300 border border-white/20 hover:border-white/30 backdrop-blur-sm"
                  >
                    <span className="flex items-center gap-2">
                      Scopri come funziona
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
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Cosa possiamo{" "}
              <span className="text-[#87CEEB]">automatizzare per te?</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Soluzioni AI che trasformano processi ripetitivi in automazioni intelligenti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Mail,
                title: "Comunicazioni & Email",
                description: "Invii automatici di email, follow-up personalizzati, risposte a domande frequenti.",
                features: ["Follow-up automatici", "Risposte AI", "Segmentazione intelligente"]
              },
              {
                icon: Users,
                title: "Gestione clienti & CRM",
                description: "Aggiornamenti automatici, assegnazione di lead, raccolta feedback.",
                features: ["Lead scoring automatico", "Pipeline aggiornata", "Feedback centralizzato"]
              },
              {
                icon: FileText,
                title: "Reportistica & Analisi",
                description: "Generazione automatica di report da database, fogli Google o piattaforme esterne.",
                features: ["Report automatici", "Dashboard live", "Insights predittivi"]
              },
              {
                icon: Settings,
                title: "Flussi HR & Operativi",
                description: "Onboarding, richieste ferie, approvazioni interne e task ripetitivi.",
                features: ["Onboarding smart", "Approvazioni automatiche", "Task scheduling"]
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group border border-[#2E8BC0]/20 hover:border-[#87CEEB]/30">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2E8BC0]/20 to-[#87CEEB]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-[#87CEEB]" />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                      <p className="text-slate-300 leading-relaxed text-sm">{feature.description}</p>
                      <div className="space-y-2">
                        {feature.features.map((item, i) => (
                          <div key={i} className="flex items-center text-sm text-slate-400">
                            <div className="w-2 h-2 bg-[#87CEEB] rounded-full mr-3"></div>
                            {item}
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
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#2E8BC0]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-[#87CEEB]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 bg-[#2E8BC0]/10 text-[#2E8BC0] border border-[#2E8BC0]/20 transition-all duration-300 hover:scale-105 shadow-lg">
              <Target className="w-6 h-6 mr-3 animate-spin" style={{ animationDuration: '3s' }} />
              Come funziona il nostro approccio
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-slate-900 mb-12">
              Dalla visione al{" "}
              <span className="bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] bg-clip-text text-transparent">
                prodotto
              </span>
            </h2>
            <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
              Un approccio sistematico che trasforma le tue idee in <span className="font-bold text-[#2E8BC0]">automazioni funzionanti</span>
            </p>
          </div>
          
          {/* Revolutionary Timeline Layout */}
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
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
                            <CheckCircle className="w-6 h-6 text-[#2E8BC0] animate-pulse" />
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

      {/* Cross-Sell Recommendations */}
      <CrossSellRecommendations
        currentService="automazione-ai"
        layout="horizontal"
        title="Completa la tua trasformazione digitale"
        subtitle="Le aziende che combinano automazione AI con questi servizi vedono un ROI del 340% superiore"
      />

      <AboutSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default AutomazioneAI;