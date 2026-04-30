'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react'

const contactInfo = [
  { icon: Phone, label: 'Phone', value: 'Call us for a quote', href: 'tel:+1' },
  { icon: Mail, label: 'Email', value: 'info@kbssociety.com', href: 'mailto:info@kbssociety.com' },
  { icon: MapPin, label: 'Showroom', value: 'Visit our showroom to see products in person' },
  { icon: Clock, label: 'Response Time', value: 'We reply within 1–2 business days' },
]

const productOptions = [
  'Framed Kitchen Cabinets',
  'Flat-Door Kitchen Cabinets',
  'RTA Cabinets',
  'Countertops',
  'Vanities',
  'LED Mirrors',
  'LED Medicine Cabinets',
  'Sinks',
  'Faucets',
  'Bath Accessories',
  'Doors',
  'Flooring',
  'Moldings & Trims',
  'Hoods',
]

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    productInterests: [] as string[],
    timeline: '',
    zipCode: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCheckbox = (value: string) => {
    const updated = formData.productInterests.includes(value)
      ? formData.productInterests.filter(i => i !== value)
      : [...formData.productInterests, value]
    setFormData({ ...formData, productInterests: updated })
  }

  return (
    <div className="pt-24 min-h-screen bg-warm-ivory">
      {/* Hero */}
      <section className="py-16 md:py-20 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #C8A96B 0, #C8A96B 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-soft-gold/40 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-6 h-px bg-soft-gold/60" />
              <span className="text-soft-gold text-[11px] font-semibold tracking-[0.25em] uppercase">Get in Touch</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-luxury-white mb-4 leading-tight">
              Request a Quote
            </h1>
            <p className="text-stone-gray/80 text-lg leading-relaxed max-w-xl">
              Tell us about your project and we'll get back to you within 1–2 business days with a personalized quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content — split layout */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 max-w-6xl mx-auto">

            {/* Left — contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2 className="font-heading text-2xl text-charcoal mb-8">Contact Information</h2>

              <div className="space-y-6 mb-10">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-green/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-brand-green" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-taupe tracking-widest uppercase mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-charcoal text-sm font-medium hover:text-brand-green transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-charcoal text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-stone-gray/30 mb-8" />

              {/* Why KBS callout */}
              <div className="bg-luxury-white border border-stone-gray/20 p-6 shadow-soft">
                <p className="text-xs font-semibold text-brand-green tracking-widest uppercase mb-4">Why Choose KBS</p>
                {[
                  'No prices hidden — we quote everything transparently',
                  'Premium products from trusted manufacturers',
                  'Personalized design consultation included',
                  'Fast turnaround on all quote requests',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3 mb-3 last:mb-0">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <p className="text-charcoal text-sm leading-snug">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              {submitted ? (
                <div className="bg-luxury-white border border-stone-gray/20 shadow-soft p-10 text-center">
                  <div className="w-14 h-14 bg-brand-green flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-7 h-7 text-luxury-white" />
                  </div>
                  <h3 className="font-heading text-2xl text-charcoal mb-3">Quote Request Received</h3>
                  <p className="text-muted-taupe text-sm leading-relaxed max-w-sm mx-auto">
                    Thank you! Our team will review your project details and reach out within 1–2 business days.
                  </p>
                </div>
              ) : (
                <div className="bg-luxury-white border border-stone-gray/20 shadow-soft p-8 md:p-10">
                  <h2 className="font-heading text-2xl text-charcoal mb-8">Project Details</h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-charcoal tracking-wider uppercase mb-2">Full Name *</label>
                        <input type="text" name="name" required value={formData.name} onChange={handleChange}
                          className="premium-input" placeholder="Your name" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-charcoal tracking-wider uppercase mb-2">Email *</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleChange}
                          className="premium-input" placeholder="you@example.com" />
                      </div>
                    </div>

                    {/* Phone + Zip */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-charcoal tracking-wider uppercase mb-2">Phone *</label>
                        <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                          className="premium-input" placeholder="(555) 000-0000" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-charcoal tracking-wider uppercase mb-2">Zip Code *</label>
                        <input type="text" name="zipCode" required value={formData.zipCode} onChange={handleChange}
                          className="premium-input" placeholder="00000" />
                      </div>
                    </div>

                    {/* Project type + timeline */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-charcoal tracking-wider uppercase mb-2">Project Type *</label>
                        <select name="projectType" required value={formData.projectType} onChange={handleChange}
                          className="premium-input">
                          <option value="">Select type…</option>
                          <option value="new-construction">New Construction</option>
                          <option value="renovation">Renovation</option>
                          <option value="remodel">Remodel</option>
                          <option value="replacement">Replacement</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-charcoal tracking-wider uppercase mb-2">Timeline *</label>
                        <select name="timeline" required value={formData.timeline} onChange={handleChange}
                          className="premium-input">
                          <option value="">Select timeline…</option>
                          <option value="immediate">Immediate (1–2 weeks)</option>
                          <option value="1-month">1 Month</option>
                          <option value="2-3-months">2–3 Months</option>
                          <option value="3-6-months">3–6 Months</option>
                          <option value="6-plus-months">6+ Months</option>
                        </select>
                      </div>
                    </div>

                    {/* Product interests */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal tracking-wider uppercase mb-3">
                        Products of Interest
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {productOptions.map(product => (
                          <label key={product} className="flex items-center gap-2.5 cursor-pointer group">
                            <div className={`w-4 h-4 border flex items-center justify-center flex-shrink-0 transition-colors duration-150 ${
                              formData.productInterests.includes(product)
                                ? 'bg-brand-green border-brand-green'
                                : 'border-stone-gray group-hover:border-brand-green'
                            }`}>
                              {formData.productInterests.includes(product) && (
                                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 12 12">
                                  <path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                </svg>
                              )}
                            </div>
                            <input
                              type="checkbox"
                              className="sr-only"
                              checked={formData.productInterests.includes(product)}
                              onChange={() => handleCheckbox(product)}
                            />
                            <span className="text-charcoal text-xs leading-snug group-hover:text-brand-green transition-colors duration-150">
                              {product}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal tracking-wider uppercase mb-2">
                        Additional Details
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, dimensions, style preferences, or any special requirements…"
                        className="premium-input resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group w-full flex items-center justify-center gap-2 px-8 py-4 bg-brand-green text-luxury-white text-sm font-semibold tracking-wide hover:bg-deep-olive transition-all duration-300 hover:-translate-y-px hover:shadow-soft"
                    >
                      Submit Quote Request
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>

                    <p className="text-xs text-muted-taupe text-center">
                      We'll review your request and respond within 1–2 business days.
                    </p>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
