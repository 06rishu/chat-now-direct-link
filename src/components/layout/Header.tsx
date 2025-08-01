
import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NavLinks from "../NavLinks";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Make header sticky after scrolling 400px (past video call card)
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${isSticky ? 'fixed' : 'relative'} top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm transition-all duration-300`}>
      <div className="container mx-auto px-4 py-4">
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
              className={`relative z-50 p-2 rounded-full bg-green-100 hover:bg-green-200 focus:outline-none transition`}
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
      </div>
      
      {/* Mobile Nav Drawer - Only visible on mobile when menu is open */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />
      <nav
        className={`md:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        aria-label="Mobile navigation"
      >
        <div className="p-6 pt-20 flex flex-col h-full">
          {/* Close btn */}
          <button
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-green-600"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <NavLinks
            direction="vertical"
            className="space-y-4"
            onClick={() => setMenuOpen(false)}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
