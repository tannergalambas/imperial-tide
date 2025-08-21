import React, { useState } from 'react'

export default function MailingList(){
  const [status, setStatus] = useState('idle')
  const [email, setEmail] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    if(!email) return
    try {
      // Placeholder: you can wire this up to Mailchimp, Beehiiv, ConvertKit, etc.
      await new Promise(r => setTimeout(r, 500))
      setStatus('success')
    } catch(err) {
      setStatus('error')
    }
  }

  return (
    <section className="border-t border-white/10 bg-white/5">
      <div className="container-narrow py-16 md:py-24">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="font-display uppercase text-2xl tracking-widest2">Get exclusive access first</h3>
          <p className="mt-2 text-gray-300">Join the list and never miss a drop.</p>
          {status === 'success' ? (
            <p className="mt-6 text-emerald-300">Thank you! You&apos;re on the list.</p>
          ) : (
            <form onSubmit={onSubmit} className="mt-6 flex items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
                placeholder="Email address"
                className="flex-1 px-4 py-3 rounded bg-black/60 border border-white/20 focus:outline-none focus:ring focus:ring-white/30"
              />
              <button className="px-5 py-3 rounded bg-white text-black uppercase tracking-widest hover:opacity-90" type="submit">
                Join
              </button>
            </form>
          )}
          {status === 'error' && <p className="text-red-400 mt-3">Something went wrong. Try again.</p>}
          <p className="mt-3 text-xs text-gray-400">We respect your privacy.</p>
        </div>
      </div>
    </section>
  )
}
