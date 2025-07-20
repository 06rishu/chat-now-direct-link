
import { useNavigate } from "react-router-dom";
import { Video, VideoOff } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoCallPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex flex-col items-center justify-center">
      <div className="bg-white/80 border border-green-100 rounded-3xl shadow-2xl max-w-lg w-full p-8 flex flex-col items-center">
        <div className="mb-5 flex flex-col items-center">
          <Video className="w-12 h-12 text-green-600 mb-3" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Video Call Room</h1>
          <p className="text-gray-600 mb-2">You are now in a secure video call.</p>
        </div>
        <div className="flex flex-col items-center w-full mb-8">
          {/* Simulated video preview */}
          <div className="w-48 h-48 bg-gray-200 border-2 border-green-200 rounded-xl mb-4 flex items-center justify-center shadow-inner">
            <VideoOff className="w-20 h-20 text-gray-400" />
          </div>
          <div className="text-sm text-gray-700">Video preview (simulated)</div>
        </div>
        <Button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg transition-all"
          onClick={() => navigate("/")}
        >
          Leave Call
        </Button>
      </div>
    </div>
  );
};

export default VideoCallPage;
