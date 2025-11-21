import { SiteData } from './types';

export const siteData: SiteData = {
  personal: {
    name: "khosilmurod abdukholikov",
    title: "software engineer",
    bio: "i am a computer science student at yale with a love for building systems that feel simple and fast. i grew up fascinated by how technology connects people, and now i focus on creating ai tools and platforms that are both reliable and delightful to use. my journey has been about constant learning, from operating systems to large-scale ai assistants, always with the goal of making complex things feel effortless.",
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
      title: "weensyos mods",
      description: "teaching os with memory isolation and threading"
    },
    {
      title: "mesh nodes",
      description: "solar raspberry pi mesh for offline communication"
    },
    {
      title: "navi",
      description: "minimal chat platform for ai experiments"
    },
    {
      title: "astro-blog",
      description: "fast markdown blog with instant loading",
      hidden: true
    },
    {
      title: "cursor-tools",
      description: "tiny macos utilities for cursor automation",
      hidden: true
    }
  ],

  experience: [
    {
      position: "co-founder",
      company: "yale-gpt",
      year: "2025"
    },
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
      url: "#"
    },
    {
      title: "what i learned from modifying an operating system",
      url: "#"
    },
    {
      title: "building tools for communities without internet",
      url: "#"
    }
  ]
};