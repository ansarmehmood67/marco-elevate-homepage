import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sales-on-demand" element={<SalesOnDemand />} />
          <Route path="/consulenza-strategica" element={<StrategicConsulting />} />
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
