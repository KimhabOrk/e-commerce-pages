// import { Header } from "@/components/mono/header";
import { HeroSection } from "@/components/mono/sections/hero-section";
import { PhilosophySection } from "@/components/mono/sections/philosophy-section";
import { FeaturedProductsSection } from "@/components/mono/sections/featured-products-section";
import { TechnologySection } from "@/components/mono/sections/technology-section";
import { GallerySection } from "@/components/mono/sections/gallery-section";
import { CollectionSection } from "@/components/mono/sections/collection-section";
import { EditorialSection } from "@/components/mono/sections/editorial-section";
import { TestimonialsSection } from "@/components/mono/sections/testimonials-section";
// import { FooterSection } from "@/components/mono/sections/footer-section";
import styles from "./mono.module.css";

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
