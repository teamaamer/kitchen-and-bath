'use client'

import { motion } from 'framer-motion'
import SectionIntro from '@/components/SectionIntro'
import CategoryCard from '@/components/CategoryCard'
import { categories } from '@/data/categories'

export default function FeaturedCategories() {
  const featuredCategories = categories.filter(cat => cat.featured)

  return (
    <section className="py-24 bg-warm-ivory">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionIntro
          label="Our Products"
          title="Browse Our Product Categories"
          description="Explore premium kitchen and bath product families designed to combine beauty, functionality, and craftsmanship."
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
          {featuredCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
