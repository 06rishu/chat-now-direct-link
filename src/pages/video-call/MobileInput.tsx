
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Video, ArrowLeft, Smartphone } from "lucide-react";
import VideoCallLayout from "../../components/layout/VideoCallLayout";

const MobileInput = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = () => {
    if (!mobile.trim()) {
      setMobileError('Please enter mobile number');
      return;
    }
    if (mobileError) {
      return;
    }
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/video-call/app-selection");
    }, 1500);
  };

  const handleBack = () => {
    navigate("/video-call/name-input");
  };

  const validateMobile = (value: string) => {
    // Remove any non-digit characters
    const cleanValue = value.replace(/\D/g, '');
    setMobile(cleanValue.slice(0, 10));
    
    if (!cleanValue.trim()) {
      setMobileError('Please enter mobile number');
    } else if (cleanValue.length < 10) {
      setMobileError('Mobile number must be 10 digits');
    } else {
      setMobileError('');
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
                <Smartphone className="w-6 h-6 mr-2" />
                Enter your mobile number
              </h2>
              <div className="mb-6">
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <input 
                  type="tel" 
                  id="mobile" 
                  value={mobile}
                  onChange={(e) => validateMobile(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  placeholder="Enter 10-digit mobile number"
                  maxLength={10}
                />
                {mobileError && <p className="mt-1 text-sm text-red-600 error-message">{mobileError}</p>}
              </div>
              <button
                onClick={handleNext}
                disabled={isSubmitting || !!mobileError || !mobile}
                className={`w-full gradient-bg text-white font-bold py-3 px-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 flex items-center justify-center ${
                  isSubmitting || !!mobileError || !mobile ? 'opacity-75 cursor-not-allowed' : 'pulse'
                }`}
              >
                {isSubmitting && (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </VideoCallLayout>
  );
};

export default MobileInput;
