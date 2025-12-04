import { X, Minus, Plus, Trash2, Lock, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const cartItems = [
  {
    id: 1,
    title: "IPL Laser Hair Removal Device",
    variant: "Pink",
    price: 49.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    title: "Portable Mini Massage Gun",
    variant: "Black",
    price: 39.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=100&h=100&fit=crop"
  }
];

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeShippingThreshold = 50;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-background border-l border-border animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h2 className="font-heading text-xl font-bold">Your Cart ({cartItems.length} items)</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Close cart">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 pb-6 border-b border-border">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-lg" />
              <div className="flex-1">
                <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">Variant: {item.variant}</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-border rounded-lg">
                    <button className="p-2 hover:bg-muted transition-colors" aria-label="Decrease quantity">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-3 font-medium">{item.quantity}</span>
                    <button className="p-2 hover:bg-muted transition-colors" aria-label="Increase quantity">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="text-muted-foreground hover:text-destructive transition-colors" aria-label="Remove item">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <span className="font-semibold text-foreground">${item.price.toFixed(2)}</span>
              </div>
            </div>
          ))}

          {/* Free Shipping Progress */}
          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Truck className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">
                {amountToFreeShipping > 0
                  ? `Add $${amountToFreeShipping.toFixed(2)} for FREE SHIPPING`
                  : "You've unlocked FREE SHIPPING! 🎉"}
              </span>
            </div>
            <div className="h-2 bg-border rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-semibold text-lg">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-border">
            <span className="font-heading font-bold text-lg">Total</span>
            <span className="font-heading font-bold text-2xl">${subtotal.toFixed(2)}</span>
          </div>

          <Button variant="hero" size="xl" className="w-full">
            <Lock className="w-4 h-4" />
            Proceed to Checkout
          </Button>

          <button className="w-full text-center text-muted-foreground hover:text-primary transition-colors text-sm" onClick={onClose}>
            ← Continue Shopping
          </button>

          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground pt-2">
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3" /> Secure
            </span>
            <span className="flex items-center gap-1">
              <Truck className="w-3 h-3" /> Free Returns
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
