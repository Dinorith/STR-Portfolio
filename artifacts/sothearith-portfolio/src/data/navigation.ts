export interface NavItem {
  label: string;
  hash: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'ABOUT', hash: 'about', href: '/#about' },
  { label: 'WORK', hash: 'work', href: '/#work' },
  { label: 'PROCESS', hash: 'process', href: '/#process' },
  { label: 'CONTACT', hash: 'contact', href: '/#contact' },
];

export const navCta = {
  label: 'START A PROJECT',
  href: 'https://t.me/sothearith1',
};
