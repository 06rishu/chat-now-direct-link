
import React from "react";
import { MessageCircle } from "lucide-react";

const LiveSupport = () => (
  <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 flex flex-col items-center justify-center">
    <div className="bg-white/80 rounded-3xl shadow-2xl px-8 py-12 max-w-md w-full flex flex-col items-center animate-fade-in">
      <div className="bg-green-500 p-3 rounded-full mb-4">
        <MessageCircle className="w-8 h-8 text-white" />
      </div>
      <h2 className="text-3xl font-extrabold text-green-800 mb-3">Live Support</h2>
      <p className="text-lg text-gray-700 mb-6 text-center">
        You are now connected to <span className="font-bold text-green-600">Live Support</span>.<br />
        Our team will join the video call shortly!
      </p>
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-200 flex items-center gap-2"
      >
        <i className="fas fa-video mr-2"></i>
        Join Video Call
      </a>
      <div className="mt-8 text-gray-400 text-xs">24/7 Live Support | Wa Me 91</div>
    </div>
  </div>
);

export default LiveSupport;
