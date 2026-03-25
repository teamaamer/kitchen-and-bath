'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Collection } from '@/types'

interface CollectionCardProps {
  collection: Collection
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <Link href={`/collections/${collection.slug}`}>
      <motion.div
        className="group relative overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="aspect-[16/10] relative overflow-hidden bg-stone-gray">
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-charcoal opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
          <h3 className="font-heading text-3xl text-luxury-white mb-2 group-hover:text-soft-sage transition-colors">
            {collection.name}
          </h3>
          <p className="text-stone-gray text-sm line-clamp-2">{collection.description}</p>
        </div>
      </motion.div>
    </Link>
  )
}
