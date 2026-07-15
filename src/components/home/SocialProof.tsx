import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";

const TESTIMONIALS = [
  {
    quote:
      "The shoe width guide alone saved me two returns. This is the only gear site I trust before buying.",
    name: "Jordan T.",
    role: "High school varsity coach",
  },
  {
    quote:
      "Finally a review site that shows actual testing data instead of just reposting spec sheets. The hoop comparison was incredibly thorough.",
    name: "Priya M.",
    role: "Parent & weekend league player",
  },
  {
    quote:
      "Bought the shooting machine after reading their breakdown — exactly as described. Shot volume is night and day.",
    name: "Chris B.",
    role: "AAU trainer",
  },
];

const LOGOS = ["SLAM", "Hoops Weekly", "Court Report", "Baseline", "The Rim"];

export function SocialProof() {
  return (
    <section className="border-t border-ink-100 py-20 dark:border-ink-800">
      <Container>
        <p className="text-center text-xs font-bold uppercase tracking-wide text-ink-400">
          As referenced by
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
          {LOGOS.map((logo) => (
            <span key={logo} className="font-display text-lg font-bold text-ink-400">
              {logo}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-ink-100 bg-white p-6 dark:border-ink-800 dark:bg-ink-900"
            >
              <div className="flex gap-0.5 text-court-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold text-ink-900 dark:text-white">{testimonial.name}</span>
                <span className="text-ink-400"> &middot; {testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
