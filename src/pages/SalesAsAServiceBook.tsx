import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookHeroSection from "@/components/book/BookHeroSection";
import BookIntroSection from "@/components/book/BookIntroSection";
import BookVideoSection from "@/components/book/BookVideoSection";
import BookCardsSection from "@/components/book/BookCardsSection";
import BookBenefitsSection from "@/components/book/BookBenefitsSection";
import BookAmazonBestsellerSection from "@/components/book/BookAmazonBestsellerSection";
import MailerLiteContactSectionAnimated from "@/components/MailerLiteContactSectionAnimated";

const SalesAsAServiceBook = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <BookHeroSection />
      <BookIntroSection />
      <BookVideoSection />
      <BookCardsSection />
      <BookBenefitsSection />
      <BookAmazonBestsellerSection />
      <MailerLiteContactSectionAnimated />
      <Footer />
    </div>
  );
};

export default SalesAsAServiceBook;