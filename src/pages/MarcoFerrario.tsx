import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Youtube, BookOpen, Award, Users, TrendingUp } from "lucide-react";

const MarcoFerrario = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
                <Award className="w-4 h-4 mr-2" />
                Esperto di Vendite e Comunicazione
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
                <span className="text-slate-900">MARCO</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  FERRARIO
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Direttore vendite esperto, attivo dal 1996, con una carriera dedicata allo sviluppo 
                di strategie di vendita innovative e scalabili per oltre 500 aziende italiane.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  <Youtube className="w-5 h-5 mr-2" />
                  Canale YouTube
                </Button>
                <Button variant="outline">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Scarica il Libro
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/a9f6f226-da2a-4d9d-b830-26333af3d8d9.png"
                alt="Marco Ferrario"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <div className="text-4xl font-bold text-slate-900 mb-2">500+</div>
              <div className="text-slate-600">Aziende Clienti</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
              <div className="text-4xl font-bold text-slate-900 mb-2">25+</div>
              <div className="text-slate-600">Anni Esperienza</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
              <div className="text-4xl font-bold text-slate-900 mb-2">95%</div>
              <div className="text-slate-600">Tasso di Successo</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-slate-900">
              La Mia <span className="text-primary">Esperienza</span>
            </h2>
            
            <div className="space-y-8">
              <p className="text-lg text-slate-600 leading-relaxed">
                Ho oltre 25 anni di esperienza in aziende multinazionali nei settori dell'informazione 
                e della finanza, specializzato nel prospecting avanzato e nello sviluppo commerciale.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                La mia metodologia si basa su processi strutturati, automazione intelligente e 
                un approccio data-driven che ha permesso a centinaia di aziende di scalare 
                i propri ricavi in modo sostenibile.
              </p>
              
              <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-2xl font-bold text-primary mb-4">Framework Sales on Demand</h3>
                <p className="text-slate-700 leading-relaxed">
                  Il metodo che ho sviluppato combina strategia, esecuzione e ottimizzazione 
                  continua per creare un sistema di vendita replicabile e scalabile, 
                  testato su oltre 500 aziende italiane.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default MarcoFerrario;