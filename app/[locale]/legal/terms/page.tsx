'use client'

import { useLocale } from 'next-intl'
import { HeroGradient } from '@/components/hero-gradient'

export default function TermsOfServicePage() {
  const locale = useLocale()

  return (
    <main className="flex-1">
      <HeroGradient
        title="Terms of Service"
        description="Please read these terms carefully before using our website and services."
      />

      <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8 text-foreground/75">
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">1. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on Kimhab ORK's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">2. Disclaimer</h2>
              <p>
                The materials on Kimhab ORK's website are provided on an 'as is' basis. Kimhab ORK makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">3. Limitations</h2>
              <p>
                In no event shall Kimhab ORK or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Kimhab ORK's website.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">4. Accuracy of Materials</h2>
              <p>
                The materials appearing on Kimhab ORK's website could include technical, typographical, or photographic errors. Kimhab ORK does not warrant that any of the materials on its website are accurate, complete, or current.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">5. Links</h2>
              <p>
                Kimhab ORK has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Kimhab ORK of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">6. Modifications</h2>
              <p>
                Kimhab ORK may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">7. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of Cambodia, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
