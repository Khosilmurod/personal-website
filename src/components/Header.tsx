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
  return (
    <>
      <div
        className="fixed right-0 z-30 flex items-center"
        style={{ top: 12, paddingRight: 32 }}
      >
        <ThemeToggle />
      </div>

      <header
        className="fixed top-0 left-0 right-0 z-20 backdrop-blur"
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

          <nav className="flex items-center gap-6" style={navStyle}>
            {navLinks.map((item) => (
              <Link key={item} href={`/${item}`} className="hover:opacity-80" style={navStyle}>
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  )
}
