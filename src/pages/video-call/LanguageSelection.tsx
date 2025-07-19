
import { useNavigate } from "react-router-dom";
import { Video, ArrowLeft, Languages } from "lucide-react";

const LanguageSelection = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/video-call/name-input");
  };

  const handleBack = () => {
    navigate("/video-call/age-selection");
  };

  const languages = [
    'English', 'Hindi', 'Marathi', 'Bengali', 
    'Tamil', 'Telugu', 'Kannada', 'Malayalam', 
    'Gujarati', 'Punjabi', 'Urdu', 'Odia', 
    'Assamese', 'Rajasthani', 'Haryanvi', 
    'Bhojpuri', 'Chhattisgarhi', 'Maithili', 'Konkani'
  ];

  const languageColors = [
    'blue', 'orange', 'green', 'red',
    'purple', 'pink', 'indigo', 'teal',
    'yellow', 'amber', 'cyan', 'lime',
    'emerald', 'violet', 'fuchsia',
    'rose', 'sky', 'gray', 'stone'
  ];

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
              <Languages className="w-6 h-6 mr-2" />
              Choose your preferred language
            </h2>
            <div className="grid grid-cols-2 gap-3 max-h-64 overflow-y-auto p-2 custom-scrollbar">
              {languages.map((lang, index) => (
                <button 
                  key={lang}
                  onClick={handleNext} 
                  className={`option-btn bg-${languageColors[index]}-100 hover:bg-${languageColors[index]}-200 text-${languageColors[index]}-800`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelection;
