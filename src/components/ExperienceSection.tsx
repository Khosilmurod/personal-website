import { Experience } from '@/lib/types'

export function ExperienceSection({ experience }: { experience: Experience[] }) {
  return (
    <section id="experience" className="py-6 md:py-8 space-y-6 p-6 rounded-xl card mb-2">
      <p className="section-title" style={{ color: 'var(--muted)' }}>
        experience
      </p>
      <ul className="space-y-3">
        {experience.map((exp) => (
          <li
            key={`${exp.company}-${exp.year}`}
            className="flex items-baseline text-sm relative"
          >
            <span className="font-medium w-64 flex-shrink-0">{exp.company}</span>
            <span className="w-56 ml-16 flex-shrink-0" style={{ color: 'var(--text-secondary)' }}>
              {exp.position}
            </span>
            <span className="flex-1 ml-3 text-right" style={{ color: 'var(--text-tertiary)' }}>
              {exp.year}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
