export interface Product {
  id: string
  name: string
  slug: string
  category: string
  categorySlug: string
  description: string
  shortDescription: string
  features: string[]
  specifications: {
    label: string
    value: string
  }[]
  images: string[]
  finishes?: string[]
  sizes?: string[]
  sku: string
  relatedProducts?: string[]
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image: string
  featured?: boolean
}

export interface Collection {
  id: string
  name: string
  slug: string
  description: string
  image: string
  products: string[]
  featured?: boolean
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  image?: string
  rating: number
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: 'Orders' | 'Shipping' | 'Returns' | 'Warranty' | 'Installation' | 'Product Care' | 'Trade Program'
}

export interface InspirationItem {
  id: string
  title: string
  image: string
  tags: string[]
  products?: string[]
}

export interface NavLink {
  label: string
  href: string
  submenu?: {
    label: string
    href: string
  }[]
}
