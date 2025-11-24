// TypeScript interfaces for the personal website

export interface Project {
  title: string;
  description: string;
  url?: string;
  hidden?: boolean;
  subtitle?: string;
  meta?: string;
  links?: {
    repo?: string;
    demo?: string;
    blog?: string;
  };
}

export interface Experience {
  position: string;
  company: string;
  year: string;
  url?: string;
}

export interface Writing {
  title: string;
  url: string;
  slug: string;
  content?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface SiteData {
  personal: PersonalInfo;
  projects: Project[];
  experience: Experience[];
  writing: Writing[];
}