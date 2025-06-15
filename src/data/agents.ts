
export type Agent = {
  name: string;
  profileImage: string;
  stats: {
    activeSessions: number;
    satisfactionRate: string;
    responseTime: string;
    rating: number;
    reviews: number;
  };
};

export const agents: Agent[] = [
  {
    // Agent 1 (Indian Girl)
    name: "Priya Rajput",
    profileImage:
      "https://randomuser.me/api/portraits/women/21.jpg",
    stats: {
      activeSessions: 1911,
      satisfactionRate: "98.5%",
      responseTime: "< 1 min",
      rating: 4.8,
      reviews: 987,
    },
  },
  {
    // Agent 2 (New Indian Girl)
    name: "Ankita Sharma",
    profileImage:
      "https://randomuser.me/api/portraits/women/68.jpg",
    stats: {
      activeSessions: 1723,
      satisfactionRate: "99.8%",
      responseTime: "35 seconds",
      rating: 5.0,
      reviews: 1475,
    },
  },
  {
    // Agent 3 (Indian Girl)
    name: "Sanya Gupta",
    profileImage:
      "https://randomuser.me/api/portraits/women/54.jpg",
    stats: {
      activeSessions: 1622,
      satisfactionRate: "97.3%",
      responseTime: "< 2 min",
      rating: 4.7,
      reviews: 856,
    },
  },
  {
    // Agent 4 (unchanged)
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
    // Agent 5 (Indian Girl)
    name: "Ritu Kumari",
    profileImage:
      "https://randomuser.me/api/portraits/women/30.jpg",
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
    // Agent 9 (New Indian Girl)
    name: "Nisha Yadav",
    profileImage:
      "https://randomuser.me/api/portraits/women/43.jpg",
    stats: {
      activeSessions: 997,
      satisfactionRate: "98.1%",
      responseTime: "55 seconds",
      rating: 4.7,
      reviews: 602,
    },
  },
  // New agent for Agent10 page
  {
    name: "Zara Ahmed",
    profileImage:
      "https://randomuser.me/api/portraits/women/90.jpg",
    stats: {
      activeSessions: 851,
      satisfactionRate: "97.7%",
      responseTime: "< 1 min",
      rating: 4.6,
      reviews: 453,
    },
  },
];

