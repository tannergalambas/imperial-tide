import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaTwitch,
  FaFacebookF,
  FaTwitter,
  FaSoundcloud,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-4 text-center">
      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-6 text-2xl">
        <a href="https://www.instagram.com/imperialtide" aria-label="Instagram" className="hover:opacity-70">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/user/imperialtide" aria-label="YouTube" className="hover:opacity-70">
          <FaYoutube />
        </a>
        <a href="http://twitch.tv/imperialtidetv" aria-label="Twitch" className="hover:opacity-70">
          <FaTwitch />
        </a>
        <a href="https://www.facebook.com/ImperialTide/" aria-label="Facebook" className="hover:opacity-70">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com/imperialtide" aria-label="Twitter" className="hover:opacity-70">
          <FaTwitter />
        </a>
        <a href="https://soundcloud.com/imperial-tide" aria-label="SoundCloud" className="hover:opacity-70">
          <FaSoundcloud />
        </a>
      </div>

      {/* Top Divider Line */}
      <hr className="border-t border-white mb-10 w-full max-w-4xl mx-auto" />

      {/* Tide Life Banner */}
      <img
        src="/assets/Tide-life-Banner-1000x250.webp"
        alt="Tide Life Banner"
        className="mx-auto w-[300px] md:w-[500px] lg:w-[600px] mb-6"
      />

      {/* Description */}
      <p className="mb-8 text-sm md:text-base text-gray-300">
        Get exclusive access to everything Imperial Tide first.
      </p>

      {/* Email Form */}
      <form className="flex justify-center flex-wrap gap-4 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full sm:w-auto px-4 py-3 bg-black border border-white text-white placeholder-gray-500 focus:outline-none"
        />
        <button
          type="submit"
          className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black uppercase text-sm tracking-wide"
        >
          Join
        </button>
      </form>

      {/* Privacy Notice */}
      <p className="mt-6 text-xs text-gray-400">We respect your privacy.</p>

      {/* Bottom Divider Line */}
      <hr className="border-t border-white mt-10 w-full max-w-4xl mx-auto" />

      {/* Mascot Logo */}
      <div className="mt-12">
        <img
          src="/assets/mascotlogo.webp"
          alt="Mascot Records"
          className="mx-auto w-80 md:w-[22rem]"
        />
      </div>
    </footer>
  );
}