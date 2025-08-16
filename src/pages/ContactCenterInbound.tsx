import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import FinalCTASection from "@/components/FinalCTASection";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Users, Headphones, TrendingUp, Target } from "lucide-react";

const ContactCenterInbound = () => {
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
              <source
                src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290377/inbound_contact_center_page_a8rtme.mp4"
                type="video/mp4"
              />
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
              <div className="mb-6 flex items-center space-x-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span className="text-white font-medium text-sm">Contact Center Inbound</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-white drop-shadow-2xl">
               Eccellenza nelle Vendite Inbound
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-100 mb-8 font-light leading-relaxed max-w-2xl">
                Ogni chiamata in entrata è un’opportunità per connettersi, convertire e creare valore.
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

      {/* Intro Section */}
      <div className="bg-white py-24 lg:py-32 relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-12">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2E8BC0]/10 to-[#87CEEB]/10 rounded-full border border-[#2E8BC0]/20 backdrop-blur-sm">
              <MessageSquare className="w-4 h-4 text-[#2E8BC0]" />
              <span className="text-[#2E8BC0] font-semibold text-sm">Inbound Contact Center Professionale</span>
            </div>

            {/* Main Headlines with Modern Typography */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                Inbound Contact Center{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#2E8BC0] via-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                    Professionale
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full opacity-60"></div>
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-4xl mx-auto leading-relaxed">
                Offriamo un servizio di gestione chiamate in entrata altamente professionale, progettato per fornire supporto tempestivo, efficiente e multicanale ai tuoi clienti. Il nostro team è formato per gestire richieste, problemi e opportunità con attenzione e precisione.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
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
              <span className="text-[#87CEEB] font-medium text-sm">Il nostro impegno</span>
            </div>

            <blockquote className="space-y-6">
              <div className="relative">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Ogni cliente{" "}
                  <span className="bg-gradient-to-r from-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                    è importante
                  </span>
                </h3>
                
                {/* Modern Quote Marks */}
                <div className="absolute -top-6 -left-6 w-8 h-8 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] rounded-lg flex items-center justify-center opacity-20">
                  <span className="text-white text-lg font-bold">"</span>
                </div>
              </div>

              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Supporto multicanale h24 con operatori formati per offrire un'esperienza cliente di qualità superiore
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
      </div>

      {/* Customers Section */}
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
      </div>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#2E8BC0]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-[#87CEEB]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header Section */}
          <div className="mb-16 px-4 relative">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold tracking-wider uppercase px-6 py-3 rounded-full bg-[#87CEEB]/10 text-[#87CEEB] border border-[#87CEEB]/20">
                I nostri vantaggi
              </span>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Heading */}
              <div>
                <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-white mb-8">
                  Benefits
                </h2>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="group relative bg-white backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-lg transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:scale-105">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-300">
                  Supporto Multicanale
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Rispondiamo su tutti i canali: telefono, chat, email e social.
                </p>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:shadow-xl"></div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-lg transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:scale-105">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-300">
                  Tempi di Risposta Ottimali
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Interventi rapidi per aumentare la soddisfazione del cliente.
                </p>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:shadow-xl"></div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-lg transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:scale-105">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-300">
                  Customer Satisfaction
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Un'esperienza cliente curata in ogni dettaglio.
                </p>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:shadow-xl"></div>
            </div>
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
          <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1753302600/outsourcing_salesforce_1_bbl0g3.mp4" type="video/mp4" />
        </video>
        
        {/* Enhanced Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/30 via-transparent to-[#87CEEB]/20 z-10" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            💡 Trasforma il tuo servizio clienti in un vantaggio competitivo!
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Affida la gestione inbound a professionisti. Scopri come migliorare l'efficienza operativa e la soddisfazione dei tuoi clienti oggi stesso.
          </p>
          
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full blur opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
            <Button 
              size="xl" 
              className="relative bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] hover:from-[#87CEEB] hover:to-[#2E8BC0] text-white font-bold px-12 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                👉 Contattaci ora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Come Funziona Section */}
      <section className="bg-white py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2E8BC0]/10 to-[#87CEEB]/10 rounded-full border border-[#2E8BC0]/20 backdrop-blur-sm mb-6">
              <Headphones className="w-4 h-4 text-[#2E8BC0]" />
              <span className="text-[#2E8BC0] font-semibold text-sm">Il nostro processo</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-8">
              🧠 Un flusso organizzato, una gestione efficiente
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-4xl mx-auto leading-relaxed">
              Spieghiamo come funziona il nostro servizio inbound: dalla presa in carico della chiamata, alla classificazione e risoluzione o passaggio al reparto corretto. Ogni contatto è tracciato, ogni cliente è ascoltato.
            </p>
          </div>

          {/* Four Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200/50 p-8 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] rounded-xl flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Presa in carico</h3>
                <p className="text-slate-600 leading-relaxed">Risposta immediata e professionale ad ogni chiamata in entrata.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200/50 p-8 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] rounded-xl flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Classificazione</h3>
                <p className="text-slate-600 leading-relaxed">Analisi rapida della richiesta per instradare correttamente la chiamata.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200/50 p-8 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] rounded-xl flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Risoluzione</h3>
                <p className="text-slate-600 leading-relaxed">Gestione diretta della richiesta o trasferimento al reparto competente.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200/50 p-8 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] rounded-xl flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Tracciamento</h3>
                <p className="text-slate-600 leading-relaxed">Monitoraggio completo di ogni interazione per garantire qualità e follow-up.</p>
              </div>
            </div>
          </div>
        </div>
        
        <style>{`
          @keyframes slide {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      <AboutSection />
      <LeadMagnetSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default ContactCenterInbound;