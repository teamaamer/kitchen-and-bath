'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface FacebookPost {
  id: string
  message: string
  image: string
  url: string
  createdTime: string
}

export default function FacebookOffersSection() {
  const [posts, setPosts] = useState<FacebookPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/facebook-posts')
        const data = await response.json()

        if (data.success && data.posts) {
          setPosts(data.posts)
        } else {
          setError('Unable to load offers')
        }
      } catch (err) {
        setError('Failed to load offers')
        console.error('Error fetching posts:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  // Truncate message for elegant display
  const truncateMessage = (message: string, maxLength: number = 120) => {
    if (!message) return 'Exclusive Offer'
    if (message.length <= maxLength) return message
    return message.substring(0, maxLength).trim() + '...'
  }

  // Extract title from message (first line or first sentence)
  const extractTitle = (message: string) => {
    if (!message) return 'Special Offer'
    const firstLine = message.split('\n')[0]
    const firstSentence = firstLine.split('.')[0]
    return truncateMessage(firstSentence, 60)
  }

  if (loading) {
    return (
      <section className="py-24 bg-luxury-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-brand-green text-sm font-medium tracking-widest uppercase mb-4">
              Limited Time
            </p>
            <h2 className="font-heading text-5xl md:text-6xl text-charcoal mb-6">
              Latest Offers
            </h2>
            <p className="text-muted-taupe text-xl leading-relaxed">
              Discover our latest deals and exclusive promotions
            </p>
          </div>
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-green"></div>
          </div>
        </div>
      </section>
    )
  }

  if (error || posts.length === 0) {
    return (
      <section className="py-24 bg-luxury-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-brand-green text-sm font-medium tracking-widest uppercase mb-4">
              Limited Time
            </p>
            <h2 className="font-heading text-5xl md:text-6xl text-charcoal mb-6">
              Latest Offers
            </h2>
            <p className="text-muted-taupe text-xl leading-relaxed">
              Discover our latest deals and exclusive promotions
            </p>
          </div>
          <div className="text-center py-16">
            <p className="text-muted-taupe text-lg mb-6">
              {error || 'No active promotions at this time. Check back soon!'}
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green hover:bg-deep-olive text-luxury-white rounded-lg transition-all duration-300 font-semibold"
            >
              Contact Us for Custom Quotes
            </Link>
          </div>
        </div>
      </section>
    )
  }

  // Duplicate posts for seamless infinite loop
  const allPosts = [...posts, ...posts]

  return (
    <section className="py-24 bg-luxury-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-brand-green text-sm font-medium tracking-widest uppercase mb-4"
          >
            Limited Time
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl text-charcoal mb-6"
          >
            Latest Offers
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-taupe text-xl leading-relaxed"
          >
            Discover our latest deals and exclusive promotions from KBS
          </motion.p>
        </div>
      </div>

      {/* Horizontal Scrolling Banner */}
      <div className="relative">
        {/* Gradient fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-luxury-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-luxury-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-slow hover:pause-animation gap-6">
          {allPosts.map((post, index) => (
            <motion.div
              key={`${post.id}-${index}`}
              className="flex-shrink-0 w-[450px] md:w-[550px] group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <a 
                href={post.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative h-[320px] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src={post.image}
                    alt={extractTitle(post.message)}
                    fill
                    className="object-cover"
                    sizes="550px"
                    unoptimized
                  />
                  
                  {/* Dark overlay on hover */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent transition-opacity duration-300 ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  {/* Content overlay on hover */}
                  <div 
                    className={`absolute inset-0 flex flex-col justify-end p-8 transition-opacity duration-300 ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <h3 className="font-heading text-3xl text-luxury-white mb-3">
                      {extractTitle(post.message)}
                    </h3>
                    <p className="text-stone-gray text-base mb-6 line-clamp-2">
                      {truncateMessage(post.message)}
                    </p>
                    <div className="flex gap-3">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-luxury-white/20 hover:bg-luxury-white/30 text-luxury-white border border-luxury-white/40 rounded-lg transition-all duration-300 text-sm font-semibold">
                        <span>View on Facebook</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                      <Link
                        href="/quote"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green hover:bg-deep-olive text-luxury-white rounded-lg transition-all duration-300 text-sm font-semibold"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Request Quote</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* View All CTA */}
      <div className="text-center mt-16">
        <a 
          href="https://www.facebook.com/kbs.society"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-brand-green hover:text-deep-olive transition-colors font-medium text-lg"
        >
          Follow Us on Facebook
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </section>
  )
}
