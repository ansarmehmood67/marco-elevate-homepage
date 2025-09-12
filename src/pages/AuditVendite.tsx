import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StandardIntroSection from "@/components/shared/StandardIntroSection";
import StandardCustomersSection from "@/components/shared/StandardCustomersSection";
import StandardQuoteSection from "@/components/shared/StandardQuoteSection";
import AboutSection from "@/components/AboutSection";
import LeadMagnetSectionAnimated from "@/components/LeadMagnetSectionAnimated";
import MailerLiteContactSectionAnimated from "@/components/MailerLiteContactSectionAnimated";
import CrossSellRecommendations from "@/components/CrossSellRecommendations";
import AllServicesCarousel from "@/components/shared/AllServicesCarousel";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Target, TrendingUp, Users, BarChart3 } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const AuditVendite = () => {
  const { ref, visibleItems } = useStaggeredAnimation(6, 200);

  const benefits = [
    {
      icon: Target,
      title: "Analisi Completa",
      description: "Revisione approfondita di tutti i processi di vendita esistenti"
    },
    {
      icon: TrendingUp,
      title: "Identificazione Opportunità",
      description: "Scopri le aree di miglioramento e crescita del tuo business"
    },
    {
      icon: BarChart3,
      title: "Report Dettagliato",
      description: "Ricevi un piano d'azione concreto per ottimizzare le vendite"
    },
    {
      icon: Users,
      title: "Team Optimization",
      description: "Migliora le performance del tuo team commerciale"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
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
              Audit <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Vendite</span>
            </h1>
            <p className={`text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed ${
              visibleItems[1] 
                ? "animate-fade-in-bottom" 
                : "opacity-0"
            }`}>
              Analizza e ottimizza il tuo processo di vendita per massimizzare i risultati
            </p>
            <div className={`${
              visibleItems[2] 
                ? "animate-scale-in" 
                : "opacity-0"
            }`}>
              <Button size="xl" className="bg-primary hover:bg-primary/90 text-white">
                Richiedi Audit Gratuito
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <StandardIntroSection
        badge="AUDIT VENDITE"
        title="Scopri il potenziale nascosto delle tue"
        highlightedText="vendite"
        description="Un'analisi professionale e dettagliata per identificare le inefficienze nei tuoi processi di vendita e rivelare opportunità di crescita concrete. Il nostro audit ti fornisce un piano d'azione immediato per ottimizzare le conversioni."
        ctaText="Richiedi audit gratuito"
        ctaHref="/contact"
      />
      <StandardCustomersSection />
      <StandardQuoteSection
        mainQuote="Processi ottimizzati. Vendite potenziate."
        highlightedQuote="Crescita accelerata."
        description="Identifichiamo le criticità nel tuo sales funnel e ti forniamo soluzioni concrete per trasformare ogni lead in un'opportunità di business."
        ctaText="Prenota audit gratuito"
        ctaHref="/contact"
      />

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Perché Scegliere il Nostro Audit
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Un'analisi professionale che identifica le inefficienze e rivela il potenziale nascosto del tuo processo di vendita
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Il Nostro Processo
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Un approccio sistematico per analizzare e migliorare ogni aspetto del tuo sales funnel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Analisi Iniziale", description: "Studio approfondito dei processi attuali e identificazione dei punti critici" },
              { step: "02", title: "Raccolta Dati", description: "Analisi delle metriche di performance e benchmarking con il mercato" },
              { step: "03", title: "Piano d'Azione", description: "Sviluppo di una strategia personalizzata per ottimizzare le vendite" }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 text-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{phase.title}</h3>
                  <p className="text-gray-300">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto a Ottimizzare le Tue Vendite?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Richiedi un audit gratuito e scopri come aumentare le tue conversioni
          </p>
          <Button size="xl" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
            Inizia Ora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Cross-Sell Recommendations */}
      <CrossSellRecommendations
        currentService="audit-vendite"
        layout="horizontal"
        title="Ottimizza la tua strategia di vendita"
        subtitle="Dopo l'audit, questi servizi massimizzano i risultati delle tue vendite"
      />

      <AboutSection />
      <LeadMagnetSectionAnimated />
      
      {/* All Services Carousel */}
      <AllServicesCarousel />
      
      <MailerLiteContactSectionAnimated />
      <Footer />
    </div>
  );
};

export default AuditVendite;