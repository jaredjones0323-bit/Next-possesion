import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses, and protects your personal information.`,
  alternates: { canonical: `${SITE.url}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" description="Last updated: June 1, 2026" />
      <Container size="narrow" className="prose prose-headings:font-display dark:prose-invert py-16">
        <p>
          {SITE.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy.
          This Privacy Policy explains what information we collect, how we use it, and the choices you
          have regarding your data when you visit {SITE.url}.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We collect information you provide directly, such as your email address when subscribing to
          our newsletter or submitting a contact form. We also automatically collect usage data through
          cookies and analytics tools, including pages visited, referral source, device type, and
          approximate location.
        </p>

        <h2>How We Use Information</h2>
        <ul>
          <li>To deliver and improve our content and site experience</li>
          <li>To send newsletters and updates you&apos;ve opted into</li>
          <li>To analyze site traffic and understand reader interests</li>
          <li>To respond to inquiries submitted through our contact form</li>
        </ul>

        <h2>Cookies and Tracking</h2>
        <p>
          We use cookies and similar technologies for analytics and to remember your theme preference.
          You can disable cookies through your browser settings, though some site features may not
          function as intended.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          We use third-party services for functions like email delivery (our newsletter), video
          conferencing (for consultations, once available), and site analytics. These providers may
          collect data according to their own privacy policies, which we encourage you to review.
        </p>

        <h2>Data Sharing</h2>
        <p>
          We do not sell your personal information. We may share aggregated, non-identifying data with
          analytics and advertising partners to improve our services.
        </p>

        <h2>Your Rights</h2>
        <p>
          Depending on your jurisdiction, you may have the right to access, correct, or delete your
          personal data. To exercise these rights, contact us at{" "}
          <a href="mailto:privacy@nextpossession.com">privacy@nextpossession.com</a>.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          Our site is not directed at children under 13, and we do not knowingly collect personal
          information from children.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Material changes will be reflected by
          an updated &ldquo;last updated&rdquo; date at the top of this page.
        </p>

        <h2>Contact Us</h2>
        <p>
          Questions about this policy? Reach out via our{" "}
          <a href="/contact">contact page</a>.
        </p>
      </Container>
    </>
  );
}
