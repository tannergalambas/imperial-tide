import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar(){
  const [open, setOpen] = useState(false)

  const NavItem = ({to, children}) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({isActive}) => `px-4 py-2 tracking-widest uppercase ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}
    >
      {children}
    </NavLink>
  )

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/70 border-b border-white/10">
      <div className="container-narrow flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3 no-underline">
          <img src="/assets/logo.svg" alt="Logo" className="w-8 h-8" />
          <span className="font-display tracking-widest2 uppercase text-lg">Imperial Tide</span>
        </Link>
        <button className="md:hidden p-2 border border-white/20 rounded" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className="sr-only">Menu</span>☰
        </button>
        <nav className="hidden md:flex items-center">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <a className="ml-2 px-4 py-2 rounded border border-white/30 hover:bg-white hover:text-black transition uppercase tracking-widest"
             href="https://imperialtide.bandcamp.com/merch" target="_blank" rel="noreferrer">
            Buy Merch
          </a>
        </nav>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="container-narrow flex flex-col py-2">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/contact">Contact</NavItem>
            <a className="px-4 py-2 tracking-widest uppercase text-gray-300 hover:text-white"
               href="https://imperialtide.bandcamp.com/merch" target="_blank" rel="noreferrer">
              Buy Merch
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
