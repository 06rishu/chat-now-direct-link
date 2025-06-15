
import React from 'react';
import { useNavigate } from "react-router-dom";

interface VideoCallCardProps {
  profileImage: string;
  name: string;
  status: string;
  videoCallLink: string;
  nextLink: string;
  variant?: 'default' | 'premium' | 'simple';
  stats?: {
    activeSessions?: number;
    satisfactionRate?: string;
    responseTime?: string;
    rating?: number;
    reviews?: number;
  };
}

const VideoCallCard: React.FC<VideoCallCardProps> = ({
  profileImage,
  name,
  status,
  variant = 'default',
  stats
}) => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate("/live-support");
  };

  // Chhota aur minimal card jo WhatsApp preview card se milta-julta ho
  return (
    <div className="w-full max-w-md mx-auto bg-gradient-to-br from-green-50 via-green-100 to-blue-50 rounded-2xl shadow-lg p-4 flex flex-col items-center gap-3 border border-green-100 min-h-[180px]">
      <div className="flex flex-col items-center">
        <div className="relative mb-1">
          <img
            src={profileImage}
            alt={`${name} Profile`}
            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow"
            onError={e => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face";
            }}
          />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
            <i className="fas fa-video text-white text-[10px]"></i>
          </div>
        </div>
        <h3 className="text-base font-bold text-gray-800 mb-0">{name}</h3>
        <p className="text-xs text-green-700 flex items-center justify-center mb-1">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1 animate-pulse"></span>
          {status}
        </p>
        {stats && (
          <div className="flex gap-2 text-xs text-gray-600 mb-1">
            <span>Sessions: <span className="font-bold">{stats.activeSessions}</span></span>
            <span>✨ {stats.satisfactionRate}</span>
            <span>⏱ {stats.responseTime}</span>
          </div>
        )}
      </div>
      <div className="flex w-full space-x-2">
        <button
          onClick={handleRoute}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg flex items-center justify-center text-xs font-semibold transition-all duration-200 shadow"
        >
          <i className="fas fa-video mr-1"></i>
          Start Video Call
        </button>
        <button
          onClick={handleRoute}
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-lg flex items-center justify-center text-xs font-semibold transition-all duration-200 shadow"
        >
          <i className="fas fa-arrow-right mr-1"></i>
          Next
        </button>
      </div>
    </div>
  );
};

export default VideoCallCard;
