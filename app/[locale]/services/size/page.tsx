'use client'

import { HeroGradient } from '@/components/hero-gradient'

export default function SizeGuidePage() {
  return (
    <main className="flex-1">
      <HeroGradient
        title="Size Guide"
        description="Find your perfect fit with our comprehensive size guide."
      />

      <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">How to Measure</h2>
            <p className="text-lg text-foreground/75 mb-8">
              For the most accurate fit, we recommend measuring your body while wearing fitted clothing. All measurements should be in inches or centimeters.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground text-lg">Bust</h3>
                <p className="text-foreground/75">Measure around the fullest part of your chest, keeping the tape measure parallel to the ground.</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-foreground text-lg">Waist</h3>
                <p className="text-foreground/75">Measure around the smallest part of your waist, keeping the tape measure relaxed and parallel.</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-foreground text-lg">Hip</h3>
                <p className="text-foreground/75">Measure around the fullest part of your hips and buttocks, keeping the tape measure parallel to the ground.</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-foreground text-lg">Length</h3>
                <p className="text-foreground/75">For dresses and tops, measure from the top of the shoulder down to where you want the garment to end.</p>
              </div>
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg overflow-x-auto">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Size Chart</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Size</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Bust (in)</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Waist (in)</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Hip (in)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/30">
                  <td className="py-3 px-4 text-foreground/75">XS</td>
                  <td className="py-3 px-4 text-foreground/75">31-33</td>
                  <td className="py-3 px-4 text-foreground/75">24-26</td>
                  <td className="py-3 px-4 text-foreground/75">34-36</td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="py-3 px-4 text-foreground/75">S</td>
                  <td className="py-3 px-4 text-foreground/75">33-35</td>
                  <td className="py-3 px-4 text-foreground/75">26-28</td>
                  <td className="py-3 px-4 text-foreground/75">36-38</td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="py-3 px-4 text-foreground/75">M</td>
                  <td className="py-3 px-4 text-foreground/75">35-37</td>
                  <td className="py-3 px-4 text-foreground/75">28-30</td>
                  <td className="py-3 px-4 text-foreground/75">38-40</td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="py-3 px-4 text-foreground/75">L</td>
                  <td className="py-3 px-4 text-foreground/75">37-39</td>
                  <td className="py-3 px-4 text-foreground/75">30-32</td>
                  <td className="py-3 px-4 text-foreground/75">40-42</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground/75">XL</td>
                  <td className="py-3 px-4 text-foreground/75">39-41</td>
                  <td className="py-3 px-4 text-foreground/75">32-34</td>
                  <td className="py-3 px-4 text-foreground/75">42-44</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-primary/10 border border-primary/30 rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-2">Size Questions?</h3>
            <p className="text-foreground/75">
              If you're unsure about your size, please contact us at hello@kimhabork.com. We're happy to help you find the perfect fit!
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
