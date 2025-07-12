import { Button } from "@/components/ui/button";

const CTAImageSection = () => {
  return (
    <section 
      className="py-20 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
      }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] leading-tight">
            Trasforma il tuo business con soluzioni{" "}
            <span className="text-[#55ACEE]">su misura</span>
          </h2>
          
          <p className="text-xl text-[#4B5563] leading-relaxed">
            Scopri come le nostre metodologie innovative possono rivoluzionare 
            il tuo approccio alle vendite e al marketing.
          </p>
          
          <Button className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Richiedi una demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTAImageSection;