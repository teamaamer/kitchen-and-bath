'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Category } from '@/types'

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/categories/${category.slug}`}>
      <motion.div
        className="group relative bg-luxury-white border border-stone-gray/20 shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1 overflow-hidden"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Image */}
        <div className="aspect-[3/2] relative overflow-hidden bg-warm-ivory">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover group-hover:scale-106 transition-transform duration-600 ease-premium"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
            quality={90}
          />
          {/* Subtle dark hover overlay */}
          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/8 transition-colors duration-400" />
        </div>

        {/* Content */}
        <div className="p-4 border-t border-stone-gray/20">
          <h3 className="font-heading text-sm font-semibold text-charcoal group-hover:text-brand-green transition-colors duration-200 leading-snug mb-1.5">
            {category.name}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-muted-taupe text-xs leading-relaxed line-clamp-1 flex-1 mr-2">
              {category.description}
            </p>
            <ArrowRight className="w-4 h-4 text-brand-green flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
