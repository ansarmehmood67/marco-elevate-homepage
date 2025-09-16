import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import SalesOnDemand from "./pages/SalesOnDemand";
import StrategicConsulting from "./pages/StrategicConsulting";
import AI from "./pages/AI";
import OutsourcingSalesforce from "./pages/OutsourcingSalesforce";
import TelemarketingTeleselling from "./pages/TelemarketingTeleselling";
import ContactCenterInbound from "./pages/ContactCenterInbound";
import OutsourcingMarketing from "./pages/OutsourcingMarketing";
import MonetizzaYoutube from "./pages/MonetizzaYoutube";
import InstantAvatar from "./pages/InstantAvatar";
import ChatbotAI from "./pages/ChatbotAI";
import AutomazioneAI from "./pages/AutomazioneAI";
import WebAppDevelopment from "./pages/WebAppDevelopment";
import SaasPlatforms from "./pages/SaasPlatforms";
import SmartAITools from "./pages/SmartAITools";
import AIIntegration from "./pages/AIIntegration";
import AuditVendite from "./pages/AuditVendite";
import ConsulenzaMarketing from "./pages/ConsulenzaMarketing";
import QuizResult from "./pages/QuizResult";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import SalesServices from "./pages/SalesServices";
import MarketingServices from "./pages/MarketingServices";
import ConsultationServices from "./pages/ConsultationServices";
import SalesAsAServiceBook from "./pages/SalesAsAServiceBook";
import ConsultationServiceDetail from "./pages/service-products/ConsultationServiceDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sales-on-demand" element={<SalesOnDemand />} />
          <Route path="/consulenza-strategica" element={<StrategicConsulting />} />
          <Route path="/consulenza-strategica/sales-services" element={<SalesServices />} />
          <Route path="/consulenza-strategica/marketing-services" element={<MarketingServices />} />
          <Route path="/consulenza-strategica/consultation-services" element={<ConsultationServices />} />
          <Route path="/consulenza-strategica/consultation-services/:slug" element={<ConsultationServiceDetail />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/outsourcing-salesforce" element={<OutsourcingSalesforce />} />
          <Route path="/telemarketing-teleselling" element={<TelemarketingTeleselling />} />
          <Route path="/contact-center-inbound" element={<ContactCenterInbound />} />
          <Route path="/outsourcing-marketing" element={<OutsourcingMarketing />} />
          <Route path="/monetizza-youtube" element={<MonetizzaYoutube />} />
          <Route path="/instant-avatar" element={<InstantAvatar />} />
          <Route path="/chatbot-ai" element={<ChatbotAI />} />
          <Route path="/automazione-ai" element={<AutomazioneAI />} />
          <Route path="/web-app-development" element={<WebAppDevelopment />} />
          <Route path="/saas-platforms" element={<SaasPlatforms />} />
          <Route path="/smart-ai-tools" element={<SmartAITools />} />
          <Route path="/ai-integration" element={<AIIntegration />} />
          <Route path="/audit-vendite" element={<AuditVendite />} />
          <Route path="/consulenza-marketing" element={<ConsulenzaMarketing />} />
          <Route path="/quiz-result" element={<QuizResult />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/sales-as-a-service-book" element={<SalesAsAServiceBook />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/termini-di-servizio" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
