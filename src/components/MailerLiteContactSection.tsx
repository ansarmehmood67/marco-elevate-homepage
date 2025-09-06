import { ArrowRight, Phone, Clock, Shield } from "lucide-react";
import MailerLiteBox from "@/components/MailerLiteBox";

const MailerLiteContactSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-background via-slate-900 to-background">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/50"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="text-sm uppercase tracking-[0.3em] text-primary font-bold">
              CONTATTACI OGGI
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight">
              <span className="text-white">Pronto a far </span>
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                crescere il business?
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl leading-relaxed text-gray-300 font-light">
              Parla con Marco e scopri cosa può fare il suo team per portare la tua azienda al livello successivo.
            </p>

            {/* Trust Indicators */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 rounded-full bg-primary/20">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <span className="text-lg">Risposta entro 2 ore</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 rounded-full bg-primary/20">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="text-lg">Consulenza gratuita di 30 min</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 rounded-full bg-primary/20">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <span className="text-lg">Nessun impegno</span>
              </div>
            </div>
          </div>

          {/* Right Column - MailerLite Form */}
          <div className="relative">
            <MailerLiteBox />
          </div>
        </div>
      </div>

      {/* Custom CSS will be added to index.css for MailerLite form styling */}
    </section>
  );
};

export default MailerLiteContactSection;