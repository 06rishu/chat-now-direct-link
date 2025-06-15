
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import VideoCallCard from "@/components/VideoCallCard";

// Define only agent 1 and agent 2 for navigation
const agents = [
  {
    name: "Rohan",
    profileImage:
      "https://randomuser.me/api/portraits/men/75.jpg",
    stats: {
      activeSessions: 1911,
      satisfactionRate: "98.5%",
      responseTime: "< 1 min",
      rating: 4.8,
      reviews: 987,
    },
  },
  {
    name: "Priya",
    profileImage:
      "https://randomuser.me/api/portraits/women/80.jpg",
    stats: {
      activeSessions: 1723,
      satisfactionRate: "99.8%",
      responseTime: "35 seconds",
      rating: 5.0,
      reviews: 1475,
    },
  },
];

// Header & Footer (same as main page)
const Header = () => (
  <header className="container mx-auto px-4 py-6">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="bg-green-500 p-2 rounded-full">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
        <span className="text-xl font-bold text-gray-800">Wa Me 91</span>
      </div>
      <div className="flex items-center space-x-1 text-green-600 font-semibold">
        <i className="fas fa-globe text-sm"></i>
        <span className="text-sm sm:text-base">Instant Global Connection</span>
      </div>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8 mt-12">
    <div className="container mx-auto px-4 text-center">
      <div className="flex items-center justify-center mb-4">
        <div className="bg-green-500 p-2 rounded-full mr-3">
          <MessageCircle className="w-5 h-5 text-white" />
        </div>
        <span className="text-lg font-semibold">Wa Me 91</span>
      </div>
      <p className="text-gray-400 text-sm mb-4">
        The easiest way to WhatsApp direct chat in India
      </p>
      <div className="text-xs text-gray-500 border-t border-gray-700 pt-4">
        <p className="mb-2">
          <i className="fas fa-flag mr-2"></i>
          <i className="fas fa-heart text-red-500 mx-1"></i>
          2024 Wa Me 91. Made in India <i className="fas fa-flag"></i>
        </p>
        <p className="text-yellow-300">
          <strong>Note:</strong> This is not affiliated with WhatsApp Inc. This is an independent tool.
        </p>
      </div>
    </div>
  </footer>
);

const LiveSupportContent = ({ agent }: { agent: typeof agents[0] }) => (
  <section className="container mx-auto px-4 pb-16">
    <div className="bg-white/90 rounded-3xl shadow-2xl px-8 py-10 max-w-xl mx-auto flex flex-col items-center mt-4">
      <div className="bg-green-500 p-3 rounded-full mb-4">
        <MessageCircle className="w-8 h-8 text-white" />
      </div>
      <h2 className="text-3xl font-extrabold text-green-800 mb-3">Live Support - {agent.name}</h2>
      <p className="text-lg text-gray-700 mb-2 text-center">
        Get instant help from <b>{agent.name}</b>, our expert support agent! Talk, ask questions, and solve all your WhatsApp or Wa Me 91 usage issues in real time. Just click and connect—<span className="text-green-700 font-bold">no waiting, no hassle!</span>
      </p>
      <p className="text-base text-gray-600 mb-2 text-center">
        <b>What you get:</b> <br />
        - Fast, personalized solutions <br />
        - Step-by-step guidance for any issue <br />
        - Hindi and English language support<br />
        - 100% privacy guarantee
      </p>
      <ul className="text-sm text-gray-500 text-left mb-4 list-disc ml-4">
        <li>Receive troubleshooting for errors</li>
        <li>Learn best tips to use Wa Me 91 features</li>
        <li>Get help with privacy or safety concerns</li>
        <li>Connect from anywhere, 24x7 support available</li>
      </ul>
      <span className="bg-green-100 text-green-800 rounded px-3 py-1 font-semibold text-xs mb-3">
        Speak with {agent.name} now!
      </span>
      <div className="mt-2 text-gray-400 text-xs">Your chats are fully confidential &ndash; support you can trust.</div>
    </div>
  </section>
);

const AgentLiveSupport = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine which agent to display based on the URL path
  let agentIndex = 0; // Default to Rohan for /agent-1
  if (location.pathname.includes("/agent-2")) {
    agentIndex = 1; // Set to Priya for /agent-2
  }
  const agent = agents[agentIndex];

  // Define navigation paths based on the current agent
  let prevPath = "/live-support";
  let nextPath = "/live-support/agent-2";

  if (agentIndex === 1) { // If on agent-2 page (Priya)
    prevPath = "/live-support/agent-1";
    nextPath = "#"; // No "next" agent after Priya for now
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-green-100">
      <Header />
      <section className="container mx-auto px-4 mb-8">
        <VideoCallCard
          profileImage={agent.profileImage}
          name={agent.name}
          status="Expert Support 24/7"
          videoCallLink="#"
          nextLink={nextPath}
          variant="default"
          stats={agent.stats}
          nextButtonHandler={() => nextPath !== "#" && navigate(nextPath)}
          prevButtonHandler={() => navigate(prevPath)}
        />
      </section>
      <LiveSupportContent agent={agent} />
      <Footer />
    </div>
  );
};

export default AgentLiveSupport;
