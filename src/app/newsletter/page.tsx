import type { Metadata } from "next";
import { Compass, MessageSquareText, Users, Eye, Trophy } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Join The Playbook — Next Possession's weekly email covering recruiting updates, coach insights, and honest advice for players and parents.",
  alternates: { canonical: `${SITE.url}/newsletter` },
};

const TOPICS = [
  { icon: Compass, title: "Recruiting updates", body: "What's changing in how coaches recruit, and what it means for your timeline." },
  { icon: Eye, title: "Coach insights", body: "Direct, unfiltered observations from film rooms and live periods." },
  { icon: Trophy, title: "Player advice", body: "Practical, actionable guidance on development, habits, and decision-making." },
  { icon: Users, title: "Parent advice", body: "How to support a player's journey without accidentally working against it." },
  { icon: MessageSquareText, title: "Tournament observations", body: "Honest notes from the weekend's live periods and showcases." },
];

export default function NewsletterPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Playbook"
        title="The Next Possession Newsletter"
        description="One email a week. Recruiting updates, coach insights, and honest advice — no fluff, no sales pitch."
      />

      <Container className="py-16">
        <div className="mx-auto max-w-xl rounded-3xl border border-ink-100 bg-white p-10 text-center shadow-card dark:border-ink-800 dark:bg-ink-900">
          <h2 className="text-xl font-semibold text-ink-950 dark:text-white">Join for free</h2>
          <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">
            Delivered every week. Unsubscribe anytime, no hard feelings.
          </p>
          <div className="mt-6 flex justify-center">
            <NewsletterForm />
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <h2 className="text-center text-display-sm font-display font-semibold text-ink-950 dark:text-white">
            What you&apos;ll get
          </h2>
          <div className="mt-8 space-y-5">
            {TOPICS.map((topic) => (
              <div key={topic.title} className="flex gap-4 rounded-2xl border border-ink-100 bg-white p-5 dark:border-ink-800 dark:bg-ink-900">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-court-50 text-court-600 dark:bg-court-500/10 dark:text-court-400">
                  <topic.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-ink-950 dark:text-white">{topic.title}</p>
                  <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{topic.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
