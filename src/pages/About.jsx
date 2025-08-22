import React from 'react';

export default function About() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="space-y-6 text-base leading-relaxed text-gray-300">
          <p>
            Imperial Tide is an unholy union of terrifying riffs, booming bass,
            bombastic breakdowns and shrieking wails emanating off the cavernous
            walls of the Las Vegas valley. Championing an independent mindset in
            all aspects of their musical empire, Imperial Tide built their
            kingdom from the ground up, and infused it with a passion unrivaled
            but often imitated in the dusty desert they call home.
          </p>
          <p>
            They screen-print their moniker on their own t-shirts, hang it on the
            banisters they build from scratch, and conceptualize visual metaphors
            they film themselves. These childhood friends have mined the depths
            of emotional turmoil and existential crisis in order to create music
            that challenges convention and alters perceptions, screaming in
            defiance at any and all who try to oppose their reign.
          </p>
          <p className="text-white font-bold">
            Imperial Tide joins Mascot Records, with the debut release of the EP
            “Existence In Crisis” out now!
          </p>
          <p className="italic text-sm text-gray-500">Tide or die.</p>
        </div>

        {/* Right: Promo Image */}
        <div>
          <img
            src="/assets/promo-pic.webp"
            alt="Imperial Tide Promo"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}