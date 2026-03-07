'use client'

import { useLocale, useTranslations } from 'next-intl'
import { HeroGradient } from '@/components/hero-gradient'

export default function CustomMadePage() {
  const locale = useLocale()
  const t = useTranslations('pages.customMade')

  return (
    <main className="flex-1">
      <HeroGradient
        title="Custom Made Services"
        description="Create your perfect piece with our bespoke tailoring and customization services."
      />

      <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Personalized Fashion, Your Way
          </h2>
          <p className="text-lg text-foreground/75 mb-8 leading-relaxed">
            At Kimhab Ork, we believe that the best garment is one that's made just for you. Our custom-made services allow you to collaborate with our design team to create pieces that perfectly fit your style, body, and vision.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Process</h3>
              <ol className="space-y-4 list-decimal list-inside text-foreground/75">
                <li>Initial Consultation - Share your ideas and style preferences</li>
                <li>Design Sketches - Our team creates custom designs based on your vision</li>
                <li>Material Selection - Choose from our curated selection of premium fabrics</li>
                <li>Fitting Adjustments - Multiple fitting sessions to ensure perfect fit</li>
                <li>Final Creation - Your bespoke piece is carefully crafted</li>
              </ol>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">What's Included</h3>
              <ul className="space-y-3 text-foreground/75">
                <li>✓ One-on-one design consultation</li>
                <li>✓ Custom design sketches and mood boards</li>
                <li>✓ Unlimited design revisions</li>
                <li>✓ Premium material options</li>
                <li>✓ Multiple fitting appointments</li>
                <li>✓ Expert craftsmanship and attention to detail</li>
              </ul>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Ready to Create?</h3>
              <p className="text-foreground/75 mb-6">
                Contact us to schedule your initial consultation. Let's bring your fashion dreams to life.
              </p>
              <button className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
