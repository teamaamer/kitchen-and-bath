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
        className="group relative overflow-hidden bg-luxury-white"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        <div className="aspect-[4/5] relative overflow-hidden bg-stone-gray/10">
          <Image 
            src={category.image} 
            alt={category.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-charcoal opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          <h3 className="font-heading text-2xl mb-2 text-charcoal group-hover:text-brand-green transition-colors">
            {category.name}
          </h3>
          <p className="text-muted-taupe text-sm mb-4 line-clamp-2">{category.description}</p>
          <div className="flex items-center justify-end">
            <ArrowRight className="w-5 h-5 text-brand-green transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
