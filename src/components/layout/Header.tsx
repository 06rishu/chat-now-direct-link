
import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        {/* Logo, clickable */}
        <button
          type="button"
          className="flex items-center space-x-2 focus:outline-none"
          onClick={() => navigate("/")}
          aria-label="Go to homepage"
        >
          <div className="bg-green-500 p-2 rounded-full">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-800">Wa Me 91</span>
        </button>
        <div className="flex items-center space-x-1 text-green-600 font-semibold">
          <i className="fas fa-globe text-sm"></i>
          <span className="text-sm sm:text-base">Instant Global Connection</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
