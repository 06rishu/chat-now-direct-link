import React from "react";
import VideoCallCard from "@/components/VideoCallCard";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { agents } from "@/data/agents";

const LiveSupport = () => {
  // Natasha is agent 1 and should be the default on main /live-support page
  const agent = agents[0]; // First agent is Natasha

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-green-100">
      <Header />
      <section className="container mx-auto px-4 mb-8">
        <VideoCallCard
          profileImage={agent.profileImage}
          name={agent.name}
          status="Expert Support 24/7"
          videoCallLink="#"
          nextLink="/live-support/agent-1"
          variant="default"
          stats={agent.stats}
          nextButtonHandler={() => navigate("/live-support/agent-1")}
        />
      </section>
      <section className="container mx-auto px-4 pb-16">
        <div className="bg-white/90 rounded-3xl shadow-2xl px-8 py-10 max-w-xl mx-auto flex flex-col items-start mt-4">
          <div className="bg-green-500 p-3 rounded-full mb-4">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-extrabold text-green-800 mb-3">Live Support - Natasha</h2>
          <p className="text-lg text-gray-700 mb-2 text-left">
            Connect instantly with <b>Natasha</b> for personalized help. Our team is available <b>24/7</b> to answer your questions and resolve your WhatsApp or Wa Me 91 usage concerns—just a click away!
          </p>
          <p className="text-base text-gray-600 mb-2 text-left">
            <b>Why choose Natasha?</b><br />
            - Trusted by 2900+ users<br />
            - Fast resolution rate<br />
            - Friendly, step-by-step guidance<br />
            - Hindi & English support
          </p>
          <ul className="text-sm text-gray-500 text-left mb-4 list-disc ml-4">
            <li>Real-time troubleshooting</li>
            <li>Feature walkthroughs</li>
            <li>Account privacy tips</li>
            <li>Connect from anywhere, anytime!</li>
          </ul>
          <span className="bg-green-100 text-green-800 rounded px-3 py-1 font-semibold text-xs mb-3">
            Natasha is online now
          </span>
          <div className="mt-2 text-gray-400 text-xs">Your chats are confidential and handled with care.</div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LiveSupport;
