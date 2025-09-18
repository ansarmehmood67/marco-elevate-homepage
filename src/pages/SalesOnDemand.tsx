import SalesOnDemandPage from "@/components/salesondemand/SalesOnDemandPage";
import SEOSchema from "@/components/SEOSchema";

const SalesOnDemand = () => {
  return (
    <>
      <SEOSchema 
        type="webpage" 
        pageTitle="Sales On Demand | Marco Ferrario Business Consulting" 
        pageDescription="Sales On Demand: outsourcing vendite e marketing end-to-end. Trasforma lead in clienti con team dedicato e strategia integrata."
        pageUrl="https://marcoferrario.com/sales-on-demand"
      />
      <SalesOnDemandPage />
    </>
  );
};

export default SalesOnDemand;