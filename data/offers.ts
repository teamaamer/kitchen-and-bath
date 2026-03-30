export interface Offer {
  id: string
  title: string
  description: string
  mediaType: 'image' | 'video'
  mediaSrc: string
  facebookPostUrl?: string  // Optional: Link to original Facebook post for future Graph API sync
  validUntil?: string
  featured?: boolean
}

export const offers: Offer[] = [
  {
    id: 'offer-1',
    title: 'Kitchen Cabinet Special',
    description: 'Limited-time offer on premium kitchen cabinetry',
    mediaType: 'image',
    mediaSrc: '/Offers/WhatsApp Image 2026-03-29 at 15.59.08.jpeg',
    featured: true,
  },
  {
    id: 'offer-2',
    title: 'Bathroom Vanity Promotion',
    description: 'Limited-time offer on luxury vanities',
    mediaType: 'image',
    mediaSrc: '/Offers/WhatsApp Image 2026-03-29 at 15.59.09.jpeg',
    featured: true,
  },
  {
    id: 'offer-3',
    title: 'Countertop Sale',
    description: 'Special offers on premium countertop materials',
    mediaType: 'image',
    mediaSrc: '/Offers/WhatsApp Image 2026-03-29 at 15.59.10.jpeg',
    featured: true,
  },
  {
    id: 'offer-4',
    title: 'LED Lighting Package',
    description: 'Save on LED mirrors and medicine cabinets',
    mediaType: 'image',
    mediaSrc: '/Offers/WhatsApp Image 2026-03-29 at 15.59.11.jpeg',
    featured: true,
  },
  {
    id: 'offer-5',
    title: 'Kitchen & Bath Bundle',
    description: 'Complete kitchen and bath renovation packages',
    mediaType: 'image',
    mediaSrc: '/Offers/WhatsApp Image 2026-03-29 at 15.59.12.jpeg',
    featured: false,
  },
  {
    id: 'offer-6',
    title: 'Designer Collection',
    description: 'Premium designer products - limited time',
    mediaType: 'image',
    mediaSrc: '/Offers/WhatsApp Image 2026-03-29 at 15.59.13.jpeg',
    featured: false,
  },
  {
    id: 'offer-7',
    title: 'Spring Clearance',
    description: 'Seasonal offers on select kitchen and bath products',
    mediaType: 'image',
    mediaSrc: '/Offers/WhatsApp Image 2026-03-27 at 17.44.01.jpeg',
    featured: false,
  },
]
