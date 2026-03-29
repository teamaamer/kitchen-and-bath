export interface Offer {
  id: string
  title: string
  description: string
  image: string
  validUntil?: string
  featured?: boolean
}

export const offers: Offer[] = [
  {
    id: 'offer-1',
    title: 'Kitchen Cabinet Special',
    description: 'Limited-time offer on premium kitchen cabinetry',
    image: '/Offers/WhatsApp Image 2026-03-29 at 15.59.08.jpeg',
    featured: true,
  },
  {
    id: 'offer-2',
    title: 'Bathroom Vanity Promotion',
    description: 'Exclusive pricing on luxury vanities',
    image: '/Offers/WhatsApp Image 2026-03-29 at 15.59.09.jpeg',
    featured: true,
  },
  {
    id: 'offer-3',
    title: 'Countertop Sale',
    description: 'Special offers on premium countertop materials',
    image: '/Offers/WhatsApp Image 2026-03-29 at 15.59.10.jpeg',
    featured: true,
  },
  {
    id: 'offer-4',
    title: 'LED Lighting Package',
    description: 'Save on LED mirrors and medicine cabinets',
    image: '/Offers/WhatsApp Image 2026-03-29 at 15.59.11.jpeg',
    featured: true,
  },
  {
    id: 'offer-5',
    title: 'Kitchen & Bath Bundle',
    description: 'Complete kitchen and bath renovation packages',
    image: '/Offers/WhatsApp Image 2026-03-29 at 15.59.12.jpeg',
    featured: false,
  },
  {
    id: 'offer-6',
    title: 'Designer Collection',
    description: 'Premium designer products at special pricing',
    image: '/Offers/WhatsApp Image 2026-03-29 at 15.59.13.jpeg',
    featured: false,
  },
  {
    id: 'offer-7',
    title: 'Spring Clearance',
    description: 'Seasonal offers on select kitchen and bath products',
    image: '/Offers/WhatsApp Image 2026-03-27 at 17.44.01.jpeg',
    featured: false,
  },
]
