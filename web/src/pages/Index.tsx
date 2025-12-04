import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedCollections } from "@/components/FeaturedCollections";
import { BestSellers } from "@/components/BestSellers";
import { TrustSection } from "@/components/TrustSection";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { MobileStickyCart } from "@/components/MobileStickyCart";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pb-16 md:pb-0">
        <HeroSection />
        <FeaturedCollections />
        <BestSellers />
        <TrustSection />
        <ReviewsCarousel />
        <Newsletter />
      </main>
      <Footer />
      <MobileStickyCart />
    </div>
  );
};

export default Index;
