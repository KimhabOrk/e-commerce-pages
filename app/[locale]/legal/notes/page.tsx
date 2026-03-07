'use client'

import { HeroGradient } from '@/components/hero-gradient'

export default function LegalNotesPage() {
  return (
    <main className="flex-1">
      <HeroGradient
        title="Legal Notes"
        description="Important legal information about Kimhab ORK and our services."
      />

      <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl space-y-8 text-foreground/75">
          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Company Information</h2>
            <p>Kimhab ORK is a fashion brand dedicated to providing affordable luxury womenswear with a commitment to sustainability and ethical practices.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, images, and software, is the property of Kimhab ORK or its content suppliers and is protected by international copyright laws.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
            <p>In no event will Kimhab ORK be liable for any damages arising from the use of this website or the inability to use the website or materials.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Product Information</h2>
            <p>While we strive to provide accurate product descriptions and images, colors may vary slightly due to different screen displays. We encourage customers to review care instructions and sizing guides before purchase.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Contact for Legal Inquiries</h2>
            <p>For legal inquiries, please contact us at legal@kimhabork.com</p>
          </div>
        </div>
      </section>
    </main>
  )
}
