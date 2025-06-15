import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import VideoCallCard from "@/components/VideoCallCard";
import AgentHeader from "@/components/AgentHeader";
import AgentFooter from "@/components/AgentFooter";
import LiveSupportContent from "@/components/LiveSupportContent";

// Agents data (names & profile pictures)
const agents = [
  {
    name: "Natasha",
    profileImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    stats: {
      activeSessions: 2945,
      satisfactionRate: "99.1%",
      responseTime: "< 30 seconds",
      rating: 4.9,
      reviews: 1317,
    },
  },
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
  {
    name: "Arjun",
    profileImage:
      "https://randomuser.me/api/portraits/men/76.jpg",
    stats: {
      activeSessions: 1622,
      satisfactionRate: "97.3%",
      responseTime: "< 2 min",
      rating: 4.7,
      reviews: 856,
    },
  },
  {
    name: "Sneha",
    profileImage:
      "https://randomuser.me/api/portraits/women/81.jpg",
    stats: {
      activeSessions: 1349,
      satisfactionRate: "99.6%",
      responseTime: "50 seconds",
      rating: 4.9,
      reviews: 1198,
    },
  },
  {
    name: "Ankit",
    profileImage:
      "https://randomuser.me/api/portraits/men/71.jpg",
    stats: {
      activeSessions: 1006,
      satisfactionRate: "98.9%",
      responseTime: "< 1 min",
      rating: 4.6,
      reviews: 674,
    },
  },
  {
    name: "Sanya",
    profileImage:
      "https://randomuser.me/api/portraits/women/85.jpg",
    stats: {
      activeSessions: 1093,
      satisfactionRate: "99.2%",
      responseTime: "45 seconds",
      rating: 4.8,
      reviews: 703,
    },
  },
  {
    name: "Raj",
    profileImage:
      "https://randomuser.me/api/portraits/men/78.jpg",
    stats: {
      activeSessions: 1142,
      satisfactionRate: "97.9%",
      responseTime: "< 2 min",
      rating: 4.5,
      reviews: 849,
    },
  },
  {
    name: "Meera",
    profileImage:
      "https://randomuser.me/api/portraits/women/87.jpg",
    stats: {
      activeSessions: 1218,
      satisfactionRate: "99.4%",
      responseTime: "39 seconds",
      rating: 5.0,
      reviews: 1122,
    },
  },
  {
    name: "Vikas",
    profileImage:
      "https://randomuser.me/api/portraits/men/80.jpg",
    stats: {
      activeSessions: 997,
      satisfactionRate: "98.1%",
      responseTime: "55 seconds",
      rating: 4.7,
      reviews: 602,
    },
  },
];

const AgentLiveSupport = () => {
  const { id } = useParams();
  let agentIndex = 1;
  if (id && !isNaN(Number(id))) {
    const candidateIndex = Number(id) - 1;
    if (candidateIndex >= 1 && candidateIndex < agents.length) {
      agentIndex = candidateIndex;
    }
  }
  const agent = agents[agentIndex];
  const navigate = useNavigate();

  // Compute the next and previous agent (loop 2-10)
  let nextId = agentIndex + 2;
  if (nextId > agents.length) nextId = 2;
  const nextAgentPath = `/live-support/agent-${nextId}`;

  let prevId = agentIndex;
  if (prevId < 2) prevId = agents.length;
  const prevAgentPath = `/live-support/agent-${prevId}`;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-green-100">
      <AgentHeader />
      <section className="container mx-auto px-2 sm:px-4 mb-8">
        <VideoCallCard
          profileImage={agent.profileImage}
          name={agent.name}
          status="Expert Support 24/7"
          videoCallLink="#"
          nextLink={nextAgentPath}
          variant="default"
          stats={agent.stats}
          nextButtonHandler={() => navigate(nextAgentPath)}
          previousButtonHandler={agentIndex + 1 > 2 ? () => navigate(prevAgentPath) : undefined}
          showPreviousButton={agentIndex + 1 > 2}
        />
      </section>
      <LiveSupportContent agent={agent} />
      <AgentFooter />
    </div>
  );
};

export default AgentLiveSupport;
