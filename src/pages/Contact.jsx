import React from 'react';

export default function Contact() {
  return (
    <section className="bg-black text-white py-20 px-6 text-center min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-widest">
          Get In Touch
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12">
          For general inquiries, press, booking, or anything else — reach out using the form below.
        </p>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-black border border-white text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-white/20"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-black border border-white text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-white/20"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 bg-black border border-white text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-white/20"
          ></textarea>
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 border border-white text-white hover:bg-white hover:text-black uppercase tracking-widest transition"
          >
            Send Message
          </button>
        </form>

        <p className="mt-6 text-xs text-gray-500 italic">
          *This is a placeholder form. Replace with Mailchimp embed when ready.
        </p>
      </div>
    </section>
  );
}
