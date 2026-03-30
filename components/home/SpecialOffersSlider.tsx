'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionIntro from '@/components/SectionIntro'
import Button from '@/components/ui/Button'
import { offers } from '@/data/offers'

export default function SpecialOffersSlider() {
  const featuredOffers = offers.filter(offer => offer.featured)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection
      if (nextIndex < 0) nextIndex = featuredOffers.length - 1
      if (nextIndex >= featuredOffers.length) nextIndex = 0
      return nextIndex
    })
  }

  // Auto-advance slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 5000)
    return () => clearInterval(timer)
  }, [currentIndex])

  if (featuredOffers.length === 0) return null

  return (
    <section className="py-24 bg-warm-ivory overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionIntro
          label="Limited Time"
          title="Special Offers"
          description="Explore current promotions and limited-time kitchen and bath offers from KBS."
        />

        <div className="relative mt-16">
          {/* Slider Container */}
          <div className="relative h-[500px] md:h-[600px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className="absolute w-full h-full"
              >
                <div className="relative w-full h-full bg-stone-gray/10 overflow-hidden group">
                  {featuredOffers[currentIndex].mediaType === 'image' ? (
                    <Image
                      src={featuredOffers[currentIndex].mediaSrc}
                      alt={featuredOffers[currentIndex].title}
                      fill
                      className="object-contain"
                      priority
                      sizes="(max-width: 768px) 100vw, 90vw"
                    />
                  ) : (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-contain"
                    >
                      <source src={featuredOffers[currentIndex].mediaSrc} type="video/mp4" />
                    </video>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-charcoal/80 hover:bg-charcoal backdrop-blur-sm p-3 transition-colors"
            aria-label="Previous offer"
          >
            <ChevronLeft className="w-6 h-6 text-luxury-white" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-charcoal/80 hover:bg-charcoal backdrop-blur-sm p-3 transition-colors"
            aria-label="Next offer"
          >
            <ChevronRight className="w-6 h-6 text-luxury-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {featuredOffers.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`h-2 transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-brand-green'
                    : 'w-2 bg-muted-taupe hover:bg-charcoal'
                }`}
                aria-label={`Go to offer ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
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
