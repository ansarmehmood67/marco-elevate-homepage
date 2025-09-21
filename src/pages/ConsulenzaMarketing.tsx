import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEO/SEOHead";
import { createServiceSchema, createOrganizationSchema, createBreadcrumbSchema } from "@/utils/seoData";
import StandardIntroSection from "@/components/shared/StandardIntroSection";
import StandardCustomersSection from "@/components/shared/StandardCustomersSection";
import StandardQuoteSection from "@/components/shared/StandardQuoteSection";
import AboutSection from "@/components/AboutSection";
import LeadMagnetSectionAnimated from "@/components/LeadMagnetSectionAnimated";
import PremiumServicesCarouselOptimized from "@/components/PremiumServicesCarouselOptimized";
import MailerLiteContactSectionAnimated from "@/components/MailerLiteContactSectionAnimated";
import CrossSellRecommendations from "@/components/CrossSellRecommendations";
import { Button } from "@/components/ui/button";
import { ArrowRight, Megaphone, Target, TrendingUp, Users, BarChart3, Zap } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const ConsulenzaMarketing = () => {
  const { ref, visibleItems } = useStaggeredAnimation(6, 200);

  const seoData = {
    title: "Consulenza Marketing Professionale | Strategie Personalizzate | Marco Business",
    description: "Consulenza marketing professionale per far crescere il tuo business. Strategie personalizzate, lead generation, growth marketing e analytics. Risultati misurabili garantiti.",
    canonical: "https://marco-business.com/consulenza-marketing",
    ogTitle: "Consulenza Marketing - Strategie che Funzionano",
    ogDescription: "Sviluppiamo strategie marketing innovative che accelerano la crescita del tuo business. Consulenza personalizzata e risultati misurabili.",
    ogImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-consulenza-marketing.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createServiceSchema({
          name: "Consulenza Marketing",
          description: "Servizi di consulenza marketing personalizzata per strategie vincenti e crescita sostenibile",
          category: "Marketing Consulting"
        }),
        createBreadcrumbSchema([
          { name: "Home", url: "https://marco-business.com" },
          { name: "Consulenza Marketing", url: "https://marco-business.com/consulenza-marketing" }
        ])
      ]
    }
  };

  const services = [
    {
      icon: Megaphone,
      title: "Strategia Marketing",
      description: "Sviluppo di strategie personalizzate per il tuo target di mercato"
    },
    {
      icon: Target,
      title: "Lead Generation",
      description: "Campagne mirate per generare lead qualificati e aumentare le conversioni"
    },
    {
      icon: TrendingUp,
      title: "Growth Marketing",
      description: "Tattiche avanzate per accelerare la crescita del tuo business"
    },
    {
      icon: BarChart3,
      title: "Analytics & ROI",
      description: "Monitoraggio e ottimizzazione delle performance marketing"
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description: "Automatizzazione dei processi per massimizzare l'efficienza"
    },
    {
      icon: Users,
      title: "Customer Journey",
      description: "Ottimizzazione dell'esperienza cliente lungo tutto il funnel"
    }
  ];

  return (
    <>
      <SEOHead data={seoData} />
      <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={ref} className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-5xl lg:text-7xl font-bold text-white mb-6 ${
              visibleItems[0] 
                ? "animate-swipe-in-left" 
                : "opacity-0"
            }`}>
              Consulenza <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Marketing</span>
            </h1>
            <p className={`text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed ${
              visibleItems[1] 
                ? "animate-fade-in-bottom" 
                : "opacity-0"
            }`}>
              Strategie marketing innovative per far crescere il tuo business in modo sostenibile
            </p>
            <div className={`${
              visibleItems[2] 
                ? "animate-scale-in" 
                : "opacity-0"
            }`}>
              <Button size="xl" className="bg-primary hover:bg-primary/90 text-white">
                Richiedi Consulenza
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <StandardIntroSection
        badge="CONSULENZA MARKETING"
        title="Strategie marketing che trasformano il tuo"
        highlightedText="business"
        description="Sviluppiamo strategie marketing innovative e personalizzate che accelerano la crescita del tuo business. Dal digital marketing all'automazione, creiamo soluzioni integrate che massimizzano il ROI e generano risultati misurabili."
        ctaText="Richiedi consulenza"
        ctaHref="/contact"
      />
      <StandardCustomersSection />
      <StandardQuoteSection
        mainQuote="Marketing strategico. Risultati concreti."
        highlightedQuote="Crescita sostenibile."
        description="Trasformiamo le tue idee in strategie marketing vincenti, utilizzando tecnologie all'avanguardia e metodologie comprovate per accelerare la crescita del tuo business."
        ctaText="Inizia la collaborazione"
        ctaHref="/contact"
      />

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                I Nostri Servizi di Marketing
              </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Soluzioni complete per ogni aspetto del tuo marketing digitale e tradizionale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Perché Scegliere Noi
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Esperienza comprovata e risultati misurabili nel marketing digitale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { number: "200+", label: "Progetti Completati", description: "Campagne marketing di successo" },
              { number: "95%", label: "Clienti Soddisfatti", description: "Che rinnovano la collaborazione" },
              { number: "300%", label: "ROI Medio", description: "Incremento del ritorno investimento" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-4">
                  {stat.number}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{stat.label}</h3>
                <p className="text-gray-300">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Il Nostro Approccio
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Metodologia strutturata per garantire risultati concreti e misurabili
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Analisi", description: "Studio del mercato e della concorrenza" },
              { step: "02", title: "Strategia", description: "Definizione obiettivi e piano d'azione" },
              { step: "03", title: "Implementazione", description: "Esecuzione delle campagne marketing" },
              { step: "04", title: "Ottimizzazione", description: "Monitoraggio e miglioramento continuo" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{phase.step}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{phase.title}</h3>
                <p className="text-slate-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto a Trasformare il Tuo Marketing?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contattaci per una consulenza personalizzata e scopri come aumentare le tue vendite
          </p>
          <Button size="xl" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
            Inizia Subito
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Cross-Sell Recommendations */}
      <CrossSellRecommendations
        currentService="consulenza-marketing"
        layout="horizontal"
        title="Completa la tua strategia di marketing"
        subtitle="Clienti che scelgono consulenza marketing spesso aggiungono questi servizi per risultati amplificati"
      />

      <AboutSection />
      <LeadMagnetSectionAnimated />
      
      {/* All Services Carousel */}
      <PremiumServicesCarouselOptimized />
      
      <MailerLiteContactSectionAnimated />
        <Footer />
      </main>
    </>
  );
};

export default ConsulenzaMarketing;