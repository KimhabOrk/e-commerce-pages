import { Header } from "@/components/mono/header";
import { HeroSection } from "@/components/mono/sections/hero-section";
import { PhilosophySection } from "@/components/mono/sections/philosophy-section";
import { FeaturedProductsSection } from "@/components/mono/sections/featured-products-section";
import { TechnologySection } from "@/components/mono/sections/technology-section";
import { GallerySection } from "@/components/mono/sections/gallery-section";
import { CollectionSection } from "@/components/mono/sections/collection-section";
import { EditorialSection } from "@/components/mono/sections/editorial-section";
import { TestimonialsSection } from "@/components/mono/sections/testimonials-section";
import { FooterSection } from "@/components/mono/sections/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PhilosophySection />
      <FeaturedProductsSection />
      <TechnologySection />
      <GallerySection />
      <CollectionSection />
      <EditorialSection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  );
}
