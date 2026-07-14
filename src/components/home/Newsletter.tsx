import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

export function Newsletter() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-court-500 to-court-700 px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_50%)]" />
          <div className="relative mx-auto max-w-lg">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
              <Mail className="h-5 w-5 text-white" />
            </span>
            <h2 className="mt-5 text-display-sm font-display font-semibold text-white">
              Never miss a gear drop
            </h2>
            <p className="mt-3 text-base text-white/80">
              Join 42,000+ players getting our weekly roundup of new reviews, deal alerts, and buying
              guides. No spam, unsubscribe anytime.
            </p>
            <div className="mt-8 flex justify-center">
              <NewsletterForm dark />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
