import type { Metadata } from "next";
import { Mail, MessageSquare, Briefcase } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with the ${SITE.name} editorial team, or reach out about partnerships and corrections.`,
  alternates: { canonical: `${SITE.url}/contact` },
};

const CHANNELS = [
  {
    icon: MessageSquare,
    title: "General inquiries",
    body: "Questions, feedback, or story ideas.",
    email: "hello@nextpossession.com",
  },
  {
    icon: Briefcase,
    title: "Partnerships",
    body: "Brand and retailer partnership inquiries.",
    email: "partners@nextpossession.com",
  },
  {
    icon: Mail,
    title: "Corrections",
    body: "Spot an error? Let us know and we'll investigate.",
    email: "corrections@nextpossession.com",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Have a question about a review, a correction to flag, or a partnership to discuss? We read every message."
      />

      <Container className="grid gap-12 py-16 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {CHANNELS.map((channel) => (
            <div key={channel.title} className="flex gap-4 rounded-2xl border border-ink-100 bg-white p-5 dark:border-ink-800 dark:bg-ink-900">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-court-50 text-court-600 dark:bg-court-500/10 dark:text-court-400">
                <channel.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-ink-950 dark:text-white">{channel.title}</p>
                <p className="text-sm text-ink-500 dark:text-ink-400">{channel.body}</p>
                <a href={`mailto:${channel.email}`} className="mt-1 inline-block text-sm font-medium text-court-600 hover:underline">
                  {channel.email}
                </a>
              </div>
            </div>
          ))}
        </div>

        <ContactForm />
      </Container>
    </>
  );
}
