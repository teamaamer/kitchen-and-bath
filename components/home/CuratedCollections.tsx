'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionIntro from '@/components/SectionIntro'
import CollectionCard from '@/components/CollectionCard'
import { collections } from '@/data/collections'
import { ArrowRight } from 'lucide-react'

export default function CuratedCollections() {
  const featuredCollections = collections.filter(c => c.featured)

  return (
    <section className="py-24 bg-warm-ivory">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <SectionIntro
            label="Collections"
            title="Curated for Your Style"
            description="Thoughtfully assembled collections that bring cohesion and elegance to your space."
            align="left"
          />
          <Link 
            href="/collections" 
            className="hidden md:flex items-center gap-2 text-brand-green hover:text-deep-olive transition-colors font-medium"
          >
            View All Collections
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCollections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CollectionCard collection={collection} />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link 
            href="/collections" 
            className="inline-flex items-center gap-2 text-brand-green hover:text-deep-olive transition-colors font-medium"
          >
            View All Collections
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
