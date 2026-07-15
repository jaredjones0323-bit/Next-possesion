import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, FlaskConical, Users, Target } from "lucide-react";
import { authors } from "@/data/authors";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${SITE.name}'s mission, editorial team, and testing standards.`,
  alternates: { canonical: `${SITE.url}/about` },
};

const VALUES = [
  {
    icon: FlaskConical,
    title: "Hands-on testing",
    body: "Every product we recommend is bought or provided for testing and used through our standardized on-court protocol.",
  },
  {
    icon: ShieldCheck,
    title: "Editorial independence",
    body: "Affiliate revenue never determines a rating. Testers score products blind to retail pricing.",
  },
  {
    icon: Target,
    title: "Data over hype",
    body: "We measure what we can — traction cycles, rim shake, shot volume — instead of relying on marketing copy.",
  },
  {
    icon: Users,
    title: "Built by players and coaches",
    body: "Our editorial team has combined decades of coaching, playing, and strength & conditioning experience.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="We test basketball gear so you don't have to guess"
        description="Next Possession is an independent publication covering basketball shoes, hoops, training equipment, and wearables — built by coaches, trainers, and players who were tired of marketing-driven reviews."
      />

      <Container className="py-16">
        <div className="grid gap-6 sm:grid-cols-2">
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

        <div className="mt-20">
          <h2 className="text-display-sm font-display font-semibold text-ink-950 dark:text-white">
            Meet the editorial team
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {authors.map((author) => (
              <a
                key={author.slug}
                href={`/authors/${author.slug}`}
                className="rounded-2xl border border-ink-100 bg-white p-6 text-center transition-shadow hover:shadow-card dark:border-ink-800 dark:bg-ink-900"
              >
                <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
                  <Image src={author.avatar} alt={author.name} fill sizes="80px" className="object-cover" />
                </div>
                <p className="mt-4 font-semibold text-ink-950 dark:text-white">{author.name}</p>
                <p className="text-sm text-ink-400">{author.role}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-3xl bg-ink-950 p-10 text-white sm:p-14">
          <h2 className="text-display-sm font-display font-semibold">Our mission</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-white/70">
            Basketball gear is a real investment — for parents outfitting a kid&apos;s first season, for
            rec league players buying their fifth pair of shoes, for coaches building out a gym.
            Next Possession exists to make those decisions easier with rigorous, independent testing
            and buying guides you can actually trust.
          </p>
        </div>
      </Container>
    </>
  );
}
