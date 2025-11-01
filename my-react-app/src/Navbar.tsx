import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// 1. Import the Linkedin icon
import { Menu, X, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
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
    <nav className="bg-white/60 backdrop-blur-xl sticky top-0 z-50 shadow-xl">
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
            {/* Social Icons for Desktop */}
            <div className="flex items-center gap-4 pl-4">
              {/* 2. ADDED LinkedIn Icon for desktop */}
              <a
                href="https://www.linkedin.com/in/dr-swaminathan-sabesan-330b9a17?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-gray-700 hover:text-blue-700 transition-colors" />
              </a>
              <a
                href="https://www.facebook.com/share/17jp3M1iCD/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-gray-700 hover:text-blue-600 transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/sabesan_growthcatalyst?igsh=eGFhNjlnOG9sb3Zv"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-gray-700 hover:text-pink-500 transition-colors" />
              </a>
              <a
                href="https://youtube.com/@swaminathansabesan?si=8SPjFhPh1ZMEBxS8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-gray-700 hover:text-red-600 transition-colors" />
              </a>
            </div>
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
              {/* Social Icons for Mobile */}
              <div className="flex justify-center items-center gap-6 pt-4 border-t mt-4">
                {/* 3. ADDED LinkedIn Icon for mobile */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6 text-gray-700 hover:text-blue-700 transition-colors" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6 text-gray-700 hover:text-blue-600 transition-colors" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6 text-gray-700 hover:text-pink-500 transition-colors" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <Youtube className="h-6 w-6 text-gray-700 hover:text-red-600 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
