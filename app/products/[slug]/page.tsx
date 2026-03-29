'use client'

import { motion } from 'framer-motion'
import { use, useState } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ProductCard from '@/components/ProductCard'
import Button from '@/components/ui/Button'
import { products } from '@/data/products'
import { Check } from 'lucide-react'

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const product = products.find(p => p.slug === slug)
  const [selectedFinish, setSelectedFinish] = useState(product?.finishes?.[0] || '')
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '')

  if (!product) {
    return <div className="pt-20 min-h-screen flex items-center justify-center">Product not found</div>
  }

  const relatedProducts = product.relatedProducts
    ? products.filter(p => product.relatedProducts?.includes(p.id))
    : []

  return (
    <div className="pt-20">
      <section className="py-12 bg-warm-ivory border-b border-stone-gray">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Categories', href: '/categories' },
              { label: product.category, href: `/categories/${product.categorySlug}` },
              { label: product.name },
            ]}
          />
        </div>
      </section>

      <section className="py-16 bg-warm-ivory">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square bg-stone-gray mb-4" />
              <div className="grid grid-cols-4 gap-4">
                <div className="aspect-square bg-stone-gray" />
                <div className="aspect-square bg-stone-gray" />
                <div className="aspect-square bg-stone-gray" />
                <div className="aspect-square bg-stone-gray" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-heading text-4xl md:text-5xl text-charcoal mb-4">{product.name}</h1>
              <p className="text-sm text-muted-taupe mb-6">SKU: {product.sku}</p>

              <p className="text-muted-taupe text-lg leading-relaxed mb-8">{product.description}</p>

              {product.finishes && product.finishes.length > 0 && (
                <div className="mb-8">
                  <p className="font-medium text-charcoal mb-3">Finish</p>
                  <div className="flex flex-wrap gap-3">
                    {product.finishes.map(finish => (
                      <button
                        key={finish}
                        onClick={() => setSelectedFinish(finish)}
                        className={`px-4 py-2 border-2 transition-colors ${
                          selectedFinish === finish
                            ? 'border-brand-green bg-brand-green text-luxury-white'
                            : 'border-stone-gray text-charcoal hover:border-brand-green'
                        }`}
                      >
                        {finish}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-8">
                  <p className="font-medium text-charcoal mb-3">Size</p>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border-2 transition-colors ${
                          selectedSize === size
                            ? 'border-brand-green bg-brand-green text-luxury-white'
                            : 'border-stone-gray text-charcoal hover:border-brand-green'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-4 mb-12">
                <Link href="/quote" className="flex-1">
                  <Button variant="primary" size="lg" className="w-full">
                    Request Quote
                  </Button>
                </Link>
                <Link href="/contact" className="flex-1">
                  <Button variant="secondary" size="lg" className="w-full">
                    Contact Us
                  </Button>
                </Link>
              </div>

              <div className="border-t border-stone-gray pt-8">
                <h3 className="font-heading text-2xl text-charcoal mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span className="text-muted-taupe">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-luxury-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl text-charcoal mb-8">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.specifications.map((spec, index) => (
              <div key={index} className="flex justify-between py-4 border-b border-stone-gray">
                <span className="font-medium text-charcoal">{spec.label}</span>
                <span className="text-muted-taupe">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-3xl text-charcoal mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
