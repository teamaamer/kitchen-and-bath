'use client'

import { motion } from 'framer-motion'
import { Award, Sparkles, Shield, Truck, Users } from 'lucide-react'
import SectionIntro from '@/components/SectionIntro'

const features = [
  {
    icon: Award,
    title: 'Premium Craftsmanship',
    description: 'Every piece is crafted with meticulous attention to detail using the finest materials.',
  },
  {
    icon: Sparkles,
    title: 'Timeless Design',
    description: 'Our products blend contemporary aesthetics with enduring elegance.',
  },
  {
    icon: Shield,
    title: 'Lifetime Warranty',
    description: 'We stand behind our quality with comprehensive warranty coverage.',
  },
  {
    icon: Truck,
    title: 'White Glove Service',
    description: 'Professional delivery and installation support for a seamless experience.',
  },
  {
    icon: Users,
    title: 'Design Consultation',
    description: 'Expert guidance to help you create the perfect space.',
  },
]

export default function WhyKBS() {
  return (
    <section className="py-24 bg-luxury-white">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionIntro
          label="Why Choose KBS"
          title="Uncompromising Quality & Service"
          description="We are committed to excellence in every aspect of our business, from design to delivery."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-warm-ivory rounded-full mb-6">
                <feature.icon className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-heading text-2xl text-charcoal mb-3">{feature.title}</h3>
              <p className="text-muted-taupe leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
