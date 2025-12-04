import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileStickyCartProps {
  productName?: string;
  price?: number;
  onAddToCart?: () => void;
}

export function MobileStickyCart({
  productName = "Shop ZYLORA2",
  price,
  onAddToCart
}: MobileStickyCartProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-charcoal-deep/95 backdrop-blur-md border-t border-border px-4 py-3 safe-area-bottom">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground truncate">{productName}</p>
          {price && (
            <p className="text-primary font-bold">${price.toFixed(2)}</p>
          )}
        </div>
        <Button
          onClick={onAddToCart}
          className="flex-shrink-0 h-12 px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-all"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
