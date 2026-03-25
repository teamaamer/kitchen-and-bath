'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-charcoal overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 to-charcoal/80 z-10" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-luxury-white mb-6">
            Elevated Essentials for<br />Modern Living
          </h1>
          <p className="text-stone-gray text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Crafted for interiors that demand both performance and refinement. Discover our collection of luxury kitchen and bath fixtures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/categories">
              <Button variant="primary" size="lg">
                Explore Collection
              </Button>
            </Link>
            <Link href="/quote">
              <Button variant="secondary" size="lg" className="border-luxury-white text-luxury-white hover:bg-luxury-white hover:text-charcoal">
                Request Consultation
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-stone-gray"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
