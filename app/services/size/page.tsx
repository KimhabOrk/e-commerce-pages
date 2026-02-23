import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function SizeGuidePage() {
  const sizeData = [
    {
      measurement: 'IT',
      xs: '38 / XS',
      s: '40 / S',
      m: '42 / M',
    },
    {
      measurement: 'UK/AU',
      xs: '6',
      s: '8',
      m: '10',
    },
    {
      measurement: 'US',
      xs: '2',
      s: '4',
      m: '6',
    },
    {
      measurement: 'FR',
      xs: '34',
      s: '36',
      m: '38',
    },
    {
      measurement: 'DE',
      xs: '34',
      s: '36',
      m: '38',
    },
    {
      measurement: 'BUST',
      xs: '84',
      s: '87',
      m: '90',
    },
    {
      measurement: 'UNDER BUST',
      xs: '70',
      s: '73',
      m: '76',
    },
    {
      measurement: 'WAIST',
      xs: '66',
      s: '69',
      m: '72',
    },
    {
      measurement: 'HIPS',
      xs: '90',
      s: '93',
      m: '96',
    },
    {
      measurement: 'SLEEVE LENGTH',
      xs: '80.4',
      s: '81.7',
      m: '83',
    },
    {
      measurement: 'SHOULDERS',
      xs: '38',
      s: '39',
      m: '40',
    },
  ];

  const measurementInstructions = [
    {
      title: 'Shoulders',
      description:
        'Measure the shoulder length with a measuring tape, from shoulder to shoulder.',
    },
    {
      title: 'Bust',
      description:
        'Measure the circumference of the bust with a measuring tape around the fullest point of the bust. It is advisable to wear a bra.',
    },
    {
      title: 'Underbust',
      description:
        'Measure the circumference of the underbust with a measuring tape around the fullest point of the ribcage, directly underneath the bust. It is advisable to wear a bra.',
    },
    {
      title: 'Waist',
      description:
        'Measure the circumference of the natural waistline with the measuring tape placed around the narrowest point of the waist.',
    },
    {
      title: 'Hips',
      description:
        'Measure the circumference of the hips with a measuring tape placed around the fullest point of your hips.',
    },
    {
      title: 'Sleeve Length',
      description:
        'Measure the sleeve length with a measuring tape from the nape of your neck, over your shoulder, and down to your wrist.',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden border-b border-border/50 py-20 md:py-28 lg:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-accent font-serif text-sm uppercase tracking-widest">Kimhab Ork</p>
            <h1 className="text-balance font-serif text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl mt-4">
              Size Guide
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Find your perfect fit with our comprehensive measurement chart and expert guidelines. Precision tailoring begins with precision measurement.
            </p>
          </div>
        </div>
      </section>

      {/* Size Chart Section */}
      <section className="border-b border-border/50 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-serif text-4xl font-light text-foreground">
              Conversion Chart
            </h2>
            <div className="mt-2 h-1 w-16 bg-accent"></div>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              Consult our comprehensive conversion and measurement charts to determine your ideal Kimhab Ork size
            </p>
          </div>

          {/* Responsive Table */}
          <div className="overflow-x-auto rounded-lg border border-border/50 bg-secondary">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50 bg-secondary">
                  <th className="px-6 py-4 text-left font-serif text-sm font-semibold text-foreground">
                    Measurement
                  </th>
                  <th className="px-6 py-4 text-center font-serif text-sm font-semibold text-accent">
                    38 / XS
                  </th>
                  <th className="px-6 py-4 text-center font-serif text-sm font-semibold text-accent">
                    40 / S
                  </th>
                  <th className="px-6 py-4 text-center font-serif text-sm font-semibold text-accent">
                    42 / M
                  </th>
                </tr>
              </thead>
              <tbody>
                {sizeData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-border/30 transition-colors ${
                      idx % 2 === 0 ? 'bg-secondary/50 hover:bg-secondary/80' : 'bg-secondary hover:bg-secondary/70'
                    }`}
                  >
                    <td className="px-6 py-4 font-medium text-foreground">
                      {row.measurement}
                    </td>
                    <td className="px-6 py-4 text-center text-foreground">
                      {row.xs}
                    </td>
                    <td className="px-6 py-4 text-center text-foreground">
                      {row.s}
                    </td>
                    <td className="px-6 py-4 text-center text-foreground">{row.m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            All measurements are in centimeters (CM). Standard sizing for premium luxury garments.
          </p>
        </div>
      </section>

      {/* Measurement Guide Image Section */}
      <section className="border-b border-border/50 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-serif text-4xl font-light text-foreground">
              Visual Measurement Guide
            </h2>
            <div className="mt-2 h-1 w-16 bg-accent"></div>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              Discover exactly where each measurement point is located on the body for accurate sizing
            </p>
          </div>

          <div className="flex justify-center bg-secondary/30 rounded-lg p-8 md:p-12 border border-border/50">
            <div className="relative w-full max-w-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_20260223_195656_0000-fmiQguIfhwYTKz8WmU6CuynWhzbp1Y.png"
                alt="Measurement points guide showing where to measure shoulders, bust, underarm, waist, hip, and length on a woman wearing a red dress"
                width={500}
                height={700}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* How to Measure Section */}
      <section className="border-b border-border/50 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-serif text-4xl font-light text-foreground">
              How to Measure
            </h2>
            <div className="mt-2 h-1 w-16 bg-accent"></div>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              Follow our expert step-by-step instructions for precise body measurements
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {measurementInstructions.map((instruction, idx) => (
              <div
                key={idx}
                className="group relative border border-border/50 bg-secondary/50 p-6 rounded-lg transition-all hover:border-accent/50 hover:bg-secondary/80 hover:shadow-lg"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
                    <span className="font-serif text-sm font-semibold text-accent">
                      {idx + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-light text-foreground group-hover:text-accent transition-colors">
                    {instruction.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {instruction.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Tips */}
          <div className="mt-16 rounded-lg border border-accent/30 bg-secondary/40 p-8 md:p-10">
            <h3 className="font-serif text-2xl font-light text-foreground flex items-center gap-3">
              <span className="inline-block h-1 w-8 bg-accent"></span>
              Measurement Tips
            </h3>
            <ul className="mt-6 space-y-4">
              <li className="flex gap-4 items-start">
                <span className="flex-shrink-0 text-accent mt-1">✓</span>
                <span className="text-muted-foreground">
                  Always wear similar undergarments to what you'll wear with the garment
                </span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="flex-shrink-0 text-accent mt-1">✓</span>
                <span className="text-muted-foreground">Keep the measuring tape snug but not tight against your skin</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="flex-shrink-0 text-accent mt-1">✓</span>
                <span className="text-muted-foreground">Stand in front of a mirror for maximum accuracy</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="flex-shrink-0 text-accent mt-1">✓</span>
                <span className="text-muted-foreground">Take measurements multiple times to ensure consistency</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="flex-shrink-0 text-accent mt-1">✓</span>
                <span className="text-muted-foreground">
                  If you're between sizes, we recommend sizing up for optimal comfort
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="border-t border-border/50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-light text-foreground">
            Need Personalized Assistance?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Our expert styling team is ready to help you find your perfect size and guide you through the fitting process
          </p>
          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 font-serif text-sm font-medium text-accent-foreground transition-all hover:shadow-lg hover:shadow-accent/20 active:scale-95">
            Contact Our Experts
          </button>
        </div>
      </section>
    </main>
  );
}
