import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Editorial Guidelines",
  description: `The editorial standards behind every ${SITE.name} article.`,
  alternates: { canonical: `${SITE.url}/editorial-guidelines` },
};

const PRINCIPLES = [
  {
    title: "Written from real coaching experience",
    body: "Every article is written or reviewed by someone who has actually coached, recruited, or evaluated players at the level being discussed — not repackaged from other sites.",
  },
  {
    title: "No pay-to-play, ever",
    body: "We don't accept payment from training companies, recruiting services, or programs in exchange for favorable coverage or placement.",
  },
  {
    title: "Guarantees are a red flag we won't use",
    body: "We never promise specific recruiting outcomes, scholarships, or rankings. Advice is framed around what's actually in a player's or family's control.",
  },
  {
    title: "Content stays current",
    body: "Recruiting rules, timelines, and norms change. Articles are revisited periodically and updated when something material changes — the 'Updated' date at the top reflects that.",
  },
  {
    title: "Correction policy",
    body: "If we get something wrong, we fix it and note the correction. Accuracy matters more than being right the first time.",
  },
];

export default function EditorialGuidelinesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trust"
        title="Editorial Guidelines"
        description="The standards that govern everything we publish."
      />
      <Container size="narrow" className="py-16">
        <div className="space-y-8">
          {PRINCIPLES.map((principle, index) => (
            <div key={principle.title} className="flex gap-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-court-50 font-display text-sm font-bold text-court-600 dark:bg-court-500/10 dark:text-court-400">
                {index + 1}
              </span>
              <div>
                <h2 className="font-semibold text-ink-950 dark:text-white">{principle.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{principle.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-ink-100 bg-ink-50/60 p-6 text-sm leading-relaxed text-ink-600 dark:border-ink-800 dark:bg-ink-900/40 dark:text-ink-300">
          Have a correction or a question about our editorial process? Reach out through our{" "}
          <a href="/contact" className="font-medium text-court-600 hover:underline">
            Contact page
          </a>
          .
        </div>
      </Container>
    </>
  );
}
