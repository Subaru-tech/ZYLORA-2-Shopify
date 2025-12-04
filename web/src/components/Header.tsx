import { useState, useEffect } from "react";
import { Search, User, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartDrawer } from "./CartDrawer";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "#", hasDropdown: true },
  { label: "Collections", href: "#collections" },
  { label: "Best Sellers", href: "#best-sellers" },
  { label: "Track Order", href: "/track-order" },
];

const currencies = ["USD", "EUR", "GBP", "CAD", "AUD", "INR"];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [cartCount] = useState(2);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm font-medium">
        <span className="animate-pulse">🎉</span> FREE SHIPPING ON ORDERS $50+ | Shop Now →
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-charcoal-deep/98 backdrop-blur-md py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-charcoal-deep/95 backdrop-blur-sm py-4"
          }`}
      >
        <div className="container-main">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <h1 className="font-heading text-2xl md:text-3xl font-bold tracking-wider text-gradient">
                ZYLORA2
              </h1>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors flex items-center gap-1 font-medium"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              ))}
            </nav>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-muted/50 border border-border rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Search - Mobile */}
              <button className="md:hidden text-foreground p-2" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>

              {/* Currency Selector */}
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                className="hidden md:block bg-transparent border border-border rounded-md px-2 py-1 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {currencies.map((currency) => (
                  <option key={currency} value={currency} className="bg-background">
                    {currency}
                  </option>
                ))}
              </select>

              {/* Account */}
              <button className="text-foreground p-2 hover:text-primary hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)] rounded-full transition-all duration-300" aria-label="Account">
                <User className="w-5 h-5" />
              </button>

              {/* Cart */}
              <button
                className="relative text-foreground p-2 hover:text-primary hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)] rounded-full transition-all duration-300"
                onClick={() => setIsCartOpen(true)}
                aria-label="Cart"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 max-w-full bg-background border-r border-border animate-slide-in-right">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-heading text-xl font-bold text-gradient">ZYLORA2</h2>
                <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
