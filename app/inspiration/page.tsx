'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { inspirationGallery } from '@/data/inspiration'

export default function InspirationPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  
  const allTags = Array.from(new Set(inspirationGallery.flatMap(item => item.tags)))
  const filteredGallery = selectedTag
    ? inspirationGallery.filter(item => item.tags.includes(selectedTag))
    : inspirationGallery

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
              Design Inspiration
            </h1>
            <p className="text-stone-gray text-xl leading-relaxed">
              Explore beautifully designed spaces featuring KBS products. Find inspiration for your next project.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-warm-ivory border-b border-stone-gray">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 transition-colors ${
                selectedTag === null
                  ? 'bg-brand-green text-luxury-white'
                  : 'bg-luxury-white text-charcoal hover:bg-stone-gray'
              }`}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 transition-colors ${
                  selectedTag === tag
                    ? 'bg-brand-green text-luxury-white'
                    : 'bg-luxury-white text-charcoal hover:bg-stone-gray'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-warm-ivory">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] bg-stone-gray mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-stone-gray to-muted-taupe transform group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-heading text-xl text-charcoal mb-2 group-hover:text-brand-green transition-colors">
                  {item.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-xs text-muted-taupe">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
