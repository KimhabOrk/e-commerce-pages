'use client'

import { HeroGradient } from '@/components/hero-gradient'

export default function SalesConditionsPage() {
  return (
    <main className="flex-1">
      <HeroGradient
        title="General Sales Conditions"
        description="Terms and conditions applicable to all purchases made through Kimhab ORK."
      />

      <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl space-y-8 text-foreground/75">
          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Order Placement</h2>
            <p>All orders placed on our website constitute an offer to purchase. Kimhab ORK reserves the right to accept or reject any order at our sole discretion.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Pricing</h2>
            <p>All prices are listed in the currency displayed on our website and are subject to change without notice. Prices do not include applicable taxes unless otherwise stated.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Payment</h2>
            <p>Payment must be received before your order is processed. We accept major credit cards, digital payment methods, and bank transfers. All payment information is processed securely.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Shipping & Delivery</h2>
            <p>Shipping costs and estimated delivery times will be calculated at checkout. Kimhab ORK is not responsible for delays caused by carrier issues or customs clearance.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Returns & Exchanges</h2>
            <p>Items may be returned within 30 days of purchase in original condition with tags attached. Refunds will be processed within 7-10 business days after receipt and inspection of returned items.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Product Defects</h2>
            <p>If you receive a defective product, please contact us immediately with photos. We will replace or refund the item at our discretion.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Modifications</h2>
            <p>Kimhab ORK reserves the right to modify these conditions at any time. Changes will be effective upon posting to our website.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
