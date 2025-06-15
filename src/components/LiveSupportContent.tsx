
import React from "react";
import { MessageCircle } from "lucide-react";

interface LiveSupportContentProps {
  agent: {
    name: string;
  };
}

const LiveSupportContent: React.FC<LiveSupportContentProps> = ({ agent }) => (
  <section className="container mx-auto px-2 sm:px-4 pb-16">
    <div className="bg-white/90 rounded-3xl shadow-2xl px-4 sm:px-8 py-8 sm:py-10 max-w-xl mx-auto flex flex-col items-start mt-4 w-full">
      <div className="bg-green-500 p-3 rounded-full mb-4">
        <MessageCircle className="w-8 h-8 text-white" />
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-green-800 mb-3 text-left w-full">Live Support - {agent.name}</h2>
      <p className="text-base sm:text-lg text-gray-700 mb-2 text-left w-full">
        Get instant help from <b>{agent.name}</b>, our expert support agent! Talk, ask questions, and solve all your WhatsApp or Wa Me 91 usage issues in real time. Just click and connect—<span className="text-green-700 font-bold">no waiting, no hassle!</span>
      </p>
      <p className="text-sm sm:text-base text-gray-600 mb-2 text-left w-full">
        <b>What you get:</b> <br />
        - Fast, personalized solutions <br />
        - Step-by-step guidance for any issue <br />
        - Hindi and English language support<br />
        - 100% privacy guarantee
      </p>
      <ul className="text-sm text-gray-500 text-left mb-4 list-disc ml-4 w-full">
        <li>Receive troubleshooting for errors</li>
        <li>Learn best tips to use Wa Me 91 features</li>
        <li>Get help with privacy or safety concerns</li>
        <li>Connect from anywhere, 24x7 support available</li>
      </ul>
      <span className="bg-green-100 text-green-800 rounded px-3 py-1 font-semibold text-xs mb-3 text-left w-full">
        Speak with {agent.name} now!
      </span>
      <div className="mt-2 text-gray-400 text-xs text-left w-full">Your chats are fully confidential &ndash; support you can trust.</div>
    </div>
  </section>
);

export default LiveSupportContent;
