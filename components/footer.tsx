import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="w-full border-t border-border/40 bg-black mt-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12 bg-black md:py-16">
        <div className="grid grid-cols-3 gap-2 md:gap-12 mb-4">
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
                  href="/custom-made"
                  className="text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  Custom Made
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
                  href="/responsibility"
                  className="text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  Responsibility
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
        </div>
        
        {/* Social Media */}
        <div className="flex flex-wrap gap-6 md:gap-8 mx-auto justify-center items-center py-4 md:py-8">
          <Link href="https://facebook.com/kimhaborkofficial">
            <Image 
              src="https://ik.imagekit.io/kimhabork/assets/socials/facebook.png?updatedAt=1767797839119"
              width={36} 
              height={36} 
              alt="Facebook Logo"
              className="object-cover md:h-10 md:w-10"
            />
          </Link>
          <Link href="https://www.instagram.com/kimhabork_official">
            <Image 
              src="https://ik.imagekit.io/kimhabork/assets/socials/instagram.png?updatedAt=1767797839255" 
              width={36}
              height={36}
              alt="Instagram Logo"
              className="object-cover md:h-10 md:w-10" 
            />
          </Link>
          <Link href="https://www.tiktok.com/@kimhabork_official">
            <Image 
              src="https://ik.imagekit.io/kimhabork/assets/socials/tiktok.png?updatedAt=1769794402290"
              width={36}
              height={36} 
              alt="Tiktok Logo" 
              className="object-cover md:h-10 md:w-10" 
             />
          </Link>
          <Link href="https://www.pinterest.com/kimhab_ork">
            <Image 
              src="https://ik.imagekit.io/kimhabork/assets/socials/pinterest.png?updatedAt=1767797839021"
              width={36}
              height={36} 
              alt="Pinterest Logo" 
              className="object-cover md:h-10 md:w-10" 
             />
          </Link>
          <Link href="https://www.linkedin.com/in/kimhab-ork">
            <Image 
              src="https://ik.imagekit.io/kimhabork/assets/socials/linkedin.png?updatedAt=1767797838945"
              width={36}
              height={36} 
              alt="LinkedIn Logo" 
              className="object-cover md:h-10 md:w-10" 
             />
          </Link>
        </div>
        
        {/* Divider */}
        <div className="border-t border-border/40 pt-8">
          <div className="relative flex flex-col gap-4 mx-auto text-center justify-center items-center">
          <p className="text-sm text-foreground/70">
            &copy; {currentYear} Kimhab Ork. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/privacy"
              className="text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
          </div>
        </div>
      </div>
    </footer>
  )
}