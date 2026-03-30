'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { offers } from '@/data/offers'

export default function OffersSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-luxury-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-brand-green text-sm font-medium tracking-widest uppercase mb-4"
          >
            Limited Time
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl text-charcoal mb-6"
          >
            Latest Offers
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-taupe text-xl leading-relaxed"
          >
            Discover our latest deals and exclusive promotions
          </motion.p>
        </div>
      </div>

      {/* Horizontal Scrolling Banner */}
      <div className="relative">
        {/* Gradient fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-luxury-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-luxury-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-slow hover:pause-animation gap-6">
          {/* First set of offers */}
          {offers.map((offer, index) => (
            <motion.div
              key={`${offer.id}-1`}
              className="flex-shrink-0 w-[450px] md:w-[550px] group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/offers" className="block">
                <div className="relative h-[320px] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  {offer.mediaType === 'image' ? (
                    <Image
                      src={offer.mediaSrc}
                      alt={offer.title}
                      fill
                      className="object-cover"
                      sizes="550px"
                      quality={95}
                    />
                  ) : (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={offer.mediaSrc} type="video/mp4" />
                    </video>
                  )}
                  
                  {/* Dark overlay on hover */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent transition-opacity duration-300 ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  {/* Content overlay on hover */}
                  <div 
                    className={`absolute inset-0 flex flex-col justify-end p-8 transition-opacity duration-300 ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <h3 className="font-heading text-3xl text-luxury-white mb-3">
                      {offer.title}
                    </h3>
                    <p className="text-stone-gray text-base mb-6">
                      {offer.description}
                    </p>
                    <div className="flex gap-3">
                      {offer.facebookPostUrl && (
                        <a
                          href={offer.facebookPostUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-luxury-white/20 hover:bg-luxury-white/30 text-luxury-white border border-luxury-white/40 rounded-lg transition-all duration-300 text-sm font-semibold"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>View on Facebook</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                      <a
                        href="/quote"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green hover:bg-deep-olive text-luxury-white rounded-lg transition-all duration-300 text-sm font-semibold"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Request Quote</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Duplicate set for seamless loop */}
          {offers.map((offer, index) => (
            <motion.div
              key={`${offer.id}-2`}
              className="flex-shrink-0 w-[450px] md:w-[550px] group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index + offers.length)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/offers" className="block">
                <div className="relative h-[320px] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  {offer.mediaType === 'image' ? (
                    <Image
                      src={offer.mediaSrc}
                      alt={offer.title}
                      fill
                      className="object-cover"
                      sizes="550px"
                      quality={95}
                    />
                  ) : (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={offer.mediaSrc} type="video/mp4" />
                    </video>
                  )}
                  
                  {/* Dark overlay on hover */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent transition-opacity duration-300 ${
                      hoveredIndex === index + offers.length ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  {/* Content overlay on hover */}
                  <div 
                    className={`absolute inset-0 flex flex-col justify-end p-8 transition-opacity duration-300 ${
                      hoveredIndex === index + offers.length ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <h3 className="font-heading text-3xl text-luxury-white mb-3">
                      {offer.title}
                    </h3>
                    <p className="text-stone-gray text-base mb-6">
                      {offer.description}
                    </p>
                    <div className="flex gap-3">
                      {offer.facebookPostUrl && (
                        <a
                          href={offer.facebookPostUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-luxury-white/20 hover:bg-luxury-white/30 text-luxury-white border border-luxury-white/40 rounded-lg transition-all duration-300 text-sm font-semibold"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>View on Facebook</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                      <a
                        href="/quote"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green hover:bg-deep-olive text-luxury-white rounded-lg transition-all duration-300 text-sm font-semibold"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Request Quote</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* View All CTA */}
      <div className="text-center mt-16">
        <Link 
          href="/offers"
          className="inline-flex items-center gap-2 text-brand-green hover:text-deep-olive transition-colors font-medium text-lg"
        >
          View All Offers
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
