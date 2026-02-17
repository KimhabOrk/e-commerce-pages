// import { Header } from "@/components/evasion/header";
import { HeroSection } from "@/components/evasion/hero-section";
import { PhilosophySection } from "@/components/evasion/philosophy-section";
import { FeaturedProductsSection } from "@/components/evasion/featured-products-section";
import { TechnologySection } from "@/components/evasion/technology-section";
import { GallerySection } from "@/components/evasion/gallery-section";
import { CollectionSection } from "@/components/evasion/collection-section";
import { EditorialSection } from "@/components/evasion/editorial-section";
import { TestimonialsSection } from "@/components/evasion/testimonials-section";
// import { FooterSection } from "@/components/evasion/footer-section";
import styles from "./evasion.module.css"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className={styles.main}>
        <HeroSection />
        <PhilosophySection />
        <FeaturedProductsSection />
        <TechnologySection />
        <GallerySection />
        <CollectionSection />
        <EditorialSection />
        <TestimonialsSection />
      </main>
    </div>
  );
}
