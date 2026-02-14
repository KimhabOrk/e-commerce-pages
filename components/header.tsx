'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '/company/about', label: 'About Us' },
    { href: '/company/creative-director', label: 'Creative Director' },
    { href: '/services/custom-made', label: 'Custom Made' },
    { href: '/services/care-guides', label: 'Care Guides' },
    { href: '/services/helps', label: 'Helps & FAQs' },
    { href: '/company/responsibility', label: 'Responsibility' },
    { href: '/legal/notes', label: 'Legal' },
    { href: '/sample/mono', label: 'Mono' },
    { href: '/sample/evasion', label: 'Evasion' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/98 backdrop-blur-sm">
      <nav className="mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
        <div className="flex items-center justify-between h-12 md:h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-80"
          >
            <Image
              src="/logo-dark.png"
              alt="Kimhab Ork"
              width={120}
              height={22}
              priority
              className="h-8 w-full object-cover"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors rounded"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
