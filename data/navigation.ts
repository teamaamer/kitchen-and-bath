import { NavLink } from '@/types'

export const mainNavigation: NavLink[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Shop',
    href: '/categories',
    submenu: [
      { label: 'All Categories', href: '/categories' },
      { label: 'Vanities', href: '/categories/vanities' },
      { label: 'LED Mirrors', href: '/categories/led-mirrors' },
      { label: 'LED Medicine Cabinets', href: '/categories/led-medicine-cabinets' },
      { label: 'Closets', href: '/categories/closets' },
      { label: 'Faucets', href: '/categories/faucets' },
      { label: 'Accessories', href: '/categories/accessories' },
    ],
  },
  {
    label: 'Collections',
    href: '/collections',
  },
  {
    label: 'Inspiration',
    href: '/inspiration',
  },
  {
    label: 'FAQ',
    href: '/faq',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export const footerLinks = {
  shop: [
    { label: 'Vanities', href: '/categories/vanities' },
    { label: 'LED Mirrors', href: '/categories/led-mirrors' },
    { label: 'LED Medicine Cabinets', href: '/categories/led-medicine-cabinets' },
    { label: 'Closets', href: '/categories/closets' },
    { label: 'Faucets', href: '/categories/faucets' },
    { label: 'Accessories', href: '/categories/accessories' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Collections', href: '/collections' },
    { label: 'Inspiration', href: '/inspiration' },
    { label: 'Contact', href: '/contact' },
  ],
  support: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Request Quote', href: '/quote' },
    { label: 'Shipping & Returns', href: '/faq#shipping' },
    { label: 'Warranty', href: '/faq#warranty' },
  ],
}
