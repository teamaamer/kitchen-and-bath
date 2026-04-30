'use client'

import { motion } from 'framer-motion'
import { Award, Sparkles, Shield, Users } from 'lucide-react'
import SectionIntro from '@/components/SectionIntro'

const features = [
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Every product is selected for its craftsmanship, durability, and refined finish.',
  },
  {
    icon: Sparkles,
    title: 'Timeless Design',
    description: 'Our products blend contemporary aesthetics with enduring elegance.',
  },
  {
    icon: Shield,
    title: 'Trusted Brands',
    description: 'We partner with established manufacturers known for quality and reliability.',
  },
  {
    icon: Users,
    title: 'Design Consultation',
    description: 'Expert guidance to help you select the right products for your space.',
  },
]

export default function WhyKBS() {
  return (
    <section className="py-20 md:py-28 bg-warm-beige">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionIntro
          label="Why Choose KBS"
          title="Quality, Design, and Expertise"
          description="We bring together premium products, trusted brands, and personalized guidance to help you create exceptional spaces."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group bg-luxury-white p-8 border border-stone-gray/20 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top accent line */}
              <div className="w-8 h-0.5 bg-soft-gold mb-6 group-hover:w-12 transition-all duration-300" />

              <div className="w-12 h-12 bg-warm-ivory flex items-center justify-center mb-5 group-hover:bg-brand-green/5 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-brand-green" />
              </div>

              <h3 className="font-heading text-lg font-semibold text-charcoal mb-3 group-hover:text-brand-green transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-muted-taupe text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
