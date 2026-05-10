'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="#"
          className="font-display font-black text-2xl text-brown-dark tracking-tight"
        >
          BC
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brown-mid">
          <Link
            href="#despre"
            className="hover:text-terracotta transition-colors"
          >
            Despre
          </Link>
          <Link
            href="#colaborari"
            className="hover:text-terracotta transition-colors"
          >
            Colaborări
          </Link>
          <Link
            href="#continut"
            className="hover:text-terracotta transition-colors"
          >
            Conținut
          </Link>
          <Link
            href="#contact"
            className="bg-terracotta text-cream px-5 py-2 rounded-full hover:bg-terracotta-dark transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="md:hidden">
          <Link
            href="#contact"
            className="bg-terracotta text-cream px-4 py-2 rounded-full text-sm font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
