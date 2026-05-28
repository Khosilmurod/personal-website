'use client'

import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <span
      onClick={toggle}
      className="cursor-pointer hover:opacity-80"
      style={{ fontSize: 16 }}
      aria-label="toggle theme"
    >
      {isDark ? '🌙' : '☀️'}
    </span>
  )
}
