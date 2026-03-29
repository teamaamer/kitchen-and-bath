'use client'

import Image from 'next/image'
import { brands } from '@/data/brands'

export default function BrandCarousel() {
  return (
    <section className="py-16 bg-luxury-white border-y border-stone-gray/20">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-xs font-medium tracking-widest uppercase text-muted-taupe mb-10">
          Trusted Brand Partners
        </p>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll hover:pause-animation py-4">
            {/* First set of logos */}
            {brands.map((brand) => (
              <div
                key={`${brand.id}-1`}
                className="flex-shrink-0 mx-10 md:mx-16 flex items-center justify-center"
                style={{ width: '160px', height: '70px' }}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={160}
                  height={70}
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  style={{ maxHeight: '70px', width: 'auto', maxWidth: '160px' }}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {brands.map((brand) => (
              <div
                key={`${brand.id}-2`}
                className="flex-shrink-0 mx-10 md:mx-16 flex items-center justify-center"
                style={{ width: '160px', height: '70px' }}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={160}
                  height={70}
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  style={{ maxHeight: '70px', width: 'auto', maxWidth: '160px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
