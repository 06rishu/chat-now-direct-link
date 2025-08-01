
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import VideoCallCard from "@/components/VideoCallCard";
import LiveSupportContent from "@/components/LiveSupportContent";
import { useNavigate } from "react-router-dom";
import { agents } from "@/data/agents";

const Agent6 = () => {
  const agent = agents[5];
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
          nextLink="/live-support/agent-7"
          variant="default"
          stats={agent.stats}
          nextButtonHandler={() => navigate("/live-support/agent-7")}
          prevButtonHandler={() => navigate("/live-support/agent-5")}
        />
      </section>
      <LiveSupportContent agent={agent} />
      <Footer />
    </div>
  );
};

export default Agent6;
