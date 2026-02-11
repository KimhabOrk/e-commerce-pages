import React from "react"
import type { Metadata } from 'next'
import { Raleway, Playfair_Display, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const _raleway = Raleway({ 
  subsets: ["latin"],
  variable: "--font-sans",
  });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Kimhab Ork - Affordable Luxury Womenswear',
  description: 'Discover Kimhab Ork, offering quality womenswear fashion at affordable luxury prices. Sustainable, stylish, and timeless pieces for the modern woman.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: '#5c4a42',
  },
  openGraph: {
    title: 'Kimhab Ork - Affordable Luxury Womenswear',
    description: 'Premium quality womenswear fashion at accessible prices',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Header />
          {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
