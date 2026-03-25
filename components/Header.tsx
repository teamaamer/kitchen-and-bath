'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { mainNavigation } from '@/data/navigation'
import Button from './ui/Button'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-luxury-white shadow-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-brand-green flex items-center justify-center">
              <span className="text-luxury-white font-bold text-xl font-heading">KBS</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-heading text-charcoal tracking-wider">
                KITCHEN & BATH SOCIETY
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((link) => (
              <div
                key={link.href}
                className="relative group"
                onMouseEnter={() => link.submenu && setOpenSubmenu(link.label)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                <Link
                  href={link.href}
                  className="text-charcoal hover:text-brand-green transition-colors duration-200 flex items-center gap-1 font-medium text-sm tracking-wide"
                >
                  {link.label}
                  {link.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>
                {link.submenu && openSubmenu === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-luxury-white shadow-lg border border-stone-gray">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.href}
                        href={sublink.href}
                        className="block px-4 py-3 text-sm text-charcoal hover:bg-warm-ivory hover:text-brand-green transition-colors"
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="secondary" size="sm" asChild>
              <Link href="/quote">Request Quote</Link>
            </Button>
          </div>

          <button
            className="lg:hidden text-charcoal"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-luxury-white border-t border-stone-gray">
          <nav className="container mx-auto px-4 py-6 space-y-4">
            {mainNavigation.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block text-charcoal hover:text-brand-green transition-colors py-2 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
                {link.submenu && (
                  <div className="pl-4 space-y-2 mt-2">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.href}
                        href={sublink.href}
                        className="block text-sm text-muted-taupe hover:text-brand-green transition-colors py-1"
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
              <Button variant="primary" size="md" className="w-full" asChild>
                <Link href="/quote">Request Quote</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
