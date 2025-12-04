import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

export function BestSellers() {
  const [visibleCount, setVisibleCount] = useState(8);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, products.length));
  };

  return (
    <section id="best-sellers" className="py-20 md:py-28 bg-charcoal-deep">
      <div className="container-content">
        <h2 className="section-title">
          Our <span className="text-gradient">Best Sellers</span>
        </h2>
        <p className="section-subtitle">
          The products our customers can't stop raving about. Discover why thousands choose ZYLORA2.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
          {products.slice(0, visibleCount).map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {visibleCount < products.length && (
          <div className="text-center mt-14">
            <Button
              variant="outline"
              size="lg"
              onClick={loadMore}
              className="hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
            >
              Load More Products
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
