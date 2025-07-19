import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NavLinks from "../NavLinks";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="container mx-auto px-4 py-6 relative">
      <div className="flex items-center justify-between">
        {/* Logo, clickable */}
        <button
          type="button"
          className="flex items-center space-x-2 focus:outline-none"
          onClick={() => navigate("/")}
          aria-label="Go to homepage"
        >
          <div className="bg-green-500 p-2 rounded-full transition-transform duration-300 hover:scale-110 shadow-lg">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-800">Wa Me 91</span>
        </button>
        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <NavLinks className="items-center" direction="horizontal" />
        </nav>
        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            className={`relative z-30 p-2 rounded-full bg-green-100 hover:bg-green-200 focus:outline-none transition`}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {/* Hamburger icon animation */}
            <span className="sr-only">Toggle navigation</span>
            <div className="w-6 h-6 relative flex flex-col justify-center items-center">
              <span
                className={`block absolute h-0.5 w-6 bg-green-700 rounded transition-all duration-300 ${
                  menuOpen ? "rotate-45 top-2.5" : "-translate-y-2"
                }`}
              />
              <span
                className={`block absolute h-0.5 w-6 bg-green-700 rounded transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block absolute h-0.5 w-6 bg-green-700 rounded transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -top-2.5" : "translate-y-2"
                }`}
              />
            </div>
          </button>
        </div>
      </div>
      {/* Mobile Nav Drawer */}
      <div
        className={`fixed inset-0 bg-black/40 z-20 transition-opacity ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-30 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 animate-fade-in`}
        style={{ transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }}
        aria-label="Mobile navigation"
      >
        <div className="p-6 pt-8 flex flex-col h-full">
          {/* Close btn */}
          <button
            className="self-end mb-8 p-2 text-gray-400 hover:text-green-600"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <NavLinks
            direction="vertical"
            className="space-y-2"
            onClick={() => setMenuOpen(false)}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
