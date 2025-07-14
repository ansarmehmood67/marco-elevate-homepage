
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section 
      className="py-20 px-6 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10 text-white">
        <h2 className="text-5xl lg:text-6xl font-bold mb-8">
          Prenota una consulenza gratuita
        </h2>
        <p className="text-2xl mb-12 opacity-90">
          Lascia che ti mostriamo come ottimizzare le risorse e aumentare il tuo fatturato.
        </p>
        
        <div className={`max-w-2xl mx-auto p-8 rounded-2xl backdrop-blur-sm ${
          isDark ? 'bg-black/30' : 'bg-white/20'
        } border border-white/20`}>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Nome"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Azienda"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <input
                type="tel"
                placeholder="Telefono"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <Button className="w-full py-4 text-lg font-semibold bg-white text-black hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-105">
              Prenota Ora
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
