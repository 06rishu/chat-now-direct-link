
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/live-support", label: "Live Support" },
];

interface NavLinksProps {
  onClick?: () => void; // for closing mobile menu
  className?: string;
  direction?: "vertical" | "horizontal";
}

const NavLinks = ({ onClick, className = "", direction = "horizontal" }: NavLinksProps) => {
  const location = useLocation();
  return (
    <ul className={`flex ${direction === "horizontal" ? "flex-row gap-x-6" : "flex-col gap-y-4"} ${className}`}>
      {navLinks.map((link) => (
        <li key={link.to}>
          <Link
            to={link.to}
            className={`transition-colors font-medium ${
              location.pathname === link.to
                ? "text-green-600"
                : "text-gray-700 hover:text-green-600"
            }`}
            onClick={onClick}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
