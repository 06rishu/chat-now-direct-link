
import { useNavigate } from "react-router-dom";
import { Video, Bell, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/video-call/gender-selection");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden font-sans transition-all duration-300 hover:shadow-xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-5 text-white">
          <div className="flex items-center justify-center relative w-full">
            <h1 className="text-2xl font-bold flex items-center">
              <Video className="w-6 h-6 mr-2" />
              Video Call Connect
            </h1>
          </div>
        </div>

        <div className="p-6">
          <div className="text-center animate-fade-in">
            <div className="bg-purple-100 text-purple-800 p-5 rounded-2xl mb-6">
              <Bell className="w-10 h-10 mb-3 text-purple-600 mx-auto" />
              <h2 className="text-xl font-bold mb-2">Welcome!</h2>
              <p className="text-sm">Start your video call experience?</p>
            </div>
            <button
              onClick={handleNext}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 flex items-center justify-center animate-pulse"
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              Yes, I'm ready
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
