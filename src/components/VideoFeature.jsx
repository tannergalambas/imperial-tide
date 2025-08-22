import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/IT-B&W.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <div className="w-full max-w-4xl">
          {/* Embedded YouTube Video */}
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/xF9EPQw5qeg"
              title="Imperial Tide - King of the Gutter"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* CTA Link */}
          <a
            href="https://imperialtide.bandcamp.com"
            className="inline-block mt-8 text-white text-lg underline hover:text-gray-300 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Listen to <em>"Existence in Crisis"</em>
          </a>
        </div>
      </div>
    </section>
  );
}