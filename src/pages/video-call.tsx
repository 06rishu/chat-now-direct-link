
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Video, 
  ArrowLeft, 
  Bell, 
  CheckCircle, 
  Venus, 
  Mars, 
  Transgender, 
  Tags, 
  UserTie, 
  Child, 
  User, 
  Cake, 
  Languages, 
  UserEdit, 
  Smartphone, 
  Link, 
  Clock,
  ExclamationTriangle,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const VideoCallPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [mobile, setMobile] = useState('');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timer, setTimer] = useState(60);
  const [busy, setBusy] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

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

  const reset = () => {
    setPage(0);
    setName('');
    setMobile('');
    setNameError('');
    setMobileError('');
    setIsSubmitting(false);
    setTimer(60);
    setBusy(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const prev = () => {
    if (page > 0) {
      setPage(page - 1);
    }
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

  const next = () => {
    if (page === 5) {
      if (!name.trim()) {
        setNameError('Please fill full name');
        return;
      }
      if (nameError) {
        return;
      }
    }
    
    if (page === 6) {
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
        setPage(page + 1);
      }, 1500);
      return;
    }
    
    setPage(page + 1);
    
    if (page + 1 === 8) {
      setTimer(60);
      setBusy(false);
      startTimer();
    }
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          setBusy(true);
          if (timerRef.current) {
            clearInterval(timerRef.current);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const timeText = () => {
    const min = String(Math.floor(timer / 60)).padStart(2, '0');
    const sec = String(timer % 60).padStart(2, '0');
    return `${min}:${sec}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden font-sans transition-all duration-300 hover:shadow-xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-5 text-white">
          <div className="flex items-center justify-center relative w-full">
            {page > 0 && page < 8 && (
              <button 
                onClick={prev}
                className="absolute left-0 w-8 h-8 rounded-full flex items-center justify-center bg-white/30 hover:bg-white/50 transition-all duration-200 hover:-translate-x-0.5"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
            <h1 className="text-2xl font-bold flex items-center">
              <Video className="w-6 h-6 mr-2" />
              Video Call Connect
            </h1>
          </div>
        </div>

        <div className="p-6">
          {/* Welcome Page */}
          {page === 0 && (
            <div className="text-center animate-fade-in">
              <div className="bg-purple-100 text-purple-800 p-5 rounded-2xl mb-6">
                <Bell className="w-10 h-10 mb-3 text-purple-600 mx-auto" />
                <h2 className="text-xl font-bold mb-2">Welcome!</h2>
                <p className="text-sm">Start your video call experience?</p>
              </div>
              <Button
                onClick={next}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 flex items-center justify-center animate-pulse"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Yes, I'm ready
              </Button>
            </div>
          )}

          {/* Gender Selection */}
          {page === 1 && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-bold text-center mb-6 text-purple-800 flex items-center justify-center">
                <Venus className="w-6 h-6 mr-2" />
                Select your gender
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={next} className="option-btn bg-pink-100 hover:bg-pink-200 text-pink-800 p-4 rounded-full text-center font-medium transition-all duration-300 shadow-md hover:shadow-lg flex flex-col items-center justify-center text-sm min-h-[80px]">
                  <Venus className="w-8 h-8 mb-2" />
                  Female
                </button>
                <button onClick={next} className="option-btn bg-blue-100 hover:bg-blue-200 text-blue-800 p-4 rounded-full text-center font-medium transition-all duration-300 shadow-md hover:shadow-lg flex flex-col items-center justify-center text-sm min-h-[80px]">
                  <Mars className="w-8 h-8 mb-2" />
                  Male
                </button>
                <button onClick={next} className="option-btn bg-purple-100 hover:bg-purple-200 text-purple-800 col-span-2 p-4 rounded-full text-center font-medium transition-all duration-300 shadow-md hover:shadow-lg flex flex-col items-center justify-center text-sm min-h-[80px]">
                  <Transgender className="w-8 h-8 mb-2" />
                  Other
                </button>
              </div>
            </div>
          )}

          {/* Category Selection */}
          {page === 2 && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-bold text-center mb-6 text-purple-800 flex items-center justify-center">
                <Tags className="w-6 h-6 mr-2" />
                Select a category
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={next} className="option-btn bg-rose-100 hover:bg-rose-200 text-rose-800 p-4 rounded-full text-center font-medium transition-all duration-300 shadow-md hover:shadow-lg flex flex-col items-center justify-center text-sm min-h-[80px]">
                  <User className="w-6 h-6 mb-2" />
                  Girls
                </button>
                <button onClick={next} className="option-btn bg-amber-100 hover:bg-amber-200 text-amber-800 p-4 rounded-full text-center font-medium transition-all duration-300 shadow-md hover:shadow-lg flex flex-col items-center justify-center text-sm min-h-[80px]">
                  <UserTie className="w-6 h-6 mb-2" />
                  Bhabhi
                </button>
                <button onClick={next} className="option-btn bg-emerald-100 hover:bg-emerald-200 text-emerald-800 p-4 rounded-full text-center font-medium transition-all duration-300 shadow-md hover:shadow-lg flex flex-col items-center justify-center text-sm min-h-[80px]">
                  <Child className="w-6 h-6 mb-2" />
                  Nibbi
                </button>
                <button onClick={next} className="option-btn bg-sky-100 hover:bg-sky-200 text-sky-800 p-4 rounded-full text-center font-medium transition-all duration-300 shadow-md hover:shadow-lg flex flex-col items-center justify-center text-sm min-h-[80px]">
                  <User className="w-6 h-6 mb-2" />
                  Boy
                </button>
                <button onClick={next} className="option-btn bg-violet-100 hover:bg-violet-200 text-violet-800 p-4 rounded-full text-center font-medium transition-all duration-300 shadow-md hover:shadow-lg flex flex-col items-center justify-center text-sm min-h-[80px]">
                  <User className="w-6 h-6 mb-2" />
                  Aunty
                </button>
                <button onClick={next} className="option-btn bg-indigo-100 hover:bg-indigo-200 text-indigo-800 p-4 rounded-full text-center font-medium transition-all duration-300 shadow-md hover:shadow-lg flex flex-col items-center justify-center text-sm min-h-[80px]">
                  <UserTie className="w-6 h-6 mb-2" />
                  Man
                </button>
              </div>
            </div>
          )}

          {/* Age Group Selection */}
          {page === 3 && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-bold text-center mb-6 text-purple-800 flex items-center justify-center">
                <Cake className="w-6 h-6 mr-2" />
                Choose your age group
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={next} className="option-btn bg-gradient-to-r from-pink-100 to-pink-200 hover:from-pink-200 hover:to-pink-300 text-pink-800 p-4 rounded-full text-center font-medium transition-all duration-300 shadow-md hover:shadow-lg flex flex-col items-center justify-center text-sm min-h-[80px]">
                  18-25
                </button>
                <button onClick={next} className="option-btn bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 text-blue-800 p-4 rounded-full text-center font-medium transition-all duration-300 shadow-md hover:shadow-lg flex flex-col items-center justify-center text-sm min-h-[80px]">
                  26-35
                </button>
                <button onClick={next} className="option-btn bg-gradient-to-r from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300 text-purple-800 p-4 rounded-full text-center font-medium transition-all duration-300 shadow-md hover:shadow-lg flex flex-col items-center justify-center text-sm min-h-[80px]">
                  36-45
                </button>
                <button onClick={next} className="option-btn bg-gradient-to-r from-indigo-100 to-indigo-200 hover:from-indigo-200 hover:to-indigo-300 text-indigo-800 p-4 rounded-full text-center font-medium transition-all duration-300 shadow-md hover:shadow-lg flex flex-col items-center justify-center text-sm min-h-[80px]">
                  46+
                </button>
              </div>
            </div>
          )}

          {/* Language Selection */}
          {page === 4 && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-bold text-center mb-6 text-purple-800 flex items-center justify-center">
                <Languages className="w-6 h-6 mr-2" />
                Choose your preferred language
              </h2>
              <div className="grid grid-cols-2 gap-3 max-h-64 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-gray-100">
                {languages.map((lang, index) => (
                  <button 
                    key={lang}
                    onClick={next} 
                    className={`option-btn bg-${languageColors[index]}-100 hover:bg-${languageColors[index]}-200 text-${languageColors[index]}-800 p-4 rounded-full text-center font-medium transition-all duration-300 shadow-md hover:shadow-lg flex flex-col items-center justify-center text-sm min-h-[80px]`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Name Input */}
          {page === 5 && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-bold text-center mb-6 text-purple-800 flex items-center justify-center">
                <UserEdit className="w-6 h-6 mr-2" />
                What's your name?
              </h2>
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</Label>
                <Input 
                  type="text" 
                  id="name" 
                  value={name}
                  onChange={(e) => validateName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  placeholder="Enter your full name"
                />
                {nameError && <p className="mt-1 text-sm text-red-600 animate-pulse">{nameError}</p>}
              </div>
              <Button
                onClick={next}
                disabled={!!nameError || !name}
                className={`w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-xl mt-4 flex items-center justify-center transition-all duration-300 ${
                  !!nameError || !name ? 'opacity-75 cursor-not-allowed' : 'animate-pulse hover:shadow-xl hover:scale-105'
                }`}
              >
                Next: Mobile Number
                <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
              </Button>
            </div>
          )}

          {/* Mobile Number Input */}
          {page === 6 && (
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
                onClick={next}
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
          )}

          {/* App Selection */}
          {page === 7 && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-bold text-center mb-6 text-purple-800 flex items-center justify-center">
                <Video className="w-6 h-6 mr-2" />
                Choose video call app
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={next} className="option-btn bg-green-100 hover:bg-green-200 text-green-800 p-4 rounded-full text-center font-medium transition-all duration-300 shadow-md hover:shadow-lg flex flex-col items-center justify-center text-sm min-h-[80px]">
                  <div className="w-8 h-8 mb-2 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">W</div>
                  WhatsApp
                </button>
                <button onClick={next} className="option-btn bg-pink-100 hover:bg-pink-200 text-pink-800 p-4 rounded-full text-center font-medium transition-all duration-300 shadow-md hover:shadow-lg flex flex-col items-center justify-center text-sm min-h-[80px]">
                  <div className="w-8 h-8 mb-2 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">I</div>
                  Instagram
                </button>
                <button onClick={next} className="option-btn bg-blue-100 hover:bg-blue-200 text-blue-800 p-4 rounded-full text-center font-medium transition-all duration-300 shadow-md hover:shadow-lg flex flex-col items-center justify-center text-sm min-h-[80px]">
                  <div className="w-8 h-8 mb-2 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">F</div>
                  Facebook
                </button>
                <button onClick={next} className="option-btn bg-sky-100 hover:bg-sky-200 text-sky-800 p-4 rounded-full text-center font-medium transition-all duration-300 shadow-md hover:shadow-lg flex flex-col items-center justify-center text-sm min-h-[80px]">
                  <div className="w-8 h-8 mb-2 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold">T</div>
                  Telegram
                </button>
              </div>
            </div>
          )}

          {/* Connecting Page */}
          {page === 8 && (
            <div className="animate-fade-in text-center">
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-2xl mb-6">
                <h2 className="text-xl font-bold text-purple-800 mb-4 flex items-center justify-center">
                  <Link className="w-6 h-6 mr-2" />
                  Connecting your call...
                </h2>
                <div className="text-4xl font-bold text-purple-600 mb-4">{timeText()}</div>
                <div className="w-15 h-15 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-sm text-purple-500 flex items-center justify-center">
                  <Clock className="w-4 h-4 mr-1" />
                  Please wait while we connect you...
                </p>
              </div>

              {busy && (
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-2xl border border-red-200">
                  <p className="text-red-600 font-medium mb-4 flex items-center justify-center">
                    <ExclamationTriangle className="w-5 h-5 mr-2" />
                    The person you selected is currently busy and will be available after 30 minutes.
                  </p>
                  <Button 
                    onClick={reset} 
                    className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 flex items-center justify-center animate-pulse"
                  >
                    <RefreshCw className="w-5 h-5 mr-2" />
                    Choose Another Person
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCallPage;
