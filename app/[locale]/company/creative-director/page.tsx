'use client'

import { useLocale, useTranslations } from 'next-intl'
import { HeroGradient } from '@/components/hero-gradient'
import { FeatureCard } from '@/components/feature-card'
import { Award, Sparkles, Heart, Globe } from 'lucide-react'
import Image from 'next/image'

export default function CreativeDirector() {
  const locale = useLocale()
  const t = useTranslations('pages.creativeDirtor')

  return (
    <main className="flex-1">
      <HeroGradient
        title="Meet Our Creative Director"
        description="The visionary leading Kimhab ORK's journey to redefine affordable luxury fashion"
      />

      <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg shadow-gray-600/30 border border-border">
                <Image
                  src="https://ik.imagekit.io/kimhabork/media/profile/director.jpg?updatedAt=1770273580618"
                  alt="Creative Director"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  KIMHAB ORK
                </h2>
                <p className="text-xl font-semibold text-foreground mb-4">Creative Director & Founder</p>
                <p className="text-foreground/75 leading-relaxed">
                  With over 15 years of experience in luxury fashion design, KIMHAB founded Kimhab ORK with a singular vision: to make high-quality, sustainably-produced womenswear accessible to everyone without compromising on elegance or ethics.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Design Philosophy</h3>
                  <p className="text-foreground/75 leading-relaxed">
                    KIMHAB believes that beautiful design transcends price points. Every piece reflects a commitment to timeless silhouettes, premium materials, and meticulous craftsmanship—all at accessible prices.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Sustainability Mission</h3>
                  <p className="text-foreground/75 leading-relaxed">
                    Driven by environmental consciousness, KIMHAB leads responsibility initiatives, ensuring every garment is produced ethically and sustainably. The vision extends beyond fashion to create positive impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            The Creative Journey
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-semibold text-foreground">Early Inspiration</h3>
              <p className="text-foreground/75 leading-relaxed">
                Growing up in Cambodia, KIMHAB was captivated by the rich textile traditions and artisan craftsmanship. This early exposure sparked a passion for creating fashion that honors heritage while embracing modern aesthetics.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-xl font-semibold text-foreground">Global Experience</h3>
              <p className="text-foreground/75 leading-relaxed">
                After studying fashion design in Paris and working with renowned luxury houses across Europe and Asia, KIMHAB gained invaluable insights into craftsmanship, sustainability, and accessibility.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-xl font-semibold text-foreground">Founding Vision</h3>
              <p className="text-foreground/75 leading-relaxed">
                In 2018, KIMHAB founded Kimhab ORK to challenge the luxury fashion industry. Why should quality, sustainability, and beautiful design be exclusive to the wealthy?
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-xl font-semibold text-foreground">Present Impact</h3>
              <p className="text-foreground/75 leading-relaxed">
                Today, Kimhab ORK has grown into a global community of conscious consumers, proving that affordable luxury and ethical fashion aren't just ideals—they're achievable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Core Values & Guiding Principles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Sparkles className="w-7 h-7 md:w-10 md:h-10" />}
              title="Creativity"
              description="Innovation and artistic expression at the heart of every design decision."
            />

            <FeatureCard
              icon={<Heart className="w-7 h-7 md:w-10 md:h-10" />}
              title="Integrity"
              description="Honesty in practices and genuine commitment to our values."
            />

            <FeatureCard
              icon={<Award className="w-7 h-7 md:w-10 md:h-10" />}
              title="Excellence"
              description="Dedication to quality and craftsmanship in every garment."
            />

            <FeatureCard
              icon={<Globe className="w-7 h-7 md:w-10 md:h-10" />}
              title="Impact"
              description="Creating positive change for people and planet."
            />
          </div>
        </div>
      </section>
    </main>
  )
}
