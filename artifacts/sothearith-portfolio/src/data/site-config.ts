export interface SocialLink {
  name: string;
  url: string;
}

export interface SiteConfig {
  name: string;
  brand: string;
  title: string;
  description: string;
  email: string;
  telegram: string;
  telegramUsername: string;
  location: string;
  coordinates: string;
  availability: string;
  roles: string[];
  socials: SocialLink[];
}

export const siteConfig: SiteConfig = {
  name: 'SOTHEARITH',
  brand: 'SR',
  title: 'Sothearith — UI/UX & Product Designer',
  description:
    'Sothearith is a UI/UX and product designer based in Cambodia, creating thoughtful digital experiences.',
  email: 'sovannsothearith@gmail.com',
  telegram: 'https://t.me/sothearith1',
  telegramUsername: '@sothearith1',
  location: 'CAMBODIA',
  coordinates: "11°33'N \u00A0 104°55'E",
  availability: 'AVAILABLE FOR SELECTED PROJECTS — 2026',
  roles: ['UI/UX DESIGNER', 'PRODUCT DESIGNER', 'CREATIVE THINKER'],
  socials: [
    { name: 'TELEGRAM', url: 'https://t.me/sothearith1' },
    { name: 'BEHANCE', url: 'https://www.behance.net/mrth3/' },
    { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/sovann-sothearith-318b21310/' },
  ],
};
