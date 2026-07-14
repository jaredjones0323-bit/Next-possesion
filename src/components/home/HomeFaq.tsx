import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { buildFaqSchema } from "@/lib/schema";

const FAQS = [
  {
    question: "How does Next Possession make money?",
    answer:
      "We earn a commission when you buy through affiliate links on our site, at no extra cost to you. This never influences our ratings — see our Affiliate Disclosure and Editorial Guidelines for details.",
  },
  {
    question: "Do you actually test every product you review?",
    answer:
      "Yes. Every product featured in a review or comparison guide is purchased or provided for testing and used through our standardized protocol. We detail our exact process on the How We Test page.",
  },
  {
    question: "How often is content updated?",
    answer:
      "Buying guides are reviewed at least quarterly and updated sooner if a product is discontinued, a price changes significantly, or a better alternative launches. Check the 'Updated' date at the top of any article.",
  },
  {
    question: "Can brands pay for a better review?",
    answer:
      "No. We do not accept payment in exchange for positive coverage, and our testers do not know embargo pricing until after scoring is complete. Sponsored content, if ever published, is always clearly labeled.",
  },
];

export function HomeFaq() {
  return (
    <section className="py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(FAQS)) }}
      />
      <Container size="narrow">
        <SectionHeading eyebrow="Questions" title="Frequently asked questions" align="center" className="mx-auto" />
        <div className="mt-10">
          <Accordion items={FAQS} />
        </div>
      </Container>
    </section>
  );
}
