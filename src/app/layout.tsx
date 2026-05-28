import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Header } from '@/components/Header'
import { FontPicker } from '@/components/FontPicker'
import './globals.css'

export const metadata: Metadata = {
  title: 'khosilmurod — engineer',
  description: 'cs @ yale. building drones for farms.',
  openGraph: {
    title: 'khosilmurod — engineer',
    description: 'cs @ yale. building drones for farms.',
    url: 'https://www.khosilmurod.com',
    siteName: 'khosilmurod',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'khosilmurod — engineer',
    description: 'cs @ yale. building drones for farms.',
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.remove('dark')}}catch(e){}`,
          }}
        />
      </head>
      <body
        className="antialiased"
        style={{ background: 'var(--bg)', color: 'var(--text)' }}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Header name="khosilmurod" />
          <FontPicker />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
