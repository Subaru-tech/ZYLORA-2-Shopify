import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  about: [
    { label: "About Us", href: "#" },
    { label: "Our Story", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  shop: [
    { label: "Best Sellers", href: "#best-sellers" },
    { label: "New Arrivals", href: "#" },
    { label: "Collections", href: "#collections" },
    { label: "Sale", href: "#" },
  ],
  help: [
    { label: "Contact Us", href: "#" },
    { label: "Track Order", href: "/track-order" },
    { label: "Shipping Info", href: "#" },
    { label: "Returns", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  policies: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const paymentMethods = [
  "Visa", "Mastercard", "PayPal", "Apple Pay", "Google Pay", "Amex", "Stripe", "2Checkout"
];

export function Footer() {
  return (
    <footer className="bg-charcoal-deep border-t border-border">
      {/* Main Footer */}
      <div className="container-content py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="font-heading text-2xl font-bold text-gradient mb-4">ZYLORA2</h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs leading-relaxed">
              Smart products for a smarter life. Elevating your everyday with premium curated essentials.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)]" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)]" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)]" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)]" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">About</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Help</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Policies</h3>
            <ul className="space-y-3">
              {footerLinks.policies.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-content py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Payment Methods */}
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <span className="text-xs text-muted-foreground mr-2">We Accept:</span>
              {paymentMethods.map((method) => (
                <span
                  key={method}
                  className="bg-muted/50 border border-border px-3 py-1.5 rounded text-xs text-muted-foreground hover:border-primary/50 transition-colors"
                >
                  {method}
                </span>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-xs text-muted-foreground text-center md:text-right">
              © 2024 ZYLORA2. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
