import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactHeroSection from "@/components/contact/ContactHeroSection";
import ContactMethodsSection from "@/components/contact/ContactMethodsSection";
import ContactFormSection from "@/components/contact/ContactFormSection";
import TeamAvailabilitySection from "@/components/contact/TeamAvailabilitySection";
import ContactFAQSection from "@/components/contact/ContactFAQSection";
import LocationSection from "@/components/contact/LocationSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ContactHeroSection />
      <ContactMethodsSection />
      <ContactFormSection />
      <TeamAvailabilitySection />
      <ContactFAQSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Contact;