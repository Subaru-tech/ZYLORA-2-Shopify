import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Package, Search, Truck, CheckCircle, MapPin } from "lucide-react";

export default function TrackOrder() {
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isTracking, setIsTracking] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTracking(true);
    // In a real app, this would call an API
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20 md:py-28">
        <div className="container-content max-w-2xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Package className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Track Your <span className="text-gradient">Order</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Enter your order details below to check your shipment status.
            </p>
          </div>

          {/* Track Form */}
          <form onSubmit={handleTrack} className="bg-card border border-border rounded-2xl p-8 md:p-10 mb-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="orderNumber" className="block text-sm font-medium text-foreground mb-2">
                  Order Number
                </label>
                <input
                  id="orderNumber"
                  type="text"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="e.g., ZYL-123456"
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                />
              </div>

              <Button type="submit" className="w-full h-14 text-lg" variant="hero">
                <Search className="w-5 h-5 mr-2" />
                Track Order
              </Button>
            </div>
          </form>

          {/* Sample Tracking Result (shown after search) */}
          {isTracking && (
            <div className="bg-card border border-border rounded-2xl p-8 animate-fade-up">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm text-muted-foreground">Order Number</p>
                  <p className="font-semibold text-foreground">{orderNumber || "ZYL-123456"}</p>
                </div>
                <span className="px-3 py-1 bg-secondary/20 text-secondary text-sm font-medium rounded-full">
                  In Transit
                </span>
              </div>

              {/* Timeline */}
              <div className="space-y-6">
                {[
                  { icon: CheckCircle, title: "Order Confirmed", date: "Nov 28, 2024", done: true },
                  { icon: Package, title: "Shipped", date: "Nov 29, 2024", done: true },
                  { icon: Truck, title: "In Transit", date: "Dec 1, 2024", done: true, current: true },
                  { icon: MapPin, title: "Out for Delivery", date: "Estimated Dec 3", done: false },
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      step.done 
                        ? step.current 
                          ? "bg-primary text-primary-foreground shadow-[0_0_15px_hsl(var(--primary)/0.5)]" 
                          : "bg-secondary text-secondary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 pb-6 border-b border-border last:border-0">
                      <p className={`font-medium ${step.done ? "text-foreground" : "text-muted-foreground"}`}>
                        {step.title}
                      </p>
                      <p className="text-sm text-muted-foreground">{step.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Help Text */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            Can't find your order? <a href="#" className="text-primary hover:underline">Contact Support</a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
