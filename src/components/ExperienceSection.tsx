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
            key={`${exp.company}-${exp.position}`}
            className="flex items-baseline text-sm relative"
          >
            <span className="font-medium w-64 flex-shrink-0">{exp.company}</span>
            <span className="ml-16 flex-shrink-0" style={{ color: 'var(--text-secondary)' }}>
              {exp.position}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
