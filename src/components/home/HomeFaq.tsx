import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { buildFaqSchema } from "@/lib/schema";

const FAQS = [
  {
    question: "Is Next Possession a training company or recruiting service?",
    answer:
      "No. We're an independent basketball education platform — free articles and honest advice written from a coach's perspective. We do plan to offer optional paid services like film breakdowns and recruiting evaluations, but the free content is never gated behind them and never shaped to upsell them.",
  },
  {
    question: "Who writes the content?",
    answer:
      "Next Possession is founded and written by Jared Jones, a high school and AAU basketball coach with over a decade of experience evaluating players and advising families through recruiting. See the About page for the full team.",
  },
  {
    question: "Is this content specific to one region or level of basketball?",
    answer:
      "The advice is written to apply broadly — AAU, high school, and college recruiting operate similarly across most of the country. Where rules or norms vary regionally (like state association guidelines), we note it directly in the article.",
  },
  {
    question: "Do you guarantee recruiting outcomes or scholarships?",
    answer:
      "No, and we're skeptical of anyone who does. Recruiting outcomes depend on a player's ability, fit, and circumstances that no publication or service can guarantee. Our goal is to help players and families make better decisions — not to promise a specific result.",
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
