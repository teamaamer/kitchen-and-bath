'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionIntro from '@/components/SectionIntro'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'
import { ArrowRight } from 'lucide-react'

export default function SignatureProducts() {
  const featuredProducts = products.slice(0, 3)

  return (
    <section className="py-24 bg-warm-ivory">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionIntro
          label="Featured"
          title="Signature Products"
          description="Discover our most celebrated pieces, designed to define luxury interiors."
          align="left"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {featuredProducts.map((product, index) => (
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
  )
}
