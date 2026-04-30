'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SectionIntro from '@/components/SectionIntro'

const styleCollections = [
  {
    id: 'traditional-kitchen',
    name: 'Traditional Kitchen',
    tag: 'Framed Cabinetry',
    description: 'Classic elegance meets modern precision. Heritage framed kitchen cabinets with premium countertops.',
    image: '/Categories/Framed Kitchen Cabinets.png',
    href: '/inspiration?style=traditional',
  },
  {
    id: 'contemporary-kitchen',
    name: 'Contemporary Kitchen',
    tag: 'Flat-Door Design',
    description: 'Sleek minimalism for the modern home. Flat-panel cabinets paired with premium quartz countertops.',
    image: '/Categories/Flat-Door Kitchen Cabinets.jpg',
    href: '/inspiration?style=contemporary',
  },
  {
    id: 'luxury-bath',
    name: 'Luxury Bath',
    tag: 'Spa-Inspired',
    description: 'Transform your bathroom into a personal spa. Elegant vanities, LED mirrors, and sophisticated cabinets.',
    image: '/Categories/Vanities.jpg',
    href: '/inspiration?style=luxury-bath',
  },
  {
    id: 'signature-lighting',
    name: 'Signature Lighting',
    tag: 'LED Collections',
    description: 'Illumination as art. Our LED mirrors and medicine cabinets transform light into an essential design element.',
    image: '/Categories/LED Mirrors.jpeg',
    href: '/inspiration?style=lighting',
  },
]

export default function BrowseByStyle() {
  return (
    <section className="py-20 md:py-28 bg-luxury-white">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionIntro
          label="Design Inspiration"
          title="Browse by Style"
          description="Curated design collections that show how our products come together to create cohesive, beautiful spaces."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 max-w-5xl mx-auto">
          {styleCollections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Link href={collection.href} className="group block">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-warm-ivory mb-4">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-600 ease-premium"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                  {/* Tag badge */}
                  <div className="absolute top-4 left-4 bg-luxury-white/90 backdrop-blur-sm px-3 py-1">
                    <span className="text-brand-green text-[10px] font-semibold tracking-[0.2em] uppercase">
                      {collection.tag}
                    </span>
                  </div>

                  {/* Hover CTA */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                    <span className="inline-flex items-center gap-2 text-luxury-white text-sm font-medium">
                      Explore Collection
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className="px-1">
                  <h3 className="font-heading text-lg font-semibold text-charcoal group-hover:text-brand-green transition-colors duration-200 mb-1.5">
                    {collection.name}
                  </h3>
                  <p className="text-muted-taupe text-sm leading-relaxed">
                    {collection.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
