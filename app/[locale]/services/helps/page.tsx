'use client'

import { HeroGradient } from '@/components/hero-gradient'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function HelpsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer returns within 30 days of purchase. Items must be in original condition with tags attached. Simply contact us to arrange your return."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 7-14 business days. Express shipping is available for 3-5 business days. Delivery times may vary based on location."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes! We ship to most countries worldwide. Customs duties and taxes may apply and are the responsibility of the customer."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can use this to monitor your package's progress."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, digital wallets (Apple Pay, Google Pay), and bank transfers for your convenience."
    },
    {
      question: "Can I customize my order?",
      answer: "Yes! We offer custom-made services. Contact us at hello@kimhabork.com to discuss your custom piece ideas."
    },
    {
      question: "Are your fabrics sustainable?",
      answer: "We're committed to sustainability. Over 60% of our materials are from sustainable sources, with a goal to reach 100% by 2026."
    },
    {
      question: "How do I care for my garments?",
      answer: "Check out our Care Guides section for detailed instructions based on fabric type. Always follow the care label on your garment."
    }
  ]

  return (
    <main className="flex-1">
      <HeroGradient
        title="Help & FAQs"
        description="Find answers to common questions about our products, shipping, and services."
      />

      <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-border/70 rounded-lg overflow-hidden hover:border-primary/60 transition-colors"
                open={openFaq === idx}
                onClick={(e) => {
                  e.preventDefault()
                  setOpenFaq(openFaq === idx ? null : idx)
                }}
              >
                <summary className="cursor-pointer px-6 py-4 bg-muted hover:bg-muted/85 transition-colors flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">
                    {faq.question}
                  </h3>
                  <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </summary>
                {openFaq === idx && (
                  <div className="px-6 py-4 bg-card/60 border-t border-border/70">
                    <p className="text-foreground/75 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </details>
            ))}
          </div>

          <div className="mt-12 bg-muted p-6 rounded-lg text-center">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-foreground/75 mb-6">
              Can't find the answer you're looking for? Please contact our support team.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
