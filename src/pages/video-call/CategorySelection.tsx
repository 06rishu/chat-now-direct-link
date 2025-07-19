
import { useNavigate } from "react-router-dom";
import { Video, ArrowLeft, Tags, User } from "lucide-react";

const CategorySelection = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/video-call/age-selection");
  };

  const handleBack = () => {
    navigate("/video-call/gender-selection");
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
              <Tags className="w-6 h-6 mr-2" />
              Select a category
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={handleNext} className="option-btn bg-rose-100 hover:bg-rose-200 text-rose-800">
                <User className="w-6 h-6 mb-2" />
                Girls
              </button>
              <button onClick={handleNext} className="option-btn bg-amber-100 hover:bg-amber-200 text-amber-800">
                <User className="w-6 h-6 mb-2" />
                Bhabhi
              </button>
              <button onClick={handleNext} className="option-btn bg-emerald-100 hover:bg-emerald-200 text-emerald-800">
                <User className="w-6 h-6 mb-2" />
                Nibbi
              </button>
              <button onClick={handleNext} className="option-btn bg-sky-100 hover:bg-sky-200 text-sky-800">
                <User className="w-6 h-6 mb-2" />
                Boy
              </button>
              <button onClick={handleNext} className="option-btn bg-violet-100 hover:bg-violet-200 text-violet-800">
                <User className="w-6 h-6 mb-2" />
                Aunty
              </button>
              <button onClick={handleNext} className="option-btn bg-indigo-100 hover:bg-indigo-200 text-indigo-800">
                <User className="w-6 h-6 mb-2" />
                Man
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySelection;
