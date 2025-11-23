import { SiteData } from './types';

export const siteData: SiteData = {
  personal: {
    name: "khosilmurod",
    title: "software engineer",
    bio: "i am a computer science student at yale university. my work focuses on software engineering, systems programming, and ai infrastructure (especially backend services in c++ and python). i would like to help build the backend systems and infrastructure that power large-scale products, from core services to ai platforms.",
    email: "m.abdukholikov@yale.edu",
    linkedin: "https://linkedin.com/in/khosilmurod",
    github: "https://github.com/khosilmurod"
  },
  
  projects: [
    {
      title: "yale-gpt",
      description: "ai assistant for yale campus information"
    },
    {
      title: "weensyos operating system",
      description: "virtual memory in toy operating system"
    },
    {
      title: "point-of-sale system",
      description: "full-stack pos for managing sales, inventory"
    },
    {
      title: "asteroids game",
      description: "game engine for asteroids shooter game"
    },
    {
      title: "smart vase!",
      description: "embedded systems smart plant vase",
      hidden: true
    },
    // {
    //   title: "cursor-tools",
    //   description: "tiny macos utilities for cursor automation",
    //   hidden: true
    // }
  ],

  experience: [
    {
      position: "undergraduate researcher",
      company: "interactive machines group @ yale",
      year: "2025"
    },
    {
      position: "student programmer",
      company: "levy decision lab @ yale",
      year: "2025"
    },
    {
      position: "full stack developer",
      company: "star jewelry",
      year: "2021"
    },
    {
      position: "software engineer",
      company: "pdp.uz",
      year: "2021"
    }
  ],

  writing: [
    {
      title: "how i designed yale-gpt to feel fast and simple",
      url: "blog/yale-gpt-design.html",
      slug: "yale-gpt-design"
    },
    {
      title: "what i learned from modifying an operating system",
      url: "blog/operating-system-lessons.html",
      slug: "operating-system-lessons"
    },
    {
      title: "building tools for communities without internet",
      url: "blog/offline-communication-tools.html",
      slug: "offline-communication-tools"
    }
  ]
};