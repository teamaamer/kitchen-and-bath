'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { mainNavigation } from '@/data/navigation'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-luxury-white/95 backdrop-blur-md shadow-nav'
          : 'bg-luxury-white'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="w-20 h-20 bg-brand-green flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-deep-olive">
              <span className="text-luxury-white font-extrabold text-3xl font-montserrat tracking-[0.125em]">KBS</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-[11px] font-montserrat font-light text-muted-taupe tracking-[0.25em] uppercase leading-none">
                KITCHEN & BATH SOCIETY
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.submenu && setOpenSubmenu(link.label)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                <Link
                  href={link.href}
                  className="nav-link flex items-center gap-1 text-sm font-medium tracking-wide py-1"
                >
                  {link.label}
                  {link.submenu && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        openSubmenu === link.label ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </Link>

                {link.submenu && openSubmenu === link.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-luxury-white shadow-premium border-t-2 border-brand-green animate-fade-in">
                    <div className="py-2">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          className="flex items-center justify-between px-5 py-2.5 text-sm text-charcoal hover:bg-warm-ivory hover:text-brand-green transition-colors duration-150 group/sub"
                        >
                          {sublink.label}
                          <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all duration-200" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/quote"
              className="px-6 py-2.5 bg-brand-green text-luxury-white text-sm font-medium tracking-wide hover:bg-deep-olive transition-all duration-300 hover:-translate-y-px hover:shadow-soft"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-charcoal p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-luxury-white border-t border-stone-gray/30 shadow-premium">
          <nav className="container mx-auto px-4 py-6 space-y-1">
            {mainNavigation.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block text-charcoal hover:text-brand-green transition-colors py-2.5 font-medium text-sm tracking-wide border-b border-stone-gray/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
                {link.submenu && (
                  <div className="pl-4 space-y-1 py-1 bg-warm-ivory/50">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.href}
                        href={sublink.href}
                        className="block text-sm text-muted-taupe hover:text-brand-green transition-colors py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="/quote"
                className="block w-full text-center px-6 py-3 bg-brand-green text-luxury-white text-sm font-medium hover:bg-deep-olive transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
