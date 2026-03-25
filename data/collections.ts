import { Collection } from '@/types'

export const collections: Collection[] = [
  {
    id: 'modern-minimal',
    name: 'Modern Minimal',
    slug: 'modern-minimal',
    description: 'Clean lines, refined materials, and a focus on essential beauty define this collection. Every piece is designed to bring calm and clarity to contemporary spaces.',
    image: '/images/collections/modern-minimal.jpg',
    products: ['aria-vanity-60', 'lumina-mirror-60', 'cascade-faucet'],
    featured: true,
  },
  {
    id: 'warm-contemporary',
    name: 'Warm Contemporary',
    slug: 'warm-contemporary',
    description: 'Blending natural materials with modern design, this collection creates inviting spaces that feel both sophisticated and comfortable.',
    image: '/images/collections/warm-contemporary.jpg',
    products: ['aria-vanity-60', 'meridian-closet'],
    featured: true,
  },
  {
    id: 'architectural-bath',
    name: 'Architectural Bath',
    slug: 'architectural-bath',
    description: 'Bold geometric forms and precision engineering come together in this collection, designed for those who appreciate architectural rigor and sculptural beauty.',
    image: '/images/collections/architectural-bath.jpg',
    products: ['zenith-cabinet', 'cascade-faucet', 'towel-bar-set'],
    featured: true,
  },
  {
    id: 'signature-lighting',
    name: 'Signature Lighting',
    slug: 'signature-lighting',
    description: 'Illumination as art. This collection features our most innovative LED mirrors and cabinets, designed to transform light into an essential design element.',
    image: '/images/collections/signature-lighting.jpg',
    products: ['lumina-mirror-60', 'zenith-cabinet'],
    featured: false,
  },
  {
    id: 'refined-storage',
    name: 'Refined Storage',
    slug: 'refined-storage',
    description: 'Organization elevated to luxury. Custom closet systems and medicine cabinets that bring order and elegance to every space.',
    image: '/images/collections/refined-storage.jpg',
    products: ['meridian-closet', 'zenith-cabinet'],
    featured: false,
  },
]
