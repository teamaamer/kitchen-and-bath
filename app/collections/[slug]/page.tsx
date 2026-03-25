'use client'

import { motion } from 'framer-motion'
import { use } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import ProductCard from '@/components/ProductCard'
import { collections } from '@/data/collections'
import { products } from '@/data/products'

export default function CollectionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const collection = collections.find(c => c.slug === slug)
  const collectionProducts = collection ? products.filter(p => collection.products.includes(p.id)) : []

  if (!collection) {
    return <div className="pt-20 min-h-screen flex items-center justify-center">Collection not found</div>
  }

  return (
    <div className="pt-20">
      <section className="py-12 bg-warm-ivory border-b border-stone-gray">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Collections', href: '/collections' },
              { label: collection.name },
            ]}
          />
        </div>
      </section>

      <section className="py-16 bg-charcoal text-luxury-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-heading text-5xl md:text-6xl mb-6">{collection.name}</h1>
            <p className="text-stone-gray text-lg leading-relaxed">{collection.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-warm-ivory">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl text-charcoal mb-8">Products in this Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collectionProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
