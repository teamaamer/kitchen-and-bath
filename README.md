# KBS — Kitchen & Bath Society

A premium luxury e-commerce website for KBS, a high-end kitchen and bath fixtures brand. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Brand Overview

KBS (Kitchen & Bath Society) is a luxury brand offering:
- Premium Vanities
- LED Mirrors
- LED Medicine Cabinets
- Custom Closet Systems
- Designer Faucets
- Bathroom & Kitchen Accessories

## ✨ Features

### Complete Website Structure
- **Homepage** - Full-screen hero, featured categories, brand philosophy, signature products, testimonials, and CTAs
- **About Page** - Brand story, values, timeline, and company information
- **Product Categories** - Browse all product categories with filtering
- **Category Detail Pages** - View products by category with sorting options
- **Product Detail Pages** - Comprehensive product information with specifications, features, and related products
- **Collections** - Curated product collections for different design aesthetics
- **Inspiration Gallery** - Design inspiration with filterable tags
- **Contact Page** - Contact form with showroom information
- **Quote Request** - Detailed consultation request form
- **FAQ** - Categorized frequently asked questions with accordion UI

### Design System
- **Color Palette**: Luxury olive green (#789600), warm ivory, stone gray, charcoal
- **Typography**: Cormorant (headings) + Inter (body)
- **Premium UI Components**: Elegant cards, smooth animations, refined interactions
- **Responsive Design**: Mobile-first, fully responsive across all devices

### Technical Features
- Next.js 14 App Router
- TypeScript for type safety
- Tailwind CSS v4 for styling
- Framer Motion for animations
- Lucide React icons
- SEO-optimized metadata
- Accessible components (WCAG compliant)
- Clean component architecture
- Mock data structure ready for CMS/API integration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
kitchen-and-bath/
├── app/                          # Next.js App Router pages
│   ├── about/                    # About page
│   ├── categories/               # Product categories
│   │   └── [slug]/              # Dynamic category pages
│   ├── collections/              # Collections pages
│   │   └── [slug]/              # Dynamic collection pages
│   ├── contact/                  # Contact page
│   ├── faq/                      # FAQ page
│   ├── inspiration/              # Inspiration gallery
│   ├── products/                 # Product pages
│   │   └── [slug]/              # Dynamic product pages
│   ├── quote/                    # Quote request page
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Global styles
├── components/                   # React components
│   ├── home/                    # Homepage sections
│   ├── ui/                      # Reusable UI components
│   ├── Header.tsx               # Site header
│   ├── Footer.tsx               # Site footer
│   ├── CategoryCard.tsx         # Category card component
│   ├── ProductCard.tsx          # Product card component
│   ├── CollectionCard.tsx       # Collection card component
│   └── ...                      # Other components
├── data/                        # Mock data
│   ├── categories.ts            # Category data
│   ├── products.ts              # Product data
│   ├── collections.ts           # Collection data
│   ├── testimonials.ts          # Testimonial data
│   ├── faqs.ts                  # FAQ data
│   ├── inspiration.ts           # Inspiration gallery data
│   └── navigation.ts            # Navigation links
├── types/                       # TypeScript types
│   └── index.ts                 # Type definitions
├── lib/                         # Utility functions
│   └── utils.ts                 # Helper utilities
└── public/                      # Static assets
```

## 🎨 Design Philosophy

The website embodies luxury through:
- **Generous whitespace** for breathing room
- **Premium typography** with elegant serif headings
- **Refined color palette** inspired by the brand logo
- **Subtle animations** that enhance without overwhelming
- **High-quality imagery placeholders** ready for real assets
- **Architectural precision** in layout and spacing

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Cormorant, Inter)

## 📝 Data Structure

All data is currently mock data stored in the `/data` folder. The structure is designed to easily integrate with:
- Headless CMS (Sanity, Contentful, Strapi)
- E-commerce platforms (Shopify, Commerce.js)
- Custom API backends
- Database solutions (Prisma, Supabase)

## 🎯 Future Enhancements

Ready for integration:
- [ ] Real product images
- [ ] CMS integration
- [ ] E-commerce functionality (cart, checkout)
- [ ] User authentication
- [ ] Product search
- [ ] Wishlist/favorites
- [ ] Trade/designer program portal
- [ ] Blog/resources section
- [ ] Live chat support
- [ ] Analytics integration

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1280px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus-visible states
- High contrast ratios
- Alt text placeholders for images

## 🚢 Deployment

Build the production version:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

Deploy to Vercel (recommended):
```bash
vercel
```

## 📄 License

This project is proprietary and confidential.

## 🤝 Support

For questions or support, contact the development team.
