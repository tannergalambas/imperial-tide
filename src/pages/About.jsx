import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function About(){
  return (
    <section className="container-narrow py-16 md:py-24">
      <Helmet>
        <title>About — Imperial Tide Fan Clone</title>
      </Helmet>
      <h1 className="font-display uppercase tracking-widest2 text-4xl">About</h1>
      <p className="mt-6 text-gray-300 leading-relaxed">
        This is a fan-built clone that recreates the structure and feel of the official Imperial Tide site using React and Tailwind CSS.
        Replace placeholder assets and copy with your own content.
      </p>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="p-5 border border-white/10 rounded-lg bg-white/5">
          <h2 className="uppercase tracking-widest text-sm text-gray-300">Stack</h2>
          <ul className="mt-2 list-disc list-inside text-gray-200">
            <li>React + Vite</li>
            <li>Tailwind CSS</li>
            <li>React Router</li>
          </ul>
        </div>
        <div className="p-5 border border-white/10 rounded-lg bg-white/5">
          <h2 className="uppercase tracking-widest text-sm text-gray-300">Pages</h2>
          <ul className="mt-2 list-disc list-inside text-gray-200">
            <li>Home (Hero + Listen Now + Tide Camp + Mailing List)</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
