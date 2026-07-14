import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Editorial Guidelines",
  description: `The editorial standards and fact-checking policy behind every ${SITE.name} review.`,
  alternates: { canonical: `${SITE.url}/editorial-guidelines` },
};

const PRINCIPLES = [
  {
    title: "Independence from advertisers",
    body: "Ratings are determined solely by testing results. No brand or retailer can purchase a higher score, and our testers score products before commission rates are factored in.",
  },
  {
    title: "Hands-on testing required",
    body: "We do not publish a rating or recommendation for any product our team hasn't personally tested using our documented methodology.",
  },
  {
    title: "Transparent methodology",
    body: "Every review discloses how a product was tested, for how long, and by whom, so readers can judge our process for themselves.",
  },
  {
    title: "Regular re-verification",
    body: "Buying guides are reviewed at least quarterly. If a product is discontinued or a better alternative emerges, we update the guide promptly.",
  },
  {
    title: "Correction policy",
    body: "If we get something wrong, we fix it. Material corrections are noted with an updated date and, where relevant, a visible correction note.",
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
          For details on how individual products are tested and scored, see{" "}
          <a href="/how-we-test" className="font-medium text-court-600 hover:underline">
            How We Test
          </a>
          . For our affiliate relationships, see our{" "}
          <a href="/affiliate-disclosure" className="font-medium text-court-600 hover:underline">
            Affiliate Disclosure
          </a>
          .
        </div>
      </Container>
    </>
  );
}
