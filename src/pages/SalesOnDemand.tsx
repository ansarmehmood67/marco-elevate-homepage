
import SalesOnDemandPage from "@/components/salesondemand/SalesOnDemandPage";
import SEOHead from "@/components/SEO/SEOHead";
import { seoPages } from "@/utils/seoData";

const SalesOnDemand = () => {
  return (
    <>
      <SEOHead data={seoPages.salesOnDemand} />
      <SalesOnDemandPage />
    </>
  );
};

export default SalesOnDemand;
