import type { Metadata } from "next";
import { BookOpen, Heart, Film, Mail, Compass, Users, ClipboardCheck, Video, MessagesSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Resources",
  description: "Digital guides and coaching services from Next Possession — recruiting playbooks, film breakdowns, and one-on-one recruiting consultations.",
  alternates: { canonical: `${SITE.url}/resources` },
};

const GUIDES = [
  { icon: Compass, title: "Recruiting Playbook", body: "A complete walkthrough of how recruiting actually works, level by level, timeline by timeline." },
  { icon: Heart, title: "Parent Playbook", body: "How to support a player through recruiting without accidentally getting in the way." },
  { icon: Film, title: "Highlight Film Guide", body: "What to include, what to cut, and how to structure film that actually gets watched." },
  { icon: Mail, title: "Email Templates", body: "Proven templates for reaching out to college coaches — first contact through follow-up." },
  { icon: BookOpen, title: "Exposure Guide", body: "How to get seen by the right coaches without wasting a summer chasing the wrong events." },
  { icon: Users, title: "AAU Guide", body: "A framework for evaluating and choosing the right AAU team at every age." },
];

const SERVICES = [
  {
    icon: ClipboardCheck,
    title: "Recruiting Evaluation",
    body: "Submit film, a resume, stats, and a transcript. Get back an honest evaluation, a realistic college-level projection, and a concrete action plan.",
  },
  {
    icon: Video,
    title: "Film Breakdown",
    body: "A coach reviews a full game — not just highlights — and delivers direct feedback on strengths, weaknesses, and specific areas to improve.",
  },
  {
    icon: MessagesSquare,
    title: "Recruiting Consultation",
    body: "A 45-60 minute video session with the player and family to build a personalized recruiting strategy.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Guides and coaching, built for the journey"
        description="Digital guides and one-on-one services are in development. Join the list below and be the first to know when they launch."
      />

      <Container className="py-16">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-display-sm font-display font-semibold text-ink-950 dark:text-white">
            Digital Guides
          </h2>
          <Badge variant="outline">Coming soon</Badge>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDES.map((guide) => (
            <div key={guide.title} className="rounded-2xl border border-ink-100 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-court-50 text-court-600 dark:bg-court-500/10 dark:text-court-400">
                <guide.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-ink-950 dark:text-white">{guide.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{guide.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex items-center justify-between gap-4">
          <h2 className="text-display-sm font-display font-semibold text-ink-950 dark:text-white">
            Coaching Services
          </h2>
          <Badge variant="outline">Coming soon</Badge>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div key={service.title} className="rounded-2xl border border-ink-100 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-900 text-white dark:bg-white dark:text-ink-950">
                <service.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-ink-950 dark:text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{service.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-ink-950 p-10 text-center text-white sm:p-14">
          <h2 className="text-display-sm font-display font-semibold">Be first in line</h2>
          <p className="mx-auto mt-3 max-w-md text-white/70">
            Join the newsletter to get notified the moment guides and services launch — plus early
            access pricing for subscribers.
          </p>
          <div className="mt-8 flex justify-center">
            <NewsletterForm dark />
          </div>
        </div>
      </Container>
    </>
  );
}
