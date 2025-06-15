import React from "react";
import { MessageCircle } from "lucide-react";
import VideoCallCard from "@/components/VideoCallCard";
import { useNavigate } from "react-router-dom";

// Header & Footer content (copy-paste from Index.tsx for consistent look)
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

const LiveSupport = () => {
  const navigate = useNavigate();
  // Natasha is agent 1 and should be the default on main /live-support page
  const agent = {
    name: "Natasha",
    profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    stats: {
      activeSessions: 2945,
      satisfactionRate: "99.1%",
      responseTime: "< 30 seconds",
      rating: 4.9,
      reviews: 1317,
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-green-100">
      <Header />
      <section className="container mx-auto px-2 sm:px-4 mb-8">
        <VideoCallCard
          profileImage={agent.profileImage}
          name={agent.name}
          status="Expert Support 24/7"
          videoCallLink="#"
          nextLink="/live-support/agent-2"
          variant="default"
          stats={agent.stats}
          // Next pe click kare to agent 2 par le jaye
          nextButtonHandler={() => navigate("/live-support/agent-2")}
        />
      </section>
      <section className="container mx-auto px-2 sm:px-4 pb-16">
        <div className="bg-white/90 rounded-3xl shadow-2xl px-4 sm:px-8 py-8 sm:py-10 max-w-xl mx-auto flex flex-col items-start mt-4 w-full">
          <div className="bg-green-500 p-3 rounded-full mb-4">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-green-800 mb-3 text-left w-full">Live Support - Natasha</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-2 text-left w-full">
            Connect instantly with <b>Natasha</b> for personalized help. Our team is available <b>24/7</b> to answer your questions and resolve your WhatsApp or Wa Me 91 usage concerns—just a click away!
          </p>
          <p className="text-sm sm:text-base text-gray-600 mb-2 text-left w-full">
            <b>Why choose Natasha?</b><br />
            - Trusted by 2900+ users<br />
            - Fast resolution rate<br />
            - Friendly, step-by-step guidance<br />
            - Hindi & English support
          </p>
          <ul className="text-sm text-gray-500 text-left mb-4 list-disc ml-4 w-full">
            <li>Real-time troubleshooting</li>
            <li>Feature walkthroughs</li>
            <li>Account privacy tips</li>
            <li>Connect from anywhere, anytime!</li>
          </ul>
          <span className="bg-green-100 text-green-800 rounded px-3 py-1 font-semibold text-xs mb-3 text-left w-full">
            Natasha is online now
          </span>
          <div className="mt-2 text-gray-400 text-xs text-left w-full">Your chats are confidential and handled with care.</div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LiveSupport;
