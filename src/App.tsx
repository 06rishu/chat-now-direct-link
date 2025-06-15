
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LiveSupport from "./pages/LiveSupport";
import AgentLiveSupport from "./pages/AgentLiveSupport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/live-support" element={<LiveSupport />} />
          {/* Agent-specific live support routes */}
          <Route path="/live-support/agent-1" element={<AgentLiveSupport />} />
          <Route path="/live-support/agent-2" element={<AgentLiveSupport />} />
          <Route path="/live-support/agent-3" element={<AgentLiveSupport />} />
          <Route path="/live-support/agent-4" element={<AgentLiveSupport />} />
          <Route path="/live-support/agent-5" element={<AgentLiveSupport />} />
          <Route path="/live-support/agent-6" element={<AgentLiveSupport />} />
          <Route path="/live-support/agent-7" element={<AgentLiveSupport />} />
          <Route path="/live-support/agent-8" element={<AgentLiveSupport />} />
          <Route path="/live-support/agent-9" element={<AgentLiveSupport />} />
          <Route path="/live-support/agent-10" element={<AgentLiveSupport />} />
          {/* CATCH-ALL */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
