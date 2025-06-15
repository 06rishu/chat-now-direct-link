
import React from 'react';

interface VideoCallCardProps {
  profileImage: string;
  name: string;
  status: string;
  videoCallLink: string;
  nextLink: string;
  variant?: 'default' | 'premium';
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
  videoCallLink,
  nextLink,
  variant = 'default',
  stats
}) => {
  const handleVideoCall = () => {
    window.open(videoCallLink, '_blank');
  };

  const handleNext = () => {
    window.open(nextLink, '_blank');
  };

  if (variant === 'premium') {
    return (
      <div className="max-w-xl mx-auto bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-8 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-20 h-20 bg-white rounded-full -translate-x-10 -translate-y-10"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-16 translate-y-16"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src={profileImage} 
                  alt={`${name} Profile`} 
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-3 border-white flex items-center justify-center">
                  <i className="fas fa-video text-white text-xs"></i>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{name}</h3>
                <p className="text-sm opacity-90 flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  {status}
                </p>
                {stats && (
                  <div className="flex items-center mt-1">
                    <div className="flex text-yellow-300 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star text-xs"></i>
                      ))}
                    </div>
                    <span className="text-xs opacity-75">{stats.rating}/5 ({stats.reviews} reviews)</span>
                  </div>
                )}
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs opacity-75">Response Time</div>
              <div className="text-sm font-semibold text-green-300">{stats?.responseTime || '< 30 seconds'}</div>
            </div>
          </div>
          
          {stats && (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="opacity-90">Active Sessions Today</span>
                <span className="font-bold text-green-300">{stats.activeSessions}</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="opacity-90">Satisfaction Rate</span>
                <span className="font-bold text-green-300">{stats.satisfactionRate}</span>
              </div>
            </div>
          )}
          
          <div className="flex space-x-3">
            <button 
              onClick={handleVideoCall}
              className="flex-1 bg-white text-indigo-600 hover:bg-gray-100 py-3 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-video mr-2"></i>
              Start Video Call
            </button>
            <button 
              onClick={handleNext}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm py-3 px-4 rounded-xl transition-all duration-300 border border-white/30"
            >
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 border border-green-100">
      <div className="flex flex-col items-center mb-6">
        <div className="relative mb-4">
          <img 
            src={profileImage} 
            alt={`${name} Profile`} 
            className="w-20 h-20 rounded-full object-cover shadow-lg"
          />
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse flex items-center justify-center">
            <i className="fas fa-video text-white text-xs"></i>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
          <p className="text-sm text-green-600 flex items-center justify-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            {status}
          </p>
        </div>
      </div>
      <div className="flex space-x-3">
        <button 
          onClick={handleVideoCall}
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg flex items-center justify-center text-sm font-medium transition-colors shadow-md"
        >
          <i className="fas fa-video mr-2"></i>
          Video Call
        </button>
        <button 
          onClick={handleNext}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg flex items-center justify-center text-sm font-medium transition-colors shadow-md"
        >
          <i className="fas fa-arrow-right mr-2"></i>
          Next
        </button>
      </div>
    </div>
  );
};

export default VideoCallCard;
