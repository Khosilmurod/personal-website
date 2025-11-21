// TypeScript interfaces for the personal website

export interface Project {
  title: string;
  description: string;
  hidden?: boolean;
}

export interface Experience {
  position: string;
  company: string;
  year: string;
}

export interface Writing {
  title: string;
  url: string;
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