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
    label: 'Products',
    href: '/categories',
    submenu: [
      { label: 'Framed Kitchen Cabinets', href: '/categories/framed-kitchen-cabinets' },
      { label: 'Flat-Door Kitchen Cabinets', href: '/categories/flat-door-kitchen-cabinets' },
      { label: 'Countertops', href: '/categories/countertops' },
      { label: 'Vanities', href: '/categories/vanities' },
      { label: 'LED Mirrors', href: '/categories/led-mirrors' },
      { label: 'LED Medicine Cabinets', href: '/categories/led-medicine-cabinets' },
    ],
  },
  {
    label: 'Brands',
    href: '/brands',
  },
  {
    label: 'Inspiration',
    href: '/inspiration',
  },
  {
    label: 'Offers',
    href: '/offers',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export const footerLinks = {
  products: [
    { label: 'Framed Kitchen Cabinets', href: '/categories/framed-kitchen-cabinets' },
    { label: 'Flat-Door Kitchen Cabinets', href: '/categories/flat-door-kitchen-cabinets' },
    { label: 'Countertops', href: '/categories/countertops' },
    { label: 'Vanities', href: '/categories/vanities' },
    { label: 'LED Mirrors', href: '/categories/led-mirrors' },
    { label: 'LED Medicine Cabinets', href: '/categories/led-medicine-cabinets' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Brands', href: '/brands' },
    { label: 'Inspiration', href: '/inspiration' },
    { label: 'Special Offers', href: '/offers' },
    { label: 'Contact', href: '/contact' },
  ],
  support: [
    { label: 'Request Quote', href: '/quote' },
    { label: 'Design Consultation', href: '/contact#consultation' },
    { label: 'Installation Support', href: '/contact#installation' },
    { label: 'Warranty Information', href: '/about#warranty' },
  ],
}
