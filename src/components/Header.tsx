'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

const navLinks = ['about', 'projects', 'experience', 'writing'] as const

const navStyle = {
  fontFamily: "'Space Mono', monospace",
  letterSpacing: '0.15em',
  textTransform: 'lowercase' as const,
  fontSize: 11,
  fontWeight: 400,
  color: 'var(--text)',
}

export function Header({ name }: { name: string }) {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-30 backdrop-blur"
      style={{
        background: 'var(--header-bg)',
        borderBottom: '1px solid var(--header-border)',
      }}
    >
      <div
        className="mx-auto w-full px-5 py-3 flex items-center"
        style={{ maxWidth: 'var(--container)' }}
      >
        <Link href="/" className="flex items-center gap-2 hover:opacity-80" style={navStyle}>
          <span className="inline-block h-5 w-5 rounded-md bg-black dark:bg-white" />
          <span style={navStyle}>{name}</span>
        </Link>

        <div className="flex-1" />

        <nav className="hidden sm:flex items-center gap-6 mr-6" style={navStyle}>
          {navLinks.map((item) => (
            <Link key={item} href={`/${item}`} className="hover:opacity-80" style={navStyle}>
              {item}
            </Link>
          ))}
        </nav>

        <ThemeToggle />

        <button
          className="sm:hidden ml-4 hover:opacity-80 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ ...navStyle, fontSize: 16, lineHeight: 1 }}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <nav
          className="sm:hidden px-5 pb-4 flex flex-col gap-4 pt-3"
          style={{ borderTop: '1px solid var(--header-border)' }}
        >
          {navLinks.map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className="hover:opacity-80"
              style={navStyle}
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
