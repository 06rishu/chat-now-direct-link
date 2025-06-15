
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
  nextButtonHandler?: () => void;
  prevButtonHandler?: () => void;
}

const VideoCallCard: React.FC<VideoCallCardProps> = ({
  profileImage,
  name,
  status,
  variant = 'default',
  stats,
  nextButtonHandler,
  prevButtonHandler,
}) => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate("/live-support");
  };

  return (
    <div className="max-w-xl mx-auto bg-gradient-to-br from-green-200 via-green-100 to-blue-100 rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-5 border border-green-200 min-h-[320px] w-full sm:p-8 p-4 relative">
      {/* Previous Button - Top Left */}
      {prevButtonHandler && (
        <button
          onClick={prevButtonHandler}
          className="absolute top-4 left-4 bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 shadow-md w-10 h-10"
        >
          <i className="fas fa-arrow-left"></i>
        </button>
      )}
      
      <div className="flex flex-col items-center w-full">
        <div className="relative mb-2">
          <img
            src={profileImage}
            alt={`${name} Profile`}
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl"
            onError={e => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face";
            }}
          />
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse flex items-center justify-center">
            <i className="fas fa-video text-white text-xs"></i>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-1">{name}</h3>
        <p className="text-base text-green-700 flex items-center justify-center mb-2">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          {status}
        </p>
        {stats && (
          <div className="flex flex-wrap gap-3 text-xs text-gray-600 mb-2 justify-center">
            <span>Sessions: <span className="font-bold">{stats.activeSessions}</span></span>
            <span>✨ {stats.satisfactionRate}</span>
            <span>⏱ {stats.responseTime}</span>
          </div>
        )}
      </div>
      <div className="flex w-full flex-col sm:flex-row gap-3">
        <button
          onClick={handleRoute}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg flex items-center justify-center text-sm font-semibold transition-all duration-200 shadow-md whitespace-nowrap sm:text-base sm:py-3 sm:px-4"
        >
          <i className="fas fa-video mr-2"></i>
          Start Video Call
        </button>
        <button
          onClick={nextButtonHandler}
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg flex items-center justify-center text-sm font-semibold transition-all duration-200 shadow-md whitespace-nowrap sm:text-base sm:py-3 sm:px-4"
        >
          <i className="fas fa-arrow-right mr-2"></i>
          Next
        </button>
      </div>
    </div>
  );
};

export default VideoCallCard;
