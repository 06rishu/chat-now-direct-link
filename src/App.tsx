
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WaMe91 from "./pages/wa-me-91";
import ConnectingWhatsApp from "./pages/ConnectingWhatsApp";
import LiveSupport from "./pages/LiveSupport";
import VideoCall from "./pages/video-call";
import NotFound from "./pages/NotFound";
import Agent1 from "./pages/agents/Agent1";
import Agent2 from "./pages/agents/Agent2";
import Agent3 from "./pages/agents/Agent3";
import Agent4 from "./pages/agents/Agent4";
import Agent5 from "./pages/agents/Agent5";
import Agent6 from "./pages/agents/Agent6";
import Agent7 from "./pages/agents/Agent7";
import Agent8 from "./pages/agents/Agent8";
import Agent9 from "./pages/agents/Agent9";
import Agent10 from "./pages/agents/Agent10";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/wa-me-91" element={<WaMe91 />} />
          <Route path="/connecting-whatsapp" element={<ConnectingWhatsApp />} />
          <Route path="/live-support" element={<LiveSupport />} />
          <Route path="/video-call" element={<VideoCall />} />
          <Route path="/agent-1" element={<Agent1 />} />
          <Route path="/agent-2" element={<Agent2 />} />
          <Route path="/agent-3" element={<Agent3 />} />
          <Route path="/agent-4" element={<Agent4 />} />
          <Route path="/agent-5" element={<Agent5 />} />
          <Route path="/agent-6" element={<Agent6 />} />
          <Route path="/agent-7" element={<Agent7 />} />
          <Route path="/agent-8" element={<Agent8 />} />
          <Route path="/agent-9" element={<Agent9 />} />
          <Route path="/agent-10" element={<Agent10 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
