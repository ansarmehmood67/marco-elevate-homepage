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

// Loading component for Suspense fallbacks
const LoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-[#0A2E4F] via-[#1E4A6B] to-[#2E8BC0] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
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
          <Route path="/sales-on-demand" element={<Suspense fallback={<LoadingSpinner />}><SalesOnDemand /></Suspense>} />
          <Route path="/consulenza-strategica" element={<Suspense fallback={<LoadingSpinner />}><StrategicConsulting /></Suspense>} />
          <Route path="/consulenza-strategica/sales-services" element={<Suspense fallback={<LoadingSpinner />}><SalesServices /></Suspense>} />
          <Route path="/consulenza-strategica/marketing-services" element={<Suspense fallback={<LoadingSpinner />}><MarketingServices /></Suspense>} />
          <Route path="/consulenza-strategica/consultation-services" element={<Suspense fallback={<LoadingSpinner />}><ConsultationServices /></Suspense>} />
          <Route path="/consulenza-strategica/consultation-services/:slug" element={<Suspense fallback={<LoadingSpinner />}><ConsultationServiceDetail /></Suspense>} />
          <Route path="/consulenza-strategica/sales-services/:slug" element={<Suspense fallback={<LoadingSpinner />}><SalesServiceDetail /></Suspense>} />
          <Route path="/consulenza-strategica/marketing-services/:slug" element={<Suspense fallback={<LoadingSpinner />}><MarketingServiceDetail /></Suspense>} />
          <Route path="/ai" element={<Suspense fallback={<LoadingSpinner />}><AI /></Suspense>} />
          <Route path="/outsourcing-salesforce" element={<Suspense fallback={<LoadingSpinner />}><OutsourcingSalesforce /></Suspense>} />
          <Route path="/telemarketing-teleselling" element={<Suspense fallback={<LoadingSpinner />}><TelemarketingTeleselling /></Suspense>} />
          <Route path="/contact-center-inbound" element={<Suspense fallback={<LoadingSpinner />}><ContactCenterInbound /></Suspense>} />
          <Route path="/outsourcing-marketing" element={<Suspense fallback={<LoadingSpinner />}><OutsourcingMarketing /></Suspense>} />
          <Route path="/monetizza-youtube" element={<Suspense fallback={<LoadingSpinner />}><MonetizzaYoutube /></Suspense>} />
          <Route path="/instant-avatar" element={<Suspense fallback={<LoadingSpinner />}><InstantAvatar /></Suspense>} />
          <Route path="/chatbot-ai" element={<Suspense fallback={<LoadingSpinner />}><ChatbotAI /></Suspense>} />
          <Route path="/automazione-ai" element={<Suspense fallback={<LoadingSpinner />}><AutomazioneAI /></Suspense>} />
          <Route path="/web-app-development" element={<Suspense fallback={<LoadingSpinner />}><WebAppDevelopment /></Suspense>} />
          <Route path="/saas-platforms" element={<Suspense fallback={<LoadingSpinner />}><SaasPlatforms /></Suspense>} />
          <Route path="/smart-ai-tools" element={<Suspense fallback={<LoadingSpinner />}><SmartAITools /></Suspense>} />
          <Route path="/ai-integration" element={<Suspense fallback={<LoadingSpinner />}><AIIntegration /></Suspense>} />
          <Route path="/audit-vendite" element={<Suspense fallback={<LoadingSpinner />}><AuditVendite /></Suspense>} />
          <Route path="/consulenza-marketing" element={<Suspense fallback={<LoadingSpinner />}><ConsulenzaMarketing /></Suspense>} />
          <Route path="/quiz-result" element={<Suspense fallback={<LoadingSpinner />}><QuizResult /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<LoadingSpinner />}><Contact /></Suspense>} />
          <Route path="/about" element={<Suspense fallback={<LoadingSpinner />}><About /></Suspense>} />
          <Route path="/sales-as-a-service-book" element={<Suspense fallback={<LoadingSpinner />}><SalesAsAServiceBook /></Suspense>} />
          <Route path="/privacy-policy" element={<Suspense fallback={<LoadingSpinner />}><PrivacyPolicy /></Suspense>} />
          <Route path="/termini-di-servizio" element={<Suspense fallback={<LoadingSpinner />}><TermsOfService /></Suspense>} />
          <Route path="/cookie-policy" element={<Suspense fallback={<LoadingSpinner />}><CookiePolicy /></Suspense>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<Suspense fallback={<LoadingSpinner />}><NotFound /></Suspense>} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
