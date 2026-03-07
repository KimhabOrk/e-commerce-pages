'use client'

import { useLocale, useTranslations } from 'next-intl'
import { HeroGradient } from '@/components/hero-gradient'

export default function CareGuidesPage() {
  const locale = useLocale()
  const t = useTranslations('pages.careGuides')

  const guides = [
    {
      fabric: "Cotton",
      instructions: [
        "Wash in cold water with mild detergent",
        "Turn inside out to preserve color",
        "Avoid bleach and strong chemicals",
        "Hang dry or tumble dry on low heat",
        "Iron on medium heat if needed"
      ]
    },
    {
      fabric: "Silk",
      instructions: [
        "Hand wash in cool water with silk detergent",
        "Never wring or twist the fabric",
        "Rinse gently in cool water",
        "Lay flat to dry away from direct sunlight",
        "Iron on low heat with a silk press cloth"
      ]
    },
    {
      fabric: "Linen",
      instructions: [
        "Wash in cool water with gentle detergent",
        "Machine wash on gentle cycle",
        "Avoid excessive wringing",
        "Hang dry or lay flat",
        "Iron while slightly damp for best results"
      ]
    },
    {
      fabric: "Wool",
      instructions: [
        "Hand wash or use wool cycle",
        "Use cool water and wool-specific detergent",
        "Never tumble dry",
        "Lay flat on a towel to dry",
        "Brush gently when dry to refresh"
      ]
    }
  ]

  return (
    <main className="flex-1">
      <HeroGradient
        title="Care Guides"
        description="Learn how to properly care for your Kimhab Ork pieces to keep them looking beautiful for years."
      />

      <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Fabric Care Instructions
            </h2>
            <p className="text-lg text-foreground/75">
              Proper care extends the life of your garments and keeps them looking fresh. Follow these guidelines based on your fabric type.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.map((guide, idx) => (
              <div key={idx} className="border border-border rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">{guide.fabric}</h3>
                <ul className="space-y-2">
                  {guide.instructions.map((instruction, instIdx) => (
                    <li key={instIdx} className="flex gap-3 text-foreground/75">
                      <span className="text-primary font-bold">•</span>
                      {instruction}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-muted p-6 rounded-lg">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">General Tips</h3>
            <ul className="space-y-3 text-foreground/75">
              <li>✓ Always check care labels before washing</li>
              <li>✓ Sort by color and wash similar items together</li>
              <li>✓ Use eco-friendly, gentle detergents</li>
              <li>✓ Air dry when possible to preserve fabric quality</li>
              <li>✓ Store in a cool, dry place away from direct sunlight</li>
              <li>✓ Use cedar blocks or lavender to prevent moths</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
