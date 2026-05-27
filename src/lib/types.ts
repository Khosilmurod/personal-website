export interface Personal {
  name: string
  title: string
  bio: string
  email: string
  linkedin: string
  github: string
}

export interface Project {
  title: string
  description: string
  subtitle?: string
  meta?: string
  hidden?: boolean
  url?: string
  links?: {
    repo?: string
    demo?: string
    blog?: string
  }
}

export interface Experience {
  position: string
  company: string
  year: string
  url?: string
}

export interface Writing {
  title: string
  url: string
  slug: string
  content?: string
}

export interface SiteData {
  personal: Personal
  projects: Project[]
  experience: Experience[]
  writing: Writing[]
}
