
import { useNavigate } from "react-router-dom";
import { Video, ArrowLeft, Cake } from "lucide-react";

const AgeSelection = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/video-call/language-selection");
  };

  const handleBack = () => {
    navigate("/video-call/category-selection");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden font-sans transition-all duration-300 hover:shadow-xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-5 text-white">
          <div className="flex items-center justify-center relative w-full">
            <button 
              onClick={handleBack}
              className="absolute left-0 w-8 h-8 rounded-full flex items-center justify-center bg-white/30 hover:bg-white/50 transition-all duration-200 hover:-translate-x-0.5"
            >
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
              <Cake className="w-6 h-6 mr-2" />
              Choose your age group
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={handleNext} className="p-4 rounded-full text-center font-medium transition-all duration-300 shadow-md hover:shadow-lg flex flex-col items-center justify-center text-sm min-h-[80px] bg-gradient-to-r from-pink-100 to-pink-200 hover:from-pink-200 hover:to-pink-300 text-pink-800">
                18-25
              </button>
              <button onClick={handleNext} className="p-4 rounded-full text-center font-medium transition-all duration-300 shadow-md hover:shadow-lg flex flex-col items-center justify-center text-sm min-h-[80px] bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 text-blue-800">
                26-35
              </button>
              <button onClick={handleNext} className="p-4 rounded-full text-center font-medium transition-all duration-300 shadow-md hover:shadow-lg flex flex-col items-center justify-center text-sm min-h-[80px] bg-gradient-to-r from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300 text-purple-800">
                36-45
              </button>
              <button onClick={handleNext} className="p-4 rounded-full text-center font-medium transition-all duration-300 shadow-md hover:shadow-lg flex flex-col items-center justify-center text-sm min-h-[80px] bg-gradient-to-r from-indigo-100 to-indigo-200 hover:from-indigo-200 hover:to-indigo-300 text-indigo-800">
                46+
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeSelection;
