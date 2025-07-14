import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookPromoSection = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary-glow/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 bg-amber-100 text-amber-700 border border-amber-200 transition-all duration-300 hover:scale-105 shadow-lg">
            <Star className="w-6 h-6 mr-3 animate-pulse" />
            Biblioteca di Conoscenze Esclusive
          </div>
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-slate-900 mb-8">
            Vuoi andare{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              più a fondo?
            </span>
          </h2>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div className="space-y-8">
              <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 mb-8 max-w-3xl">
                Scarica la guida completa di Marco Ferrario{' '}
                <span className="font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  "Sales as a Service"
                </span>{' '}
                per padroneggiare l'arte di creare processi di vendita efficaci e ripetibili.
              </p>
              
              {/* Book features */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Cosa C'è Dentro:
                </h3>
                {[
                  { title: 'Framework Vendite Completo', desc: 'Metodologia passo-passo per costruire sistemi di vendita scalabili' },
                  { title: 'Casi di Studio Reali', desc: 'Analisi dettagliata di trasformazioni di successo' },
                  { title: 'Toolkit di Implementazione', desc: 'Template, checklist e risorse per uso immediato' },
                  { title: 'Calcoli ROI', desc: 'Modelli finanziari per prevedere e misurare il successo' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-slate-900">
                        {feature.title}
                      </h4>
                      <p className="text-gray-700">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="group px-12 py-6 text-xl rounded-2xl font-bold transition-all duration-500 hover:scale-105 bg-primary hover:bg-primary/90 text-white shadow-2xl hover:shadow-3xl relative overflow-hidden">
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Scarica la Tua Copia Gratuita</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
            
            {/* Book Display Side */}
            <div className="relative">
              {/* 3D Book Display */}
              <div className="relative mx-auto" style={{ width: '320px', height: '480px' }}>
                {/* Book cover */}
                <div className="relative w-80 h-96 mx-auto rounded-2xl shadow-2xl bg-gradient-to-br from-slate-200 via-white to-gray-100 group hover:scale-105 transition-all duration-500 overflow-hidden border-4 border-primary/20">
                  
                  {/* Book content mockup */}
                  <div className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="text-lg font-bold mb-4 text-primary">
                        MARCO FERRARIO
                      </div>
                      <h3 className="text-3xl font-black mb-6 text-slate-900">
                        Sales as a<br />Service
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        The Ultimate Guide to Building Scalable Sales Systems That Drive Consistent Growth
                      </p>
                    </div>
                    
                    <div className="flex justify-center">
                      <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <Star className="w-10 h-10 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Shiny effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Book spine effect */}
                <div className="absolute right-0 top-4 w-6 h-80 bg-gradient-to-b from-gray-300 to-gray-500 rounded-r-lg shadow-lg" />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 px-4 py-2 rounded-2xl text-lg font-bold bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-2xl transform rotate-12 animate-pulse">
                FREE! 📚
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-primary-glow/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookPromoSection;