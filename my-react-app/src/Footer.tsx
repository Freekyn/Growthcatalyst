import { Link } from "react-router-dom";
// <-- Import social icons
import {
  Mail,
  Phone,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-10 bg-gradient-to-br from-primary-dark via-primary-light to-primary-dark text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img src={logo} alt="Growth Catalyst" className="h-12 w-auto" />
            <p className="text-sm opacity-90">
              Inspiring Minds and Transforming People
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-accent transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm hover:text-accent transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Services</h3>
            {/* // -- MODIFIED SECTION -- */}
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services#behavioral-coaching"
                  className="text-sm hover:text-accent transition-colors"
                >
                  Behavioral Coaching
                </Link>
              </li>
              <li>
                <Link
                  to="/services#leadership-development"
                  className="text-sm hover:text-accent transition-colors"
                >
                  Leadership Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services#psychometric-assessments"
                  className="text-sm hover:text-accent transition-colors"
                >
                  Psychometric Assessments
                </Link>
              </li>
              <li>
                <Link
                  to="/services#corporate-training"
                  className="text-sm hover:text-accent transition-colors"
                >
                  Corporate Training
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">
              Contact & Social
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm">
                <Mail size={16} />
                <a
                  href="mailto:sabesan.growthcatalyst@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  sabesan.growthcatalyst@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone size={16} />
                <a
                  href="tel:+919962104002"
                  className="hover:text-accent transition-colors"
                >
                  +91 9962104002
                </a>
              </li>
              {/* Social Icons in Footer */}
              <li className="flex items-center space-x-4 pt-2">
                <a
                  href="https://www.linkedin.com/in/dr-swaminathan-sabesan-330b9a17?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin
                    size={20}
                    className="hover:text-accent transition-colors"
                  />
                </a>
                <a
                  href="https://www.facebook.com/share/17jp3M1iCD/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook
                    size={20}
                    className="hover:text-accent transition-colors"
                  />
                </a>
                <a
                  href="https://www.instagram.com/sabesan_growthcatalyst?igsh=eGFhNjlnOG9sb3Zv"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram
                    size={20}
                    className="hover:text-accent transition-colors"
                  />
                </a>
                <a
                  href="https://youtube.com/@swaminathansabesan?si=8SPjFhPh1ZMEBxS8"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <Youtube
                    size={20}
                    className="hover:text-accent transition-colors"
                  />
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
