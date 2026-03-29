'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SectionIntro from '@/components/SectionIntro'
import Button from '@/components/ui/Button'
import { Award, Shield, Palette, Factory } from 'lucide-react'

export default function BrandsPage() {
  const brandLogos = [
    '/Brandslogos/logo1b.png',
    '/Brandslogos/logo2b.png',
    '/Brandslogos/logo3b Background Removed.png',
    '/Brandslogos/logo4b.png',
    '/Brandslogos/logo5b.png',
    '/Brandslogos/logo6b-removebg-preview.png',
    '/Brandslogos/logo7b-removebg-preview.png',
  ]

  const partnerValues = [
    {
      icon: Award,
      title: 'Quality Materials',
      description: 'Premium materials that meet the highest standards of durability and finish.',
    },
    {
      icon: Shield,
      title: 'Reliable Performance',
      description: 'Proven track records of consistent quality and long-lasting performance.',
    },
    {
      icon: Palette,
      title: 'Design Flexibility',
      description: 'Diverse options that support creative vision and unique design requirements.',
    },
    {
      icon: Factory,
      title: 'Trusted Manufacturing',
      description: 'Established manufacturers with rigorous quality control and ethical practices.',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-charcoal text-luxury-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6">
              Trusted Brand Partners
            </h1>
            <p className="text-stone-gray text-xl leading-relaxed">
              We work with carefully selected manufacturers known for quality, craftsmanship, and design excellence in kitchen and bath solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Logos Grid */}
      <section className="py-24 bg-warm-ivory">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {brandLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center p-8 bg-luxury-white hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative w-full h-24">
                  <Image
                    src={logo}
                    alt={`Brand Partner ${index + 1}`}
                    fill
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Choose Our Partners */}
      <section className="py-24 bg-luxury-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-4xl md:text-5xl text-charcoal mb-6">
                Why We Choose Our Partners
              </h2>
              <p className="text-muted-taupe text-lg leading-relaxed">
                Every brand we work with is chosen for its quality, reliability, finish standards, and ability to support beautifully designed spaces that last.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnerValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-warm-ivory flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-brand-green" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-charcoal mb-2">{value.title}</h3>
                    <p className="text-muted-taupe leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
              Need help choosing the right brand?
            </h2>
            <p className="text-warm-ivory text-lg mb-8">
              We can guide you toward the best fit for your style, space, and project needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button variant="secondary" size="lg">
                  Request Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" size="lg" className="border border-luxury-white text-luxury-white hover:bg-luxury-white hover:text-brand-green">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
