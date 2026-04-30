'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { brands } from '@/data/brands'

export default function BrandCarousel() {
  return (
    <section className="py-16 md:py-20 bg-warm-ivory border-t border-stone-gray/20">
      <div className="container mx-auto px-4 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="block w-12 h-px bg-stone-gray/40" />
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-muted-taupe">
              Trusted Brand Partners
            </p>
            <span className="block w-12 h-px bg-stone-gray/40" />
          </div>
          <p className="text-muted-taupe text-sm max-w-md mx-auto">
            We partner with industry-leading manufacturers to bring you the finest products available.
          </p>
        </motion.div>
      </div>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-warm-ivory to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-warm-ivory to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll hover:pause-animation py-2">
          {brands.map((brand) => (
            <div
              key={`${brand.id}-1`}
              className="flex-shrink-0 mx-12 md:mx-16 flex items-center justify-center"
              style={{ width: '150px', height: '60px' }}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={150}
                height={60}
                className="object-contain grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-400"
                style={{ maxHeight: '60px', width: 'auto', maxWidth: '150px' }}
              />
            </div>
          ))}
          {brands.map((brand) => (
            <div
              key={`${brand.id}-2`}
              className="flex-shrink-0 mx-12 md:mx-16 flex items-center justify-center"
              style={{ width: '150px', height: '60px' }}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={150}
                height={60}
                className="object-contain grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-400"
                style={{ maxHeight: '60px', width: 'auto', maxWidth: '150px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
