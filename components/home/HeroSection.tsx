'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
})

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

      {/* Video / Image Background with slow zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover animate-hero-zoom"
          poster="/luxury-hero-video.jpg"
        >
          <source src="/luxury-hero-video.mp4" type="video/mp4" />
          <div className="w-full h-full bg-charcoal" />
        </video>
      </div>

      {/* Refined overlay — readable but still bright/premium */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/40 to-charcoal/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/20 via-transparent to-charcoal/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-20 text-center flex flex-col items-center justify-center h-full pt-24 pb-16">

        {/* Pre-headline label */}
        <motion.div {...fadeUp(0.1)}>
          <span className="inline-block text-soft-gold text-xs font-medium tracking-[0.3em] uppercase mb-6">
            Premium Kitchen & Bath
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.25)}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-luxury-white mb-6 leading-[1.08] max-w-5xl"
        >
          Custom Kitchen & Bath
          <br />
          <span className="text-soft-gold">Solutions</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.4)}
          className="text-stone-gray/90 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          From framed and flat-door cabinetry to premium countertops, vanities,
          and LED lighting — KBS brings your vision to life with exceptional
          craftsmanship and personalized service.
        </motion.p>

        {/* Buttons */}
        <motion.div
          {...fadeUp(0.55)}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            href="/categories"
            className="px-8 py-4 bg-brand-green text-luxury-white text-sm font-semibold tracking-wide hover:bg-deep-olive transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft"
          >
            Browse Products
          </Link>
          <Link
            href="/quote"
            className="px-8 py-4 border border-luxury-white/60 text-luxury-white text-sm font-semibold tracking-wide hover:bg-luxury-white hover:text-charcoal transition-all duration-300 hover:-translate-y-0.5"
          >
            Request Quote
          </Link>
          <Link
            href="/offers"
            className="px-8 py-4 bg-soft-gold/90 text-charcoal text-sm font-semibold tracking-wide hover:bg-soft-gold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft"
          >
            View Offers
          </Link>
        </motion.div>

        {/* Promo line */}
        <motion.p
          {...fadeUp(0.7)}
          className="text-stone-gray/70 text-xs mt-6 tracking-widest uppercase"
        >
          ✦ Limited-time promotions on premium products ✦
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-stone-gray/50 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-stone-gray/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
