'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { LanguageSwitcher } from './language-switcher'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = useTranslations('navigation')
  const locale = useLocale()

  const navigationLinks = [
    { href: `/${locale}/`, label: t('home') },
    { href: `/${locale}/company/about`, label: t('about') },
    { href: `/${locale}/company/creative-director`, label: t('creativeDirctor') },
    { href: `/${locale}/services/custom-made`, label: t('customMade') },
    { href: `/${locale}/services/care-guides`, label: t('careGuides') },
    { href: `/${locale}/services/helps`, label: t('helpsAndFaqs') },
    { href: `/${locale}/company/responsibility`, label: t('responsibility') },
    { href: `/${locale}/legal/notes`, label: t('legal') },
    { href: `/${locale}/sample/mono`, label: t('mono') },
    { href: `/${locale}/sample/evasion`, label: t('evasion') },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/98 backdrop-blur-sm">
      <nav className="mx-auto w-full px-2 md:px-8 lg:px-10">
        <div className="flex items-center justify-between h-12 md:h-16">
          {/* Logo */}
          <Link
            href={`/${locale}/`}
            className="flex items-center transition-opacity hover:opacity-80"
          >
            <Image
              src="https://ik.imagekit.io/kimhabork/assets/kho-dark.png"
              alt="Kimhab Ork"
              width={148}
              height={28}
              priority
              className="h-auto w-[148px] md:w-[158px] object-cover"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher />
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
            <div className="px-2 py-2">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
