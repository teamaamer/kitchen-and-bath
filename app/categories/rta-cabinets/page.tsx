'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, X, Send } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import CabinetCard from '@/components/cabinets/CabinetCard'
import Button from '@/components/ui/Button'
import {
  cabinets,
  cabinetTypeLabels,
  cabinetStyleLabels,
  cabinetFinishLabels,
  type Cabinet,
  type CabinetType,
  type CabinetStyle,
  type CabinetFinish,
} from '@/data/cabinets'

interface QuoteItem {
  cabinet: Cabinet
  quantity: number
}

interface FormData {
  name: string
  email: string
  phone: string
  projectType: string
  zipCode: string
  notes: string
}

export default function RTACabinetsPage() {
  const [filterType, setFilterType] = useState<CabinetType | 'all'>('all')
  const [filterStyle, setFilterStyle] = useState<CabinetStyle | 'all'>('all')
  const [filterFinish, setFilterFinish] = useState<CabinetFinish | 'all'>('all')
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([])
  const [showQuote, setShowQuote] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '', projectType: '', zipCode: '', notes: '',
  })

  const filtered = useMemo(() => {
    return cabinets.filter((c) => {
      if (filterType !== 'all' && c.type !== filterType) return false
      if (filterStyle !== 'all' && c.style !== filterStyle) return false
      if (filterFinish !== 'all' && c.finish !== filterFinish) return false
      return true
    })
  }, [filterType, filterStyle, filterFinish])

  const totalItems = quoteItems.reduce((sum, i) => sum + i.quantity, 0)

  function addToQuote(cabinet: Cabinet) {
    setQuoteItems((prev) => {
      const existing = prev.find((i) => i.cabinet.id === cabinet.id)
      if (existing) {
        return prev.map((i) =>
          i.cabinet.id === cabinet.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { cabinet, quantity: 1 }]
    })
  }

  function removeOne(id: string) {
    setQuoteItems((prev) => {
      const existing = prev.find((i) => i.cabinet.id === id)
      if (!existing) return prev
      if (existing.quantity <= 1) return prev.filter((i) => i.cabinet.id !== id)
      return prev.map((i) =>
        i.cabinet.id === id ? { ...i, quantity: i.quantity - 1 } : i
      )
    })
  }

  function removeAll(id: string) {
    setQuoteItems((prev) => prev.filter((i) => i.cabinet.id !== id))
  }

  function getQuantity(id: string) {
    return quoteItems.find((i) => i.cabinet.id === id)?.quantity ?? 0
  }

  function handleFormChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const filterBtnClass = (active: boolean) =>
    `px-4 py-2 text-sm border transition-colors ${
      active
        ? 'bg-brand-green border-brand-green text-luxury-white'
        : 'border-stone-gray text-charcoal hover:border-charcoal'
    }`

  return (
    <div className="pt-24 min-h-screen bg-warm-ivory">
      {/* Breadcrumb */}
      <section className="py-6 bg-warm-ivory border-b border-stone-gray/30">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Categories', href: '/categories' },
              { label: 'RTA Cabinets' },
            ]}
          />
        </div>
      </section>

      {/* Hero */}
      <section className="py-16 bg-charcoal text-luxury-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <h1 className="font-heading text-5xl md:text-6xl mb-4">RTA Cabinet Catalog</h1>
            <p className="text-stone-gray text-lg leading-relaxed">
              Browse our full line of ready-to-assemble cabinets — Shaker, Raised Panel, and Modern styles in
              multiple finishes. Select what you need, build your list, and request a personalized quote.
              No prices listed — we price every kitchen individually to give you the best deal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-luxury-white border-b border-stone-gray/20 sticky top-24 z-30 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-6 items-start">
            {/* Type */}
            <div>
              <p className="text-xs font-medium text-muted-taupe uppercase tracking-widest mb-2">Cabinet Type</p>
              <div className="flex flex-wrap gap-2">
                <button className={filterBtnClass(filterType === 'all')} onClick={() => setFilterType('all')}>All</button>
                {(Object.keys(cabinetTypeLabels) as CabinetType[]).map((t) => (
                  <button key={t} className={filterBtnClass(filterType === t)} onClick={() => setFilterType(t)}>
                    {cabinetTypeLabels[t]}
                  </button>
                ))}
              </div>
            </div>

            {/* Style */}
            <div>
              <p className="text-xs font-medium text-muted-taupe uppercase tracking-widest mb-2">Door Style</p>
              <div className="flex flex-wrap gap-2">
                <button className={filterBtnClass(filterStyle === 'all')} onClick={() => setFilterStyle('all')}>All</button>
                {(Object.keys(cabinetStyleLabels) as CabinetStyle[]).map((s) => (
                  <button key={s} className={filterBtnClass(filterStyle === s)} onClick={() => setFilterStyle(s)}>
                    {cabinetStyleLabels[s]}
                  </button>
                ))}
              </div>
            </div>

            {/* Finish */}
            <div>
              <p className="text-xs font-medium text-muted-taupe uppercase tracking-widest mb-2">Finish</p>
              <div className="flex flex-wrap gap-2">
                <button className={filterBtnClass(filterFinish === 'all')} onClick={() => setFilterFinish('all')}>All</button>
                {(Object.keys(cabinetFinishLabels) as CabinetFinish[]).map((f) => (
                  <button key={f} className={filterBtnClass(filterFinish === f)} onClick={() => setFilterFinish(f)}>
                    {cabinetFinishLabels[f]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-12 pb-40">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sm text-muted-taupe mb-8">
            Showing {filtered.length} cabinet{filtered.length !== 1 ? 's' : ''}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((cabinet, i) => (
              <motion.div
                key={cabinet.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
              >
                <CabinetCard
                  cabinet={cabinet}
                  quantity={getQuantity(cabinet.id)}
                  onAdd={addToQuote}
                  onRemove={removeOne}
                />
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="text-muted-taupe text-lg">No cabinets match your filters.</p>
              <button
                onClick={() => { setFilterType('all'); setFilterStyle('all'); setFilterFinish('all') }}
                className="mt-4 text-brand-green underline text-sm"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Floating Quote Bar */}
      <AnimatePresence>
        {totalItems > 0 && !showQuote && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-charcoal border-t-2 border-brand-green shadow-2xl"
          >
            <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3 text-luxury-white">
                <ShoppingCart className="w-5 h-5 text-brand-green" />
                <span className="font-medium">
                  {totalItems} cabinet{totalItems !== 1 ? 's' : ''} selected
                </span>
                <span className="text-stone-gray text-sm hidden sm:inline">
                  — {quoteItems.length} line item{quoteItems.length !== 1 ? 's' : ''}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuoteItems([])}
                  className="text-stone-gray hover:text-luxury-white text-sm transition-colors"
                >
                  Clear
                </button>
                <Button variant="primary" size="sm" onClick={() => setShowQuote(true)}>
                  Request Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quote Panel */}
      <AnimatePresence>
        {showQuote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/70 overflow-y-auto"
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="min-h-screen bg-luxury-white mt-16 rounded-t-2xl"
            >
              <div className="sticky top-0 bg-luxury-white border-b border-stone-gray/30 px-6 py-4 flex items-center justify-between z-10">
                <h2 className="font-heading text-2xl text-charcoal">Your Cabinet Quote Request</h2>
                <button
                  onClick={() => setShowQuote(false)}
                  className="text-muted-taupe hover:text-charcoal transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="container mx-auto px-4 lg:px-8 py-10 max-w-4xl">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-20"
                  >
                    <div className="w-16 h-16 bg-brand-green flex items-center justify-center mx-auto mb-6">
                      <Send className="w-8 h-8 text-luxury-white" />
                    </div>
                    <h3 className="font-heading text-3xl text-charcoal mb-4">Quote Request Received!</h3>
                    <p className="text-muted-taupe text-lg max-w-md mx-auto">
                      Thank you! Our team will review your cabinet selections and get back to you within
                      1–2 business days with a personalized quote.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setShowQuote(false); setQuoteItems([]) }}
                      className="mt-8 text-brand-green underline text-sm"
                    >
                      Back to catalog
                    </button>
                  </motion.div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Selected cabinets */}
                    <div>
                      <h3 className="font-heading text-xl text-charcoal mb-6">
                        Selected Cabinets ({totalItems} total)
                      </h3>
                      <div className="space-y-3">
                        {quoteItems.map(({ cabinet, quantity }) => (
                          <div
                            key={cabinet.id}
                            className="flex items-start gap-4 p-4 bg-warm-ivory border border-stone-gray/30"
                          >
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-charcoal text-sm leading-snug">{cabinet.name}</p>
                              <p className="text-xs text-muted-taupe font-mono mt-0.5">{cabinet.sku}</p>
                              <p className="text-xs text-muted-taupe mt-0.5">
                                {cabinet.width}" × {cabinet.height}" × {cabinet.depth}"
                              </p>
                            </div>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              <button
                                onClick={() => removeOne(cabinet.id)}
                                className="w-7 h-7 border border-stone-gray flex items-center justify-center text-charcoal hover:bg-warm-ivory transition-colors text-lg leading-none"
                              >
                                −
                              </button>
                              <span className="w-8 text-center font-medium text-charcoal">{quantity}</span>
                              <button
                                onClick={() => addToQuote(cabinet)}
                                className="w-7 h-7 border border-stone-gray flex items-center justify-center text-charcoal hover:bg-warm-ivory transition-colors text-lg leading-none"
                              >
                                +
                              </button>
                              <button
                                onClick={() => removeAll(cabinet.id)}
                                className="ml-1 text-muted-taupe hover:text-charcoal transition-colors"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => setShowQuote(false)}
                        className="mt-6 text-brand-green underline text-sm"
                      >
                        ← Continue browsing
                      </button>
                    </div>

                    {/* Contact form */}
                    <div>
                      <h3 className="font-heading text-xl text-charcoal mb-6">Your Information</h3>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-charcoal mb-1">Full Name *</label>
                            <input
                              type="text"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleFormChange}
                              className="w-full px-4 py-3 bg-warm-ivory border border-stone-gray focus:border-brand-green focus:outline-none transition-colors text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-charcoal mb-1">Phone *</label>
                            <input
                              type="tel"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleFormChange}
                              className="w-full px-4 py-3 bg-warm-ivory border border-stone-gray focus:border-brand-green focus:outline-none transition-colors text-sm"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1">Email *</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleFormChange}
                            className="w-full px-4 py-3 bg-warm-ivory border border-stone-gray focus:border-brand-green focus:outline-none transition-colors text-sm"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-charcoal mb-1">Zip Code *</label>
                            <input
                              type="text"
                              name="zipCode"
                              required
                              value={formData.zipCode}
                              onChange={handleFormChange}
                              className="w-full px-4 py-3 bg-warm-ivory border border-stone-gray focus:border-brand-green focus:outline-none transition-colors text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-charcoal mb-1">Project Type</label>
                            <select
                              name="projectType"
                              value={formData.projectType}
                              onChange={handleFormChange}
                              className="w-full px-4 py-3 bg-warm-ivory border border-stone-gray focus:border-brand-green focus:outline-none transition-colors text-sm"
                            >
                              <option value="">Select…</option>
                              <option value="new-construction">New Construction</option>
                              <option value="renovation">Renovation / Remodel</option>
                              <option value="replacement">Cabinet Replacement</option>
                              <option value="addition">Home Addition</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1">Additional Notes</label>
                          <textarea
                            name="notes"
                            rows={4}
                            value={formData.notes}
                            onChange={handleFormChange}
                            placeholder="Tell us about your kitchen layout, dimensions, or any special requirements…"
                            className="w-full px-4 py-3 bg-warm-ivory border border-stone-gray focus:border-brand-green focus:outline-none transition-colors resize-none text-sm"
                          />
                        </div>

                        <div className="bg-warm-ivory border border-stone-gray/30 p-4 rounded-sm">
                          <p className="text-xs text-muted-taupe">
                            <strong className="text-charcoal">Your selection summary</strong> ({totalItems} cabinets, {quoteItems.length} SKUs)
                            will be included with your request. Our team will contact you within 1–2 business days.
                          </p>
                        </div>

                        <Button type="submit" variant="primary" size="lg" className="w-full">
                          <Send className="w-4 h-4 mr-2" />
                          Send Quote Request
                        </Button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
