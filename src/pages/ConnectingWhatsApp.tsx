
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const ConnectingWhatsApp = () => {
  const [countdown, setCountdown] = useState(10);
  const [isConnected, setIsConnected] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [appType, setAppType] = useState("WhatsApp");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Get WhatsApp URL and app type from location state
    const url = location.state?.whatsappUrl;
    const type = location.state?.appType || "WhatsApp";
    
    if (!url) {
      navigate("/wa-me-91");
      return;
    }
    
    setWhatsappUrl(url);
    setAppType(type);

    // Start countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsConnected(true);
          // Don't auto-open WhatsApp anymore
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [location.state, navigate]);

  const openWhatsApp = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-green-100">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-md mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            {!isConnected ? (
              <>
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <h1 className="text-2xl font-bold text-green-700 mb-4">
                  Connecting {appType}
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  Please wait...
                </p>
                <div className="text-3xl font-bold text-green-600 mb-4">
                  {countdown}
                </div>
                <p className="text-sm text-gray-500">
                  {appType} will be ready to open
                </p>
              </>
            ) : (
              <>
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h1 className="text-2xl font-bold text-green-700 mb-4">
                  Connected!
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Ready to open {appType}
                </p>
                <Button 
                  onClick={openWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
                >
                  Open {appType}
                </Button>
                <Button 
                  onClick={() => navigate("/wa-me-91")}
                  variant="outline"
                  className="w-full mt-3 border-green-600 text-green-600 hover:bg-green-50"
                >
                  Send Another Message
                </Button>
              </>
            )}
          </div>

          {/* Privacy Note */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">Privacy Notice</h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>
                    🔒 <strong>We don't store any numbers or collect your data.</strong> Your privacy is our priority. 
                    This service only helps you create WhatsApp links without storing any information on our servers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConnectingWhatsApp;
