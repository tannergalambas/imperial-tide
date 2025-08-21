import React from 'react'
import ListenNow from './ListenNow'

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10">
        <img src="/assets/hero.jpg" alt="" className="w-full h-full object-cover opacity-40"/>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black"></div>
      </div>
      <div className="container-narrow py-24 md:py-40 text-center">
        <p className="uppercase tracking-widest text-sm text-gray-300">Latest Single</p>
        <h1 className="mt-2 font-display uppercase text-5xl md:text-7xl leading-tight">Off The Leash</h1>
        <p className="mt-6 max-w-2xl mx-auto text-gray-300">
          A heavy, high-energy single. Stream it now on your platform of choice.
        </p>
        <div className="mt-10">
          <ListenNow />
        </div>
      </div>
    </section>
  )
}
