import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEO/SEOHead";
import { seoPages } from "@/utils/seoData";
import BookHeroSection from "@/components/book/BookHeroSection";
import BookIntroSection from "@/components/book/BookIntroSection";
import BookVideoSection from "@/components/book/BookVideoSection";
import BookCardsSection from "@/components/book/BookCardsSection";
import BookBenefitsSection from "@/components/book/BookBenefitsSection";
import BookAmazonBestsellerSection from "@/components/book/BookAmazonBestsellerSection";
import LazyContactSection from "@/components/LazyContactSection";

const SalesAsAServiceBook = () => {
  return (
    <>
      <SEOHead data={seoPages.salesAsAServiceBook} />
      <div className="min-h-screen bg-white">
      <Navigation />
      <BookHeroSection />
      <BookIntroSection />
      <BookVideoSection />
      <BookCardsSection />
      <BookBenefitsSection />
      <BookAmazonBestsellerSection />
        <LazyContactSection />
        <Footer />
      </div>
    </>
  );
};

export default SalesAsAServiceBook;