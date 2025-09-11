import { Button } from "@/components/ui/button";
import ConsistentHeading from "@/components/shared/ConsistentHeading";

const CTAImageSection = () => {
  return (
    <section className="py-40 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(https://res.cloudinary.com/dufcnrcfe/image/upload/v1757599906/Untitled_design_54_aefykb.png)` }}
      />
      
      {/* Enhanced Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/30 via-transparent to-[#55ACEE]/20 z-10" />
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <ConsistentHeading
            title="Trasforma il tuo business con"
            highlightedText="Sales On Demand"
            subtitle="Scopri come il nostro servizio Sales On Demand può rivoluzionare il tuo approccio alle vendite e accelerare la crescita del tuo business."
            theme="dark"
          />
          
          <div className="pt-4">
            <span className="text-2xl md:text-3xl font-bold text-white animate-swipe-in-left" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
              Sales On Demand
            </span>
          </div>
          
          <Button className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Inizia Subito
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTAImageSection;