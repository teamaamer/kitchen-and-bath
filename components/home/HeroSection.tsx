'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/luxury-hero-video.jpg" // Fallback image
        >
          <source src="/luxury-hero-video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="w-full h-full bg-charcoal" />
        </video>
      </div>
      
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-charcoal/60 to-charcoal/85 z-10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-20 text-center flex items-center justify-center min-h-screen pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-luxury-white mb-8 leading-tight">
            Custom Kitchen & Bath<br />Solutions
          </h1>
          <p className="text-stone-gray text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            From framed and flat-door cabinetry to premium countertops, vanities, and LED lighting—we bring your vision to life with exceptional craftsmanship and personalized service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/categories">
              <Button variant="primary" size="lg">
                Browse Products
              </Button>
            </Link>
            <Link href="/quote">
              <Button variant="secondary" size="lg" className="border-luxury-white text-luxury-white hover:bg-luxury-white hover:text-charcoal">
                Request Quote
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
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
