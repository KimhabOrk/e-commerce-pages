'use client'

import { useState } from 'react'
import { useLocale, usePathname } from 'next-intl/client'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // Remove locale prefix from pathname to get the actual path
  const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'kh', name: 'Khmer', flag: '🇰🇭' },
  ]

  const currentLang = languages.find((lang) => lang.code === locale) || languages[0]
  const otherLang = languages.find((lang) => lang.code !== locale)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-colors"
        aria-label="Language selector"
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span className="hidden sm:inline">{currentLang.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && otherLang && (
        <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-50">
          <Link
            href={`/${otherLang.code}${pathWithoutLocale}`}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-colors first:rounded-t-lg last:rounded-b-lg"
          >
            <span className="text-lg">{otherLang.flag}</span>
            <span>{otherLang.name}</span>
          </Link>
        </div>
      )}
    </div>
  )
}
