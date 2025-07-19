
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Video, Link, Clock, AlertTriangle, RefreshCw } from "lucide-react";

const ConnectingPage = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(60);
  const [busy, setBusy] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const reset = () => {
    navigate("/video-call/welcome");
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
    startTimer();
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
          <div className="title-container">
            <h1 className="text-2xl font-bold flex items-center">
              <Video className="w-6 h-6 mr-2" />
              Video Call Connect
            </h1>
          </div>
        </div>

        <div className="p-6">
          <div className="animate-fade-in text-center">
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-2xl mb-6">
              <h2 className="text-xl font-bold text-purple-800 mb-4 flex items-center justify-center">
                <Link className="w-6 h-6 mr-2" />
                Connecting your call...
              </h2>
              <div className="text-4xl font-bold text-purple-600 mb-4">{timeText()}</div>
              <div className="loader mx-auto mb-4"></div>
              <p className="text-sm text-purple-500 flex items-center justify-center">
                <Clock className="w-4 h-4 mr-1" />
                Please wait while we connect you...
              </p>
            </div>

            {busy && (
              <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-2xl border border-red-200">
                <p className="text-red-600 font-medium mb-4 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  The person you selected is currently busy and will be available after 30 minutes.
                </p>
                <button 
                  onClick={reset} 
                  className="w-full gradient-bg-red text-white font-bold py-3 px-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 flex items-center justify-center pulse"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Choose Another Person
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectingPage;
