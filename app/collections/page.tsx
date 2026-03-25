'use client'

import { motion } from 'framer-motion'
import CollectionCard from '@/components/CollectionCard'
import { collections } from '@/data/collections'

export default function CollectionsPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-charcoal text-luxury-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6">
              Curated Collections
            </h1>
            <p className="text-stone-gray text-xl leading-relaxed">
              Thoughtfully assembled collections that bring cohesion and elegance to your space. Each collection represents a distinct aesthetic vision.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-warm-ivory">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection, index) => (
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
        </div>
      </section>
    </div>
  )
}
