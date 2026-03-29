'use client'

import { motion } from 'framer-motion'
import { use } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ProductCard from '@/components/ProductCard'
import { categories } from '@/data/categories'
import { products } from '@/data/products'
import { SlidersHorizontal } from 'lucide-react'

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const category = categories.find(c => c.slug === slug)
  const categoryProducts = products.filter(p => p.categorySlug === slug)

  if (!category) {
    return <div className="pt-20 min-h-screen flex items-center justify-center">Category not found</div>
  }

  return (
    <div className="pt-20">
      <section className="py-12 bg-warm-ivory border-b border-stone-gray">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Categories', href: '/categories' },
              { label: category.name },
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
            <h1 className="font-heading text-5xl md:text-6xl mb-6">{category.name}</h1>
            <p className="text-stone-gray text-lg leading-relaxed">{category.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-warm-ivory">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.map((product, index) => (
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

          {categoryProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-taupe text-lg">No products available in this category yet.</p>
              <Link href="/categories" className="text-brand-green hover:text-deep-olive mt-4 inline-block">
                Browse all categories
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
