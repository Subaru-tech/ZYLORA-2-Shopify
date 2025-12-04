import { useState } from "react";
import { Send, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !agreed) return;

    toast({
      title: "Welcome to ZYLORA2! 🎉",
      description: "Check your email for your 10% discount code.",
    });
    setEmail("");
    setAgreed(false);
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20" />
      <div className="absolute inset-0 bg-background/80" />

      <div className="container-content relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6 shadow-[0_0_30px_hsl(var(--primary)/0.3)]">
            <Gift className="w-10 h-10 text-primary" />
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join the <span className="text-gradient">ZYLORA2</span> Community
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get <span className="text-primary font-semibold">10% off</span> your first order + exclusive deals and early access to new arrivals.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-muted border border-border rounded-lg px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                required
              />
              <Button type="submit" variant="hero" className="sm:w-auto h-[50px]">
                <Send className="w-4 h-4" />
                Subscribe
              </Button>
            </div>

            <label className="flex items-center justify-center gap-2 text-sm text-muted-foreground cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-4 h-4 rounded border-border bg-muted text-primary focus:ring-primary"
                required
              />
              I agree to receive marketing emails. Unsubscribe anytime.
            </label>
          </form>

          <p className="text-xs text-muted-foreground mt-6">
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
}
