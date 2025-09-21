import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEO/SEOHead";

const Blog = () => {
  return (
    <>
      <SEOHead data={{
        title: "Blog - Sales on Demand | Insights su Vendite e Marketing",
        description: "Scopri strategie avanzate di vendita, marketing e automazione AI nel nostro blog. Consigli pratici per far crescere il tuo business.",
        canonical: "/blog"
      }} />
      
      <main className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary-glow to-secondary pt-32 pb-20 overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Blog & Insights
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Strategie avanzate di vendita, marketing e automazione AI per far crescere il tuo business
            </p>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Contenuti in Arrivo
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Stiamo preparando contenuti esclusivi su strategie di vendita, marketing digitale e automazione AI. 
                Iscriviti alla newsletter per essere il primo a ricevere i nostri insights.
              </p>
              
              <div className="bg-card rounded-2xl p-8 shadow-lg mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Cosa troverai presto:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Strategie di vendita B2B avanzate</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Case study di successo dei nostri clienti</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Automazioni AI per sales e marketing</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Outsourcing commerciale: best practices</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Trend del settore e previsioni future</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Guide pratiche step-by-step</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="font-semibold">
                  <Link to="/contact">Contattaci per un Audit</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="font-semibold">
                  <Link to="/">Torna alla Homepage</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Blog;