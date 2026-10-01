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
  location: string;
  region: string;
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
  email: 'hello@example.com',
  location: 'CAMBODIA',
  region: 'CAMBODIA → WORLDWIDE',
  coordinates: "11°33'N \u00A0 104°55'E",
  availability: 'AVAILABLE FOR SELECTED PROJECTS — 2026',
  roles: ['UI/UX DESIGNER', 'PRODUCT DESIGNER', 'CREATIVE THINKER'],
  socials: [
    { name: 'BEHANCE', url: 'https://www.behance.net/' },
    { name: 'DRIBBBLE', url: 'https://dribbble.com/' },
    { name: 'LINKEDIN', url: 'https://www.linkedin.com/' },
    { name: 'INSTAGRAM', url: 'https://www.instagram.com/' },
  ],
};
