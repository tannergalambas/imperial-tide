import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className="bg-black text-white py-16 md:py-20 px-6 flex items-center justify-between relative z-50">
      
      {/* Left Links */}
      <nav className="flex space-x-6 text-sm md:text-base absolute left-[20%] top-1/2 transform -translate-y-1/2">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </nav>

      {/* Center Logo */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          src="/assets/IT_TriCrown.webp"
          alt="Imperial Tide Logo"
          className="h-24 md:h-28 w-auto"
        />
      </div>

      {/* Right Button */}
      <div className="absolute right-[20%] top-1/2 transform -translate-y-1/2">
        <a
          href="#"
          className="border border-white px-5 py-2 uppercase text-xs tracking-wider hover:bg-white hover:text-black transition"
        >
          Buy Merch
        </a>
      </div>
    </header>
  );
}