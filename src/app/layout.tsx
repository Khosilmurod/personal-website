import type { Metadata } from 'next'
import { EB_Garamond } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Header } from '@/components/Header'
import './globals.css'

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-eb-garamond',
})

export const metadata: Metadata = {
  title: 'khosilmurod — engineer',
  description: 'minimal, fast personal site for a developer.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${ebGaramond.variable}`} suppressHydrationWarning>
      <head>
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')!=='light'){document.documentElement.classList.add('dark')}}catch(e){document.documentElement.classList.add('dark')}`,
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
