import type { Metadata } from "next";
import Image from "next/image";
import { Compass, ShieldCheck, MessageSquareText, Users } from "lucide-react";
import { authors } from "@/data/authors";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${SITE.name}'s mission, philosophy, and the coach behind it.`,
  alternates: { canonical: `${SITE.url}/about` },
};

const VALUES = [
  {
    icon: MessageSquareText,
    title: "A coach's honesty",
    body: "Everything reads like a coach telling a player what they actually need to hear — not a motivational influencer, not a training company's sales pitch.",
  },
  {
    icon: ShieldCheck,
    title: "No pay-to-play",
    body: "We don't accept payment for favorable coverage, and we're not a recruiting service in disguise. The free content is never shaped to upsell anything.",
  },
  {
    icon: Compass,
    title: "Decision-making over hype",
    body: "We'd rather teach a player to think clearly about their next decision than chase rankings, offers, or follower counts.",
  },
  {
    icon: Users,
    title: "Built from the sideline",
    body: "Every article comes from real coaching and recruiting experience — not secondhand research or generic advice.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Honest advice from a real coach"
        description="Next Possession is a basketball education platform for AAU and high school players, and the families navigating the road to college basketball alongside them."
      />

      <Container className="py-16">
        <div className="mx-auto max-w-2xl rounded-3xl bg-ink-950 p-10 text-center text-white sm:p-14">
          <p className="text-display-sm font-display font-semibold leading-tight">
            &ldquo;You cannot control the last possession.
            <br />
            You can only control the next one.&rdquo;
          </p>
          <p className="mt-6 text-sm text-white/60">
            Whether a player had a bad game, got cut, isn&apos;t being recruited, or wants to maximize
            their opportunities — the focus is always on what comes next.
          </p>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2">
          {VALUES.map((value) => (
            <div key={value.title} className="rounded-2xl border border-ink-100 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-court-50 text-court-600 dark:bg-court-500/10 dark:text-court-400">
                <value.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-ink-950 dark:text-white">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{value.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-display-sm font-display font-semibold text-ink-950 dark:text-white">
              Our mission
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                "Help basketball players make better decisions throughout their basketball journey.",
                "Provide transparency around how recruiting actually works.",
                "Teach players what coaches actually value — habits, IQ, and character, not just highlights.",
                "Help families avoid the recruiting mistakes we see over and over.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-ink-600 dark:text-ink-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-court-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-ink-100 bg-white p-8 dark:border-ink-800 dark:bg-ink-900">
            <p className="text-sm font-bold uppercase tracking-wide text-court-600 dark:text-court-400">
              What we&apos;re not
            </p>
            <p className="mt-3 text-ink-600 dark:text-ink-300">
              Next Possession is not another basketball training company, and it&apos;s not a
              motivational influencer account. It&apos;s a trusted source for honest advice — the
              kind a good coach gives a player who&apos;s actually trying to get better.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-display-sm font-display font-semibold text-ink-950 dark:text-white">
            Who&apos;s behind it
          </h2>
          <div className={authors.length > 1 ? "mt-8 grid gap-6 sm:grid-cols-2" : "mt-8 grid gap-6"}>
            {authors.map((author) => (
              <a
                key={author.slug}
                href={`/authors/${author.slug}`}
                className="flex gap-5 rounded-2xl border border-ink-100 bg-white p-6 transition-shadow hover:shadow-card dark:border-ink-800 dark:bg-ink-900"
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                  <Image src={author.avatar} alt={author.name} fill sizes="64px" className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-ink-950 dark:text-white">{author.name}</p>
                  <p className="text-sm text-ink-400">{author.role}</p>
                  <p className="mt-2 line-clamp-2 text-sm text-ink-500 dark:text-ink-400">{author.bio}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
