import React from 'react';

export default function ListenNow() {
  return (
    <section className="bg-black text-white py-20 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 tracking-widest uppercase">
        Watch Our Latest Video
      </h2>

      <div className="relative w-full max-w-4xl mx-auto overflow-hidden" style={{ paddingBottom: '56.25%', height: 0 }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded"
          src="https://www.youtube.com/embed/xF9EPQw5qeg"
          title="Imperial Tide - Official Music Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <a
        href="https://lnk.to/ExistenceInCrisis"
        target="_blank"
        rel="noreferrer"
        className="btn-primary inline-block mt-10"
      >
        Listen to “Existence in Crisis”
      </a>
    </section>
  );
}
