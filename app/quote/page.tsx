'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Button from '@/components/ui/Button'

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    productInterests: [] as string[],
    budgetRange: '',
    timeline: '',
    zipCode: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Quote request submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCheckboxChange = (value: string) => {
    const updated = formData.productInterests.includes(value)
      ? formData.productInterests.filter(item => item !== value)
      : [...formData.productInterests, value]
    setFormData({ ...formData, productInterests: updated })
  }

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
              Request a Quote
            </h1>
            <p className="text-stone-gray text-xl leading-relaxed">
              Tell us about your project and we'll provide a detailed quote tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-warm-ivory">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-luxury-white p-8 md:p-12"
            >
              <h2 className="font-heading text-3xl text-charcoal mb-8">Project Details</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-warm-ivory border border-stone-gray focus:border-brand-green focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-warm-ivory border border-stone-gray focus:border-brand-green focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-warm-ivory border border-stone-gray focus:border-brand-green focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-charcoal mb-2">
                      Zip Code *
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      required
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-warm-ivory border border-stone-gray focus:border-brand-green focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-charcoal mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-warm-ivory border border-stone-gray focus:border-brand-green focus:outline-none transition-colors"
                  >
                    <option value="">Select project type</option>
                    <option value="new-construction">New Construction</option>
                    <option value="renovation">Renovation</option>
                    <option value="remodel">Remodel</option>
                    <option value="replacement">Replacement</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-3">
                    Product Interests *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['Vanities', 'LED Mirrors', 'Medicine Cabinets', 'Closets', 'Faucets', 'Accessories'].map(product => (
                      <label key={product} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.productInterests.includes(product)}
                          onChange={() => handleCheckboxChange(product)}
                          className="w-5 h-5 text-brand-green focus:ring-brand-green border-stone-gray"
                        />
                        <span className="text-charcoal">{product}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budgetRange" className="block text-sm font-medium text-charcoal mb-2">
                      Budget Range *
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      required
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-warm-ivory border border-stone-gray focus:border-brand-green focus:outline-none transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-charcoal mb-2">
                      Timeline *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      required
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-warm-ivory border border-stone-gray focus:border-brand-green focus:outline-none transition-colors"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (1-2 weeks)</option>
                      <option value="1-month">1 Month</option>
                      <option value="2-3-months">2-3 Months</option>
                      <option value="3-6-months">3-6 Months</option>
                      <option value="6-plus-months">6+ Months</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your project, specific requirements, or any questions you have..."
                    className="w-full px-4 py-3 bg-warm-ivory border border-stone-gray focus:border-brand-green focus:outline-none transition-colors resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Submit Quote Request
                </Button>

                <p className="text-sm text-muted-taupe text-center">
                  We'll review your request and get back to you within 1-2 business days with a detailed quote.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
