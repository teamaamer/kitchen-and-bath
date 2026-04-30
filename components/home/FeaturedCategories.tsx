'use client'

import SectionIntro from '@/components/SectionIntro'
import CategoryCard from '@/components/CategoryCard'
import { categories } from '@/data/categories'

export default function FeaturedCategories() {
  const featuredCategories = categories.filter(cat => cat.featured)

  return (
    <section className="py-20 md:py-28 bg-warm-ivory">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionIntro
          label="Our Products"
          title="Browse Our Product Categories"
          description="Explore premium kitchen and bath product families designed to combine beauty, functionality, and craftsmanship."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-14">
          {featuredCategories.map((category, index) => (
            <div
              key={category.id}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
