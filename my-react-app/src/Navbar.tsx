import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Case Studies", path: "/casestudies" },
    { name: "Current Projects", path: "/current-projects" },
    { name: "Certifications", path: "/certifications" },
    { name: "Media", path: "/media" },
    { name: "Awards", path: "/awards" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className= "bg-white/60 backdrop-blur-xl sticky top-0 z-50 shadow-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Growth Catalyst" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm text-black font-semibold transition-colors hover:text-blue-800 ${
                  isActive(link.path)
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              variant="secondary"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 bg-white border-t border-gray-200 mt-2">
            <div className="flex flex-col space-y-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium transition-colors py-2 px-4 rounded-lg hover:bg-gray-50 ${
                    isActive(link.path)
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium mt-2"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
