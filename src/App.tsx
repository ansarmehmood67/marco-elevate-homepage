import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from "./components/ScrollToTop";
import { usePerformanceOptimization } from "./hooks/usePerformanceOptimization";
import { useCriticalResourceLoader } from "./components/CriticalResourceLoader";
import { lazy, Suspense } from 'react';
import Index from "./pages/Index";
import LazyRoute from "./components/LazyRoute";

// Lazy load all non-homepage routes for better performance
const SalesOnDemand = lazy(() => import("./pages/SalesOnDemand"));
const StrategicConsulting = lazy(() => import("./pages/StrategicConsulting"));
const AI = lazy(() => import("./pages/AI"));
const OutsourcingSalesforce = lazy(() => import("./pages/OutsourcingSalesforce"));
const TelemarketingTeleselling = lazy(() => import("./pages/TelemarketingTeleselling"));
const ContactCenterInbound = lazy(() => import("./pages/ContactCenterInbound"));
const OutsourcingMarketing = lazy(() => import("./pages/OutsourcingMarketing"));
const MonetizzaYoutube = lazy(() => import("./pages/MonetizzaYoutube"));
const InstantAvatar = lazy(() => import("./pages/InstantAvatar"));
const ChatbotAI = lazy(() => import("./pages/ChatbotAI"));
const AutomazioneAI = lazy(() => import("./pages/AutomazioneAI"));
const WebAppDevelopment = lazy(() => import("./pages/WebAppDevelopment"));
const SaasPlatforms = lazy(() => import("./pages/SaasPlatforms"));
const SmartAITools = lazy(() => import("./pages/SmartAITools"));
const AIIntegration = lazy(() => import("./pages/AIIntegration"));
const AuditVendite = lazy(() => import("./pages/AuditVendite"));
const ConsulenzaMarketing = lazy(() => import("./pages/ConsulenzaMarketing"));
const QuizResult = lazy(() => import("./pages/QuizResult"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const SalesServices = lazy(() => import("./pages/SalesServices"));
const MarketingServices = lazy(() => import("./pages/MarketingServices"));
const ConsultationServices = lazy(() => import("./pages/ConsultationServices"));
const SalesAsAServiceBook = lazy(() => import("./pages/SalesAsAServiceBook"));
const SalesServiceDetail = lazy(() => import("./pages/service-products/SalesServiceDetail"));
const MarketingServiceDetail = lazy(() => import("./pages/service-products/MarketingServiceDetail"));
const ConsultationServiceDetail = lazy(() => import("./pages/service-products/ConsultationServiceDetail"));

// Enhanced loading component for better UX
const LoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-[#0A2E4F] via-[#1E4A6B] to-[#2E8BC0] flex items-center justify-center">
    <div className="text-center text-white">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
      <p className="text-lg">Loading page...</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => {
  // Initialize performance optimizations
  usePerformanceOptimization();
  useCriticalResourceLoader();
  
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sales-on-demand" element={<LazyRoute><SalesOnDemand /></LazyRoute>} />
          <Route path="/consulenza-strategica" element={<LazyRoute><StrategicConsulting /></LazyRoute>} />
          <Route path="/consulenza-strategica/sales-services" element={<LazyRoute><SalesServices /></LazyRoute>} />
          <Route path="/consulenza-strategica/marketing-services" element={<LazyRoute><MarketingServices /></LazyRoute>} />
          <Route path="/consulenza-strategica/consultation-services" element={<LazyRoute><ConsultationServices /></LazyRoute>} />
          <Route path="/consulenza-strategica/consultation-services/:slug" element={<LazyRoute><ConsultationServiceDetail /></LazyRoute>} />
          <Route path="/consulenza-strategica/sales-services/:slug" element={<LazyRoute><SalesServiceDetail /></LazyRoute>} />
          <Route path="/consulenza-strategica/marketing-services/:slug" element={<LazyRoute><MarketingServiceDetail /></LazyRoute>} />
          <Route path="/ai" element={<LazyRoute><AI /></LazyRoute>} />
          <Route path="/outsourcing-salesforce" element={<LazyRoute><OutsourcingSalesforce /></LazyRoute>} />
          <Route path="/telemarketing-teleselling" element={<LazyRoute><TelemarketingTeleselling /></LazyRoute>} />
          <Route path="/contact-center-inbound" element={<LazyRoute><ContactCenterInbound /></LazyRoute>} />
          <Route path="/outsourcing-marketing" element={<LazyRoute><OutsourcingMarketing /></LazyRoute>} />
          <Route path="/monetizza-youtube" element={<LazyRoute><MonetizzaYoutube /></LazyRoute>} />
          <Route path="/instant-avatar" element={<LazyRoute><InstantAvatar /></LazyRoute>} />
          <Route path="/chatbot-ai" element={<LazyRoute><ChatbotAI /></LazyRoute>} />
          <Route path="/automazione-ai" element={<LazyRoute><AutomazioneAI /></LazyRoute>} />
          <Route path="/web-app-development" element={<LazyRoute><WebAppDevelopment /></LazyRoute>} />
          <Route path="/saas-platforms" element={<LazyRoute><SaasPlatforms /></LazyRoute>} />
          <Route path="/smart-ai-tools" element={<LazyRoute><SmartAITools /></LazyRoute>} />
          <Route path="/ai-integration" element={<LazyRoute><AIIntegration /></LazyRoute>} />
          <Route path="/audit-vendite" element={<LazyRoute><AuditVendite /></LazyRoute>} />
          <Route path="/consulenza-marketing" element={<LazyRoute><ConsulenzaMarketing /></LazyRoute>} />
          <Route path="/quiz-result" element={<LazyRoute><QuizResult /></LazyRoute>} />
          <Route path="/contact" element={<LazyRoute><Contact /></LazyRoute>} />
          <Route path="/about" element={<LazyRoute><About /></LazyRoute>} />
          <Route path="/sales-as-a-service-book" element={<LazyRoute><SalesAsAServiceBook /></LazyRoute>} />
          <Route path="/privacy-policy" element={<LazyRoute><PrivacyPolicy /></LazyRoute>} />
          <Route path="/termini-di-servizio" element={<LazyRoute><TermsOfService /></LazyRoute>} />
          <Route path="/cookie-policy" element={<LazyRoute><CookiePolicy /></LazyRoute>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<LazyRoute><NotFound /></LazyRoute>} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
