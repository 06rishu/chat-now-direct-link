
import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NavLinks from "../NavLinks";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
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
            <span className="text-lg font-semibold text-gray-900">Wa Me 91</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavLinks />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${menuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${menuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="pt-4">
              <NavLinks />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
