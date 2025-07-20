
import React from "react";
import VideoCallCard from "@/components/VideoCallCard";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LiveSupportContent from "@/components/LiveSupportContent";
import { agents } from "@/data/agents";

const Agent1 = () => {
  const navigate = useNavigate();
  const agent = agents[0]; // First agent (Natasha)

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-green-100">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-8">
          <VideoCallCard
            profileImage={agent.profileImage}
            name={agent.name}
            status="Expert Support 24/7"
            videoCallLink="#"
            nextLink="/live-support/agent-2"
            variant="default"
            stats={agent.stats}
            nextButtonHandler={() => navigate("/live-support/agent-2")}
          />
        </section>
        <LiveSupportContent agent={agent} />
      </main>
      <Footer />
    </div>
  );
};

export default Agent1;
