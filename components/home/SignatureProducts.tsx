'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionIntro from '@/components/SectionIntro'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'
import { ArrowRight } from 'lucide-react'

export default function SignatureProducts() {
  const signatureProducts = products.filter(p => p.badge === 'Signature' || p.badge === 'Best Seller').slice(0, 3)

  return (
    <section className="py-24 bg-warm-ivory">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <SectionIntro
            label="Featured"
            title="Signature Products"
            description="Discover our most celebrated pieces, designed to define luxury interiors."
            align="left"
          />
          <Link 
            href="/categories" 
            className="hidden md:flex items-center gap-2 text-brand-green hover:text-deep-olive transition-colors font-medium"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureProducts.map((product, index) => (
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

        <div className="mt-12 text-center md:hidden">
          <Link 
            href="/categories" 
            className="inline-flex items-center gap-2 text-brand-green hover:text-deep-olive transition-colors font-medium"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
