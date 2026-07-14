import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: `How ${SITE.name} uses affiliate links and how it affects (and doesn't affect) our reviews.`,
  alternates: { canonical: `${SITE.url}/affiliate-disclosure` },
};

export default function AffiliateDisclosurePage() {
  return (
    <>
      <PageHeader eyebrow="Transparency" title="Affiliate Disclosure" description="Last updated: June 1, 2026" />
      <Container size="narrow" className="py-16">
        <div className="mb-10 flex items-start gap-3 rounded-2xl border border-court-100 bg-court-50/60 p-5 dark:border-court-500/20 dark:bg-court-500/5">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-court-600 dark:text-court-400" />
          <p className="text-sm leading-relaxed text-ink-700 dark:text-ink-200">
            In short: we may earn a commission when you buy through links on our site. It costs you
            nothing extra, and it never influences which products we recommend or how we rate them.
          </p>
        </div>

        <div className="prose prose-headings:font-display dark:prose-invert max-w-none">
          <h2>How Affiliate Links Work</h2>
          <p>
            {SITE.name} is a reader-supported publication. Some links on our Site — including product
            names, images, and &ldquo;Check Price&rdquo; buttons — are affiliate links. If you click one
            of these links and make a purchase, we may earn a commission from the retailer at no
            additional cost to you.
          </p>

          <h2>Our Editorial Independence</h2>
          <p>
            Our testing and rating process is completely separate from our affiliate relationships.
            Testers score products before final pricing or commission structures are considered, and
            no retailer or brand can pay for a better review, higher rating, or Editor&apos;s Choice
            badge. If a product performs poorly in testing, we say so — regardless of affiliate
            potential.
          </p>

          <h2>Which Retailers We Work With</h2>
          <p>
            We participate in affiliate programs with major retailers and brands in the basketball
            equipment space. Affiliate links are typically identified by the retailer name near
            &ldquo;Check Price&rdquo; buttons throughout our articles.
          </p>

          <h2>Products We Purchase vs. Receive</h2>
          <p>
            Most products we test are purchased at full retail price using our own budget. In some
            cases, brands provide review units at no cost — when this happens, it has no bearing on
            the outcome of our review, and we test provided units with the same rigor as purchased
            ones.
          </p>

          <h2>Questions</h2>
          <p>
            If you have questions about our affiliate relationships or editorial process, reach out via
            our <a href="/contact">contact page</a> or read our{" "}
            <a href="/editorial-guidelines">Editorial Guidelines</a>.
          </p>
        </div>
      </Container>
    </>
  );
}
