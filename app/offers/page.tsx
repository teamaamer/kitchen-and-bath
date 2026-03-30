'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'

interface FacebookPost {
  id: string
  message: string
  image: string
  url: string
  createdTime: string
}

export default function OffersPage() {
  const [posts, setPosts] = useState<FacebookPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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

  const truncateMessage = (message: string, maxLength: number = 150) => {
    if (!message) return 'Exclusive offer from KBS'
    if (message.length <= maxLength) return message
    return message.substring(0, maxLength).trim() + '...'
  }

  const extractTitle = (message: string) => {
    if (!message) return 'Special Offer'
    const firstLine = message.split('\n')[0]
    const firstSentence = firstLine.split('.')[0]
    return truncateMessage(firstSentence, 80)
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
              Special Offers
            </h1>
            <p className="text-stone-gray text-xl leading-relaxed">
              Discover our current promotions on premium kitchen and bath products. Limited-time opportunities to bring luxury into your home.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-warm-ivory">
        <div className="container mx-auto px-4 lg:px-8">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-green"></div>
            </div>
          ) : error || posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-taupe text-lg mb-6">
                {error || 'No active promotions at this time. Check back soon for special offers.'}
              </p>
              <Link href="/categories">
                <Button variant="primary" size="lg">
                  Browse Products
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-luxury-white overflow-hidden group"
                >
                  <a 
                    href={post.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative h-[400px] overflow-hidden bg-stone-gray/10">
                      <Image
                        src={post.image}
                        alt={extractTitle(post.message)}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    </div>
                    <div className="p-8">
                      <h2 className="font-heading text-3xl text-charcoal mb-3">
                        {extractTitle(post.message)}
                      </h2>
                      <p className="text-muted-taupe text-lg mb-6 leading-relaxed line-clamp-3">
                        {truncateMessage(post.message)}
                      </p>
                      <div className="flex gap-3">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/10 text-brand-green border border-brand-green/20 rounded-lg text-sm font-semibold">
                          <span>View on Facebook</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </span>
                        <Link 
                          href="/quote"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green hover:bg-deep-olive text-luxury-white rounded-lg transition-all duration-300 text-sm font-semibold"
                        >
                          Request Quote
                        </Link>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-charcoal text-luxury-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-stone-gray text-lg mb-8 max-w-2xl mx-auto">
            Contact us to discuss your project and learn how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button variant="primary" size="lg">
                Request Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="border-luxury-white text-luxury-white hover:bg-luxury-white hover:text-charcoal">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
