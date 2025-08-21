import React from 'react'

const links = [
  { name: 'Spotify', href: 'https://open.spotify.com/artist/1FAmQXVtc3nHpsWoDOPMxA' },
  { name: 'Apple Music', href: 'https://music.apple.com/us/artist/imperial-tide/1218180216' },
  { name: 'YouTube', href: 'https://www.youtube.com/@ImperialTide' },
  { name: 'All Links', href: 'https://lnk.to/ImperialTide' },
]

export default function ListenNow(){
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {links.map(l => (
        <a key={l.name}
           href={l.href}
           target="_blank"
           rel="noreferrer"
           className="px-5 py-3 rounded border border-white/30 hover:bg-white hover:text-black transition uppercase tracking-widest text-sm no-underline">
          {l.name}
        </a>
      ))}
    </div>
  )
}
