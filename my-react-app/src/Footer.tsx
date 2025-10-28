import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img src={logo} alt="Growth Catalyst" className="h-12 w-auto" />
            <p className="text-sm opacity-90">
              Empowering Growth, Enriching Lives
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm opacity-90">Behavioral Coaching</li>
              <li className="text-sm opacity-90">Leadership Development</li>
              <li className="text-sm opacity-90">Psychometric Assessments</li>
              <li className="text-sm opacity-90">Corporate Training</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm">
                <Mail size={16} />
                <a href="mailto:info@growthcatalyst.com" className="hover:text-accent transition-colors">
                  info@growthcatalyst.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone size={16} />
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Linkedin size={16} />
                <a href="#" className="hover:text-accent transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-75">
            © {new Date().getFullYear()} Growth Catalyst. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
