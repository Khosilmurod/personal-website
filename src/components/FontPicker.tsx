'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const backgrounds = [
  { name: 'alexander',    src: '/alexander.jpg' },
  { name: 'athens school', src: '/athens_school.jpeg' },
  { name: 'none',         src: null },
]

export function FontPicker() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('/alexander.jpg')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  function pick(src: string | null) {
    setSelected(src ?? '')
    document.documentElement.style.setProperty(
      '--bg-image',
      src ? `url('${src}')` : 'none'
    )
    setOpen(false)
  }

  const thumbW = isMobile ? 40 : 56
  const thumbH = isMobile ? 26 : 36

  return (
    <div style={{ position: 'fixed', bottom: 20, left: 20, zIndex: 100 }}>
      {open && (
        <div
          style={{
            background: 'var(--card-bg)',
            backdropFilter: 'blur(12px)',
            border: '1px solid var(--header-border)',
            borderRadius: 10,
            padding: isMobile ? '8px' : '10px',
            marginBottom: 8,
            boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? 4 : 8,
          }}
        >
          <div style={{
            fontSize: 9,
            letterSpacing: '0.12em',
            color: 'var(--muted)',
            fontFamily: 'var(--font-space-mono), monospace',
            textTransform: 'uppercase',
            paddingBottom: 2,
          }}>
            background
          </div>
          {backgrounds.map(bg => (
            <button
              key={bg.name}
              onClick={() => pick(bg.src)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: isMobile ? 8 : 10,
                padding: isMobile ? '4px 6px' : '6px 8px',
                background: selected === (bg.src ?? '') ? 'rgba(128,128,128,0.15)' : 'transparent',
                border: selected === (bg.src ?? '') ? '1px solid rgba(128,128,128,0.3)' : '1px solid transparent',
                borderRadius: 7,
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              {bg.src ? (
                <Image
                  src={bg.src}
                  alt={bg.name}
                  width={thumbW}
                  height={thumbH}
                  style={{ borderRadius: 4, objectFit: 'cover', objectPosition: 'center', flexShrink: 0 }}
                />
              ) : (
                <div style={{
                  width: thumbW, height: thumbH, borderRadius: 4,
                  background: 'rgba(128,128,128,0.1)',
                  border: '1px dashed rgba(128,128,128,0.3)',
                  flexShrink: 0,
                }} />
              )}
              <span style={{
                fontSize: isMobile ? 10 : 11,
                fontFamily: 'var(--font-space-mono), monospace',
                color: 'var(--text-secondary)',
                letterSpacing: '0.05em',
              }}>
                {bg.name}
              </span>
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(o => !o)}
        title="change background"
        style={{
          background: 'var(--card-bg)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--header-border)',
          borderRadius: '50%',
          width: 32,
          height: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: 'var(--text-secondary)',
          padding: 0,
        }}
      >
        {open ? (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="1" y1="1" x2="11" y2="11" /><line x1="11" y1="1" x2="1" y2="11" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="1" width="12" height="12" rx="2" />
            <circle cx="4.5" cy="4.5" r="1" fill="currentColor" stroke="none" />
            <polyline points="1,10 4,7 7,9 10,5 13,8" />
          </svg>
        )}
      </button>
    </div>
  )
}
