'use client'

import { useLocale, useTranslations } from 'next-intl'
import { HeroGradient } from '@/components/hero-gradient'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  const locale = useLocale()
  const t = useTranslations('pages.contact')

  return (
    <main className="flex-1">
      <HeroGradient
        title="Contact Us"
        description="Reach out to us with any questions or inquiries about our collections and services."
      />

      {/* Contact Section */}
      <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="text-foreground/75 mb-8">
                  We'd love to hear from you. Whether you have a question or just want to say hello, feel free to get in touch with us.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary text-primary-foreground">
                      <Mail className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-foreground/75">hello@kimhabork.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary text-primary-foreground">
                      <Phone className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-foreground/75">+855 (12) 345-6789</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary text-primary-foreground">
                      <MapPin className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="text-foreground/75">Phnom Penh, Cambodia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
