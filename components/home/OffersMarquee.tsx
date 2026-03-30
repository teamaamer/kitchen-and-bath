'use client'

import Image from 'next/image'
import Link from 'next/link'
import { offers } from '@/data/offers'

export default function OffersMarquee() {
  // Get all offers for the marquee
  const allOffers = offers

  return (
    <section className="py-24 bg-charcoal overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-brand-green text-sm font-medium tracking-widest uppercase mb-4">
            Limited Time
          </p>
          <h2 className="font-heading text-5xl md:text-6xl text-luxury-white mb-6">
            Special Offers
          </h2>
          <p className="text-stone-gray text-xl leading-relaxed">
            Explore current promotions and limited-time kitchen and bath offers from KBS.
          </p>
        </div>
      </div>

      {/* Horizontal Scrolling Marquee */}
      <div className="relative">
        <div className="flex animate-scroll-slow hover:pause-animation">
          {/* First set of offers */}
          {allOffers.map((offer) => (
            <div
              key={`${offer.id}-1`}
              className="flex-shrink-0 mx-4 w-[400px] md:w-[500px]"
            >
              <div className="relative h-[350px] overflow-hidden bg-charcoal">
                {offer.mediaType === 'image' ? (
                  <Image
                    src={offer.mediaSrc}
                    alt={offer.title}
                    fill
                    className="object-contain"
                    sizes="500px"
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
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {allOffers.map((offer) => (
            <div
              key={`${offer.id}-2`}
              className="flex-shrink-0 mx-4 w-[400px] md:w-[500px]"
            >
              <div className="relative h-[350px] overflow-hidden bg-charcoal">
                {offer.mediaType === 'image' ? (
                  <Image
                    src={offer.mediaSrc}
                    alt={offer.title}
                    fill
                    className="object-contain"
                    sizes="500px"
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
            </div>
          ))}
        </div>

        {/* Optional fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-charcoal to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-charcoal to-transparent pointer-events-none" />
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <Link 
          href="/offers"
          className="inline-flex items-center gap-2 text-brand-green hover:text-luxury-white transition-colors font-medium text-lg"
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
