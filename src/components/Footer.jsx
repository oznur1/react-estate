import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white text-center py-8 mt-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Logo veya Başlık */}
        <h2 className="text-xl font-semibold mb-2">Estate</h2>

        {/* Bağlantılar */}
        <div className="flex justify-center space-x-6 mb-4">
          <Link to="/" className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300 transition">
            About
          </Link>
          <Link to="/projects" className="hover:text-gray-300 transition">
            Projects
          </Link>
          <Link to="/testimonials" className="hover:text-gray-300 transition">
            Testimonials
          </Link>
          <Link to="/contact" className="hover:text-gray-300 transition">
            Contact
          </Link>
        </div>

        {/* Alt bilgi */}
        <p className="text-xs text-gray-200">
          © {new Date().getFullYear()} Estate. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
