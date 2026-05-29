'use client'

import { useState } from 'react'
import { Project } from '@/lib/types'

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const ArrowUpRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
  </svg>
)

const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14L21 3m-4 0h4v4" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17H7a4 4 0 01-4-4V7a4 4 0 014-4h6" />
  </svg>
)

function ProjectLink({
  label,
  icon,
  href,
}: {
  label: string
  icon: React.ReactNode
  href: string
}) {
  const disabled = href === '#'
  return (
    <a
      href={disabled ? undefined : href}
      aria-label={label}
      target={disabled ? undefined : '_blank'}
      rel={disabled ? undefined : 'noopener noreferrer'}
      className={[
        'inline-flex items-center gap-1 rounded-full border border-neutral-200/80 dark:border-zinc-700',
        'bg-white/70 dark:bg-zinc-800/70 px-2.5 py-1 text-xs font-medium lowercase tracking-wide',
        'text-neutral-700 dark:text-zinc-200 shadow-sm transition-all duration-150',
        'hover:border-neutral-400 dark:hover:border-zinc-500 hover:bg-white dark:hover:bg-zinc-800',
        'hover:text-neutral-900 dark:hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-200',
        disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {icon}
      <span style={{ fontFamily: "'EB Garamond', serif", fontSize: '1em' }}>{label}</span>
    </a>
  )
}

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const hasHidden = projects.some((p) => p.hidden)
  const [showAll, setShowAll] = useState(false)

  const visible = showAll ? projects : projects.filter((p) => !p.hidden)

  return (
    <section
      className="rounded-3xl border border-neutral-200/70 dark:border-zinc-800 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
      style={{ background: 'var(--card-bg)' }}
    >
      <div className="flex items-center justify-between border-b border-neutral-200/80 dark:border-zinc-700 px-4 py-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <h2
          className="section-title"
          style={{
            fontFamily: "'EB Garamond', serif",
            fontSize: 12,
            fontWeight: 700,
            color: 'var(--muted)',
            letterSpacing: '0.15em',
            textTransform: 'lowercase',
          }}
        >
          projects
        </h2>
        <div className="h-2 w-8 rounded-full bg-neutral-100 dark:bg-zinc-500" />
      </div>

      <div className="grid gap-2 px-4 py-4 md:px-6 md:py-5">
        <div className="divide-y divide-neutral-200/80 dark:divide-zinc-700/80">
          {visible.map((project, idx) => (
            <article
              key={project.title}
              className="flex flex-col gap-3 py-3 md:flex-row md:items-center md:gap-4 transition-all duration-150 hover:bg-neutral-50/60 dark:hover:bg-zinc-800/60"
              tabIndex={0}
              style={{ fontFamily: "'EB Garamond', serif", fontSize: 15 }}
            >
              <div className="flex flex-1 items-start gap-2">
                <div className="mt-1 hidden h-3 w-3 flex-none items-center justify-center rounded-full border border-neutral-200 text-[9px] text-neutral-400 md:flex">
                  <span>↘</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3
                      className="font-semibold lowercase tracking-tight text-neutral-900 dark:text-zinc-100"
                      style={{ fontFamily: "'EB Garamond', serif", fontSize: 15, fontWeight: 700 }}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <p
                    className="mt-0.5 leading-snug text-neutral-500 dark:text-zinc-400"
                    style={{ fontFamily: "'EB Garamond', serif", fontSize: 13, fontWeight: 400 }}
                  >
                    {project.subtitle ?? project.description}
                  </p>
                </div>
              </div>

              <div className="md:w-[32%]">
                <p
                  className="leading-snug text-neutral-400 dark:text-zinc-500"
                  style={{ fontFamily: "'EB Garamond', serif", fontSize: 13, fontWeight: 400 }}
                >
                  {project.meta ?? ''}
                </p>
              </div>

              <div className="flex flex-wrap justify-start gap-1.5 md:w-[28%] md:justify-end">
                <ProjectLink label="repo" icon={<GitHubIcon />} href={project.links?.repo ?? '#'} />
                <ProjectLink label="demo" icon={<ArrowUpRightIcon />} href={project.links?.demo ?? '#'} />
                <ProjectLink label="notes" icon={<LinkIcon />} href={project.links?.blog ?? '#'} />
              </div>
            </article>
          ))}
        </div>

        {hasHidden && !showAll && (
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setShowAll(true)}
              className="hover:opacity-80 text-sm lowercase"
              style={{ color: 'var(--muted)', fontFamily: "'EB Garamond', serif" }}
            >
              show more
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
