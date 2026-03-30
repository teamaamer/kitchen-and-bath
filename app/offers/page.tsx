'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { offers } from '@/data/offers'

export default function OffersPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-charcoal text-luxury-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6">
              Special Offers
            </h1>
            <p className="text-stone-gray text-xl leading-relaxed">
              Discover our current promotions on premium kitchen and bath products. Limited-time opportunities to bring luxury into your home.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-warm-ivory">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-luxury-white overflow-hidden group"
              >
                <div className="relative h-[400px] overflow-hidden bg-stone-gray/10">
                  {offer.mediaType === 'image' ? (
                    <Image
                      src={offer.mediaSrc}
                      alt={offer.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-contain"
                    >
                      <source src={offer.mediaSrc} type="video/mp4" />
                    </video>
                  )}
                </div>
                <div className="p-8">
                  <h2 className="font-heading text-3xl text-charcoal mb-3">
                    {offer.title}
                  </h2>
                  <p className="text-muted-taupe text-lg mb-4 leading-relaxed">
                    {offer.description}
                  </p>
                  {offer.validUntil && (
                    <p className="text-sm font-medium text-brand-green mb-6">
                      Valid until {offer.validUntil}
                    </p>
                  )}
                  <Link href="/quote">
                    <Button variant="primary" size="md">
                      Request Quote
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {offers.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-taupe text-lg mb-6">
                No active promotions at this time. Check back soon for special offers.
              </p>
              <Link href="/categories">
                <Button variant="primary" size="lg">
                  Browse Products
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-charcoal text-luxury-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-stone-gray text-lg mb-8 max-w-2xl mx-auto">
            Contact us to discuss your project and learn how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button variant="primary" size="lg">
                Request Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="border-luxury-white text-luxury-white hover:bg-luxury-white hover:text-charcoal">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
