import { ShieldCheck, Truck, Headphones, RotateCcw } from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "256-bit SSL encryption on all transactions.",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Global delivery to 150+ countries.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Always here via chat, email, or phone.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day hassle-free money-back guarantee.",
  },
];

export function TrustSection() {
  return (
    <section className="py-20 md:py-24 bg-charcoal-deep border-y border-border">
      <div className="container-content">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className="text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted border border-border mb-4 group-hover:border-primary group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
