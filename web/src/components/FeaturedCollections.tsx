import { ArrowRight } from "lucide-react";
import { collections } from "@/data/products";

export function FeaturedCollections() {
  return (
    <section id="collections" className="py-20 md:py-28 bg-background">
      <div className="container-content">
        <h2 className="section-title">
          Shop by <span className="text-gradient">Category</span>
        </h2>
        <p className="section-subtitle">
          Explore our curated collections designed to elevate every aspect of your life.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {collections.map((collection, index) => (
            <a
              key={collection.id}
              href={`#${collection.id}`}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-charcoal-deep border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <img
                src={collection.image}
                alt={collection.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
                loading="lazy"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

              {/* Neon Glow Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-primary/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {collection.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {collection.productCount} Products
                </p>
                
                {/* Shop Now Arrow */}
                <div className="flex items-center gap-2 text-primary opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-sm font-semibold">Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300 pointer-events-none" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
