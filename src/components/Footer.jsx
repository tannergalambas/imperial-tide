import React from 'react'

const socials = [
  { name: 'Instagram', href: 'https://www.instagram.com/imperialtide/' },
  { name: 'Facebook', href: 'https://www.facebook.com/ImperialTide' },
  { name: 'YouTube', href: 'https://www.youtube.com/@ImperialTide' },
  { name: 'Spotify', href: 'https://open.spotify.com/artist/1FAmQXVtc3nHpsWoDOPMxA' },
  { name: 'Apple Music', href: 'https://music.apple.com/us/artist/imperial-tide/1218180216' },
]

export default function Footer(){
  return (
    <footer className="border-t border-white/10">
      <div className="container-narrow py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-400">&copy; <span id="year">{new Date().getFullYear()}</span> Fan-made clone. Not affiliated.</p>
        <div className="flex gap-4 flex-wrap justify-center">
          {socials.map(s => (
            <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white uppercase tracking-widest text-xs no-underline">
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
