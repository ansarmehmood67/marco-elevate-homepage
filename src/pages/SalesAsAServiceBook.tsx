import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookHeroSection from "@/components/book/BookHeroSection";
import BookIntroSection from "@/components/book/BookIntroSection";
import BookVideoSection from "@/components/book/BookVideoSection";
import BookCardsSection from "@/components/book/BookCardsSection";
import BookBenefitsSection from "@/components/book/BookBenefitsSection";
import MailerLiteContactSection from "@/components/MailerLiteContactSection";

const SalesAsAServiceBook = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <BookHeroSection />
      <BookIntroSection />
      <BookVideoSection />
      <BookCardsSection />
      <BookBenefitsSection />
      <MailerLiteContactSection />
      <Footer />
    </div>
  );
};

export default SalesAsAServiceBook;