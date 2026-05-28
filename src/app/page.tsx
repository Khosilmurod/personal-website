import { siteData } from '@/lib/data'
import { HeroSection } from '@/components/HeroSection'
import { ExperienceSection } from '@/components/ExperienceSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { WritingSection } from '@/components/WritingSection'
import { ContactSection } from '@/components/ContactSection'
import { FractalTreeWrapper } from '@/components/FractalTreeWrapper'

export default function Home() {
  const { personal, projects, experience, writing } = siteData

  return (
    <>
      <FractalTreeWrapper />
      <main
        id="top"
        className="mx-auto w-full px-5 pt-16 pb-16 space-y-4"
        style={{ maxWidth: 'var(--container)' }}
      >
        <HeroSection personal={personal} />
        <ExperienceSection experience={experience} />
        <ProjectsSection projects={projects} />
        <WritingSection writing={writing} />
        <ContactSection personal={personal} />
      </main>
    </>
  )
}
