import React from "react"
import type { Metadata } from "next"
import { Raleway, Playfair_Display, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer-2"

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
  title: "Kimhab Ork - Affordable Luxury Womenswear",
  description: "Discover Kimhab Ork, offering affordable luxury womenswear with the highest quality. Bold, elegant, fragile and timeless for the modern woman.",
  manifest: "https://ecommerce-pages-ten.vercel.app/manifest.json",
    icons: {
      shortcut: { url: "/favicon.ico", type: "image/x-icon" },
      icon: [
        { url: "/favicon/favicon.ico", type: "image/x-icon" },
        new URL("/favicon.ico", "https://ecommerce-pages-ten.vercel.app/favicon.ico"),
        {
          url: "/favicon.svg",
          type: "image/svg",
          sizes: "1024x1024",
        },
        {
          url: "/favicon/favicon-16x16.png",
          type: "image/png",
          sizes: "16x16",
        },
        {
          url: "/favicon/favicon-32x32.png",
          type: "image/png",
          sizes: "32x32",
        },
        {
          url: "/favicon/favicon-96x96.png",
          type: "image/png",
          sizes: "96x96",
        },
        {
          url: "/favicon/andriod-icon-36x36.png",
          type: "image/png",
          sizes: "36x36",
        },
        {
          url: "/favicon/andriod-icon-48x48.png",
          type: "image/png",
          sizes: "48x48",
        },
        {
          url: "/favicon/andriod-icon-72x72.png",
          type: "image/png",
          sizes: "72x72",
        },
        {
          url: "/favicon/andriod-icon-96x96.png",
          type: "image/png",
          sizes: "96x96",
        },
        {
          url: "/favicon/andriod-icon-144x144.png",
          type: "image/png",
          sizes: "144x144",
        },
        {
          url: "/favicon/andriod-icon-192x192.png",
          type: "image/png",
          sizes: "192x192",
        },
        {
          url: "/favicon/andriod-icon-512x512.png",
          type: "image/png",
          sizes: "192x192",
        },
      ],
      apple: [
        {
          url: "/favicon/apple-icon.png",
          type: "image/png",
        },
        {
          url: "/favicon/apple-icon-57x57.png",
          sizes: "57x57",
          type: "image/png",
        },
        {
          url: "/favicon/apple-icon-60x60.png",
          sizes: "60x60",
          type: "image/png",
        },
        {
          url: "/favicon/apple-icon-72x72.png",
          sizes: "72x72",
          type: "image/png",
        },
        {
          url: "/favicon/apple-icon-76x76.png",
          sizes: "76x76",
          type: "image/png",
        },
        {
          url: "/favicon/apple-icon-114x114.png",
          sizes: "114x114",
          type: "image/png",
        },
        {
          url: "/favicon/apple-icon-120x120.png",
          sizes: "120x120",
          type: "image/png",
        },
        {
          url: "/favicon/apple-icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          url: "/favicon/apple-icon-152x152.png",
          sizes: "152x152",
          type: "image/png",
        },
        {
          url: "/favicon/apple-icon-180x180.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
      other: [
        {
          url: "/favicon/ms-icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          url: "/favicon/ms-icon-150x150.png",
          sizes: "150x150",
          type: "image/png",
        },
        {
          url: "/favicon/ms-icon-310x310.png",
          sizes: "310x310",
          type: "image/png",
        },
        {
          url: "/favicon/ms-icon-70x70.png",
          sizes: "70x70",
          type: "image/png",
        },
      ],
    },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: "#000000",
  },
  openGraph: {
    title: "Kimhab Ork - Affordable Luxury Womenswear",
    description: "Premium quality womenswear fashion at accessible prices",
    type: "website",
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
