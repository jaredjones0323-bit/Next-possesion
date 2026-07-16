import { Container } from "@/components/ui/Container";

const TRUST_POINTS = [
  "Written by a coach, not a marketer",
  "No pay-to-play or sponsored rankings",
  "Free content, always",
];

export function SocialProof() {
  return (
    <section className="border-t border-ink-100 py-14 dark:border-ink-800">
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
      </Container>
    </section>
  );
}
