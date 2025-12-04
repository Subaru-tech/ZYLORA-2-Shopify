import { ShoppingCart, Star } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const discount = Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100);

  return (
    <div className="group relative bg-charcoal-deep rounded-xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] transition-all duration-300 cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.badge === "bestseller" && (
            <span className="badge-bestseller">Best Seller</span>
          )}
          {product.badge === "sale" && (
            <span className="badge-sale">-{discount}%</span>
          )}
          {product.badge === "new" && (
            <span className="bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded">
              New
            </span>
          )}
        </div>

        {/* Quick Add Button */}
        <button
          className="absolute bottom-3 right-3 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
          aria-label="Add to cart"
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
        <h3 className="font-heading font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? "text-accent fill-accent"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground line-through">
            ${product.compareAtPrice.toFixed(2)}
          </span>
          <span className="font-heading font-bold text-lg text-primary">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
