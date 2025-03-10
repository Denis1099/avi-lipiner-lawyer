
import { NavLink } from './types';

export const getNavLinks = (): NavLink[] => [
  { name: 'ראשי', href: '#hero', section: 'hero' },
  { name: 'אודות', href: '#about', section: 'about' },
  { name: 'שאלות נפוצות', href: '#faq', section: 'faq' },
  { name: 'צור קשר', href: '#contact', section: 'contact' },
];
