import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className="bg-black text-white py-16 md:py-20 px-6 flex flex-col md:flex-row items-center justify-between relative z-50">
      
      {/* Left Links */}
      <nav className="flex space-x-4 text-sm md:text-base mb-4 md:mb-0">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </nav>

      {/* Center Logo (Clickable to Home) */}
      <Link
        to="/"
        className="mb-6 md:mb-0 md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2"
      >
        <img
          src="/assets/IT_TriCrown.webp"
          alt="Imperial Tide Logo"
          className="h-24 md:h-28 w-auto"
        />
      </Link>

      {/* Right Button */}
      <div className="mt-4 md:mt-0">
        <a
          href="https://store.streamelements.com/imperialtidetv"
          className="border border-white px-5 py-2 uppercase text-xs tracking-wider hover:bg-white hover:text-black transition duration-300 ease-in-out"
        >
          Buy Merch
        </a>
      </div>
    </header>
  );
}