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
      description: "ai assistant for yale campus information",
      subtitle: "ai assistant for yale campus information",
      meta: "c++, python · infra, rag, search",
      links: { repo: "#", demo: "#", blog: "#" }
    },
    {
      title: "weensyos operating system",
      description: "virtual memory in toy operating system",
      subtitle: "virtual memory in toy operating system",
      meta: "c · paging, isolation, processes",
      links: { repo: "https://github.com/Khosilmurod/WeensyOS", demo: "#", blog: "#" }
    },
    {
      title: "point-of-sale system",
      description: "full-stack pos for managing sales, inventory",
      subtitle: "full-stack pos for managing sales, inventory",
      meta: "spring boot, react · postgres, mongo",
      links: { repo: "https://github.com/Khosilmurod/pos-system", demo: "#", blog: "#" }
    },
    {
      title: "space invaders",
      description: "game engine for asteroids shooter game",
      subtitle: "game engine for asteroids shooter game",
      meta: "c++ · sdl2, custom engine",
      links: { repo: "https://github.com/Khosilmurod/space-invaders", demo: "#", blog: "#" }
    },
    {
      title: "smart vase!",
      description: "embedded systems smart plant vase",
      subtitle: "embedded systems smart plant vase",
      meta: "arduino, sensors · iot, automation",
      links: { repo: "#", demo: "#", blog: "#" }
    }
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
      position: "software engineer intern",
      company: "pdp.uz (online education platform)",
      year: "2021"
    }
  ],

  writing: [
    // {
    //   title: "how i designed yale-gpt to feel fast and simple",
    //   url: "blog/yale-gpt-design.html",
    //   slug: "yale-gpt-design"
    // },
    // {
    //   title: "what i learned from modifying an operating system",
    //   url: "blog/operating-system-lessons.html",
    //   slug: "operating-system-lessons"
    // },
    // {
    //   title: "building tools for communities without internet",
    //   url: "blog/offline-communication-tools.html",
    //   slug: "offline-communication-tools"
    // }
  ]
};