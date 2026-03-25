'use client'

import { motion } from 'framer-motion'
import SectionIntro from '@/components/SectionIntro'
import TestimonialCard from '@/components/TestimonialCard'
import { testimonials } from '@/data/testimonials'

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-luxury-white">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionIntro
          label="Testimonials"
          title="Trusted by Designers & Homeowners"
          description="Hear from those who have experienced the KBS difference."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
