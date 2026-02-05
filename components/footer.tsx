import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border/40 bg-card mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div>
            <h3 className="font-serif text-lg font-bold text-primary mb-4">
              Kimhab Ork
            </h3>
            <p className="text-sm text-foreground/60">
              Affordable luxury womenswear fashion with a commitment to quality and sustainability.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/creative-director"
                  className="text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  Creative Director
                </Link>
              </li>
              <li>
                <Link
                  href="/custom-made"
                  className="text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  Custom Made Service
                </Link>
              </li>
              <li>
                <Link
                  href="/responsibility"
                  className="text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  Responsibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/care-guides"
                  className="text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  Care Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/legal-notes"
                  className="text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  Legal Notes
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/40 pt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <p className="text-sm text-foreground/60">
            &copy; {currentYear} Kimhab Ork. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-foreground/60 hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-foreground/60 hover:text-primary transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
