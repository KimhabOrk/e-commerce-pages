'use client'

import { useLocale, useTranslations } from 'next-intl'
import { HeroGradient } from '@/components/hero-gradient'
import { FeatureCard } from '@/components/feature-card'
import { Leaf, Users, Globe, Heart } from 'lucide-react'

export default function ResponsibilityPage() {
  const locale = useLocale()
  const t = useTranslations('pages.responsibility')

  return (
    <main className="flex-1">
      <HeroGradient
        title="Our Responsibility"
        description="Sustainable fashion and ethical practices are at the core of everything we do at Kimhab Ork."
      />

      <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Commitment
            </h2>
            <p className="text-lg text-foreground/75 leading-relaxed">
              We believe that fashion should be beautiful, sustainable, and ethical. Every decision we make—from sourcing materials to choosing manufacturing partners—reflects our commitment to making a positive impact on both people and the planet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <FeatureCard
              icon={<Leaf className="w-7 h-7 md:w-10 md:h-10" />}
              title="Sustainable Materials"
              description="We prioritize organic, recycled, and responsibly-sourced fabrics that minimize environmental impact."
            />
            <FeatureCard
              icon={<Users className="w-7 h-7 md:w-10 md:h-10" />}
              title="Fair Labor"
              description="We ensure fair wages, safe working conditions, and respect for workers throughout our supply chain."
            />
            <FeatureCard
              icon={<Globe className="w-7 h-7 md:w-10 md:h-10" />}
              title="Global Impact"
              description="We work to reduce our carbon footprint and contribute positively to communities worldwide."
            />
            <FeatureCard
              icon={<Heart className="w-7 h-7 md:w-10 md:h-10" />}
              title="Transparency"
              description="We openly communicate our progress, challenges, and areas for improvement with our customers."
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10 bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Our Focus Areas
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Materials</h3>
              <p className="text-foreground/75 leading-relaxed mb-4">
                We prioritize sustainable textiles including organic cotton, TENCEL™, recycled polyester, and responsibly-sourced silk. Each fabric is selected for both quality and environmental responsibility.
              </p>
              <div className="bg-background p-4 rounded-lg">
                <p className="text-sm text-foreground/65">
                  Over 60% of our materials are now from sustainable sources, with a goal of 100% by 2026.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Manufacturing</h3>
              <p className="text-foreground/75 leading-relaxed mb-4">
                We partner with certified manufacturers who maintain safe working environments, pay fair wages, and implement environmental best practices.
              </p>
              <div className="bg-background p-4 rounded-lg">
                <p className="text-sm text-foreground/65">
                  All our manufacturing partners are audited annually for compliance with our ethical standards.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Community Impact</h3>
              <p className="text-foreground/75 leading-relaxed mb-4">
                We support local artisans and communities by sourcing materials regionally whenever possible and investing in training programs.
              </p>
              <div className="bg-background p-4 rounded-lg">
                <p className="text-sm text-foreground/65">
                  A portion of our profits supports women's education and economic empowerment initiatives in Southeast Asia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Join Us in Building a Better Future
          </h2>
          <p className="text-lg text-foreground/75 mb-8 leading-relaxed">
            By choosing Kimhab Ork, you're supporting sustainable fashion and ethical practices. Every purchase matters and contributes to positive change.
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all">
            Explore Our Collections
          </button>
        </div>
      </section>
    </main>
  )
}
