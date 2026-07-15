import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";

const TESTIMONIALS = [
  {
    quote:
      "The recruiting timeline article alone changed how we approached junior year. We stopped waiting to be discovered and started actually building relationships with coaches.",
    name: "Sarah K.",
    role: "Parent of a Class of 2027 player",
  },
  {
    quote:
      "Finally, advice that isn't trying to sell me a training program. It's just straight, honest information from someone who's actually coached at this level.",
    name: "Marcus T.",
    role: "AAU coach",
  },
  {
    quote:
      "The film breakdown piece made me completely rethink what I was sending to coaches. I was leading with highlights instead of showing them who I actually am as a player.",
    name: "Devon R.",
    role: "High school junior, class of 2027",
  },
];

const TRUST_POINTS = [
  "Written by a coach, not a marketer",
  "No pay-to-play or sponsored rankings",
  "Free content, always",
];

export function SocialProof() {
  return (
    <section className="border-t border-ink-100 py-20 dark:border-ink-800">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {TRUST_POINTS.map((point) => (
            <span
              key={point}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ink-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-court-500" />
              {point}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-ink-100 bg-white p-6 dark:border-ink-800 dark:bg-ink-900"
            >
              <Quote className="h-5 w-5 text-court-500" />
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
