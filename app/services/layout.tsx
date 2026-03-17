import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer-2"

export default function ServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <Header />
         {children}
        <Footer />
      </body>
    </html>
  )
}
