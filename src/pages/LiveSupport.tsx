
import React from "react";
import { MessageCircle } from "lucide-react";
import VideoCallCard from "@/components/VideoCallCard";

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

const LiveSupport = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-green-100">
    {/* Header */}
    <Header />

    {/* Video Card 1 (Natasha) */}
    <section className="container mx-auto px-4 mb-8">
      <VideoCallCard
        profileImage="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
        name="Natasha"
        status="Expert Support 24/7"
        videoCallLink=""
        nextLink=""
        variant="default"
        stats={{
          activeSessions: 2945,
          satisfactionRate: "99.1%",
          responseTime: "< 30 seconds",
          rating: 4.9,
          reviews: 1317
        }}
      />
    </section>

    {/* Live Support Content */}
    <section className="container mx-auto px-4 pb-16">
      <div className="bg-white/80 rounded-3xl shadow-2xl px-8 py-10 max-w-xl mx-auto flex flex-col items-center">
        <div className="bg-green-500 p-3 rounded-full mb-4">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-extrabold text-green-800 mb-3">Live Support</h2>
        <p className="text-lg text-gray-700 mb-4 text-center">
          Connect instantly with our expert, Natasha, for personalized help. Our team is available <b>24/7</b> to answer your questions and resolve your WhatsApp or Wa Me 91 usage concerns—just a click away!
        </p>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-200 flex items-center gap-2 mb-3"
        >
          <i className="fas fa-video mr-2"></i>
          Join Video Call
        </a>
        <div className="mt-2 text-gray-400 text-xs">24/7 Live Support | Wa Me 91</div>
      </div>
    </section>

    {/* Footer */}
    <Footer />
  </div>
);

export default LiveSupport;
