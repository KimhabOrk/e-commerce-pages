import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/60 bg-background pt-8 py-6 md:py-12">
      <div className="relative mx-auto max-w-8xl justify-center items-center flex flex-col px-6 md:px-12 lg:px-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 mb-8">
          {/* Company Links */}
          <div className="flex flex-col gap-2 md:gap-4 items-center mx-auto">
            <div className="flex flex-col text-foreground text-start text-balance">
              <Image
                src="/logo-dark.png"
                width={138}
                height={26}
                alt="Logo"
                className="h-full w-[138px] md:w-32 object-cover mb-2"
              />
              <p className="text-sm md:text-xl">Affordable Luxury Womenswear</p>
            </div>
            <div className="flex mx-auto justify-center gap-1.5 items-center">
              <Link href="https://facebook.com/kimhaborkofficial">
                <Image
                  src="https://ik.imagekit.io/kimhabork/assets/socials/facebook.png?updatedAt=1767797839119"
                  width={32}
                  height={32}
                  alt="Facebook Logo"
                  className="object-cover md:w-10 md:h-10"
                />
              </Link>
              <Link href="https://www.instagram.com/kimhabork_official">
                <Image
                  src="https://ik.imagekit.io/kimhabork/assets/socials/instagram.png?updatedAt=1767797839255"
                  width={32}
                  height={32}
                  alt="Instagram Logo"
                  className="object-cover md:w-10 md:h-10"
                />
              </Link>
              <Link href="https://www.tiktok.com/@kimhabork_official">
                <Image
                  src="https://ik.imagekit.io/kimhabork/assets/socials/tiktok.png?updatedAt=1769794402290"
                  width={32}
                  height={32}
                  alt="Tiktok Logo"
                  className="object-cover md:w-10 md:h-10"
                />
              </Link>
              <Link href="https://www.linkedin.com/in/kimhab-ork">
                <Image
                  src="https://ik.imagekit.io/kimhabork/assets/socials/linkedin.png?updatedAt=1767797838945"
                  width={32}
                  height={32}
                  alt="LinkedIn Logo"
                  className="object-cover md:w-10 md:h-10"
                />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2 text-sm md:text-md">
              Company
            </h4>
            <ul className="space-y-2 text-sm md:text-md">
              <li>
                <Link
                  href="/company/about"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/company/creative-director"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Creative Director
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/company/responsibility"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Product Responsibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-white mb-2 text-sm md:text-md">
              Support
            </h4>
            <ul className="space-y-2 text-sm md:text-md">
              <li>
                <Link
                  href="/services/custom-made"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Custom Made
                </Link>
              </li>
              <li>
                <Link
                  href="/services/care-guides"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Care Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/services/orders"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Shipping & Return
                </Link>
              </li>
              <li>
                <Link
                  href="/services/helps"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Helps & FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-white mb-2 text-sm md:text-md">
              Legal
            </h4>
            <ul className="space-y-2 text-sm md:text-md">
              <li>
                <Link
                  href="/legal/notes"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Legal Notes
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/sales"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Sales Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/privacy"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/terms"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="pt-6 md:pt-10 w-full border-t border-border flex mx-auto justify-center items-center">
        <div className="relative flex flex-col gap-4 mx-auto justify-center items-center text-center px-6 md:px-8 lg:px-10">
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
    </footer>
  );
}
