'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`}>
      <motion.div
        className="group relative"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        <div className="aspect-square relative overflow-hidden bg-stone-gray mb-4">
          {product.badge && (
            <div className="absolute top-4 left-4 z-10 bg-brand-green text-luxury-white px-3 py-1 text-xs font-medium tracking-wide">
              {product.badge}
            </div>
          )}
          <div className="absolute inset-0 bg-charcoal opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        </div>
        <div>
          <h3 className="font-heading text-xl mb-1 text-charcoal group-hover:text-brand-green transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-taupe mb-2">{product.shortDescription}</p>
          {product.priceOnRequest ? (
            <p className="text-sm font-medium text-charcoal">Request Pricing</p>
          ) : (
            <p className="text-lg font-medium text-charcoal">
              ${product.price?.toLocaleString()}
            </p>
          )}
        </div>
      </motion.div>
    </Link>
  )
}
