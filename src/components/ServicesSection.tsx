import ServiceCard from "./ServiceCard";
import salesImage from "@/assets/sales-on-demand.jpg";
import consultingImage from "@/assets/strategic-consulting.jpg";
import aiImage from "@/assets/instant-avatar.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Esternalizza il reparto commerciale. Concretamente. Subito.",
      description: "Ti forniamo una forza vendita pronta, competente, formata e guidata da un Direttore Commerciale con 25+ anni di esperienza.",
      ctaText: "Scopri Sales On Demand",
      image: salesImage,
      backgroundClass: "bg-gradient-service-1"
    },
    {
      title: "Costruisci una strategia di vendita che funziona davvero.",
      description: "Analizziamo funnel, CRM, processo di vendita e KPI. Costruiamo insieme un sistema replicabile e orientato ai risultati.",
      ctaText: "Scopri la Consulenza",
      image: consultingImage,
      backgroundClass: "bg-gradient-service-2"
    },
    {
      title: "Automazioni e AI per vendere senza sforzi.",
      description: "Creiamo chatbot e assistenti virtuali personalizzati per automatizzare lead generation, onboarding e supporto.",
      ctaText: "Esplora Instant Avatar",
      image: aiImage,
      backgroundClass: "bg-gradient-service-3"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="space-y-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              ctaText={service.ctaText}
              image={service.image}
              backgroundClass={service.backgroundClass}
              onCTAClick={() => {
                console.log(`Clicked: ${service.ctaText}`);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;