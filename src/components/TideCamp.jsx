import React from 'react'

export default function TideCamp(){
  const items = [
    'New tracks', 'Exclusive content', 'Scheduled drops', 'Special edition merch',
    'Video series', 'Collaborations', 'Shows', 'Discounts', 'and more'
  ]
  return (
    <section className="border-t border-white/10">
      <div className="container-narrow py-16 md:py-24">
        <h2 className="font-display uppercase tracking-widest2 text-3xl text-center">Tide Camp</h2>
        <p className="text-center text-gray-300 mt-3">Get early access and exclusives.</p>
        <ul className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-200">
          {items.map(x => (
            <li key={x} className="flex items-center gap-3">
              <span className="inline-block w-2 h-2 bg-white rounded-full"></span>
              <span className="uppercase tracking-widest text-sm">{x}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
