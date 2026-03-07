'use client'

import { HeroGradient } from '@/components/hero-gradient'

export default function OrdersShippingPage() {
  return (
    <main className="flex-1">
      <HeroGradient
        title="Orders & Shipping"
        description="Information about placing orders and shipping to your location."
      />

      <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Ordering Process</h2>
              <ol className="space-y-4 list-decimal list-inside text-foreground/75">
                <li>Browse our collections and select items</li>
                <li>Add items to your cart and review</li>
                <li>Proceed to checkout and enter shipping address</li>
                <li>Select shipping method and enter payment information</li>
                <li>Confirm your order and receive confirmation email</li>
              </ol>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Shipping Information</h2>
              <div className="space-y-4 text-foreground/75">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Standard Shipping</h3>
                  <p>7-14 business days to most locations</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Express Shipping</h3>
                  <p>3-5 business days to most locations</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Tracking</h3>
                  <p>You'll receive a tracking number via email</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-muted p-6 rounded-lg space-y-4">
            <h2 className="font-serif text-2xl font-bold text-foreground">International Orders</h2>
            <p className="text-foreground/75">
              We ship internationally to most countries. Customs duties and taxes may apply to international orders and are the responsibility of the customer.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
