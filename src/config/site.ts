export const siteConfig = {
  name: process.env.NEXT_PUBLIC_APP_NAME || 'Next.js Boilerplate',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  description: 'A production-ready Next.js boilerplate with TypeScript, i18n, and modern tooling',
  author: {
    name: 'Your Name',
    email: 'your.email@example.com',
    twitter: '@yourhandle',
    github: 'yourusername',
  },
  links: {
    twitter: 'https://twitter.com/yourhandle',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourprofile',
  },
};

export type SiteConfig = typeof siteConfig;
