import { Button } from "@/components/ui/button";
import { Award, Star, Trophy, Users } from "lucide-react";

const BookBenefitsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-gradient-to-br from-primary-glow/8 to-primary/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="text-sm uppercase tracking-[0.3em] text-primary font-bold">
              BESTSELLER AMAZON
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight">
              <span className="text-slate-900">Scopri come </span>
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                Sales as a Service
              </span>
              <span className="text-slate-900"> rivoluziona il tuo approccio alle vendite</span>
            </h2>
            
            <p className="text-xl lg:text-2xl leading-relaxed text-gray-600 font-light">
              Marco Ferrario, con oltre 25 anni di esperienza e 500+ aziende clienti, 
              condivide il suo metodo rivoluzionario per trasformare vendite e marketing 
              in un servizio scalabile e misurabile.
            </p>

            {/* Achievement Badges */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white shadow-lg border border-slate-200/60">
                <div className="p-2 rounded-full bg-primary/20">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900">#1</div>
                  <div className="text-sm text-slate-600">Bestseller Amazon</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white shadow-lg border border-slate-200/60">
                <div className="p-2 rounded-full bg-primary/20">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900">4.8/5</div>
                  <div className="text-sm text-slate-600">Valutazione media</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white shadow-lg border border-slate-200/60">
                <div className="p-2 rounded-full bg-primary/20">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900">500+</div>
                  <div className="text-sm text-slate-600">Aziende clienti</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white shadow-lg border border-slate-200/60">
                <div className="p-2 rounded-full bg-primary/20">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900">25+</div>
                  <div className="text-sm text-slate-600">Anni esperienza</div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="relative inline-block group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-glow rounded-full blur opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
                <Button
                  size="xl"
                  className="relative bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-white font-bold px-12 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.location.href = "#contact"}
                >
                  Scarica il libro gratuito
                </Button>
              </div>
              
              <div className="mt-4">
                <p className="text-sm text-slate-500">
                  Download immediato • Nessun costo nascosto • Contenuto di valore garantito
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Marco Image */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-primary-glow/15 to-primary/20 rounded-full blur-3xl group-hover:blur-[40px] opacity-70 group-hover:opacity-100 transition-all duration-1000"></div>
              
              <img 
                src="/lovable-uploads/a9f6f226-da2a-4d9d-b830-26333af3d8d9.png" 
                alt="Marco Ferrario - Autore Sales as a Service" 
                className="relative w-full max-w-md mx-auto h-auto transform group-hover:scale-105 transition-all duration-1000 drop-shadow-2xl"
              />
              
              {/* Quote overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/50">
                <p className="text-slate-700 font-medium italic text-sm leading-relaxed">
                  "Il vero segreto non è vendere di più, ma vendere meglio. 
                  Sales as a Service è la chiave per trasformare ogni contatto in un'opportunità reale."
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-900">Marco Ferrario</div>
                    <div className="text-xs text-slate-600">Autore & CEO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookBenefitsSection;