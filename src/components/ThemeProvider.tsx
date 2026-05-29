'use client'

import { useEffect } from 'react'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      document.documentElement.classList.add('dark')
    } else if (saved === 'light') {
      document.documentElement.classList.remove('dark')
    }
    // no saved preference → keep the default .dark from the inline script
  }, [])

  return <>{children}</>
}
