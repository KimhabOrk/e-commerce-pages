'use client'

import { FeatureCard } from '@/components/feature-card'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { Crown, Shield, TreePine, Users, ChevronDown } from 'lucide-react'
import { HeroGradient } from '@/components/hero-gradient'

const faqs = [
  {
    id: "01",
    title: "Premium Materials",
    content: "We source the finest fabrics and materials, including organic cotton, sustainable silk, and responsibly-sourced textiles that feel luxurious and last longer.",
  },
  {
    id: "02",
    title: "Timeless Design",
    content: "Our collections focus on versatile, classic silhouettes with modern details. Pieces that work today and remain relevant for years to come.",
  },
  {
    id: "03",
    title: "Ethical Production",
    content: "We partner with manufacturers who prioritize fair wages, safe working conditions, and environmental responsibility throughout our supply chain.",
  },
  {
    id: "04",
    title: "Exceptional Value",
    content: "Quality womenswear at accessible prices. We believe you shouldn't have to compromise on quality or pay luxury prices for great fashion.",
  },
]

function FAQCard({ id, title, content }: { id: string; title: string; content: string }) {
  return (
    <details className="group border border-border/70 rounded-lg overflow-hidden hover:border-primary/60 transition-colors">
      <summary className="cursor-pointer px-6 py-4 bg-muted hover:bg-muted/85 transition-colors flex items-center justify-between">
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-7 w-7 rounded-md bg-primary/70">
              <span className="text-sm text-white font-semibold">{id}</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {title}
          </h3>
        </div>
        <ChevronDown className="w-5 h-5 text-primary-foreground group-open:rotate-180 transition-transform" />
      </summary>
      <div className="px-6 py-4 bg-card/60 border-t border-border/70 space-y-4">
        <p className="text-foreground/75 leading-relaxed">{content}</p>
      </div>
    </details>
  )
}

export default function AboutPage() {
  const locale = useLocale()
  const t = useTranslations('pages.about')

  const values = [
    {
      title: 'Quality Over Quantity',
      description: 'We believe in creating pieces that last. Every garment is carefully crafted with premium materials and attention to detail, ensuring you invest in items that remain timeless.',
    },
    {
      title: 'Accessible Luxury',
      description: 'Luxury fashion should not be exclusive. We make premium womenswear affordable without compromising on design, materials, or craftsmanship.',
    },
    {
      title: 'Sustainable Fashion',
      description: 'Our commitment to the environment is reflected in our material choices and production practices. We strive to minimize our ecological footprint while maximizing impact.',
    },
    {
      title: 'Empowered Women',
      description: 'We design for confident, modern women who value both style and substance. Every collection celebrates femininity, strength, and individuality.',
    },
  ]

  return (
    <main className="flex-1">
      <HeroGradient
        title="Affordable Luxury for Modern Women"
        description="Kimhab Ork reimagines womenswear by combining exquisite design, premium quality materials, and sustainable practices at prices that celebrate accessibility."
      />

      {/* Values Section */}
      <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <FeatureCard
                key={idx}
                icon={
                  idx === 0 ? <Crown className="w-7 h-7 md:w-10 md:h-10" /> :
                  idx === 1 ? <Shield className="w-7 h-7 md:w-10 md:h-10" /> :
                  idx === 2 ? <TreePine className="w-7 h-7 md:w-10 md:h-10" /> :
                  <Users className="w-7 h-7 md:w-10 md:h-10" />
                }
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10 bg-muted/30">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Why Kimhab Ork?
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQCard key={faq.id} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-balance">
            Ready to Experience Affordable Luxury?
          </h2>
          <p className="text-lg mb-8 opacity-95 text-balance max-w-2xl mx-auto leading-relaxed">
            Join thousands of women who have discovered that premium fashion doesn't have to come with a premium price tag.
          </p>
          <button className="inline-block px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-primary-foreground/90 transition-all hover:shadow-lg">
            Shop Now
          </button>
        </div>
      </section>
    </main>
  )
}
