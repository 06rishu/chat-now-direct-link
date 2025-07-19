import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LiveSupport from "./pages/LiveSupport";
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
import WaMe91 from "./pages/wa-me-91";
import VideoCallPage from "./pages/video-call";
import ConnectingWhatsApp from "./pages/ConnectingWhatsApp";

// Video Call Flow Pages
import WelcomePage from "./pages/video-call/WelcomePage";
import GenderSelection from "./pages/video-call/GenderSelection";
import CategorySelection from "./pages/video-call/CategorySelection";
import AgeSelection from "./pages/video-call/AgeSelection";
import LanguageSelection from "./pages/video-call/LanguageSelection";
import NameInput from "./pages/video-call/NameInput";
import MobileInput from "./pages/video-call/MobileInput";
import AppSelection from "./pages/video-call/AppSelection";
import ConnectingPage from "./pages/video-call/ConnectingPage";

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
          {/* Individual agent routes */}
          <Route path="/live-support/agent-1" element={<Agent1 />} />
          <Route path="/live-support/agent-2" element={<Agent2 />} />
          <Route path="/live-support/agent-3" element={<Agent3 />} />
          <Route path="/live-support/agent-4" element={<Agent4 />} />
          <Route path="/live-support/agent-5" element={<Agent5 />} />
          <Route path="/live-support/agent-6" element={<Agent6 />} />
          <Route path="/live-support/agent-7" element={<Agent7 />} />
          <Route path="/live-support/agent-8" element={<Agent8 />} />
          <Route path="/live-support/agent-9" element={<Agent9 />} />
          <Route path="/live-support/agent-10" element={<Agent10 />} />
          {/* wa-me-91 page */}
          <Route path="/wa-me-91" element={<WaMe91 />} />
          {/* connecting-whatsapp page */}
          <Route path="/connecting-whatsapp" element={<ConnectingWhatsApp />} />
          {/* video-call pages */}
          <Route path="/video-call" element={<VideoCallPage />} />
          <Route path="/video-call/welcome" element={<WelcomePage />} />
          <Route path="/video-call/gender-selection" element={<GenderSelection />} />
          <Route path="/video-call/category-selection" element={<CategorySelection />} />
          <Route path="/video-call/age-selection" element={<AgeSelection />} />
          <Route path="/video-call/language-selection" element={<LanguageSelection />} />
          <Route path="/video-call/name-input" element={<NameInput />} />
          <Route path="/video-call/mobile-input" element={<MobileInput />} />
          <Route path="/video-call/app-selection" element={<AppSelection />} />
          <Route path="/video-call/connecting" element={<ConnectingPage />} />
          {/* CATCH-ALL */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
