import { Personal } from '@/lib/types'

export function ContactSection({ personal }: { personal: Personal }) {
  return (
    <section id="contact" className="py-6 md:py-8 space-y-3 p-6 rounded-xl card mb-8">
      <p className="section-title">contact</p>
      <p className="text-base max-w-prose" style={{ color: 'var(--text)' }}>
        say hi at{' '}
        <a
          href={`mailto:${personal.email}`}
          className="underline hover:opacity-80"
          style={{ color: 'var(--text)' }}
        >
          {personal.email}
        </a>{' '}
        or find me on{' '}
        <a
          href={personal.linkedin}
          className="underline hover:opacity-80"
          style={{ color: 'var(--text)' }}
        >
          linkedin
        </a>{' '}
        and{' '}
        <a
          href={personal.github}
          className="underline hover:opacity-80"
          style={{ color: 'var(--text)' }}
        >
          github
        </a>
        .
      </p>
    </section>
  )
}
