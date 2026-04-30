'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

export default function ConsultationCTA() {
  return (
    <section className="relative py-20 md:py-28 bg-charcoal overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #C8A96B 0, #C8A96B 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}
        />
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-soft-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-soft-gold/40 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-8 h-px bg-soft-gold/60" />
            <span className="text-soft-gold text-[11px] font-semibold tracking-[0.25em] uppercase">
              Start Your Project
            </span>
            <span className="block w-8 h-px bg-soft-gold/60" />
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-luxury-white mb-6 leading-tight">
            Ready to Transform
            <br />
            <span className="text-soft-gold">Your Space?</span>
          </h2>

          <p className="text-stone-gray/80 text-base md:text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
            Schedule a consultation with our design experts to explore how KBS can bring your vision to life — from concept to completion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-green text-luxury-white text-sm font-semibold tracking-wide hover:bg-deep-olive transition-all duration-300 hover:-translate-y-px hover:shadow-soft"
            >
              Request Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-luxury-white/30 text-luxury-white text-sm font-semibold tracking-wide hover:border-luxury-white/70 hover:bg-luxury-white/8 transition-all duration-300 hover:-translate-y-px"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
