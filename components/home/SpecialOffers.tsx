'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import SectionIntro from '@/components/SectionIntro'
import Button from '@/components/ui/Button'
import { offers } from '@/data/offers'

export default function SpecialOffers() {
  const featuredOffers = offers.filter(offer => offer.featured).slice(0, 3)

  return (
    <section className="py-24 bg-warm-ivory">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionIntro
          label="Limited Time"
          title="Special Offers"
          description="Take advantage of our current promotions on premium kitchen and bath products."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {featuredOffers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-luxury-white overflow-hidden group"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-stone-gray">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl text-charcoal mb-2">
                  {offer.title}
                </h3>
                <p className="text-muted-taupe mb-4">{offer.description}</p>
                {offer.validUntil && (
                  <p className="text-sm text-brand-green mb-4">
                    Valid until {offer.validUntil}
                  </p>
                )}
                <Link href="/offers">
                  <Button variant="secondary" size="sm">
                    View Details
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/offers">
            <Button variant="primary" size="lg">
              View All Offers
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
