import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms and conditions governing your use of ${SITE.name}.`,
  alternates: { canonical: `${SITE.url}/terms` },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Service" description="Last updated: June 1, 2026" />
      <Container size="narrow" className="prose prose-headings:font-display dark:prose-invert py-16">
        <p>
          By accessing or using {SITE.url} (the &ldquo;Site&rdquo;), you agree to be bound by these
          Terms of Service. If you do not agree, please do not use the Site.
        </p>

        <h2>Use of Content</h2>
        <p>
          All content on this Site, including articles, guides, graphics, and logos, is owned by{" "}
          {SITE.name} or its licensors and is protected by copyright and other intellectual property
          laws. You may not reproduce, distribute, or create derivative works from our content without
          written permission, except for personal, non-commercial use with proper attribution.
        </p>

        <h2>No Professional Advice</h2>
        <p>
          Content on this Site is for informational and educational purposes only and does not
          constitute legal, NCAA compliance, medical, or professional advice. Recruiting rules and
          eligibility requirements can vary and change — verify current rules with the NCAA, NAIA, or
          relevant governing body, and consult a qualified professional for guidance specific to your
          situation.
        </p>

        <h2>No Guarantee of Outcomes</h2>
        <p>
          {SITE.name} does not guarantee any specific recruiting outcome, scholarship offer, roster
          spot, or athletic result from following advice published on this Site or from any service we
          offer. Outcomes depend on factors outside our control, including a player&apos;s ability,
          fit, and individual circumstances.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          {SITE.name} is not liable for any direct, indirect, incidental, or consequential damages
          arising from your use of the Site or reliance on any information provided.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          Our Site contains links to third-party websites. We are not responsible for the content,
          policies, or practices of any third-party sites.
        </p>

        <h2>Changes to These Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Continued use of the Site after
          changes are posted constitutes acceptance of the revised Terms.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms are governed by the laws of the jurisdiction in which {SITE.name} operates,
          without regard to conflict of law principles.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these Terms? Reach out via our <a href="/contact">contact page</a>.
        </p>
      </Container>
    </>
  );
}
