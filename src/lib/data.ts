import { SiteData } from './types'

export const siteData: SiteData = {
  personal: {
    name: 'khosilmurod',
    title: 'software engineer',
    bio: 'I am a Computer Science student at Yale.\n\nI grew up in rural Uzbekistan farming cattle and apple trees before becoming obsessed with technology and the future of the physical world. I got my first internet connection at 14 by climbing a tree to catch a phone signal.\n\nNow I build robots for farms.\n\nI believe ambition is a moral obligation, civilization is still early, and the most important things in the world are still left to build.',
    email: 'm.abdukholikov@yale.edu',
    linkedin: 'https://linkedin.com/in/khosilmurod',
    github: 'https://github.com/khosilmurod',
  },

  projects: [
    {
      title: 'wearable headset',
      description: 'egocentric data collection headset built at a startup',
      subtitle: 'egocentric data collection headset built at a startup',
      meta: 'embedded, c++ · sensors, hardware',
      links: { repo: '#', demo: '#', blog: '#' },
    },
    {
      title: 'embedded escape room',
      description: 'sensor-driven embedded escape room',
      subtitle: 'sensor-driven embedded escape room',
      meta: 'embedded · sensors, puzzles',
      links: { repo: '#', demo: '#', blog: '#' },
    },
    {
      title: 'point-of-sale system',
      description: 'full-stack pos sold to a local jewelry chain at 15',
      subtitle: 'full-stack pos sold to a local jewelry chain at 15',
      meta: 'spring boot, react · postgres, mongo',
      links: { repo: 'https://github.com/Khosilmurod/pos-system', demo: '#', blog: '#' },
    },
  ],

  experience: [
    {
      position: 'software engineer intern',
      company: 'adobe',
    },
    {
      position: 'undergraduate researcher',
      company: 'interactive machines group @ yale',
    },
  ],

  writing: [],
}
