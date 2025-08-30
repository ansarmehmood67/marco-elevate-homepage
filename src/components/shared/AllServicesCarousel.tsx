import PremiumServicesCarouselOptimized from "@/components/PremiumServicesCarouselOptimized";

const AllServicesCarousel = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#2E8BC0]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#87CEEB]/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold mb-6 bg-[#2E8BC0]/10 text-[#87CEEB] border border-[#2E8BC0]/20 backdrop-blur-sm">
            <span>Esplora tutti i nostri servizi</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Scopri l'intera gamma delle nostre{" "}
            <span className="text-[#87CEEB]">soluzioni</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Esplora tutte le soluzioni che Marco Ferrario può offrirti per far crescere il tuo business
          </p>
        </div>
      </div>
      
      {/* Premium Services Carousel */}
      <PremiumServicesCarouselOptimized />
    </section>
  );
};

export default AllServicesCarousel;