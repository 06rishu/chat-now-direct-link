
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Video, ArrowLeft, User } from "lucide-react";
import VideoCallLayout from "../../components/layout/VideoCallLayout";

const NameInput = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const handleNext = () => {
    if (!name.trim()) {
      setNameError('Please fill full name');
      return;
    }
    if (nameError) {
      return;
    }
    navigate("/video-call/mobile-input");
  };

  const handleBack = () => {
    navigate("/video-call/language-selection");
  };

  const validateName = (value: string) => {
    // Only allow letters and spaces
    const cleanValue = value.replace(/[^a-zA-Z\s]/g, '');
    setName(cleanValue);
    
    if (!cleanValue.trim()) {
      setNameError('Please fill full name');
    } else if (cleanValue.length < 3) {
      setNameError('Name must be at least 3 characters');
    } else {
      setNameError('');
    }
  };

  return (
    <VideoCallLayout>
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
                <User className="w-6 h-6 mr-2" />
                What's your name?
              </h2>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={name}
                  onChange={(e) => validateName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  placeholder="Enter your full name"
                />
                {nameError && <p className="mt-1 text-sm text-red-600 error-message">{nameError}</p>}
              </div>
              <button
                onClick={handleNext}
                disabled={!!nameError || !name}
                className={`w-full gradient-bg text-white font-bold py-3 px-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-4 flex items-center justify-center ${
                  !!nameError || !name ? 'opacity-75 cursor-not-allowed' : 'pulse'
                }`}
              >
                Next: Mobile Number
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </VideoCallLayout>
  );
};

export default NameInput;
