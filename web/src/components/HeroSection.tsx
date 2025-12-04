import { Button } from "@/components/ui/button";
import { Truck, Shield, Globe } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="ZYLORA2 Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Floating 3D Element */}
      <div className="absolute top-1/4 right-10 md:right-20 w-32 h-32 md:w-48 md:h-48 text-primary/20 font-heading font-bold text-[120px] md:text-[180px] animate-float select-none pointer-events-none">
        Z
      </div>

      {/* Content */}
      <div className="relative z-10 container-content text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Brand Name */}
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold mb-6 animate-fade-up">
            <span className="text-gradient">ZYLORA2</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 font-medium mb-4 animate-fade-up-delay-1">
            Smart Products for a Smarter Life.
          </p>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up-delay-2">
            Discover curated essentials designed to elevate your everyday. Premium quality, accessible prices.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up-delay-3">
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              Shop Best Sellers
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
              New Arrivals
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-foreground/70 animate-fade-up-delay-3">
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-primary" />
              <span className="text-sm md:text-base">Free Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="text-sm md:text-base">Secure Checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-sm md:text-base">Worldwide Shipping</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
