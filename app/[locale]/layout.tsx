import { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { locales } from '@/i18n.config'
import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/next"
import { Header } from '@/components/header'
import { Footer } from '@/components/footer-2'
import '../globals.css'

export const metadata: Metadata = {
  title: "Kimhab Ork - Affordable Luxury Womenswear",
  description: "Discover Kimhab Ork, offering affordable luxury womenswear with the highest quality. Bold, elegant, fragile and timeless for the modern woman.",
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
