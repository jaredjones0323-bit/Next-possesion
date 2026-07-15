import type { Metadata } from "next";
import { FlaskConical, Ruler, RefreshCcw, Users2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "How We Test",
  description: `The testing methodology behind every ${SITE.name} product review and rating.`,
  alternates: { canonical: `${SITE.url}/how-we-test` },
};

const STEPS = [
  {
    icon: FlaskConical,
    title: "1. Acquire the product",
    body: "We purchase most products at full retail price. When a brand provides a review unit at no cost, we disclose it and test it with the same rigor as a purchased product.",
  },
  {
    icon: Users2,
    title: "2. Structured multi-tester protocol",
    body: "Products are tested by multiple team members across a range of body types, skill levels, and playing styles to avoid single-tester bias.",
  },
  {
    icon: Ruler,
    title: "3. Measure what we can measure",
    body: "Where possible, we use objective measurement — laser deflection gauges for backboard flex, timed traction tests, video frame analysis for wearable accuracy — rather than pure subjective feel.",
  },
  {
    icon: RefreshCcw,
    title: "4. Re-test over time",
    body: "Durability claims are verified over weeks or months of real use, not a single session. We revisit standing recommendations quarterly.",
  },
];

const CATEGORY_METHODOLOGY = [
  {
    category: "Basketball Shoes",
    points: [
      "Minimum two weeks indoor + one week outdoor testing per pair",
      "Standardized traction test on clean and dusty court sections",
      "Durability check at 60-day and 120-day marks",
    ],
  },
  {
    category: "Hoops & Systems",
    points: [
      "200-cycle dunk simulation using a weighted test rig",
      "Laser deflection gauge for backboard flex measurement",
      "Wind resistance testing up to 30 mph using an industrial fan",
    ],
  },
  {
    category: "Training Equipment",
    points: [
      "Minimum 15 sessions per device across 3+ testers",
      "Shot/rep volume logged per hour versus baseline",
      "Mechanical reliability tracked across the full test period",
    ],
  },
];

export default function HowWeTestPage() {
  return (
    <>
      <PageHeader
        eyebrow="Methodology"
        title="How We Test"
        description="Every rating on this site is backed by a documented, repeatable testing process."
      />

      <Container className="py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {STEPS.map((step) => (
            <div key={step.title} className="rounded-2xl border border-ink-100 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-court-50 text-court-600 dark:bg-court-500/10 dark:text-court-400">
                <step.icon className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-semibold text-ink-950 dark:text-white">{step.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-display-sm font-display font-semibold text-ink-950 dark:text-white">
            Category-specific methodology
          </h2>
          <div className="mt-8 space-y-6">
            {CATEGORY_METHODOLOGY.map((item) => (
              <div key={item.category} className="rounded-2xl border border-ink-100 p-6 dark:border-ink-800">
                <h3 className="font-semibold text-ink-950 dark:text-white">{item.category}</h3>
                <ul className="mt-3 space-y-1.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm text-ink-600 dark:text-ink-300">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-court-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
