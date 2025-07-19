
import { useNavigate } from "react-router-dom";
import { Video, ArrowLeft } from "lucide-react";

const AppSelection = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/video-call/connecting");
  };

  const handleBack = () => {
    navigate("/video-call/mobile-input");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden font-sans transition-all duration-300 hover:shadow-xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-5 text-white">
          <div className="title-container">
            <button onClick={handleBack} className="back-btn-title">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <h1 className="text-2xl font-bold flex items-center">
              <Video className="w-6 h-6 mr-2" />
              Video Call Connect
            </h1>
          </div>
        </div>

        <div className="p-6">
          <div className="animate-fade-in">
            <h2 className="text-xl font-bold text-center mb-6 text-purple-800 flex items-center justify-center">
              <Video className="w-6 h-6 mr-2" />
              Choose video call app
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={handleNext} className="option-btn bg-green-100 hover:bg-green-200 text-green-800">
                <div className="w-8 h-8 mb-2 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">W</div>
                WhatsApp
              </button>
              <button onClick={handleNext} className="option-btn bg-pink-100 hover:bg-pink-200 text-pink-800">
                <div className="w-8 h-8 mb-2 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">I</div>
                Instagram
              </button>
              <button onClick={handleNext} className="option-btn bg-blue-100 hover:bg-blue-200 text-blue-800">
                <div className="w-8 h-8 mb-2 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">F</div>
                Facebook
              </button>
              <button onClick={handleNext} className="option-btn bg-sky-100 hover:bg-sky-200 text-sky-800">
                <div className="w-8 h-8 mb-2 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold">T</div>
                Telegram
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSelection;
