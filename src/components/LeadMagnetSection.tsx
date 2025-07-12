import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Download, Star } from "lucide-react";

const LeadMagnetSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#55ACEE]/10 rounded-full border border-[#55ACEE]/20 mb-6">
              <BookOpen className="w-4 h-4 text-[#55ACEE]" />
              <span className="text-[#55ACEE] font-medium">Risorsa Gratuita</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-[#111827] mb-6 leading-tight">
              Scarica la Guida Completa al{" "}
              <span className="text-[#55ACEE]">
                Sales Outsourcing
              </span>
            </h2>
            
            <p className="text-xl text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
              Strategie, metodologie e casi studio per trasformare le tue vendite. 
              Un framework testato su oltre 500 aziende italiane.
            </p>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              "Framework completo di vendita",
              "Casi studio reali e risultati",
              "Template e checklist operative"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center justify-center gap-3 p-4 bg-[#55ACEE]/5 rounded-2xl border border-[#55ACEE]/10">
                <Star className="w-5 h-5 text-[#55ACEE]" />
                <span className="text-[#111827] font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Download Form */}
          <div className="bg-[#55ACEE]/5 rounded-3xl p-8 border border-[#55ACEE]/10 shadow-xl">
            <div className="max-w-md mx-auto space-y-6">
              <h3 className="text-2xl font-bold text-[#111827] mb-6">
                Ottieni l'accesso immediato
              </h3>
              
              <div className="space-y-4">
                <Input 
                  placeholder="Il tuo nome"
                  className="bg-white border-[#55ACEE]/20 text-[#111827] placeholder:text-[#4B5563] focus:border-[#55ACEE] focus:ring-[#55ACEE]"
                />
                <Input 
                  type="email"
                  placeholder="La tua email aziendale"
                  className="bg-white border-[#55ACEE]/20 text-[#111827] placeholder:text-[#4B5563] focus:border-[#55ACEE] focus:ring-[#55ACEE]"
                />
                <Input 
                  placeholder="Nome dell'azienda"
                  className="bg-white border-[#55ACEE]/20 text-[#111827] placeholder:text-[#4B5563] focus:border-[#55ACEE] focus:ring-[#55ACEE]"
                />
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Scarica la Guida Gratuita
              </Button>
              
              <p className="text-xs text-[#4B5563] leading-relaxed">
                I tuoi dati sono al sicuro. Niente spam, solo contenuti di valore.
              </p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex items-center justify-center gap-8 text-[#4B5563]">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#111827]">5000+</div>
              <div className="text-sm">Download</div>
            </div>
            <div className="w-px h-8 bg-[#55ACEE]/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-[#111827]">4.9/5</div>
              <div className="text-sm">Rating</div>
            </div>
            <div className="w-px h-8 bg-[#55ACEE]/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-[#111827]">98%</div>
              <div className="text-sm">Soddisfazione</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;