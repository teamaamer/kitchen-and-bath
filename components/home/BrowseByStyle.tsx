'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SectionIntro from '@/components/SectionIntro'

export default function BrowseByStyle() {
  const styleCollections = [
    {
      id: 'traditional-kitchen',
      name: 'Traditional Kitchen Collection',
      description: 'Classic elegance meets modern functionality. Featuring our heritage framed kitchen cabinets with premium countertops.',
      image: '/Categories/Framed Kitchen Cabinets.png',
      href: '/inspiration?style=traditional',
    },
    {
      id: 'contemporary-kitchen',
      name: 'Contemporary Kitchen Collection',
      description: 'Sleek minimalism for the modern home. Our flat-door kitchen cabinets paired with premium quartz countertops create a refined aesthetic.',
      image: '/Categories/Flat-Door Kitchen Cabinets.jpg',
      href: '/inspiration?style=contemporary',
    },
    {
      id: 'luxury-bath',
      name: 'Luxury Bath Collection',
      description: 'Transform your bathroom into a personal spa. Elegant vanities, illuminated LED mirrors, and sophisticated medicine cabinets.',
      image: '/Categories/Vanities.jpg',
      href: '/inspiration?style=luxury-bath',
    },
    {
      id: 'signature-lighting',
      name: 'Signature Lighting Collection',
      description: 'Illumination as art. Our innovative LED mirrors and medicine cabinets transform light into an essential design element.',
      image: '/Categories/LED Mirrors.jpeg',
      href: '/inspiration?style=lighting',
    },
  ]

  return (
    <section className="py-24 bg-luxury-white">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionIntro
          label="Design Inspiration"
          title="Browse by Style"
          description="Explore curated design collections that showcase how our products come together to create cohesive, beautiful spaces."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          {styleCollections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={collection.href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-gray/10 mb-4">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-2 group-hover:text-brand-green transition-colors">
                  {collection.name}
                </h3>
                <p className="text-muted-taupe text-sm leading-relaxed">
                  {collection.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
