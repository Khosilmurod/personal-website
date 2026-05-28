import { Writing } from '@/lib/types'

export function WritingSection({ writing }: { writing: Writing[] }) {
  return (
    <section id="writing" className="py-6 md:py-8 space-y-3 p-6 rounded-xl card">
      <p className="section-title" style={{ color: 'var(--muted)' }}>
        writing
      </p>
      <ul className="space-y-2 text-sm">
        {writing.length > 0 ? (
          writing.map((w) => (
            <li key={w.slug}>
              <a href={w.url} className="hover:underline">
                {w.title}
              </a>
            </li>
          ))
        ) : (
          <li style={{ color: 'var(--text-secondary)' }}>coming soon...</li>
        )}
      </ul>
    </section>
  )
}
