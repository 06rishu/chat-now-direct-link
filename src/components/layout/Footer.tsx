
import { MessageCircle } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-4">
          {/* Logo, clickable */}
          <button
            type="button"
            className="flex items-center focus:outline-none"
            onClick={() => navigate("/")}
            aria-label="Go to homepage"
          >
            <div className="bg-green-500 p-2 rounded-full mr-3">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold">Wa Me 91</span>
          </button>
        </div>

        {/* Footer Links */}
        <nav className="mb-4">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-gray-300 text-sm font-medium">
            <li>
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link to="/live-support" className="hover:text-white transition-colors">Live Support</Link>
            </li>
          </ul>
        </nav>

        <p className="text-gray-400 text-sm mb-4">
          The easiest way to WhatsApp direct chat in India
        </p>
        <div className="text-xs text-gray-500 border-t border-gray-700 pt-4">
          <p className="mb-2">
            <i className="fas fa-flag mr-2"></i>
            <i className="fas fa-heart text-red-500 mx-1"></i>
            2024 Wa Me 91. Made in India <i className="fas fa-flag"></i>
          </p>
          <p className="text-yellow-300">
            <strong>Note:</strong> This is not affiliated with WhatsApp Inc. This is an independent tool.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
