export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

export const navigationConfig: NavItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  // Add your navigation items here
];
