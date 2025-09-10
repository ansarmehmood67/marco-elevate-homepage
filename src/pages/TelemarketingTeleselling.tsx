import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StandardIntroSection from "@/components/shared/StandardIntroSection";
import StandardCustomersSection from "@/components/shared/StandardCustomersSection";
import StandardQuoteSection from "@/components/shared/StandardQuoteSection";
import AboutSection from "@/components/AboutSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import MailerLiteContactSection from "@/components/MailerLiteContactSection";
import CrossSellRecommendations from "@/components/CrossSellRecommendations";
import AllServicesCarousel from "@/components/shared/AllServicesCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ArrowRight, Phone, Target, Users, Database, Linkedin, ChevronDown } from "lucide-react";

const TelemarketingTeleselling = () => {
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
      
      {/* Hero Section with Video Background */}
      <section className="pt-20 pb-2 px-0 bg-black">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="relative min-h-[85vh] rounded-3xl overflow-hidden border border-gray-800/30 shadow-2xl bg-black">
            {/* Video Background */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290362/telemarketing_page_1_vrqa0n.mp4" type="video/mp4" />
            </video>
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/70" />
            
            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent" />
            
            {/* Mobile-friendly flex layout */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 lg:p-12 z-20">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
              {/* Content Section */}
              <div className="flex-1 max-w-2xl">
                <div className="mb-6 flex items-center space-x-2 justify-center lg:justify-start">
                  <div className="inline-flex items-center gap-2 px-3 lg:px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                    <Phone className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                    <span className="text-white font-medium text-xs lg:text-sm">Telemarketing / Teleselling</span>
                  </div>
                </div>
                
                <h1 className="text-6xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 lg:mb-8 text-white drop-shadow-2xl">
                  Telemarketing Strategico
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 mb-6 lg:mb-8 font-light leading-relaxed">
                  Trasformiamo ogni chiamata in un'opportunità
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button className="group font-semibold px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-black hover:bg-gray-100 border-2 border-white/30">
                    <span className="flex items-center space-x-2">
                      <span>Scopri di più</span>
                      <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>
              </div>

              {/* Video Player Section */}
              <div className="w-full lg:w-80 xl:w-96 h-48 lg:h-48 xl:h-56 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm flex-shrink-0">
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
        badge="TELEMARKETING/TELESELLING"
        title="La forza del Telemarketing: Connessione, Conversione e"
        highlightedText="Crescita"
        description="La connessione diretta è uno degli strumenti più potenti per creare relazioni autentiche. La telefonata, grazie alla sua immediatezza, resta un canale decisivo per instaurare fiducia. Il telemarketing strategico è il metodo più efficace e personalizzato per raggiungere e coinvolgere il pubblico."
        ctaText="Scopri di più →"
        ctaHref="/contact"
      />
      <StandardCustomersSection />
      <StandardQuoteSection
        mainQuote="Ogni chiamata è una connessione,"
        highlightedQuote="ogni connessione conta"
        description="Trasformiamo ogni chiamata in un'opportunità per costruire fiducia e soddisfazione"
        ctaText="Scopri il servizio"
        ctaHref="/contact"
      />

      {/* Generazione Prospect Section - Black Background with White Cards */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#2E8BC0]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-[#87CEEB]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header Section */}
          <div className="mb-16 px-4 relative">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold tracking-wider uppercase px-6 py-3 rounded-full bg-[#2E8BC0]/10 text-[#87CEEB] border border-[#2E8BC0]/20">
                Generazione Prospect
              </span>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Heading */}
              <div>
                <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-white mb-8">
                  <span className="bg-gradient-to-r from-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                    Contatti qualificati
                  </span>{" "}
                  per far crescere il tuo business
                </h2>
              </div>

              {/* Right Side - Text */}
              <div className="space-y-8">
                <p className="text-xl lg:text-2xl leading-relaxed text-slate-300 max-w-3xl">
                  Trasformiamo i dati in opportunità concrete: identifichiamo e raccogliamo contatti realmente interessati ai tuoi servizi. Usiamo strumenti avanzati come LinkedIn Sales Navigator per garantirti lead mirati e in target.
                </p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="group relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-lg transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-[#2E8BC0]/20 hover:-translate-y-2 hover:scale-105">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Database className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#2E8BC0] transition-colors duration-300">
                  Database avanzato, per risultati precisi
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Database avanzato con segmentazione intelligente dei prospect.
                </p>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-[#2E8BC0] rounded-full mr-2"></div>Segmentazione demografica precisa</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-[#2E8BC0] rounded-full mr-2"></div>Analisi dei comportamenti d'acquisto</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-[#2E8BC0] rounded-full mr-2"></div>Verifica e aggiornamento dei contatti</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-[#2E8BC0] rounded-full mr-2"></div>Profilazione avanzata per target efficaci</li>
                </ul>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:shadow-xl"></div>
            </div>

            <div className="group relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-lg transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-[#2E8BC0]/20 hover:-translate-y-2 hover:scale-105">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Linkedin className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#2E8BC0] transition-colors duration-300">
                  Il meglio del B2B per la tua crescita
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Strumento premium per identificare prospect qualificati nel B2B.
                </p>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-[#2E8BC0] rounded-full mr-2"></div>Lead discovery mirata</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-[#2E8BC0] rounded-full mr-2"></div>Filtri intelligenti per settori e ruoli</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-[#2E8BC0] rounded-full mr-2"></div>Arricchimento dei dati di contatto</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-[#2E8BC0] rounded-full mr-2"></div>Tecniche di social selling efficaci</li>
                </ul>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:shadow-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Image Section - Full Width */}
      <section className="py-40 relative overflow-hidden">
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290309/telemarketing_page_macldk.mp4" type="video/mp4" />
        </video>
        
        {/* Enhanced Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/30 via-transparent to-[#87CEEB]/20 z-10" />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl">
              Aumenta ricavi e profitti con{" "}
              <span className="text-[#87CEEB]">il telemarketing strategico</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-xl font-medium">
              Il nostro servizio ti aiuta a trasformare le chiamate in opportunità reali, evitando sprechi di budget e azioni poco redditizie. Con un modello flessibile e orientato ai risultati, puoi ottenere più vendite in meno tempo.
            </p>
            
            <Button className="bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] hover:from-[#87CEEB] hover:to-[#2E8BC0] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Contattaci
            </Button>
          </div>
        </div>
      </section>

      {/* Pipeline Generation Section - White Background with Accordion Cards */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#2E8BC0]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-[#87CEEB]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header Section */}
          <div className="mb-16 px-4 relative">
            <div className="inline-block mb-6">
              <span className="text-sm font-bold tracking-[0.3em] uppercase px-8 py-4 rounded-full bg-gradient-to-r from-primary/20 to-primary-glow/20 text-primary border border-primary/30 backdrop-blur-sm">
                Pipeline Generation
              </span>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Heading */}
              <div>
                <h2 className="text-5xl lg:text-7xl font-black leading-[0.8] tracking-tight text-slate-900 mb-10">
                  <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                    Generiamo opportunità di vendita concrete
                  </span>{" "}
                  con il Telemarketing Proattivo
                </h2>
              </div>

              {/* Right Side - Text */}
              <div className="space-y-8">
                <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-3xl">
                  Il nostro telemarketing proattivo va oltre le semplici chiamate: genera lead qualificati e crea un flusso costante di nuovi clienti, supportando la crescita del tuo business.
                </p>
              </div>
            </div>
          </div>

          {/* Accordion Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="group bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-lg transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-[#2E8BC0]/20 hover:-translate-y-2 hover:scale-105">
              <CardContent className="p-8">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
                
                {/* Icon */}
                <div className="relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#2E8BC0] transition-colors duration-300">
                    Telemarketing Proattivo
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Comunicazione strategica e personalizzata per capire le esigenze dei prospect e costruire relazioni di valore nel tempo.
                  </p>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:shadow-xl"></div>
              </CardContent>
            </Card>

            <Card className="group bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-lg transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-[#2E8BC0]/20 hover:-translate-y-2 hover:scale-105">
              <CardContent className="p-8">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
                
                {/* Icon */}
                <div className="relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#2E8BC0] transition-colors duration-300">
                    Generazione di nuovi clienti
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Gestione mirata dei contatti per garantire un flusso continuo di lead qualificati pronti a diventare clienti.
                  </p>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:shadow-xl"></div>
              </CardContent>
            </Card>

            <Card className="group bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-lg transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-[#2E8BC0]/20 hover:-translate-y-2 hover:scale-105">
              <CardContent className="p-8">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
                
                {/* Icon */}
                <div className="relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#2E8BC0] transition-colors duration-300">
                    Opportunità di Vendita
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Presentazione chiara e convincente dei tuoi servizi, per trasformare ogni contatto in una possibilità concreta di crescita.
                  </p>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:shadow-xl"></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cross-Sell Recommendations */}
      <CrossSellRecommendations
        currentService="telemarketing-teleselling"
        layout="horizontal"
        title="Potenzia i tuoi risultati di vendita"
        subtitle="Il 73% dei clienti Telemarketing aggiunge questi servizi per massimizzare le conversioni"
      />

      <AboutSection />
      <LeadMagnetSection />
      
      {/* All Services Carousel */}
      <AllServicesCarousel />
      
      <MailerLiteContactSection />
      <Footer />
    </div>
  );
};

export default TelemarketingTeleselling;