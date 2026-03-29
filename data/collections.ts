import { Collection } from '@/types'

export const collections: Collection[] = [
  {
    id: 'traditional-kitchen',
    name: 'Traditional Kitchen Collection',
    slug: 'traditional-kitchen',
    description: 'Classic elegance meets modern functionality. Featuring our Heritage framed kitchen cabinets with premium countertops and timeless finishes that bring warmth and character to your kitchen.',
    image: '/Categories/Framed Kitchen Cabinets.png',
    products: ['heritage-framed-cabinet', 'countertop-quartz'],
    featured: true,
  },
  {
    id: 'contemporary-kitchen',
    name: 'Contemporary Kitchen Collection',
    slug: 'contemporary-kitchen',
    description: 'Sleek minimalism for the modern home. Our flat-door kitchen cabinets paired with premium quartz countertops create a sophisticated, streamlined aesthetic perfect for contemporary living.',
    image: '/Categories/Flat-Door Kitchen Cabinets.jpg',
    products: ['modern-flat-door-cabinet', 'countertop-quartz'],
    featured: true,
  },
  {
    id: 'luxury-bath',
    name: 'Luxury Bath Collection',
    slug: 'luxury-bath',
    description: 'Transform your bathroom into a personal spa. Elegant vanities, illuminated LED mirrors, and sophisticated medicine cabinets combine to create a serene, luxurious retreat.',
    image: '/Categories/Vanities.jpg',
    products: ['aria-vanity-60', 'lumina-mirror-60', 'zenith-cabinet'],
    featured: true,
  },
  {
    id: 'signature-lighting',
    name: 'Signature Lighting Collection',
    slug: 'signature-lighting',
    description: 'Illumination as art. Our innovative LED mirrors and medicine cabinets transform light into an essential design element, bringing clarity and ambiance to modern bathrooms.',
    image: '/Categories/LED Mirrors.jpeg',
    products: ['lumina-mirror-60', 'zenith-cabinet'],
    featured: true,
  },
]
