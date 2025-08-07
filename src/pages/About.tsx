import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import CompanyStorySection from "@/components/about/CompanyStorySection";
import TeamSection from "@/components/about/TeamSection";
import ValuesMissionSection from "@/components/about/ValuesMissionSection";
import StatisticsSection from "@/components/about/StatisticsSection";
import MethodologySection from "@/components/about/MethodologySection";
import CertificationsSection from "@/components/about/CertificationsSection";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <AboutHeroSection />
      <CompanyStorySection />
      <TeamSection />
      <ValuesMissionSection />
      <StatisticsSection />
      <MethodologySection />
      <CertificationsSection />
      <Footer />
    </div>
  );
};

export default About;