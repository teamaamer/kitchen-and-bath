'use client'

import { motion } from 'framer-motion'

export default function BrandPhilosophy() {
  return (
    <section className="py-24 bg-luxury-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img 
                src="/brand-philosophy-image.png" 
                alt="KBS Brand Philosophy - Premium kitchen and bath fixtures showcasing luxury design and craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-brand-green text-sm font-medium tracking-widest uppercase mb-4">
              Our Philosophy
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-charcoal mb-6">
              Designed to bring clarity, beauty, and function into everyday spaces
            </h2>
            <p className="text-muted-taupe text-lg leading-relaxed mb-6">
              At KBS, we believe that luxury is found in the details. Every fixture, every finish, every line is considered with care. Our products are designed for those who appreciate the intersection of form and function, where architectural rigor meets everyday comfort.
            </p>
            <p className="text-muted-taupe text-lg leading-relaxed mb-8">
              We work with premium materials, collaborate with skilled artisans, and maintain rigorous quality standards to ensure that each piece not only looks exceptional but performs flawlessly for years to come.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-stone-gray">
              <div>
                <p className="font-heading text-3xl text-charcoal mb-2">15+</p>
                <p className="text-sm text-muted-taupe">Years of Excellence</p>
              </div>
              <div>
                <p className="font-heading text-3xl text-charcoal mb-2">500+</p>
                <p className="text-sm text-muted-taupe">Projects Completed</p>
              </div>
              <div>
                <p className="font-heading text-3xl text-charcoal mb-2">98%</p>
                <p className="text-sm text-muted-taupe">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
