
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import VideoCallCard from "@/components/VideoCallCard";
import { agents } from "@/data/agents";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LiveSupportContent from "@/components/LiveSupportContent";

const AgentLiveSupport = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Extract agent number from pathname like "/live-support/agent-1"
  let agentIndex = 0;
  const match = location.pathname.match(/\/live-support\/agent-(\d+)/);
  if (match) {
    const agentNumber = parseInt(match[1]);
    if (agentNumber >= 1 && agentNumber <= agents.length) {
      agentIndex = agentNumber - 1; // Convert to 0-based index
    }
  }
  
  const agent = agents[agentIndex];

  // Calculate next agent (1-10, loops back to 1 after 10)
  const nextAgentNumber = agentIndex === agents.length - 1 ? 1 : agentIndex + 2;
  const nextAgentPath = `/live-support/agent-${nextAgentNumber}`;

  // Calculate previous agent (1-10, loops back to 10 from 1)
  const prevAgentNumber = agentIndex === 0 ? agents.length : agentIndex;
  const prevAgentPath = `/live-support/agent-${prevAgentNumber}`;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-green-100">
      <Header />
      {/* Agent Video Card */}
      <section className="container mx-auto px-4 mb-8">
        <VideoCallCard
          profileImage={agent.profileImage}
          name={agent.name}
          status="Expert Support 24/7"
          videoCallLink="#"
          nextLink={nextAgentPath}
          variant="default"
          stats={agent.stats}
          nextButtonHandler={() => navigate(nextAgentPath)}
          prevButtonHandler={() => navigate(prevAgentPath)}
        />
      </section>
      {/* Enhanced Live Support Content */}
      <LiveSupportContent agent={agent} />
      <Footer />
    </div>
  );
};

export default AgentLiveSupport;
