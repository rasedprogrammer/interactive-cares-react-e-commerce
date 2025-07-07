import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <div className="text-indigo-600 font-bold text-2xl tracking-wide cursor-pointer select-none">
          <Link to="/">ByteCraft</Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-600 text-sm font-medium">
          <Link to="/" className="hover:text-indigo-600 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-indigo-600 transition">
            About
          </Link>
          <Link to="/products" className="hover:text-indigo-600 transition">
            Products
          </Link>
          <Link to="/contact" className="hover:text-indigo-600 transition">
            Contact
          </Link>
          <Link to="/cart" className="hover:text-indigo-600 transition">
            Cart
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6 text-gray-500">
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-indigo-600 transition"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-indigo-600 transition"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-indigo-600 transition"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-indigo-600 transition"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>

      <div className="text-center text-gray-400 text-xs py-4 border-t border-gray-200">
        © {new Date().getFullYear()} ByteCraft. All rights reserved.
      </div>
    </footer>
  );
}
