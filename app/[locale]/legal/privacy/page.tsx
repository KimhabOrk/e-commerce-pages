'use client'

import { useLocale } from 'next-intl'
import { HeroGradient } from '@/components/hero-gradient'

export default function PrivacyPolicyPage() {
  const locale = useLocale()

  return (
    <main className="flex-1">
      <HeroGradient
        title="Privacy Policy"
        description="Your privacy is important to us. Learn how we collect, use, and protect your information."
      />

      <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl prose prose-invert max-w-none">
          <div className="space-y-8 text-foreground/75">
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you make a purchase, create an account, or contact us. This includes your name, email address, postal address, phone number, and payment information.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to process your orders, send transactional emails, respond to your inquiries, and improve our website and services. We may also use your information for marketing purposes with your consent.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">3. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">4. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time by clicking the unsubscribe link in our emails.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">5. Contact Us</h2>
              <p>
                If you have questions about this privacy policy or our privacy practices, please contact us at privacy@kimhabork.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
