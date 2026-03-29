'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionIntro from '@/components/SectionIntro'
import { Award, Target, Heart, Users } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We pursue perfection in every detail, from material selection to final installation.',
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Architectural rigor and engineering excellence guide our design process.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do, and it shows in the quality of our work.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We collaborate closely with designers, architects, and homeowners to bring visions to life.',
    },
  ]

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
              Crafting Spaces of Distinction
            </h1>
            <p className="text-stone-gray text-xl leading-relaxed">
              KBS has been at the forefront of luxury kitchen and bath design, creating products that blend timeless elegance with modern innovation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-warm-ivory">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-stone-gray/10">
                <Image
                  src="/Aboutus.png"
                  alt="KBS Showroom Interior"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
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
                Our Story
              </p>
              <h2 className="font-heading text-4xl md:text-5xl text-charcoal mb-6">
                Born from a passion for exceptional design
              </h2>
              <p className="text-muted-taupe text-lg leading-relaxed mb-6">
                KBS was founded on the belief that the spaces we inhabit should inspire us daily. What began as a small workshop dedicated to custom vanities has grown into a comprehensive luxury brand serving designers, architects, and discerning homeowners across the country.
              </p>
              <p className="text-muted-taupe text-lg leading-relaxed mb-6">
                Every product we create is the result of careful consideration, expert craftsmanship, and an unwavering commitment to quality. We source premium materials, work with skilled artisans, and employ rigorous quality control to ensure that each piece meets our exacting standards.
              </p>
              <p className="text-muted-taupe text-lg leading-relaxed">
                Today, KBS continues to push the boundaries of what's possible in kitchen and bath design, introducing innovative products that set new standards for beauty, functionality, and durability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-luxury-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionIntro
            label="Visit Us"
            title="Inside Our Showroom"
            description="Experience our curated collection of kitchen and bath products in person."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="aspect-[4/3] relative overflow-hidden bg-stone-gray/10"
            >
              <Image
                src="/showroom/WhatsApp Image 2026-03-25 at 16.40.39.jpeg"
                alt="KBS Showroom Display 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="aspect-[4/3] relative overflow-hidden bg-stone-gray/10"
            >
              <Image
                src="/showroom/WhatsApp Image 2026-03-25 at 16.40.39 (1).jpeg"
                alt="KBS Showroom Display 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="aspect-[4/3] relative overflow-hidden bg-stone-gray/10"
            >
              <Image
                src="/showroom/WhatsApp Image 2026-03-25 at 16.40.40.jpeg"
                alt="KBS Showroom Display 3"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-warm-ivory">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionIntro
            label="Our Values"
            title="What Drives Us"
            description="The principles that guide everything we do."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-warm-ivory rounded-full mb-6">
                  <value.icon className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="font-heading text-2xl text-charcoal mb-3">{value.title}</h3>
                <p className="text-muted-taupe leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-green">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-luxury-white mb-6">
              Join us in creating exceptional spaces
            </h2>
            <p className="text-warm-ivory text-lg mb-8">
              Whether you're a designer, architect, contractor, or homeowner, we're here to help you realize your vision.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
