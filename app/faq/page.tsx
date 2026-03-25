'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '@/data/faqs'

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(faqs.map(faq => faq.category)))
  const filteredFaqs = selectedCategory
    ? faqs.filter(faq => faq.category === selectedCategory)
    : faqs

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
              Frequently Asked Questions
            </h1>
            <p className="text-stone-gray text-xl leading-relaxed">
              Find answers to common questions about our products, services, and policies.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-warm-ivory border-b border-stone-gray">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 transition-colors ${
                selectedCategory === null
                  ? 'bg-brand-green text-luxury-white'
                  : 'bg-luxury-white text-charcoal hover:bg-stone-gray'
              }`}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 transition-colors ${
                  selectedCategory === category
                    ? 'bg-brand-green text-luxury-white'
                    : 'bg-luxury-white text-charcoal hover:bg-stone-gray'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-warm-ivory">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-luxury-white border border-stone-gray overflow-hidden"
                >
                  <button
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-warm-ivory transition-colors"
                  >
                    <span className="font-heading text-xl text-charcoal pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-6 h-6 text-brand-green flex-shrink-0 transition-transform ${
                        openId === faq.id ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openId === faq.id && (
                    <div className="px-6 pb-5">
                      <p className="text-muted-taupe leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-luxury-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl text-charcoal mb-4">
              Still have questions?
            </h2>
            <p className="text-muted-taupe mb-8">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-luxury-white hover:bg-deep-olive transition-colors font-medium"
              >
                Contact Support
              </a>
              <a
                href="/quote"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-luxury-white transition-colors font-medium"
              >
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
