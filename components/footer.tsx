import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border/60 bg-background pt-8">
      <div className="relative mx-auto max-w-6xl justify-center items-center flex flex-col px-6 md:px-8 lg:px-10 py-8 md:py-12">
        <div className="grid grid-rows-3 md:grid-cols-3 gap-8 md:gap-12 mb-4">
          {/* Company Links */}
          <div>
            <h4 className="hidden md:block lg:block font-semibold text-white mb-4 text-sm">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/company/about"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/company/creative-director"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  Creative Director
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/company/responsibility"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  Responsibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="hidden md:block lg:block font-semibold text-white mb-4 text-sm">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/custom-made"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  Custom Made
                </Link>
              </li>
              <li>
                <Link
                  href="/services/care-guides"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  Care Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/services/orders"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  Orders/Shipping/Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/services/helps"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  Helps & FAQS
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="hidden md:block lg:block font-semibold text-white mb-4 text-sm">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/legal/notes"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  Legal Notes
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/sales"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  Sales Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/privacy"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/terms"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-wrap gap-4 md:gap-6 mx-auto justify-evenly items-center py-4 md:py-10">
          <Link href="https://facebook.com/kimhaborkofficial">
            <Image
              src="https://ik.imagekit.io/kimhabork/assets/socials/facebook.png?updatedAt=1767797839119"
              width={40}
              height={40}
              alt="Facebook Logo"
              className="object-cover"
            />
          </Link>
          <Link href="https://www.instagram.com/kimhabork_official">
            <Image
              src="https://ik.imagekit.io/kimhabork/assets/socials/instagram.png?updatedAt=1767797839255"
              width={40}
              height={40}
              alt="Instagram Logo"
              className="object-cover"
            />
          </Link>
          <Link href="https://www.tiktok.com/@kimhabork_official">
            <Image
              src="https://ik.imagekit.io/kimhabork/assets/socials/tiktok.png?updatedAt=1769794402290"
              width={40}
              height={40}
              alt="Tiktok Logo"
              className="object-cover"
            />
          </Link>
          <Link href="https://www.pinterest.com/kimhab_ork">
            <Image
              src="https://ik.imagekit.io/kimhabork/assets/socials/pinterest.png?updatedAt=1767797839021"
              width={40}
              height={40}
              alt="Pinterest Logo"
              className="object-cover"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/kimhab-ork">
            <Image
              src="https://ik.imagekit.io/kimhabork/assets/socials/linkedin.png?updatedAt=1767797838945"
              width={40}
              height={40}
              alt="LinkedIn Logo"
              className="object-cover"
            />
          </Link>
        </div>

        {/* Divider */}
        <div className="pt-4 md:pt-8 flex mx-auto text-center justify-center items-center">
          <div className="relative flex flex-col gap-4 mx-auto justify-center items-center">
            <p className="text-sm text-foreground/70">
              &copy; {currentYear} Kimhab Ork. All rights reserved.
            </p>
            {/***
            <div className="flex flex-wrap gap-2">
              <Link
                href="/privacy"
                className="text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-sm text-foreground/70">|</span>
              <Link
                href="/terms"
                className="text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
            */}
          </div>
        </div>
      </div>
    </footer>
  )
}
