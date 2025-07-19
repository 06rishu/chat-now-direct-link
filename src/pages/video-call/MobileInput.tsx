
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Video, ArrowLeft, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
              <Smartphone className="w-6 h-6 mr-2" />
              Enter your mobile number
            </h2>
            <div className="mb-6">
              <Label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</Label>
              <Input 
                type="tel" 
                id="mobile" 
                value={mobile}
                onChange={(e) => validateMobile(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                placeholder="Enter 10-digit mobile number"
                maxLength={10}
              />
              {mobileError && <p className="mt-1 text-sm text-red-600 animate-pulse">{mobileError}</p>}
            </div>
            <Button
              onClick={handleNext}
              disabled={isSubmitting || !!mobileError || !mobile}
              className={`w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center transition-all duration-300 ${
                isSubmitting || !!mobileError || !mobile ? 'opacity-75 cursor-not-allowed' : 'animate-pulse hover:shadow-xl hover:scale-105'
              }`}
            >
              {isSubmitting && (
                <div className="animate-spin -ml-1 mr-3 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
              )}
              <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileInput;
