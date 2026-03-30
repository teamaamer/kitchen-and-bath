'use client'

import { motion } from 'framer-motion'

export default function BrandPhilosophy() {
  return (
    <section className="py-32 bg-luxury-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[3/4] overflow-hidden max-w-md">
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
            <p className="text-brand-green text-sm font-medium tracking-widest uppercase mb-6">
              Our Philosophy
            </p>
            <h2 className="font-heading text-5xl md:text-6xl text-charcoal mb-8 leading-tight">
              Designed to bring clarity, beauty, and function into everyday spaces
            </h2>
            <p className="text-muted-taupe text-xl leading-relaxed mb-8">
              At KBS, we believe that luxury is found in the details. Every fixture, every finish, every line is considered with care. Our products are designed for those who appreciate the intersection of form and function, where architectural rigor meets everyday comfort.
            </p>
            <p className="text-muted-taupe text-xl leading-relaxed mb-12">
              We work with premium materials, collaborate with skilled artisans, and maintain rigorous quality standards to ensure that each piece not only looks exceptional but performs flawlessly for years to come.
            </p>
            <div className="grid grid-cols-3 gap-12 pt-8 border-t border-stone-gray/30">
              <div>
                <p className="font-heading text-5xl text-charcoal mb-3">15+</p>
                <p className="text-base text-muted-taupe">Years of Excellence</p>
              </div>
              <div>
                <p className="font-heading text-5xl text-charcoal mb-3">500+</p>
                <p className="text-base text-muted-taupe">Projects Completed</p>
              </div>
              <div>
                <p className="font-heading text-5xl text-charcoal mb-3">98%</p>
                <p className="text-base text-muted-taupe">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
