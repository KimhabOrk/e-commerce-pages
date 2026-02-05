import { FeatureCard } from '@/components/feature-card'
import Link from 'next/link'
import {
  Sparkles,
  Leaf,
  Heart,
  RotateCw,
  BookOpen,
  FileText,
} from 'lucide-react'

export default function Home() {
  const features = [
    {
      title: 'Affordable Luxury',
      description: 'Premium quality womenswear at prices that celebrate accessibility and value.',
    },
    {
      title: 'Sustainable Materials',
      description: 'Responsibly sourced fabrics that minimize environmental impact without compromising quality.',
    },
    {
      title: 'Ethical Production',
      description: 'Fair labor practices and transparent supply chain management throughout our operations.',
    },
    {
      title: 'Timeless Design',
      description: 'Versatile, classic silhouettes with modern details that remain relevant season after season.',
    },
  ]

  const pages = [
    {
      title: 'About Us',
      description: 'Discover our story, values, and commitment to affordable luxury fashion for modern women.',
      href: '/about',
      accent: 'text-primary',
    },
    {
      title: 'Care Guides',
      description: 'Comprehensive care instructions for all fabric types to preserve your pieces for years.',
      href: '/care-guides',
      accent: 'text-accent',
    },
    {
      title: 'Responsibility',
      description: 'Learn about our commitment to sustainability, ethical sourcing, and responsible production.',
      href: '/responsibility',
      accent: 'text-secondary',
    },
  ]

  return (
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted to-background overflow-hidden">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground  mb-6 text-balance">
                Affordable Luxury Fashion
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 mb-8 text-balance max-w-2xl mx-auto leading-relaxed">
                Discover Kimhab Ork, where premium womenswear meets accessible pricing. Quality, sustainability, and style in every collection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/about"
                  className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Explore Our Story
                </Link>
                <Link
                  href="/responsibility"
                  className="inline-block px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Our Commitment
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Why Choose Kimhab Ork
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard
                icon={<Sparkles className="w-full h-full" />}
                title="Affordable Luxury"
                description="Premium quality womenswear at prices that celebrate accessibility and value."
                ctaText="Explore"
                ctaHref="/about"
              />
              <FeatureCard
                icon={<Leaf className="w-full h-full" />}
                title="Sustainable Materials"
                description="Responsibly sourced fabrics that minimize environmental impact without compromising quality."
                ctaText="Learn More"
                ctaHref="/responsibility"
              />
              <FeatureCard
                icon={<Heart className="w-full h-full" />}
                title="Ethical Production"
                description="Fair labor practices and transparent supply chain management throughout our operations."
                ctaText="Discover"
                ctaHref="/responsibility"
              />
              <FeatureCard
                icon={<RotateCw className="w-full h-full" />}
                title="Timeless Design"
                description="Versatile, classic silhouettes with modern details that remain relevant season after season."
                ctaText="View"
                ctaHref="/about"
              />
            </div>
          </div>
        </section>

        {/* Pages Preview */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Learn More
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<BookOpen className="w-full h-full" />}
                title="About Us"
                description="Discover our story, values, and commitment to affordable luxury fashion for modern women."
                ctaText="Read Our Story"
                ctaHref="/about"
              />
              <FeatureCard
                icon={<BookOpen className="w-full h-full" />}
                title="Care Guides"
                description="Comprehensive care instructions for all fabric types to preserve your pieces for years."
                ctaText="View Guides"
                ctaHref="/care-guides"
              />
              <FeatureCard
                icon={<FileText className="w-full h-full" />}
                title="Responsibility"
                description="Learn about our commitment to sustainability, ethical sourcing, and responsible production."
                ctaText="Our Commitment"
                ctaHref="/responsibility"
              />
            </div>
          </div>
        </section>

        {/* Additional Pages */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-8">
              Legal & Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/care-guides"
                className="p-4 bg-muted rounded-lg hover:bg-accent/10 transition-colors text-center"
              >
                <h3 className="font-semibold text-foreground mb-1">Care Guides</h3>
                <p className="text-sm text-foreground/60">Fabric care instructions</p>
              </Link>
              <Link
                href="/legal-notes"
                className="p-4 bg-muted rounded-lg hover:bg-accent/10 transition-colors text-center"
              >
                <h3 className="font-semibold text-foreground mb-1">Legal Notes</h3>
                <p className="text-sm text-foreground/60">Legal information</p>
              </Link>
              <Link
                href="/privacy-policy"
                className="p-4 bg-muted rounded-lg hover:bg-accent/10 transition-colors text-center"
              >
                <h3 className="font-semibold text-foreground mb-1">Privacy Policy</h3>
                <p className="text-sm text-foreground/60">Data protection</p>
              </Link>
              <Link
                href="/terms"
                className="p-4 bg-muted rounded-lg hover:bg-accent/10 transition-colors text-center"
              >
                <h3 className="font-semibold text-foreground mb-1">Terms & Conditions</h3>
                <p className="text-sm text-foreground/60">Service terms</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-balance">
              Experience Affordable Luxury
            </h2>
            <p className="text-lg mb-8 opacity-90 text-balance max-w-2xl mx-auto leading-relaxed">
              Discover premium womenswear that doesn't compromise on quality, sustainability, or price. Welcome to Kimhab Ork.
            </p>
            <Link
              href="/about"
              className="inline-block px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Start Exploring
            </Link>
          </div>
        </section>
      </main>
  )
}
