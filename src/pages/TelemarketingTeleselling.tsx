import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import FinalCTASection from "@/components/FinalCTASection";
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
            
            {/* Content positioned at bottom left */}
            <div className="absolute bottom-12 left-12 max-w-2xl z-20">
              <div className="mb-6 flex items-center space-x-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                  <Phone className="w-4 h-4 text-white" />
                  <span className="text-white font-medium text-sm">Telemarketing / Teleselling</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-white drop-shadow-2xl">
                Telemarketing Strategico
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-100 mb-8 font-light leading-relaxed max-w-2xl">
                Trasformiamo ogni chiamata in un'opportunità
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="group font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-black hover:bg-gray-100 border-2 border-white/30">
                  <span className="flex items-center space-x-2">
                    <span>Scopri di più</span>
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

      {/* Intro Section - Exactly like Homepage */}
      <section className="relative overflow-hidden">
        {/* Hero Section with Modern Design */}
        <div className="bg-white py-24 lg:py-32 relative">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center space-y-12">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2E8BC0]/10 to-[#87CEEB]/10 rounded-full border border-[#2E8BC0]/20 backdrop-blur-sm">
                <Phone className="w-4 h-4 text-[#2E8BC0]" />
                <span className="text-[#2E8BC0] font-semibold text-sm">Connessione diretta con i clienti</span>
              </div>

              {/* Main Headlines with Modern Typography */}
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                  La forza del Telemarketing:{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-[#2E8BC0] via-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                      Connessione
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full opacity-60"></div>
                  </span>
                  <br />
                  Conversione e Crescita
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-4xl mx-auto leading-relaxed">
                  Crediamo fermamente nella forza della comunicazione diretta come strumento per connettere aziende con clienti e potenziali clienti.{" "}
                  <span className="text-[#2E8BC0] font-semibold">Il telemarketing è un modo efficace e personalizzato</span> per raggiungere il tuo pubblico. 
                  Non si tratta solo di vendite, ma di costruire relazioni, comprendere i bisogni dei clienti e offrire soluzioni mirate.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-8">
                <div className="relative inline-block group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-slate-900 to-slate-700 rounded-full blur opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
                  <Button 
                    size="xl" 
                    className="relative bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-700 hover:to-slate-900 text-white font-bold px-12 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <span className="flex items-center gap-3">
                      Scopri come
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customers Section - Keep brands logos */}
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
          
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-50 via-white to-slate-50 p-8 border border-slate-200/50">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            <div className="flex animate-[slide_30s_linear_infinite] items-center gap-16">
              {brandLogos.concat(brandLogos).map((logo, index) => (
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
            </div>
          </div>
        </div>
        
        <style>{`
          @keyframes slide {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </div>

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
                  Generiamo la tua{" "}
                  <span className="bg-gradient-to-r from-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                    lista di Prospect
                  </span>
                </h2>
              </div>

              {/* Right Side - Text */}
              <div className="space-y-8">
                <p className="text-xl lg:text-2xl leading-relaxed text-slate-300 max-w-3xl">
                  Identifichiamo e raccogliamo contatti potenzialmente interessati ai tuoi servizi. Utilizziamo database profilati e LinkedIn Sales Navigator.
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
                  Database Profilato
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Informazioni dettagliate per segmentare il pubblico.
                </p>
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
                  LinkedIn Sales Navigator
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Individuare i prospect migliori nel tuo mercato target.
                </p>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:shadow-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Image Section - Full Width */}
      <section className="py-40 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(https://res.cloudinary.com/dufcnrcfe/image/upload/v1752430999/a14ff2cd-e917-4480-9942-acd5b5e88d41.mp4_5_fg4olu.png)` }}
        />
        
        {/* Enhanced Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/30 via-transparent to-[#87CEEB]/20 z-10" />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl bg-black/20 backdrop-blur-sm rounded-lg px-6 py-4 mb-6 border border-white/10">
              Aumenta i tuoi ricavi e profitti con{" "}
              <span className="text-[#87CEEB] bg-gradient-to-r from-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">Sales on Demand!</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-xl font-medium bg-black/30 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/10">
              Passa al nostro servizio di telemarketing! Evita investimenti poco redditizi e risultati irraggiungibili. 
              Tutto questo sarà un lontano ricordo con il nostro modello On-Demand.
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
              <span className="text-sm font-semibold tracking-wider uppercase px-6 py-3 rounded-full bg-[#2E8BC0]/10 text-[#2E8BC0] border border-[#2E8BC0]/20">
                Pipeline Generation
              </span>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Heading */}
              <div>
                <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-slate-900 mb-8">
                  Creiamo la tua{" "}
                  <span className="bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] bg-clip-text text-transparent">
                    Pipeline
                  </span>{" "}
                  grazie al Telemarketing Proattivo
                </h2>
              </div>

              {/* Right Side - Text */}
              <div className="space-y-8">
                <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-3xl">
                  Il nostro servizio di telemarketing va ben oltre il semplice fare telefonate. 
                  L'obiettivo finale è generare lead qualificati, costruendo una pipeline costante di clienti.
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
                    Comunicazione avanzata, comprensione delle esigenze del prospect, costruzione di relazioni durature.
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
                    Generazione Pipeline
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Focus sul movimento efficiente dei lead attraverso il funnel.
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
                    Focus su Opportunità di Vendita
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Presentazione dei servizi in modo convincente e orientato alle opportunità.
                  </p>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:shadow-xl"></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <AboutSection />
      <LeadMagnetSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default TelemarketingTeleselling;