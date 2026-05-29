'use client'

import { useEffect } from 'react'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const isLaptop = window.matchMedia('(min-width: 1024px)').matches
    if (!isLaptop) {
      document.documentElement.classList.add('dark')
      return
    }
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      document.documentElement.classList.add('dark')
    } else if (saved === 'light') {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return <>{children}</>
}
