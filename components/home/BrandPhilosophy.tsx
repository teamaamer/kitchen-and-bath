'use client'

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 2500, bounce: 0 })
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (isInView) motionValue.set(value)
  }, [motionValue, isInView, value])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix
      }
    })
  }, [springValue, suffix])

  return <span ref={ref} className="font-heading text-5xl md:text-6xl font-extrabold text-charcoal">0{suffix}</span>
}

const stats = [
  { value: 15, suffix: '+', label: 'Years of Excellence' },
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
]

export default function BrandPhilosophy() {
  return (
    <section className="py-20 md:py-28 bg-luxury-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-center max-w-7xl mx-auto">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden max-w-sm mx-auto lg:mx-0">
              <img
                src="/brand-philosophy-image.png"
                alt="KBS Premium kitchen and bath craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-soft-gold/40 -z-10 hidden lg:block" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-warm-ivory -z-10 hidden lg:block" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-soft-gold" />
              <p className="text-brand-green text-[11px] font-semibold tracking-[0.25em] uppercase">
                Our Philosophy
              </p>
            </div>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-charcoal mb-7 leading-tight">
              Designed to bring clarity, beauty, and function into everyday spaces
            </h2>

            <p className="text-muted-taupe text-base leading-loose mb-5">
              At KBS, we believe that luxury is found in the details. Every fixture, every finish, every line is considered with care. Our products are designed for those who appreciate the intersection of form and function, where architectural rigor meets everyday comfort.
            </p>
            <p className="text-muted-taupe text-base leading-loose mb-10">
              We work with premium materials, collaborate with skilled artisans, and maintain rigorous quality standards to ensure that each piece not only looks exceptional but performs flawlessly for years to come.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-stone-gray/30">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <div className="mb-1">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs text-muted-taupe tracking-wide uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
