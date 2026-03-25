'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function ConsultationCTA() {
  return (
    <section className="py-24 bg-brand-green">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-luxury-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-warm-ivory text-lg md:text-xl mb-12 leading-relaxed">
            Schedule a consultation with our design experts to explore how KBS can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-luxury-white text-brand-green hover:bg-warm-ivory border-0"
              >
                Request Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="secondary" 
                size="lg" 
                className="border-luxury-white text-luxury-white hover:bg-luxury-white hover:text-brand-green"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
