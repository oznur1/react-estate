import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './button';
import logo from '../assets/logo.svg';
import { HiX, HiMenu } from "react-icons/hi";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-5 z-50 bg-transparent backdrop-blur-sm">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </Link>
      </div>

      {/* Navigation (masaüstü) */}
      <nav className="hidden md:flex space-x-8 text-white font-medium uppercase tracking-wide">
        <Link to="/" className="hover:text-blue-300 transition-colors">Home</Link>
        <Link to="/about" className="hover:text-blue-300 transition-colors">About</Link>
        <Link to="/project" className="hover:text-blue-300 transition-colors">Projects</Link>
        <Link to="/testimoniols" className="hover:text-blue-300 transition-colors">Testimonials</Link>
      </nav>

      {/* Hamburger / X icon (mobil) */}
      <div className="md:hidden flex items-center bg-white">
        <button onClick={() => setOpen(!open)}>
          {open ? (
            <HiX className="text-white" size={28} />
          ) : (
            <HiMenu className="text-white" size={28} />
          )}
        </button>
      </div>

      {/* Button (masaüstü) */}
      <div className="hidden md:flex flex-shrink-0">
        <Button label="Sign up" />
      </div>

      {/* Mobil menü */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-black/70 backdrop-blur-md flex flex-col items-center space-y-6 py-6 md:hidden  bg-white">
          <Link to="/" className="text-white text-lg uppercase" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" className="text-white text-lg uppercase" onClick={() => setOpen(false)}>About</Link>
          <Link to="/project" className="text-white text-lg uppercase" onClick={() => setOpen(false)}>Projects</Link>
          <Link to="/testimoniols" className="text-white text-lg uppercase" onClick={() => setOpen(false)}>Testimonials</Link>
          <Button label="Sign up" />
        </div>
      )}
    </header>
  );
};

export default Header;
