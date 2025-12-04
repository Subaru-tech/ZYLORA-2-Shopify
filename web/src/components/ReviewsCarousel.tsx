import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";
import { reviews } from "@/data/products";

export function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section className="py-20 md:py-28 bg-charcoal-deep">
      <div className="container-content">
        <h2 className="section-title">
          What Our <span className="text-gradient">Customers</span> Say
        </h2>
        <p className="section-subtitle">
          Join 50,000+ happy customers who trust ZYLORA2 for premium products.
        </p>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-muted/80 hover:bg-primary transition-all duration-300 flex items-center justify-center hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-muted/80 hover:bg-primary transition-all duration-300 flex items-center justify-center hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Reviews */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center hover:border-primary/50 transition-colors">
                    {/* Customer Avatar */}
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
                      {review.name.charAt(0)}
                    </div>

                    {/* Stars */}
                    <div className="flex items-center justify-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < review.rating ? "text-accent fill-accent" : "text-muted-foreground"
                            }`}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6 italic">
                      "{review.text}"
                    </p>

                    {/* Product */}
                    <p className="text-sm text-primary mb-4">{review.product}</p>

                    {/* Author */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-semibold text-foreground">
                          {review.name}
                        </span>
                        <span className="text-xl">{review.country}</span>
                      </div>
                      {review.verified && (
                        <div className="flex items-center gap-1 text-secondary text-sm">
                          <BadgeCheck className="w-4 h-4" />
                          <span className="font-medium">Verified Purchase</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                    ? "w-8 bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.5)]"
                    : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
