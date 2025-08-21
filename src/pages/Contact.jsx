import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'

export default function Contact(){
  const [sent, setSent] = useState(false)
  const onSubmit = async (e) => {
    e.preventDefault()
    await new Promise(r => setTimeout(r, 400))
    setSent(true)
  }
  return (
    <section className="container-narrow py-16 md:py-24">
      <Helmet><title>Contact — Imperial Tide Fan Clone</title></Helmet>
      <h1 className="font-display uppercase tracking-widest2 text-4xl">Contact</h1>
      <p className="mt-3 text-gray-300">Send a note. (Wire this to a real service later.)</p>
      {sent ? (
        <p className="mt-6 text-emerald-300">Thanks! We&apos;ll be in touch.</p>
      ) : (
        <form onSubmit={onSubmit} className="mt-8 grid gap-4 max-w-xl">
          <input className="px-4 py-3 rounded bg-black/60 border border-white/20" placeholder="Name" required />
          <input type="email" className="px-4 py-3 rounded bg-black/60 border border-white/20" placeholder="Email" required />
          <textarea rows="5" className="px-4 py-3 rounded bg-black/60 border border-white/20" placeholder="Message" required></textarea>
          <button className="px-5 py-3 rounded bg-white text-black uppercase tracking-widest hover:opacity-90 w-max" type="submit">
            Send
          </button>
        </form>
      )}
    </section>
  )
}
